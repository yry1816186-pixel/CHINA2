import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface CaissonModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function CaissonModule({
  building,
  onComplete,
  isCompleted,
}: CaissonModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "caisson"),
    [building.modules],
  );
  const highlights = module?.highlights ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>(isCompleted ? [0, 1, 2] : [0]);
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setVisited(
      isCompleted ? highlights.map((_, index) => index) : highlights.length ? [0] : [],
    );
    completedRef.current = isCompleted;
  }, [building.id, highlights, isCompleted]);

  useEffect(() => {
    if (!highlights.length || completedRef.current || visited.length !== highlights.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [highlights.length, onComplete, visited.length]);

  if (!module || !highlights.length) {
    return null;
  }

  const activeHighlight = highlights[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel contrast">
        <span className="eyebrow">覆盖与转折</span>
        <div className="caisson-rings">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.title}
              type="button"
              className={`caisson-ring ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
              }}
            >
              <span>0{index + 1}</span>
              <strong>{highlight.title}</strong>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="module-panel"
        key={activeHighlight.title}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <div className="module-kicker">
          <span className="eyebrow">当前关注点</span>
          <span className="step-counter">
            {visited.length}/{highlights.length}
          </span>
        </div>
        <h3>{activeHighlight.title}</h3>
        <p>{activeHighlight.description}</p>

        <div className="stat-list compact">
          {module.facts?.map((fact) => (
            <div key={`${fact.label}-${fact.value}`} className="stat-item">
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <p className="module-summary">
          {module.completionNote ?? "继续切换各层，理解覆盖与转折如何塑造空间。"}
        </p>
      </motion.div>
    </div>
  );
}
