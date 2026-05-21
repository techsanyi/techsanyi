/* ============================================================
   叁翼数字科技 — 一键分享组件
   Style: 玻璃拟态浮层 + 科技蓝光效
   支持：微信二维码、微博、QQ、LinkedIn、复制链接
   ============================================================ */
import { useState, useRef, useEffect } from "react";
import { Share2, Link2, Check, X, QrCode } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonProps {
  title?: string;
  description?: string;
  compact?: boolean; // 紧凑模式（仅图标）
}

// 微博分享
function shareToWeibo(url: string, title: string) {
  const shareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&pic=&appkey=`;
  window.open(shareUrl, "_blank", "width=660,height=550");
}

// QQ 分享
function shareToQQ(url: string, title: string, desc: string) {
  const shareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}&summary=${encodeURIComponent(desc)}`;
  window.open(shareUrl, "_blank", "width=660,height=550");
}

// LinkedIn 分享
function shareToLinkedIn(url: string, title: string) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank", "width=660,height=550");
}

// 生成微信二维码（使用 qr-server API）
function getWechatQrUrl(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}&bgcolor=050816&color=00d4ff&margin=8`;
}

const platforms = [
  {
    id: "wechat",
    label: "微信",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 3.35c.537 0 .972.44.972.982a.976.976 0 0 1-.972.983.976.976 0 0 1-.972-.983c0-.542.434-.982.972-.982zm3.733 0c.537 0 .972.44.972.982a.976.976 0 0 1-.972.983.976.976 0 0 1-.972-.983c0-.542.434-.982.972-.982z"/>
      </svg>
    ),
    color: "#07c160",
    action: "qr",
  },
  {
    id: "weibo",
    label: "微博",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.993-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.826.968.442 1.592zm2.71-.979c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.168-.586.138-.227.436-.346.672-.24.239.09.324.357.185.573zm.989-3.21c-1.031-.26-2.192.1-2.928 1.003-1.474 1.823-.24 4.254 2.236 4.254 2.478 0 4.312-2.431 2.836-4.254-.37-.455-.872-.769-1.452-.952-.24-.075-.47-.1-.692-.051zm5.019-5.699c-.173-.065-.29-.109-.199-.393.195-.617.214-1.149.005-1.529-.38-.68-1.421-.644-2.612-.096 0 0-.374.163-.278-.132.183-.589.156-1.081-.13-1.364-.647-.644-2.37-.061-3.84 1.313-1.103 1.031-1.73 2.11-1.73 3.048 0 1.793 2.303 2.883 4.555 2.883 2.953 0 4.917-1.718 4.917-3.083 0-.734-.551-1.149-1.688-1.647zm3.478-5.942c-2.312-2.562-5.804-3.334-8.922-2.214-.465.167-.714.676-.547 1.139.166.463.676.712 1.14.547 2.434-.876 5.199-.267 7.013 1.742 1.815 2.01 2.158 4.837 1.028 7.19-.225.469-.027 1.032.442 1.257.469.226 1.032.028 1.257-.441 1.42-2.96.979-6.558-1.411-9.22zm-2.622 2.318c-1.188-1.316-2.981-1.713-4.585-1.138-.465.167-.714.676-.547 1.139.166.463.676.712 1.14.547 1.012-.364 2.149-.118 2.919.726.77.843.944 2.024.476 3.054-.225.469-.027 1.032.442 1.257.469.226 1.032.028 1.257-.441.73-1.521.47-3.38-.612-4.696l.51.552z"/>
      </svg>
    ),
    color: "#e6162d",
    action: "open",
  },
  {
    id: "qq",
    label: "QQ",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.527 4.462 16.29 0 12 0S4.473 4.462 4.473 9.24c0 .274.013.804.014.836L3.408 12.77a39.737 39.737 0 0 0-.803 2.265c-1.384 4.729-.075 5.666.576 5.155.668-.523 2.127-2.081 2.994-3.498.581 1.491 1.762 2.651 3.004 3.237-1.284.341-2.204.893-2.204 1.523 0 .975 2.25 1.766 5.025 1.766s5.025-.791 5.025-1.766c0-.63-.92-1.182-2.204-1.523 1.242-.586 2.423-1.746 3.004-3.237.867 1.417 2.326 2.975 2.994 3.498.651.511 1.959-.426.576-5.155z"/>
      </svg>
    ),
    color: "#1296db",
    action: "open",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#0a66c2",
    action: "open",
  },
  {
    id: "copy",
    label: "复制链接",
    icon: <Link2 className="w-5 h-5" />,
    color: "#00d4ff",
    action: "copy",
  },
];

export default function ShareButton({ title, description, compact = false }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const currentUrl = window.location.href;
  const shareTitle = title || document.title || "叁翼数字科技 — 低空经济综合服务保障平台";
  const shareDesc = description || "叁翼数字科技，面向未来低空经济的综合服务保障平台，提供产业应用、运营服务、风险保障一体化解决方案。";

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setShowQr(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handlePlatform = (platform: typeof platforms[0]) => {
    if (platform.action === "qr") {
      setShowQr(true);
      return;
    }
    if (platform.action === "copy") {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopied(true);
        toast.success("链接已复制到剪贴板");
        setTimeout(() => setCopied(false), 2000);
      });
      return;
    }
    if (platform.id === "weibo") shareToWeibo(currentUrl, shareTitle);
    if (platform.id === "qq") shareToQQ(currentUrl, shareTitle, shareDesc);
    if (platform.id === "linkedin") shareToLinkedIn(currentUrl, shareTitle);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        ref={btnRef}
        onClick={() => { setOpen(!open); setShowQr(false); }}
        className={`flex items-center gap-2 transition-all duration-250 group ${
          compact
            ? "w-9 h-9 rounded-lg justify-center"
            : "px-4 py-2 rounded-lg text-sm font-medium"
        }`}
        style={{
          background: open
            ? "rgba(22,119,255,0.2)"
            : "rgba(255,255,255,0.06)",
          border: `1px solid ${open ? "rgba(22,119,255,0.5)" : "rgba(255,255,255,0.12)"}`,
          color: open ? "#00d4ff" : "rgba(255,255,255,0.7)",
          fontFamily: "'Noto Sans SC', sans-serif",
          boxShadow: open ? "0 0 12px rgba(22,119,255,0.25)" : "none",
        }}
        title="分享此页面"
        aria-label="分享"
      >
        <Share2 size={15} className={`transition-transform duration-300 ${open ? "rotate-12" : "group-hover:rotate-12"}`} />
        {!compact && <span>分享</span>}
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute right-0 mt-2 z-[200]"
          style={{
            width: showQr ? "220px" : "200px",
            animation: "fadeInScale 0.18s cubic-bezier(0.23,1,0.32,1) forwards",
          }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "rgba(5, 12, 35, 0.95)",
              border: "1px solid rgba(22,119,255,0.25)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(22,119,255,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "rgba(22,119,255,0.15)" }}
            >
              <span
                className="text-white/60 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                {showQr ? "微信扫码分享" : "Share"}
              </span>
              <button
                onClick={() => { if (showQr) { setShowQr(false); } else { setOpen(false); } }}
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <X size={13} />
              </button>
            </div>

            {/* QR Code View */}
            {showQr ? (
              <div className="p-4 text-center">
                <div
                  className="rounded-xl overflow-hidden mx-auto mb-3 p-2"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    width: "fit-content",
                  }}
                >
                  <img
                    src={getWechatQrUrl(currentUrl)}
                    alt="微信分享二维码"
                    className="w-[160px] h-[160px] rounded-lg"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <p
                  className="text-white/40 text-xs leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  打开微信扫一扫
                  <br />
                  即可分享此页面
                </p>
                <button
                  onClick={() => setShowQr(false)}
                  className="mt-3 text-xs text-blue-400/60 hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  ← 返回
                </button>
              </div>
            ) : (
              /* Platform List */
              <div className="p-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => handlePlatform(platform)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/item text-left"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${platform.color}12`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: `${platform.color}15`,
                        border: `1px solid ${platform.color}30`,
                        color: platform.color,
                      }}
                    >
                      {platform.id === "copy" && copied ? (
                        <Check size={15} className="text-green-400" />
                      ) : (
                        platform.icon
                      )}
                    </div>
                    {/* Label */}
                    <span className="text-white/70 text-sm group-hover/item:text-white transition-colors">
                      {platform.id === "copy" && copied ? "已复制！" : platform.label}
                    </span>
                    {/* Arrow for wechat */}
                    {platform.id === "wechat" && (
                      <QrCode size={12} className="ml-auto text-white/20" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Footer hint */}
            {!showQr && (
              <div
                className="px-4 py-2 border-t text-center"
                style={{ borderColor: "rgba(22,119,255,0.1)" }}
              >
                <span
                  className="text-white/20 text-[10px] tracking-widest"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  SANYI DIGITAL TECH
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(-4px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}
