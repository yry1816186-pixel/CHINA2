import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BuildingData } from '../types';
import { Droplets, Sun, Moon, Waves } from 'lucide-react';

interface BridgeModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';

interface TimeConfig {
  id: TimeOfDay;
  name: string;
  skyGradient: string[];
  waterColor: string;
  lightAngle: number;
  description: string;
}

const TIME_CONFIGS: TimeConfig[] = [
  { 
    id: 'dawn', 
    name: '晨曦', 
    skyGradient: ['#1a1a2e', '#4a3f55', '#e8a87c'],
    waterColor: '#2a3f5f',
    lightAngle: 30,
    description: '晨光熹微，桥影朦胧，卢沟晓月虽已西沉，晨雾中的古桥更显神秘。'
  },
  { 
    id: 'day', 
    name: '正午', 
    skyGradient: ['#87CEEB', '#B0E0E6', '#F0F8FF'],
    waterColor: '#4682B4',
    lightAngle: 90,
    description: '阳光明媚，桥身轮廓清晰，石狮栩栩如生，尽显古桥雄姿。'
  },
  { 
    id: 'dusk', 
    name: '黄昏', 
    skyGradient: ['#FF6B6B', '#FFA07A', '#FFD700'],
    waterColor: '#CD853F',
    lightAngle: 15,
    description: '夕阳西下，金光洒落，桥影横卧水面，正是"卢沟晓月"的前奏。'
  },
  { 
    id: 'night', 
    name: '月夜', 
    skyGradient: ['#0c1445', '#1a237e', '#283593'],
    waterColor: '#1a237e',
    lightAngle: 0,
    description: '皓月当空，银辉如水，"卢沟晓月"美景如画，燕京八景名不虚传。'
  },
];

export default function BridgeModule({ building, onComplete, isCompleted }: BridgeModuleProps) {
  const [currentTime, setCurrentTime] = useState<TimeOfDay>('day');
  const [waterLevel, setWaterLevel] = useState(50);
  const [viewedTimes, setViewedTimes] = useState<TimeOfDay[]>([]);
  const [isComplete, setIsComplete] = useState(isCompleted);

  useEffect(() => {
    if (viewedTimes.length === TIME_CONFIGS.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [viewedTimes, isComplete, onComplete]);

  const handleTimeChange = (time: TimeOfDay) => {
    setCurrentTime(time);
    if (!viewedTimes.includes(time)) {
      setViewedTimes(prev => [...prev, time]);
    }
  };

  const timeConfig = TIME_CONFIGS.find(t => t.id === currentTime)!;

  const renderBridgeSVG = () => {
    const waterY = 200 + (100 - waterLevel) * 0.5;
    const reflectionOpacity = waterLevel > 30 ? 0.3 : 0.1;
    
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={timeConfig.skyGradient[0]}/>
            <stop offset="50%" stopColor={timeConfig.skyGradient[1]}/>
            <stop offset="100%" stopColor={timeConfig.skyGradient[2]}/>
          </linearGradient>
          <linearGradient id="bridgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B8682"/>
            <stop offset="50%" stopColor="#A9A9A9"/>
            <stop offset="100%" stopColor="#696969"/>
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={timeConfig.waterColor}/>
            <stop offset="100%" stopColor="#0a1628"/>
          </linearGradient>
          <filter id="waterRipple">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
          </filter>
        </defs>

        <rect x="0" y="0" width="400" height="300" fill="url(#skyGrad)"/>

        {currentTime === 'night' && (
          <g>
            <circle cx="320" cy="50" r="25" fill="#F5F5DC" opacity="0.9"/>
            <circle cx="320" cy="50" r="20" fill="#FFFAF0"/>
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={i}
                cx={20 + Math.random() * 360}
                cy={Math.random() * 150}
                r={Math.random() * 1.5}
                fill="#F5F5DC"
                opacity={Math.random() * 0.8}
              />
            ))}
          </g>
        )}

        {currentTime === 'dusk' && (
          <g>
            <circle cx="50" cy="100" r="30" fill="#FF6347" opacity="0.8"/>
            <circle cx="50" cy="100" r="25" fill="#FF4500" opacity="0.6"/>
          </g>
        )}

        <rect x="0" y={waterY} width="400" height={300 - waterY} fill="url(#waterGrad)"/>

        <g>
          <path
            d={`M0 ${waterY + 10} Q50 ${waterY + 5} 100 ${waterY + 15} Q150 ${waterY + 25} 200 ${waterY + 10} Q250 ${waterY - 5} 300 ${waterY + 15} Q350 ${waterY + 25} 400 ${waterY + 10}`}
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d={`M0 ${waterY + 20} Q100 ${waterY + 30} 200 ${waterY + 15} Q300 ${waterY + 5} 400 ${waterY + 25}`}
            stroke="#D4AF37"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </g>

        <g>
          <path
            d="M50 180 Q100 140 150 160 Q200 180 250 160 Q300 140 350 180"
            fill="url(#bridgeGrad)"
            stroke="#696969"
            strokeWidth="2"
          />
          
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 60 + i * 28;
            const archHeight = 30 + Math.sin(i * 0.5) * 10;
            return (
              <path
                key={i}
                d={`M${x} 180 Q${x + 14} ${180 - archHeight} ${x + 28} 180`}
                fill="none"
                stroke="#5B5B5B"
                strokeWidth="3"
              />
            );
          })}

          <rect x="45" y="175" width="310" height="10" fill="#A9A9A9" rx="2"/>
          <rect x="45" y="170" width="310" height="8" fill="#8B8682" rx="1"/>

          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <rect x={70 + i * 38} y="155" width="6" height="15" fill="#696969" rx="1"/>
              <circle cx={73 + i * 38} cy="153" r="4" fill="#D4AF37" opacity="0.6"/>
            </g>
          ))}

          <rect x="40" y="180" width="20" height="30" fill="#696969"/>
          <rect x="340" y="180" width="20" height="30" fill="#696969"/>
        </g>

        <g filter="url(#waterRipple)" opacity={reflectionOpacity} transform={`translate(0, ${waterY * 2 - 180}) scale(1, -1)`}>
          <path
            d="M50 180 Q100 140 150 160 Q200 180 250 160 Q300 140 350 180"
            fill="url(#bridgeGrad)"
            opacity="0.5"
          />
        </g>

        <motion.text
          x="200"
          y="280"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="12"
          fontFamily="'Noto Serif SC', serif"
          opacity="0.8"
        >
          水位: {waterLevel}%
        </motion.text>
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center relative p-8">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[#D4AF37]">
          <Waves size={20} />
          <span className="tracking-[0.3em] text-sm">水影桥韵</span>
        </div>

        <div className="w-full max-w-xl">
          {renderBridgeSVG()}
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
          <div className="flex items-center gap-3 mb-2">
            <Droplets size={16} className="text-[#D4AF37]/60"/>
            <span className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">水位调节</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={waterLevel}
            onChange={(e) => setWaterLevel(Number(e.target.value))}
            className="w-full h-2 bg-[#D4AF37]/20 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:bg-[#D4AF37]
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          四时景致
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {TIME_CONFIGS.map((time) => {
            const isViewed = viewedTimes.includes(time.id);
            const isActive = currentTime === time.id;
            return (
              <motion.button
                key={time.id}
                onClick={() => handleTimeChange(time.id)}
                className={`p-3 text-left transition-all cursor-pointer rounded ${
                  isActive
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                    : isViewed
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40'
                      : 'bg-transparent border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                } border`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {time.id === 'dawn' && <Sun size={14} className="text-[#FFA07A]"/>}
                  {time.id === 'day' && <Sun size={14} className="text-[#FFD700]"/>}
                  {time.id === 'dusk' && <Sun size={14} className="text-[#FF6B6B]"/>}
                  {time.id === 'night' && <Moon size={14} className="text-[#F5F5DC]"/>}
                  <span className="text-[#F5F5DC] tracking-[0.15em] text-sm">{time.name}</span>
                </div>
                {isViewed && !isActive && (
                  <span className="text-[#C23531] text-xs">✓</span>
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTime}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1"
          >
            <p className="text-[#F5F5DC]/70 tracking-[0.15em] leading-relaxed text-sm">
              {timeConfig.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <span className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
            已探索 {viewedTimes.length} / {TIME_CONFIGS.length} 时段
          </span>
        </div>
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
                <span className="text-[#D4AF37] text-4xl">桥</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">古桥遗韵</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
