"use client";

import { useState } from "react";
import { EstimateRequestBody, EstimateResponse } from "@/lib/types";
import { postEstimate } from "@/lib/api";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { EstimateResultDisplay } from "./EstimateResult";

// 選項資料（可擴充）
const SIGN_TYPES = [
  { label: "請選擇招牌類型", value: "" },
  { label: "無接縫招牌", value: "無接縫招牌" },
  { label: "中空板招牌", value: "中空板招牌" },
  { label: "壓克力立體字", value: "壓克力立體字" },
  { label: "金屬立體字", value: "金屬立體字" },
  { label: "千納論/超級字", value: "千納論" },
];

const LIGHTING_OPTS = [
  { label: "不需燈光", value: "None" },
  { label: "內置燈箱 (Lightbox)", value: "Lightbox" },
  { label: "外投射燈", value: "Spotlight" },
  { label: "背光模組", value: "Backlight" },
];

const LOCATION_OPTS = [
  { label: "戶外 (Outdoor)", value: "Outdoor" },
  { label: "室內 (Indoor)", value: "Indoor" },
];

export function EstimateForm() {
  const [formData, setFormData] = useState<EstimateRequestBody>({
    width_cm: 0,
    height_cm: 0,
    sign_type: "",
    lighting: "None",
    location_type: "Outdoor",
    customer_name: "",
    customer_mobile: "",
    note: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<EstimateResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes("_cm") ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(null);

    // 簡易前端驗證
    if (formData.width_cm <= 0 || formData.height_cm <= 0) {
      setResponse({ ok: false, error: "INVALID_DIMENSION", message: "請輸入有效的長寬尺寸" });
      setIsLoading(false);
      return;
    }

    const res = await postEstimate(formData);
    setResponse(res);
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* 左側：表單區域 */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">填寫製作需求</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="寬度 (公分)"
              name="width_cm"
              type="number"
              placeholder="例如：300"
              value={formData.width_cm || ""}
              onChange={handleChange}
              required
            />
            <Input
              label="高度 (公分)"
              name="height_cm"
              type="number"
              placeholder="例如：60"
              value={formData.height_cm || ""}
              onChange={handleChange}
              required
            />
          </div>

          <Select
            label="招牌類型"
            name="sign_type"
            options={SIGN_TYPES}
            value={formData.sign_type}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Select
              label="燈光需求"
              name="lighting"
              options={LIGHTING_OPTS}
              value={formData.lighting}
              onChange={handleChange}
            />
            <Select
              label="安裝位置"
              name="location_type"
              options={LOCATION_OPTS}
              value={formData.location_type}
              onChange={handleChange}
            />
          </div>

          <div className="border-t border-gray-800 pt-4 mt-4">
            <p className="text-sm text-gray-400 mb-4">聯絡資訊 (非必填，填寫可建立雲端紀錄)</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="稱呼 / 店名"
                name="customer_name"
                placeholder="王先生 / 快樂早餐店"
                value={formData.customer_name}
                onChange={handleChange}
              />
              <Input
                label="聯絡電話"
                name="customer_mobile"
                placeholder="0912-345-678"
                value={formData.customer_mobile}
                onChange={handleChange}
              />
            </div>
            <Textarea
              label="備註需求"
              name="note"
              placeholder="例如：需要吊車、舊招牌需拆除..."
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" isLoading={isLoading} className="w-full text-lg">
            立即計算價格
          </Button>
        </form>
      </div>

      {/* 右側：結果顯示區域 */}
      <div className="flex flex-col justify-start">
        <EstimateResultDisplay response={response} />
      </div>
    </div>
  );
}