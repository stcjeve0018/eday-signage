"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { 
    id: "01", 
    title: "室內廣告規劃", 
    desc: "商場、百貨專櫃、企業形象牆。", 
    image: "https://placehold.co/600x800/222/FFF?text=Indoor" 
  },
  { 
    id: "02", 
    title: "戶外招牌設計", 
    desc: "抗颱無接縫、大型鋼構、立體字。", 
    image: "https://placehold.co/600x800/922/FFF?text=Outdoor" 
  },
  { 
    id: "03", 
    title: "品牌形象牆", 
    desc: "霓虹燈、金屬腐蝕、光影應用。", 
    image: "https://placehold.co/600x800/222/FFF?text=Branding" 
  },
  { 
    id: "04", 
    title: "指標系統設計", 
    desc: "園區導引、停車場動線。", 
    image: "https://placehold.co/600x800/922/FFF?text=Wayfinding" 
  },
  { 
    id: "05", 
    title: "招牌維護保養", 
    desc: "定期巡檢、燈管更換、結構補強。", 
    image: "https://placehold.co/600x800/222/FFF?text=Maintenance" 
  },
];

export function ServicesSection() {
  const [mobileActiveId, setMobileActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 pb-8 border-b border-neutral-900">
           <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
            What We <span className="text-red-600">Do</span>
          </h2>
          <span className="text-neutral-500 font-bold tracking-widest mt-4 md:mt-0">服務項目</span>
        </div>

        {/* --- Desktop View (水平展開，文字保持正向) --- */}
        <div className="hidden md:flex h-[500px] gap-2">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 group transition-all duration-500 ease-in-out flex-[1] hover:flex-[3] hover:border-red-600"
            >
              {/* 背景圖片 (Hover 時顯示) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply"></div>
              </div>
              
              {/* 內容層 */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40">
                {/* 頂部：編號與標題 */}
                {/* 使用 min-w-max 確保在卡片很窄時，文字不會折行，而是保持完整 (可能會超出邊界被 overflow-hidden 切掉，這樣比較美觀) */}
                <div className="flex items-center gap-4 min-w-max">
                   <span className="text-xl font-mono font-bold text-red-600 group-hover:text-white transition-colors">
                    {service.id}
                  </span>
                  {/* 文字修正：移除 vertical-rl，改為永遠水平 */}
                  <h3 className="text-2xl font-black italic tracking-wide text-neutral-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {service.title}
                  </h3>
                </div>

                {/* 底部：描述與箭頭 (只在 Hover 時顯示) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 delay-100">
                  <p className="text-white/90 text-lg font-medium mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                   <span className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-sm">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Mobile View (保持不變) --- */}
        <div className="md:hidden flex flex-col gap-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setMobileActiveId(mobileActiveId === service.id ? null : service.id)}
              className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${mobileActiveId === service.id ? 'bg-red-900/40 border-red-600' : 'bg-neutral-900 border-neutral-800'}`}
              layout
            >
               <div className="flex items-center justify-between p-6">
                  <h3 className={`text-2xl font-black italic tracking-wide ${mobileActiveId === service.id ? 'text-white' : 'text-neutral-300'}`}>
                    <span className="text-red-600 mr-4 font-mono">{service.id}</span>
                    {service.title}
                  </h3>
                  <span className={`transition-transform duration-300 ${mobileActiveId === service.id ? 'rotate-45 text-red-500' : 'text-neutral-600'}`}>↗</span>
               </div>
               {mobileActiveId === service.id && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 pb-6 text-neutral-300 pl-16">
                   {service.desc}
                 </motion.div>
               )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}