import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Check, AlertTriangle } from 'lucide-react';
import { BuildingData } from '../types';

interface RestorationModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface DamageSpot {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number };
  repaired: boolean;
}

interface RestorationStep {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

const damageSpots: DamageSpot[] = [
  { id: 'roof', name: '屋面破损', description: '琉璃瓦脱落，需重新铺设', position: { x: 50, y: 20 }, repaired: false },
  { id: 'beam', name: '梁柱腐朽', description: '木构件受潮腐朽，需更换加固', position: { x: 30, y: 50 }, repaired: false },
  { id: 'paint', name: '彩绘剥落', description: '和玺彩画褪色剥落，需重新绘制', position: { x: 70, y: 45 }, repaired: false },
  { id: 'platform', name: '台基开裂', description: '汉白玉基座出现裂缝，需修补', position: { x: 50, y: 85 }, repaired: false }
];

const restorationSteps: RestorationStep[] = [
  { id: 'survey', name: '勘察测绘', description: '详细记录建筑现状，绘制测绘图', completed: false },
  { id: 'design', name: '方案设计', description: '制定修缮方案，确定施工工艺', completed: false },
  { id: 'demolish', name: '拆卸清理', description: '拆除损坏构件，清理现场', completed: false },
  { id: 'restore', name: '修缮施工', description: '按传统工艺进行修缮', completed: false },
  { id: 'finish', name: '验收完工', description: '质量验收，归档记录', completed: false }
];

export default function RestorationModule({ building, onComplete, isCompleted }: RestorationModuleProps) {
  const [spots, setSpots] = useState(damageSpots);
  const [steps, setSteps] = useState(restorationSteps);
  const [selectedSpot, setSelectedSpot] = useState<DamageSpot | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBefore, setShowBefore] = useState(true);
  const [isComplete, setIsComplete] = useState(isCompleted);

  useEffect(() => {
    if (spots.every(s => s.repaired) && steps.every(s => s.completed) && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [spots, steps, isComplete, onComplete]);

  const handleSpotClick = (spot: DamageSpot) => {
    setSelectedSpot(spot);
  };

  const handleRepair = () => {
    if (!selectedSpot) return;

    setSpots(prev => prev.map(s => 
      s.id === selectedSpot.id ? { ...s, repaired: true } : s
    ));

    if (currentStep < steps.length) {
      setSteps(prev => prev.map((s, i) => 
        i === currentStep ? { ...s, completed: true } : s
      ));
      setCurrentStep(currentStep + 1);
    }

    setSelectedSpot(null);
  };

  const repairedCount = spots.filter(s => s.repaired).length;

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex flex-col">
        <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
          修缮实验室 · 古建新生
        </div>

        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowBefore(!showBefore)}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2"
          >
            <ArrowLeftRight size={16} />
            {showBefore ? '查看修缮后' : '查看修缮前'}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative w-full max-w-2xl">
            <svg viewBox="0 0 100 100" className="w-full h-auto" style={{ maxHeight: '60vh' }}>
              <defs>
                <filter id="damageGlow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  d="M50 10 L90 30 L10 30 Z"
                  fill={showBefore ? '#4A4A4A' : '#D4AF37'}
                  opacity="0.6"
                />
                <rect
                  x="20"
                  y="30"
                  width="60"
                  height="50"
                  fill={showBefore ? '#3A3A3A' : '#8B7355'}
                  opacity="0.7"
                />
                <rect
                  x="10"
                  y="80"
                  width="80"
                  height="15"
                  fill={showBefore ? '#2A2A2A' : '#C9B896'}
                  opacity="0.8"
                />
              </motion.g>

              {spots.map(spot => {
                const isRepaired = spot.repaired || !showBefore;
                const isSelected = selectedSpot?.id === spot.id;

                return (
                  <motion.g
                    key={spot.id}
                    onClick={() => !isRepaired && handleSpotClick(spot)}
                    className={!isRepaired ? 'cursor-pointer' : 'cursor-default'}
                  >
                    <motion.circle
                      cx={spot.position.x}
                      cy={spot.position.y}
                      r="4"
                      fill={isRepaired ? '#4CAF50' : '#C23531'}
                      stroke={isSelected ? '#D4AF37' : 'transparent'}
                      strokeWidth="0.5"
                      filter={!isRepaired ? 'url(#damageGlow)' : undefined}
                      whileHover={!isRepaired ? { scale: 1.3 } : {}}
                      animate={isSelected ? {
                        scale: [1, 1.2, 1],
                        strokeOpacity: [0.5, 1, 0.5]
                      } : {}}
                    />

                    {!isRepaired && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <line
                          x1={spot.position.x - 2}
                          y1={spot.position.y - 2}
                          x2={spot.position.x + 2}
                          y2={spot.position.y + 2}
                          stroke="#fff"
                          strokeWidth="0.5"
                        />
                        <line
                          x1={spot.position.x + 2}
                          y1={spot.position.y - 2}
                          x2={spot.position.x - 2}
                          y2={spot.position.y + 2}
                          stroke="#fff"
                          strokeWidth="0.5"
                        />
                      </motion.g>
                    )}

                    {isRepaired && (
                      <motion.text
                        x={spot.position.x}
                        y={spot.position.y + 1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#fff"
                        fontSize="3"
                      >
                        ✓
                      </motion.text>
                    )}
                  </motion.g>
                );
              })}
            </svg>

            <AnimatePresence>
              {selectedSpot && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-[#0B120F] border border-[#D4AF37]/30 rounded-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C23531]/20 flex items-center justify-center rounded-sm">
                      <AlertTriangle className="text-[#C23531]" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#D4AF37] tracking-[0.3em] mb-1">{selectedSpot.name}</h4>
                      <p className="text-[#F5F5DC]/70 text-sm tracking-widest mb-3">
                        {selectedSpot.description}
                      </p>
                      <button
                        onClick={handleRepair}
                        className="px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all cursor-pointer"
                      >
                        开始修缮
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="h-16 flex items-center justify-center gap-4 border-t border-[#D4AF37]/20">
          <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em]">
            已修缮 {repairedCount} / {spots.length} 处
          </p>
          <div className="flex gap-2">
            {spots.map(spot => (
              <div
                key={spot.id}
                className={`w-3 h-3 rounded-full transition-all ${
                  spot.repaired ? 'bg-[#4CAF50]' : 'bg-[#C23531]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          修缮流程
        </h3>

        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 border rounded-sm transition-all ${
                step.completed
                  ? 'bg-[#4CAF50]/10 border-[#4CAF50]/50'
                  : index === currentStep
                  ? 'bg-[#D4AF37]/10 border-[#D4AF37]'
                  : 'bg-transparent border-[#D4AF37]/20 opacity-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step.completed ? 'bg-[#4CAF50] text-white' : 'border border-[#D4AF37] text-[#D4AF37]'
                }`}>
                  {step.completed ? <Check size={14} /> : index + 1}
                </div>
                <span className="text-[#F5F5DC] tracking-[0.2em]">{step.name}</span>
              </div>
              <p className="text-[#F5F5DC]/60 text-sm tracking-widest pl-9">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
          <p className="text-[#D4AF37]/60 text-sm tracking-[0.2em] text-center">
            遵循"修旧如旧"原则
          </p>
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
                <span className="text-[#D4AF37] text-4xl">守</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">修缮之守</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
