import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FirstTimeGuideProps {
  onComplete: () => void;
}

const GUIDE_STEPS = [
  {
    label: "01",
    title: "先看叙事线",
    description:
      "首页把古建筑拆成礼制、结构、工艺、光影与修护五条主线，先建立阅读框架，再进入个案。",
  },
  {
    label: "02",
    title: "再进单体案例",
    description:
      "每座建筑都配有七个交互模块，依次解释空间秩序、构造节点与文化象征，而不是堆图加说明。",
  },
  {
    label: "03",
    title: "最后看保护逻辑",
    description:
      "修护模块会提醒你：古建筑不是静态文物，而是依靠持续维护和正确使用延续下来的系统。",
  },
];

export default function FirstTimeGuide({ onComplete }: FirstTimeGuideProps) {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => GUIDE_STEPS[index], [index]);
  const isLast = index === GUIDE_STEPS.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        className="guide-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="guide-panel"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 32, opacity: 0 }}
        >
          <div className="guide-header">
            <span className="eyebrow">首次导览</span>
            <button type="button" className="ghost-link" onClick={onComplete}>
              跳过
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.28 }}
            >
              <div className="guide-step-mark">{current.label}</div>
              <h2 className="guide-title">{current.title}</h2>
              <p className="guide-description">{current.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="guide-dots">
            {GUIDE_STEPS.map((step, stepIndex) => (
              <button
                key={step.label}
                type="button"
                className={`guide-dot ${stepIndex === index ? "is-active" : ""}`}
                onClick={() => setIndex(stepIndex)}
                aria-label={`查看第 ${stepIndex + 1} 步`}
              />
            ))}
          </div>

          <div className="guide-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() => setIndex((currentIndex) => Math.max(0, currentIndex - 1))}
              disabled={index === 0}
            >
              上一步
            </button>
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                if (isLast) {
                  onComplete();
                  return;
                }
                setIndex((currentIndex) => currentIndex + 1);
              }}
            >
              {isLast ? "开始浏览" : "下一步"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
