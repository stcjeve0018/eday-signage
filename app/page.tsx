import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex flex-col items-center text-center px-4 overflow-hidden">
        {/* 背景裝飾：紅色的微光，不那麼刺眼，保持神秘感 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white mb-8 relative z-10 uppercase">
          讓招牌成為您的 <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">最強業務員</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mb-12 relative z-10 leading-relaxed font-light">
          Eday 一代廣告，三十年職人精神。
          <br />專注於<span className="text-white font-bold">高耐久性、強視覺</span>的商業招牌設計與製作。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          <Link href="/estimate">
            <Button className="text-lg px-10 py-4 shadow-red-900/50">立即線上估價</Button>
          </Link>
          <Link href="/cases">
            <Button variant="outline" className="text-lg px-10 py-4">瀏覽完工案例</Button>
          </Link>
        </div>
      </section>

      {/* Feature Cards 區塊 */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* 這裡使用 Component 內的 Card，你可能需要去 Card.tsx 把 border-emerald 改掉 */}
        <FeatureCard 
          icon="🛠️" 
          title="專業施工" 
          desc="自設工廠，從焊接、烤漆到吊掛安裝，全程掌握品質。" 
          link="/about"
          linkText="了解製程"
        />
        <FeatureCard 
          icon="💡" 
          title="創意設計" 
          desc="不只是招牌，更是品牌門面。我們提供結合美感與結構的設計方案。" 
          link="/cases"
          linkText="看作品"
        />
        <FeatureCard 
          icon="💰" 
          title="透明報價" 
          desc="輸入尺寸與材質，系統立即運算價格範圍，預算掌控更精準。" 
          link="/estimate"
          linkText="試算價格"
        />
      </section>
    </div>
  );
}

// 簡單的內部組件，方便管理樣式
function FeatureCard({ icon, title, desc, link, linkText }: any) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl hover:border-red-600 transition-colors group">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
      <Link href={link} className="text-sm font-bold text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
        {linkText} <span className="text-red-600">→</span>
      </Link>
    </div>
  );
}