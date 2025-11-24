"use client";

// 模擬大量 Logo 文字，實際專案請換成 <Image>
const LOGOS_ROW_1 = ["Google", "Tesla", "Nike", "Adidas", "BMW", "Starbucks", "Apple", "Sony"];
const LOGOS_ROW_2 = ["Maserati", "Fila", "Asahi", "Lexus", "Yahoo", "Kirin", "3M", "Swatch"];
const LOGOS_ROW_3 = ["Tissot", "W Hotel", "Uniqlo", "Zara", "H&M", "Puma", "Benz", "Audi"];
const LOGOS_ROW_4 = ["Gogoro", "Acer", "Asus", "MSI", "Giant", "Eva Air", "China Airlines", "TSMC"];

export function BrandMarquee() {
  return (
    <div className="w-full py-20 bg-neutral-900 border-y border-neutral-800 overflow-hidden flex flex-col gap-8">
      {/* 第一列：向左 */}
      <MarqueeRow logos={LOGOS_ROW_1} direction="left" />
      
      {/* 第二列：向右 */}
      <MarqueeRow logos={LOGOS_ROW_2} direction="right" opacity="opacity-60" />

      {/* 第三列：向左 */}
      <MarqueeRow logos={LOGOS_ROW_3} direction="left" />

      {/* 第四列：向右 */}
      <MarqueeRow logos={LOGOS_ROW_4} direction="right" opacity="opacity-60" />
    </div>
  );
}

// 抽離出單列組件，保持程式碼乾淨
function MarqueeRow({ logos, direction, opacity = "opacity-100" }: { logos: string[], direction: "left" | "right", opacity?: string }) {
  const animationClass = direction === "left" ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse";
  
  return (
    <div className={`inline-flex flex-nowrap overflow-hidden ${opacity} hover:opacity-100 transition-opacity duration-300`}>
      <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none ${animationClass}`}>
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <li key={index} className="text-4xl md:text-5xl font-black text-neutral-700 uppercase italic tracking-tighter hover:text-white transition-colors cursor-default select-none whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
      <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none ${animationClass}`} aria-hidden="true">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <li key={index} className="text-4xl md:text-5xl font-black text-neutral-700 uppercase italic tracking-tighter hover:text-white transition-colors cursor-default select-none whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}