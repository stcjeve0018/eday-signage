"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { id: "01", title: "室內廣告規劃", desc: "商場、百貨專櫃、企業形象牆" },
  { id: "02", title: "戶外招牌設計", desc: "抗颱無接縫、大型鋼構、立體字" },
  { id: "03", title: "品牌形象牆", desc: "霓虹燈、金屬腐蝕、光影應用" },
  { id: "04", title: "指標系統設計", desc: "園區導引、停車場動線、無障礙標示" },
  { id: "05", title: "招牌維護保養", desc: "定期巡檢、燈管更換、結構補強" },
];

export function ServicePills() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {SERVICES.map((service) => (
        <motion.div
          key={service.id}
          className={`relative overflow-hidden rounded-full border-2 cursor-pointer transition-all duration-300 ${
            activeId === service.id 
              ? "bg-red-600 border-red-600 h-40" 
              : "bg-neutral-900/80 border-neutral-800 h-20 hover:border-red-600/50"
          }`}
          onClick={() => setActiveId(activeId === service.id ? null : service.id)}
          layout // Framer Motion 的魔法：自動平滑過渡佈局變化
        >
          <div className="flex items-center justify-between px-8 h-20 z-10 relative">
            <h3 className={`text-2xl font-black italic tracking-wider ${activeId === service.id ? "text-white" : "text-gray-300"}`}>
              {service.title}
            </h3>
            <span className={`text-xl font-mono font-bold ${activeId === service.id ? "text-red-200" : "text-red-600"}`}>
              {service.id}
            </span>
          </div>
          
          {/* 展開後的內容 */}
          {activeId === service.id && (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="px-8 pb-4 text-red-100 font-medium text-lg"
             >
               {service.desc}
             </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}