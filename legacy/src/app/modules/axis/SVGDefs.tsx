/**
 * SVGDefs 组件
 * 包含所有 SVG 定义，如渐变、滤镜、图案等
 */

import React from "react";

/**
 * SVG 定义组件
 * 提供可重用的 SVG 定义，包括渐变、滤镜、图案等
 */
export default function SVGDefs() {
  return (
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
      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* 建筑渐变 - 关闭状态 */}
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

      {/* 建筑渐变 - 开启状态 */}
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

      {/* 活跃建筑渐变 */}
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
  );
}
