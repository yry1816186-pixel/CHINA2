/**
 * 影视级木构解析模块 - "3D建筑解剖学"
 * 核心技术：CSS 3D Transform + 爆炸视图 + 构件交互
 * 
 * 关键创新：
 * 1. 360度旋转 - 自由探索建筑结构
 * 2. 爆炸视图 - 每层构件独立展开
 * 3. 构件聚焦 - 点击构件高亮显示
 * 4. 透视切换 - 多角度观察
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { RotateCcw, Layers, Eye, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { BuildingData, STRUCTURE_LAYERS, StructureLayer } from '../types';
import { GoldenParticles, LightRays, SealStamp, GlowPulse } from '../components/CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicStructureModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

// ============================================
// 1. 3D建筑层组件 - 带透视和旋转
// ============================================

const StructureLayer3D: React.FC<{
  layer: StructureLayer;
  index: number;
  isActive: boolean;
  isSelected: boolean;
  explodeOffset: number;
  rotationY: number;
  onClick: () => void;
}> = ({ layer, index, isActive, isSelected, explodeOffset, rotationY, onClick }) => {
  // 3D变换参数
  const zOffset = explodeOffset * (index - 2.5) * 40; // 爆炸视图偏移
  const scale = isActive ? 1 : 0.95;
  const opacity = isActive ? 1 : 0.6;
  
  // 构件颜色
  const layerColors: Record<string, string> = {
    roof: '#C23531',      // 朱红
    rafter: '#8B7355',    // 木质
    purlin: '#A08060',    // 檩条
    beam: '#6B5B45',      // 梁
    column: '#8B7355',    // 柱
    platform: '#8B8682',  // 台基
  };
  
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity,
        scale,
        rotateY: rotationY,
      }}
      transition={{ 
        duration: durations.slow, 
        ease: easings.cinematic,
        delay: createStaggerDelay(index, 0.1),
      }}
      onClick={onClick}
      className="cursor-pointer"
      style={{
        transformOrigin: '50px 50px',
        filter: isSelected 
          ? 'drop-shadow(0 0 20px rgba(212,175,55,0.8)) brightness(1.2)' 
          : isActive 
            ? 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
            : 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))',
      }}
    >
      {/* 构件主体 */}
      <motion.rect
        x={20}
        y={20 + index * 12}
        width="60"
        height="10"
        fill={layerColors[layer.id] || '#D4AF37'}
        stroke={isSelected ? '#D4AF37' : 'rgba(212,175,55,0.3)'}
        strokeWidth={isSelected ? 2 : 0.5}
        rx="1"
        animate={{
          y: 20 + index * 12 + zOffset * 0.1,
        }}
        transition={{ duration: durations.normal, ease: easings.cinematic }}
      />
      
      {/* 构件纹理 */}
      <motion.line
        x1="25"
        y1={25 + index * 12 + zOffset * 0.1}
        x2="75"
        y2={25 + index * 12 + zOffset * 0.1}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
      />
      
      {/* 选中指示器 */}
      {isSelected && (
        <motion.rect
          x={18}
          y={18 + index * 12 + zOffset * 0.1}
          width="64"
          height="14"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
          rx="2"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.g>
  );
};

// ============================================
// 2. 3D建筑容器 - 透视和旋转控制
// ============================================

const Building3DContainer: React.FC<{
  children: React.ReactNode;
  rotationY: number;
  explodeOffset: number;
  viewMode: 'structure' | 'artistic';
}> = ({ children, rotationY, explodeOffset, viewMode }) => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: rotationY,
          scale: explodeOffset > 0 ? 0.9 : 1,
        }}
        transition={{ duration: durations.slow, ease: easings.cinematic }}
      >
        {/* SVG容器 */}
        <svg
          viewBox="0 0 100 100"
          className="w-full max-w-3xl h-auto"
          style={{ 
            maxHeight: '70vh',
            filter: viewMode === 'artistic' 
              ? 'sepia(0.3) saturate(1.3) brightness(1.1)' 
              : 'none',
          }}
        >
          <defs>
            {/* 木纹渐变 */}
            <linearGradient id="woodGrain" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B7355" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#A08060" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6B5B45" stopOpacity="0.8" />
            </linearGradient>
            
            {/* 朱红渐变 */}
            <linearGradient id="vermilion" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C23531" />
              <stop offset="50%" stopColor="#A02820" />
              <stop offset="100%" stopColor="#8B2020" />
            </linearGradient>
            
            {/* 金色光晕 */}
            <filter id="goldenGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* 阴影 */}
            <filter id="layerShadow">
              <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {children}
        </svg>
        
        {/* 底部阴影 */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
          animate={{
            scaleX: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

// ============================================
// 3. 构件详情面板 - 仪式感展示
// ============================================

const LayerDetailPanel: React.FC<{
  layer: StructureLayer;
  onClose: () => void;
}> = ({ layer, onClose }) => {
  return (
    <motion.div
      className="absolute right-0 top-0 bottom-0 w-96 bg-[#0A1110]/95 backdrop-blur-md border-l border-[#D4AF37]/20 p-8 z-40"
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
      >
        ✕
      </button>
      
      {/* 构件图标 */}
      <motion.div
        className="w-24 h-24 border-2 border-[#D4AF37] rounded-sm flex items-center justify-center mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: 'spring', damping: 15 }}
      >
        <span className="text-[#D4AF37] text-3xl">{layer.name[0]}</span>
      </motion.div>
      
      {/* 构件名称 */}
      <motion.h3
        className="text-3xl text-[#D4AF37] tracking-[0.5em] font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {layer.name}
      </motion.h3>
      
      {/* 构件描述 */}
      <motion.p
        className="text-lg text-[#F5F5DC]/80 leading-relaxed tracking-widest mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {layer.description}
      </motion.p>
      
      {/* 技术参数 */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: layer.color }} />
          <span className="text-[#D4AF37]/60 text-sm tracking-widest">构件颜色</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-sm bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37]/60 text-sm tracking-widest">层级位置：第 {layer.id === 'roof' ? '1' : layer.id === 'platform' ? '6' : '2-5'} 层</span>
        </div>
      </motion.div>
      
      {/* 印章 */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <SealStamp character="构" delay={0.6} />
      </motion.div>
    </motion.div>
  );
};

// ============================================
// 4. 控制面板
// ============================================

const ControlPanel: React.FC<{
  viewMode: 'structure' | 'artistic';
  onViewModeChange: (mode: 'structure' | 'artistic') => void;
  isExploded: boolean;
  onExplodeToggle: () => void;
  rotationY: number;
  onRotationChange: (angle: number) => void;
  onReset: () => void;
}> = ({ viewMode, onViewModeChange, isExploded, onExplodeToggle, rotationY, onRotationChange, onReset }) => {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30">
      {/* 左侧控制 */}
      <div className="flex gap-2">
        <button
          onClick={() => onViewModeChange('structure')}
          className={`px-5 py-2.5 text-sm tracking-[0.2em] transition-all cursor-pointer ${
            viewMode === 'structure'
              ? 'text-[#0A1110] bg-[#D4AF37]'
              : 'text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
          }`}
        >
          <Layers size={16} className="inline mr-2" />
          结构视图
        </button>
        <button
          onClick={() => onViewModeChange('artistic')}
          className={`px-5 py-2.5 text-sm tracking-[0.2em] transition-all cursor-pointer ${
            viewMode === 'artistic'
              ? 'text-[#0A1110] bg-[#D4AF37]'
              : 'text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
          }`}
        >
          <Palette size={16} className="inline mr-2" />
          艺术视图
        </button>
      </div>
      
      {/* 右侧控制 */}
      <div className="flex gap-2">
        {/* 旋转控制 */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0A1110]/80 border border-[#D4AF37]/30 rounded-sm">
          <button
            onClick={() => onRotationChange(rotationY - 15)}
            className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-[#D4AF37]/60 text-sm tracking-widest min-w-[60px] text-center">
            {Math.round(rotationY)}°
          </span>
          <button
            onClick={() => onRotationChange(rotationY + 15)}
            className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* 爆炸视图 */}
        <button
          onClick={onExplodeToggle}
          className="px-5 py-2.5 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
        >
          <Eye size={16} className="inline mr-2" />
          {isExploded ? '合并视图' : '分解视图'}
        </button>
        
        {/* 重置 */}
        <button
          onClick={onReset}
          className="px-5 py-2.5 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
        >
          <RotateCcw size={16} className="inline mr-2" />
          重置
        </button>
      </div>
    </div>
  );
};

// ============================================
// 5. 构件列表 - 侧边栏
// ============================================

const LayerList: React.FC<{
  layers: StructureLayer[];
  activeLayers: string[];
  selectedLayer: StructureLayer | null;
  onLayerClick: (layer: StructureLayer) => void;
  viewMode: 'structure' | 'artistic';
}> = ({ layers, activeLayers, selectedLayer, onLayerClick, viewMode }) => {
  return (
    <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col bg-[#0A1110]/50">
      <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
        建筑构件
      </h3>
      
      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
        {layers.map((layer, index) => {
          const isActive = activeLayers.includes(layer.id);
          const isSelected = selectedLayer?.id === layer.id;
          
          return (
            <motion.button
              key={layer.id}
              onClick={() => isActive && onLayerClick(layer)}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: createStaggerDelay(index, 0.1) }}
              className={`w-full p-4 text-left transition-all cursor-pointer ${
                isActive
                  ? isSelected
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                    : 'bg-[#D4AF37]/5 border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
                  : 'bg-transparent border-[#D4AF37]/10 opacity-40'
              } border rounded-sm`}
              disabled={!isActive}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: viewMode === 'artistic' ? layer.color : '#D4AF37' }}
                />
                <span className="text-[#F5F5DC] tracking-[0.2em]">{layer.name}</span>
                {isActive && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-[#C23531]"
                  >
                    ✓
                  </motion.span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
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
            <span className="text-[#D4AF37] text-6xl font-bold">构</span>
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h3
          className="text-5xl text-[#D4AF37] tracking-[0.6em] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          木构之骨
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

export default function CinematicStructureModule({ building, onComplete, isCompleted }: CinematicStructureModuleProps) {
  const [activeLayers, setActiveLayers] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'structure' | 'artistic'>('structure');
  const [selectedLayer, setSelectedLayer] = useState<StructureLayer | null>(null);
  const [isExploded, setIsExploded] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const [isComplete, setIsComplete] = useState(isCompleted);
  
  // 自动激活层
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeLayers.length < STRUCTURE_LAYERS.length) {
        setActiveLayers(prev => [...prev, STRUCTURE_LAYERS[prev.length].id]);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, 800);
    
    return () => clearInterval(timer);
  }, [activeLayers, isComplete, onComplete]);
  
  // 处理构件点击
  const handleLayerClick = (layer: StructureLayer) => {
    setSelectedLayer(layer);
  };
  
  // 重置
  const handleReset = () => {
    setActiveLayers([]);
    setIsExploded(false);
    setSelectedLayer(null);
    setRotationY(0);
    setIsComplete(false);
  };
  
  return (
    <div className="w-full h-full flex relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 pointer-events-none">
        <LightRays intensity={4} rotating={false} />
        <GoldenParticles intensity="subtle" />
      </div>
      
      {/* 主视图区域 */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* 控制面板 */}
        <ControlPanel
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          isExploded={isExploded}
          onExplodeToggle={() => setIsExploded(!isExploded)}
          rotationY={rotationY}
          onRotationChange={setRotationY}
          onReset={handleReset}
        />
        
        {/* 3D建筑容器 */}
        <Building3DContainer
          rotationY={rotationY}
          explodeOffset={isExploded ? 1 : 0}
          viewMode={viewMode}
        >
          {STRUCTURE_LAYERS.map((layer, index) => (
            <StructureLayer3D
              key={layer.id}
              layer={layer}
              index={index}
              isActive={activeLayers.includes(layer.id)}
              isSelected={selectedLayer?.id === layer.id}
              explodeOffset={isExploded ? 1 : 0}
              rotationY={rotationY}
              onClick={() => activeLayers.includes(layer.id) && handleLayerClick(layer)}
            />
          ))}
        </Building3DContainer>
        
        {/* 进度指示 */}
        <AnimatePresence>
          {!isComplete && activeLayers.length < STRUCTURE_LAYERS.length && (
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-40 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#D4AF37]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(activeLayers.length / STRUCTURE_LAYERS.length) * 100}%` }}
                  />
                </div>
                <span className="text-[#D4AF37]/80 text-sm tracking-[0.2em]">
                  {activeLayers.length} / {STRUCTURE_LAYERS.length} 层
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 构件列表 */}
      <LayerList
        layers={STRUCTURE_LAYERS}
        activeLayers={activeLayers}
        selectedLayer={selectedLayer}
        onLayerClick={handleLayerClick}
        viewMode={viewMode}
      />
      
      {/* 构件详情面板 */}
      <AnimatePresence>
        {selectedLayer && (
          <LayerDetailPanel
            layer={selectedLayer}
            onClose={() => setSelectedLayer(null)}
          />
        )}
      </AnimatePresence>
      
      {/* 完成奖励 */}
      <AnimatePresence>
        {isComplete && <CompletionReward />}
      </AnimatePresence>
    </div>
  );
}
