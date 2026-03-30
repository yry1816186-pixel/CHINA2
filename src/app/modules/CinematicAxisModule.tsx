/**
 * 影视级中轴线模块 - "穿越时空走廊"沉浸式体验
 * 用户仿佛穿越紫禁城的中轴线，感受皇权礼制
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { BuildingData } from '../types';
import { TimeTunnel, LightRays, GoldenParticles, SealStamp, MistEffect } from '../components/CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicAxisModuleProps {
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
  isOpen: boolean;
  position: number; // 0-100 滚动位置
  depth: number; // 景深层级
}

const axisGates: AxisGate[] = [
  { 
    id: 'gate1', 
    name: '午门', 
    description: '紫禁城正门，威严壮观，五凤楼式建筑', 
    poem: '五凤楼高耸碧霄',
    year: '明永乐十八年',
    isOpen: false, 
    position: 0,
    depth: 0 
  },
  { 
    id: 'gate2', 
    name: '太和门', 
    description: '外朝正门，前有金水桥，后有太和殿', 
    poem: '金水桥横玉带长',
    year: '明永乐十八年',
    isOpen: false, 
    position: 25,
    depth: 1 
  },
  { 
    id: 'gate3', 
    name: '太和殿', 
    description: '金銮宝殿，皇权象征，九五之尊', 
    poem: '金銮宝殿帝王家',
    year: '明永乐十八年',
    isOpen: false, 
    position: 50,
    depth: 2 
  },
  { 
    id: 'gate4', 
    name: '中和殿', 
    description: '皇帝休憩之所，方形单檐攒尖顶', 
    poem: '中和位育道通天',
    year: '明永乐十八年',
    isOpen: false, 
    position: 75,
    depth: 3 
  },
  { 
    id: 'gate5', 
    name: '保和殿', 
    description: '殿试之所，重檐歇山顶', 
    poem: '保和太和天下平',
    year: '明永乐十八年',
    isOpen: false, 
    position: 100,
    depth: 4 
  }
];

// ============================================
// 1. 时空走廊背景组件
// ============================================

const TimeCorridorBackground: React.FC<{
  currentDepth: number;
}> = ({ currentDepth }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 深度渐变背景 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 100%, rgba(212,175,55,0.1) 0%, rgba(10,17,16,1) 50%)',
            `radial-gradient(circle at 50% ${50 - currentDepth * 10}%, rgba(212,175,55,${0.1 + currentDepth * 0.05}) 0%, rgba(10,17,16,1) 50%)`,
          ],
        }}
        transition={{ duration: durations.epic, ease: easings.cinematic }}
      />
      
      {/* 光线射线 */}
      <LightRays intensity={6} rotating={false} />
      
      {/* 烟雾效果 */}
      <MistEffect intensity="light" />
      
      {/* 透视线条 */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* 透视线条 */}
        {[-40, -20, 0, 20, 40].map((offset, i) => (
          <motion.line
            key={i}
            x1={`${50 + offset}%`}
            y1="0%"
            x2="50%"
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.2 + currentDepth * 0.05 
            }}
            transition={{ 
              delay: i * 0.1,
              duration: durations.epic,
              ease: easings.cinematic 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// ============================================
// 2. 宫门组件 - 带仪式感开启动画
// ============================================

const PalaceGate: React.FC<{
  gate: AxisGate;
  index: number;
  isActive: boolean;
  isPassed: boolean;
  onEnter: () => void;
}> = ({ gate, index, isActive, isPassed, onEnter }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
      style={{ top: `${100 - gate.position}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isPassed ? 0.3 : 1,
        scale: isPassed ? 0.9 : 1,
        y: isPassed ? -50 : 0,
      }}
      transition={{ duration: durations.slow, ease: easings.cinematic }}
    >
      {/* 宫门主体 */}
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onEnter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* 门框 */}
        <motion.div
          className="relative w-48 h-32 border-4 border-[#D4AF37] rounded-sm overflow-hidden"
          animate={{
            borderColor: isActive 
              ? '#D4AF37' 
              : isHovering 
                ? 'rgba(212,175,55,0.8)' 
                : 'rgba(212,175,55,0.4)',
            boxShadow: isActive
              ? '0 0 30px rgba(212,175,55,0.5), inset 0 0 30px rgba(212,175,55,0.1)'
              : isHovering
                ? '0 0 20px rgba(212,175,55,0.3)'
                : 'none',
          }}
          transition={{ duration: durations.normal }}
        >
          {/* 门扇 */}
          <motion.div
            className="absolute inset-2 bg-gradient-to-b from-[#1A2A28] to-[#0A1110]"
            initial={{ opacity: 1 }}
            animate={{ opacity: isPassed ? 0.3 : 1 }}
          >
            {/* 门钉装饰 */}
            <div className="grid grid-cols-5 gap-2 p-3">
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#D4AF37]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isPassed ? 0.5 : 1,
                    opacity: isPassed ? 0.3 : 0.8,
                  }}
                  transition={{ 
                    delay: createStaggerDelay(i, 0.02),
                    duration: durations.fast,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* 开启效果 */}
          <AnimatePresence>
            {isPassed && (
              <motion.div
                className="absolute inset-0 bg-[#D4AF37]/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* 光芒 */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* 激活指示器 */}
          {isActive && !isPassed && (
            <motion.div
              className="absolute -inset-4 border-2 border-[#D4AF37] rounded-sm"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        {/* 门额 */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: createStaggerDelay(index, 0.1) }}
        >
          <span 
            className="text-2xl text-[#D4AF37] tracking-[0.5em] font-bold"
            style={{ 
              fontFamily: "'Noto Serif SC', serif",
              textShadow: '0 2px 10px rgba(212,175,55,0.5)',
            }}
          >
            {gate.name}
          </span>
        </motion.div>
        
        {/* 年代标签 */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering || isActive ? 1 : 0 }}
        >
          <span className="text-xs text-[#D4AF37]/60 tracking-widest">
            {gate.year}
          </span>
        </motion.div>
      </motion.div>
      
      {/* 诗句 */}
      <AnimatePresence>
        {(isHovering || isActive) && !isPassed && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <p className="text-[#D4AF37]/80 text-lg tracking-[0.3em] font-serif">
              「{gate.poem}」
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================
// 3. 信息面板组件
// ============================================

const GateInfoPanel: React.FC<{
  gate: AxisGate;
  onClose: () => void;
  onContinue: () => void;
}> = ({ gate, onClose, onContinue }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1110]/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-2xl w-full mx-8 p-12 bg-[#0B120F] border-2 border-[#D4AF37]/30 rounded-sm"
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={e => e.stopPropagation()}
      >
        {/* 装饰边框 */}
        <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-sm pointer-events-none" />
        
        {/* 印章 */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: 'spring', damping: 15 }}
        >
          <SealStamp character="礼" delay={0.3} />
        </motion.div>
        
        {/* 标题 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl text-[#D4AF37] tracking-[0.5em] font-bold mb-4">
            {gate.name}
          </h2>
          <p className="text-[#D4AF37]/60 tracking-widest">{gate.year}</p>
        </motion.div>
        
        {/* 诗句 */}
        <motion.div
          className="mb-8 p-6 bg-[#D4AF37]/5 border-l-4 border-[#D4AF37]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl text-[#D4AF37]/80 tracking-[0.4em] font-serif">
            「{gate.poem}」
          </p>
        </motion.div>
        
        {/* 描述 */}
        <motion.p
          className="text-lg text-[#F5F5DC]/80 leading-relaxed tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {gate.description}
        </motion.p>
        
        {/* 继续按钮 */}
        <motion.button
          className="w-full py-4 bg-[#D4AF37]/10 border-2 border-[#D4AF37] text-[#D4AF37] tracking-[0.3em] text-lg hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all cursor-pointer"
          onClick={onContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
// 4. 完成奖励组件
// ============================================

const CompletionReward: React.FC<{
  onComplete: () => void;
}> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1110]/95"
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
          <div className="w-32 h-32 border-4 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            <span className="text-[#D4AF37] text-5xl font-bold">礼</span>
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h3
          className="text-4xl text-[#D4AF37] tracking-[0.5em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          中轴之礼
        </motion.h3>
        
        {/* 描述 */}
        <motion.p
          className="text-[#F5F5DC]/60 tracking-[0.2em] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          印记已获得
        </motion.p>
        
        {/* 粒子效果 */}
        <GoldenParticles intensity="intense" />
      </motion.div>
    </motion.div>
  );
};

// ============================================
// 5. 主组件
// ============================================

export default function CinematicAxisModule({ building, onComplete, isCompleted }: CinematicAxisModuleProps) {
  const [gates, setGates] = useState(axisGates);
  const [currentGateIndex, setCurrentGateIndex] = useState(0);
  const [selectedGate, setSelectedGate] = useState<AxisGate | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showTunnel, setShowTunnel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // 当前深度
  const currentDepth = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const smoothDepth = useSpring(currentDepth, { stiffness: 100, damping: 30 });
  
  // 处理宫门进入
  const handleGateEnter = (gate: AxisGate, index: number) => {
    if (index === currentGateIndex) {
      setSelectedGate(gate);
    }
  };
  
  // 处理继续
  const handleContinue = () => {
    if (!selectedGate) return;
    
    // 标记为已通过
    setGates(prev => prev.map(g => 
      g.id === selectedGate.id ? { ...g, isOpen: true } : g
    ));
    
    // 显示时空隧道效果
    setShowTunnel(true);
    
    setTimeout(() => {
      setShowTunnel(false);
      setSelectedGate(null);
      setCurrentGateIndex(prev => prev + 1);
      
      // 检查是否完成
      if (currentGateIndex === gates.length - 1) {
        setTimeout(() => {
          setIsComplete(true);
          onComplete();
        }, 500);
      }
    }, 1500);
  };
  
  return (
    <div className="w-full h-full relative overflow-hidden" ref={containerRef}>
      {/* 时空走廊背景 */}
      <TimeCorridorBackground currentDepth={currentGateIndex} />
      
      {/* 标题 */}
      <motion.div
        className="absolute top-8 left-8 z-30"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-2xl text-[#D4AF37] tracking-[0.5em] font-bold">
          循轴入院
        </h1>
        <p className="text-sm text-[#D4AF37]/60 tracking-widest mt-2">
          穿越紫禁城中轴线
        </p>
      </motion.div>
      
      {/* 进度指示 */}
      <motion.div
        className="absolute top-8 right-8 z-30 flex items-center gap-2"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {gates.map((gate, i) => (
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
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
      </motion.div>
      
      {/* 宫门走廊 */}
      <div className="relative h-[500%] w-full">
        {gates.map((gate, index) => (
          <PalaceGate
            key={gate.id}
            gate={gate}
            index={index}
            isActive={index === currentGateIndex}
            isPassed={index < currentGateIndex}
            onEnter={() => handleGateEnter(gate, index)}
          />
        ))}
      </div>
      
      {/* 提示文字 */}
      <AnimatePresence>
        {currentGateIndex < gates.length && !selectedGate && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="text-[#D4AF37]/80 text-lg tracking-[0.3em] mb-2">
              点击 {gates[currentGateIndex]?.name} 进入
            </p>
            <motion.div
              className="text-[#D4AF37]"
              animate={{ y: [0, 10, 0] }}
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
        {isComplete && <CompletionReward onComplete={() => {}} />}
      </AnimatePresence>
      
      {/* 粒子效果 */}
      <GoldenParticles intensity="normal" />
    </div>
  );
}
