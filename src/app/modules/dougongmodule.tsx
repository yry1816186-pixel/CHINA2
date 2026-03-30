import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, HelpCircle, Check } from 'lucide-react';
import { BuildingData } from '../types';

interface DougongModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface Component {
  id: string;
  name: string;
  type: 'dou' | 'gong' | 'ang' | 'shuatou';
  description: string;
  placed: boolean;
  correctPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
}

const initialComponents: Component[] = [
  { id: 'dou1', name: '大斗', type: 'dou', description: '斗栱最底层的方形木块，承托整个斗栱', placed: false, correctPosition: { x: 50, y: 80 }, currentPosition: { x: 20, y: 90 } },
  { id: 'gong1', name: '泥道栱', type: 'gong', description: '第一层横栱，置于大斗之上', placed: false, correctPosition: { x: 50, y: 70 }, currentPosition: { x: 80, y: 90 } },
  { id: 'dou2', name: '交互斗', type: 'dou', description: '位于栱上的小斗，承托上层构件', placed: false, correctPosition: { x: 50, y: 60 }, currentPosition: { x: 20, y: 80 } },
  { id: 'gong2', name: '华栱', type: 'gong', description: '向外挑出的栱，承托出檐', placed: false, correctPosition: { x: 50, y: 50 }, currentPosition: { x: 80, y: 80 } },
  { id: 'ang', name: '昂', type: 'ang', description: '斜向伸出的杠杆构件，减小出檐挠度', placed: false, correctPosition: { x: 50, y: 40 }, currentPosition: { x: 20, y: 70 } },
  { id: 'shuatou', name: '耍头', type: 'shuatou', description: '斗栱最外端的装饰构件', placed: false, correctPosition: { x: 50, y: 30 }, currentPosition: { x: 80, y: 70 } }
];

const componentSVGs: Record<string, string> = {
  dou: `<rect x="-8" y="-4" width="16" height="8" fill="currentColor" rx="1"/>
        <rect x="-6" y="-2" width="12" height="4" fill="currentColor" opacity="0.7" rx="0.5"/>`,
  gong: `<rect x="-15" y="-2" width="30" height="4" fill="currentColor" rx="0.5"/>
         <rect x="-12" y="0" width="24" height="2" fill="currentColor" opacity="0.6"/>`,
  ang: `<polygon points="-12,0 12,0 15,8 -15,8" fill="currentColor"/>
        <line x1="-10" y1="2" x2="10" y2="2" stroke="currentColor" opacity="0.5"/>`,
  shuatou: `<path d="M-10,0 L10,0 L8,6 L-8,6 Z" fill="currentColor"/>
            <circle cx="0" cy="3" r="2" fill="currentColor" opacity="0.5"/>`
};

export default function DougongModule({ building, onComplete, isCompleted }: DougongModuleProps) {
  const [components, setComponents] = useState<Component[]>(initialComponents);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDrag = useCallback((id: string, x: number, y: number) => {
    setComponents(prev => prev.map(c => 
      c.id === id ? { ...c, currentPosition: { x, y } } : c
    ));
  }, []);

  const handleDragEnd = (id: string) => {
    const component = components.find(c => c.id === id);
    if (!component) return;

    const distance = Math.sqrt(
      Math.pow(component.currentPosition.x - component.correctPosition.x, 2) +
      Math.pow(component.currentPosition.y - component.correctPosition.y, 2)
    );

    if (distance < 8) {
      setComponents(prev => prev.map(c => 
        c.id === id 
          ? { ...c, placed: true, currentPosition: c.correctPosition }
          : c
      ));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 500);
    }

    setDraggedId(null);
    checkCompletion();
  };

  const checkCompletion = () => {
    const allPlaced = components.every(c => c.placed);
    if (allPlaced && !isComplete) {
      setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 500);
    }
  };

  const handleReset = () => {
    setComponents(initialComponents.map(c => ({ ...c, placed: false })));
    setIsComplete(false);
  };

  const placedCount = components.filter(c => c.placed).length;

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute top-4 left-4 text-[#D4AF37]/60 text-sm tracking-[0.3em]">
          斗栱营造台 · 拖拽构件拼装
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer"
          >
            <HelpCircle size={16} className="inline mr-2" />
            说明
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
            <filter id="dougongGlow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <rect x="45" y="85" width="10" height="10" fill="#2A2A2A" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5"/>

          {components.filter(c => c.placed).map(component => (
            <motion.g
              key={component.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="cursor-pointer"
              style={{ color: '#D4AF37' }}
              transform={`translate(${component.correctPosition.x}, ${component.correctPosition.y})`}
              dangerouslySetInnerHTML={{ __html: componentSVGs[component.type] }}
            />
          ))}

          {components.filter(c => !c.placed).map(component => (
            <motion.g
              key={component.id}
              className="cursor-grab active:cursor-grabbing"
              style={{ color: draggedId === component.id ? '#C23531' : '#D4AF37' }}
              drag
              dragMomentum={false}
              dragElastic={0}
              onDragStart={() => handleDragStart(component.id)}
              onDrag={(_, info) => handleDrag(component.id, 
                component.currentPosition.x + info.delta.x,
                component.currentPosition.y + info.delta.y
              )}
              onDragEnd={() => handleDragEnd(component.id)}
              initial={{ x: component.currentPosition.x, y: component.currentPosition.y }}
              animate={{ x: component.currentPosition.x, y: component.currentPosition.y }}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.2, filter: 'url(#dougongGlow)' }}
              dangerouslySetInnerHTML={{ __html: componentSVGs[component.type] }}
            />
          ))}

          {components.filter(c => !c.placed).map(component => (
            <g key={`target-${component.id}`} opacity="0.3">
              <circle
                cx={component.correctPosition.x}
                cy={component.correctPosition.y}
                r="5"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.3"
                strokeDasharray="1 1"
              />
            </g>
          ))}
        </svg>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#C23531] rounded-full flex items-center justify-center"
            >
              <Check size={32} className="text-[#F5F5DC]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="flex items-center gap-4">
            <div className="w-32 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#D4AF37]"
                animate={{ width: `${(placedCount / components.length) * 100}%` }}
              />
            </div>
            <span className="text-[#D4AF37]/80 text-sm tracking-[0.2em]">
              {placedCount} / {components.length} 构件
            </span>
          </div>
        </div>
      </div>

      <div className="w-80 border-l border-[#D4AF37]/20 p-6 flex flex-col">
        <h3 className="text-xl text-[#D4AF37] tracking-[0.3em] mb-6 pb-4 border-b border-[#D4AF37]/20">
          构件说明
        </h3>

        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {components.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 border rounded-sm transition-all ${
                component.placed
                  ? 'bg-[#C23531]/10 border-[#C23531]/50'
                  : 'bg-[#D4AF37]/5 border-[#D4AF37]/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#F5F5DC] tracking-[0.2em]">{component.name}</span>
                {component.placed && (
                  <Check size={16} className="text-[#C23531]" />
                )}
              </div>
              <p className="text-[#F5F5DC]/60 text-sm tracking-widest">
                {component.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0A1110]/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setShowHelp(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md p-8 bg-[#0B120F] border border-[#D4AF37]/30 rounded-sm"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl text-[#D4AF37] tracking-[0.3em] mb-6">斗栱拼装说明</h3>
              <ul className="space-y-4 text-[#F5F5DC]/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">一</span>
                  <span>拖拽左侧构件到正确位置</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">二</span>
                  <span>构件靠近正确位置时会自动吸附</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">三</span>
                  <span>按从下到上的顺序依次放置</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">四</span>
                  <span>完成所有构件即可获得印记</span>
                </li>
              </ul>
              <button
                onClick={() => setShowHelp(false)}
                className="mt-6 w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all cursor-pointer"
              >
                开始拼装
              </button>
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
                <span className="text-[#D4AF37] text-4xl">匠</span>
              </div>
              <h3 className="text-3xl text-[#D4AF37] tracking-[0.5em] mb-4">斗栱之匠</h3>
              <p className="text-[#F5F5DC]/60 tracking-[0.2em]">印记已获得</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
