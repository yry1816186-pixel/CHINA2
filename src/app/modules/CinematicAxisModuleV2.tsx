/**
 * 影视级中轴线模块 V2 - "穿越时空走廊"
 * 核心技术：CSS 3D Transform + 视差滚动 + 景深系统
 * 
 * 关键创新：
 * 1. 透视走廊 - 真实的3D空间推进
 * 2. 景深模糊 - 电影级焦点切换
 * 3. 视差滚动 - 多层次深度感
 * 4. 仪式感动画 - 宫门开启、印章落下
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { BuildingData } from '../types';
import { GoldenParticles, LightRays, SealStamp, MistEffect, TimeTunnel } from '../components/CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicAxisModuleV2Props {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface AxisGate {
  id: string;
  name: string;
  description: string;
  poem: string;
  year: string;
  depth: number; // Z轴深度
}

const axisGates: AxisGate[] = [
  { id: 'gate1', name: '午门', description: '紫禁城正门，威严壮观', poem: '五凤楼高耸碧霄', year: '明永乐十八年', depth: 0 },
  { id: 'gate2', name: '太和门', description: '外朝正门，前有金水桥', poem: '金水桥横玉带长', year: '明永乐十八年', depth: 1 },
  { id: 'gate3', name: '太和殿', description: '金銮宝殿，皇权象征', poem: '金銮宝殿帝王家', year: '明永乐十八年', depth: 2 },
  { id: 'gate4', name: '中和殿', description: '皇帝休憩之所', poem: '中和位育道通天', year: '明永乐十八年', depth: 3 },
  { id: 'gate5', name: '保和殿', description: '殿试之所', poem: '保和太和天下平', year: '明永乐十八年', depth: 4 },
];

// ============================================
// 1. 透视走廊系统 - 核心3D空间
// ============================================

const PerspectiveCorridor: React.FC<{
  currentDepth: number;
  children: React.ReactNode;
}> = ({ currentDepth, children }) => {
  const depthScale = useTransform(() => 1 + currentDepth * 0.1);
  const depthRotateX = useTransform(() => currentDepth * 5);
  
  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      style={{
        perspective: '1500px',
        perspectiveOrigin: '50% 40%',
      }}
    >
      {/* 透视容器 */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: depthRotateX.get(),
          scale: depthScale.get(),
        }}
        transition={{ duration: durations.slow, ease: easings.cinematic }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ============================================
// 2. 3D宫门组件 - 带开启动画
// ============================================

const PalaceGate3D: React.FC<{
  gate: AxisGate;
  index: number;
  isActive: boolean;
  isPassed: boolean;
  onEnter: () => void;
}> = ({ gate, index, isActive, isPassed, onEnter }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  
  // 3D变换
  const zOffset = -index * 300; // 每道门后退300px
  const scale = 1 - index * 0.08; // 远处缩小
  const opacity = isPassed ? 0.3 : 1 - index * 0.1;
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translateZ(${zOffset}px) scale(${scale})`,
        opacity,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity,
        scale,
        y: isPassed ? -100 : 0,
      }}
      transition={{ duration: durations.slow, ease: easings.cinematic }}
    >
      {/* 宫门主体 */}
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (isActive && !isPassed) {
            setIsOpening(true);
            setTimeout(onEnter, 800);
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* 门框 - 3D立体效果 */}
        <motion.div
          className="relative w-64 h-48"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateY: isOpening ? -120 : 0, // 门扇开启
          }}
          transition={{ duration: durations.dramatic, ease: easings.cinematic }}
        >
          {/* 门框装饰 */}
          <div 
            className="absolute inset-0 border-4 border-[#D4AF37] rounded-sm"
            style={{
              background: 'linear-gradient(135deg, #1A2A28 0%, #0A1110 100%)',
              boxShadow: isActive 
                ? '0 0 40px rgba(212,175,55,0.5), inset 0 0 40px rgba(212,175,55,0.1)'
                : '0 10px 30px rgba(0,0,0,0.5)',
              transform: 'translateZ(10px)',
            }}
          >
            {/* 门钉装饰 - 9x9排列 */}
            <div className="grid grid-cols-9 gap-3 p-6">
              {Array.from({ length: 81 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #F5D76E, #D4AF37)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)',
                    transform: 'translateZ(5px)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isPassed ? 0.5 : 1,
                    opacity: isPassed ? 0.3 : 0.9,
                  }}
                  transition={{ 
                    delay: createStaggerDelay(i, 0.005),
                    duration: durations.fast,
                  }}
                />
              ))}
            </div>
            
            {/* 铺首衔环 */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: 'translateZ(15px)' }}
              animate={{
                scale: isHovering ? 1.1 : 1,
              }}
            >
              <div className="w-12 h-12 rounded-full border-4 border-[#D4AF37] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37]" />
              </div>
            </motion.div>
          </div>
          
          {/* 门额 - 浮雕效果 */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{
              transform: 'translateZ(20px)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: createStaggerDelay(index, 0.1) }}
          >
            <div 
              className="text-3xl text-[#D4AF37] tracking-[0.6em] font-bold px-8 py-3"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                background: 'linear-gradient(180deg, rgba(212,175,55,0.1) 0%, transparent 100%)',
                textShadow: '0 2px 10px rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.3)',
              }}
            >
              {gate.name}
            </div>
          </motion.div>
          
          {/* 激活光环 */}
          {isActive && !isPassed && (
            <motion.div
              className="absolute -inset-8 border-2 border-[#D4AF37] rounded-sm"
              style={{ transform: 'translateZ(-10px)' }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          
          {/* 开启光芒 */}
          <AnimatePresence>
            {isOpening && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* 诗句 - 悬浮显示 */}
        <AnimatePresence>
          {(isHovering || isActive) && !isPassed && (
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <p className="text-xl text-[#D4AF37]/80 tracking-[0.4em] font-serif">
                「{gate.poem}」
              </p>
              <p className="text-sm text-[#D4AF37]/50 mt-2 tracking-widest">
                {gate.year}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// 3. 景深模糊系统 - 电影级焦点
// ============================================

const DepthOfField: React.FC<{
  focusDepth: number;
  currentDepth: number;
}> = ({ focusDepth, currentDepth }) => {
  const blurAmount = Math.abs(focusDepth - currentDepth) * 3;
  
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        background: `radial-gradient(circle at 50% 50%, transparent 30%, rgba(10,17,16,${blurAmount * 0.05}) 100%)`,
      }}
      animate={{
        opacity: blurAmount > 0 ? 1 : 0,
      }}
      transition={{ duration: durations.normal }}
    />
  );
};

// ============================================
// 4. 视差滚动层 - 多层次深度
// ============================================

const ParallaxLayers: React.FC<{
  scrollYProgress: any;
}> = ({ scrollYProgress }) => {
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -450]);
  
  const smoothBgY = useSpring(bgY, { stiffness: 100, damping: 30 });
  const smoothMidY = useSpring(midY, { stiffness: 100, damping: 30 });
  const smoothFgY = useSpring(fgY, { stiffness: 100, damping: 30 });
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* 背景层 - 最慢 */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothBgY }}
      >
        {/* 透视线条 */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[-40, -20, 0, 20, 40].map((offset, i) => (
            <motion.line
              key={i}
              x1={`${50 + offset}%`}
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.1, duration: durations.epic }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* 中景层 - 中等速度 */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothMidY }}
      >
        <MistEffect intensity="light" />
      </motion.div>
      
      {/* 前景层 - 最快 */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothFgY }}
      >
        <GoldenParticles intensity="subtle" />
      </motion.div>
    </div>
  );
};

// ============================================
// 5. 信息面板 - 仪式感展示
// ============================================

const GateInfoPanel: React.FC<{
  gate: AxisGate;
  onClose: () => void;
  onContinue: () => void;
}> = ({ gate, onClose, onContinue }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1110]/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-3xl w-full mx-8 p-12 bg-[#0B120F] border-2 border-[#D4AF37]/30 rounded-sm"
        initial={{ scale: 0.8, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={e => e.stopPropagation()}
      >
        {/* 装饰边框 */}
        <div className="absolute inset-6 border border-[#D4AF37]/20 rounded-sm pointer-events-none" />
        
        {/* 印章 */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', damping: 15 }}
        >
          <SealStamp character="礼" delay={0.5} />
        </motion.div>
        
        {/* 标题 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-5xl text-[#D4AF37] tracking-[0.6em] font-bold mb-4">
            {gate.name}
          </h2>
          <p className="text-[#D4AF37]/60 tracking-widest">{gate.year}</p>
        </motion.div>
        
        {/* 诗句 */}
        <motion.div
          className="mb-8 p-8 bg-[#D4AF37]/5 border-l-4 border-[#D4AF37]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-3xl text-[#D4AF37]/80 tracking-[0.5em] font-serif">
            「{gate.poem}」
          </p>
        </motion.div>
        
        {/* 描述 */}
        <motion.p
          className="text-xl text-[#F5F5DC]/80 leading-relaxed tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {gate.description}
        </motion.p>
        
        {/* 继续按钮 */}
        <motion.button
          className="w-full py-5 bg-[#D4AF37]/10 border-2 border-[#D4AF37] text-[#D4AF37] tracking-[0.4em] text-xl hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all cursor-pointer"
          onClick={onContinue}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          穿越此门
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// 6. 完成奖励
// ============================================

const CompletionReward: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1110]/98"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 15, delay: 0.3 }}
      >
        {/* 印章 */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <div 
            className="w-40 h-40 border-4 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto"
            style={{
              boxShadow: '0 0 60px rgba(212,175,55,0.6), inset 0 0 30px rgba(212,175,55,0.2)',
            }}
          >
            <span className="text-[#D4AF37] text-6xl font-bold">礼</span>
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h3
          className="text-5xl text-[#D4AF37] tracking-[0.6em] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          中轴之礼
        </motion.h3>
        
        {/* 描述 */}
        <motion.p
          className="text-[#F5F5DC]/60 tracking-[0.3em] text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          印记已获得
        </motion.p>
      </motion.div>
      
      {/* 粒子效果 */}
      <GoldenParticles intensity="intense" />
    </motion.div>
  );
};

// ============================================
// 7. 主组件
// ============================================

export default function CinematicAxisModuleV2({ building, onComplete, isCompleted }: CinematicAxisModuleV2Props) {
  const [currentGateIndex, setCurrentGateIndex] = useState(0);
  const [selectedGate, setSelectedGate] = useState<AxisGate | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showTunnel, setShowTunnel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // 当前深度（用于3D变换）
  const currentDepth = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 4]),
    { stiffness: 100, damping: 30 }
  );
  
  // 处理宫门进入
  const handleGateEnter = (gate: AxisGate, index: number) => {
    if (index === currentGateIndex) {
      setSelectedGate(gate);
    }
  };
  
  // 处理继续
  const handleContinue = () => {
    if (!selectedGate) return;
    
    // 显示时空隧道效果
    setShowTunnel(true);
    
    setTimeout(() => {
      setShowTunnel(false);
      setSelectedGate(null);
      setCurrentGateIndex(prev => prev + 1);
      
      // 检查是否完成
      if (currentGateIndex === axisGates.length - 1) {
        setTimeout(() => {
          setIsComplete(true);
          onComplete();
        }, 500);
      }
    }, 1500);
  };
  
  return (
    <div 
      className="w-full h-full relative overflow-hidden" 
      ref={containerRef}
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.05) 0%, #0A1110 70%)',
      }}
    >
      {/* 视差滚动层 */}
      <ParallaxLayers scrollYProgress={scrollYProgress} />
      
      {/* 光线效果 */}
      <LightRays intensity={6} rotating={false} />
      
      {/* 透视走廊 */}
      <PerspectiveCorridor currentDepth={currentGateIndex}>
        {axisGates.map((gate, index) => (
          <PalaceGate3D
            key={gate.id}
            gate={gate}
            index={index}
            isActive={index === currentGateIndex}
            isPassed={index < currentGateIndex}
            onEnter={() => handleGateEnter(gate, index)}
          />
        ))}
      </PerspectiveCorridor>
      
      {/* 景深模糊 */}
      <DepthOfField focusDepth={currentGateIndex} currentDepth={currentGateIndex} />
      
      {/* 标题 */}
      <motion.div
        className="absolute top-8 left-8 z-30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-3xl text-[#D4AF37] tracking-[0.6em] font-bold">
          循轴入院
        </h1>
        <p className="text-sm text-[#D4AF37]/60 tracking-widest mt-2">
          穿越紫禁城中轴线
        </p>
      </motion.div>
      
      {/* 进度指示 */}
      <motion.div
        className="absolute top-8 right-8 z-30 flex items-center gap-3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {axisGates.map((gate, i) => (
          <motion.div
            key={gate.id}
            className={`w-3 h-3 rounded-full transition-all ${
              i < currentGateIndex 
                ? 'bg-[#D4AF37]' 
                : i === currentGateIndex 
                  ? 'bg-[#C23531]' 
                  : 'bg-[#D4AF37]/20'
            }`}
            animate={i === currentGateIndex ? {
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
      </motion.div>
      
      {/* 提示文字 */}
      <AnimatePresence>
        {currentGateIndex < axisGates.length && !selectedGate && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <p className="text-[#D4AF37]/80 text-xl tracking-[0.4em] mb-3">
              点击 {axisGates[currentGateIndex]?.name} 进入
            </p>
            <motion.div
              className="text-[#D4AF37] text-2xl"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 时空隧道效果 */}
      <TimeTunnel active={showTunnel} />
      
      {/* 信息面板 */}
      <AnimatePresence>
        {selectedGate && (
          <GateInfoPanel
            gate={selectedGate}
            onClose={() => setSelectedGate(null)}
            onContinue={handleContinue}
          />
        )}
      </AnimatePresence>
      
      {/* 完成奖励 */}
      <AnimatePresence>
        {isComplete && <CompletionReward />}
      </AnimatePresence>
      
      {/* 粒子效果 */}
      <GoldenParticles intensity="normal" />
    </div>
  );
}
