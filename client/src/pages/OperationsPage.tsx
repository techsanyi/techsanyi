/* ============================================================
   叁翼数字科技 — 运营服务层页面
   Design: 科技中台感 + 数据仪表盘 + 飞行数据界面
   ============================================================ */
import { useState } from "react";
import { ArrowRight, Activity, Cpu, Shield, BarChart2, Users, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: "maintenance",
    icon: <Wrench className="w-7 h-7" />,
    title: "无人机维护保养",
    en: "MAINTENANCE",
    color: "#1677ff",
    desc: "提供无人机全生命周期预防性维护服务，建立标准化保养体系，延长设备使用寿命，降低故障率。",
    features: [
      "定期检查与保养计划",
      "电池健康管理",
      "桨叶磨损检测",
      "电机性能测试",
      "固件升级服务",
      "设备健康档案",
    ],
    metrics: [
      { label: "故障率降低", value: "68%" },
      { label: "设备寿命延长", value: "2.3x" },
    ],
  },
  {
    id: "repair",
    icon: <Cpu className="w-7 h-7" />,
    title: "无人机维修中心",
    en: "REPAIR CENTER",
    color: "#00d4ff",
    desc: "专业无人机维修技术团队，配备先进检测设备，提供快速响应的维修服务，平均修复周期48小时内。",
    features: [
      "整机拆解检修",
      "主控板级维修",
      "图传系统修复",
      "云台校准服务",
      "防水等级恢复",
      "飞后检测报告",
    ],
    metrics: [
      { label: "平均修复周期", value: "48H" },
      { label: "一次修复率", value: "94%" },
    ],
  },
  {
    id: "training",
    icon: <Users className="w-7 h-7" />,
    title: "飞手培训中心",
    en: "PILOT TRAINING",
    color: "#6366f1",
    desc: "与中国民用航空局合作，提供CAAC认证飞手培训课程，涵盖理论、模拟、实飞全流程培训体系。",
    features: [
      "CAAC认证培训",
      "行业应用专项课",
      "模拟飞行训练",
      "实飞考核认证",
      "在线学习平台",
      "持续教育课程",
    ],
    metrics: [
      { label: "考证通过率", value: "96%" },
      { label: "培训学员", value: "5000+" },
    ],
  },
  {
    id: "compliance",
    icon: <Shield className="w-7 h-7" />,
    title: "合规运营服务",
    en: "COMPLIANCE OPS",
    color: "#22c55e",
    desc: "提供无人机飞行合规全流程服务，包括空域申请、飞行计划报备、运营许可证申请等一站式合规解决方案。",
    features: [
      "空域申请代办",
      "飞行计划报备",
      "运营许可证申请",
      "合规审计服务",
      "政策解读咨询",
      "应急预案制定",
    ],
    metrics: [
      { label: "空域申请成功率", value: "99%" },
      { label: "合规处理时效", value: "3天" },
    ],
  },
  {
    id: "data",
    icon: <BarChart2 className="w-7 h-7" />,
    title: "数据运营平台",
    en: "DATA PLATFORM",
    color: "#f59e0b",
    desc: "基于AI的无人机飞行数据采集、处理、分析平台，提供实时监控、历史回放、数据洞察等全方位数据服务。",
    features: [
      "实时飞行监控",
      "航迹数据回放",
      "AI异常检测",
      "数据可视化报告",
      "API数据接口",
      "数据安全存储",
    ],
    metrics: [
      { label: "数据处理延迟", value: "<100ms" },
      { label: "数据可用性", value: "99.9%" },
    ],
  },
];

const dashboardData = [
  { label: "今日飞行架次", value: "12,847", change: "+8.3%", up: true },
  { label: "在飞无人机", value: "2,341", change: "+12%", up: true },
  { label: "故障预警", value: "23", change: "-15%", up: false },
  { label: "完成任务率", value: "98.7%", change: "+0.3%", up: true },
];

export default function OperationsPage() {
  useScrollAnimation();
  const [activeService, setActiveService] = useState(services[0].id);
  const current = services.find((s) => s.id === activeService)!;

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-15" />
        <ParticleCanvas />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tech-badge mb-6 inline-flex">OPERATIONS SERVICE LAYER</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            运营服务层
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            无人机全生命周期运营支撑体系，从维护保养到数据平台，提供一站式专业服务
          </p>
        </div>
      </section>

      {/* ========== LIVE DASHBOARD ========== */}
      <section className="relative py-12 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0" style={{ background: "rgba(22,119,255,0.03)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-4 h-4 text-[#00d4ff]" />
            <span className="section-label">LIVE OPERATIONS DASHBOARD</span>
            <div className="flex items-center gap-1.5 ml-auto">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs" style={{ fontFamily: "'Orbitron', monospace" }}>LIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardData.map((item, i) => (
              <div key={item.label} className="dashboard-panel fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-white/40 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</div>
                <div className="stat-number text-2xl lg:text-3xl mb-1">{item.value}</div>
                <div className={`text-xs flex items-center gap-1 ${item.up ? "text-green-400" : "text-red-400"}`} style={{ fontFamily: "'Orbitron', monospace" }}>
                  <span>{item.up ? "▲" : "▼"}</span>
                  <span>{item.change}</span>
                  <span className="text-white/20 ml-1">vs 昨日</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES DETAIL ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">FIVE CORE SERVICES</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              五大核心服务
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-8">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                  activeService === s.id
                    ? "border-[#1677ff]/60 bg-[#1677ff]/10"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                }`}
              >
                <div className="mb-2" style={{ color: activeService === s.id ? s.color : "rgba(255,255,255,0.5)" }}>
                  {s.icon}
                </div>
                <div className="text-sm font-medium text-white/80" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Service detail panel */}
          <div className="glass-card p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${current.color}15`, border: `1px solid ${current.color}30`, color: current.color }}
                  >
                    {current.icon}
                  </div>
                  <div>
                    <div className="text-xs tracking-widest mb-1" style={{ color: current.color, fontFamily: "'Orbitron', monospace" }}>
                      {current.en}
                    </div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {current.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {current.desc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="dashboard-panel text-center">
                      <div className="stat-number text-2xl mb-1">{m.value}</div>
                      <div className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="section-label mb-4">SERVICE FEATURES</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((f, i) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/3"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: `${current.color}20`, color: current.color, fontFamily: "'Orbitron', monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span className="text-white/70 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS FLOW ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">SERVICE PROCESS</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              服务流程
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "需求评估", desc: "专业顾问评估您的运营需求" },
              { step: "02", title: "方案定制", desc: "量身定制运营服务方案" },
              { step: "03", title: "资源配置", desc: "调配专业团队与设备资源" },
              { step: "04", title: "执行交付", desc: "标准化服务执行与交付" },
              { step: "05", title: "持续优化", desc: "数据驱动的持续服务优化" },
            ].map((item, i) => (
              <div key={item.step} className="relative fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="process-step text-center h-full">
                  <div
                    className="text-3xl font-black mb-3 opacity-30"
                    style={{ fontFamily: "'Orbitron', monospace", color: "#1677ff" }}
                  >
                    {item.step}
                  </div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.title}</h4>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight size={14} className="text-blue-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
