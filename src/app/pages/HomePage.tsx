import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import { useNavigate, Link } from 'react-router';
import { X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { buildingsData } from '../data/buildings';
import { BuildingData } from '../types';
import { useProgress, useNavigation } from '../context';

const BACKGROUND_URL = "https://images.unsplash.com/photo-1684871430852-3413cb17e040?auto=format&fit=crop&q=80&w=2000";

const Particles = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const particles = useMemo(() => 
    Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      initialX: Math.random() * dimensions.width * 1.5,
      initialY: dimensions.height + Math.random() * 200,
      targetY: -100 - Math.random() * 200,
      driftX: (Math.random() - 0.5) * 120,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  , [dimensions]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ 
            width: p.size, 
            height: p.size,
            background: `radial-gradient(circle, rgba(212,175,55,${p.opacity}) 0%, rgba(212,175,55,0) 70%)`,
          }}
          initial={{
            x: p.initialX,
            y: p.initialY,
            scale: 0,
          }}
          animate={{
            y: [p.initialY, p.initialY * 0.3, p.targetY],
            x: [p.initialX, p.initialX + p.driftX * 0.5, p.initialX + p.driftX],
            scale: [0, 1, 0.5],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            delay: p.delay,
          }}
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${6 + Math.random() * 8}px rgba(212,175,55,0.6)`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHoveringClickable(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('button') !== null ||
        target.closest('.building-interactive') !== null
      );
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#D4AF37] rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{ 
          x: mousePos.x - 6, 
          y: mousePos.y - 6,
          scale: isHoveringClickable ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-[#D4AF37]/60 rounded-full pointer-events-none z-[100]"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isHoveringClickable ? 1.5 : 1,
          borderColor: isHoveringClickable ? 'rgba(194,53,49,0.8)' : 'rgba(212,175,55,0.6)',
          rotate: isHoveringClickable ? 45 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
      >
        {isHoveringClickable && (
          <>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#C23531] rounded-full" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-[#C23531] rounded-full" />
             <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#C23531] rounded-full" />
             <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#C23531] rounded-full" />
          </>
        )}
      </motion.div>
    </>
  );
};

export default function HomePage() {
  const navigate = useNavigate();
  const { visitBuilding, hasVisited } = useProgress();
  const { startTransition } = useNavigation();
  const [activeBuilding, setActiveBuilding] = useState<BuildingData | null>(null);
  const [isEntering, setIsEntering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const rawScrollX = useMotionValue(0);
  const scrollX = useSpring(rawScrollX, { damping: 40, stiffness: 200, mass: 0.8 });
  const maxScrollRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const trackX = useTransform(scrollX, v => -v);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        maxScrollRef.current = Math.max(0, trackWidth - viewportWidth);
        rawScrollX.set(Math.max(0, Math.min(rawScrollX.get(), maxScrollRef.current)));
      }
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  useEffect(() => {
    const unsub = scrollX.on("change", (latest) => {
      if (maxScrollRef.current > 0) {
        setScrollProgress(latest / maxScrollRef.current);
      }
    });
    return unsub;
  }, [scrollX]);

  const handleWheel = (e: React.WheelEvent) => {
    if (activeBuilding || isEntering) return;
    const SCROLL_SPEED = 3.5;
    let delta = e.deltaY;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      delta = e.deltaX;
    }

    const current = rawScrollX.get();
    const target = current + delta * SCROLL_SPEED;
    rawScrollX.set(Math.max(0, Math.min(target, maxScrollRef.current)));
  };

  const handleEnterBuilding = (building: BuildingData) => {
    setIsEntering(true);
    visitBuilding(building.id);
    
    const TRANSITION_DURATION = 1200;
    
    setTimeout(() => {
      navigate(`/building/${building.id}`);
    }, TRANSITION_DURATION);
  };

  const closePopup = () => setActiveBuilding(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeBuilding) closePopup();
      if (!activeBuilding && !isEntering) {
        if (e.key === 'ArrowRight') rawScrollX.set(Math.min(rawScrollX.get() + 300, maxScrollRef.current));
        if (e.key === 'ArrowLeft') rawScrollX.set(Math.max(rawScrollX.get() - 300, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeBuilding, isEntering, rawScrollX]);

  const bgX = useTransform(scrollX, v => maxScrollRef.current > 0 ? -(v * 0.2) : 0);

  return (
    <motion.div 
      initial={{ opacity: 0, clipPath: 'inset(0 50% 0 50%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0%)' }}
      exit={{ opacity: 0, clipPath: 'inset(0 50% 0 50%)' }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }} 
      className="w-screen h-screen overflow-hidden bg-[#0A1110] text-[#F5F5DC] font-serif relative selection:bg-[#D4AF37]/30 cursor-none"
      onWheel={handleWheel}
      style={{ fontFamily: "'Noto Serif SC', serif" }}
    >
      <CustomCursor />
      <Particles />

      <Link
        to="/finale"
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all tracking-[0.2em] text-sm rounded"
      >
        <BookOpen size={16} />
        印卷
      </Link>

      <motion.div 
        className="absolute inset-0 z-0 h-full w-[150vw]"
        style={{ x: bgX }}
      >
        <img 
          src={BACKGROUND_URL} 
          alt="千里江山图长卷" 
          className="w-full h-full object-cover opacity-30 blur-[4px]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1110] via-transparent to-[#0A1110]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      </motion.div>

      <motion.div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-[12vw] px-[15vw] z-10 flex-nowrap will-change-transform"
        style={{ x: trackX }}
      >
        {buildingsData.map((building, index) => (
          <BuildingItem 
            key={building.id}
            building={building}
            index={index}
            isActive={activeBuilding?.id === building.id}
            isVisited={hasVisited(building.id)}
            onActivate={() => setActiveBuilding(building)}
            onEnter={() => handleEnterBuilding(building)}
          />
        ))}
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-[#D4AF37]/10 z-40 rounded-full overflow-hidden flex items-center pointer-events-none">
         <motion.div
           className="h-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50 relative shadow-[0_0_15px_rgba(212,175,55,0.6)]"
           style={{ width: `${Math.max(1, scrollProgress * 100)}%` }}
         >
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-5 bg-[#C23531] rounded-sm shadow-md" />
         </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: rawScrollX.get() < 100 ? 0.7 : 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 text-[#D4AF37] tracking-[0.5em] text-sm flex items-center gap-4 pointer-events-none"
      >
        <ChevronLeft size={16} className="opacity-50" />
        <span>拨动滚轮以游历华夏</span>
        <ChevronRight size={16} className="opacity-50" />
      </motion.div>

      <AnimatePresence>
        {activeBuilding && (
          <>
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-40 cursor-pointer bg-[#050807]/80"
              onClick={closePopup} 
            />

            <div className="absolute left-0 top-0 h-full w-[55vw] flex items-center justify-center p-[4vw] pointer-events-none z-50">
              <motion.div
                layoutId={`building-container-${activeBuilding.id}`}
                className="w-full h-full relative"
              >
                <motion.img
                  layoutId={`building-img-${activeBuilding.id}`}
                  src={activeBuilding.imageUrl}
                  alt={activeBuilding.name}
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0px 0px 60px rgba(212,175,55,0.4)) brightness(1.2) contrast(1.1) saturate(1.2)'
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.9 }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1, transition: { type: "spring", damping: 30, stiffness: 200, mass: 0.8 } }}
              exit={{ x: "100%", opacity: 0, transition: { ease: "easeIn", duration: 0.3 } }}
              className="absolute top-0 right-0 h-full w-[45vw] min-w-[550px] max-w-2xl bg-[#0B120F]/95 border-l-[4px] border-[#D4AF37]/60 shadow-[-40px_0_80px_rgba(0,0,0,0.9)] z-50 flex flex-col backdrop-blur-2xl overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(212,175,55,0.04) 0%, transparent 80%)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -right-20 top-0 bottom-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <span className="text-[300px] font-black text-[#D4AF37] leading-none [writing-mode:vertical-rl] whitespace-nowrap tracking-tighter">
                  {activeBuilding.name}
                </span>
              </div>

              <button 
                onClick={closePopup}
                className="absolute top-10 left-10 p-4 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#C23531] hover:text-[#F5F5DC] hover:border-[#C23531] transition-all duration-300 z-50 group cursor-pointer backdrop-blur-md rounded-sm"
                aria-label="关闭卷轴"
              >
                <X size={26} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              <div className="flex flex-row-reverse h-full p-16 pt-28 gap-16 relative z-10 overflow-hidden">
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center h-full border-l border-[#D4AF37]/10 pl-8"
                >
                  <div className="w-16 h-16 border-[2px] border-[#C23531] text-[#C23531] flex items-center justify-center mb-12 rounded-sm shadow-[0_0_20px_rgba(194,53,49,0.25)] bg-[#C23531]/5 relative before:absolute before:inset-[3px] before:border before:border-[#C23531]/40">
                    <span className="text-lg font-bold [writing-mode:vertical-rl] tracking-widest leading-none" style={{ fontFamily: 'SimSun, serif' }}>
                      {activeBuilding.seal}
                    </span>
                  </div>
                  <h2 className="text-7xl font-black text-[#D4AF37] [writing-mode:vertical-rl] tracking-[0.3em] drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
                    {activeBuilding.name}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="h-full border-l border-[#D4AF37]/5 pl-8 flex items-start pt-8"
                >
                  <p className="text-4xl text-[#F5F5DC]/80 [writing-mode:vertical-rl] tracking-[0.6em] font-serif leading-loose relative">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-[#C23531]/30">「</span>
                    {activeBuilding.poem}
                    <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-5xl text-[#C23531]/30">」</span>
                  </p>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center space-y-16 pr-8 custom-scrollbar overflow-y-auto">
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-3 h-3 rotate-45 bg-[#C23531] shadow-[0_0_10px_rgba(194,53,49,0.5)]" />
                      <h3 className="text-base text-[#D4AF37] tracking-[0.4em] font-bold">朝代地纪</h3>
                    </div>
                    <div className="flex gap-6 items-end pl-7">
                      <span className="text-3xl text-[#F5F5DC] tracking-widest">{activeBuilding.dynasty}</span>
                      <span className="text-base text-[#F5F5DC]/60 tracking-widest pb-1 border-b border-[#F5F5DC]/20">{activeBuilding.location}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col gap-4 relative pl-7"
                  >
                    <div className="absolute left-1.5 top-2 w-[1px] h-[calc(100%-10px)] bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
                    <h3 className="text-base text-[#D4AF37] tracking-[0.4em] mb-2 -ml-7 flex items-center gap-4 font-bold">
                      <div className="w-3 h-3 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                      历史溯源
                    </h3>
                    <p className="text-lg text-[#F5F5DC]/85 leading-[2.2] tracking-widest text-justify">
                      {activeBuilding.history}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col gap-4 relative pl-7"
                  >
                    <div className="absolute left-1.5 top-2 w-[1px] h-[calc(100%-10px)] bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
                    <h3 className="text-base text-[#D4AF37] tracking-[0.4em] mb-2 -ml-7 flex items-center gap-4 font-bold">
                      <div className="w-3 h-3 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                      建筑规制
                    </h3>
                    <p className="text-lg text-[#F5F5DC]/85 leading-[2.2] tracking-widest text-justify">
                      {activeBuilding.features}
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    onClick={() => handleEnterBuilding(activeBuilding)}
                    className="mt-8 px-8 py-4 bg-[#D4AF37]/10 border-2 border-[#D4AF37] text-[#D4AF37] tracking-[0.3em] text-lg hover:bg-[#D4AF37] hover:text-[#0A1110] transition-all duration-300 cursor-pointer relative overflow-hidden group"
                  >
                    <span className="relative z-10">入印探索</span>
                    <motion.div
                      className="absolute inset-0 bg-[#D4AF37]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEntering && activeBuilding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#0A1110]"
              initial={{ clipPath: 'inset(0 50% 0 50%)' }}
              animate={{ clipPath: 'inset(0 0% 0 0%)' }}
              exit={{ clipPath: 'inset(0 50% 0 50%)' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <motion.img
                  src={activeBuilding.imageUrl}
                  alt={activeBuilding.name}
                  className="w-[40vw] h-[50vh] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 0px 80px rgba(212,175,55,0.6)) brightness(1.1)'
                  }}
                  initial={{ scale: 0.5, rotateY: -30 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  exit={{ scale: 1.5, rotateY: 30, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />

                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20"
                  initial={{ y: -100, rotate: -180, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: 100, rotate: 180, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <filter id="sealGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <rect x="10" y="10" width="80" height="80" fill="#C23531" rx="4" filter="url(#sealGlow)"/>
                    <text
                      x="50"
                      y="58"
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="32"
                      fontFamily="'Noto Serif SC', serif"
                      fontWeight="bold"
                    >
                      {activeBuilding.seal}
                    </text>
                  </svg>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="text-[#D4AF37] text-2xl tracking-[0.8em] font-serif">
                  {activeBuilding.name}
                </span>
              </motion.div>

              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.5,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function BuildingItem({ 
  building, 
  index,
  isActive, 
  isVisited,
  onActivate,
  onEnter
}: { 
  building: BuildingData, 
  index: number,
  isActive: boolean,
  isVisited: boolean,
  onActivate: () => void,
  onEnter: () => void
}) {
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const progress = useMotionValue(0);
  const pathLength = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    if (isHovering && !isActive) {
      animate(progress, 100, { duration: 1, ease: "linear" });
    } else {
      progress.set(0);
    }
  }, [isHovering, isActive, progress]);

  const handleMouseEnter = () => {
    if (!isActive) {
      setIsHovering(true);
      hoverTimeoutRef.current = setTimeout(() => {
        onActivate();
        setIsHovering(false);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex-shrink-0 h-[75vh] w-[26vw] min-w-[340px] flex items-center justify-center transition-all duration-500 building-interactive ${isActive ? 'z-20' : 'z-10'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isHovering && !isActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-30 pointer-events-none flex flex-col items-center justify-center"
          >
            <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="2" />
              <motion.circle 
                cx="50" cy="50" r="46" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{ pathLength }} 
              />
            </svg>
            <span className="absolute text-[#D4AF37] text-xs tracking-widest font-bold font-sans">
              入印
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovering && !isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-[-8%] pointer-events-none z-0"
          >
            <div className="absolute top-0 left-0 w-10 h-10 border-t-[4px] border-l-[4px] border-[#D4AF37] opacity-90 shadow-[-5px_-5px_20px_rgba(212,175,55,0.5)]" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-[4px] border-r-[4px] border-[#D4AF37] opacity-90 shadow-[5px_-5px_20px_rgba(212,175,55,0.5)]" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[4px] border-l-[4px] border-[#D4AF37] opacity-90 shadow-[-5px_5px_20px_rgba(212,175,55,0.5)]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[4px] border-r-[4px] border-[#D4AF37] opacity-90 shadow-[5px_5px_20px_rgba(212,175,55,0.5)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {isVisited && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 w-6 h-6 bg-[#C23531] rounded-full flex items-center justify-center z-20 shadow-[0_0_10px_rgba(194,53,49,0.5)]"
        >
          <span className="text-[#F5F5DC] text-xs">✓</span>
        </motion.div>
      )}

      <AnimatePresence>
        {isHovering && !isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 left-4 z-20"
          >
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-1 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded text-[#D4AF37] text-sm tracking-wider"
            >
              {building.dynasty}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`building-container-${building.id}`}
        className="w-full h-full relative flex flex-col justify-end items-center"
        animate={{ 
          scale: isHovering && !isActive ? 1.08 : 1.0,
          y: isHovering && !isActive ? -15 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div 
          className="w-full h-full flex items-center justify-center relative transition-all duration-700"
          style={{
            filter: isHovering && !isActive 
              ? 'drop-shadow(0px 15px 35px rgba(212,175,55,0.5)) brightness(1.15) contrast(1.1) sepia(0.2) saturate(1.3)'
              : 'drop-shadow(0px 10px 20px rgba(0,0,0,0.8)) sepia(0.5) hue-rotate(-5deg) saturate(1.1) brightness(0.85)'
          }}
        >
          {!isActive && (
            <motion.img 
              layoutId={`building-img-${building.id}`}
              src={building.imageUrl} 
              alt={building.name}
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          )}
        </div>
        
        <motion.div 
          className="absolute -bottom-24 flex flex-col items-center"
          animate={{ opacity: isActive ? 0 : 1, y: isHovering && !isActive ? 15 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="w-[3px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent mb-4"
            animate={{ 
              scaleY: isHovering && !isActive ? 1.3 : 1,
              opacity: isHovering && !isActive ? 1 : 0.7
            }}
          />
          <motion.span 
            className="text-3xl text-[#D4AF37] tracking-[0.5em] font-bold drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] ml-3"
            animate={{
              textShadow: isHovering && !isActive 
                ? '0 0 20px rgba(212,175,55,0.6), 0 3px 6px rgba(0,0,0,0.9)'
                : '0 3px 6px rgba(0,0,0,0.9)'
            }}
          >
            {building.name}
          </motion.span>
          <AnimatePresence>
            {isHovering && !isActive && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-sm text-[#D4AF37]/70 tracking-widest mt-2"
              >
                {building.location}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
