import { Variants, Transition } from 'motion/react';

export type AnimationType = 'expand' | 'enter' | 'lift' | 'penetrate' | 'sweep' | 'stamp';

export interface AnimationPreset {
  initial: object;
  animate: object;
  exit?: object;
  transition?: Transition;
}

export const ANIMATION_PRESETS: Record<AnimationType, AnimationPreset> = {
  expand: {
    initial: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0%)' },
    exit: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  enter: {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.1, y: -30 },
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  },
  lift: {
    initial: { opacity: 0, y: 50, rotateX: -15 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -50, rotateX: 15 },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
  },
  penetrate: {
    initial: { opacity: 0, scale: 0.8, z: -100 },
    animate: { opacity: 1, scale: 1, z: 0 },
    exit: { opacity: 0, scale: 1.2, z: 100 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  sweep: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.4, ease: 'easeInOut' }
  },
  stamp: {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
    transition: { type: 'spring', damping: 15, stiffness: 200 }
  }
};

export const ANIMATION_NAMES: Record<AnimationType, string> = {
  expand: '展',
  enter: '入',
  lift: '提',
  penetrate: '穿',
  sweep: '扫',
  stamp: '印'
};

export const ANIMATION_DESCRIPTIONS: Record<AnimationType, string> = {
  expand: '卷轴展开、图层铺开',
  enter: '穿门推进、从平面进入空间',
  lift: '屋面抬升、结构剥离',
  penetrate: '榫卯插接、线条贯通',
  sweep: '光影掠过、时间流动',
  stamp: '印章落下、章节完成'
};

export const getAnimationPreset = (type: AnimationType): AnimationPreset => {
  return ANIMATION_PRESETS[type];
};

export const createStaggeredAnimation = (
  type: AnimationType,
  itemCount: number,
  baseDelay: number = 0.1
): Variants => {
  const preset = ANIMATION_PRESETS[type];
  return {
    hidden: preset.initial,
    visible: {
      ...preset.animate,
      transition: {
        ...preset.transition,
        staggerChildren: baseDelay
      }
    },
    exit: preset.exit
  };
};

export const createChildAnimation = (type: AnimationType, index: number, delay: number = 0.1): Variants => {
  const preset = ANIMATION_PRESETS[type];
  return {
    hidden: preset.initial,
    visible: {
      ...preset.animate,
      transition: {
        ...preset.transition,
        delay: index * delay
      }
    },
    exit: preset.exit
  };
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export const moduleTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(212, 175, 55, 0.3)',
      '0 0 40px rgba(212, 175, 55, 0.6)',
      '0 0 20px rgba(212, 175, 55, 0.3)'
    ]
  },
  transition: { duration: 2, repeat: Infinity }
};

export const floatAnimation = {
  animate: {
    y: [0, -10, 0]
  },
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
};

export const shimmerAnimation = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0']
  },
  transition: { duration: 3, repeat: Infinity, ease: 'linear' }
};

export const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

export const getSafeAnimation = (type: AnimationType): AnimationPreset => {
  if (prefersReducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.1 }
    };
  }
  return ANIMATION_PRESETS[type];
};

export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOutQuart = [0.76, 0, 0.24, 1];
export const easeOutBack = [0.34, 1.56, 0.64, 1];

export const springConfig = {
  gentle: { type: 'spring', damping: 20, stiffness: 100 },
  bouncy: { type: 'spring', damping: 10, stiffness: 200 },
  stiff: { type: 'spring', damping: 30, stiffness: 300 }
};
