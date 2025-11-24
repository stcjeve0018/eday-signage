export function DynamicCTA() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 py-24 px-8 text-center group">
      {/* 動態背景層 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase italic">
          Ready to Start?
        </h2>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          好的招牌是品牌最好的業務員。現在就加入我們的 LINE 官方帳號，傳送您的現場照片，我們將立即為您評估。
        </p>
        
        <a 
          href="https://line.me/ti/p/你的LineID" // 請換成真實連結
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#06c755] hover:bg-[#05b64b] text-white text-xl font-bold px-10 py-4 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-green-900/20"
        >
          {/* Line Icon SVG */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.87 1.62 5.43 4.19 7.04.18.11.28.32.22.53l-.47 1.77c-.1.37.33.66.62.42l2.58-2.14c.16-.13.36-.18.57-.14 1.25.26 2.56.26 3.82 0 5.52 0 10-3.92 10-8.75S17.52 2 12 2z"/></svg>
          LINE 線上諮詢
        </a>
      </div>
    </div>
  );
}