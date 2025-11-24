import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 flex flex-col items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-gray-950 pointer-events-none" />
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 relative z-10">
          點亮您的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">品牌價值</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10 relative z-10">
          Eday 一代廣告專注於高品質招牌設計與製作。從創意發想到完工安裝，我們致力於讓您的店面成為街頭最吸睛的焦點。
        </p>
        <div className="flex gap-4 relative z-10">
          <Link href="/estimate">
            <Button className="text-lg px-8 py-3">立即線上估價</Button>
          </Link>
          <Link href="/cases">
            <Button variant="outline" className="text-lg px-8 py-3">欣賞完工案例</Button>
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <Card className="hover:border-emerald-500/50 group">
          <div className="h-12 w-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
            📖
          </div>
          <h3 className="text-xl font-bold text-white mb-2">招牌百科</h3>
          <p className="text-gray-400">不知道該選哪種材質？透過我們的專業指南，認識各種招牌形式與優缺點。</p>
          <Link href="/encyclopedia" className="text-emerald-400 text-sm mt-4 block hover:underline">前往閱讀 →</Link>
        </Card>
        <Card className="hover:border-emerald-500/50 group">
          <div className="h-12 w-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
            📷
          </div>
          <h3 className="text-xl font-bold text-white mb-2">完工案例</h3>
          <p className="text-gray-400">實力證明一切。瀏覽我們在各行各業的成功案例，激發您的設計靈感。</p>
          <Link href="/cases" className="text-emerald-400 text-sm mt-4 block hover:underline">瀏覽作品 →</Link>
        </Card>
        <Card className="hover:border-emerald-500/50 group">
          <div className="h-12 w-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <h3 className="text-xl font-bold text-white mb-2">透明估價</h3>
          <p className="text-gray-400">不再擔心被漫天喊價。輸入尺寸需求，系統自動運算，給您最實在的價格區間。</p>
          <Link href="/estimate" className="text-emerald-400 text-sm mt-4 block hover:underline">開始估價 →</Link>
        </Card>
      </section>
    </div>
  );
}