/**
 * 影视级动画工具库
 * 包含：缓动函数、持续时间常量、动画预设
 */

// ============================================
// 1. 自定义缓动函数 - 电影级动画曲线
// ============================================

export const easings = {
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
// 11. 响应式动画配置
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
