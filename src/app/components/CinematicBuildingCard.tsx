/**
 * 影视级建筑卡片组件
 * 实现"画卷展开"、"印章盖下"等中国风仪式感交互
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import { BuildingData } from '../types';
import { SealStamp, GlowPulse, InkSpread, GoldenParticles } from './CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicBuildingCardProps {
  building: BuildingData;
  index: number;
  isVisited: boolean;
  onActivate: () => void;
  onEnter: () => void;
}

// ============================================
// 1. 画卷边框装饰组件
// ============================================

const ScrollBorder: React.FC<{
  isVisible: boolean;
  intensity: number;
}> = ({ isVisible, intensity }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-[-8%] pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 四角装饰 */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => {
            const isTop = corner.includes('top');
            const isLeft = corner.includes('left');
            
            return (
              <motion.div
                key={corner}
                className={`absolute ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? 'left-0' : 'right-0'} w-12 h-12`}
                initial={{ 
                  x: isLeft ? -20 : 20, 
                  y: isTop ? -20 : 20,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  x: 0, 
                  y: 0,
                  opacity: intensity,
                  scale: 1
                }}
                transition={{ 
                  delay: createStaggerDelay(i, 0.05),
                  duration: durations.slow,
                  ease: easings.spring
                }}
              >
                <div 
                  className={`w-full h-full border-[3px] border-[#D4AF37]`}
                  style={{
                    borderRight: isLeft ? 'none' : undefined,
                    borderLeft: isLeft ? undefined : 'none',
                    borderTop: isTop ? undefined : 'none',
                    borderBottom: isTop ? 'none' : undefined,
                    boxShadow: `${isLeft ? '-' : ''}${isTop ? '' : ''}5px ${isTop ? '-' : ''}5px 20px rgba(212,175,55,${intensity * 0.5})`,
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* 顶部和底部装饰线 */}
          <motion.div
            className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: intensity, opacity: intensity * 0.6 }}
            transition={{ delay: 0.2, duration: durations.slow, ease: easings.cinematic }}
          />
          <motion.div
            className="absolute bottom-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: intensity, opacity: intensity * 0.6 }}
            transition={{ delay: 0.2, duration: durations.slow, ease: easings.cinematic }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================
// 2. 仪式感进度环组件
// ============================================

const RitualProgressRing: React.FC<{
  progress: number;
  isVisible: boolean;
}> = ({ progress, isVisible }) => {
  const pathLength = useTransform(() => progress / 100);
  
  return (
    <AnimatePresence>
      {isVisible && progress < 100 && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 z-30 pointer-events-none flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
        >
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* 背景圆 */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="rgba(212,175,55,0.15)" 
              strokeWidth="2"
            />
            
            {/* 进度圆 */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.3, ease: 'linear' }}
            />
            
            {/* 装饰点 */}
            {[0, 90, 180, 270].map((angle, i) => (
              <motion.circle
                key={i}
                cx={50 + 45 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 45 * Math.sin((angle * Math.PI) / 180)}
                r="2"
                fill="#D4AF37"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </svg>
          
          {/* 中心文字 */}
          <motion.div
            className="absolute flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-bold">凝视</span>
            <span className="text-[#D4AF37]/60 text-[10px] tracking-widest mt-1">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================
// 3. 建筑名称书法效果组件
// ============================================

const CalligraphyTitle: React.FC<{
  text: string;
  isVisible: boolean;
  delay?: number;
}> = ({ text, isVisible, delay = 0 }) => {
  const characters = text.split('');
  
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay, duration: durations.normal }}
    >
      <motion.div
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {characters.map((char, i) => (
          <motion.span
            key={i}
            className="text-3xl text-[#D4AF37] font-bold tracking-[0.5em] inline-block"
            style={{ 
              textShadow: '0 3px 6px rgba(0,0,0,0.9)',
              fontFamily: "'Noto Serif SC', serif",
            }}
            initial={{ 
              opacity: 0, 
              y: 20,
              rotateX: -90,
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: 0,
            }}
            transition={{ 
              delay: delay + 0.3 + createStaggerDelay(i, 0.08),
              duration: durations.slow,
              ease: easings.spring,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      {/* 装饰线 */}
      <motion.div
        className="mt-4 w-[3px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ 
          scaleY: isVisible ? 1 : 0, 
          opacity: isVisible ? 0.7 : 0 
        }}
        transition={{ 
          delay: delay + 0.5,
          duration: durations.slow,
          ease: easings.cinematic,
        }}
      />
    </motion.div>
  );
};

// ============================================
// 4. 主卡片组件
// ============================================

export const CinematicBuildingCard: React.FC<CinematicBuildingCardProps> = ({
  building,
  index,
  isVisited,
  onActivate,
  onEnter,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [showSeal, setShowSeal] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef(0);
  
  const ACTIVATION_THRESHOLD = 100; // 需要凝视100%才能激活
  
  // 处理鼠标进入
  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowGlow(true);
    
    // 开始进度动画
    let startTime: number;
    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min((elapsed / 1500) * 100, 100); // 1.5秒完成
      
      progressRef.current = progress;
      setHoverProgress(progress);
      
      if (progress < ACTIVATION_THRESHOLD && isHovering) {
        requestAnimationFrame(animateProgress);
      } else if (progress >= ACTIVATION_THRESHOLD) {
        // 达到阈值，触发激活
        setShowSeal(true);
        setTimeout(() => {
          onActivate();
          setShowSeal(false);
        }, 800);
      }
    };
    
    requestAnimationFrame(animateProgress);
  };
  
  // 处理鼠标离开
  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowGlow(false);
    setHoverProgress(0);
    progressRef.current = 0;
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };
  
  // 处理鼠标移动（用于光晕跟随）
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  
  // 清理
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: durations.slow, 
        delay: createStaggerDelay(index, 0.1),
        ease: easings.elegantEnter,
      }}
      className="relative flex-shrink-0 h-[75vh] w-[26vw] min-w-[340px] flex items-center justify-center building-interactive"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* 画卷边框装饰 */}
      <ScrollBorder 
        isVisible={isHovering && hoverProgress < ACTIVATION_THRESHOLD} 
        intensity={Math.min(hoverProgress / 50, 1)}
      />
      
      {/* 仪式感进度环 */}
      <RitualProgressRing 
        progress={hoverProgress} 
        isVisible={isHovering && hoverProgress < ACTIVATION_THRESHOLD}
      />
      
      {/* 印章效果 */}
      <AnimatePresence>
        {showSeal && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SealStamp character={building.seal} delay={0} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 光晕跟随效果 */}
      <AnimatePresence>
        {showGlow && hoverProgress < ACTIVATION_THRESHOLD && (
          <GlowPulse
            x={glowPosition.x}
            y={glowPosition.y}
            size={150}
            duration={1}
          />
        )}
      </AnimatePresence>
      
      {/* 已访问标记 */}
      {isVisited && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="absolute top-4 right-4 z-20"
        >
          <div className="w-8 h-8 bg-[#C23531] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(194,53,49,0.5)]">
            <span className="text-[#F5F5DC] text-sm">✓</span>
          </div>
        </motion.div>
      )}
      
      {/* 朝代标签 */}
      <AnimatePresence>
        {isHovering && hoverProgress < ACTIVATION_THRESHOLD && (
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <motion.span
              className="px-4 py-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded text-[#D4AF37] text-sm tracking-wider"
              animate={{
                borderColor: ['rgba(212,175,55,0.4)', 'rgba(212,175,55,0.8)', 'rgba(212,175,55,0.4)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {building.dynasty}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 建筑图像容器 */}
      <motion.div
        className="w-full h-full relative flex flex-col justify-end items-center"
        animate={{
          scale: isHovering && hoverProgress < ACTIVATION_THRESHOLD ? 1.05 : 1,
          y: isHovering && hoverProgress < ACTIVATION_THRESHOLD ? -10 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* 建筑图像 */}
        <div
          className="w-full h-full flex items-center justify-center relative transition-all duration-700"
          style={{
            filter: isHovering && hoverProgress < ACTIVATION_THRESHOLD
              ? 'drop-shadow(0px 15px 35px rgba(212,175,55,0.5)) brightness(1.15) contrast(1.1) sepia(0.2) saturate(1.3)'
              : 'drop-shadow(0px 10px 20px rgba(0,0,0,0.8)) sepia(0.5) hue-rotate(-5deg) saturate(1.1) brightness(0.85)',
          }}
        >
          <motion.img
            src={building.imageUrl}
            alt={building.name}
            className="w-full h-full object-contain select-none"
            draggable={false}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* 底部光晕 */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        {/* 建筑名称 */}
        <CalligraphyTitle
          text={building.name}
          isVisible={!isHovering || hoverProgress >= ACTIVATION_THRESHOLD}
          delay={createStaggerDelay(index, 0.1)}
        />
        
        {/* 位置信息 */}
        <AnimatePresence>
          {isHovering && hoverProgress < ACTIVATION_THRESHOLD && (
            <motion.div
              className="absolute bottom-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <span className="text-sm text-[#D4AF37]/70 tracking-widest">
                {building.location}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* 悬浮粒子效果 */}
      <AnimatePresence>
        {isHovering && hoverProgress < ACTIVATION_THRESHOLD && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <GoldenParticles intensity="subtle" />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CinematicBuildingCard;
