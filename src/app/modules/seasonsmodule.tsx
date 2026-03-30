import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Cloud, Snowflake, Leaf } from 'lucide-react';
import { BuildingData, SEASONS, SeasonConfig } from '../types';

interface SeasonsModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

const seasonIcons = {
  spring: Sun,
  summer: Cloud,
  autumn: Leaf,
  winter: Snowflake
};

const seasonColors = {
  spring: { primary: '#4CAF50', secondary: '#81C784', bg: 'rgba(76, 175, 80, 0.1)' },
  summer: { primary: '#FF9800', secondary: '#FFB74D', bg: 'rgba(255, 152, 0, 0.1)' },
  autumn: { primary: '#D4AF37', secondary: '#FFD54F', bg: 'rgba(212, 175, 55, 0.1)' },
  winter: { primary: '#90CAF9', secondary: '#BBDEFB', bg: 'rgba(144, 202, 249, 0.1)' }
};

const seasonAtmospheres = {
  spring: '花开满园，燕语莺声',
  summer: '绿荫如盖，蝉鸣悠长',
  autumn: '金风送爽，层林尽染',
  winter: '白雪皑皑，寒梅傲雪'
};

export default function SeasonsModule({ building, onComplete, isCompleted }: SeasonsModuleProps) {
  const [currentSeason, setCurrentSeason] = useState<SeasonConfig>(SEASONS[0]);
  const [timeOfDay, setTimeOfDay] = useState(12);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [visitedSeasons, setVisitedSeasons] = useState<string[]>([]);

  useEffect(() => {
    if (!visitedSeasons.includes(currentSeason.id)) {
      setVisitedSeasons(prev => [...prev, currentSeason.id]);
    }
  }, [currentSeason.id]);

  useEffect(() => {
    if (visitedSeasons.length === SEASONS.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [visitedSeasons, isComplete, onComplete]);

  const handleSeasonChange = (season: SeasonConfig) => {
    setCurrentSeason(season);
  };

  const handleTimeChange = (time: number) => {
    setTimeOfDay(time);
  };

  const getLightAngle = () => {
    const baseAngle = currentSeason.lightAngle;
    const timeOffset = (timeOfDay - 12) * 3;
    return baseAngle + timeOffset;
  };

  const getAtmosphereStyle = () => {
    const colors = seasonColors[currentSeason.id];
    const lightAngle = getLightAngle();
    
    return {
      background: `
        radial-gradient(
          ellipse at ${50 + Math.cos(lightAngle * Math.PI / 180) * 30}% ${50 - Math.sin(lightAngle * Math.PI / 180) * 20}%,
          ${colors.bg} 0%,
          transparent 50%
        ),
        linear-gradient(
          ${lightAngle}deg,
          rgba(0, 0, 0, 0.3) 0%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 100%
        )
      `
    };
  };

  const Icon = seasonIcons[currentSeason.id];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
        四时光影 · 季节流转
      </div>

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <motion.div
          key={currentSeason.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={getAtmosphereStyle()}
        />

        <div className="relative z-10 flex items-center gap-16">
          <motion.div
            key={currentSeason.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              <defs>
                <linearGradient id={`seasonGrad-${currentSeason.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={seasonColors[currentSeason.id].primary} />
                  <stop offset="100%" stopColor={seasonColors[currentSeason.id].secondary} />
                </linearGradient>
                <filter id="seasonGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.rect
                x="40"
                y="30"
                width="120"
                height="80"
                fill={`url(#seasonGrad-${currentSeason.id})`}
                opacity="0.3"
                filter="url(#seasonGlow)"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              />

              <motion.path
                d="M100,30 L160,70 L40,70 Z"
                fill={`url(#seasonGrad-${currentSeason.id})`}
                opacity="0.5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              <motion.rect
                x="60"
                y="110"
                width="80"
                height="60"
                fill={`url(#seasonGrad-${currentSeason.id})`}
                opacity="0.4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {currentSeason.id === 'winter' && (
                <>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={30 + Math.random() * 140}
                      cy={Math.random() * 200}
                      r="2"
                      fill="#fff"
                      opacity="0.6"
                      initial={{ y: -20 }}
                      animate={{ y: 220 }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </>
              )}

              {currentSeason.id === 'spring' && (
                <>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={50 + Math.random() * 100}
                      cy={40 + Math.random() * 60}
                      r="3"
                      fill="#FF69B4"
                      opacity="0.7"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </>
              )}
            </svg>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Icon size={32} style={{ color: seasonColors[currentSeason.id].primary }} />
                <span 
                  className="text-4xl tracking-[0.5em]"
                  style={{ color: seasonColors[currentSeason.id].primary }}
                >
                  {currentSeason.name}
                </span>
              </div>
              <p className="text-[#F5F5DC]/70 tracking-[0.3em]">
                {seasonAtmospheres[currentSeason.id]}
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="text-center">
              <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em] mb-4">时辰</p>
              <div className="flex flex-col items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={timeOfDay}
                  onChange={(e) => handleTimeChange(Number(e.target.value))}
                  className="w-48 h-2 bg-[#D4AF37]/20 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-[#D4AF37]
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="text-[#D4AF37] text-lg tracking-[0.3em]">
                  {String(Math.floor(timeOfDay)).padStart(2, '0')}:00
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em] mb-4">季节</p>
              <div className="flex gap-4">
                {SEASONS.map((season) => {
                  const SeasonIcon = seasonIcons[season.id];
                  const isActive = currentSeason.id === season.id;
                  const isVisited = visitedSeasons.includes(season.id);
                  
                  return (
                    <motion.button
                      key={season.id}
                      onClick={() => handleSeasonChange(season)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer relative ${
                        isActive
                          ? 'ring-2 ring-offset-2 ring-offset-[#0A1110]'
                          : ''
                      }`}
                      style={{
                        backgroundColor: seasonColors[season.id].bg,
                        borderColor: seasonColors[season.id].primary,
                        borderWidth: isActive ? 2 : 1,
                        ringColor: isActive ? seasonColors[season.id].primary : undefined
                      }}
                    >
                      <SeasonIcon 
                        size={24} 
                        style={{ color: seasonColors[season.id].primary }}
                      />
                      {isVisited && !isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-[#C23531] rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 flex items-center justify-center gap-8 border-t border-[#D4AF37]/20">
        <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
          已探索 {visitedSeasons.length} / {SEASONS.length} 季节
        </p>
        <div className="flex gap-2">
          {SEASONS.map(season => (
            <div
              key={season.id}
              className={`w-2 h-2 rounded-full transition-all ${
                visitedSeasons.includes(season.id) ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 1 : 0 }}
        className="absolute inset-0 bg-[#0A1110]/95 flex items-center justify-center z-50 pointer-events-none"
        style={{ pointerEvents: isComplete ? 'auto' : 'none' }}
      >
        {isComplete && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="text-center"
          >
            <div className="w-24 h-24 border-4 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#D4AF37] text-4xl">时</span>
            </div>
            <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">四时之序</h3>
            <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
