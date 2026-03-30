/**
 * 影视级斗拱模块 - "亲手搭建"仪式感交互
 * 用户仿佛成为古代工匠，亲手搭建斗拱结构
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { BuildingData } from '../types';
import { SealStamp, GlowPulse, GoldenParticles, LightRays } from '../components/CinematicEffects';
import { easings, durations, createStaggerDelay } from '../utils/cinematicAnimations';

interface CinematicDougongModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

interface Component {
  id: string;
  name: string;
  type: 'dou' | 'gong' | 'ang' | 'shuatou';
  description: string;
  poem: string;
  placed: boolean;
  correctPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  order: number; // 放置顺序
}

const initialComponents: Component[] = [
  { 
    id: 'dou1', 
    name: '大斗', 
    type: 'dou', 
    description: '斗栱最底层的方形木块，承托整个斗栱', 
    poem: '基石承重万钧力',
    placed: false, 
    correctPosition: { x: 50, y: 85 }, 
    currentPosition: { x: 15, y: 95 },
    order: 0 
  },
  { 
    id: 'gong1', 
    name: '泥道栱', 
    type: 'gong', 
    description: '第一层横栱，置于大斗之上', 
    poem: '横栱承托展翼飞',
    placed: false, 
    correctPosition: { x: 50, y: 75 }, 
    currentPosition: { x: 85, y: 95 },
    order: 1 
  },
  { 
    id: 'dou2', 
    name: '交互斗', 
    type: 'dou', 
    description: '位于栱上的小斗，承托上层构件', 
    poem: '交互承传巧夺工',
    placed: false, 
    correctPosition: { x: 50, y: 65 }, 
    currentPosition: { x: 15, y: 85 },
    order: 2 
  },
  { 
    id: 'gong2', 
    name: '华栱', 
    type: 'gong', 
    description: '向外挑出的栱，承托出檐', 
    poem: '华栱飞挑檐下风',
    placed: false, 
    correctPosition: { x: 50, y: 55 }, 
    currentPosition: { x: 85, y: 85 },
    order: 3 
  },
  { 
    id: 'ang', 
    name: '昂', 
    type: 'ang', 
    description: '斜向伸出的杠杆构件，减小出檐挠度', 
    poem: '昂首斜挑力千钧',
    placed: false, 
    correctPosition: { x: 50, y: 45 }, 
    currentPosition: { x: 15, y: 75 },
    order: 4 
  },
  { 
    id: 'shuatou', 
    name: '耍头', 
    type: 'shuatou', 
    description: '斗栱最外端的装饰构件', 
    poem: '耍头雕饰画龙睛',
    placed: false, 
    correctPosition: { x: 50, y: 35 }, 
    currentPosition: { x: 85, y: 75 },
    order: 5 
  }
];

// 构件 SVG 图形
const componentSVGs: Record<string, string> = {
  dou: `
    <rect x="-12" y="-6" width="24" height="12" fill="currentColor" rx="1.5"/>
    <rect x="-9" y="-3" width="18" height="6" fill="currentColor" opacity="0.7" rx="1"/>
    <rect x="-6" y="0" width="12" height="3" fill="currentColor" opacity="0.5" rx="0.5"/>
  `,
  gong: `
    <rect x="-20" y="-3" width="40" height="6" fill="currentColor" rx="1"/>
    <rect x="-16" y="0" width="32" height="3" fill="currentColor" opacity="0.6" rx="0.5"/>
    <rect x="-12" y="2" width="24" height="2" fill="currentColor" opacity="0.4" rx="0.3"/>
  `,
  ang: `
    <polygon points="-16,0 16,0 20,12 -16,12" fill="currentColor"/>
    <polygon points="-14,2 14,2 16,10 -14,10" fill="currentColor" opacity="0.6"/>
    <line x1="-12" y1="4" x2="12" y2="4" stroke="currentColor" opacity="0.4" stroke-width="1"/>
  `,
  shuatou: `
    <path d="M-14,0 L14,0 L10,10 L-10,10 Z" fill="currentColor"/>
    <circle cx="0" cy="5" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="0" cy="5" r="1.5" fill="currentColor" opacity="0.8"/>
  `
};

// ============================================
// 1. 工作台背景组件
// ============================================

const WorkshopBackground: React.FC<{
  placedCount: number;
}> = ({ placedCount }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 木质纹理背景 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(139,90,43,0.1) 0%, transparent 50%),
            linear-gradient(225deg, rgba(139,90,43,0.