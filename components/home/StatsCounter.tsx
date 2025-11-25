"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const STATS = [
  { value: 30000, label: "招牌製作", suffix: "+" },
  { value: 100, label: "創意招牌製作", suffix: "+" },
  { value: 35, label: "專業經驗", suffix: "+" },
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-neutral-200 pt-16">
      {STATS.map((stat, index) => (
        <CounterItem key={index} {...stat} />
      ))}
    </div>
  );
}

function CounterItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (numberRef.current) {
        numberRef.current.textContent = latest.toFixed(0); 
      }
    });
  }, [springValue]);

  return (
    // 修改 1: 移除 md:text-left，強制所有裝置都 text-center (置中)
    <div ref={ref} className="text-center">
      
      {/* 修改 2: 移除 md:justify-start，強制 justify-center (置中) */}
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <span ref={numberRef} className="text-6xl md:text-7xl font-black text-red-600 tracking-tighter">
          0
        </span>
        <span className="text-4xl font-black text-red-600">{suffix}</span>
      </div>
      
      {/* 修改 3: 字體加大 (text-2xl)、顏色加深 (text-neutral-800)、增加一點上距 (mt-2) */}
      <p className="text-neutral-800 font-bold text-2xl tracking-wider mt-2">
        {label}
      </p>
    </div>
  );
}