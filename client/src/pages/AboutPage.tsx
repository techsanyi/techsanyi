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

const team = [
  {
    name: "张明远",
    title: "创始人 & CEO",
    en: "Founder & CEO",
    bg: "from-blue-900/40 to-blue-800/20",
    border: "#1677ff",
    avatar: "ZM",
    desc: "前民航局空管专家，15年低空经济从业经验，主导多个国家级低空经济试点项目。",
    tags: ["低空经济", "空域管理", "战略规划"],
  },
  {
    name: "李思远",
    title: "联合创始人 & CTO",
    en: "Co-founder & CTO",
    bg: "from-cyan-900/40 to-cyan-800/20",
    border: "#00d4ff",
    avatar: "LS",
    desc: "前大疆创新技术总监，无人机系统架构专家，拥有30余项无人机相关专利。",
    tags: ["无人机技术", "AI系统", "平台架构"],
  },
  {
    name: "王晓峰",
    title: "首席运营官 COO",
    en: "Chief Operating Officer",
    bg: "from-purple-900/40 to-purple-800/20",
    border: "#6366f1",
    avatar: "WX",
    desc: "连续创业者，曾主导多家科技公司从0到1的运营体系建设，擅长规模化运营管理。",
    tags: ["运营管理", "商业模式", "生态建设"],
  },
  {
    name: "陈雨薇",
    title: "首席风控官 CRO",
    en: "Chief Risk Officer",
    bg: "from-green-900/40 to-green-800/20",
    border: "#22c55e",
    avatar: "CY",
    desc: "前平安保险科技部总监，专注无人机保险产品设计与风险定价，推动低空保险标准化。",
    tags: ["风险管理", "保险科技", "AI风控"],
  },
];

const milestones = [
  { year: "2021", title: "公司成立", desc: "叁翼数字科技在深圳正式注册成立，获天使轮融资" },
  { year: "2022", title: "平台上线", desc: "低空经济综合服务平台V1.0正式上线，首批50家运营商接入" },
  { year: "2023", title: "战略扩张", desc: "完成A轮融资，业务覆盖全国15个省市，合作运营商突破200家" },
  { year: "2024", title: "生态构建", desc: "发布低空经济生态联盟，携手100+合作伙伴共建产业生态" },
  { year: "2025", title: "国际布局", desc: "启动东南亚市场布局，低空走出去战略正式落地" },
];

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
    desc: "成为中国最具影响力的低空经济综合服务平台",
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
              叁翼数字科技是一家专注于低空经济产业的综合服务平台公司，致力于构建集产业应用、运营服务、风险保障于一体的低空经济生态体系，以数字化、平台化、生态化的方式赋能低空经济高质量发展。
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
                叁翼科技定位为中国低空经济产业的数字基础设施提供商，通过自主研发的低空经济综合服务平台，连接政府、运营商、用户、保险机构等各方参与者，构建开放共赢的低空经济产业生态。
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

      {/* ========== MILESTONES ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0" style={{ background: "rgba(22,119,255,0.02)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">DEVELOPMENT MILESTONES</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              发展历程
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-8 fade-in-up ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="glass-card p-6 inline-block w-full lg:max-w-sm">
                      <div className="text-[#00d4ff] text-xs mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>{m.year}</div>
                      <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{m.title}</h4>
                      <p className="text-white/50 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{m.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full border-2 border-[#1677ff] bg-[#050816] flex-shrink-0 relative z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1677ff]" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">LEADERSHIP TEAM</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              核心团队
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="glass-card p-6 text-center fade-in-up group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-5 w-20 h-20">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black bg-gradient-to-br"
                    style={{
                      background: `linear-gradient(135deg, ${member.border}20, ${member.border}08)`,
                      border: `2px solid ${member.border}40`,
                      color: member.border,
                      fontFamily: "'Orbitron', monospace",
                    }}
                  >
                    {member.avatar}
                  </div>
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ boxShadow: `0 0 20px ${member.border}40` }}
                  />
                </div>

                <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {member.name}
                </h4>
                <div className="text-xs mb-1" style={{ color: member.border, fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {member.title}
                </div>
                <div className="text-white/20 text-[10px] mb-4" style={{ fontFamily: "'Orbitron', monospace" }}>
                  {member.en}
                </div>
                <p className="text-white/40 text-xs leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {member.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded"
                      style={{
                        background: `${member.border}10`,
                        border: `1px solid ${member.border}20`,
                        color: `${member.border}aa`,
                        fontFamily: "'Noto Sans SC', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
