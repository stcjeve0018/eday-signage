"use client";
import Image from "next/image";

// 定義 Logo 資料結構
interface BrandLogo {
  name: string;
  src: string;
}

// 這裡之後請換成你放在 public/logos 資料夾內的真實圖片路徑
// 例如: src: "/logos/google.png"
const LOGOS_ROW_1: BrandLogo[] = [
  { name: "Google", src: "https://placehold.co/200x80/transparent/000?text=Google" },
  { name: "Tesla", src: "https://placehold.co/200x80/transparent/000?text=Tesla" },
  { name: "Nike", src: "https://placehold.co/200x80/transparent/000?text=Nike" },
  { name: "Adidas", src: "https://placehold.co/200x80/transparent/000?text=Adidas" },
  { name: "BMW", src: "https://placehold.co/200x80/transparent/000?text=BMW" },
  { name: "Starbucks", src: "https://placehold.co/200x80/transparent/000?text=Starbucks" },
];

const LOGOS_ROW_2: BrandLogo[] = [
  { name: "Maserati", src: "https://placehold.co/200x80/transparent/000?text=Maserati" },
  { name: "Fila", src: "https://placehold.co/200x80/transparent/000?text=Fila" },
  { name: "Asahi", src: "https://placehold.co/200x80/transparent/000?text=Asahi" },
  { name: "Lexus", src: "https://placehold.co/200x80/transparent/000?text=Lexus" },
  { name: "Yahoo", src: "https://placehold.co/200x80/transparent/000?text=Yahoo" },
  { name: "Kirin", src: "https://placehold.co/200x80/transparent/000?text=Kirin" },
];

const LOGOS_ROW_3: BrandLogo[] = [
  { name: "Tissot", src: "https://placehold.co/200x80/transparent/000?text=Tissot" },
  { name: "W Hotel", src: "https://placehold.co/200x80/transparent/000?text=W+Hotel" },
  { name: "Uniqlo", src: "https://placehold.co/200x80/transparent/000?text=Uniqlo" },
  { name: "Zara", src: "https://placehold.co/200x80/transparent/000?text=Zara" },
  { name: "H&M", src: "https://placehold.co/200x80/transparent/000?text=H&M" },
  { name: "Puma", src: "https://placehold.co/200x80/transparent/000?text=Puma" },
];

const LOGOS_ROW_4: BrandLogo[] = [
  { name: "Gogoro", src: "https://placehold.co/200x80/transparent/000?text=Gogoro" },
  { name: "Acer", src: "https://placehold.co/200x80/transparent/000?text=Acer" },
  { name: "Asus", src: "https://placehold.co/200x80/transparent/000?text=Asus" },
  { name: "MSI", src: "https://placehold.co/200x80/transparent/000?text=MSI" },
  { name: "Giant", src: "https://placehold.co/200x80/transparent/000?text=Giant" },
  { name: "TSMC", src: "https://placehold.co/200x80/transparent/000?text=TSMC" },
];

export function BrandMarquee() {
  return (
    <div className="w-full py-20 bg-white border-y border-neutral-100 flex flex-col gap-10 overflow-hidden">
      {/* 保持原本的 CSS 動畫設定 */}
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
      <MarqueeRow logos={LOGOS_ROW_2} direction="right" />
      <MarqueeRow logos={LOGOS_ROW_3} direction="left" />
      <MarqueeRow logos={LOGOS_ROW_4} direction="right" />
    </div>
  );
}

function MarqueeRow({ logos, direction }: { logos: BrandLogo[], direction: "left" | "right" }) {
  const animationClass = direction === "left" ? "animate-force-left" : "animate-force-right";
  
  return (
    <div className="flex w-full overflow-hidden select-none group">
      {/* 列表 1 */}
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-16 px-8 ${animationClass}`}>
        {logos.map((logo, index) => (
          <div key={`a-${index}`} className="relative h-12 w-32 md:h-16 md:w-40 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image 
              src={logo.src} 
              alt={logo.name} 
              fill
              className="object-contain" // 確保圖片保持比例不變形
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        ))}
      </div>
      
      {/* 列表 2 (無縫循環用) */}
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-16 px-8 ${animationClass}`} aria-hidden="true">
        {logos.map((logo, index) => (
          <div key={`b-${index}`} className="relative h-12 w-32 md:h-16 md:w-40 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image 
              src={logo.src} 
              alt={logo.name} 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}