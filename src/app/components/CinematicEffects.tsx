/**
 * 影视级特效组件库
 * 包含：粒子系统、光线效果、印章动画、烟雾效果、时空隧道
 */

import React, { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ============================================
// 1. 金色粒子系统 - 高级粒子效果
// ============================================

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const GoldenParticles: React.FC<{
  count?: number;
  color?: string;
  intensity?: 'low' | 'medium' | 'high' | 'subtle' | 'normal' | 'intense';
}> = ({ count = 60, color = '#D4AF37', intensity = 'medium' }) => {
  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': case 'subtle': return 0.5;
      case 'high': case 'intense': return 1.5;
      default: return 1;
    }
  };
  const intensityMultiplier = getIntensityMultiplier();
  
  const particles = useMemo<Particle[]>(() => 
    Array.from({ length: Math.floor(count * intensityMultiplier) }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  , [count, intensityMultiplier]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 2}px ${color}`,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// 2. 光线射线效果 - 神圣光芒
// ============================================

export const LightRays: React.FC<{
  color?: string;
  intensity?: number;
  animated?: boolean;
  rotating?: boolean;
}> = ({ color = '#D4AF37', intensity = 0.3, animated = true, rotating = false }) => {
  const rays = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      angle: i * 30,
      length: 50 + Math.random() * 30,
      opacity: 0.1 + Math.random() * 0.2,
    }))
  , []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {rays.map((ray, i) => (
          <motion.div
            key={i}
            className="absolute origin-bottom"
            style={{
              width: 2,
              height: `${ray.length}vh`,
              background: `linear-gradient(to top, ${color}00, ${color}${Math.floor(ray.opacity * 255 * intensity).toString(16).padStart(2, '0')})`,
              transform: `rotate(${ray.angle}deg) translateY(-50%)`,
            }}
            animate={animated ? {
              opacity: [ray.opacity * 0.5, ray.opacity, ray.opacity * 0.5],
              scaleY: [1, 1.1, 1],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================
// 3. 印章落下动画 - 仪式感完成
// ============================================

export const SealStamp: React.FC<{
  character: string;
  onComplete?: () => void;
  color?: string;
  delay?: number;
}> = ({ character, onComplete, color = '#C23531', delay = 0 }) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ y: -200, rotate: -15, scale: 2 }}
        animate={{ 
          y: 0, 
          rotate: 0, 
          scale: [2, 1.2, 1],
        }}
        transition={{
          duration: 0.8,
          delay,
          times: [0, 0.7, 1],
          ease: [0.34, 1.56, 0.64, 1],
        }}
        onAnimationComplete={onComplete}
      >
        <motion.div
          className="w-32 h-32 border-4 rounded-sm flex items-center justify-center"
          style={{ 
            borderColor: color,
            backgroundColor: `${color}10`,
          }}
          initial={{ boxShadow: '0 0 0px transparent' }}
          animate={{ 
            boxShadow: [
              '0 0 0px transparent',
              `0 0 60px ${color}80`,
              `0 0 30px ${color}40`,
            ]
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
        >
          <motion.span
            className="text-5xl font-bold"
            style={{ color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {character}
          </motion.span>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 border-4 rounded-sm"
          style={{ borderColor: color }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

// ============================================
// 4. 烟雾效果 - 仙境氛围
// ============================================

export const MistEffect: React.FC<{
  intensity?: 'light' | 'medium' | 'heavy';
  color?: string;
}> = ({ intensity = 'medium', color = '#D4AF37' }) => {
  const opacity = intensity === 'light' ? 0.05 : intensity === 'heavy' ? 0.15 : 0.1;
  
  const mistLayers = useMemo(() => 
    Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      y: 20 + i * 15,
      scale: 1 + i * 0.2,
      duration: 20 + i * 5,
    }))
  , []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {mistLayers.map((layer) => (
        <motion.div
          key={layer.id}
          className="absolute w-[200%] h-32"
          style={{
            top: `${layer.y}%`,
            left: '-50%',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              ${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')} 25%,
              ${color}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')} 50%,
              ${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')} 75%,
              transparent 100%
            )`,
            filter: 'blur(20px)',
          }}
          animate={{
            x: ['-25%', '0%', '-25%'],
            scale: [layer.scale, layer.scale * 1.1, layer.scale],
          }}
          transition={{
            duration: layer.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// 5. 时空隧道效果 - 穿越动画
// ============================================

export const TimeTunnel: React.FC<{
  active?: boolean;
  color?: string;
}> = ({ active = false, color = '#D4AF37' }) => {
  const rings = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      scale: 0.5 + i * 0.15,
      opacity: 1 - i * 0.05,
    }))
  , []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {rings.map((ring) => (
            <motion.div
              key={ring.id}
              className="absolute rounded-full border"
              style={{
                width: '50vmin',
                height: '50vmin',
                borderColor: color,
                opacity: ring.opacity * 0.3,
              }}
              animate={{
                scale: [ring.scale, ring.scale * 1.5, ring.scale],
                opacity: [ring.opacity * 0.3, 0, ring.opacity * 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: ring.id * 0.1,
                ease: 'linear',
              }}
            />
          ))}
          
          <motion.div
            className="absolute w-full h-full"
            style={{
              background: `radial-gradient(circle, transparent 30%, ${color}10 70%, transparent 100%)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================
// 6. 粒子爆发效果 - 完成庆祝
// ============================================

export const ParticleBurst: React.FC<{
  trigger: boolean;
  color?: string;
  count?: number;
}> = ({ trigger, color = '#D4AF37', count = 30 }) => {
  const particles = useMemo(() => 
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      angle: (360 / count) * i,
      distance: 100 + Math.random() * 100,
      size: 3 + Math.random() * 5,
    }))
  , [count]);

  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {particles.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const x = Math.cos(rad) * p.distance;
            const y = Math.sin(rad) * p.distance;
            
            return (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: color,
                  boxShadow: `0 0 ${p.size * 2}px ${color}`,
                }}
                initial={{ x: 0, y: 0, scale: 0 }}
                animate={{ 
                  x, 
                  y, 
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================
// 7. 光晕脉冲效果 - CGTN级呼吸发光
// ============================================

export const GlowPulse: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
}> = ({ children, color = '#D4AF37', intensity = 1 }) => {
  return (
    <motion.div
      className="relative"
      animate={{
        boxShadow: [
          `0 0 ${10 * intensity}px ${color}40`,
          `0 0 ${30 * intensity}px ${color}60`,
          `0 0 ${10 * intensity}px ${color}40`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// 7b. 径向脉冲 - CGTN探索按钮雷达效果
// ============================================

export const RadialPulse: React.FC<{
  color?: string;
  size?: number;
  speed?: number;
}> = ({ color = '#D4AF37', size = 60, speed = 2 }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute rounded-full border"
        style={{ width: size, height: size, borderColor: color }}
        animate={{
          scale: [1, 2.5],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="absolute rounded-full border"
        style={{ width: size, height: size, borderColor: color }}
        animate={{
          scale: [1, 2.5],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          delay: speed / 2,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

// ============================================
// 7c. 逐字淡入组件 - CGTN级文本揭示
// ============================================

export const StaggerText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  staggerDuration?: number;
}> = ({ text, className = '', delay = 0, staggerDuration = 0.06 }) => {
  const chars = text.split('');
  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * staggerDuration,
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// ============================================
// 7d. 缩放揭示容器 - CGTN标志性拉近视效
// ============================================

export const ZoomReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  startScale?: number;
  duration?: number;
}> = ({ children, className = '', startScale = 2.5, duration = 1.2 }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: startScale, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// 7e. 分屏揭示 - CGTN屋顶分开效果
// ============================================

export const SplitReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  duration?: number;
}> = ({ children, className = '', duration = 1 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-[#0A1110] z-10"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-[#0A1110] z-10"
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </div>
  );
};

// ============================================
// 8. 3D卡片容器
// ============================================

export const Card3D: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    ref.current.style.transform = `
      perspective(1000px)
      rotateY(${x * 20}deg)
      rotateX(${-y * 20}deg)
      translateZ(10px)
    `;
  };
  
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};
