import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SealStamp, GoldenParticles, GlowPulse } from '../components/CinematicEffects';
import { BuildingData, RIDGE_BEASTS, RidgeBeast } from '../types';

interface RidgeBeastModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function RidgeBeastModule({ building, onComplete, isCompleted }: RidgeBeastModuleProps) {
  const [beasts, setBeasts] = useState<RidgeBeast[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [awakenedBeasts, setAwakenedBeasts] = useState<Set<string>>(new Set());
  const [selectedBeast, setSelectedBeast] = useState<RidgeBeast | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);

  useEffect(() => {
    const palaceBeasts = RIDGE_BEASTS.slice(0, 7);
    setBeasts(palaceBeasts);
  }, []);

  useEffect(() => {
    if (awakenedBeasts.size === beasts.length && beasts.length > 0 && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [awakenedBeasts, beasts.length, isComplete, onComplete]);

  const handleBeastClick = (beast: RidgeBeast, index: number) => {
    if (index <= activeIndex + 1) {
      setActiveIndex(index);
      setSelectedBeast(beast);
      setAwakenedBeasts(prev => new Set([...prev, beast.id]));
    }
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setSelectedBeast(beasts[activeIndex - 1]);
    } else if (direction === 'next' && activeIndex < beasts.length - 1) {
      setActiveIndex(activeIndex + 1);
      setSelectedBeast(beasts[activeIndex + 1]);
    }
  };

  const renderBeastSVG = (beast: RidgeBeast, index: number) => {
    const isAwakened = awakenedBeasts.has(beast.id);
    const isActive = index === activeIndex;
    const isAccessible = index <= activeIndex + 1;

    return (
      <motion.g
        key={beast.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isAccessible ? 1 : 0.3,
          y: 0
        }}
        transition={{ delay: index * 0.1 }}
        onClick={() => isAccessible && handleBeastClick(beast, index)}
        className={isAccessible ? 'cursor-pointer' : 'cursor-not-allowed'}
      >
        <motion.rect
          x={10 + index * 12}
          y="40"
          width="10"
          height="20"
          fill={isAwakened ? '#D4AF37' : '#2A2A2A'}
          stroke={isActive ? '#C23531' : '#D4AF37'}
          strokeWidth="0.5"
          rx="1"
          whileHover={isAccessible ? { scale: 1.1 } : {}}
          animate={isActive ? {
            filter: ['drop-shadow(0 0 0px rgba(212,175,55,0.5))', 'drop-shadow(0 0 5px rgba(212,175,55,0.8))', 'drop-shadow(0 0 0px rgba(212,175,55,0.5))']
          } : {}}
          style={{ filter: isActive ? 'drop-shadow(0 0 5px rgba(212,175,55,0.8))' : undefined }}
        />

        {isAwakened && (
          <motion.circle
            cx={15 + index * 12}
            cy="45"
            r="1.5"
            fill="#C23531"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}

        <motion.text
          x={15 + index * 12}
          y="65"
          textAnchor="middle"
          fill={isAwakened ? '#D4AF37' : '#D4AF3780'}
          fontSize="2.5"
          fontFamily="'Noto Serif SC', serif"
        >
          {beast.name.slice(0, 2)}
        </motion.text>
      </motion.g>
    );
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      <GoldenParticles count={15} intensity="subtle" />
      <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
        脊兽行旅 · 屋脊守护
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <svg viewBox="0 0 100 100" className="w-full h-auto" style={{ maxHeight: '50vh' }}>
            <defs>
              <linearGradient id="ridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <motion.path
              d="M5 35 Q50 25 95 35"
              fill="none"
              stroke="url(#ridgeGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />

            <motion.rect
              x="5"
              y="35"
              width="90"
              height="3"
              fill="#2A2A2A"
              stroke="#D4AF37"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />

            {beasts.map((beast, index) => renderBeastSVG(beast, index))}

            <motion.text
              x="50"
              y="15"
              textAnchor="middle"
              fill="#D4AF37"
              fontSize="4"
              fontFamily="'Noto Serif SC', serif"
              opacity="0.5"
            >
              太和殿屋脊
            </motion.text>
          </svg>

          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => handleNavigate('prev')}
              disabled={activeIndex === 0}
              className="p-2 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => handleNavigate('next')}
              disabled={activeIndex === beasts.length - 1}
              className="p-2 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedBeast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="h-48 border-t border-[#D4AF37]/20 p-6 flex gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-[#D4AF37] flex items-center justify-center rounded-sm">
                  <span className="text-[#D4AF37] text-2xl">{selectedBeast.order + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl text-[#D4AF37] tracking-[0.3em]">{selectedBeast.name}</h3>
                  <p className="text-[#C23531] tracking-[0.2em]">{selectedBeast.meaning}</p>
                </div>
              </div>
              <p className="text-[#F5F5DC]/70 tracking-widest leading-relaxed">
                {selectedBeast.description}
              </p>
            </div>

            <div className="hidden md:flex w-48 flex-col justify-center items-center border-l border-[#D4AF37]/20 pl-6">
              <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em] mb-2">等级</p>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-4 rounded-sm ${
                      i < selectedBeast.rank + 1 ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#D4AF37] text-lg mt-2">{selectedBeast.rank + 1} 等脊兽</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 flex items-center justify-center gap-4 border-t border-[#D4AF37]/20">
        <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
          已唤醒 {awakenedBeasts.size} / {beasts.length} 只脊兽
        </p>
        <div className="flex gap-2">
          {beasts.map((beast, index) => (
            <motion.div
              key={beast.id}
              className={`w-3 h-3 rounded-full transition-all ${
                awakenedBeasts.has(beast.id) ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'
              }`}
              animate={index === activeIndex ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, repeat: index === activeIndex ? Infinity : 0 }}
            />
          ))}
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
            <SealStamp character="兽" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
