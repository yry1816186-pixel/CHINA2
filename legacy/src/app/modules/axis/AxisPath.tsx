/**
 * AxisPath 组件
 * 渲染中轴线的路径和装饰元素
 */

import React from "react";
import { motion } from "motion/react";

/**
 * 主轴线路径组件
 * 包括轴线、刻度线等装饰元素
 */
export default function AxisPath() {
  return (
    <>
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
    </>
  );
}
