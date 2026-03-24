/**
 * AxisDirection 组件
 * 显示中轴线的南/北方向标识和装饰
 */

import React from "react";
import { motion } from "motion/react";

/**
 * 方向标识组件
 * 在 SVG 中显示南和北的方向标识
 */
export default function AxisDirection() {
  return (
    <g>
      {/* 南方标识 */}
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

      {/* 北方标识 */}
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

      {/* 南方装饰箭头 */}
      <motion.path
        d="M 48,96 L 50,94 L 52,96"
        stroke="var(--imperial-gold-60)"
        strokeWidth="0.3"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.3 }}
      />

      {/* 北方装饰箭头 */}
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
  );
}
