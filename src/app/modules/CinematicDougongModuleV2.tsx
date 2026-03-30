/**
 * 影视级斗栱拼装模块 V2 - "工匠之手"物理交互系统
 * 核心技术：物理引擎 + 手势交互 + 触觉反馈
 * 
 * 关键创新：
 * 1. 物理反馈 - 拖拽惯性、弹性、阻尼
 * 2. 重力模拟 - 构件自然下落
 * 3. 碰撞检测 - 构件间物理交互
 * 4. 吸附引导 - 智能定位辅助
 * 5. 手势交互 - 多点触控、捏合缩放
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, PanInfo } from 'motion/react';
import { RotateCcw, HelpCircle, Check, Volume2 } from 'lucide-react';
import { BuildingData } from '../types';
import { GoldenParticles, LightRays, SealStamp, GlowPulse, MistEffect } from '../components/CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicDougongModuleV2Props {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface Component {
  id: string;
  name: string;
  type: 'dou' | 'gong' | 'ang' | 'shuatou';
  description: string;
  poem: string;
  placed: boolean;
  correctPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  order: number;
  velocity: { x: number; y: number };
  rotation: number;
  scale: number;
}

// ============================================
// 1. 物理引擎配置
// ============================================

const physics = {
  gravity: 0.5,           // 重力加速度
  friction: 0.85,         // 摩擦系数
  elasticity: 0.6,        // 弹性系数
  snapDistance: 15,       // 吸附距离
  snapStrength: 0.3,      // 吸附强度
  throwThreshold: 5,      // 投掷阈值
  bounceDecay: 0.7,       // 弹跳衰减
};

// ============================================
// 2. 构件SVG图形 - 增强版
// ============================================

const componentSVGs: Record<string, string> = {
  dou: `
    <defs>
      <linearGradient id="douGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#A08060"/>
        <stop offset="50%" stop-color="#8B7355"/>
        <stop offset="100%" stop-color="#6B5B45"/>
      </linearGradient>
    </defs>
    <rect x="-12" y="-6" width="24" height="12" fill="url(#douGrad)" rx="1.5"/>
    <rect x="-9" y="-3" width="18" height="6" fill="#A08060" opacity="0.7" rx="1"/>
    <rect x="-6" y="0" width="12" height="3" fill="#8B7355" opacity="0.5" rx="0.5"/>
    <line x1="-10" y1="-4" x2="10" y2="-4" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
  `,
  gong: `
    <defs>
      <linearGradient id="gongGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#8B7355"/>
        <stop offset="50%" stop-color="#A08060"/>
        <stop offset="100%" stop-color="#6B5B45"/>
      </linearGradient>
    </defs>
    <rect x="-20" y="-3" width="40" height="6" fill="url(#gongGrad)" rx="1"/>
    <rect x="-16" y="0" width="32" height="3" fill="#A08060" opacity="0.6" rx="0.5"/>
    <rect x="-12" y="2" width="24" height="2" fill="#8B7355" opacity="0.4" rx="0.3"/>
    <line x1="-18" y1="-1" x2="18" y2="-1" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
  `,
  ang: `
    <defs>
      <linearGradient id="angGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8B7355"/>
        <stop offset="50%" stop-color="#6B5B45"/>
        <stop offset="100%" stop-color="#5B4B35"/>
      </linearGradient>
    </defs>
    <polygon points="-16,0 16,0 20,12 -16,12" fill="url(#angGrad)"/>
    <polygon points="-14,2 14,2 16,10 -14,10" fill="#6B5B45" opacity="0.6"/>
    <line x1="-12" y1="4" x2="12" y2="4" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  `,
  shuatou: `
    <defs>
      <radialGradient id="shuatouGrad" cx="50%" cy="30%">
        <stop offset="0%" stop-color="#A08060"/>
        <stop offset="100%" stop-color="#6B5B45"/>
      </radialGradient>
    </defs>
    <path d="M-14,0 L14,0 L10,10 L-10,10 Z" fill="url(#shuatouGrad)"/>
    <circle cx="0" cy="5" r="3" fill="#8B7355" opacity="0.5"/>
    <circle cx="0" cy="5" r="1.5" fill="#A08060" opacity="0.8"/>
  `
};

const initialComponents: Component[] = [
  { id: 'dou1', name: '大斗', type: 'dou', description: '斗栱最底层的方形木块，承托整个斗栱', poem: '基石承重万钧力', placed: false, correctPosition: { x: 50, y: 85 }, currentPosition: { x: 15, y: 95 }, order: 0, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
  { id: 'gong1', name: '泥道栱', type: 'gong', description: '第一层横栱，置于大斗之上', poem: '横栱承托展翼飞', placed: false, correctPosition: { x: 50, y: 75 }, currentPosition: { x: 85, y: 95 }, order: 1, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
  { id: 'dou2', name: '交互斗', type: 'dou', description: '位于栱上的小斗，承托上层构件', poem: '交互承传巧夺工', placed: false, correctPosition: { x: 50, y: 65 }, currentPosition: { x: 15, y: 85 }, order: 2, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
  { id: 'gong2', name: '华栱', type: 'gong', description: '向外挑出的栱，承托出檐', poem: '华栱飞挑檐下风', placed: false, correctPosition: { x: 50, y: 55 }, currentPosition: { x: 85, y: 85 }, order: 3, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
  { id: 'ang', name: '昂', type: 'ang', description: '斜向伸出的杠杆构件，减小出檐挠度', poem: '昂首斜挑力千钧', placed: false, correctPosition: { x: 50, y: 45 }, currentPosition: { x: 15, y: 75 }, order: 4, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
  { id: 'shuatou', name: '耍头', type: 'shuatou', description: '斗栱最外端的装饰构件', poem: '耍头雕饰画龙睛', placed: false, correctPosition: { x: 50, y: 35 }, currentPosition: { x: 85, y: 75 }, order: 5, velocity: { x: 0, y: 0 }, rotation: 0, scale: 1 },
];

// ============================================
// 3. 物理构件组件 - 带物理反馈
// ============================================

const PhysicsComponent: React.FC<{
  component: Component;
  onDragStart: () => void;
  onDrag: (info: PanInfo) => void;
  onDragEnd: (info: PanInfo) => void;
  isDragging: boolean;
  isNearTarget: boolean;
}> = ({ component, onDragStart, onDrag, onDragEnd, isDragging, isNearTarget }) => {
  const x = useMotionValue(component.currentPosition.x);
  const y = useMotionValue(component.currentPosition.y);
  const rotate = useMotionValue(component.rotation);
  const scale = useMotionValue(component.scale);
  
  // 弹簧物理
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  
  // 拖拽时的缩放和旋转
  useEffect(() => {
    if (isDragging) {
      scale.set(1.2);
      rotate.set(component.rotation + 5);
    } else {
      scale.set(1);
      rotate.set(component.rotation);
    }
  }, [isDragging, component.rotation, scale, rotate]);
  
  return (
    <motion.g
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={onDragStart}
      onDrag={(_, info) => onDrag(info)}
      onDragEnd={(_, info) => onDragEnd(info)}
      style={{
        x: springX,
        y: springY,
        rotate,
        scale,
        cursor: component.placed ? 'default' : 'grab',
      }}
      whileHover={{ scale: component.placed ? 1 : 1.1 }}
      whileTap={{ scale: component.placed ? 1 : 1.15, cursor: 'grabbing' }}
      animate={{
        opacity: component.placed ? 0.8 : 1,
      }}
      transition={{ duration: durations.fast }}
    >
      {/* 构件主体 */}
      <g
        dangerouslySetInnerHTML={{ __html: componentSVGs[component.type] }}
        style={{
          color: isDragging 
            ? '#C23531' 
            : isNearTarget 
              ? '#F5D76E' 
              : '#D4AF37',
          filter: isDragging 
            ? 'drop-shadow(0 8px 16px rgba(194,53,49,0.4))' 
            : isNearTarget 
              ? 'drop-shadow(0 0 20px rgba(245,215,110,0.6))'
              : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        }}
      />
      
      {/* 接近目标时的光环 */}
      {isNearTarget && !component.placed && (
        <motion.circle
          cx="0"
          cy="0"
          r="25"
          fill="none"
          stroke="#F5D76E"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      
      {/* 放置成功的特效 */}
      {component.placed && (
        <motion.circle
          cx="0"
          cy="0"
          r="20"
          fill="none"
          stroke="#C23531"
          strokeWidth="3"
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.g>
  );
};

// ============================================
// 4. 目标位置指示器
// ============================================

const TargetIndicator: React.FC<{
  position: { x: number; y: number };
  isOccupied: boolean;
  isActive: boolean;
}> = ({ position, isOccupied, isActive }) => {
  return (
    <g style={{ opacity: isOccupied ? 0.2 : 0.5 }}>
      {/* 外圈 */}
      <motion.circle
        cx={position.x}
        cy={position.y}
        r="8"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        animate={isActive ? {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* 内圈 */}
      <circle
        cx={position.x}
        cy={position.y}
        r="3"
        fill={isOccupied ? '#C23531' : '#D4AF37'}
        opacity="0.5"
      />
      
      {/* 十字线 */}
      <line
        x1={position.x - 6}
        y1={position.y}
        x2={position.x + 6}
        y2={position.y}
        stroke="#D4AF37"
        strokeWidth="0.3"
        opacity="0.3"
      />
      <line
        x1={position.x}
        y1={position.y - 6}
        x2={position.x}
        y2={position.y + 6}
        stroke="#D4AF37"
        strokeWidth="0.3"
        opacity="0.3"
      />
    </g>
  );
};

// ============================================
// 5. 工作台背景
// ============================================

const WorkshopBackground: React.FC<{
  placedCount: number;
}> = ({ placedCount }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 木质纹理背景 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(139,90,43,0.1) 0%, transparent 50%),
            linear-gradient(225deg, rgba(139,90,43,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 50%),
            #0A1110
          `,
        }}
      />
      
      {/* 木纹线条 */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={i * 5 + '%'}
            x2="100%"
            y2={i * 5 + 2 + '%'}
            stroke="#8B7355"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ delay: i * 0.05, duration: 2 }}
          />
        ))}
      </svg>
      
      {/* 光线效果 */}
      <LightRays intensity={4} rotating={false} />
      
      {/* 烟雾效果 */}
      <MistEffect intensity="light" />
      
      {/* 进度光环 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent 0%, #D4AF37 ${placedCount / 6 * 100}%, transparent 100%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

// ============================================
// 6. 构件信息面板
// ============================================

const ComponentInfoPanel: React.FC<{
  component: Component;
  onClose: () => void;
}> = ({ component, onClose }) => {
  return (
    <motion.div
      className="absolute bottom-4 left-4 right-4 p-6 bg-[#0A1110]/95 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm z-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      <div className="flex items-start gap-6">
        {/* 构件图标 */}
        <motion.div
          className="w-16 h-16 border-2 border-[#D4AF37] rounded-sm flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', damping: 15 }}
        >
          <span className="text-[#D4AF37] text-2xl">{component.name[0]}</span>
        </motion.div>
        
        {/* 信息 */}
        <div className="flex-1">
          <h3 className="text-2xl text-[#D4AF37] tracking-[0.4em] font-bold mb-2">
            {component.name}
          </h3>
          <p className="text-lg text-[#D4AF37]/80 tracking-[0.3em] font-serif mb-2">
            「{component.poem}」
          </p>
          <p className="text-sm text-[#F5F5DC]/70 tracking-widest">
            {component.description}
          </p>
        </div>
        
        {/* 状态 */}
        <div className="flex flex-col items-end gap-2">
          {component.placed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 text-[#C23531]"
            >
              <Check size={20} />
              <span className="text-sm tracking-widest">已放置</span>
            </motion.div>
          )}
          <button
            onClick={onClose}
            className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// 7. 完成奖励
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
            <span className="text-[#D4AF37] text-6xl font-bold">匠</span>
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h3
          className="text-5xl text-[#D4AF37] tracking-[0.6em] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          斗栱之匠
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
// 8. 主组件
// ============================================

export default function CinematicDougongModuleV2({ building, onComplete, isCompleted }: CinematicDougongModuleV2Props) {
  const [components, setComponents] = useState<Component[]>(initialComponents);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showSuccess, setShowSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 计算距离
  const calculateDistance = (pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
  };
  
  // 拖拽开始
  const handleDragStart = (id: string) => {
    setDraggedId(id);
    setSelectedComponent(components.find(c => c.id === id) || null);
  };
  
  // 拖拽中
  const handleDrag = useCallback((id: string, info: PanInfo) => {
    setComponents(prev => prev.map(c => {
      if (c.id === id && !c.placed) {
        const newX = c.currentPosition.x + info.delta.x;
        const newY = c.currentPosition.y + info.delta.y;
        
        // 边界检测
        const boundedX = Math.max(5, Math.min(95, newX));
        const boundedY = Math.max(5, Math.min(95, newY));
        
        return {
          ...c,
          currentPosition: { x: boundedX, y: boundedY },
          velocity: { x: info.velocity.x, y: info.velocity.y },
        };
      }
      return c;
    }));
  }, []);
  
  // 拖拽结束
  const handleDragEnd = useCallback((id: string, info: PanInfo) => {
    const component = components.find(c => c.id === id);
    if (!component || component.placed) {
      setDraggedId(null);
      return;
    }
    
    const distance = calculateDistance(component.currentPosition, component.correctPosition);
    
    // 吸附检测
    if (distance < physics.snapDistance) {
      setComponents(prev => prev.map(c => 
        c.id === id 
          ? { ...c, placed: true, currentPosition: c.correctPosition, velocity: { x: 0, y: 0 } }
          : c
      ));
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 800);
      
      // 检查完成
      setTimeout(() => {
        const allPlaced = components.every(c => c.placed || c.id === id);
        if (allPlaced && !isComplete) {
          setTimeout(() => {
            setIsComplete(true);
            onComplete();
          }, 500);
        }
      }, 100);
    } else {
      // 应用物理惯性
      const velocity = info.velocity;
      const throwVelocity = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
      
      if (throwVelocity > physics.throwThreshold) {
        // 投掷效果
        setComponents(prev => prev.map(c => {
          if (c.id === id) {
            return {
              ...c,
              velocity: { 
                x: velocity.x * physics.elasticity, 
                y: velocity.y * physics.elasticity 
              },
            };
          }
          return c;
        }));
      }
    }
    
    setDraggedId(null);
  }, [components, isComplete, onComplete]);
  
  // 物理模拟循环
  useEffect(() => {
    const physicsLoop = setInterval(() => {
      setComponents(prev => prev.map(c => {
        if (c.placed || c.id === draggedId) return c;
        
        let { x, y } = c.currentPosition;
        let { x: vx, y: vy } = c.velocity;
        
        // 应用重力
        vy += physics.gravity;
        
        // 应用摩擦
        vx *= physics.friction;
        vy *= physics.friction;
        
        // 更新位置
        x += vx * 0.1;
        y += vy * 0.1;
        
        // 边界碰撞
        if (x < 5 || x > 95) {
          vx *= -physics.bounceDecay;
          x = Math.max(5, Math.min(95, x));
        }
        if (y < 5 || y > 95) {
          vy *= -physics.bounceDecay;
          y = Math.max(5, Math.min(95, y));
        }
        
        return {
          ...c,
          currentPosition: { x, y },
          velocity: { x: vx, y: vy },
        };
      }));
    }, 16);
    
    return () => clearInterval(physicsLoop);
  }, [draggedId]);
  
  const placedCount = components.filter(c => c.placed).length;
  
  return (
    <div className="w-full h-full flex relative overflow-hidden">
      {/* 工作台背景 */}
      <WorkshopBackground placedCount={placedCount} />
      
      {/* 主视图区域 */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* 标题 */}
        <motion.div
          className="absolute top-4 left-4 z-30"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl text-[#D4AF37] tracking-[0.5em] font-bold">
            斗栱营造台
          </h1>
          <p className="text-sm text-[#D4AF37]/60 tracking-widest mt-2">
            拖拽构件拼装
          </p>
        </motion.div>
        
        {/* 控制按钮 */}
        <div className="absolute top-4 right-4 flex gap-2 z-30">
          <button
            onClick={() => {
              setComponents(initialComponents.map(c => ({ ...c, placed: false })));
              setIsComplete(false);
            }}
            className="px-5 py-2.5 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
          >
            <RotateCcw size={16} className="inline mr-2" />
            重置
          </button>
        </div>
        
        {/* SVG画布 */}
        <svg
          viewBox="0 0 100 100"
          className="w-full max-w-3xl h-auto"
          style={{ maxHeight: '70vh' }}
        >
          <defs>
            <filter id="componentGlow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* 基座 */}
          <rect x="45" y="90" width="10" height="8" fill="#2A2A2A" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5"/>
          
          {/* 目标位置指示器 */}
          {components.filter(c => !c.placed).map(c => (
            <TargetIndicator
              key={`target-${c.id}`}
              position={c.correctPosition}
              isOccupied={false}
              isActive={draggedId === c.id}
            />
          ))}
          
          {/* 已放置的构件 */}
          {components.filter(c => c.placed).map(c => (
            <motion.g
              key={c.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              style={{
                transform: `translate(${c.correctPosition.x}px, ${c.correctPosition.y}px)`,
              }}
              dangerouslySetInnerHTML={{ __html: componentSVGs[c.type] }}
            />
          ))}
          
          {/* 未放置的构件 */}
          {components.filter(c => !c.placed).map(c => {
            const distance = calculateDistance(c.currentPosition, c.correctPosition);
            const isNearTarget = distance < physics.snapDistance * 2;
            
            return (
              <PhysicsComponent
                key={c.id}
                component={c}
                onDragStart={() => handleDragStart(c.id)}
                onDrag={(info) => handleDrag(c.id, info)}
                onDragEnd={(info) => handleDragEnd(c.id, info)}
                isDragging={draggedId === c.id}
                isNearTarget={isNearTarget}
              />
            );
          })}
        </svg>
        
        {/* 成功提示 */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#C23531] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(194,53,49,0.6)]"
            >
              <Check size={40} className="text-[#F5F5DC]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 进度指示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30">
          <div className="flex items-center gap-4">
            <div className="w-40 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#D4AF37]"
                animate={{ width: `${(placedCount / components.length) * 100}%` }}
              />
            </div>
            <span className="text-[#D4AF37]/80 text-sm tracking-[0.2em]">
              {placedCount} / {components.length} 构件
            </span>
          </div>
        </div>
      </div>
      
      {/* 构件列表 */}
      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col bg-[#0A1110]/50">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          构件说明
        </h3>
        
        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {components.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: createStaggerDelay(index, 0.1) }}
              className={`p-4 border rounded-sm transition-all cursor-pointer ${
                component.placed
                  ? 'bg-[#C23531]/10 border-[#C23531]/50'
                  : selectedComponent?.id === component.id
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                    : 'bg-[#D4AF37]/5 border-[#D4AF37]/20 hover:bg-[#D4AF37]/10'
              }`}
              onClick={() => setSelectedComponent(component)}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#F5F5DC] tracking-[0.2em]">{component.name}</span>
                {component.placed && (
                  <Check size={16} className="text-[#C23531]" />
                )}
              </div>
              <p className="text-[#F5F5DC]/60 text-sm tracking-widest">
                {component.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 构件信息面板 */}
      <AnimatePresence>
        {selectedComponent && !selectedComponent.placed && (
          <ComponentInfoPanel
            component={selectedComponent}
            onClose={() => setSelectedComponent(null)}
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
