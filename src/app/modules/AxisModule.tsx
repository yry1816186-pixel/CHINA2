import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Info } from 'lucide-react';
import { BuildingData } from '../types';

interface AxisModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface AxisGate {
  id: string;
  name: string;
  description: string;
  isOpen: boolean;
  position: { x: number; y: number };
}

const defaultGates: AxisGate[] = [
  { id: 'gate1', name: '午门', description: '紫禁城正门，威严壮观，五凤楼式建筑', isOpen: false, position: { x: 50, y: 85 } },
  { id: 'gate2', name: '太和门', description: '外朝正门，前有金水桥，后有太和殿', isOpen: false, position: { x: 50, y: 65 } },
  { id: 'gate3', name: '太和殿', description: '金銮宝殿，皇权象征，九五之尊', isOpen: false, position: { x: 50, y: 45 } },
  { id: 'gate4', name: '中和殿', description: '皇帝休憩之所，方形单檐攒尖顶', isOpen: false, position: { x: 50, y: 30 } },
  { id: 'gate5', name: '保和殿', description: '殿试之所，重檐歇山顶', isOpen: false, position: { x: 50, y: 15 } }
];

export default function AxisModule({ building, onComplete, isCompleted }: AxisModuleProps) {
  const [gates, setGates] = useState<AxisGate[]>(defaultGates);
  const [currentGateIndex, setCurrentGateIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGate, setSelectedGate] = useState<AxisGate | null>(null);
  const [isComplete, setIsComplete] = useState(isCompleted);

  useEffect(() => {
    if (currentGateIndex > 0 && currentGateIndex <= gates.length) {
      setGates(prev => prev.map((gate, index) => ({
        ...gate,
        isOpen: index < currentGateIndex
      })));
    }
  }, [currentGateIndex]);

  const handleGateClick = (gate: AxisGate, index: number) => {
    if (index === currentGateIndex) {
      setCurrentGateIndex(index + 1);
      setSelectedGate(gate);
      setShowInfo(true);
      
      if (index === gates.length - 1) {
        setTimeout(() => {
          setIsComplete(true);
          onComplete();
        }, 1500);
      }
    }
  };

  const handleContinue = () => {
    setShowInfo(false);
    setSelectedGate(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
        循轴入院 · 中轴线探索
      </div>

      <div className="relative w-full max-w-4xl h-[70vh]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="axisGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.line
            x1="50" y1="95" x2="50" y2="5"
            stroke="url(#axisGradient)"
            strokeWidth="0.3"
            strokeDasharray="1 0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {gates.map((gate, index) => (
            <g key={gate.id} className="cursor-pointer" onClick={() => handleGateClick(gate, index)}>
              <motion.rect
                x="35"
                y={gate.position.y - 4}
                width="30"
                height="8"
                fill={gate.isOpen ? '#D4AF37' : '#2A2A2A'}
                stroke="#D4AF37"
                strokeWidth="0.5"
                rx="1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  fill: gate.isOpen ? '#D4AF37' : '#2A2A2A'
                }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                filter={index === currentGateIndex ? 'url(#glow)' : undefined}
                className={index === currentGateIndex ? 'cursor-pointer' : ''}
              />
              
              {!gate.isOpen && index === currentGateIndex && (
                <motion.rect
                  x="35"
                  y={gate.position.y - 4}
                  width="30"
                  height="8"
                  fill="transparent"
                  stroke="#D4AF37"
                  strokeWidth="0.3"
                  rx="1"
                  animate={{
                    strokeOpacity: [0.3, 1, 0.3],
                    strokeWidth: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}

              <motion.text
                x={gate.isOpen ? 70 : 68}
                y={gate.position.y + 1}
                fill={gate.isOpen ? '#D4AF37' : '#D4AF3780'}
                fontSize="3"
                fontFamily="'Noto Serif SC', serif"
                textAnchor="start"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: gate.isOpen ? 70 : 68 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {gate.name}
              </motion.text>

              {gate.isOpen && (
                <motion.circle
                  cx="50"
                  cy={gate.position.y}
                  r="1.5"
                  fill="#C23531"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </g>
          ))}

          <motion.text
            x="50"
            y="98"
            fill="#D4AF37"
            fontSize="2.5"
            fontFamily="'Noto Serif SC', serif"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
          >
            南
          </motion.text>
          <motion.text
            x="50"
            y="3"
            fill="#D4AF37"
            fontSize="2.5"
            fontFamily="'Noto Serif SC', serif"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
          >
            北
          </motion.text>
        </svg>

        <AnimatePresence>
          {currentGateIndex < gates.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-[#D4AF37]/80 text-lg tracking-[0.3em] mb-2">
                点击 {gates[currentGateIndex]?.name} 进入
              </p>
              <ChevronRight className="mx-auto text-[#D4AF37] animate-pulse" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showInfo && selectedGate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-[#0A1110]/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={handleContinue}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-lg p-8 bg-[#0B120F] border border-[#D4AF37]/30 rounded-sm"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-[#C23531] flex items-center justify-center rounded-sm">
                  <span className="text-[#C23531] text-xl">✓</span>
                </div>
                <h3 className="text-3xl text-[#D4AF37] tracking-[0.3em]">{selectedGate.name}</h3>
              </div>
              <p className="text-[#F5F5DC]/80 text-lg leading-relaxed tracking-widest mb-6">
                {selectedGate.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue}
                className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all cursor-pointer"
              >
                继续
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <span className="text-[#D4AF37] text-4xl">礼</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">中轴之礼</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
