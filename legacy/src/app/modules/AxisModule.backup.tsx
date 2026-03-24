import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Info } from "lucide-react";
import { BuildingData } from "../types";

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
  {
    id: "gate1",
    name: "午门",
    description: "紫禁城正门，威严壮观，五凤楼式建筑",
    isOpen: false,
    position: { x: 50, y: 85 },
  },
  {
    id: "gate2",
    name: "太和门",
    description: "外朝正门，前有金水桥，后有太和殿",
    isOpen: false,
    position: { x: 50, y: 65 },
  },
  {
    id: "gate3",
    name: "太和殿",
    description: "金銮宝殿，皇权象征，九五之尊",
    isOpen: false,
    position: { x: 50, y: 45 },
  },
  {
    id: "gate4",
    name: "中和殿",
    description: "皇帝休憩之所，方形单檐攒尖顶",
    isOpen: false,
    position: { x: 50, y: 30 },
  },
  {
    id: "gate5",
    name: "保和殿",
    description: "殿试之所，重檐歇山顶",
    isOpen: false,
    position: { x: 50, y: 15 },
  },
];

export default function AxisModule({
  building,
  onComplete,
  isCompleted,
}: AxisModuleProps) {
  const [gates, setGates] = useState<AxisGate[]>(defaultGates);
  const [currentGateIndex, setCurrentGateIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGate, setSelectedGate] = useState<AxisGate | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const completedOnceRef = useRef(isCompleted);

  useEffect(() => {
    if (currentGateIndex > 0 && currentGateIndex <= gates.length) {
      setGates((prev) =>
        prev.map((gate, index) => ({
          ...gate,
          isOpen: index < currentGateIndex,
        })),
      );
    }
  }, [currentGateIndex, gates.length]);

  const handleGateClick = (gate: AxisGate, index: number) => {
    if (index === currentGateIndex) {
      setCurrentGateIndex(index + 1);
      setSelectedGate(gate);
      setShowInfo(true);

      if (index === gates.length - 1 && !completedOnceRef.current) {
        setTimeout(() => {
          completedOnceRef.current = true;
          setShowComplete(true);
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
      <div className="absolute top-4 left-4 text-[var(--imperial-gold-60)]/60 text-sm tracking-[0.3em] font-serif-cn">
        循轴入院 · 中轴线探索
      </div>

      <div className="relative w-full max-w-4xl h-[70vh]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* 主轴线渐变 */}
            <linearGradient id="axisGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop
                offset="0%"
                stopColor="var(--imperial-gold-60)"
                stopOpacity="0.9"
              />
              <stop
                offset="50%"
                stopColor="var(--imperial-gold-70)"
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor="var(--imperial-gold-80)"
                stopOpacity="0.3"
              />
            </linearGradient>

            {/* 发光效果 */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 强发光效果 */}
            <filter
              id="strongGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 建筑渐变 */}
            <linearGradient
              id="buildingGradientClosed"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ink-black-50)" />
              <stop offset="100%" stopColor="var(--ink-black-30)" />
            </linearGradient>

            <linearGradient
              id="buildingGradientOpen"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--imperial-gold-70)" />
              <stop offset="100%" stopColor="var(--imperial-gold-60)" />
            </linearGradient>

            <linearGradient
              id="activeBuildingGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--imperial-gold-80)" />
              <stop offset="50%" stopColor="var(--imperial-gold-70)" />
              <stop offset="100%" stopColor="var(--vermilion-60)" />
            </linearGradient>

            {/* 装饰图案 */}
            <pattern
              id="decorativePattern"
              x="0"
              y="0"
              width="2"
              height="2"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1"
                cy="1"
                r="0.2"
                fill="var(--imperial-gold-60)"
                opacity="0.3"
              />
            </pattern>
          </defs>

          {/* 背景装饰 - 云纹 */}
          <g opacity="0.1">
            <path
              d="M 10,20 Q 15,18 20,20 T 30,20"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M 70,25 Q 75,23 80,25 T 90,25"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M 15,75 Q 20,73 25,75 T 35,75"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M 65,80 Q 70,78 75,80 T 85,80"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
            />
          </g>

          {/* 主轴线 */}
          <motion.line
            x1="50"
            y1="95"
            x2="50"
            y2="5"
            stroke="url(#axisGradient)"
            strokeWidth="0.4"
            strokeDasharray="2 1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* 轴线装饰 - 刻度线 */}
          {[10, 25, 40, 55, 70, 85].map((y, i) => (
            <motion.line
              key={`tick-${i}`}
              x1="48"
              y1={y}
              x2="52"
              y2={y}
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.2"
              opacity="0.4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            />
          ))}

          {/* 建筑群 */}
          {gates.map((gate, index) => (
            <g
              key={gate.id}
              className="cursor-pointer"
              onClick={() => handleGateClick(gate, index)}
            >
              {/* 建筑主体 */}
              <motion.rect
                x="35"
                y={gate.position.y - 5}
                width="30"
                height="10"
                fill={
                  gate.isOpen
                    ? "url(#buildingGradientOpen)"
                    : "url(#buildingGradientClosed)"
                }
                stroke={
                  index === currentGateIndex
                    ? "var(--imperial-gold-70)"
                    : "var(--imperial-gold-50)"
                }
                strokeWidth={index === currentGateIndex ? 0.8 : 0.5}
                rx="1.5"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  fill: gate.isOpen
                    ? "url(#buildingGradientOpen)"
                    : "url(#buildingGradientClosed)",
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                }}
                filter={index === currentGateIndex ? "url(#glow)" : undefined}
                className={index === currentGateIndex ? "cursor-pointer" : ""}
              />

              {/* 建筑装饰 - 屋顶线条 */}
              {gate.isOpen && (
                <motion.path
                  d={`M 36,${gate.position.y - 4} Q 50,${gate.position.y - 7} 64,${gate.position.y - 4}`}
                  stroke="var(--vermilion-60)"
                  strokeWidth="0.4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                />
              )}

              {/* 装饰纹理 */}
              {gate.isOpen && (
                <motion.rect
                  x="36"
                  y={gate.position.y - 3}
                  width="28"
                  height="8"
                  fill="url(#decorativePattern)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                />
              )}

              {/* 当前建筑的脉冲边框 */}
              {!gate.isOpen && index === currentGateIndex && (
                <>
                  <motion.rect
                    x="34"
                    y={gate.position.y - 6}
                    width="32"
                    height="12"
                    fill="transparent"
                    stroke="var(--imperial-gold-70)"
                    strokeWidth="0.5"
                    rx="2"
                    animate={{
                      strokeOpacity: [0.3, 1, 0.3],
                      strokeWidth: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* 外层光晕 */}
                  <motion.rect
                    x="33"
                    y={gate.position.y - 7}
                    width="34"
                    height="14"
                    fill="transparent"
                    stroke="var(--imperial-gold-60)"
                    strokeWidth="0.3"
                    rx="2.5"
                    animate={{
                      strokeOpacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  />
                </>
              )}

              {/* 建筑名称 */}
              <motion.text
                x={gate.isOpen ? 70 : 68}
                y={gate.position.y + 1.5}
                fill={
                  gate.isOpen
                    ? "var(--imperial-gold-70)"
                    : "var(--imperial-gold-60)"
                }
                fontSize="3.5"
                fontFamily="var(--font-serif)"
                textAnchor="start"
                fontWeight={gate.isOpen ? "600" : "400"}
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: gate.isOpen ? 1 : 0.7,
                  x: gate.isOpen ? 70 : 68,
                }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                style={{
                  textShadow: gate.isOpen
                    ? "0 0 10px rgba(212, 175, 55, 0.5)"
                    : "none",
                }}
              >
                {gate.name}
              </motion.text>

              {/* 已开启标记 */}
              {gate.isOpen && (
                <motion.g>
                  <motion.circle
                    cx="50"
                    cy={gate.position.y}
                    r="2"
                    fill="var(--vermilion-60)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    filter="url(#glow)"
                  />
                  {/* 内部装饰 */}
                  <motion.circle
                    cx="50"
                    cy={gate.position.y}
                    r="1"
                    fill="var(--imperial-gold-80)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  />
                </motion.g>
              )}
            </g>
          ))}

          {/* 方向标识 */}
          <g>
            <motion.text
              x="50"
              y="98"
              fill="var(--imperial-gold-60)"
              fontSize="3"
              fontFamily="var(--font-serif)"
              textAnchor="middle"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.2 }}
            >
              南
            </motion.text>
            <motion.text
              x="50"
              y="3"
              fill="var(--imperial-gold-60)"
              fontSize="3"
              fontFamily="var(--font-serif)"
              textAnchor="middle"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.2 }}
            >
              北
            </motion.text>

            {/* 方向装饰 */}
            <motion.path
              d="M 48,96 L 50,94 L 52,96"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.3 }}
            />
            <motion.path
              d="M 48,5 L 50,7 L 52,5"
              stroke="var(--imperial-gold-60)"
              strokeWidth="0.3"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.3 }}
            />
          </g>
        </svg>

        {/* 提示文字 */}
        <AnimatePresence>
          {currentGateIndex < gates.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="bg-[var(--ink-black-30)]/80 backdrop-blur-sm px-8 py-4 rounded border border-[var(--imperial-gold-40)]/30">
                <p className="text-[var(--imperial-gold-70)] text-lg tracking-[0.3em] mb-2 font-serif-cn">
                  点击{" "}
                  <span className="text-[var(--imperial-gold-80)] font-semibold">
                    {gates[currentGateIndex]?.name}
                  </span>{" "}
                  进入
                </p>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight
                    className="mx-auto text-[var(--imperial-gold-60)]"
                    size={24}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 信息弹窗 */}
      <AnimatePresence>
        {showInfo && selectedGate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--ink-black-20)]/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={handleContinue}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="max-w-lg p-8 bg-gradient-to-b from-[var(--ink-black-30)] to-[var(--ink-black-40)] border-2 border-[var(--imperial-gold-50)] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow:
                  "0 0 40px rgba(212, 175, 55, 0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 border-3 border-[var(--vermilion-60)] flex items-center justify-center rounded-lg"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  style={{
                    boxShadow: "0 0 20px rgba(194, 53, 49, 0.4)",
                  }}
                >
                  <motion.span
                    className="text-[var(--vermilion-60)] text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    ✓
                  </motion.span>
                </motion.div>
                <h3 className="text-4xl text-[var(--imperial-gold-70)] tracking-[0.3em] font-serif-cn font-semibold">
                  {selectedGate.name}
                </h3>
              </div>
              <p className="text-[var(--rice-paper-80)] text-lg leading-relaxed tracking-wider mb-8 font-serif-cn">
                {selectedGate.description}
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinue}
                className="w-full py-4 bg-gradient-to-r from-[var(--imperial-gold-60)] to-[var(--imperial-gold-70)] text-[var(--ink-black-20)] tracking-[0.3em] font-semibold rounded transition-all duration-300 cursor-pointer font-serif-cn"
              >
                继续
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 完成动画 */}
      <AnimatePresence>
        {showComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--ink-black-20)]/95 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", damping: 15 }}
              className="text-center"
            >
              {/* 印章外圈 */}
              <motion.div
                className="relative w-32 h-32 mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div
                  className="absolute inset-0 border-4 border-[var(--imperial-gold-60)] rounded-full"
                  style={{
                    boxShadow:
                      "0 0 40px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(212, 175, 55, 0.2)",
                  }}
                />
                <div className="absolute inset-3 border-2 border-[var(--imperial-gold-50)] rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-[var(--imperial-gold-70)] text-5xl font-bold font-serif-cn"
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
                      "0 0 30px rgba(212, 175, 55, 0.3)",
                      "0 0 50px rgba(212, 175, 55, 0.5)",
                      "0 0 30px rgba(212, 175, 55, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <h3 className="text-4xl text-[var(--imperial-gold-70)] tracking-[0.5em] mb-4 font-serif-cn font-bold">
                中轴之礼
              </h3>
              <p className="text-[var(--rice-paper-70)] tracking-[0.2em] mb-8 font-serif-cn">
                印记已获得
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComplete(false)}
                className="px-10 py-4 bg-[var(--imperial-gold-20)] border-2 border-[var(--imperial-gold-60)] text-[var(--imperial-gold-70)] tracking-[0.3em] hover:bg-[var(--imperial-gold-60)] hover:text-[var(--ink-black-20)] transition-all duration-300 rounded font-serif-cn font-medium cursor-pointer"
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
