/* ============================================================
   叁翼数字科技 — 风险保障层页面
   Design: 数字化风险控制中心 + 雷达动效 + AI风控可视化
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Shield, AlertTriangle, Search, FileText, Wrench, Play, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RISK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314934225/EsaWcW9iUcwyAKqVhn7Bwp/risk-control-bg-DuD8jBY4ry9HYB5i9s4TMQ.webp";

const riskServices = [
  {
    id: "incident",
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "出险服务",
    en: "INCIDENT RESPONSE",
    color: "#ef4444",
    desc: "7×24小时出险响应中心，接报后15分钟内启动处置流程，专属客服全程跟进服务。",
    sla: "15分钟响应",
    features: ["24小时热线", "在线报案", "现场协调", "进度追踪"],
  },
  {
    id: "survey",
    icon: <Search className="w-6 h-6" />,
    title: "查勘服务",
    en: "SURVEY SERVICE",
    color: "#f59e0b",
    desc: "专业查勘团队配备无人机、AI识别系统，现场查勘与远程视频查勘双轨并行，48小时内完成查勘。",
    sla: "48小时查勘",
    features: ["现场查勘", "远程视频查勘", "AI损伤识别", "3D建模评估"],
  },
  {
    id: "assessment",
    icon: <FileText className="w-6 h-6" />,
    title: "定损服务",
    en: "DAMAGE ASSESSMENT",
    color: "#1677ff",
    desc: "基于AI图像识别与大数据定价模型，精准评估损失金额，定损结果透明可溯源，争议率低于0.5%。",
    sla: "AI精准定损",
    features: ["AI图像识别", "大数据定价", "专家复核", "报告存证"],
  },
  {
    id: "claims",
    icon: <Shield className="w-6 h-6" />,
    title: "理赔服务",
    en: "CLAIMS SERVICE",
    color: "#22c55e",
    desc: "简化理赔流程，线上一键提交，区块链存证防篡改，平均理赔周期缩短至3个工作日。",
    sla: "3日快速理赔",
    features: ["线上理赔", "区块链存证", "快速审核", "直付修理厂"],
  },
  {
    id: "repair",
    icon: <Wrench className="w-6 h-6" />,
    title: "维修恢复",
    en: "REPAIR & RECOVERY",
    color: "#8b5cf6",
    desc: "全国200+授权维修网点，原厂配件保障，维修进度实时可查，质保期内免费复检。",
    sla: "200+维修网点",
    features: ["授权维修", "原厂配件", "进度追踪", "质保服务"],
  },
  {
    id: "reflight",
    icon: <Play className="w-6 h-6" />,
    title: "复飞服务",
    en: "RETURN TO FLIGHT",
    color: "#00d4ff",
    desc: "维修完成后提供专业复飞检测，包括飞行性能测试、安全评估、适航认证，确保安全复飞。",
    sla: "安全复飞保障",
    features: ["飞行性能测试", "安全评估", "适航认证", "复飞记录"],
  },
];

const aiFeatures = [
  { label: "风险识别准确率", value: 97.3, color: "#1677ff" },
  { label: "理赔自动化率", value: 85.6, color: "#00d4ff" },
  { label: "欺诈检测率", value: 99.1, color: "#22c55e" },
  { label: "客户满意度", value: 96.8, color: "#6366f1" },
];

function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 240;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    const maxR = size / 2 - 20;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Concentric rings
      [0.25, 0.5, 0.75, 1].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxR * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22, 119, 255, ${0.15 + ratio * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Cross lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
        ctx.strokeStyle = "rgba(22, 119, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Rotating sweep
      angleRef.current += 0.02;
      const sweepAngle = angleRef.current;
      // Draw sweep as arc
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, sweepAngle - 0.8, sweepAngle);
      ctx.closePath();
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
      sweepGrad.addColorStop(0, "rgba(22, 119, 255, 0.3)");
      sweepGrad.addColorStop(1, "rgba(22, 119, 255, 0)");
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweepAngle) * maxR, cy + Math.sin(sweepAngle) * maxR);
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 6;
      ctx.shadowColor = "#00d4ff";
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Random blips
      const blips = [
        { r: maxR * 0.4, a: 0.8 },
        { r: maxR * 0.7, a: 2.1 },
        { r: maxR * 0.55, a: 3.8 },
        { r: maxR * 0.85, a: 5.2 },
      ];
      blips.forEach((b) => {
        const diff = ((sweepAngle - b.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const fade = diff < Math.PI * 2 ? Math.max(0, 1 - diff / (Math.PI * 2)) : 0;
        if (fade > 0) {
          ctx.beginPath();
          ctx.arc(cx + Math.cos(b.a) * b.r, cy + Math.sin(b.a) * b.r, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${fade})`;
          ctx.shadowBlur = 8 * fade;
          ctx.shadowColor = "#00d4ff";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#1677ff";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#1677ff";
      ctx.fill();
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return <canvas ref={canvasRef} className="w-full max-w-[240px] mx-auto" />;
}

export default function RiskPage() {
  useScrollAnimation();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [progressStarted, setProgressStarted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setProgressStarted(true); },
      { threshold: 0.3 }
    );
    if (progressRef.current) observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${RISK_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 to-[#050816]" />
        <ParticleCanvas />
        <div className="absolute inset-0 tech-grid-bg opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tech-badge mb-6 inline-flex">RISK ASSURANCE LAYER</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            风险保障层
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            低空保险 + AI风控 + 全生命周期保障体系，从出险到复飞的端到端风险管理
          </p>

          {/* Key metrics */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { value: "7×24H", label: "响应保障" },
              { value: "3天", label: "理赔周期" },
              { value: "99.1%", label: "风控准确率" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="stat-number text-3xl">{item.value}</div>
                <div className="text-white/40 text-sm mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SIX SERVICES ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">SIX CORE SERVICES</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              六大保障服务
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {riskServices.map((service, i) => (
              <div
                key={service.id}
                className="scene-card fade-in-up cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}30`, color: service.color }}
                    >
                      {service.icon}
                    </div>
                    <div
                      className="px-2.5 py-1 rounded text-xs font-medium"
                      style={{
                        background: `${service.color}10`,
                        border: `1px solid ${service.color}25`,
                        color: service.color,
                        fontFamily: "'Noto Sans SC', sans-serif",
                      }}
                    >
                      {service.sla}
                    </div>
                  </div>

                  <div className="mb-1">
                    <div className="text-[10px] tracking-widest mb-0.5" style={{ color: service.color, fontFamily: "'Orbitron', monospace" }}>
                      {service.en}
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed my-4" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-white/40" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-400"
                  style={{
                    opacity: activeService === service.id ? 1 : 0,
                    boxShadow: `inset 0 0 20px ${service.color}12, 0 0 30px ${service.color}08`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AI RISK CONTROL ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,119,255,0.04), rgba(99,102,241,0.03))" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Radar + Stats */}
            <div className="fade-in-left">
              <div className="section-label mb-4">AI RISK CONTROL CENTER</div>
              <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                AI智能风控中心
              </h2>
              <p className="text-white/50 leading-relaxed mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                基于深度学习的风险识别引擎，实时分析飞行数据、环境数据、设备状态，提前预警潜在风险，将事故率降低至行业平均水平的1/3。
              </p>

              <div className="flex items-center gap-8">
                <RadarChart />
                <div className="space-y-3 flex-1">
                  {[
                    { label: "实时监控", value: "2,341架" },
                    { label: "今日预警", value: "23次" },
                    { label: "风险等级", value: "低风险" },
                    { label: "系统状态", value: "正常运行" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</span>
                      <span className="text-[#00d4ff] text-xs" style={{ fontFamily: "'Orbitron', monospace" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: AI metrics */}
            <div ref={progressRef} className="fade-in-up">
              <div className="section-label mb-6">AI PERFORMANCE METRICS</div>
              <div className="space-y-6">
                {aiFeatures.map((feat, i) => (
                  <div key={feat.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{feat.label}</span>
                      <span style={{ color: feat.color, fontFamily: "'Orbitron', monospace" }}>{feat.value}%</span>
                    </div>
                    <div className="tech-progress">
                      <div
                        className="tech-progress-bar"
                        style={{
                          width: progressStarted ? `${feat.value}%` : "0%",
                          background: `linear-gradient(90deg, ${feat.color}, ${feat.color}aa)`,
                          boxShadow: `0 0 8px ${feat.color}60`,
                          transitionDelay: `${i * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="dashboard-panel">
                  <div className="text-[#00d4ff] text-xs mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>FLIGHT REPLAY</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>飞行轨迹回放</div>
                  <div className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>支持事故前后30分钟完整轨迹回放</div>
                </div>
                <div className="dashboard-panel">
                  <div className="text-[#00d4ff] text-xs mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>BLOCKCHAIN</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>区块链存证</div>
                  <div className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>飞行数据不可篡改，理赔有据可查</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LIFECYCLE FLOW ========== */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-label mb-4">FULL LIFECYCLE PROTECTION</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              全生命周期保障流程
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {riskServices.map((s, i) => (
                <div key={s.id} className="relative text-center fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center relative z-10"
                    style={{
                      background: `${s.color}15`,
                      border: `2px solid ${s.color}40`,
                      color: s.color,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{s.title}</div>
                  <div className="text-white/30 text-xs" style={{ color: s.color, fontFamily: "'Noto Sans SC', sans-serif" }}>{s.sla}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
