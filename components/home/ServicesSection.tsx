"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { 
    id: "01", 
    title: "室內廣告規劃", 
    desc: "商場導視、百貨專櫃、企業形象牆整體規劃。", 
    image: "https://placehold.co/600x800/222/FFF?text=Indoor" 
  },
  { 
    id: "02", 
    title: "戶外招牌設計", 
    desc: "抗颱無接縫、大型鋼構、立體字、外牆燈光計畫。", 
    image: "https://placehold.co/600x800/922/FFF?text=Outdoor" 
  },
  { 
    id: "03", 
    title: "品牌形象牆", 
    desc: "霓虹燈造型、金屬腐蝕字、光影應用、特殊材質結合。", 
    image: "https://placehold.co/600x800/222/FFF?text=Branding" 
  },
  { 
    id: "04", 
    title: "指標系統設計", 
    desc: "園區導引、停車場動線、無障礙標示、逃生指示。", 
    image: "https://placehold.co/600x800/922/FFF?text=Wayfinding" 
  },
  { 
    id: "05", 
    title: "招牌維護保養", 
    desc: "定期巡檢、燈管更換、結構補強、版面清洗。", 
    image: "https://placehold.co/600x800/222/FFF?text=Maintenance" 
  },
];

// ... (上方的 imports 和 SERVICES 資料不變)

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>("01");
  const [mobileActiveId, setMobileActiveId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => setActiveId(id);

  return (
    // 修改：背景改為白色 bg-white
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 pb-8 border-b border-neutral-200 z-10 relative">
           {/* 修改：標題改為黑色 text-neutral-900 */}
           <h2 className="text-5xl md:text-7xl font-black uppercase text-neutral-900 tracking-tighter">
            What We <span className="text-red-600">Do</span>
          </h2>
          <span className="text-neutral-500 font-bold tracking-widest mt-4 md:mt-0">服務項目</span>
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden md:flex h-[600px] gap-3 relative">
          
          <SideDecoration direction="left" />

          {SERVICES.map((service) => {
            const isActive = activeId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                onMouseEnter={() => handleMouseEnter(service.id)}
                // 修改：邊框顏色改深色，背景保持黑色卡片
                className={`relative rounded-2xl overflow-hidden border cursor-pointer bg-neutral-900 shadow-xl`}
                initial={false}
                animate={{
                  flex: isActive ? 3.5 : 1,
                  // 展開時紅框，未展開時深灰框
                  borderColor: isActive ? "#dc2626" : "#404040", 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* ... (內部邏輯不變，保持黑色卡片的帥氣) ... */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ filter: isActive ? "grayscale(0%)" : "grayscale(100%)" }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-neutral-900/30' : 'bg-neutral-950/70'}`} />
                  {isActive && <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />}
                </motion.div>

                <div className="absolute inset-0 p-6 z-10 overflow-hidden">
                  
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col items-center justify-center gap-6"
                      >
                        <span className="text-xl font-mono font-bold text-red-600 rotate-0">{service.id}</span>
                        {/* 未展開時：文字為淺灰 text-neutral-400 */}
                        <h3 className="text-3xl font-black text-neutral-400 [writing-mode:vertical-rl] [text-orientation:upright] tracking-[0.4em] select-none">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="h-full flex flex-col justify-end items-start"
                      >
                         <div className="bg-neutral-950/80 backdrop-blur-sm p-6 rounded-xl w-full border-l-4 border-red-600">
                            <div className="flex items-center gap-3 mb-2">
                               <span className="text-red-500 font-mono font-bold text-xl">{service.id}</span>
                               <h3 className="text-3xl font-black text-white italic tracking-wide">{service.title}</h3>
                            </div>
                            <p className="text-gray-300 text-lg font-medium leading-relaxed">
                              {service.desc}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-red-500 font-bold uppercase text-sm tracking-wider">
                               View Project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          <SideDecoration direction="right" />
        </div>

        {/* ... (Mobile View 保持不變，或可將背景改為深色卡片) ... */}
         <div className="md:hidden flex flex-col gap-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setMobileActiveId(mobileActiveId === service.id ? null : service.id)}
              // 手機版卡片：深色背景
              className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${mobileActiveId === service.id ? 'bg-neutral-800 border-red-600' : 'bg-neutral-900 border-neutral-800'}`}
              layout
            >
              {/* ... 手機版內容 ... */}
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

// 側邊裝飾保持不變 (顏色可微調適應白底，或保持深色對比)
function SideDecoration({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left";
  return (
    <div className={`hidden xl:flex absolute top-0 bottom-0 ${isLeft ? "-left-12" : "-right-12"} w-8 flex-col justify-center gap-2 opacity-30`}>
      {[...Array(8)].map((_, i) => (
         <motion.div 
            key={i}
            className={`w-full bg-neutral-300 rounded-full ${isLeft ? "origin-right" : "origin-left"}`}
            initial={{ height: "10%" }}
            animate={{ height: ["10%", "60%", "10%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            style={{ opacity: 1 - (i * 0.1), backgroundColor: i % 2 === 0 ? "#dc2626" : "#e5e5e5" }}
         />
      ))}
    </div>
  );
}