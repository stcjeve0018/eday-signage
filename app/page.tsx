import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ServicePills } from "@/components/home/ServicePills";
import { DynamicCTA } from "@/components/home/DynamicCTA";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden">
      
      {/* 1. Hero Section: 巨大的標題與輪播 (這裡簡化輪播為靜態圖+動畫標題) */}
      <section className="relative h-[85vh] flex flex-col justify-center px-6 md:px-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
            <span className="block text-outline-white hover:text-white transition-colors duration-500">We Make</span>
            <span className="block text-red-600">Signage</span>
            <span className="block text-white">Stand Out.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-medium border-l-4 border-red-600 pl-6 mb-10">
            一代廣告 Eday — 
            專注於將您的品牌視覺轉化為實體震撼。
          </p>
          <div className="flex gap-4">
            <Link href="/cases">
              <Button className="rounded-full text-lg px-8 py-6">VIEW WORK</Button>
            </Link>
          </div>
        </div>
        
        {/* 裝飾用的巨大背景字 */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-black text-neutral-900 -z-10 select-none opacity-50">
          EDAY
        </div>
      </section>

      {/* 2. 品牌牆 Marquee */}
      <BrandMarquee />

      {/* 3. Who We Are + Services (雙欄佈局) */}
      <section className="py-24 px-6 md:px-20 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 左側：WE ARE (Why Us) */}
          <div className="sticky top-24">
            <h2 className="text-5xl font-black uppercase text-blue-600 mb-8 tracking-tighter">
              WHO WE ARE
            </h2>
            <h3 className="text-3xl font-bold text-white mb-6">
              擁有三十年經驗的<br/>招牌職人團隊。
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              我們不只是製作招牌，更是您品牌的建構者。從「全方位設計規劃」到單一「製作執行」，無論是全套服務還是維修保養，Eday 都能完美配合。
              <br/><br/>
              我們的自設工廠讓我們能精準控制品質與交期，這就是為什麼許多連鎖品牌選擇信任我們。
            </p>
            <img 
              src="https://placehold.co/600x400/111/333" 
              alt="工廠實景" 
              className="rounded-2xl border border-neutral-800 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* 右側：WHAT WE DO (Services Pills) */}
          <div>
             <h2 className="text-5xl font-black uppercase text-white mb-12 tracking-tighter text-right">
              WHAT WE DO
            </h2>
            <ServicePills />
          </div>
        </div>
      </section>

      {/* 4. 精選作品 (Grid Layout) */}
      <section className="py-24 border-t border-neutral-800 bg-neutral-900/30">
        <div className="px-6 md:px-20 mb-12 flex justify-between items-end">
          <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
            Featured <span className="text-red-600">Works</span>
          </h2>
          <Link href="/cases" className="text-gray-400 hover:text-white border-b border-gray-600 pb-1 hidden md:block">
            VIEW ALL CASES →
          </Link>
        </div>
        
        {/* 這裡模擬 Primo 的作品卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
           {/* Case 1 */}
           <div className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer">
              <img src="https://placehold.co/800x800/111/333" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-900/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">津本鍋物</h3>
                <p className="text-red-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">店面整體規劃設計</p>
              </div>
           </div>
           {/* Case 2 */}
           <div className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer lg:col-span-2">
              <img src="https://placehold.co/1600x800/222/444" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-900/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">NIKE 旗艦店</h3>
                <p className="text-red-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">戶外巨型燈箱結構</p>
              </div>
           </div>
           {/* Case 3 */}
           <div className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer">
              <img src="https://placehold.co/800x800/333/555" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-900/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Gogoro 換電站</h3>
                <p className="text-red-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">指標系統設計</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. 互動諮詢 CTA */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <DynamicCTA />
      </section>

    </main>
  );
}