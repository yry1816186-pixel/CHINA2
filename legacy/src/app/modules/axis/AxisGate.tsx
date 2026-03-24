/**
 * AxisGate 组件
 * 渲染单个门的 SVG 元素
 */

import React from "react";
import { motion } from "motion/react";
import { AxisGate } from "./axisConfig";

interface AxisGateComponentProps {
  gate: AxisGate;
  index: number;
  currentGateIndex: number;
  onGateClick: (gate: AxisGate, index: number) => void;
}

export default function AxisGateComponent({
  gate,
  index,
  currentGateIndex,
  onGateClick,
}: AxisGateComponentProps) {
  const isActive = index === currentGateIndex;
  const isClickable = isActive && !gate.isOpen;

    return (
        <g
            style={{ cursor: isClickable ? "pointer" : "default", pointerEvents: "all" }}
            onClick={() => isClickable && onGateClick(gate, index)}
        >
            <motion.rect
                x="30"
                y={gate.position.y - 8}
                width="40"
                height="16"
                fill="transparent"
                style={{ cursor: isClickable ? "pointer" : "default", pointerEvents: "all" }}
                onClick={() => isClickable && onGateClick(gate, index)}
            >
                {/* 可视化门 */}
                <motion.rect
                    x="32"
                    y={gate.position.y - 6}
                    width="36"
                    height="12"
                    fill={
                        gate.isOpen
                            ? "url(#buildingGradientOpen)"
                            : "url(#buildingGradientClosed)"
                    }
                    stroke={
                        isActive
                            ? "var(--imperial-gold-70)"
                            : "var(--imperial-gold-50)"
                    }
                    strokeWidth={isActive ? 0.8 : 0.5}
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
                    filter={isActive ? "url(#glow)" : undefined}
                />

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

            {!gate.isOpen && isActive && (
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
                    pointerEvents: "none",
                }}
            >
                {gate.name}
            </motion.text>

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
    );
}
