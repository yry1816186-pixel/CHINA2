/**
 * Canvas粒子系统 - 替代80个DOM粒子节点
 * 使用requestAnimationFrame + Canvas 2D实现高性能粒子渲染
 * 仿CGTN大唐营造的漂浮金色粒子效果
 */

import React, { useEffect, useRef, useCallback } from 'react';

interface ParticleSystemProps {
  count?: number;
  color?: string;
  glowColor?: string;
  speed?: number;
  sizeRange?: [number, number];
  opacityRange?: [number, number];
  glowCount?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  drift: number;
  phase: number;
}

interface GlowDot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  phase: number;
  speed: number;
  glowSize: number;
}

export const CanvasParticles: React.FC<ParticleSystemProps> = ({
  count = 80,
  color = '#D4AF37',
  glowColor = '#D4AF37',
  speed = 1,
  sizeRange = [1, 3.5],
  glowCount = 15,
  opacityRange = [0.15, 0.65],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const glowsRef = useRef<GlowDot[]>([]);
  const animFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const hexToRgb = useCallback((hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }, []);

  const createParticle = useCallback((w: number, h: number): Particle => {
    const maxLife = 400 + Math.random() * 600;
    return {
      x: Math.random() * w * 1.3,
      y: h + Math.random() * 200,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.3 + Math.random() * 0.8) * speed,
      size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
      opacity: 0,
      maxOpacity: opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]),
      life: 0,
      maxLife,
      drift: (Math.random() - 0.5) * 0.6,
      phase: Math.random() * Math.PI * 2,
    };
  }, [speed, sizeRange, opacityRange]);

  const createGlow = useCallback((w: number, h: number): GlowDot => ({
    x: w * 0.1 + Math.random() * w * 0.8,
    y: Math.random() * h,
    size: 1 + Math.random() * 2,
    opacity: 0,
    maxOpacity: 0.3 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    speed: 0.01 + Math.random() * 0.02,
    glowSize: 6 + Math.random() * 10,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
    };

    resize();
    window.addEventListener('resize', resize);

    const { w, h } = dimensionsRef.current;
    particlesRef.current = Array.from({ length: count }, () => {
      const p = createParticle(w, h);
      p.life = Math.random() * p.maxLife;
      p.y = h * Math.random();
      return p;
    });
    glowsRef.current = Array.from({ length: glowCount }, () => createGlow(w, h));

    const rgb = hexToRgb(color);
    const glowRgb = hexToRgb(glowColor);

    const animate = () => {
      const { w: cw, h: ch } = dimensionsRef.current;
      ctx.clearRect(0, 0, cw, ch);

      // 渲染漂浮粒子
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.life += 1;
        p.x += p.vx + Math.sin(p.life * 0.008 + p.phase) * p.drift;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.1) {
          p.opacity = p.maxOpacity * (lifeRatio / 0.1);
        } else if (lifeRatio > 0.8) {
          p.opacity = p.maxOpacity * (1 - (lifeRatio - 0.8) / 0.2);
        } else {
          p.opacity = p.maxOpacity;
        }

        if (p.life >= p.maxLife || p.y < -50) {
          particlesRef.current[i] = createParticle(cw, ch);
          continue;
        }

        const radius = p.size * (0.8 + Math.sin(p.life * 0.01 + p.phase) * 0.2);
        const safeRadius = Math.max(0.1, radius);

        // 外层光晕
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, safeRadius * 3);
        gradient.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${p.opacity * 0.6})`);
        gradient.addColorStop(0.4, `rgba(${rgb.r},${rgb.g},${rgb.b},${p.opacity * 0.2})`);
        gradient.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, safeRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // 核心亮点
        ctx.beginPath();
        ctx.arc(p.x, p.y, safeRadius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.min(255, rgb.r + 60)},${Math.min(255, rgb.g + 60)},${Math.min(255, rgb.b + 40)},${p.opacity * 0.9})`;
        ctx.fill();
      }

      // 渲染发光点
      for (const g of glowsRef.current) {
        g.phase += g.speed;
        g.opacity = g.maxOpacity * (0.5 + Math.sin(g.phase) * 0.5);

        const safeGlowSize = Math.max(0.1, g.glowSize);
        const gradient = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, safeGlowSize);
        gradient.addColorStop(0, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},${g.opacity})`);
        gradient.addColorStop(0.5, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},${g.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0)`);

        ctx.beginPath();
        ctx.arc(g.x, g.y, safeGlowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [count, glowCount, color, glowColor, hexToRgb, createParticle, createGlow]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
};

export default CanvasParticles;
