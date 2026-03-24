import { useId } from "react";
import { motion } from "motion/react";
import { type IllustrationKind } from "../../types";

interface MonumentIllustrationProps {
  kind: IllustrationKind;
  palette: [string, string];
  className?: string;
}

export default function MonumentIllustration({
  kind,
  palette,
  className = "",
}: MonumentIllustrationProps) {
  const gradientId = useId().replace(/:/g, "");
  const glowId = useId().replace(/:/g, "");

  return (
    <motion.svg
      viewBox="0 0 320 220"
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="100%" stopColor={palette[1]} />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="320" height="220" rx="28" fill={`url(#${gradientId})`} opacity="0.08" />
      <circle cx="248" cy="46" r="14" fill={palette[0]} opacity="0.18" filter={`url(#${glowId})`} />
      <g stroke={palette[0]} strokeOpacity="0.35" fill="none">
        <path d="M18 186 H302" />
        <path d="M40 170 H280" />
      </g>
      {kind === "taihedian" && (
        <>
          <path d="M50 146 L160 88 L270 146 Z" fill={palette[0]} fillOpacity="0.95" />
          <path d="M64 136 L160 94 L256 136 Z" fill={palette[1]} fillOpacity="0.4" />
          <rect x="82" y="146" width="156" height="20" rx="4" fill={palette[1]} fillOpacity="0.78" />
          <rect x="94" y="166" width="132" height="12" rx="3" fill={palette[0]} fillOpacity="0.52" />
          <rect x="102" y="124" width="12" height="42" rx="4" fill="#f3e7c6" fillOpacity="0.6" />
          <rect x="208" y="124" width="12" height="42" rx="4" fill="#f3e7c6" fillOpacity="0.6" />
          <rect x="148" y="124" width="24" height="42" rx="4" fill="#f3e7c6" fillOpacity="0.72" />
          <path d="M88 178 H232" stroke={palette[1]} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.7" />
          <path d="M96 190 H224" stroke={palette[1]} strokeWidth="4" strokeLinecap="round" strokeOpacity="0.45" />
        </>
      )}
      {kind === "qiniandian" && (
        <>
          <ellipse cx="160" cy="152" rx="92" ry="22" fill={palette[1]} fillOpacity="0.28" />
          <path d="M102 136 Q160 74 218 136 Z" fill={palette[0]} fillOpacity="0.96" />
          <path d="M114 124 Q160 82 206 124 Z" fill={palette[0]} fillOpacity="0.8" />
          <path d="M126 114 Q160 86 194 114 Z" fill={palette[0]} fillOpacity="0.6" />
          <rect x="132" y="136" width="56" height="12" rx="6" fill={palette[1]} fillOpacity="0.76" />
          <rect x="118" y="148" width="84" height="18" rx="7" fill={palette[1]} fillOpacity="0.56" />
          <g fill="#f0e7d6" fillOpacity="0.72">
            <rect x="122" y="148" width="6" height="20" rx="3" />
            <rect x="144" y="148" width="6" height="20" rx="3" />
            <rect x="166" y="148" width="6" height="20" rx="3" />
            <rect x="188" y="148" width="6" height="20" rx="3" />
          </g>
        </>
      )}
      {kind === "potala" && (
        <>
          <path d="M30 184 L112 132 L160 150 L206 118 L292 184 Z" fill={palette[1]} fillOpacity="0.28" />
          <path d="M58 184 L102 118 L146 118 L146 96 L180 96 L180 76 L214 76 L214 56 L242 56 L242 184 Z" fill="#ece3d0" fillOpacity="0.9" />
          <rect x="152" y="98" width="58" height="86" fill={palette[1]} fillOpacity="0.92" />
          <g fill={palette[0]} fillOpacity="0.7">
            <rect x="72" y="134" width="20" height="50" />
            <rect x="96" y="126" width="30" height="58" />
            <rect x="212" y="80" width="18" height="104" />
            <rect x="236" y="68" width="14" height="116" />
          </g>
          <g fill={palette[1]} fillOpacity="0.65">
            <rect x="78" y="146" width="8" height="8" />
            <rect x="110" y="142" width="8" height="8" />
            <rect x="170" y="132" width="10" height="10" />
            <rect x="226" y="100" width="8" height="8" />
          </g>
        </>
      )}
      {kind === "liuyuan" && (
        <>
          <path d="M34 186 Q96 132 144 168 Q182 112 232 146 Q262 122 286 184 Z" fill={palette[1]} fillOpacity="0.22" />
          <rect x="70" y="128" width="148" height="16" rx="6" fill={palette[0]} fillOpacity="0.68" />
          <rect x="82" y="144" width="124" height="18" rx="6" fill={palette[1]} fillOpacity="0.78" />
          <rect x="96" y="112" width="18" height="50" rx="5" fill="#efe5cf" fillOpacity="0.72" />
          <rect x="172" y="112" width="18" height="50" rx="5" fill="#efe5cf" fillOpacity="0.72" />
          <path d="M226 184 Q214 148 240 126 Q258 116 270 128 Q282 144 266 160 Q252 174 226 184 Z" fill={palette[1]} fillOpacity="0.72" />
          <ellipse cx="92" cy="184" rx="44" ry="12" fill={palette[0]} fillOpacity="0.22" />
          <path d="M60 182 Q88 172 118 182" stroke={palette[0]} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.6" />
          <path d="M112 126 L128 108 L144 126" fill="none" stroke={palette[0]} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {kind === "tulou" && (
        <>
          <ellipse cx="160" cy="182" rx="92" ry="18" fill={palette[1]} fillOpacity="0.18" />
          <circle cx="160" cy="128" r="74" fill={palette[0]} fillOpacity="0.82" />
          <circle cx="160" cy="128" r="46" fill="#0d1517" fillOpacity="0.88" />
          <circle cx="160" cy="128" r="22" fill={palette[1]} fillOpacity="0.52" />
          <g fill="#efe1c6" fillOpacity="0.75">
            {Array.from({ length: 12 }).map((_, index) => {
              const angle = (Math.PI * 2 * index) / 12;
              const x = 160 + Math.cos(angle) * 57 - 4;
              const y = 128 + Math.sin(angle) * 57 - 4;
              return <rect key={index} x={x} y={y} width="8" height="8" rx="2" />;
            })}
          </g>
          <rect x="150" y="156" width="20" height="28" rx="5" fill={palette[1]} fillOpacity="0.92" />
        </>
      )}
    </motion.svg>
  );
}
