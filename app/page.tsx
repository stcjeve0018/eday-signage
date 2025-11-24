import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ServicesSection } from "@/components/home/ServicesSection"; // 引入新組件
import { DynamicCTA } from "@/components/home/DynamicCTA";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden bg-neutral-950">
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex flex-col justify-center px-6 md:px-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto w-full z-10">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200 hover:text-white transition-colors duration-500">We Make</span>
            <span className="block text-red-600">Signage</span>
            <span className="block text-white">Stand Out.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-medium border-l-4 border-red-600 pl-6 mb-10">
            一代廣告 Eday — 
            專注於將您的品牌視覺轉化為實體震撼。
          </p>
          <div className="flex gap-4">
            <Link href="/estimate">
              <Button className="rounded-full text-lg px-8 py-6 shadow-red-600/20">立即估價</Button>
            </Link>
            <Link href="/cases">
              <Button variant="outline" className="rounded-full text-lg px-8 py-6">作品案例</Button>
            </Link>
          </div>
        </div>
        {/* 背景大字 */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20vw] font-black text-neutral-900 -z-0 select-none opacity-50 pointer-events-none">
          EDAY
        </div>
      </section>

      {/* 2. Brand Wall (4 Rows) */}
      <BrandMarquee />

      {/* 3. Who We Are Section (獨立區塊，修正文字顏色與平衡) */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-neutral-900 relative border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 左側：大標題與簡介 */}
          <div>
            <span className="text-blue-500 font-bold tracking-widest mb-4 block">ABOUT US</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white mb-8 tracking-tighter leading-none">
              WHO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">WE ARE</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
               {/* 修正：文字改為 gray-300 確保在深色背景上的可讀性 */}
              <p>
                <strong className="text-white text-xl block mb-2">擁有三十年經驗的招牌職人團隊。</strong>
                我們不只是製作招牌，更是您品牌的建構者。從「全方位設計規劃」到單一「製作執行」，無論是全套服務還是維修保養，Eday 都能完美配合。
              </p>
              <p>
                我們的自設工廠讓我們能精準控制品質與交期，這就是為什麼許多連鎖品牌選擇信任我們。
              </p>
            </div>
            <div className="mt-10">
               <Link href="/about" className="inline-flex items-center text-white border-b border-white pb-1 hover:text-red-500 hover:border-red-500 transition-colors">
                 MORE ABOUT US <span className="ml-2">→</span>
               </Link>
            </div>
          </div>

          {/* 右側：視覺平衡圖片 (模擬圖9的結構) */}
          <div className="relative">
             <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-800">
               <img src="https://placehold.co/800x600/111/333?text=Workshop" alt="職人精神" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             {/* 裝飾框線 */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral-700 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Featured Works (修正 Grid 排版) */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="px-6 md:px-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-4 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
            Featured <span className="text-red-600">Works</span>
          </h2>
          <Link href="/cases" className="text-neutral-400 hover:text-white border-b border-neutral-700 pb-1 transition-colors">
            VIEW ALL CASES →
          </Link>
        </div>
        
        {/* Grid Container: 設置為 3 欄，間距設為 gap-1 讓圖片緊貼 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 max-w-7xl mx-auto">
           
           {/* Case 1 (左側小圖) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-1">
              <img src="https://placehold.co/800x800/111/333" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">津本鍋物</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">店面整體規劃</p>
              </div>
           </div>

           {/* Case 2 (中間大圖 - 跨 2 欄) */}
           {/* 注意這裡：md:col-span-2 和 aspect-video (16:9) 或 aspect-[2/1] */}
           <div className="group relative aspect-video md:aspect-auto md:h-full bg-neutral-900 overflow-hidden cursor-pointer md:col-span-2">
              <img src="https://placehold.co/1600x900/222/444" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">NIKE 旗艦店</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">戶外巨型燈箱結構</p>
              </div>
           </div>

           {/* Case 3 (下方小圖 - 為了補齊網格，這裡示範再加一個，實際專案可依需求調整) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-1">
              <img src="https://placehold.co/800x800/333/555" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Gogoro 換電站</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">指標系統設計</p>
              </div>
           </div>

            {/* Case 4 (右下小圖 - 補齊網格用) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-2 md:aspect-[2/1]">
              <img src="https://placehold.co/1200x600/444/666" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">信義區百貨空橋</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">大型結構廣告</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <DynamicCTA />
      </section>

    </main>
  );
}