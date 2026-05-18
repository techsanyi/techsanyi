/* ============================================================
   叁翼数字科技 — 导航栏组件
   Style: 玻璃拟态 + 深色科技风 + 发光效果
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产业应用层", href: "/industry" },
  { label: "运营服务层", href: "/operations" },
  { label: "风险保障层", href: "/risk" },
  { label: "关于叁翼", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glass shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group cursor-pointer">
                {/* Logo Icon */}
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                    <polygon
                      points="18,2 34,10 34,26 18,34 2,26 2,10"
                      stroke="#1677ff"
                      strokeWidth="1.5"
                      fill="rgba(22,119,255,0.1)"
                    />
                    <polygon
                      points="18,8 28,13 28,23 18,28 8,23 8,13"
                      stroke="#00d4ff"
                      strokeWidth="1"
                      fill="rgba(0,212,255,0.05)"
                    />
                    {/* Wing shapes */}
                    <path d="M18 18 L10 12 L14 18 L10 24 Z" fill="#1677ff" opacity="0.8" />
                    <path d="M18 18 L26 12 L22 18 L26 24 Z" fill="#00d4ff" opacity="0.8" />
                    <path d="M18 18 L18 8 L21 18 L18 28 Z" fill="white" opacity="0.6" />
                    <circle cx="18" cy="18" r="2" fill="#00d4ff" />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md group-hover:bg-blue-500/40 transition-all duration-300" />
                </div>
                {/* Logo Text */}
                <div>
                  <div
                    className="text-white font-bold text-lg leading-tight tracking-wide"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    叁翼数字科技
                  </div>
                  <div
                    className="text-[10px] tracking-[0.2em] text-blue-400/70 uppercase"
                    style={{ fontFamily: "'Orbitron', monospace" }}
                  >
                    SANYI DIGITAL TECH
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-250 rounded-md cursor-pointer group ${
                        isActive
                          ? "text-[#00d4ff]"
                          : "text-white/70 hover:text-white"
                      }`}
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item.label}
                      {/* Active indicator */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00d4ff] rounded-full shadow-[0_0_8px_#00d4ff]" />
                      )}
                      {/* Hover glow */}
                      <span className="absolute inset-0 rounded-md bg-blue-500/0 group-hover:bg-blue-500/8 transition-all duration-250" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <button className="btn-tech-primary text-sm flex items-center gap-2">
                  申请合作
                  <ChevronRight size={14} />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white/80 hover:text-white p-2 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="菜单"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "rgba(5, 8, 22, 0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="px-4 py-4 space-y-1 border-t border-blue-500/10">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-blue-500/15 text-[#00d4ff] border border-blue-500/30"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronRight size={14} className="opacity-50" />
                  </div>
                </Link>
              );
            })}
            <div className="pt-3">
              <Link href="/contact">
                <button className="btn-tech-primary w-full text-sm">申请合作</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Top glow line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none" />
    </>
  );
}
