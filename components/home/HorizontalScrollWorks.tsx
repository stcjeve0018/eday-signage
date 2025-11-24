"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const WORKS = [
  { id: 1, title: "NIKE 旗艦店", type: "戶外招牌", img: "https://placehold.co/800x600/111/FFF?text=NIKE" },
  { id: 2, title: "津本鍋物", type: "店面規劃", img: "https://placehold.co/800x600/222/FFF?text=HOTPOT" },
  { id: 3, title: "Gogoro", type: "指標系統", img: "https://placehold.co/800x600/333/FFF?text=Gogoro" },
  { id: 4, title: "信義誠品", type: "燈光計畫", img: "https://placehold.co/800x600/444/FFF?text=Eslite" },
  { id: 5, title: "路易莎咖啡", type: "連鎖招牌", img: "https://placehold.co/800x600/555/FFF?text=Louisa" },
  // 多加一個測試滾動長度
  { id: 6, title: "台中歌劇院", type: "公共工程", img: "https://placehold.co/800x600/666/FFF?text=Opera" },
];

export function HorizontalScrollWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // ★ 關鍵修正：定義滾動的觸發區間
    // "start start": 當元件頂部 (start) 碰到 視窗頂部 (start) 時 -> 進度 0
    // "end end": 當元件底部 (end) 碰到 視窗底部 (end) 時 -> 進度 1
    offset: ["start start", "end end"],
  });

  // 將垂直滾動進度映射到水平位移
  // 注意：這裡的 -55% 是一個估計值，取決於你的卡片總寬度相對於螢幕寬度的比例。
  // 如果滑到最後一張卡片還沒出來，可以把 -55% 改成 -75% 或更大
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    // 外層高度 300vh，創造足夠的滾動空間
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      
      {/* Sticky 容器：高度設為 h-screen 並黏在頂部 */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* 固定不動的標題區塊 */}
        <div className="absolute top-10 left-6 md:left-20 z-10 max-w-sm">
           <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none mb-4">
            Selected <span className="text-red-600">Works</span>
          </h2>
          <p className="text-neutral-400 text-lg border-l-2 border-red-600 pl-4">
            向下滑動<br/>瀏覽我們的精選案例
          </p>
        </div>

        {/* 水平移動的軌道 */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20 pt-20 pl-[100vw] md:pl-[40vw]">
          {/* pl-[100vw] 是為了讓第一張卡片從螢幕右側進場，製造一種「進場感」 */}
          
          {WORKS.map((work) => (
            <div 
              key={work.id} 
              className="group relative h-[50vh] w-[85vw] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl"
            >
              <Image
                src={work.img}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-red-500 font-mono text-sm mb-2 tracking-wider uppercase border-b border-red-500 w-fit pb-1">{work.type}</span>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">{work.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}