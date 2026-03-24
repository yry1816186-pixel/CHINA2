import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + 7);
        if (next === 100) {
          window.clearInterval(intervalId);
          window.setTimeout(() => setReady(true), 240);
        }
        return next;
      });
    }, 120);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-orbit" />
      <div className="loading-panel">
        <motion.div
          className="seal-mark"
          initial={{ scale: 0.85, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: -3, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          华夏
        </motion.div>

        <motion.h1
          className="loading-title"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          中国古代建筑艺术与科技融合展
        </motion.h1>

        <motion.p
          className="loading-copy"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          从礼制、结构、工艺、光影与修护五条线索重新进入古建筑世界。
        </motion.p>

        <div className="loading-progress">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            />
          </div>
          <div className="loading-meta">
            <span>建立空间叙事</span>
            <span>{progress}%</span>
          </div>
        </div>

        <motion.button
          type="button"
          className="primary-button"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: ready ? 1 : 0.4, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          disabled={!ready}
          onClick={onComplete}
        >
          启卷入境
        </motion.button>
      </div>
    </motion.div>
  );
}
