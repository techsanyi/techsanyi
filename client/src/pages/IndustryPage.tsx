/* ============================================================
   叁翼数字科技 — 产业应用层页面
   Design: 九大场景科技矩阵 + 动态光边卡片
   ============================================================ */
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const INDUSTRY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314934225/EsaWcW9iUcwyAKqVhn7Bwp/industry-matrix-bg-iC8ty34keJd6fu52Azbz99.webp";

const scenes = [
  {
    id: 1,
    title: "农林作业",
    en: "AGRICULTURE",
    icon: "🌾",
    color: "#22c55e",
    desc: "无人机植保、播种、施肥、病虫害监测，覆盖农林全作业场景，提升农业生产效率30%以上。",
    tags: ["植保喷洒", "精准播种", "病虫监测", "产量估算"],
    stat: { value: "2000+", label: "万亩作业面积" },
  },
  {
    id: 2,
    title: "巡检作业",
    en: "INSPECTION",
    icon: "🔍",
    color: "#f59e0b",
    desc: "电力线路、油气管道、铁路沿线、风电设施等基础设施智能巡检，AI识别缺陷精度达99.2%。",
    tags: ["电力巡检", "管道巡检", "铁路巡检", "AI识别"],
    stat: { value: "99.2%", label: "AI识别精度" },
  },
  {
    id: 3,
    title: "低空物流",
    en: "LOGISTICS",
    icon: "📦",
    color: "#1677ff",
    desc: "城市末端配送、山区医疗物资、岛屿应急补给，构建立体低空物流网络，配送效率提升60%。",
    tags: ["城市配送", "医疗急救", "偏远配送", "冷链运输"],
    stat: { value: "60%", label: "效率提升" },
  },
  {
    id: 4,
    title: "便民飞行",
    en: "CIVIL AVIATION",
    icon: "🚁",
    color: "#00d4ff",
    desc: "城市空中出行、旅游观光飞行、商务通勤，打造面向大众的低空出行新体验。",
    tags: ["空中出行", "观光旅游", "商务通勤", "空中游览"],
    stat: { value: "2030", label: "年商业化目标" },
  },
  {
    id: 5,
    title: "应急救援",
    en: "EMERGENCY",
    icon: "🚨",
    color: "#ef4444",
    desc: "自然灾害搜救、森林火灾监测、海上救援，快速响应能力将救援效率提升至传统方式的5倍。",
    tags: ["灾害搜救", "消防侦察", "海上救援", "医疗投送"],
    stat: { value: "5x", label: "救援效率提升" },
  },
  {
    id: 6,
    title: "测绘勘查",
    en: "SURVEYING",
    icon: "🗺️",
    color: "#8b5cf6",
    desc: "高精度地形测绘、矿山勘查、国土调查、建筑竣工验收，测绘精度达厘米级。",
    tags: ["地形测绘", "矿山勘查", "国土调查", "三维建模"],
    stat: { value: "cm级", label: "测绘精度" },
  },
  {
    id: 7,
    title: "城市治理",
    en: "URBAN GOVERNANCE",
    icon: "🏙️",
    color: "#06b6d4",
    desc: "城市安防巡逻、交通监控、违章建筑识别、环境监测，赋能智慧城市精细化管理。",
    tags: ["安防巡逻", "交通监控", "违章识别", "环境监测"],
    stat: { value: "24H", label: "全天候监控" },
  },
  {
    id: 8,
    title: "文旅体育",
    en: "CULTURE & SPORTS",
    icon: "🎭",
    color: "#ec4899",
    desc: "无人机编队表演、赛事航拍、景区导览、体育竞技，创造沉浸式文旅体验新场景。",
    tags: ["编队表演", "赛事航拍", "景区导览", "体育竞技"],
    stat: { value: "1000+", label: "场次演出经验" },
  },
  {
    id: 9,
    title: "低空走出去",
    en: "GLOBAL EXPANSION",
    icon: "🌍",
    color: "#f97316",
    desc: "协助中国低空经济企业走向全球，提供海外合规、市场对接、本地化运营全套出海解决方案。",
    tags: ["海外合规", "市场对接", "本地运营", "国际认证"],
    stat: { value: "50+", label: "覆盖国家地区" },
  },
];

export default function IndustryPage() {
  useScrollAnimation();
  const [activeScene, setActiveScene] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${INDUSTRY_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]" />
        <ParticleCanvas />
        <div className="absolute inset-0 tech-grid-bg opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tech-badge mb-6 inline-flex">INDUSTRY APPLICATION LAYER</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            产业应用层
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            覆盖国家低空经济九大核心场景，构建全场景低空应用生态矩阵
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-white/30">
            <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>首页</span>
            <ArrowRight size={12} />
            <span className="text-[#00d4ff]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>产业应用层</span>
          </div>
        </div>
      </section>

      {/* ========== NINE SCENES MATRIX ========== */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">NINE CORE SCENARIOS</div>
            <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              国家低空经济九大场景
            </h2>
            <p className="text-white/40 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              悬停卡片查看详细介绍
            </p>
          </div>

          {/* Scene grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenes.map((scene, i) => (
              <div
                key={scene.id}
                className="scene-card relative fade-in-up"
                style={{ transitionDelay: `${i * 60}ms` }}
                onMouseEnter={() => setActiveScene(scene.id)}
                onMouseLeave={() => setActiveScene(null)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: `${scene.color}15`, border: `1px solid ${scene.color}30` }}
                      >
                        {scene.icon}
                      </div>
                      <div>
                        <div className="text-[10px] tracking-widest mb-0.5" style={{ color: scene.color, fontFamily: "'Orbitron', monospace" }}>
                          {scene.en}
                        </div>
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {scene.title}
                        </h3>
                      </div>
                    </div>
                    <span
                      className="text-3xl font-black opacity-10"
                      style={{ fontFamily: "'Orbitron', monospace", color: scene.color }}
                    >
                      {String(scene.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {scene.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {scene.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded"
                        style={{
                          background: `${scene.color}10`,
                          border: `1px solid ${scene.color}20`,
                          color: `${scene.color}aa`,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stat */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-xl font-bold" style={{ color: scene.color, fontFamily: "'Orbitron', monospace" }}>
                        {scene.stat.value}
                      </div>
                      <div className="text-white/30 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        {scene.stat.label}
                      </div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: activeScene === scene.id ? `${scene.color}20` : "transparent",
                        border: `1px solid ${scene.color}30`,
                      }}
                    >
                      <ArrowRight size={14} style={{ color: scene.color }} />
                    </div>
                  </div>
                </div>

                {/* Animated border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-400"
                  style={{
                    opacity: activeScene === scene.id ? 1 : 0,
                    boxShadow: `inset 0 0 20px ${scene.color}15, 0 0 30px ${scene.color}10`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAPABILITY OVERVIEW ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,119,255,0.04), rgba(0,212,255,0.02))" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <div className="section-label mb-4">PLATFORM CAPABILITY</div>
              <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                全场景赋能能力
              </h2>
              <p className="text-white/50 leading-relaxed mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                叁翼科技产业应用层以数字化平台为底座，整合上下游资源，为九大低空经济场景提供端到端的解决方案，帮助客户快速落地低空经济业务。
              </p>
              <div className="space-y-4">
                {[
                  { label: "场景覆盖率", value: 95 },
                  { label: "解决方案成熟度", value: 88 },
                  { label: "客户满意度", value: 97 },
                  { label: "项目交付成功率", value: 99 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/60" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</span>
                      <span className="text-[#00d4ff]" style={{ fontFamily: "'Orbitron', monospace" }}>{item.value}%</span>
                    </div>
                    <div className="tech-progress">
                      <div className="tech-progress-bar" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🛸", title: "无人机机队", value: "500+", label: "合作机队" },
                  { icon: "👨‍✈️", title: "持证飞手", value: "2000+", label: "认证飞手" },
                  { icon: "🗺️", title: "作业区域", value: "31", label: "省市覆盖" },
                  { icon: "📊", title: "数据处理", value: "PB级", label: "年处理量" },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-6 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="stat-number text-3xl mb-1">{item.value}</div>
                    <div className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
