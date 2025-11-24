"use client";

const LOGOS = [
  "Google", "Tesla", "Nike", "Adidas", "BMW", "Starbucks", "Apple", "Sony"
]; // 之後換成真實客戶 Logo 圖片

export function BrandMarquee() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden py-10 bg-neutral-900/50 border-y border-neutral-800 backdrop-blur-sm">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {/* 重複兩次以達成無縫循環 */}
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <li key={index} className="text-2xl font-black text-neutral-600 uppercase italic tracking-tighter hover:text-red-600 transition-colors cursor-default">
            {/* 這裡暫時用文字代替 Logo，之後請換成 <Image /> */}
            {logo}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <li key={index} className="text-2xl font-black text-neutral-600 uppercase italic tracking-tighter">
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}