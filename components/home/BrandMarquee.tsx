"use client";

const LOGOS_ROW_1 = ["Google", "Tesla", "Nike", "Adidas", "BMW", "Starbucks", "Apple", "Sony"];
const LOGOS_ROW_2 = ["Maserati", "Fila", "Asahi", "Lexus", "Yahoo", "Kirin", "3M", "Swatch"];
const LOGOS_ROW_3 = ["Tissot", "W Hotel", "Uniqlo", "Zara", "H&M", "Puma", "Benz", "Audi"];
const LOGOS_ROW_4 = ["Gogoro", "Acer", "Asus", "MSI", "Giant", "Eva Air", "China Airlines", "TSMC"];

export function BrandMarquee() {
  return (
    <div className="w-full py-20 bg-neutral-950 border-y border-neutral-900 flex flex-col gap-8 overflow-hidden">
      {/* ▼▼▼ 核彈級解法：直接注入 CSS 動畫定義 ▼▼▼ */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-force-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-force-right {
          animation: scroll-right 40s linear infinite;
        }
        /* Hover 時暫停 */
        .group:hover .animate-force-left,
        .group:hover .animate-force-right {
          animation-play-state: paused;
        }
      `}</style>
      
      <MarqueeRow logos={LOGOS_ROW_1} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_2} direction="right" opacity="opacity-50" />
      <MarqueeRow logos={LOGOS_ROW_3} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_4} direction="right" opacity="opacity-50" />
    </div>
  );
}

function MarqueeRow({ logos, direction, opacity = "opacity-100" }: { logos: string[], direction: "left" | "right", opacity?: string }) {
  // 使用剛剛定義的 class
  const animationClass = direction === "left" ? "animate-force-left" : "animate-force-right";
  
  return (
    <div className={`flex w-full overflow-hidden select-none group ${opacity} hover:opacity-100 transition-opacity duration-300`}>
      {/* 列表 1 */}
      <ul className={`flex min-w-full shrink-0 items-center justify-around gap-12 px-6 ${animationClass}`}>
        {logos.map((logo, index) => (
          <li key={`a-${index}`} className="text-4xl md:text-5xl font-black text-neutral-800 uppercase italic tracking-tighter whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
      
      {/* 列表 2 (無縫銜接用) */}
      <ul className={`flex min-w-full shrink-0 items-center justify-around gap-12 px-6 ${animationClass}`} aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={`b-${index}`} className="text-4xl md:text-5xl font-black text-neutral-800 uppercase italic tracking-tighter whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}