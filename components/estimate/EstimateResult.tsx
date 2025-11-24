import { EstimateResponse } from "@/lib/types";

export function EstimateResultDisplay({ response }: { response: EstimateResponse | null }) {
  if (!response) {
    return (
      <div className="h-full flex items-center justify-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 border-dashed min-h-[400px]">
        <div className="text-center text-gray-500">
          <p className="text-6xl mb-4">🧮</p>
          <p className="text-lg">請在左側輸入尺寸與需求<br />系統將自動為您估算價格區間</p>
        </div>
      </div>
    );
  }

  if (!response.ok) {
    // 錯誤處理
    const errorMap: Record<string, string> = {
      MISSING_DIMENSION: "請務必輸入寬度與高度。",
      INVALID_DIMENSION: "尺寸數值不正確，請重新輸入。",
      AIRTABLE_ERROR: "系統資料庫連線異常，請稍後再試。",
    };

    return (
      <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-red-400 mb-2">估價失敗</h3>
        <p className="text-gray-300">
          {errorMap[response.error] || response.message || "發生未知錯誤，請聯繫客服。"}
        </p>
      </div>
    );
  }

  // 成功顯示
  const { estimate, airtableRecordId, warning } = response;
  
  return (
    <div className="bg-gradient-to-br from-emerald-900/40 to-gray-900 border border-emerald-500/30 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* 裝飾背景 */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-1">預估報價區間</h3>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-5xl font-bold text-white tracking-tight">
          ${estimate.min.toLocaleString()}
        </span>
        <span className="text-gray-400 text-xl">~</span>
        <span className="text-4xl font-bold text-gray-300">
          ${estimate.max.toLocaleString()}
        </span>
        <span className="text-gray-500 ml-2">TWD</span>
      </div>

      <div className="space-y-4 border-t border-gray-700/50 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">估價單號</span>
          <span className="font-mono text-emerald-400">{airtableRecordId || "未儲存"}</span>
        </div>
        
        {warning && (
          <div className="bg-yellow-900/30 text-yellow-500 text-xs p-3 rounded">
            注意：{warning}
          </div>
        )}

        <div className="bg-gray-800/50 p-4 rounded-lg text-sm text-gray-400 leading-relaxed mt-4">
          <p>此價格僅供參考，實際報價可能因現場安裝難度（如高空作業、特殊腳架）、材質選用差異而有所調整。建議您保留此單號，直接聯繫我們進行場勘。</p>
        </div>
      </div>

      <div className="mt-8">
        <button 
          className="w-full bg-[#06c755] hover:bg-[#05b64b] text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          onClick={() => alert("LINE 整合開發中，請先截圖此畫面！")}
        >
          {/* LINE Icon SVG */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.87 1.62 5.43 4.19 7.04.18.11.28.32.22.53l-.47 1.77c-.1.37.33.66.62.42l2.58-2.14c.16-.13.36-.18.57-.14 1.25.26 2.56.26 3.82 0 5.52 0 10-3.92 10-8.75S17.52 2 12 2z"/></svg>
          傳送結果到 LINE (Demo)
        </button>
      </div>
    </div>
  );
}