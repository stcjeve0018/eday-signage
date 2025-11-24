"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  // 處理滑鼠放開
  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-12 text-center uppercase tracking-tighter">
          店面招牌 <span className="text-red-600">大改造</span>
        </h2>

        <div 
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (底圖 - 完工後) */}
          <Image 
            src="https://placehold.co/1920x1080/111/FFF?text=After+(New+Signage)" 
            alt="After" 
            fill 
            className="object-cover pointer-events-none" 
          />

          {/* Before Image (上層圖 - 施工前) - 利用 clip-path 切割 */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="https://placehold.co/1920x1080/EEE/333?text=Before+(Old+Shop)" 
              alt="Before" 
              fill 
              className="object-cover" 
            />
            {/* 標籤 */}
            <div className="absolute top-8 left-8 bg-black/70 text-white px-4 py-2 rounded-full font-bold backdrop-blur-md">
              施工前 / BEFORE
            </div>
          </div>

          {/* 右上角標籤 (After) */}
          <div className="absolute top-8 right-8 bg-red-600/90 text-white px-4 py-2 rounded-full font-bold backdrop-blur-md z-10">
            完工後 / AFTER
          </div>

          {/* Slider Handle (拉桿) */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}