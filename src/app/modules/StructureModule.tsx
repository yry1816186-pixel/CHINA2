import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Eye, Palette, RotateCcw } from 'lucide-react';
import { BuildingData, STRUCTURE_LAYERS, StructureLayer } from '../types';

interface StructureModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

const buildingSVGLayers = {
  roof: `
    <defs>
      <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#D4AF37"/>
        <stop offset="50%" stop-color="#B8960C"/>
        <stop offset="100%" stop-color="#8B7500"/>
      </linearGradient>
      <linearGradient id="tileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C23531"/>
        <stop offset="50%" stop-color="#A02820"/>
        <stop offset="100%" stop-color="#8B2020"/>
      </linearGradient>
    </defs>
    <g class="roof-main">
      <path d="M5 35 Q50 5 95 35 L90 38 Q50 12 10 38 Z" fill="url(#roofGradient)" opacity="0.95"/>
      <path d="M8 38 Q50 15 92 38 L88 42 Q50 20 12 42 Z" fill="url(#roofGradient)" opacity="0.8"/>
      <path d="M10 42 Q50 22 90 42 L85 48 Q50 28 15 48 Z" fill="url(#roofGradient)" opacity="0.65"/>
      <path d="M15 48 Q50 30 85 48 L80 55 Q50 38 20 55 Z" fill="url(#roofGradient)" opacity="0.5"/>
      <path d="M3 33 Q50 2 97 33" stroke="#D4AF37" stroke-width="0.8" fill="none" opacity="0.6"/>
      <ellipse cx="50" cy="8" rx="4" ry="2.5" fill="#D4AF37" opacity="0.9"/>
      <path d="M46 8 L46 5 L54 5 L54 8" fill="#D4AF37" opacity="0.7"/>
    </g>
    <g class="roof-ridge">
      <path d="M50 3 L50 12" stroke="#D4AF37" stroke-width="1.5" opacity="0.8"/>
      <circle cx="50" cy="3" r="2" fill="#D4AF37" opacity="0.9"/>
      <path d="M20 28 Q35 18 50 15 Q65 18 80 28" stroke="#D4AF37" stroke-width="0.5" fill="none" opacity="0.4"/>
    </g>
    <g class="roof-eaves">
      <path d="M5 35 Q0 38 2 42 L8 38 Z" fill="#D4AF37" opacity="0.7"/>
      <path d="M95 35 Q100 38 98 42 L92 38 Z" fill="#D4AF37" opacity="0.7"/>
      <circle cx="3" cy="40" r="1.5" fill="#D4AF37" opacity="0.5"/>
      <circle cx="97" cy="40" r="1.5" fill="#D4AF37" opacity="0.5"/>
    </g>
  `,
  rafter: `
    <g class="rafter-system">
      ${Array.from({ length: 9 }, (_, i) => {
        const x = 15 + i * 8.75;
        const leftAngle = i < 4 ? -25 + i * 5 : 0;
        const rightAngle = i > 4 ? 25 - (8-i) * 5 : 0;
        const angle = i < 4 ? leftAngle : (i > 4 ? rightAngle : 0);
        const length = i === 4 ? 25 : 20 - Math.abs(i - 4) * 2;
        return `<line 
          x1="${x}" y1="55" 
          x2="${x + Math.sin(angle * Math.PI / 180) * length}" 
          y2="${55 - Math.cos(angle * Math.PI / 180) * length}" 
          stroke="#8B7355" stroke-width="1.2" opacity="0.8"
        />`;
      }).join('')}
      <line x1="50" y1="30" x2="50" y2="55" stroke="#6B5B45" stroke-width="2" opacity="0.9"/>
      <line x1="25" y1="40" x2="25" y2="55" stroke="#6B5B45" stroke-width="1.5" opacity="0.7"/>
      <line x1="75" y1="40" x2="75" y2="55" stroke="#6B5B45" stroke-width="1.5" opacity="0.7"/>
    </g>
  `,
  purlin: `
    <g class="purlin-system">
      <ellipse cx="50" cy="32" rx="38" ry="2" fill="#A08060" opacity="0.9"/>
      <ellipse cx="50" cy="38" rx="35" ry="1.8" fill="#8B7355" opacity="0.85"/>
      <ellipse cx="50" cy="44" rx="32" ry="1.5" fill="#6B5B45" opacity="0.8"/>
      <ellipse cx="50" cy="50" rx="28" ry="1.2" fill="#5B4B35" opacity="0.75"/>
      <rect x="12" y="31" width="76" height="2" fill="#A08060" opacity="0.3" rx="1"/>
      <rect x="15" y="37" width="70" height="1.8" fill="#8B7355" opacity="0.3" rx="0.9"/>
      <rect x="18" y="43" width="64" height="1.5" fill="#6B5B45" opacity="0.3" rx="0.75"/>
    </g>
  `,
  beam: `
    <g class="beam-system">
      <rect x="18" y="55" width="64" height="5" fill="#8B7355" opacity="0.9" rx="1"/>
      <rect x="22" y="61" width="56" height="4" fill="#A08060" opacity="0.85" rx="0.8"/>
      <rect x="26" y="66" width="48" height="3.5" fill="#6B5B45" opacity="0.8" rx="0.6"/>
      <rect x="30" y="70" width="40" height="3" fill="#5B4B35" opacity="0.75" rx="0.5"/>
      <path d="M18 55 L18 60 L22 61 L22 57 Z" fill="#6B5B45" opacity="0.6"/>
      <path d="M82 55 L82 60 L78 61 L78 57 Z" fill="#6B5B45" opacity="0.6"/>
      <line x1="50" y1="55" x2="50" y2="73" stroke="#D4AF37" stroke-width="0.3" opacity="0.3"/>
    </g>
  `,
  column: `
    <g class="column-system">
      <rect x="15" y="55" width="5" height="38" fill="#8B7355" opacity="0.9" rx="1"/>
      <rect x="80" y="55" width="5" height="38" fill="#8B7355" opacity="0.9" rx="1"/>
      <rect x="35" y="55" width="4" height="38" fill="#A08060" opacity="0.85" rx="0.8"/>
      <rect x="61" y="55" width="4" height="38" fill="#A08060" opacity="0.85" rx="0.8"/>
      <rect x="48" y="55" width="4" height="38" fill="#6B5B45" opacity="0.8" rx="0.7"/>
      <ellipse cx="17.5" cy="55" rx="2.5" ry="1" fill="#D4AF37" opacity="0.4"/>
      <ellipse cx="82.5" cy="55" rx="2.5" ry="1" fill="#D4AF37" opacity="0.4"/>
      <ellipse cx="37" cy="55" rx="2" ry="0.8" fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="63" cy="55" rx="2" ry="0.8" fill="#D4AF37" opacity="0.3"/>
      <ellipse cx="50" cy="55" rx="2" ry="0.8" fill="#D4AF37" opacity="0.35"/>
      <rect x="13" y="90" width="9" height="3" fill="#6B5B45" opacity="0.7" rx="0.5"/>
      <rect x="78" y="90" width="9" height="3" fill="#6B5B45" opacity="0.7" rx="0.5"/>
      <rect x="33" y="90" width="8" height="2.5" fill="#5B4B35" opacity="0.65" rx="0.4"/>
      <rect x="59" y="90" width="8" height="2.5" fill="#5B4B35" opacity="0.65" rx="0.4"/>
      <rect x="46" y="90" width="8" height="2.5" fill="#5B4B35" opacity="0.6" rx="0.4"/>
    </g>
  `,
  platform: `
    <g class="platform-system">
      <rect x="5" y="93" width="90" height="5" fill="#8B8682" opacity="0.9" rx="0.5"/>
      <rect x="3" y="90" width="94" height="4" fill="#A9A9A9" opacity="0.7" rx="0.3"/>
      <rect x="8" y="98" width="84" height="2" fill="#6B6B6B" opacity="0.6" rx="0.2"/>
      <line x1="10" y1="95" x2="90" y2="95" stroke="#D4AF37" stroke-width="0.3" opacity="0.4"/>
      <line x1="10" y1="97" x2="90" y2="97" stroke="#D4AF37" stroke-width="0.2" opacity="0.3"/>
      <path d="M5 93 L3 90 L97 90 L95 93 Z" fill="#C0C0C0" opacity="0.3"/>
      <rect x="20" y="91" width="60" height="2" fill="#D4AF37" opacity="0.15" rx="0.2"/>
      <circle cx="25" cy="92" r="0.8" fill="#D4AF37" opacity="0.3"/>
      <circle cx="50" cy="92" r="0.8" fill="#D4AF37" opacity="0.3"/>
      <circle cx="75" cy="92" r="0.8" fill="#D4AF37" opacity="0.3"/>
    </g>
  `
};

export default function StructureModule({ building, onComplete, isCompleted }: StructureModuleProps) {
  const [activeLayers, setActiveLayers] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'structure' | 'artistic'>('structure');
  const [selectedLayer, setSelectedLayer] = useState<StructureLayer | null>(null);
  const [isExploded, setIsExploded] = useState(false);
  const [isComplete, setIsComplete] = useState(isCompleted);

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

  const handleLayerClick = (layer: StructureLayer) => {
    setSelectedLayer(layer);
  };

  const handleReset = () => {
    setActiveLayers([]);
    setIsExploded(false);
    setSelectedLayer(null);
    setIsComplete(false);
  };

  const getLayerOffset = (index: number) => {
    if (!isExploded) return 0;
    return (index - STRUCTURE_LAYERS.length / 2) * 8;
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute top-4 left-4 flex gap-2">
          <button
            onClick={() => setViewMode('structure')}
            className={`px-4 py-2 text-sm tracking-[0.2em] transition-all cursor-pointer ${
              viewMode === 'structure'
                ? 'text-[#0A1110] bg-[#D4AF37]'
                : 'text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
            }`}
          >
            <Layers size={16} className="inline mr-2" />
            结构视图
          </button>
          <button
            onClick={() => setViewMode('artistic')}
            className={`px-4 py-2 text-sm tracking-[0.2em] transition-all cursor-pointer ${
              viewMode === 'artistic'
                ? 'text-[#0A1110] bg-[#D4AF37]'
                : 'text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10'
            }`}
          >
            <Palette size={16} className="inline mr-2" />
            艺术视图
          </button>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
          >
            <Eye size={16} className="inline mr-2" />
            {isExploded ? '合并视图' : '分解视图'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
          >
            <RotateCcw size={16} className="inline mr-2" />
            重置
          </button>
        </div>

        <svg
          viewBox="0 0 100 100"
          className="w-full max-w-2xl h-auto"
          style={{ maxHeight: '70vh' }}
        >
          <defs>
            <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B7355" />
              <stop offset="50%" stopColor="#A08060" />
              <stop offset="100%" stopColor="#6B5B45" />
            </linearGradient>
            <filter id="structureGlow">
              <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {STRUCTURE_LAYERS.map((layer, index) => {
            const isActive = activeLayers.includes(layer.id);
            const offset = getLayerOffset(index);
            const color = viewMode === 'artistic' ? layer.color : '#D4AF37';

            return (
              <motion.g
                key={layer.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0,
                  y: isActive ? offset : 50
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => isActive && handleLayerClick(layer)}
                className="cursor-pointer"
                style={{ 
                  color,
                  filter: selectedLayer?.id === layer.id ? 'url(#structureGlow)' : undefined
                }}
                dangerouslySetInnerHTML={{
                  __html: buildingSVGLayers[layer.id as keyof typeof buildingSVGLayers] || ''
                }}
              />
            );
          })}

          {viewMode === 'artistic' && activeLayers.includes('roof') && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <path
                d="M50 5 L90 25 L50 15 L10 25 Z"
                fill="#C23531"
                opacity="0.5"
              />
            </motion.g>
          )}
        </svg>

        <AnimatePresence>
          {!isComplete && activeLayers.length < STRUCTURE_LAYERS.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="flex items-center gap-4">
                <div className="w-32 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
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

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          建筑构件
        </h3>

        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {STRUCTURE_LAYERS.map((layer, index) => {
            const isActive = activeLayers.includes(layer.id);
            return (
              <motion.button
                key={layer.id}
                onClick={() => isActive && handleLayerClick(layer)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full p-4 text-left transition-all cursor-pointer ${
                  isActive
                    ? selectedLayer?.id === layer.id
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

        <AnimatePresence>
          {selectedLayer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm"
            >
              <h4 className="text-[#D4AF37] tracking-[0.3em] mb-2">{selectedLayer.name}</h4>
              <p className="text-[#F5F5DC]/70 text-sm leading-relaxed tracking-widest">
                {selectedLayer.description}
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
                <span className="text-[#D4AF37] text-4xl">构</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">木构之骨</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
