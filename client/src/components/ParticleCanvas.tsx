/* ============================================================
   叁翼数字科技 — 粒子背景 + 飞行轨迹动画
   Style: 动态粒子系统 + 贝塞尔曲线飞行路径
   ============================================================ */
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

interface FlightPath {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  color: string;
  width: number;
  opacity: number;
  trailLength: number;
}

export default function ParticleCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const pathsRef = useRef<FlightPath[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 200,
        color: Math.random() > 0.5 ? "#00d4ff" : "#1677ff",
      }));
    };

    // Initialize flight paths
    const createPath = (): FlightPath => {
      const w = canvas.width;
      const h = canvas.height;
      const startX = Math.random() * w * 0.3;
      const startY = h * 0.3 + Math.random() * h * 0.4;
      const endX = w * 0.7 + Math.random() * w * 0.3;
      const endY = h * 0.1 + Math.random() * h * 0.5;
      const cp1x = startX + (endX - startX) * 0.3 + (Math.random() - 0.5) * 200;
      const cp1y = startY - Math.random() * 150;
      const cp2x = startX + (endX - startX) * 0.7 + (Math.random() - 0.5) * 200;
      const cp2y = endY - Math.random() * 150;

      const steps = 100;
      const points = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        points.push({
          x: mt * mt * mt * startX + 3 * mt * mt * t * cp1x + 3 * mt * t * t * cp2x + t * t * t * endX,
          y: mt * mt * mt * startY + 3 * mt * mt * t * cp1y + 3 * mt * t * t * cp2y + t * t * t * endY,
        });
      }

      return {
        points,
        progress: Math.random() * 100,
        speed: 0.2 + Math.random() * 0.3,
        color: Math.random() > 0.6 ? "#00d4ff" : "#1677ff",
        width: 0.5 + Math.random() * 1,
        opacity: 0.3 + Math.random() * 0.4,
        trailLength: 20 + Math.floor(Math.random() * 30),
      };
    };

    pathsRef.current = Array.from({ length: 6 }, createPath);
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw flight paths
      pathsRef.current.forEach((path) => {
        path.progress += path.speed;
        if (path.progress > path.points.length) {
          Object.assign(path, createPath());
          path.progress = 0;
        }

        const idx = Math.floor(path.progress);
        const trailStart = Math.max(0, idx - path.trailLength);

        if (idx < path.points.length) {
          // Draw trail
          for (let i = trailStart; i < idx; i++) {
            const t = (i - trailStart) / path.trailLength;
            const alpha = t * path.opacity;
            ctx.beginPath();
            ctx.moveTo(path.points[i].x, path.points[i].y);
            if (i + 1 < path.points.length) {
              ctx.lineTo(path.points[i + 1].x, path.points[i + 1].y);
            }
            ctx.strokeStyle = path.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
            ctx.lineWidth = path.width * t;
            ctx.stroke();
          }

          // Draw drone dot at tip
          const tip = path.points[idx];
          const grad = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 4);
          grad.addColorStop(0, path.color);
          grad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      // Draw particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife || p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = 0;
          p.vy = -Math.random() * 0.6 - 0.2;
          p.vx = (Math.random() - 0.5) * 0.4;
        }

        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.8 ? (1 - lifeRatio) * 5 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
