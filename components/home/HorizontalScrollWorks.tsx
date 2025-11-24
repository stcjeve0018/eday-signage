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
];

export function HorizontalScrollWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 監聽此區塊的滾動進度
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 將垂直滾動 (0 -> 1) 轉換為 水平位移 (0% -> -65%)
  // 這裡的 -65% 取決於你的卡片數量，數量越多要負越多
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    // 外層高度設為 300vh，代表使用者要滾 3 個螢幕的高度才能看完這個橫向區塊
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      
      {/* Sticky Container: 讓內容黏在螢幕上 */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-10 md:left-20 z-10">
           <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter">
            Selected <span className="text-red-600">Works</span>
          </h2>
          <p className="text-gray-400 mt-2">向下滑動瀏覽精選案例</p>
        </div>

        {/* 移動軌道 */}
        <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20 pt-20">
          {WORKS.map((work) => (
            <div 
              key={work.id} 
              className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              <Image
                src={work.img}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-red-500 font-mono text-sm mb-2">{work.type}</span>
                <h3 className="text-4xl font-bold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}