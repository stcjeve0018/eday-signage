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

  // --- 🔧 修正：使用 Motion Template 解決混合單位跳動問題 ---

  // 1. 先算出純數字進度 (0 -> 1)
  // [0, 0.8]: 數值從 0 變到 1 (移動)
  // [0.8, 1]: 數值維持 1 (定格)
  const rawProgress = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1]);

  // 2. 動態組裝 calc 字串
  // 我們讓數學公式跟著 rawProgress 跑：
  // 當進度是 0: calc(0 * -305vw - 0 * 10.5rem) = 0
  // 當進度是 1: calc(1 * -305vw - 1 * 10.5rem) = 目標位移 (-305vw - 10.5rem)
  // 這樣 Framer 只需要處理 0->1 的數字變化，不會被 calc 搞混
  const x = useMotionTemplate`calc(${rawProgress} * -305vw - ${rawProgress} * 10.5rem)`;
  
  // 3. 圓形放大 (維持原樣)
  // 0.85 開始放大
  const circleScale = useTransform(scrollYProgress, [0.85, 1], [0, 60]);
  
  // 4. 文字淡出 (維持原樣)
  // 0.9 開始淡出
  const textOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-neutral-950">
      
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        
        {/* 標題區 */}
        <div className="h-[30vh] flex-shrink-0 flex items-start px-6 md:px-20 z-30 mix-blend-difference bg-transparent pt-24 pointer-events-none">
           <div>
             <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.9] mb-4">
              Selected <br/>
              <span className="text-red-600">Works</span>
            </h2>
            <p className="text-neutral-400 text-lg border-l-4 border-red-600 pl-6 font-bold">
               SCROLL TO VIEW REEL
            </p>
           </div>
        </div>

        {/* 膠卷區 */}
        <div className="h-[70vh] flex-1 flex items-start w-full relative pt-32">
            
            <motion.div 
              style={{ x }} 
              className="flex gap-0 items-center relative z-10"
            >
              {/* Spacer: 25vw */}
              <div className="w-[25vw] flex-shrink-0" />

              {WORKS.map((work) => (
                <div key={work.id} className="relative flex flex-col flex-shrink-0">
                  <div className="bg-black py-6 px-3 shadow-2xl relative">
                    
                    {/* Top Holes */}
                    <div className="h-4 w-full flex justify-between gap-3 overflow-hidden mb-3 opacity-60">
                      {[...Array(10)].map((_, i) => (
                        <div key={`top-${i}`} className="h-full w-3 bg-neutral-800/50 rounded-sm flex-shrink-0" />
                      ))}
                    </div>

                    {/* Image Area */}
                    <div className="group relative h-[35vh] w-[70vw] md:w-[40vw] overflow-hidden bg-neutral-900 border border-neutral-800/30">
                      <Image
                        src={work.img}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-overlay" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="text-white/40 font-mono text-[10px] rotate-90 origin-top-left translate-x-3">KODAK 400</span>
                          <span className="text-red-600 font-bold text-xl font-mono">#{work.id}</span>
                        </div>
                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-red-500 font-mono text-xs tracking-widest uppercase bg-black px-2 py-1">
                              {work.type}
                          </span>
                          <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mt-2 shadow-black drop-shadow-lg leading-tight">
                              {work.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Holes */}
                    <div className="h-4 w-full flex justify-between gap-3 overflow-hidden mt-3 opacity-60">
                      {[...Array(10)].map((_, i) => (
                        <div key={`bottom-${i}`} className="h-full w-3 bg-neutral-800/50 rounded-sm flex-shrink-0" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10 z-20" />
                </div>
              ))}

              {/* ALL CASES 終點區塊 */}
              <div className="relative flex flex-col flex-shrink-0 h-[50vh] min-w-[100vw] justify-center items-center">
                
                <motion.div style={{ opacity: textOpacity }} className="text-center group cursor-pointer relative z-20 mix-blend-difference text-white">
                    <p className="font-bold text-sm md:text-xl mb-4 tracking-[0.4em] uppercase opacity-80">Want to see more?</p>
                    
                    <Link href="/cases" className="block relative">
                      <h3 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter transition-colors duration-300">
                        ALL CASES
                      </h3>
                    </Link>

                    <div className="mt-8">
                      <Link href="/cases">
                        <button className="px-8 py-3 md:px-10 md:py-4 border border-current rounded-full font-bold transition-all duration-300 flex items-center gap-3 mx-auto text-sm md:text-lg">
                          瀏覽所有作品
                          <span>→</span>
                        </button>
                      </Link>
                    </div>
                </motion.div>

                {/* 白色擴散圓形 */}
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