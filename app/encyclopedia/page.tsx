import { EncyclopediaEntry } from "@/lib/types";

const MOCK_ENTRIES: EncyclopediaEntry[] = [
  { id: "1", slug: "seamless-sign", title: "無接縫招牌", summary: "抗颱性強、版面平整，適合大型戶外廣告。" },
  { id: "2", slug: "acrylic-letters", title: "壓克力立體字", summary: "質感細膩、透光性佳，適合室內或精緻店面。" },
  { id: "3", slug: "metal-letters", title: "金屬腐蝕招牌", summary: "耐候性高、具工業風格，常用於門牌或公司形象牆。" },
];

export default function EncyclopediaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">招牌百科</h1>
      <p className="text-gray-400 mb-8">深入了解各種材質特性，找到最適合您的選擇。</p>
      
      <div className="space-y-4">
        {MOCK_ENTRIES.map((entry) => (
          <div key={entry.id} className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all cursor-pointer">
            <h2 className="text-xl font-bold text-white mb-2">{entry.title}</h2>
            <p className="text-gray-400">{entry.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}