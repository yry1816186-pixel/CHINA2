/**
 * 影视级动画工具库
 * 包含：缓动函数、持续时间常量、动画预设
 */

// ============================================
// 1. 自定义缓动函数 - 电影级动画曲线
// ============================================

type CubicBezier = [number, number, number, number];

export const easings: Record<string, CubicBezier> = {
  cinematic: [0.25, 0.1, 0.25, 1],
  dramatic: [0.6, 0, 0.35, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  smooth: [0.4, 0, 0.2, 1],
  snap: [0.5, 0, 0.1, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.4, 0, 0.6, 1],
  sharp: [0.4, 0, 0.2, 1],
};

// ============================================
// 2. 持续时间常量 - 统一节奏感
// ============================================

export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  dramatic: 1.2,
  cinematic: 1,
  epic: 2,
};

// ============================================
// 3. 动画预设 - 开箱即用
// ============================================

export const presets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  
  rotateIn: {
    initial: { opacity: 0, rotate: -180, scale: 0 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 180, scale: 0 },
  },
  
  flipIn: {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
  },
  
  zoomIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  },
  
  stampIn: {
    initial: { opacity: 0, y: -100, scale: 2, rotate: -15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: [2, 1.1, 1],
      rotate: 0,
    },
    exit: { opacity: 0, scale: 0.8 },
  },
};

// ============================================
// 4. 交错动画生成器
// ============================================

export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};

export const createStaggerChildren = (count: number, baseDelay: number = 0.1) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: baseDelay,
      },
    },
  };
};

// ============================================
// 5. 物理模拟参数
// ============================================

export const physics = {
  gravity: 0.5,
  friction: 0.98,
  bounceDecay: 0.7,
  snapThreshold: 15,
  throwMultiplier: 0.3,
};

// ============================================
// 6. 3D变换预设
// ============================================

export const transforms3D = {
  perspective: (value: number = 1000) => `perspective(${value}px)`,
  
  rotateX: (deg: number) => `rotateX(${deg}deg)`,
  rotateY: (deg: number) => `rotateY(${deg}deg)`,
  rotateZ: (deg: number) => `rotateZ(${deg}deg)`,
  
  translateX: (px: number) => `translateX(${px}px)`,
  translateY: (px: number) => `translateY(${px}px)`,
  translateZ: (px: number) => `translateZ(${px}px)`,
  
  scale3d: (x: number, y: number, z: number) => `scale3d(${x}, ${y}, ${z})`,
  
  full3D: (params: {
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    scale?: number;
    perspective?: number;
  }) => {
    const parts: string[] = [];
    if (params.perspective) parts.push(`perspective(${params.perspective}px)`);
    if (params.rotateX) parts.push(`rotateX(${params.rotateX}deg)`);
    if (params.rotateY) parts.push(`rotateY(${params.rotateY}deg)`);
    if (params.rotateZ) parts.push(`rotateZ(${params.rotateZ}deg)`);
    if (params.translateX) parts.push(`translateX(${params.translateX}px)`);
    if (params.translateY) parts.push(`translateY(${params.translateY}px)`);
    if (params.translateZ) parts.push(`translateZ(${params.translateZ}px)`);
    if (params.scale) parts.push(`scale(${params.scale})`);
    return parts.join(' ');
  },
};

// ============================================
// 7. 视差滚动配置
// ============================================

export const parallaxConfig = {
  layers: {
    background: { speed: 0.2, zIndex: 1 },
    midground: { speed: 0.5, zIndex: 2 },
    foreground: { speed: 0.8, zIndex: 3 },
    interactive: { speed: 1, zIndex: 4 },
  },
  
  calculateOffset: (scrollY: number, speed: number) => {
    return scrollY * speed;
  },
};

// ============================================
// 8. 粒子系统配置
// ============================================

export const particleConfig = {
  golden: {
    color: '#D4AF37',
    count: 60,
    sizeRange: [1, 4],
    durationRange: [3, 7],
    opacityRange: [0.2, 0.8],
  },
  
  fire: {
    color: '#C23531',
    count: 40,
    sizeRange: [2, 6],
    durationRange: [1, 3],
    opacityRange: [0.4, 1],
  },
  
  snow: {
    color: '#F5F5DC',
    count: 80,
    sizeRange: [1, 3],
    durationRange: [5, 10],
    opacityRange: [0.3, 0.7],
  },
  
  magic: {
    colors: ['#D4AF37', '#C23531', '#F5F5DC'],
    count: 50,
    sizeRange: [1, 5],
    durationRange: [2, 5],
    opacityRange: [0.3, 0.9],
  },
};

// ============================================
// 9. 手势交互配置
// ============================================

export const gestureConfig = {
  swipe: {
    threshold: 50,
    velocity: 0.3,
  },
  
  pinch: {
    minScale: 0.5,
    maxScale: 3,
  },
  
  drag: {
    snapToGrid: false,
    gridSize: 20,
    constrainToBounds: true,
  },
  
  longPress: {
    delay: 500,
  },
};

// ============================================
// 10. 动画序列生成器
// ============================================

export const createSequence = (
  steps: Array<{
    duration: number;
    easing?: number[];
    action?: () => void;
  }>
) => {
  let totalDuration = 0;
  return steps.map((step, index) => {
    const start = totalDuration;
    totalDuration += step.duration;
    return {
      index,
      start,
      end: totalDuration,
      duration: step.duration,
      easing: step.easing || easings.smooth,
      action: step.action,
    };
  });
};

// ============================================
// 11. CGTN级电影效果预设
// ============================================

// 呼吸发光 - 让静态元素感觉"活"着
export const breathGlow = (color: string = '#D4AF37', intensity: number = 1) => ({
  boxShadow: [
    `0 0 ${8 * intensity}px ${color}20`,
    `0 0 ${25 * intensity}px ${color}50`,
    `0 0 ${8 * intensity}px ${color}20`,
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

// 投影脉冲 - CGTN使用的金色投影动画
export const dropShadowPulse = (color: string = '#D4AF37') => ({
  filter: [
    `drop-shadow(0 0 4px ${color}40)`,
    `drop-shadow(0 0 12px ${color}80)`,
    `drop-shadow(0 0 4px ${color}40)`,
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

// 边框发光脉冲 - 用于交互点和信息圆圈
export const borderGlowPulse = (color: string = '#D4AF37') => ({
  borderColor: [`${color}40`, color, `${color}40`],
  boxShadow: [
    `0 0 4px ${color}20`,
    `0 0 12px ${color}50`,
    `0 0 4px ${color}20`,
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

// 缩放揭示 - CGTN标志性从远处拉近效果
export const zoomReveal = (startScale: number = 2.5) => ({
  initial: { scale: startScale, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
});

// 分屏揭示 - CGTN屋顶部分的上下分开效果
export const splitReveal = () => ({
  top: {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
  },
  bottom: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  },
  transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
});

// 逐字淡入 - 模拟CGTN的逐词揭示
export const staggerReveal = (index: number, total: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: index * 0.08,
    duration: 0.4,
    ease: 'easeOut' as const,
  },
});

// 3D翻转进入 - CGTN文本图像的rotateX动画
export const flip3DEnter = () => ({
  initial: { rotateX: 15, opacity: 0, y: 30 },
  animate: { rotateX: 0, opacity: 1, y: 0 },
  exit: { rotateX: -15, opacity: 0, y: -30 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});

// 径向脉冲 - CGTN探索按钮的雷达式脉冲
export const radialPulse = () => ({
  animate: {
    scale: [1, 2.5],
    opacity: [0.6, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeOut' as const,
  },
});

// ============================================
// 12. 响应式动画配置
// ============================================

export const getResponsiveConfig = (width: number) => {
  if (width < 640) {
    return {
      particleCount: 30,
      animationDuration: 1.5,
      enable3D: false,
      enableParallax: false,
    };
  }
  if (width < 1024) {
    return {
      particleCount: 50,
      animationDuration: 1.2,
      enable3D: true,
      enableParallax: true,
    };
  }
  return {
    particleCount: 80,
    animationDuration: 1,
    enable3D: true,
    enableParallax: true,
  };
};
