// app/api/estimate/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge'; 

type EstimateRequestBody = {
  width_cm: number;
  height_cm: number;
  lighting?: string;
  location_type?: string;
  sign_type?: string;
  customer_name?: string;
  customer_mobile?: string;
  note?: string;
};


export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<EstimateRequestBody>;

    const {
      width_cm,
      height_cm,
      lighting,
      location_type,
      sign_type,
      customer_name,
      customer_mobile,
      note,
    } = body;

    // 1) 基本參數檢查
    if (!width_cm || !height_cm) {
      return NextResponse.json(
        {
          ok: false,
          error: "MISSING_DIMENSION",
          message: "請提供 width_cm 與 height_cm（公分）。",
        },
        { status: 400 }
      );
    }

    const width = Number(width_cm);
    const height = Number(height_cm);

    if (Number.isNaN(width) || Number.isNaN(height)) {
      return NextResponse.json(
        {
          ok: false,
          error: "INVALID_DIMENSION",
          message: "尺寸必須是數字（公分）。",
        },
        { status: 400 }
      );
    }

    // 2) 超簡單估價公式（之後可以一起調整）
    const areaM2 = (width * height) / 10000; // cm² -> m²
    const baseRate = 6000; // 每平方公尺基礎單價（之後跟師傅調整）

    let lightingMultiplier = 1;
    switch (lighting) {
      case "Lightbox":
      case "有燈":
        lightingMultiplier = 1.4;
        break;
      case "背光":
        lightingMultiplier = 1.3;
        break;
      case "正面發光":
        lightingMultiplier = 1.2;
        break;
      default:
        lightingMultiplier = 1.0; // 無燈
    }

    let locationMultiplier = 1;
    switch (location_type) {
      case "高樓外牆":
        locationMultiplier = 1.6;
        break;
      case "屋頂":
        locationMultiplier = 1.4;
        break;
      case "Outdoor":
      case "室外":
      case "騎樓 / 戶外":
        locationMultiplier = 1.2;
        break;
      default:
        locationMultiplier = 1.0; // 室內 / 一般店面
    }

    const basePrice = areaM2 * baseRate * lightingMultiplier * locationMultiplier;

    const estimateMin = Math.round(basePrice * 0.85);
    const estimateMax = Math.round(basePrice * 1.15);

    // 3) 準備 Airtable 參數
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_ESTIMATES_TABLE || "Estimate Records";

    if (!token || !baseId) {
      // 環境變數沒設好時，至少先回估價
      return NextResponse.json(
        {
          ok: true,
          estimate: {
            min: estimateMin,
            max: estimateMax,
            currency: "TWD",
          },
          warning: "Airtable 環境變數未設定，尚未寫入資料庫。",
        },
        { status: 200 }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}`;

    // 4) 根據你現在 Airtable 欄位名稱組 fields
    const fields: Record<string, any> = {
      "Width (cm)": width,
      "Height (cm)": height,
      Lighting: lighting || "None",
      "Location Type": location_type || "未填寫",
      "Estimated Min": estimateMin,
      "Estimated Max": estimateMax,
      Note: note || "",
    };

    if (sign_type) fields["Sign Type"] = sign_type;
    if (customer_name) fields["Customer Name"] = customer_name;
    if (customer_mobile) fields["Customer Mobile"] = customer_mobile;

    const airtablePayload = {
      records: [{ fields }],
    };

    let airtableRecordId: string | null = null;

    try {
      const res = await fetch(airtableUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtablePayload),
      });

      if (!res.ok) {
        const text = await res.text();

        // 🔍 暫時直接把 Airtable 的錯誤丟回給前端，方便除錯
        return NextResponse.json(
          {
            ok: false,
            error: "AIRTABLE_ERROR",
            status: res.status,
            body: text,
          },
          { status: 500 }
        );
      } else {
        const data = await res.json();
        airtableRecordId = data.records?.[0]?.id ?? null;
      }
    } catch (err: any) {
      // 呼叫 fetch 本身就炸掉的情況
      return NextResponse.json(
        {
          ok: false,
          error: "AIRTABLE_FETCH_ERROR",
          message: String(err),
        },
        { status: 500 }
      );
    }


    // 5) 回傳給前端
    return NextResponse.json(
      {
        ok: true,
        estimate: {
          min: estimateMin,
          max: estimateMax,
          currency: "TWD",
        },
        airtableRecordId,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error in /api/estimate:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "INTERNAL_ERROR",
      },
      { status: 500 }
    );
  }
}

// 簡單 GET，方便你在瀏覽器測試
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Eday Signage estimate API is alive.",
  });
}
