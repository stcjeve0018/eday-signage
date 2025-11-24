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

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>("01"); // 預設展開第一個，避免畫面空空的
  const [mobileActiveId, setMobileActiveId] = useState<string | null>(null);

  // 處理滑鼠進入離開
  const handleMouseEnter = (id: string) => setActiveId(id);
  // 選擇性：如果移出整個區域要不要縮回？通常保持最後一個狀態體驗較好，故不設 onMouseLeave 清空

  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 pb-8 border-b border-neutral-900 z-10 relative">
           <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
            What We <span className="text-red-600">Do</span>
          </h2>
          <span className="text-neutral-500 font-bold tracking-widest mt-4 md:mt-0">服務項目</span>
        </div>

        {/* --- Desktop View (Framer Motion Smooth Accordion) --- */}
        <div className="hidden md:flex h-[600px] gap-3 relative">
          
          {/* 左側裝飾動畫 (仿照參考影片) */}
          <SideDecoration direction="left" />

          {SERVICES.map((service) => {
            const isActive = activeId === service.id;
            return (
              <motion.div
                key={service.id}
                layout // 這是滑順的關鍵：自動處理寬度補間
                onMouseEnter={() => handleMouseEnter(service.id)}
                className={`relative rounded-2xl overflow-hidden border cursor-pointer`}
                initial={false}
                animate={{
                  flex: isActive ? 3.5 : 1, // 展開比例與收縮比例
                  borderColor: isActive ? "#dc2626" : "#262626", // 紅色 vs 灰色
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }} // 彈簧物理效果
              >
                {/* 背景圖層 */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ filter: isActive ? "grayscale(0%)" : "grayscale(100%)" }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-neutral-900/30' : 'bg-neutral-950/70'}`} />
                  {/* 紅色濾鏡遮罩 */}
                  {isActive && <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />}
                </motion.div>

                {/* 內容層 */}
                <div className="absolute inset-0 p-6 z-10 overflow-hidden">
                  
                  {/* 狀態 A: 未展開時顯示 (直式文字) */}
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
                        {/* 直式排版，不旋轉，正向直書 */}
                        <h3 className="text-3xl font-black text-neutral-500 [writing-mode:vertical-rl] [text-orientation:upright] tracking-[0.4em] select-none">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 狀態 B: 展開時顯示 (橫式詳細內容) */}
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

          {/* 右側裝飾動畫 */}
          <SideDecoration direction="right" />

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

// 裝飾用側邊動畫組件
function SideDecoration({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left";
  return (
    <div className={`hidden xl:flex absolute top-0 bottom-0 ${isLeft ? "-left-12" : "-right-12"} w-8 flex-col justify-center gap-2 opacity-30`}>
      {[...Array(8)].map((_, i) => (
         <motion.div 
            key={i}
            className={`w-full bg-neutral-700 rounded-full ${isLeft ? "origin-right" : "origin-left"}`}
            initial={{ height: "10%" }}
            animate={{ height: ["10%", "60%", "10%"] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: i * 0.1, // 錯開時間產生波浪感
            }}
            style={{ 
              opacity: 1 - (i * 0.1),
              backgroundColor: i % 2 === 0 ? "#dc2626" : "#525252" // 紅灰交錯
            }}
         />
      ))}
    </div>
  );
}