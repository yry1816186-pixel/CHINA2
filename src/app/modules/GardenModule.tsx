import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BuildingData } from '../types';
import { Eye, Move, Camera } from 'lucide-react';

interface GardenModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface GardenScene {
  id: string;
  name: string;
  description: string;
  view: 'window' | 'path' | 'water';
}

const GARDEN_SCENES: GardenScene[] = [
  { id: 'window', name: '漏窗取景', description: '透过漏窗，框景入画，一步一景，移步换景', view: 'window' },
  { id: 'path', name: '曲径通幽', description: '蜿蜒小径，曲径通幽，峰回路转，柳暗花明', view: 'path' },
  { id: 'water', name: '水映倒影', description: '池水如镜，倒影成画，虚实相生，意境悠远', view: 'water' },
];

export default function GardenModule({ building, onComplete, isCompleted }: GardenModuleProps) {
  const [activeScene, setActiveScene] = useState<GardenScene | null>(null);
  const [viewedScenes, setViewedScenes] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(isCompleted);

  useEffect(() => {
    if (viewedScenes.length === GARDEN_SCENES.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [viewedScenes, isComplete, onComplete]);

  const handleSceneClick = (scene: GardenScene) => {
    setActiveScene(scene);
    if (!viewedScenes.includes(scene.id)) {
      setViewedScenes(prev => [...prev, scene.id]);
    }
  };

  const renderWindowView = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a7c59"/>
          <stop offset="100%" stopColor="#2d5a3d"/>
        </linearGradient>
        <clipPath id="windowClip">
          <circle cx="200" cy="150" r="80"/>
          <circle cx="100" cy="100" r="40"/>
          <circle cx="300" cy="100" r="40"/>
          <circle cx="100" cy="200" r="40"/>
          <circle cx="300" cy="200" r="40"/>
        </clipPath>
      </defs>
      
      <rect x="0" y="0" width="400" height="300" fill="#1a1a1a"/>
      
      <g clipPath="url(#windowClip)">
        <rect x="0" y="0" width="400" height="300" fill="url(#windowGrad)"/>
        <path d="M0 200 Q100 150 200 180 Q300 210 400 170 L400 300 L0 300 Z" fill="#3d6b4f" opacity="0.6"/>
        <circle cx="320" cy="60" r="30" fill="#D4AF37" opacity="0.8"/>
        <path d="M50 250 L80 200 L110 250 L140 190 L170 250" stroke="#2d5a3d" strokeWidth="3" fill="none"/>
        <ellipse cx="200" cy="220" rx="60" ry="20" fill="#5a8f6a" opacity="0.5"/>
      </g>
      
      <g stroke="#D4AF37" strokeWidth="2" fill="none">
        <circle cx="200" cy="150" r="80"/>
        <circle cx="100" cy="100" r="40"/>
        <circle cx="300" cy="100" r="40"/>
        <circle cx="100" cy="200" r="40"/>
        <circle cx="300" cy="200" r="40"/>
        <line x1="0" y1="150" x2="400" y2="150"/>
        <line x1="200" y1="0" x2="200" y2="300"/>
      </g>
      
      <g fill="#D4AF37" opacity="0.3">
        <rect x="195" y="70" width="10" height="160"/>
        <rect x="120" y="145" width="160" height="10"/>
      </g>
    </svg>
  );

  const renderPathView = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a7c59"/>
          <stop offset="100%" stopColor="#2d5a3d"/>
        </linearGradient>
      </defs>
      
      <rect x="0" y="0" width="400" height="300" fill="url(#pathGrad)"/>
      
      <motion.path
        d="M50 280 Q100 200 150 220 Q200 240 220 180 Q240 120 280 140 Q320 160 350 100"
        stroke="#D4AF37"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M50 280 Q100 200 150 220 Q200 240 220 180 Q240 120 280 140 Q320 160 350 100"
        stroke="#8B7355"
        strokeWidth="8"
        fill="none"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <g opacity="0.6">
        <ellipse cx="80" cy="150" rx="30" ry="40" fill="#3d6b4f"/>
        <ellipse cx="180" cy="100" rx="25" ry="35" fill="#4a7c59"/>
        <ellipse cx="300" cy="80" rx="35" ry="45" fill="#3d6b4f"/>
        <ellipse cx="320" cy="200" rx="28" ry="38" fill="#4a7c59"/>
      </g>
      
      <g fill="#D4AF37" opacity="0.4">
        <circle cx="100" cy="200" r="5"/>
        <circle cx="200" cy="180" r="5"/>
        <circle cx="280" cy="130" r="5"/>
      </g>
      
      <motion.circle
        cx="50"
        cy="280"
        r="8"
        fill="#C23531"
        initial={{ cx: 50, cy: 280 }}
        animate={{ 
          cx: [50, 150, 220, 280, 350],
          cy: [280, 220, 180, 140, 100]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );

  const renderWaterView = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a3a"/>
          <stop offset="100%" stopColor="#2d4a5a"/>
        </linearGradient>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d4a5a"/>
          <stop offset="100%" stopColor="#1a2a3a"/>
        </linearGradient>
        <filter id="waterRipple">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5"/>
        </filter>
      </defs>
      
      <rect x="0" y="0" width="400" height="150" fill="url(#skyGrad)"/>
      <rect x="0" y="150" width="400" height="150" fill="url(#waterGrad)"/>
      
      <g transform="translate(0, 150) scale(1, -1) translate(0, -150)" filter="url(#waterRipple)" opacity="0.6">
        <rect x="150" y="50" width="100" height="80" fill="#4a5a6a" rx="2"/>
        <polygon points="200,30 140,50 260,50" fill="#5a6a7a"/>
        <rect x="170" y="80" width="20" height="40" fill="#D4AF37" opacity="0.3"/>
        <rect x="210" y="80" width="20" height="40" fill="#D4AF37" opacity="0.3"/>
      </g>
      
      <g>
        <rect x="150" y="50" width="100" height="80" fill="#4a5a6a" rx="2"/>
        <polygon points="200,30 140,50 260,50" fill="#5a6a7a"/>
        <rect x="170" y="80" width="20" height="40" fill="#D4AF37" opacity="0.3"/>
        <rect x="210" y="80" width="20" height="40" fill="#D4AF37" opacity="0.3"/>
      </g>
      
      <motion.g
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="200" cy="200" rx="80" ry="10" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3"/>
        <ellipse cx="200" cy="220" rx="100" ry="12" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.2"/>
        <ellipse cx="200" cy="240" rx="120" ry="14" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.1"/>
      </motion.g>
      
      <circle cx="320" cy="60" r="25" fill="#D4AF37" opacity="0.8"/>
      <circle cx="320" cy="210" r="25" fill="#D4AF37" opacity="0.4"/>
    </svg>
  );

  const renderScene = () => {
    if (!activeScene) return null;
    switch (activeScene.view) {
      case 'window': return renderWindowView();
      case 'path': return renderPathView();
      case 'water': return renderWaterView();
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center relative p-8">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[#D4AF37]">
          <Camera size={20} />
          <span className="tracking-[0.3em] text-sm">园林景观</span>
        </div>

        <AnimatePresence mode="wait">
          {activeScene ? (
            <motion.div
              key={activeScene.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl"
            >
              {renderScene()}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl text-[#D4AF37] tracking-[0.4em] mb-2">{activeScene.name}</h3>
                <p className="text-[#F5F5DC]/70 tracking-[0.15em]">{activeScene.description}</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Move size={48} className="mx-auto mb-4 text-[#D4AF37]/50" />
              <p className="text-[#D4AF37]/60 tracking-[0.3em]">选择场景开始探索</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            <div className="w-32 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#D4AF37]"
                initial={{ width: '0%' }}
                animate={{ width: `${(viewedScenes.length / GARDEN_SCENES.length) * 100}%` }}
              />
            </div>
            <span className="text-[#D4AF37]/80 text-sm tracking-[0.2em]">
              {viewedScenes.length} / {GARDEN_SCENES.length}
            </span>
          </div>
        </div>
      </div>

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          园林意境
        </h3>

        <div className="flex-1 space-y-3">
          {GARDEN_SCENES.map((scene, index) => {
            const isViewed = viewedScenes.includes(scene.id);
            const isActive = activeScene?.id === scene.id;
            return (
              <motion.button
                key={scene.id}
                onClick={() => handleSceneClick(scene)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full p-4 text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]'
                    : isViewed
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40'
                      : 'bg-transparent border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                } border rounded-sm`}
              >
                <div className="flex items-center gap-3">
                  <Eye size={18} className={isViewed ? 'text-[#D4AF37]' : 'text-[#D4AF37]/40'} />
                  <span className="text-[#F5F5DC] tracking-[0.2em]">{scene.name}</span>
                  {isViewed && (
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
                <span className="text-[#D4AF37] text-4xl">园</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">园林意境</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
