"use client";

const LOGOS_ROW_1 = ["Google", "Tesla", "Nike", "Adidas", "BMW", "Starbucks", "Apple", "Sony"];
const LOGOS_ROW_2 = ["Maserati", "Fila", "Asahi", "Lexus", "Yahoo", "Kirin", "3M", "Swatch"];
const LOGOS_ROW_3 = ["Tissot", "W Hotel", "Uniqlo", "Zara", "H&M", "Puma", "Benz", "Audi"];
const LOGOS_ROW_4 = ["Gogoro", "Acer", "Asus", "MSI", "Giant", "Eva Air", "China Airlines", "TSMC"];

export function BrandMarquee() {
  return (
    <div className="w-full py-16 bg-neutral-950 border-y border-neutral-900 overflow-hidden flex flex-col gap-6">
      <MarqueeRow logos={LOGOS_ROW_1} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_2} direction="right" opacity="opacity-50" />
      <MarqueeRow logos={LOGOS_ROW_3} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_4} direction="right" opacity="opacity-50" />
    </div>
  );
}

function MarqueeRow({ logos, direction, opacity = "opacity-100" }: { logos: string[], direction: "left" | "right", opacity?: string }) {
  const animationClass = direction === "left" ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse";
  
  return (
    <div className={`flex w-full overflow-hidden select-none ${opacity} hover:opacity-100 transition-opacity duration-300`}>
      {/* 使用 w-max 確保內容超出螢幕寬度，強制觸發滾動 */}
      <div className={`flex w-max min-w-full shrink-0 items-center justify-around gap-12 px-6 ${animationClass}`}>
        {[...logos, ...logos].map((logo, index) => (
          <span key={index} className="text-3xl md:text-4xl font-black text-neutral-800 uppercase italic tracking-tighter whitespace-nowrap">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}