import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DynamicCTA } from "@/components/home/DynamicCTA";
import { HorizontalScrollWorks } from "@/components/home/HorizontalScrollWorks";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { StatsCounter } from "@/components/home/StatsCounter";

export default function Home() {
  return (
    // ⚠️ 修改：移除了 overflow-x-hidden，這樣 sticky 才會生效
    <main className="min-h-screen pt-16 bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-20 bg-neutral-950 text-white overflow-hidden">
        {/* ... (內容不變) ... */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full z-10">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
            <span className="block text-neutral-400 hover:text-white transition-colors duration-500">We Make</span>
            <span className="block text-red-600">Signage</span>
            <span className="block text-white">Stand Out.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-medium border-l-4 border-red-600 pl-6 mb-10">
            一代廣告 Eday — 
            專注於將您的品牌視覺轉化為實體震撼。
          </p>
          <div className="flex gap-4">
            <Link href="/estimate">
              <Button className="rounded-full text-lg px-8 py-6 shadow-red-600/20 border-0">立即估價</Button>
            </Link>
            <Link href="/cases">
              <Button variant="outline" className="rounded-full text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black">作品案例</Button>
            </Link>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20vw] font-black text-neutral-900 -z-0 select-none opacity-50 pointer-events-none">
          EDAY
        </div>
      </section>

      {/* 2. Brand Wall */}
      <BrandMarquee />

      {/* 3. Who We Are Section */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-red-600 font-bold tracking-widest mb-4 block">ABOUT US</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase text-neutral-900 mb-8 tracking-tighter leading-none">
                WHO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">WE ARE</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                <p>
                  <strong className="text-neutral-900 text-xl block mb-2">擁有三十年經驗的招牌職人團隊。</strong>
                  我們不只是製作招牌，更是您品牌的建構者。從「全方位設計規劃」到單一「製作執行」，無論是全套服務還是維修保養，Eday 都能完美配合。
                </p>
                <p>
                  我們的自設工廠讓我們能精準控制品質與交期，這就是為什麼許多連鎖品牌選擇信任我們。
                </p>
              </div>
              <div className="mt-10">
                 <Link href="/about" className="inline-flex items-center text-neutral-900 border-b border-neutral-900 pb-1 hover:text-red-600 hover:border-red-600 transition-colors font-bold">
                   MORE ABOUT US <span className="ml-2">→</span>
                 </Link>
              </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 shadow-2xl">
                 <img src="https://placehold.co/800x600/EEE/333?text=Workshop" alt="職人精神" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral-200 -z-10 hidden md:block"></div>
            </div>
          </div>
          {/* Stats */}
          <StatsCounter />
        </div>
      </section>

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Before/After Slider */}
      <BeforeAfterSlider />

      {/* 6. Horizontal Scroll Works */}
      <HorizontalScrollWorks />

      {/* 7. CTA */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <DynamicCTA />
      </section>

    </main>
  );
}