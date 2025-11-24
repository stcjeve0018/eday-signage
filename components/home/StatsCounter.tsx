"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const STATS = [
  { value: 30000, label: "招牌製作", suffix: "+" },
  { value: 100, label: "創意招牌製作", suffix: "+" },
  { value: 35, label: "專業經驗", suffix: "+" }, // 這裡我假設是「年」經驗，如果不是可自行修改
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-neutral-200 pt-16">
      {STATS.map((stat, index) => (
        <CounterItem key={index} {...stat} />
      ))}
    </div>
  );
}

function CounterItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // 看到元素時才觸發，只觸發一次
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  // 當元素進入視窗，開始從 0 跑到目標數值
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // 為了防止 React Hydration Mismatch，我們用一個 ref 來直接更新 DOM 文字
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (numberRef.current) {
        //toFixed(0) 確保沒有小數點
        numberRef.current.textContent = latest.toFixed(0); 
      }
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
        <span ref={numberRef} className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter">
          0
        </span>
        <span className="text-3xl font-black text-red-600">{suffix}</span>
      </div>
      <p className="text-neutral-500 font-bold text-lg tracking-wider">{label}</p>
    </div>
  );
}