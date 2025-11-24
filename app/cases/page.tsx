import { CaseItem } from "@/lib/types";
import { Card } from "@/components/ui/Card";

// Mock Data
const MOCK_CASES: CaseItem[] = [
  { id: "1", title: "日式居酒屋門面", type: "立體字＋燈箱", location: "台北市大安區", description: "運用舊木紋搭配暖色系燈光，營造溫暖氛圍。", imageUrl: "https://placehold.co/600x400/111/444?text=Case+1" },
  { id: "2", title: "科技公司形象牆", type: "金屬立體字", location: "新竹科學園區", description: "髮絲紋不鏽鋼字體，展現俐落現代感。", imageUrl: "https://placehold.co/600x400/111/444?text=Case+2" },
  { id: "3", title: "文青咖啡廳", type: "霓虹燈造型", location: "台中市西區", description: "復古霓虹燈管，成為網美打卡熱點。", imageUrl: "https://placehold.co/600x400/111/444?text=Case+3" },
];

export default function CasesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">精選案例</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CASES.map((item) => (
          <div key={item.id} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all">
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
               {/* 之後接真實圖片 */}
               <div className="w-full h-full flex items-center justify-center text-gray-600 bg-gray-800 group-hover:bg-gray-700 transition-colors">
                 [ 案例圖片 ]
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-900/30 rounded">{item.type}</span>
                <span className="text-gray-500 text-xs">{item.location}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}