import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface RidgeBeastModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function RidgeBeastModule({
  building,
  onComplete,
  isCompleted,
}: RidgeBeastModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "ridge"),
    [building.modules],
  );
  const figures = module?.figures ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>(isCompleted ? [0, 1, 2] : [0]);
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setVisited(
      isCompleted ? figures.map((_, index) => index) : figures.length ? [0] : [],
    );
    completedRef.current = isCompleted;
  }, [building.id, figures, isCompleted]);

  useEffect(() => {
    if (!figures.length || completedRef.current || visited.length !== figures.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [figures.length, onComplete, visited.length]);

  if (!module || !figures.length) {
    return null;
  }

  const activeFigure = figures[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel contrast">
        <span className="eyebrow">装饰象征</span>
        <div className="figure-track">
          {figures.map((figure, index) => (
            <button
              key={figure.name}
              type="button"
              className={`figure-chip ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
              }}
            >
              <span>0{index + 1}</span>
              <strong>{figure.name}</strong>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="module-panel"
        key={activeFigure.name}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <div className="module-kicker">
          <span className="eyebrow">当前符号</span>
          <span className="step-counter">
            {visited.length}/{figures.length}
          </span>
        </div>
        <h3>{activeFigure.name}</h3>
        <p>{activeFigure.description}</p>

        <div className="callout-card subtle">
          <strong>{activeFigure.meaning}</strong>
          <p>
            这一层信息说明：建筑装饰并不是孤立的花纹，而是空间身份、文化象征和观看重点的共同载体。
          </p>
        </div>

        <p className="module-summary">
          {module.completionNote ?? "继续切换全部符号，比较象征意义如何随建筑类型变化。"}
        </p>
      </motion.div>
    </div>
  );
}
