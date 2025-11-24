// ... (上面的 import 和 Hero, Marquee, Who We Are 保持不變)

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Featured Works (修正 Grid 排版) */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="px-6 md:px-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-4 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
            Featured <span className="text-red-600">Works</span>
          </h2>
          <Link href="/cases" className="text-neutral-400 hover:text-white border-b border-neutral-700 pb-1 transition-colors">
            VIEW ALL CASES →
          </Link>
        </div>
        
        {/* Grid Container: 設置為 3 欄，間距設為 gap-1 讓圖片緊貼 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 max-w-7xl mx-auto">
           
           {/* Case 1 (左側小圖) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-1">
              <img src="https://placehold.co/800x800/111/333" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">津本鍋物</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">店面整體規劃</p>
              </div>
           </div>

           {/* Case 2 (中間大圖 - 跨 2 欄) */}
           {/* 注意這裡：md:col-span-2 和 aspect-video (16:9) 或 aspect-[2/1] */}
           <div className="group relative aspect-video md:aspect-auto md:h-full bg-neutral-900 overflow-hidden cursor-pointer md:col-span-2">
              <img src="https://placehold.co/1600x900/222/444" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">NIKE 旗艦店</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">戶外巨型燈箱結構</p>
              </div>
           </div>

           {/* Case 3 (下方小圖 - 為了補齊網格，這裡示範再加一個，實際專案可依需求調整) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-1">
              <img src="https://placehold.co/800x800/333/555" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Gogoro 換電站</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">指標系統設計</p>
              </div>
           </div>

            {/* Case 4 (右下小圖 - 補齊網格用) */}
           <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer md:col-span-2 md:aspect-[2/1]">
              <img src="https://placehold.co/1200x600/444/666" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">信義區百貨空橋</h3>
                <p className="text-red-500 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">大型結構廣告</p>
              </div>
           </div>
        </div>
      </section>

// ... (下方的 CTA 保持不變)