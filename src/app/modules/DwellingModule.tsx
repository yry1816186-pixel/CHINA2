import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BuildingData } from '../types';
import { Sun, Wind, Droplets, Thermometer, Home } from 'lucide-react';
import { SealStamp, GoldenParticles } from '../components/CinematicEffects';

interface DwellingModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonConfig {
  id: Season;
  name: string;
  temperature: number;
  humidity: number;
  windDirection: string;
  lightHours: number;
  description: string;
  features: string[];
}

const SEASON_CONFIGS: SeasonConfig[] = [
  {
    id: 'spring',
    name: '春',
    temperature: 18,
    humidity: 65,
    windDirection: '东南风',
    lightHours: 12,
    description: '春暖花开，庭院生机盎然。东南风带来温润气息，天井采光充足，通风良好。',
    features: ['天井采光', '穿堂风', '庭院绿意', '檐下避雨']
  },
  {
    id: 'summer',
    name: '夏',
    temperature: 32,
    humidity: 80,
    windDirection: '南风',
    lightHours: 14,
    description: '夏日炎炎，民居自有降温妙法。深出檐遮挡烈日，天井形成烟囱效应，穿堂风带来凉意。',
    features: ['深檐遮阳', '天井拔风', '穿堂通风', '水院降温']
  },
  {
    id: 'autumn',
    name: '秋',
    temperature: 22,
    humidity: 55,
    windDirection: '西北风',
    lightHours: 11,
    description: '秋高气爽，是民居最舒适的季节。阳光斜照，庭院温暖而不燥热，适合户外活动。',
    features: ['斜阳入户', '庭院晒谷', '通风干燥', '檐下休憩']
  },
  {
    id: 'winter',
    name: '冬',
    temperature: 5,
    humidity: 40,
    windDirection: '北风',
    lightHours: 10,
    description: '冬日严寒，民居亦有保暖智慧。厚墙蓄热，南向采光，天井聚暖，围合避风。',
    features: ['厚墙蓄热', '南向采光', '天井聚暖', '围合避风']
  },
];

export default function DwellingModule({ building, onComplete, isCompleted }: DwellingModuleProps) {
  const [currentSeason, setCurrentSeason] = useState<Season>('spring');
  const [viewedSeasons, setViewedSeasons] = useState<Season[]>([]);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    if (viewedSeasons.length === SEASON_CONFIGS.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [viewedSeasons, isComplete, onComplete]);

  const handleSeasonChange = (season: Season) => {
    setCurrentSeason(season);
    if (!viewedSeasons.includes(season)) {
      setViewedSeasons(prev => [...prev, season]);
    }
  };

  const seasonConfig = SEASON_CONFIGS.find(s => s.id === currentSeason)!;

  const getSeasonColor = (season: Season) => {
    switch (season) {
      case 'spring': return '#4CAF50';
      case 'summer': return '#FF9800';
      case 'autumn': return '#D4AF37';
      case 'winter': return '#90CAF9';
      default: return '#D4AF37';
    }
  };

  const renderDwellingSVG = () => {
    const season = currentSeason;
    const skyColor = season === 'winter' ? '#1a237e' : 
                     season === 'summer' ? '#87CEEB' :
                     season === 'autumn' ? '#FFB347' : '#98FB98';
    const sunY = season === 'summer' ? 30 : season === 'winter' ? 80 : 50;
    const treeColor = season === 'spring' ? '#4CAF50' :
                      season === 'summer' ? '#228B22' :
                      season === 'autumn' ? '#D2691E' : '#696969';
    
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={skyColor}/>
            <stop offset="100%" stopColor={season === 'winter' ? '#283593' : '#E0E0E0'}/>
          </linearGradient>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F5DC"/>
            <stop offset="100%" stopColor="#D2B48C"/>
          </linearGradient>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A"/>
            <stop offset="100%" stopColor="#2A2A2A"/>
          </linearGradient>
          <filter id="shadowFilter">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>

        <rect x="0" y="0" width="400" height="300" fill="url(#skyGrad)"/>

        {season !== 'winter' && (
          <circle cx="350" cy={sunY} r="25" fill="#FFD700" opacity="0.9">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
          </circle>
        )}

        {season === 'winter' && (
          <g>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 400}
                cy={Math.random() * 150}
                r={Math.random() * 2 + 1}
                fill="#F5F5DC"
                opacity={Math.random() * 0.8 + 0.2}
                animate={{
                  y: [null, 300],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </g>
        )}

        <rect x="0" y="220" width="400" height="80" fill="#8B7355"/>

        <g filter="url(#shadowFilter)">
          <rect x="50" y="120" width="120" height="100" fill="url(#wallGrad)"/>
          <rect x="60" y="140" width="30" height="40" fill="#4A4A4A" opacity="0.8"/>
          <rect x="100" y="140" width="30" height="40" fill="#4A4A4A" opacity="0.8"/>
          <rect x="85" y="180" width="20" height="40" fill="#6B4423"/>
          <polygon points="50,120 110,80 170,120" fill="url(#roofGrad)"/>
          <line x1="110" y1="80" x2="110" y2="60" stroke="#4A4A4A" strokeWidth="3"/>
        </g>

        <g filter="url(#shadowFilter)">
          <rect x="230" y="140" width="120" height="80" fill="url(#wallGrad)"/>
          <rect x="250" y="160" width="25" height="30" fill="#4A4A4A" opacity="0.8"/>
          <rect x="305" y="160" width="25" height="30" fill="#4A4A4A" opacity="0.8"/>
          <rect x="275" y="190" width="20" height="30" fill="#6B4423"/>
          <polygon points="230,140 290,100 350,140" fill="url(#roofGrad)"/>
        </g>

        <rect x="170" y="160" width="60" height="60" fill="#1a1a1a" opacity="0.3"/>
        <rect x="175" y="165" width="50" height="50" fill="url(#skyGrad)" opacity="0.5"/>

        <motion.g
          animate={{
            x: season === 'summer' ? [0, 5, 0] : [0, 2, 0],
            y: season === 'summer' ? [0, -2, 0] : [0, -1, 0]
          }}
          transition={{
            duration: season === 'summer' ? 1 : 2,
            repeat: Infinity
          }}
        >
          <ellipse cx="30" cy="200" rx="20" ry="30" fill={treeColor}/>
          <ellipse cx="380" cy="190" rx="15" ry="25" fill={treeColor}/>
        </motion.g>

        {season === 'spring' && (
          <g>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={20 + Math.random() * 30}
                cy={170 + Math.random() * 30}
                r="2"
                fill="#FFB6C1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: Math.random() * 2, repeat: Infinity }}
              />
            ))}
          </g>
        )}

        {season === 'autumn' && (
          <g>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.ellipse
                key={i}
                cx={Math.random() * 400}
                cy={Math.random() * 100}
                rx="3"
                ry="2"
                fill="#D2691E"
                animate={{
                  y: [null, 250],
                  x: [null, (Math.random() - 0.5) * 50],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </g>
        )}

        <g opacity="0.6">
          <motion.path
            d={season === 'summer' 
              ? "M0 150 Q100 130 200 150 Q300 170 400 150"
              : "M0 160 Q100 155 200 160 Q300 165 400 160"}
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            animate={{
              d: season === 'summer'
                ? ["M0 150 Q100 130 200 150 Q300 170 400 150", "M0 150 Q100 170 200 150 Q300 130 400 150", "M0 150 Q100 130 200 150 Q300 170 400 150"]
                : ["M0 160 Q100 155 200 160 Q300 165 400 160", "M0 160 Q100 165 200 160 Q300 155 400 160", "M0 160 Q100 155 200 160 Q300 165 400 160"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex relative">
      <GoldenParticles count={15} intensity="subtle" />
      <div className="flex-1 flex items-center justify-center relative p-8">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[#D4AF37]">
          <Home size={20} />
          <span className="tracking-[0.3em] text-sm">四时宜居</span>
        </div>

        <div className="w-full max-w-xl">
          {renderDwellingSVG()}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            {SEASON_CONFIGS.map((s) => {
              const isViewed = viewedSeasons.includes(s.id);
              const isActive = currentSeason === s.id;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => handleSeasonChange(s.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-[#D4AF37] scale-110'
                      : isViewed
                        ? 'ring-1 ring-[#D4AF37]/40'
                        : 'ring-1 ring-[#D4AF37]/20 hover:ring-[#D4AF37]/40'
                  }`}
                  style={{ backgroundColor: getSeasonColor(s.id) }}
                  whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-[#0A1110] font-serif text-lg">{s.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-80 border-l border-[#D4AF37]/20 p-6 flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          {seasonConfig.name}季民居
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSeason}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1"
          >
            <p className="text-[#F5F5DC]/70 tracking-[0.15em] mb-6 leading-relaxed text-sm">
              {seasonConfig.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Thermometer size={14} className="text-[#D4AF37]"/>
                  <span className="text-[#D4AF37]/60 text-xs tracking-[0.1em]">温度</span>
                </div>
                <span className="text-[#F5F5DC] text-lg">{seasonConfig.temperature}°C</span>
              </div>
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Droplets size={14} className="text-[#D4AF37]"/>
                  <span className="text-[#D4AF37]/60 text-xs tracking-[0.1em]">湿度</span>
                </div>
                <span className="text-[#F5F5DC] text-lg">{seasonConfig.humidity}%</span>
              </div>
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Wind size={14} className="text-[#D4AF37]"/>
                  <span className="text-[#D4AF37]/60 text-xs tracking-[0.1em]">风向</span>
                </div>
                <span className="text-[#F5F5DC] text-sm">{seasonConfig.windDirection}</span>
              </div>
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Sun size={14} className="text-[#D4AF37]"/>
                  <span className="text-[#D4AF37]/60 text-xs tracking-[0.1em]">日照</span>
                </div>
                <span className="text-[#F5F5DC] text-lg">{seasonConfig.lightHours}h</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/10 rounded"
            >
              <h4 className="text-[#D4AF37] tracking-[0.2em] mb-3 text-sm">宜居特点</h4>
              <div className="flex flex-wrap gap-2">
                {seasonConfig.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#D4AF37]/20 text-[#F5F5DC]/80 text-xs rounded tracking-[0.1em]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <span className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
            已探索 {viewedSeasons.length} / {SEASON_CONFIGS.length} 季节
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
            <SealStamp character="居" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
