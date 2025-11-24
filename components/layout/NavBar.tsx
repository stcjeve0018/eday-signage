"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "關於一代", href: "/about" },
  { name: "作品案例", href: "/cases" },
  { name: "線上估價", href: "/estimate" },
  { name: "招牌百科", href: "/encyclopedia" },
  { name: "部落格", href: "/blog" },
  { name: "聯絡我們", href: "/contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 修改：背景改為白色半透明，文字改為黑色
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-red-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo 保持黑色，強調紅色部分 */}
          <Link href="/" className="text-2xl font-black tracking-widest text-neutral-900 italic">
            EDAY <span className="text-red-600 not-italic">一代廣告</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-bold transition-colors group ${
                    pathname === item.href
                      ? "text-red-600"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${pathname === item.href ? 'scale-x-100' : ''}`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-neutral-100 inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 focus:outline-none"
            >
               <span className="sr-only">Menu</span>
               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-red-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-bold ${
                  pathname === item.href ? "text-red-600 bg-red-50" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}