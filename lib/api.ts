import { EstimateRequestBody, EstimateResponse } from "./types";

export async function postEstimate(data: EstimateRequestBody): Promise<EstimateResponse> {
  try {
    const res = await fetch("/api/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // 這裡我們不 throw error，而是解析 JSON 並回傳，
    // 因為後端會用 ok: false 回傳 400/500 錯誤
    const json = await res.json();
    return json as EstimateResponse;
  } catch (error) {
    // 處理網路層級的斷線或 fetch 失敗
    return {
      ok: false,
      error: "NETWORK_ERROR",
      message: error instanceof Error ? error.message : "Unknown network error",
    };
  }
}