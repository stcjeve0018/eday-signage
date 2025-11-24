"use client";

// 資料定義
const LOGOS_ROW_1 = ["Google", "Tesla", "Nike", "Adidas", "BMW", "Starbucks", "Apple", "Sony"];
const LOGOS_ROW_2 = ["Maserati", "Fila", "Asahi", "Lexus", "Yahoo", "Kirin", "3M", "Swatch"];
const LOGOS_ROW_3 = ["Tissot", "W Hotel", "Uniqlo", "Zara", "H&M", "Puma", "Benz", "Audi"];
const LOGOS_ROW_4 = ["Gogoro", "Acer", "Asus", "MSI", "Giant", "Eva Air", "China Airlines", "TSMC"];

export function BrandMarquee() {
  return (
    <div className="w-full py-20 bg-neutral-950 border-y border-neutral-900 flex flex-col gap-8 overflow-hidden">
      {/* 注意：這裡在外層加了 w-full 和 overflow-hidden 
         每一列 MarqueeRow 裡面會有兩個 ul，這才是標準做法
      */}
      <MarqueeRow logos={LOGOS_ROW_1} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_2} direction="right" opacity="opacity-50" />
      <MarqueeRow logos={LOGOS_ROW_3} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_4} direction="right" opacity="opacity-50" />
    </div>
  );
}

function MarqueeRow({ logos, direction, opacity = "opacity-100" }: { logos: string[], direction: "left" | "right", opacity?: string }) {
  // 這裡對應 tailwind.config.ts 的動畫設定
  const animationClass = direction === "left" ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse";
  
  return (
    <div className={`flex w-full overflow-hidden select-none group ${opacity} hover:opacity-100 transition-opacity duration-300`}>
      {/* 列表 1：負責顯示 */}
      <ul className={`flex min-w-full shrink-0 items-center justify-around gap-12 px-6 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {logos.map((logo, index) => (
          <li key={`a-${index}`} className="text-4xl md:text-5xl font-black text-neutral-800 uppercase italic tracking-tighter whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
      
      {/* 列表 2：負責無縫銜接 (aria-hidden 讓螢幕閱讀器忽略) */}
      <ul className={`flex min-w-full shrink-0 items-center justify-around gap-12 px-6 ${animationClass} group-hover:[animation-play-state:paused]`} aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={`b-${index}`} className="text-4xl md:text-5xl font-black text-neutral-800 uppercase italic tracking-tighter whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}