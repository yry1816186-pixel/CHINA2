import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BuildingData } from '../types';
import { Layers, ChevronUp, ChevronDown, Info } from 'lucide-react';
import { SealStamp, GoldenParticles } from '../components/CinematicEffects';

interface PagodaModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface PagodaLevel {
  level: number;
  name: string;
  description: string;
  structure: string[];
}

const PAGODA_LEVELS: PagodaLevel[] = [
  { 
    level: 1, 
    name: '塔基', 
    description: '塔基是佛塔的根基，承载着整座塔的重量。通常采用须弥座形式，象征佛教的须弥山。',
    structure: ['须弥座基座', '金刚力士像', '莲花瓣装饰']
  },
  { 
    level: 2, 
    name: '第一层', 
    description: '塔身第一层通常最为宽大，内部供奉佛像或舍利。外部雕刻佛教故事与装饰纹样。',
    structure: ['拱形门洞', '佛像龛位', '飞天浮雕']
  },
  { 
    level: 3, 
    name: '第二层', 
    description: '塔身向上逐层收分，形成优美的轮廓线。每层皆有屋檐，形成丰富的光影层次。',
    structure: ['叠涩出檐', '仿木斗拱', '风铃悬挂']
  },
  { 
    level: 4, 
    name: '第三层', 
    description: '继续向上，塔身渐细。内部设有楼梯，可登临远眺。窗洞设计兼顾采光与通风。',
    structure: ['螺旋楼梯', '直棂窗', '平座栏杆']
  },
  { 
    level: 5, 
    name: '顶层', 
    description: '塔身最上层，视野开阔。登临此处，可俯瞰全城，体会古人"欲穷千里目"的意境。',
    structure: ['观景平台', '藻井天花', '匾额题字']
  },
  { 
    level: 6, 
    name: '塔刹', 
    description: '塔刹是佛塔的最高部分，由刹座、刹杆、相轮、宝珠等组成，象征佛教的宇宙观。',
    structure: ['刹座', '相轮十三天', '宝珠华盖']
  },
];

export default function PagodaModule({ building, onComplete, isCompleted }: PagodaModuleProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [viewedLevels, setViewedLevels] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (viewedLevels.length === PAGODA_LEVELS.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [viewedLevels, isComplete, onComplete]);

  const handleLevelChange = (direction: 'up' | 'down') => {
    const newLevel = direction === 'up' 
      ? Math.min(currentLevel + 1, PAGODA_LEVELS.length - 1)
      : Math.max(currentLevel - 1, 0);
    
    setCurrentLevel(newLevel);
    if (!viewedLevels.includes(newLevel)) {
      setViewedLevels(prev => [...prev, newLevel]);
    }
  };

  const renderPagodaSVG = () => {
    const level = PAGODA_LEVELS[currentLevel];
    
    return (
      <svg viewBox="0 0 300 400" className="w-full h-full">
        <defs>
          <linearGradient id="pagodaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7355"/>
            <stop offset="50%" stopColor="#A08060"/>
            <stop offset="100%" stopColor="#6B5B45"/>
          </linearGradient>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5B4B35"/>
            <stop offset="100%" stopColor="#3B2B15"/>
          </linearGradient>
          <filter id="pagodaGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="300" height="400" fill="#0A1110"/>

        {currentLevel >= 1 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <rect x="100" y="300" width="100" height="30" fill="url(#pagodaGrad)" rx="2"/>
            <rect x="90" y="290" width="120" height="15" fill="url(#roofGrad)" rx="1"/>
            <path d="M90 295 Q150 305 210 295" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5"/>
          </motion.g>
        )}

        {currentLevel >= 2 && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <rect x="105" y="250" width="90" height="45" fill="url(#pagodaGrad)" rx="2"/>
            <rect x="95" y="240" width="110" height="15" fill="url(#roofGrad)" rx="1"/>
            <rect x="140" y="265" width="20" height="30" fill="#D4AF37" opacity="0.3" rx="1"/>
          </motion.g>
        )}

        {currentLevel >= 3 && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <rect x="110" y="200" width="80" height="45" fill="url(#pagodaGrad)" rx="2"/>
            <rect x="100" y="190" width="100" height="15" fill="url(#roofGrad)" rx="1"/>
            <rect x="145" y="215" width="10" height="25" fill="#D4AF37" opacity="0.3" rx="1"/>
          </motion.g>
        )}

        {currentLevel >= 4 && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <rect x="115" y="155" width="70" height="40" fill="url(#pagodaGrad)" rx="2"/>
            <rect x="105" y="145" width="90" height="15" fill="url(#roofGrad)" rx="1"/>
            <rect x="145" y="170" width="10" height="20" fill="#D4AF37" opacity="0.3" rx="1"/>
          </motion.g>
        )}

        {currentLevel >= 5 && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <rect x="120" y="115" width="60" height="35" fill="url(#pagodaGrad)" rx="2"/>
            <rect x="110" y="105" width="80" height="15" fill="url(#roofGrad)" rx="1"/>
            <rect x="145" y="125" width="10" height="18" fill="#D4AF37" opacity="0.3" rx="1"/>
          </motion.g>
        )}

        {currentLevel >= 6 && (
          <motion.g
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <rect x="145" y="60" width="10" height="45" fill="#D4AF37"/>
            <circle cx="150" cy="55" r="8" fill="#D4AF37"/>
            {Array.from({ length: 5 }).map((_, i) => (
              <ellipse
                key={i}
                cx="150"
                cy={70 + i * 8}
                rx={15 - i * 2}
                ry="3"
                fill="#D4AF37"
                opacity={0.8 - i * 0.1}
              />
            ))}
          </motion.g>
        )}

        {currentLevel === 0 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <rect x="80" y="300" width="140" height="50" fill="#6B5B45" rx="3"/>
            <rect x="70" y="290" width="160" height="20" fill="#8B7355" rx="2"/>
            <path d="M70 310 Q150 320 230 310" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5"/>
          </motion.g>
        )}

        <motion.text
          x="150"
          y="380"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="14"
          fontFamily="'Noto Serif SC', serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {level.name}
        </motion.text>
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex relative">
      <GoldenParticles count={20} intensity="subtle" />
      <div className="flex-1 flex items-center justify-center relative p-8">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[#D4AF37]">
          <Layers size={20} />
          <span className="tracking-[0.3em] text-sm">垂直登临</span>
        </div>

        <div className="flex items-center gap-8">
          <motion.button
            onClick={() => handleLevelChange('down')}
            disabled={currentLevel === 0}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              currentLevel === 0
                ? 'border-[#D4AF37]/20 text-[#D4AF37]/20'
                : 'border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'
            }`}
            whileHover={currentLevel !== 0 ? { scale: 1.1 } : {}}
            whileTap={currentLevel !== 0 ? { scale: 0.95 } : {}}
          >
            <ChevronDown size={24} />
          </motion.button>

          <div className="w-48">
            {renderPagodaSVG()}
          </div>

          <motion.button
            onClick={() => handleLevelChange('up')}
            disabled={currentLevel === PAGODA_LEVELS.length - 1}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              currentLevel === PAGODA_LEVELS.length - 1
                ? 'border-[#D4AF37]/20 text-[#D4AF37]/20'
                : 'border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'
            }`}
            whileHover={currentLevel !== PAGODA_LEVELS.length - 1 ? { scale: 1.1 } : {}}
            whileTap={currentLevel !== PAGODA_LEVELS.length - 1 ? { scale: 0.95 } : {}}
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {PAGODA_LEVELS.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentLevel
                    ? 'bg-[#D4AF37] scale-125'
                    : viewedLevels.includes(index)
                      ? 'bg-[#D4AF37]/60'
                      : 'bg-[#D4AF37]/20'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setCurrentLevel(index);
                  if (!viewedLevels.includes(index)) {
                    setViewedLevels(prev => [...prev, index]);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-80 border-l border-[#D4AF37]/20 p-6 flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          {PAGODA_LEVELS[currentLevel].name}
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1"
          >
            <p className="text-[#F5F5DC]/70 tracking-[0.15em] mb-6 leading-relaxed">
              {PAGODA_LEVELS[currentLevel].description}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded"
            >
              <h4 className="text-[#D4AF37] tracking-[0.2em] mb-3 text-sm">结构特点</h4>
              <ul className="text-[#F5F5DC]/60 text-sm space-y-2">
                {PAGODA_LEVELS[currentLevel].structure.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full"/>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <span className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
            已探索 {viewedLevels.length} / {PAGODA_LEVELS.length} 层
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="absolute inset-0 bg-bg-deep/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SealStamp character="塔" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
