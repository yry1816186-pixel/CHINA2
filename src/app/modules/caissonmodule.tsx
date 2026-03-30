import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { BuildingData } from '../types';

interface CaissonModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface CaissonLevel {
  id: string;
  name: string;
  description: string;
  depth: number;
  explored: boolean;
}

const caissonLevels: CaissonLevel[] = [
  { id: 'outer', name: '外层方井', description: '藻井最外层，方形框架，象征天圆地方', depth: 0, explored: false },
  { id: 'middle', name: '中层八角', description: '八角形过渡层，寓意八方来朝', depth: 1, explored: false },
  { id: 'inner', name: '内层圆井', description: '圆形内井，象征苍穹', depth: 2, explored: false },
  { id: 'center', name: '中心蟠龙', description: '金丝楠木雕蟠龙，俯视下方，威严神圣', depth: 3, explored: false }
];

export default function CaissonModule({ building, onComplete, isCompleted }: CaissonModuleProps) {
  const [levels, setLevels] = useState(caissonLevels);
  const [currentDepth, setCurrentDepth] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<CaissonLevel | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);

  const handleLevelClick = (level: CaissonLevel) => {
    if (level.depth <= currentDepth + 1) {
      setSelectedLevel(level);
      if (level.depth === currentDepth + 1 || level.depth === 0) {
        setCurrentDepth(level.depth);
        setLevels(prev => prev.map(l => 
          l.id === level.id ? { ...l, explored: true } : l
        ));
      }
    }
  };

  const handleZoomIn = () => {
    if (currentDepth < caissonLevels.length - 1) {
      const nextLevel = caissonLevels[currentDepth + 1];
      setCurrentDepth(currentDepth + 1);
      setLevels(prev => prev.map(l => 
        l.id === nextLevel.id ? { ...l, explored: true } : l
      ));
      setSelectedLevel(nextLevel);
    }
  };

  const handleZoomOut = () => {
    if (currentDepth > 0) {
      setCurrentDepth(currentDepth - 1);
      setSelectedLevel(caissonLevels[currentDepth - 1]);
    }
  };

  const handleReset = () => {
    setLevels(caissonLevels.map(l => ({ ...l, explored: false })));
    setCurrentDepth(0);
    setSelectedLevel(null);
    setIsComplete(false);
  };

  const checkCompletion = () => {
    if (levels.every(l => l.explored) && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  };

  React.useEffect(() => {
    checkCompletion();
  }, [levels]);

  const renderCaissonSVG = () => {
    const scale = 1 + currentDepth * 0.3;
    
    return (
      <svg
        viewBox="0 0 100 100"
        className="w-full max-w-xl h-auto"
        style={{ maxHeight: '60vh', transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}
      >
        <defs>
          <radialGradient id="caissonGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
          </radialGradient>
          <filter id="caissonGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {currentDepth >= 0 && (
          <motion.rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.5, scale: 1 }}
            onClick={() => handleLevelClick(caissonLevels[0])}
            className="cursor-pointer"
          />
        )}

        {currentDepth >= 1 && (
          <motion.polygon
            points="50,15 85,35 85,65 50,85 15,65 15,35"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.8"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 0.7, rotate: 0 }}
            onClick={() => handleLevelClick(caissonLevels[1])}
            className="cursor-pointer"
          />
        )}

        {currentDepth >= 2 && (
          <motion.circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            onClick={() => handleLevelClick(caissonLevels[2])}
            className="cursor-pointer"
          />
        )}

        {currentDepth >= 3 && (
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => handleLevelClick(caissonLevels[3])}
            className="cursor-pointer"
          >
            <circle cx="50" cy="50" r="10" fill="url(#caissonGradient)" filter="url(#caissonGlow)" />
            <path
              d="M50,42 Q55,45 50,50 Q45,55 50,58 Q55,55 50,50 Q45,45 50,42"
              fill="#C23531"
              opacity="0.8"
            />
            <circle cx="50" cy="46" r="2" fill="#D4AF37" />
          </motion.g>
        )}

        <motion.text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#D4AF37"
          fontSize="4"
          fontFamily="'Noto Serif SC', serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentDepth === 3 ? 0 : 0.3 }}
        >
          仰观藻井
        </motion.text>
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
          仰观藻井 · 递归探索
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleZoomIn}
            disabled={currentDepth >= caissonLevels.length - 1}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ZoomIn size={16} className="inline mr-2" />
            深入
          </button>
          <button
            onClick={handleZoomOut}
            disabled={currentDepth <= 0}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ZoomOut size={16} className="inline mr-2" />
            返回
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
          >
            <RotateCcw size={16} className="inline mr-2" />
            重置
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          {renderCaissonSVG()}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="flex items-center gap-4">
            {caissonLevels.map((level, index) => (
              <div
                key={level.id}
                className={`w-3 h-3 rounded-full transition-all ${
                  index <= currentDepth ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'
                }`}
              />
            ))}
          </div>
          <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em] mt-2">
            第 {currentDepth + 1} 层 / 共 {caissonLevels.length} 层
          </p>
        </div>
      </div>

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          藻井层次
        </h3>

        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {caissonLevels.map((level, index) => {
            const isAccessible = level.depth <= currentDepth + 1;
            const isCurrent = level.depth === currentDepth;
            
            return (
              <motion.button
                key={level.id}
                onClick={() => isAccessible && handleLevelClick(level)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full p-4 text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                    : level.explored
                    ? 'bg-[#C23531]/10 border-[#C23531]/50'
                    : isAccessible
                    ? 'bg-[#D4AF37]/5 border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
                    : 'bg-transparent border-[#D4AF37]/10 opacity-40 cursor-not-allowed'
                } border rounded-sm`}
                disabled={!isAccessible}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#F5F5DC] tracking-[0.2em]">{level.name}</span>
                  {level.explored && <span className="text-[#C23531] text-sm">✓</span>}
                </div>
                <p className="text-[#F5F5DC]/60 text-sm tracking-widest">
                  {level.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedLevel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm"
            >
              <h4 className="text-[#D4AF37] tracking-[0.3em] mb-2">{selectedLevel.name}</h4>
              <p className="text-[#F5F5DC]/70 text-sm leading-relaxed tracking-widest">
                {selectedLevel.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#0A1110]/95 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="text-center"
            >
              <div className="w-24 h-24 border-4 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#D4AF37] text-4xl">饰</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">藻井之饰</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
