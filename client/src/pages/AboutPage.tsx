/* ============================================================
   叁翼数字科技 — 关于叁翼页面
   Design: 高端科技企业介绍 + 深色科技空间 + 团队卡片
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { ArrowRight, Target, Eye, Zap, Globe } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314934225/EsaWcW9iUcwyAKqVhn7Bwp/about-bg-hqyK9g8nMubcnDKCrWpN2h.webp";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "使命",
    color: "#1677ff",
    desc: "赋能低空经济高质量发展，构建中国低空经济数字基础设施",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "愿景",
    color: "#00d4ff",
    desc: "成为中国最具影响力的低空经济综合服务保障平台",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "价值观",
    color: "#6366f1",
    desc: "创新驱动、开放共赢、安全第一、客户至上",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "战略",
    color: "#22c55e",
    desc: "平台化运营 + 生态化发展 + 国际化布局",
  },
];

export default function AboutPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${ABOUT_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]" />
        <ParticleCanvas />
        <div className="absolute inset-0 tech-grid-bg opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="tech-badge mb-6 inline-flex">ABOUT SANYI DIGITAL TECH</div>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              关于叁翼
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              叁翼数字科技是一家专注于低空经济产业的综合服务保障平台公司，致力于构建集产业应用、运营服务、风险保障于一体的低空经济生态体系，以数字化、平台化、生态化的方式赋能低空经济高质量发展。
            </p>
          </div>
        </div>
      </section>

      {/* ========== COMPANY POSITIONING ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <div className="section-label mb-4">COMPANY POSITIONING</div>
              <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                公司定位
              </h2>
              <p className="text-white/50 leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                叁翼科技定位为中国低空经济产业的数字基础设施提供商，通过自主研发的低空经济综合服务保障平台，连接政府、运营商、用户、保险机构等各方参与者，构建开放共赢的低空经济产业生态。
              </p>
              <p className="text-white/50 leading-relaxed mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                公司名称"叁翼"寓意产业应用、运营服务、风险保障三翼并举，如同无人机的三轴稳定系统，共同支撑低空经济的稳健飞翔。
              </p>
              <div className="flex flex-wrap gap-3">
                {["低空经济", "数字平台", "产业生态", "AI驱动", "国家战略"].map((tag) => (
                  <span key={tag} className="tech-badge text-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="glass-card p-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${v.color}15`, border: `1px solid ${v.color}30`, color: v.color }}
                    >
                      {v.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{v.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========== PLATFORM CAPABILITIES ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,119,255,0.04), rgba(0,212,255,0.02))" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">PLATFORM CAPABILITIES</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              平台核心能力
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🧠", title: "AI智能引擎", desc: "自研低空经济AI大模型，支持飞行风险预测、路径优化、异常识别等核心能力", color: "#1677ff" },
              { icon: "🌐", title: "数字孪生平台", desc: "城市级低空交通数字孪生系统，实现虚实融合的空域管理与仿真推演", color: "#00d4ff" },
              { icon: "🔗", title: "生态连接器", desc: "开放API平台，连接无人机厂商、运营商、政府、保险等各方生态参与者", color: "#6366f1" },
              { icon: "📊", title: "数据中台", desc: "PB级飞行数据处理能力，支持实时分析、历史回溯、预测建模", color: "#22c55e" },
              { icon: "🛡️", title: "安全合规体系", desc: "符合民航局、工信部等监管要求，提供全链路合规保障服务", color: "#f59e0b" },
              { icon: "☁️", title: "云原生架构", desc: "多云部署、弹性扩展，支持百万级并发飞行任务调度管理", color: "#ec4899" },
            ].map((item, i) => (
              <div key={item.title} className="process-step fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
