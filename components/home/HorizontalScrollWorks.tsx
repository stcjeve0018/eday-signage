"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WORKS = [
  { id: "01", title: "NIKE 旗艦店", type: "戶外招牌", img: "https://placehold.co/800x600/111/FFF?text=NIKE" },
  { id: "02", title: "津本鍋物", type: "店面規劃", img: "https://placehold.co/800x600/222/FFF?text=HOTPOT" },
  { id: "03", title: "Gogoro", type: "指標系統", img: "https://placehold.co/800x600/333/FFF?text=Gogoro" },
  { id: "04", title: "信義誠品", type: "燈光計畫", img: "https://placehold.co/800x600/444/FFF?text=Eslite" },
  { id: "05", title: "路易莎咖啡", type: "連鎖招牌", img: "https://placehold.co/800x600/555/FFF?text=Louisa" },
  { id: "06", title: "台中歌劇院", type: "公共工程", img: "https://placehold.co/800x600/666/FFF?text=Opera" },
  { id: "07", title: "微風南山", type: "外牆結構", img: "https://placehold.co/800x600/777/FFF?text=Breeze" },
];

export function HorizontalScrollWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- 📐 響應式動畫核心 ---
  const rawProgress = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  // CSS 變數驅動位移
  const x = useMotionTemplate`calc(${rawProgress} * var(--move-target) - ${rawProgress} * 10.5rem)`;
  
  // 動畫與透明度
  const circleScale = useTransform(scrollYProgress, [0.8, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section 
      ref={targetRef} 
      className="relative bg-neutral-950 [--move-target:-600vw] md:[--move-target:-305vw] h-[500vh] md:h-[1000vh]"
    >
      
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        
        {/* 標題區 */}
        <div className="flex-shrink-0 flex items-end md:items-start px-6 md:px-20 z-30 mix-blend-difference bg-transparent pointer-events-none h-[20vh] pb-4 md:h-[30vh] md:pt-24 md:pb-0">
           <div>
             <h2 className="font-black uppercase text-white tracking-tighter leading-[0.9] mb-2 md:mb-4 text-4xl md:text-8xl">
              Selected <br/>
              <span className="text-red-600">Works</span>
            </h2>
            <p className="text-neutral-400 border-l-4 border-red-600 pl-4 md:pl-6 font-bold text-sm md:text-lg">
               SCROLL TO VIEW REEL
            </p>
           </div>
        </div>

        {/* 膠卷區 */}
        <div className="flex-1 flex items-start w-full relative pt-10 md:pt-20 h-[80vh] md:h-[70vh]">
            
            <motion.div 
              style={{ x }} 
              className="flex gap-0 items-center relative z-10"
            >
              {/* 1. 左側留白 Spacer */}
              <div className="flex-shrink-0 w-[5vw] md:w-[25vw]" />

              {WORKS.map((work) => (
                // 2. 卡片容器
                <div 
                  key={work.id} 
                  className="relative flex flex-col flex-shrink-0 w-[calc(85vw+1.5rem)] md:w-[calc(40vw+1.5rem)]"
                >
                  <div className="bg-black shadow-2xl relative py-3 px-3 md:py-6">
                    
                    {/* 上排齒孔 */}
                    <div className="w-full flex justify-between overflow-hidden opacity-60 mb-2 md:mb-3 gap-2 md:gap-3 h-3 md:h-4">
                      {[...Array(10)].map((_, i) => (
                        <div key={`top-${i}`} className="bg-neutral-800/50 rounded-sm flex-shrink-0 h-full w-2 md:w-3" />
                      ))}
                    </div>

                    {/* 照片區域 */}
                    <div className="group relative w-full overflow-hidden bg-neutral-900 border border-neutral-800/30 h-[45vh] md:h-[35vh]">
                      <Image
                        src={work.img}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 md:opacity-70 md:group-hover:opacity-100"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-overlay" />
                      
                      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
                        <div className="flex justify-between items-start">
                          <span className="text-white/40 font-mono origin-top-left rotate-90 text-[8px] translate-x-2 md:text-[10px] md:translate-x-3">KODAK 400</span>
                          <span className="text-red-600 font-bold font-mono text-base md:text-xl">#{work.id}</span>
                        </div>
                        <div className="transition-all duration-500 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <span className="text-red-500 font-mono tracking-widest uppercase bg-black px-2 py-1 text-[10px] md:text-xs">
                              {work.type}
                          </span>
                          <h3 className="font-black text-white uppercase italic tracking-tighter mt-2 shadow-black drop-shadow-lg leading-tight text-xl md:text-4xl">
                              {work.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* 下排齒孔 */}
                    <div className="w-full flex justify-between overflow-hidden opacity-60 mt-2 md:mt-3 gap-2 md:gap-3 h-3 md:h-4">
                      {[...Array(10)].map((_, i) => (
                        <div key={`bottom-${i}`} className="bg-neutral-800/50 rounded-sm flex-shrink-0 h-full w-2 md:w-3" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10 z-20" />
                </div>
              ))}

              {/* 3. 終點區塊 (ALL CASES) */}
              {/* 🔴 關鍵修正：移除了 overflow-hidden */}
              <div className="relative flex flex-col flex-shrink-0 w-[100vw] justify-center items-center h-[50vh]">
                
                <motion.div style={{ opacity: textOpacity }} className="text-center group cursor-pointer relative z-20 mix-blend-difference text-white">
                    <p className="font-bold mb-4 tracking-[0.4em] uppercase opacity-80 text-xs md:text-xl">Want to see more?</p>
                    
                    <Link href="/cases" className="block relative">
                      <h3 className="font-black uppercase italic tracking-tighter transition-colors duration-300 text-5xl md:text-9xl">
                        ALL CASES
                      </h3>
                    </Link>

                    <div className="mt-6 md:mt-8">
                      <Link href="/cases">
                        <button className="border border-current rounded-full font-bold transition-all duration-300 flex items-center mx-auto px-6 py-3 text-sm gap-2 md:px-10 md:py-4 md:text-lg md:gap-3">
                          瀏覽所有作品
                          <span>→</span>
                        </button>
                      </Link>
                    </div>
                </motion.div>

                <motion.div 
                  className="absolute top-1/2 left-1/2 w-[5vw] h-[5vw] bg-white rounded-full pointer-events-none z-10"
                  style={{ 
                    scale: circleScale,
                    translateX: "-50%",
                    translateY: "-50%"
                  }}
                />

              </div>

            </motion.div>
        </div>
      </div>
    </section>
  );
}