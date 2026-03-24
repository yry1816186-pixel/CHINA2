/**
 * 优化后的循轴入院模块示例
 * 展示如何应用新的中国传统设计系统
 * 达到国家一级奖项审美标准
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Compass } from "lucide-react";
import { BuildingData } from "../../types";

interface OptimizedAxisGate {
  id: string;
  name: string;
  description: string;
  historicalContext: string;
  x: number;
  y: number;
  isOpen: boolean;
}

interface OptimizedAxisModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

/**
 * 优化后的循轴入院模块
 * 应用了完整的中国传统设计系统
 */
export default function OptimizedAxisModuleExample({
  building,
  onComplete,
  isCompleted,
}: OptimizedAxisModuleProps) {
  // 状态管理
  const [gates, setGates] = useState<OptimizedAxisGate[]>([
    {
      id: "meridian",
      name: "午门",
      description: "紫禁城正门，威严庄重，彰显皇权至高无上",
      historicalContext: "建于明永乐十八年，是皇帝颁发诏书、举行重大典礼的场所",
      x: 50,
      y: 85,
      isOpen: false,
    },
    {
      id: "gate-of-supreme-harmony",
      name: "太和门",
      description: "外朝宫殿的正门，通往三大殿的必经之路",
      historicalContext: "明代建筑，重檐歇山顶，是中国现存最大的木结构大门",
      x: 50,
      y: 70,
      isOpen: false,
    },
    {
      id: "hall-of-supreme-harmony",
      name: "太和殿",
      description: "紫禁城核心，皇帝举行大典的地方",
      historicalContext: "俗称金銮殿，是中国现存最大的木结构宫殿",
      x: 50,
      y: 55,
      isOpen: false,
    },
  ]);

  const [currentGateIndex, setCurrentGateIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGate, setSelectedGate] = useState<OptimizedAxisGate | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const completedOnceRef = useRef(isCompleted);

  // 更新门的开启状态
  useEffect(() => {
    if (currentGateIndex > 0 && currentGateIndex <= gates.length) {
      setGates((prev) =>
        prev.map((gate, index) => ({
          ...gate,
          isOpen: index < currentGateIndex,
        }))
      );
    }
  }, [currentGateIndex, gates.length]);

  // 处理门的点击事件
  const handleGateClick = (gate: OptimizedAxisGate, index: number) => {
    if (index === currentGateIndex) {
      setCurrentGateIndex(index + 1);
      setSelectedGate(gate);
      setShowInfo(true);

      // 如果是最后一个门且尚未完成，标记为完成
      if (index === gates.length - 1 && !completedOnceRef.current) {
        setTimeout(() => {
          completedOnceRef.current = true;
          setShowComplete(true);
          onComplete();
        }, 1500);
      }
    }
  };

  // 继续按钮处理
  const handleContinue = () => {
    setShowInfo(false);
    setSelectedGate(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative ink-wash-bg">
      {/* 装饰性传统纹样背景层 */}
      <div className="absolute inset-0 pattern-cloud opacity-30 pointer-events-none" />

      {/* 水墨晕染装饰效果 */}
      <div className="absolute top-10 left-10 w-64 h-64 ink-blob pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 ink-blob pointer-events-none" />

      {/* 标题区域 - 使用书法字体 */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-4 left-4 z-20"
      >
        <div className="font-calligraphy-title text-gold-gradient text-xl tracking-[0.4em] mb-1">
          循轴入院
        </div>
        <div className="text-[var(--imperial-gold-60)]/70 text-sm tracking-[0.3em] font-serif-cn">
          中轴线探索之旅
        </div>
      </motion.div>

      {/* 指南针装饰 */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-4 right-4 text-[var(--imperial-gold-60)]"
      >
        <Compass size={32} className="animate-float" />
      </motion.div>

      {/* SVG 主容器 */}
      <div className="relative w-full max-w-4xl h-[70vh] gpu-accelerated">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* SVG 定义（渐变、滤镜等） */}
          <defs>
            {/* 帝王金渐变 */}
            <linearGradient id="imperialGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--imperial-gold-50)" />
              <stop offset="50%" stopColor="var(--imperial-gold-70)" />
              <stop offset="100%" stopColor="var(--imperial-gold-50)" />
            </linearGradient>

            {/* 朱砂红渐变 */}
            <linearGradient id="vermilionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--vermilion-50)" />
              <stop offset="100%" stopColor="var(--vermilion-70)" />
            </linearGradient>

            {/* 墨迹效果滤镜 */}
            <filter id="inkEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04"
                numOctaves="5"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="2"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            {/* 金光发光效果 */}
            <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 水墨晕染效果 */}
            <filter id="inkWash" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* 回纹图案 */}
            <pattern
              id="meanderPattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,5 L3,5 L3,2 L7,2 L7,8 L3,8 L3,5"
                stroke="var(--imperial-gold-60)"
                strokeWidth="0.3"
                fill="none"
                opacity="0.5"
              />
            </pattern>

            {/* 祥云图案 */}
            <pattern
              id="cloudPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M5,10 Q7,8 10,10 Q13,8 15,10"
                stroke="var(--imperial-gold-60)"
                strokeWidth="0.3"
                fill="none"
                opacity="0.3"
              />
            </pattern>
          </defs>

          {/* 中轴线路径 - 增强版 */}
          <motion.path
            d="M50,95 L50,15"
            stroke="url(#imperialGoldGradient)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            filter="url(#inkWash)"
          />

          {/* 传统装饰线 */}
          <motion.line
            x1="20"
            y1="90"
            x2="80"
            y2="90"
            stroke="var(--imperial-gold-40)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
          />

          {/* 建筑群（门） - 增强版 */}
          {gates.map((gate, index) => {
            const isActive = index === currentGateIndex;
            const isPast = index < currentGateIndex;
            const isAccessible = index <= currentGateIndex;

            return (
              <motion.g
                key={gate.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => isAccessible && handleGateClick(gate, index)}
                className={isAccessible ? "cursor-pointer" : "cursor-not-allowed"}
                style={{ pointerEvents: isAccessible ? "auto" : "none" }}
              >
                {/* 装饰光环（激活状态） */}
                {isActive && (
                  <motion.circle
                    cx={gate.x}
                    cy={gate.y}
                    r="8"
                    fill="none"
                    stroke="var(--imperial-gold-60)"
                    strokeWidth="0.3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 0.4, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* 建筑主体 */}
                <motion.rect
                  x={gate.x - 6}
                  y={gate.y - 4}
                  width="12"
                  height="8"
                  fill={
                    isPast
                      ? "url(#vermilionGradient)"
                      : isActive
                      ? "url(#imperialGoldGradient)"
                      : "var(--ink-black-40)"
                  }
                  stroke={
                    isActive
                      ? "var(--imperial-gold-70)"
                      : isPast
                      ? "var(--vermilion-60)"
                      : "var(--imperial-gold-40)"
                  }
                  strokeWidth="0.5"
                  rx="0.5"
                  filter={isActive ? "url(#goldGlow)" : undefined}
                  whileHover={
                    isAccessible
                      ? {
                          scale: 1.1,
                          filter: "url(#goldGlow)",
                        }
                      : {}
                  }
                  transition={{ duration: 0.2 }}
                />

                {/* 装饰细节 */}
                {isPast && (
                  <motion.rect
                    x={gate.x - 4}
                    y={gate.y - 2}
                    width="8"
                    height="4"
                    fill="url(#meanderPattern)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.3 }}
                  />
                )}

                {/* 建筑名称 */}
                <motion.text
                  x={gate.x}
                  y={gate.y + 10}
                  textAnchor="middle"
                  fill={
                    isPast
                      ? "var(--vermilion-60)"
                      : isActive
                      ? "var(--imperial-gold-70)"
                      : "var(--rice-paper-60)"
                  }
                  fontSize="3"
                  fontFamily="var(--font-calligraphy)"
                  fontWeight={isActive ? "700" : "400"}
                  letterSpacing="0.2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {gate.name}
                </motion.text>

                {/* 状态指示器 */}
                {isPast && (
                  <motion.circle
                    cx={gate.x + 5}
                    cy={gate.y - 5}
                    r="1"
                    fill="var(--vermilion-60)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  />
                )}
              </motion.g>
            );
          })}

          {/* 方向指示 */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5 }}
          >
            <text
              x="15"
              y="95"
              fill="var(--imperial-gold-50)"
              fontSize="2.5"
              fontFamily="var(--font-title)"
            >
              南
            </text>
            <text
              x="15"
              y="20"
              fill="var(--imperial-gold-50)"
              fontSize="2.5"
              fontFamily="var(--font-title)"
            >
              北
            </text>
          </motion.g>

          {/* 装饰性云纹 */}
          <motion.text
            x="85"
            y="50"
            fill="var(--imperial-gold-30)"
            fontSize="8"
            opacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 2 }}
          >
            ☁
          </motion.text>
        </svg>

        {/* 提示文字 - 增强版 */}
        <AnimatePresence>
          {currentGateIndex < gates.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="palace-scroll px-10 py-6 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-[var(--imperial-gold-60)] rounded-full animate-pulse-glow" />
                  <p className="text-[var(--imperial-gold-70)] text-lg tracking-[0.4em] font-calligraphy-title">
                    点击进入
                  </p>
                </div>

                <p className="text-[var(--imperial-gold-80)] text-2xl tracking-[0.3em] font-calligraphy font-bold mb-3">
                  {gates[currentGateIndex]?.name}
                </p>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight
                    className="mx-auto text-[var(--imperial-gold-60)]"
                    size={28}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 信息弹窗 - 增强版 */}
      <AnimatePresence>
        {showInfo && selectedGate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--ink-black-20)]/95 backdrop-blur-md flex items-center justify-center z-50"
            onClick={handleContinue}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9, rotateX: -15 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ y: 50, opacity: 0, scale: 0.9, rotateX: 15 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="max-w-2xl palace-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 成功标记 */}
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="seal-stamp seal-animated"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    过
                  </motion.span>
                </motion.div>
              </div>

              {/* 建筑名称 */}
              <h3 className="text-5xl text-center text-[var(--imperial-gold-70)] tracking-[0.5em] mb-6 font-calligraphy-title animate-gold-shimmer">
                {selectedGate.name}
              </h3>

              {/* 分隔线 */}
              <div className="palace-divider mb-6">
                <span>◆</span>
              </div>

              {/* 建筑描述 */}
              <p className="text-[var(--rice-paper-80)] text-xl leading-relaxed tracking-[0.15em] mb-6 font-calligraphy text-center">
                {selectedGate.description}
              </p>

              {/* 历史背景 */}
              <div className="bg-[var(--ink-black-30)]/50 border-l-4 border-[var(--imperial-gold-60)] p-6 mb-8 texture-aged-paper">
                <p className="text-[var(--rice-paper-70)] text-base leading-loose tracking-[0.1em] font-caption italic">
                  「{selectedGate.historicalContext}」
                </p>
              </div>

              {/* 继续按钮 */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinue}
                className="w-full button-imperial click-ripple"
              >
                继续探索
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 完成动画 - 增强版 */}
      <AnimatePresence>
        {showComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--ink-black-20)]/98 flex items-center justify-center z-50 ink-wash-bg"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", damping: 15 }}
              className="text-center"
            >
              {/* 印章容器 */}
              <motion.div
                className="relative w-40 h-40 mx-auto mb-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {/* 外圈装饰 */}
                <motion.div
                  className="absolute inset-0 border-4 border-[var(--imperial-gold-60)] rounded-full animate-pulse-glow"
                  style={{
                    boxShadow:
                      "0 0 50px rgba(212, 175, 55, 0.6), inset 0 0 30px rgba(212, 175, 55, 0.3)",
                  }}
                />

                {/* 中圈装饰 */}
                <div className="absolute inset-3 border-2 border-[var(--imperial-gold-50)] rounded-full pattern-cloud opacity-30" />

                {/* 内圈装饰 */}
                <div className="absolute inset-6 border border-[var(--imperial-gold-40)] rounded-full" />

                {/* 印章文字 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-[var(--imperial-gold-70)] text-7xl font-bold font-calligraphy-title"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    礼
                  </motion.span>
                </div>

                {/* 装饰光晕 */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(212, 175, 55, 0.4)",
                      "0 0 60px rgba(212, 175, 55, 0.6)",
                      "0 0 40px rgba(212, 175, 55, 0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* 四角装饰 */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={angle}
                    className="absolute w-3 h-3 bg-[var(--imperial-gold-60)]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateY(-70px) translateX(-50%)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  />
                ))}
              </motion.div>

              {/* 标题 */}
              <h3 className="text-6xl text-[var(--imperial-gold-70)] tracking-[0.6em] mb-6 font-calligraphy-title text-gold-gradient">
                中轴之礼
              </h3>

              {/* 副标题 */}
              <div className="palace-divider mb-6">
                <span className="text-[var(--imperial-gold-60)]">印记已获得</span>
              </div>

              {/* 装饰诗句 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-10"
              >
                <p className="text-[var(--rice-paper-70)] text-xl tracking-[0.3em] font-calligraphy text-vertical-mixed">
                  中轴正道·皇权至高
                </p>
              </motion.div>

              {/* 继续按钮 */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComplete(false)}
                className="button-imperial click-ripple"
              >
                继续探索
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
