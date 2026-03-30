import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router';
import { Home, RotateCcw, Download, Share2 } from 'lucide-react';

interface SealStamp {
  id: string;
  name: string;
  character: string;
  description: string;
  earned: boolean;
  earnedAt?: number;
}

const SEAL_STAMPS: SealStamp[] = [
  { id: 'axis', name: '礼制中轴', character: '轴', description: '理解中轴线的空间秩序与礼制意义', earned: false },
  { id: 'structure', name: '木构之骨', character: '构', description: '掌握传统木构建筑的结构层次', earned: false },
  { id: 'dougong', name: '斗栱营造', character: '匠', description: '完成斗栱构件的拼装学习', earned: false },
  { id: 'caisson', name: '藻井仰观', character: '饰', description: '探索藻井的纹样与象征意义', earned: false },
  { id: 'seasons', name: '四时光影', character: '时', description: '感受建筑与季节光影的关系', earned: false },
  { id: 'ridge', name: '脊兽行旅', character: '兽', description: '了解屋脊神兽的等级与寓意', earned: false },
  { id: 'restoration', name: '修缮守护', character: '守', description: '学习古建筑保护与修缮知识', earned: false },
  { id: 'garden', name: '园林意境', character: '园', description: '领略中国古典园林的空间哲学', earned: false },
  { id: 'pagoda', name: '佛塔登临', character: '塔', description: '探索佛塔建筑的形制演变', earned: false },
  { id: 'bridge', name: '古桥遗韵', character: '桥', description: '了解古代桥梁的建筑智慧', earned: false },
  { id: 'dwelling', name: '民居四时', character: '居', description: '体验传统民居的生活空间', earned: false },
];

export default function FinalePage() {
  const { progress, visitedBuildings, completedModules, resetProgress } = useProgress();
  const [seals, setSeals] = useState<SealStamp[]>(SEAL_STAMPS);
  const [showCompletion, setShowCompletion] = useState(false);
  const [selectedSeal, setSelectedSeal] = useState<SealStamp | null>(null);

  useEffect(() => {
    const updatedSeals = SEAL_STAMPS.map(seal => {
      const isEarned = completedModules.includes(seal.id);
      return {
        ...seal,
        earned: isEarned,
        earnedAt: isEarned ? Date.now() : undefined
      };
    });
    setSeals(updatedSeals);
    
    const earnedCount = updatedSeals.filter(s => s.earned).length;
    if (earnedCount >= SEAL_STAMPS.length) {
      setShowCompletion(true);
    }
  }, [completedModules]);

  const earnedCount = seals.filter(s => s.earned).length;
  const progressPct = (earnedCount / SEAL_STAMPS.length) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const sealVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    }
  };

  return (
    <div className="min-h-screen bg-bg-deep text-ink-contrast overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold-500 text-6xl font-serif"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            >
              {['营', '造', '法', '式'][i % 4]}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block mb-6"
          >
            <svg viewBox="0 0 120 120" className="w-24 h-24">
              <defs>
                <linearGradient id="sealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--gold-500)"/>
                  <stop offset="100%" stopColor="var(--gold-600)"/>
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="100" height="100" fill="none" stroke="url(#sealGrad)" strokeWidth="3" rx="4"/>
              <rect x="15" y="15" width="90" height="90" fill="none" stroke="url(#sealGrad)" strokeWidth="1" rx="2"/>
              <text x="60" y="70" textAnchor="middle" fill="var(--gold-500)" fontSize="36" fontFamily="'Noto Serif SC', serif">印卷</text>
            </svg>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl text-gold-500 tracking-[0.5em] mb-4 font-serif">
            营造印卷
          </h1>
          <p className="text-ink-contrast/60 tracking-[0.3em] text-lg">
            记录您在中国古代建筑世界中的探索足迹
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-gold-500/80 tracking-[0.2em]">探索进度</span>
            <div className="w-64 h-2 bg-gold-500/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C23531]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </div>
            <span className="text-gold-500 tracking-[0.2em]">{earnedCount} / {SEAL_STAMPS.length}</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
        >
          {seals.map((seal, index) => (
            <motion.div
              key={seal.id}
              variants={sealVariants}
              className="relative group cursor-pointer"
              onClick={() => seal.earned && setSelectedSeal(seal)}
            >
              <div className={`aspect-square flex items-center justify-center rounded-lg transition-all duration-500 ${
                seal.earned 
                  ? 'bg-gradient-to-br from-[#C23531]/20 to-[#D4AF37]/10 border-2 border-gold-500/50 hover:border-gold-500 hover:shadow-lg hover:shadow-[#D4AF37]/20' 
                  : 'bg-bg-muted/50 border border-gold-500/10'
              }`}>
                {seal.earned ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="relative"
                  >
                    <svg viewBox="0 0 100 100" className="w-20 h-20">
                      <defs>
                        <filter id={`glow-${seal.id}`}>
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <rect x="10" y="10" width="80" height="80" fill="#C23531" rx="4" filter={`url(#glow-${seal.id})`}/>
                      <rect x="15" y="15" width="70" height="70" fill="none" stroke="#D4AF37" strokeWidth="1" rx="2"/>
                      <text
                        x="50"
                        y="60"
                        textAnchor="middle"
                        fill="var(--gold-500)"
                        fontSize="32"
                        fontFamily="'Noto Serif SC', serif"
                        fontWeight="bold"
                      >
                        {seal.character}
                      </text>
                    </svg>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-bg-deep text-xs">✓</span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gold-500/20 rounded">
                    <span className="text-gold-500/30 text-3xl">?</span>
                  </div>
                )}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                className="mt-3 text-center"
              >
                <h3 className={`text-sm tracking-[0.2em] ${
                  seal.earned ? 'text-gold-500' : 'text-ink-contrast/30'
                }`}>
                  {seal.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-gold-500/20 rounded-lg">
            <h3 className="text-xl text-gold-500 tracking-[0.4em] mb-4">探索统计</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl text-gold-500 font-serif mb-1">{visitedBuildings.length}</div>
                <div className="text-sm text-ink-contrast/50 tracking-[0.2em]">已访建筑</div>
              </div>
              <div>
                <div className="text-3xl text-gold-500 font-serif mb-1">{earnedCount}</div>
                <div className="text-sm text-ink-contrast/50 tracking-[0.2em]">获得印记</div>
              </div>
              <div>
                <div className="text-3xl text-gold-500 font-serif mb-1">{Math.round(progressPct)}%</div>
                <div className="text-sm text-ink-contrast/50 tracking-[0.2em]">完成度</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gold-500/10 border border-gold-500/30 text-gold-500 hover:bg-gold-500/20 transition-all tracking-[0.2em] rounded"
          >
            <Home size={18} />
            返回首页
          </Link>
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gold-500/30 text-gold-500/70 hover:text-gold-500 hover:border-gold-500/50 transition-all tracking-[0.2em] rounded"
          >
            <RotateCcw size={18} />
            重置进度
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-deep/95 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", damping: 15 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 60px rgba(212, 175, 55, 0.6)',
                    '0 0 20px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 border-4 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <span className="text-gold-500 text-5xl font-serif">全</span>
              </motion.div>
              <h2 className="text-4xl text-gold-500 tracking-[0.5em] mb-4 font-serif">
                功德圆满
              </h2>
              <p className="text-ink-contrast/60 tracking-[0.3em] mb-8">
                您已完成所有建筑探索，获得营造印卷
              </p>
              <button
                onClick={() => setShowCompletion(false)}
                className="px-8 py-3 bg-gold-500 text-bg-deep tracking-[0.3em] hover:bg-gold-500/90 transition-all rounded"
              >
                查看印卷
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedSeal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-deep/90 flex items-center justify-center z-50"
            onClick={() => setSelectedSeal(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-bg-muted border border-gold-500/30 rounded-lg p-8 max-w-md text-center"
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
                <rect x="10" y="10" width="80" height="80" fill="#C23531" rx="4"/>
                <rect x="15" y="15" width="70" height="70" fill="none" stroke="#D4AF37" strokeWidth="1" rx="2"/>
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  fill="var(--gold-500)"
                  fontSize="32"
                  fontFamily="'Noto Serif SC', serif"
                  fontWeight="bold"
                >
                  {selectedSeal.character}
                </text>
              </svg>
              <h3 className="text-2xl text-gold-500 tracking-[0.4em] mb-4">{selectedSeal.name}</h3>
              <p className="text-ink-contrast/70 tracking-[0.15em] leading-relaxed">{selectedSeal.description}</p>
              <button
                onClick={() => setSelectedSeal(null)}
                className="mt-6 px-6 py-2 border border-gold-500/30 text-gold-500/70 hover:text-gold-500 hover:border-gold-500/50 transition-all tracking-[0.2em] rounded"
              >
                关闭
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
