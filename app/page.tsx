export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero 區：品牌定位 */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
              Eday 一代廣告 · SIGNAGE STUDIO
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              讓你的招牌，<span className="text-emerald-400">一眼被看到</span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300">
              一代廣告（Eday）結合傳統師傅工法與線上估價系統，專精壓克力字、立體字、
              LED 燈箱、室內外形象牆等各類招牌，從規劃、設計到施工一次到位。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#estimate"
                className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                立即線上估價（即將開放）
              </a>
              <a
                href="#cases"
                className="rounded-full border border-slate-600 px-6 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800"
              >
                查看完工案例
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-80">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-lg">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-emerald-400">
                常見招牌類型
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li>・壓克力立體字招牌</li>
                <li>・不鏽鋼側發光字</li>
                <li>・LED 燈箱與掛旗</li>
                <li>・室內形象牆與指標系統</li>
                <li>・帆布輸出與鐵架結構</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 招牌類型導覽 */}
      <section id="types" className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-3 text-xl font-semibold">招牌類型導覽</h2>
        <p className="mb-6 text-xs text-slate-300">
          依照使用場景與預算，我們會為你推薦最適合的招牌組合。以下是常見的幾種做法：
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "壓克力 / 立體字",
              desc: "適合店面門頭、櫃位 Logo，質感好、立體感強，顏色選擇多。",
            },
            {
              title: "LED 燈箱招牌",
              desc: "夜間可視性最佳，適用於街邊店面、騎樓、轉角位置。",
            },
            {
              title: "室內形象牆",
              desc: "公司門面、櫃台背牆與接待區，強化品牌第一印象。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 完工案例 Placeholder */}
      <section id="cases" className="mx-auto max-w-5xl px-4 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">完工案例（示意區）</h2>
          <span className="text-[11px] text-slate-400">
            之後會接真實照片或 Notion / Airtable
          </span>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["街邊咖啡店立體字", "診所 LED 燈箱", "公司室內形象牆"].map(
            (label) => (
              <div
                key={label}
                className="flex h-32 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 text-[11px] text-slate-400"
              >
                {label}
              </div>
            )
          )}
        </div>
      </section>

      {/* 估價 CTA（之後會接 Workers API） */}
      <section
        id="estimate"
        className="border-t border-slate-800 bg-slate-900/70"
      >
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-xl font-semibold">先給我一個大概預算</h2>
          <p className="mt-2 text-xs text-slate-300">
            簡單輸入需求，我們之後會用系統自動計算估價區間，再由師傅實際確認。
          </p>
          <form className="mt-4 grid gap-3 md:grid-cols-3">
            <input
              type="text"
              placeholder="店名 / 品牌名稱"
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs outline-none focus:border-emerald-400"
            />
            <input
              type="text"
              placeholder="預估尺寸（例如 300cm x 80cm）"
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs outline-none focus:border-emerald-400"
            />
            <input
              type="text"
              placeholder="安裝位置（室內 / 戶外 / 高樓…）"
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs outline-none focus:border-emerald-400"
            />
          </form>
          <button
            type="button"
            className="mt-4 rounded-full bg-emerald-500 px-6 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
          >
            下一步會接上線上估價 API
          </button>
        </div>
      </section>
    </main>
  );
}
