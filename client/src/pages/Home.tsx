/* ============================================================
   叁翼数字科技 — 首页
   Design: 数字孪生平台 × 未来主义极简科技
   Sections: Hero, 三大平台, 数据统计, 生态展示
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314934225/EsaWcW9iUcwyAKqVhn7Bwp/hero-bg-QNVregTJLt58GiFBzjezGP.webp";

const platforms = [
  {
    id: "industry",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="18" height="18" rx="3" stroke="#1677ff" strokeWidth="1.5" fill="rgba(22,119,255,0.1)" />
        <rect x="26" y="4" width="18" height="18" rx="3" stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
        <rect x="4" y="26" width="18" height="18" rx="3" stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
        <rect x="26" y="26" width="18" height="18" rx="3" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.1)" />
        <circle cx="13" cy="13" r="4" fill="#1677ff" opacity="0.7" />
        <circle cx="35" cy="13" r="4" fill="#00d4ff" opacity="0.7" />
        <circle cx="13" cy="35" r="4" fill="#00d4ff" opacity="0.7" />
        <circle cx="35" cy="35" r="4" fill="#6366f1" opacity="0.7" />
      </svg>
    ),
    label: "01",
    title: "产业应用层",
    subtitle: "INDUSTRY APPLICATION",
    desc: "覆盖国家低空经济九大核心场景，从农林作业到城市治理，构建全场景低空应用生态矩阵。",
    features: ["农林作业", "巡检作业", "低空物流", "应急救援", "城市治理"],
    color: "#1677ff",
    href: "/industry",
  },
  {
    id: "operations",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,212,255,0.05)" />
        <circle cx="24" cy="24" r="10" stroke="#1677ff" strokeWidth="1" fill="rgba(22,119,255,0.1)" strokeDasharray="4 2" />
        <path d="M24 6 L24 14 M24 34 L24 42 M6 24 L14 24 M34 24 L42 24" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#00d4ff" />
        <path d="M16 16 L20 20 M28 28 L32 32 M32 16 L28 20 M20 28 L16 32" stroke="#1677ff" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    label: "02",
    title: "运营服务层",
    subtitle: "OPERATIONS SERVICE",
    desc: "提供无人机全生命周期运营支撑，涵盖维护保养、飞手培训、合规运营及数据平台服务。",
    features: ["维护保养", "维修中心", "飞手培训", "合规运营", "数据平台"],
    color: "#00d4ff",
    href: "/operations",
  },
  {
    id: "risk",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 4 L40 12 L40 28 C40 36 32 42 24 44 C16 42 8 36 8 28 L8 12 Z" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.1)" />
        <path d="M24 4 L40 12 L40 28 C40 36 32 42 24 44" stroke="#1677ff" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <circle cx="24" cy="22" r="8" stroke="#00d4ff" strokeWidth="1" fill="rgba(0,212,255,0.1)" />
        <path d="M20 22 L23 25 L28 18" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "03",
    title: "风险保障层",
    subtitle: "RISK ASSURANCE",
    desc: "构建低空保险+AI风控+全生命周期保障体系，从出险到复飞，提供端到端风险管理服务。",
    features: ["出险服务", "查勘定损", "理赔服务", "维修恢复", "复飞保障"],
    color: "#6366f1",
    href: "/risk",
  },
];

const stats = [
  { value: 9, suffix: "+", label: "产业应用场景", unit: "大" },
  { value: 500, suffix: "+", label: "合作运营商", unit: "家" },
  { value: 98.6, suffix: "%", label: "飞行安全率", unit: "" },
  { value: 24, suffix: "H", label: "全天候保障", unit: "" },
];

const ecosystem = [
  { icon: "🛸", title: "数字空域管理", desc: "AI驱动的智能空域规划与实时监控" },
  { icon: "🌐", title: "数字孪生城市", desc: "城市低空交通数字孪生仿真平台" },
  { icon: "🤖", title: "AI飞行调度", desc: "机器学习优化的航线规划与调度" },
  { icon: "📡", title: "空天地一体化", desc: "卫星、基站、无人机协同通信网络" },
  { icon: "🔒", title: "区块链存证", desc: "飞行数据不可篡改的链上存证" },
  { icon: "⚡", title: "边缘计算节点", desc: "低延迟边缘算力支撑实时决策" },
];

function StatCard({ value, suffix, label, unit, index }: { value: number; suffix: string; label: string; unit: string; index: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div ref={ref} className="fade-in-up text-center" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative inline-block">
        <div className="stat-number text-5xl lg:text-6xl font-black">
          {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{unit}{suffix}
        </div>
        <div className="absolute -inset-4 bg-blue-500/5 rounded-full blur-xl" />
      </div>
      <div className="text-white/50 text-sm mt-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{label}</div>
    </div>
  );
}

export default function Home() {
  useScrollAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            transform: `translateY(${heroOffset}px)`,
            scale: "1.1",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/40 to-[#050816]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 via-transparent to-[#050816]/60" />

        {/* Particle canvas */}
        <ParticleCanvas />

        {/* Grid overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        {/* HUD decorative elements */}
        <div className="absolute top-24 right-8 lg:right-16 hidden lg:block">
          <div className="dashboard-panel w-48 opacity-70">
            <div className="text-[#00d4ff] text-[10px] mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>AIRSPACE STATUS</div>
            <div className="space-y-1.5">
              {["SECTOR A", "SECTOR B", "SECTOR C"].map((s, i) => (
                <div key={s} className="flex items-center justify-between">
                  <span className="text-white/50 text-[10px]">{s}</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-yellow-400" : "bg-green-400"} animate-pulse`} />
                    <span className={`text-[10px] ${i === 1 ? "text-yellow-400" : "text-green-400"}`}>{i === 1 ? "BUSY" : "CLEAR"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-8 lg:left-16 hidden lg:block">
          <div className="dashboard-panel w-44 opacity-70">
            <div className="text-[#00d4ff] text-[10px] mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>LIVE DRONES</div>
            <div className="stat-number text-3xl">2,847</div>
            <div className="text-white/40 text-[10px] mt-1">Active flights now</div>
            <div className="tech-progress mt-2">
              <div className="tech-progress-bar" style={{ width: "73%" }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="tech-badge mb-8 inline-flex">
              中国低空经济综合服务平台
            </div>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              <span className="gradient-text">低空启航</span>
              <span className="text-white/30 mx-3">·</span>
              <span className="gradient-text">智联未来</span>
            </h1>

            {/* Subtitle */}
            <div className="text-xl lg:text-2xl text-white/80 font-medium mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              叁翼科技低空经济综合服务平台
            </div>

            {/* Description */}
            <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              构建集产业应用、运营服务、风险保障于一体的低空经济生态平台，赋能中国低空经济高质量发展。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/industry">
                <button className="btn-tech-primary flex items-center gap-2 text-base px-8 py-3.5">
                  了解平台
                  <ChevronRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-tech-outline flex items-center gap-2 text-base px-8 py-3.5">
                  申请合作
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["低空经济", "数字孪生", "AI调度", "空域管理", "智慧城市"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-white/40 border border-white/10 rounded-full"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-blue-500/60" />
          <div className="w-1 h-1 rounded-full bg-blue-400" />
        </div>
      </section>

      {/* ========== THREE PLATFORMS SECTION ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="section-label mb-4">PLATFORM ARCHITECTURE</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              三大平台体系
            </h2>
            <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              构建低空经济全链路服务能力，覆盖产业应用、运营服务与风险保障三大核心维度
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <Link key={platform.id} href={platform.href}>
                <div
                  className="glass-card p-8 h-full cursor-pointer fade-in-up group"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl" style={{ background: `${platform.color}15`, border: `1px solid ${platform.color}30` }}>
                      {platform.icon}
                    </div>
                    <span
                      className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ fontFamily: "'Orbitron', monospace", color: platform.color }}
                    >
                      {platform.label}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <div className="text-xs tracking-widest mb-1" style={{ color: platform.color, fontFamily: "'Orbitron', monospace" }}>
                      {platform.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {platform.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {platform.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 text-xs rounded"
                        style={{
                          background: `${platform.color}10`,
                          border: `1px solid ${platform.color}25`,
                          color: `${platform.color}cc`,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                    style={{ color: platform.color }}
                  >
                    <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>深入了解</span>
                    <ArrowRight size={14} />
                  </div>

                  {/* Bottom glow line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, transparent, ${platform.color}, transparent)` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,119,255,0.05) 0%, rgba(0,212,255,0.03) 100%)" }} />
        <div className="glow-line w-full absolute top-0" />
        <div className="glow-line w-full absolute bottom-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== ECOSYSTEM SECTION ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="section-label mb-4">DIGITAL ECOSYSTEM</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              数字生态能力
            </h2>
            <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              以AI为核心驱动力，构建空天地一体化的低空经济数字基础设施
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystem.map((item, i) => (
              <div
                key={item.title}
                className="process-step fade-in-up group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {item.desc}
                </p>
                {/* Corner decorations */}
                <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00d4ff]" />
                </div>
                <div className="absolute bottom-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00d4ff]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(22,119,255,0.08) 0%, rgba(99,102,241,0.06) 50%, rgba(0,212,255,0.08) 100%)" }}
        />
        <div className="absolute inset-0 tech-grid-bg opacity-20" />
        <div className="glow-line absolute top-0 w-full" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <div className="section-label mb-6">JOIN THE ECOSYSTEM</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            共建低空经济
            <span className="gradient-text-blue"> 未来生态</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            无论您是无人机运营商、行业用户、保险机构还是政府部门，叁翼科技都能为您提供专业的低空经济解决方案。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="btn-tech-primary flex items-center gap-2 text-base px-10 py-4">
                立即申请合作
                <ChevronRight size={16} />
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-tech-outline flex items-center gap-2 text-base px-10 py-4">
                了解叁翼科技
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
