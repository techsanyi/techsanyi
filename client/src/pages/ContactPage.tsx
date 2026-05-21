/* ============================================================
   叁翼数字科技 — 联系我们页面
   Design: 科技感联系方式 + 数字城市夜景 + 表单
   ============================================================ */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import { Send, MapPin, Mail, MessageSquare, Users, GraduationCap, Shield, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_xfd2g2b";
const EMAILJS_TEMPLATE_ID = "template_iu2ufjg";
const EMAILJS_PUBLIC_KEY = "pAXIJfMyrNeC5PAvl";

const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314934225/EsaWcW9iUcwyAKqVhn7Bwp/contact-bg-4vAJpATbGAjXtJvNc6STM3.webp";

const cooperationTypes = [
  { id: "business", icon: <MessageSquare className="w-5 h-5" />, title: "商务合作", color: "#1677ff", desc: "平台接入、商务洽谈" },
  { id: "platform", icon: <Users className="w-5 h-5" />, title: "平台合作", color: "#00d4ff", desc: "技术对接、生态共建" },
  { id: "training", icon: <GraduationCap className="w-5 h-5" />, title: "培训合作", color: "#6366f1", desc: "飞手培训、机构合作" },
  { id: "insurance", icon: <Shield className="w-5 h-5" />, title: "保险服务", color: "#22c55e", desc: "无人机保险、承保理赔服务" },
];

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "公司地址", value: "杭州市拱墅区网谷创新中心8幢1509室", color: "#1677ff" },
  { icon: <Mail className="w-5 h-5" />, label: "商务邮箱", value: "contact@sanyiair.com", color: "#6366f1" },
];

export default function ContactPage() {
  useScrollAnimation();
  const [selectedType, setSelectedType] = useState("business");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Map cooperation type id to Chinese label
  const cooperationLabel = cooperationTypes.find((t) => t.id === selectedType)?.title ?? selectedType;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) {
      toast.error("请填写姓名");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          company: form.company || "未填写",
          phone: form.phone,
          reply_to: form.email || "未填写",
          cooperation_type: cooperationLabel,
          message: form.message || "无",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
      toast.success("提交成功！我们将在1个工作日内联系您。");
    } catch (err: any) {
      console.error("EmailJS error:", err);
      toast.error("发送失败，请稍后重试或直接发邮件至 contact@sanyiair.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${CONTACT_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]" />
        <ParticleCanvas />
        <div className="absolute inset-0 tech-grid-bg opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tech-badge mb-6 inline-flex">CONTACT US</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            联系我们
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            无论您有任何合作意向或业务咨询，我们的专业团队将在1个工作日内为您响应
          </p>
        </div>
      </section>

      {/* ========== COOPERATION TYPES ========== */}
      <section className="relative py-12 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-6 text-center">COOPERATION TYPES</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cooperationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                  selectedType === type.id
                    ? "border-opacity-60 bg-opacity-10"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                }`}
                style={
                  selectedType === type.id
                    ? { borderColor: type.color, background: `${type.color}10` }
                    : {}
                }
              >
                <div className="mb-3" style={{ color: selectedType === type.id ? type.color : "rgba(255,255,255,0.4)" }}>
                  {type.icon}
                </div>
                <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {type.title}
                </div>
                <div className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {type.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM + INFO ========== */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 fade-in-left">
              <div className="glass-card p-8">
                <div className="section-label mb-6">SEND MESSAGE</div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>提交成功</h3>
                    <p className="text-white/50 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      感谢您的咨询，我们将在1个工作日内联系您
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", company: "", phone: "", email: "", message: "" }); }}
                      className="btn-tech-outline mt-6 text-sm px-6 py-2"
                    >
                      再次提交
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          姓名 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="请输入您的姓名"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-blue-500/60"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                          onFocus={(e) => e.target.style.borderColor = "rgba(22,119,255,0.5)"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>公司名称</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="请输入公司名称"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                          onFocus={(e) => e.target.style.borderColor = "rgba(22,119,255,0.5)"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          联系电话 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="请输入联系电话"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                          onFocus={(e) => e.target.style.borderColor = "rgba(22,119,255,0.5)"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>电子邮箱</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="请输入电子邮箱"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                          onFocus={(e) => e.target.style.borderColor = "rgba(22,119,255,0.5)"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>合作意向说明</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="请简要描述您的合作需求或业务场景..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "rgba(22,119,255,0.5)"}
                        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-tech-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>发送中...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>提交合作申请</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 fade-in-up space-y-5">
              {/* Contact cards */}
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card p-5 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.color}15`, border: `1px solid ${info.color}30`, color: info.color }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{info.label}</div>
                    <div className="text-white/80 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{info.value}</div>
                  </div>
                </div>
              ))}

              {/* WeChat QR Code */}
              <div className="glass-card p-5">
                <div className="section-label mb-4">WECHAT / 微信公众号</div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 p-1"
                    style={{ background: "rgba(22,119,255,0.08)", border: "1px solid rgba(22,119,255,0.3)" }}
                  >
                    <img
                      src="/qrcode-wechat.jpg"
                      alt="叁翼科技服务平台公众号"
                      className="w-full h-full object-contain rounded-lg"
                      style={{ filter: "hue-rotate(200deg) saturate(1.5) brightness(0.9)" }}
                    />
                  </div>
                  <div>
                    <div className="text-white/70 text-sm font-medium mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>叁翼科技服务平台</div>
                    <div className="text-white/40 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>微信公众号</div>
                    <div className="text-white/30 text-xs mt-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>扫码关注，获取最新资讯</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="relative py-16 overflow-hidden">
        <div className="glow-line absolute top-0 w-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-6 text-center">LOCATION</div>
          <div
            className="relative rounded-2xl overflow-hidden fade-in-up"
            style={{ height: "320px", border: "1px solid rgba(22,119,255,0.2)" }}
          >
            {/* Map placeholder with tech styling */}
            <div
              className="absolute inset-0 tech-grid-bg"
              style={{ background: "rgba(5, 15, 40, 0.9)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Animated location marker */}
                <div className="relative mx-auto mb-4 w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-ping" />
                  <div className="absolute inset-2 rounded-full border-2 border-blue-500/60 animate-ping" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1677ff]" />
                  </div>
                </div>
                <div className="text-white font-semibold mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>杭州叁翼数字科技有限公司</div>
                <div className="text-white/40 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>杭州市拱墅区网谷创新中心8幢1509室</div>
                <div className="text-[#00d4ff] text-xs mt-2" style={{ fontFamily: "'Orbitron', monospace" }}>30.3176°N  120.0865°E</div>
              </div>
            </div>
            {/* Grid overlay */}
            <div className="absolute inset-0 tech-grid-bg opacity-30" />
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00d4ff]/60" />
            </div>
            <div className="absolute top-4 right-4 w-8 h-8">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00d4ff]/60" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00d4ff]/60" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00d4ff]/60" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
