import React from 'react';
import { motion } from 'motion/react';

interface LoadingIndicatorProps {
  /** 加载提示文字 */
  text?: string;
  /** 是否显示进度条 */
  showProgress?: boolean;
  /** 进度值 (0-100) */
  progress?: number;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 是否全屏显示 */
  fullscreen?: boolean;
  /** 自定义类名 */
  className?: string;
}

const SIZE_CONFIG = {
  sm: {
    spinner: 'w-8 h-8',
    text: 'text-xs',
    gap: 'gap-2'
  },
  md: {
    spinner: 'w-12 h-12',
    text: 'text-sm',
    gap: 'gap-3'
  },
  lg: {
    spinner: 'w-16 h-16',
    text: 'text-base',
    gap: 'gap-4'
  }
};

export default function LoadingIndicator({
  text = '加载中',
  showProgress = false,
  progress = 0,
  size = 'md',
  fullscreen = false,
  className = ''
}: LoadingIndicatorProps) {
  const config = SIZE_CONFIG[size];

  const content = (
    <div className={`flex flex-col items-center justify-center ${config.gap}`}>
      {/* 旋转加载器 */}
      <motion.div
        className={`${config.spinner} border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* 装饰性圆环 */}
      <motion.div
        className="absolute w-20 h-20 border border-[#D4AF37]/10 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* 提示文字 */}
      {text && (
        <motion.p
          className={`text-[#D4AF37]/70 ${config.text} tracking-[0.3em]`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}

      {/* 进度条 */}
      {showProgress && (
        <div className="w-32 h-1 bg-[#D4AF37]/10 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* 进度百分比 */}
      {showProgress && progress > 0 && (
        <motion.p
          className="text-[#D4AF37]/50 text-xs tracking-wider mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}%
        </motion.p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={`fixed inset-0 bg-[#0A1110] flex items-center justify-center z-50 ${className}`}
        role="status"
        aria-live="polite"
        aria-label={text}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.02]"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="loading-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20,50 Q30,30 50,40 Q70,30 80,50 Q90,70 70,80 Q50,90 30,80 Q10,70 20,50"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-pattern)" />
          </svg>
        </div>

        {content}

        {/* 装饰性文字 */}
        <motion.div
          className="absolute bottom-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#D4AF37]/20 text-xs tracking-[0.5em]">
            探索华夏建筑之美
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      {content}
    </div>
  );
}
