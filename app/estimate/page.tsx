import { EstimateForm } from "@/components/estimate/EstimateForm";

export default function EstimatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">線上即時估價</h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
          30 秒輸入尺寸，立即獲得招牌製作的預算範圍。
        </p>
      </div>
      <EstimateForm />
    </div>
  );
}