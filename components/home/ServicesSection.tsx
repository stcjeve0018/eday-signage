"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { 
    id: "01", 
    title: "室內廣告規劃", 
    desc: "商場、百貨專櫃、企業形象牆。", 
    image: "https://placehold.co/600x400/222/FFF?text=Indoor" 
  },
  { 
    id: "02", 
    title: "戶外招牌設計", 
    desc: "抗颱無接縫、大型鋼構、立體字。", 
    image: "https://placehold.co/600x400/222/FFF?text=Outdoor" 
  },
  { 
    id: "03", 
    title: "品牌形象牆", 
    desc: "霓虹燈、金屬腐蝕、光影應用。", 
    image: "https://placehold.co/600x400/222/FFF?text=Branding" 
  },
  { 
    id: "04", 
    title: "指標系統設計", 
    desc: "園區導引、停車場動線、無障礙標示。", 
    image: "https://placehold.co/600x400/222/FFF?text=Wayfinding" 
  },
  { 
    id: "05", 
    title: "招牌維護保養", 
    desc: "定期巡檢、燈管更換、結構補強。", 
    image: "https://placehold.co/600x400/222/FFF?text=Maintenance" 
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Title Area */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-neutral-800 pb-8">
           <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
            What We <span className="text-blue-600">Do</span>
          </h2>
          <span className="text-gray-500 font-bold tracking-widest mt-4 md:mt-0">服務項目</span>
        </div>

        {/* --- Desktop View (Accordion - 圖七風格) --- */}
        <div className="hidden md:flex flex-col gap-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 border border-neutral-800 group`}
              // 這裡控制展開的高度與背景色
              animate={{ 
                height: activeId === service.id ? 200 : 80,
                backgroundColor: activeId === service.id ? "#dc2626" : "#171717" // 紅色 vs 灰色
              }}
            >
              <div className="flex items-center justify-between px-10 h-20">
                <div className="flex items-center gap-6">
                   <span className={`text-2xl font-mono font-bold ${activeId === service.id ? "text-red-200" : "text-red-600"}`}>
                    {service.id}
                  </span>
                  <h3 className={`text-3xl font-black italic tracking-wide ${activeId === service.id ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                    {service.title}
                  </h3>
                </div>
                {/* Arrow Icon */}
                <span className={`text-2xl transition-transform duration-300 ${activeId === service.id ? "rotate-45 text-white" : "text-gray-500"}`}>
                  ↗
                </span>
              </div>
              
              {/* 展開後的內容 */}
              <motion.div 
                className="px-10 pb-6 md:pl-20 text-white/90 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeId === service.id ? 1 : 0 }}
              >
                {service.desc}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* --- Mobile View (Horizontal Scroll Carousel - 圖八風格) --- */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="snap-center min-w-[85vw] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col shadow-xl"
            >
              {/* 圖片區塊 */}
              <div className="h-56 w-full relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
              </div>
              
              {/* 文字區塊 */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                   <h3 className="text-3xl font-black text-white mb-2">{service.title}</h3>
                   <span className="text-sm text-gray-400 block mb-4 font-mono">{service.id} // SERVICE</span>
                   <p className="text-gray-300">{service.desc}</p>
                </div>
                <div className="mt-6 flex justify-end">
                   <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                     VIEW MORE <span>→</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}