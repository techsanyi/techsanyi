/* ============================================================
   叁翼数字科技 — 页脚组件
   Style: 深色科技风 + 发光分隔线 + 网格背景
   ============================================================ */
import { Link } from "wouter";
import ShareButton from "@/components/ShareButton";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "产业应用层", href: "/industry" },
  { label: "运营服务层", href: "/operations" },
  { label: "风险保障层", href: "/risk" },
  { label: "关于叁翼", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

const services = [
  "无人机维护保养",
  "飞手培训中心",
  "合规运营服务",
  "数据运营平台",
  "承保理赔服务",
  "复飞保障服务",
];

export default function Footer() {
  return (
    <footer className="footer-tech relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30" />

      {/* Top glow line */}
      <div className="glow-line w-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0">
                <img
                  src="/sanyi-logo.webp"
                  alt="叁翼数字科技"
                  className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(22,119,255,0.5)]"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>叁翼数字科技</div>
                <div className="text-[9px] tracking-[0.2em] text-blue-400/60 uppercase" style={{ fontFamily: "'Orbitron', monospace" }}>SANYI DIGITAL TECH</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              构建集产业应用、运营服务、风险保障于一体的低空经济生态平台，赋能中国低空经济高质量发展。
            </p>
            <div className="flex gap-3">
              <div className="tech-badge text-xs">低空经济</div>
              <div className="tech-badge text-xs">AI平台</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-label mb-5">平台导航</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/50 hover:text-[#00d4ff] text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-[#00d4ff] transition-colors" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-5">核心服务</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm flex items-center gap-2 group" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-5">联系方式</h4>
            <div className="space-y-4">
              <div className="dashboard-panel">
                <div className="text-[#00d4ff] text-xs mb-1" style={{ fontFamily: "'Orbitron', monospace" }}>BUSINESS</div>
                <div className="text-white/70 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>商务合作咋询</div>
                <div className="text-white/50 text-xs mt-1">contact@sanyiair.com</div>
              </div>
              <div className="dashboard-panel">
                <div className="text-[#00d4ff] text-xs mb-1" style={{ fontFamily: "'Orbitron', monospace" }}>ADDRESS</div>
                <div className="text-white/70 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>公司地址</div>
                <div className="text-white/50 text-xs mt-1">杭州市拱墅区网谷创新中心8幢1509室</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            © 2026 叁翼数字科技有限公司. 保留所有权利.
          </div>
          <div className="flex items-center gap-4">
            <ShareButton />
            <span className="text-white/20 text-xs hidden md:block" style={{ fontFamily: "'Orbitron', monospace" }}>
              LOW-ALTITUDE ECONOMY PLATFORM
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400/70 text-xs" style={{ fontFamily: "'Orbitron', monospace" }}>SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
