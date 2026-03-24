import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface StructureModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function StructureModule({
  building,
  onComplete,
  isCompleted,
}: StructureModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "structure"),
    [building.modules],
  );
  const highlights = module?.highlights ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<number[]>(isCompleted ? [0, 1, 2] : [0]);
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setRevealed(
      isCompleted ? highlights.map((_, index) => index) : highlights.length ? [0] : [],
    );
    completedRef.current = isCompleted;
  }, [building.id, highlights, isCompleted]);

  useEffect(() => {
    if (!highlights.length || completedRef.current || revealed.length !== highlights.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [highlights.length, onComplete, revealed.length]);

  if (!module || !highlights.length) {
    return null;
  }

  const activeHighlight = highlights[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel">
        <div className="module-kicker">
          <span className="eyebrow">结构系统</span>
          <button
            type="button"
            className="secondary-button compact"
            onClick={() => setRevealed(highlights.map((_, index) => index))}
          >
            一键展开
          </button>
        </div>

        <div className="structure-stack">
          {highlights.map((highlight, index) => {
            const visible = revealed.includes(index);

            return (
              <motion.button
                key={highlight.title}
                type="button"
                className={`structure-layer ${
                  activeIndex === index ? "is-active" : ""
                } ${visible ? "is-visible" : ""}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{
                  opacity: visible ? 1 : 0.45,
                  y: 0,
                  scale: activeIndex === index ? 1.01 : 1,
                }}
                transition={{ duration: 0.28, delay: index * 0.05 }}
                onClick={() => {
                  setActiveIndex(index);
                  setRevealed((current) =>
                    current.includes(index) ? current : [...current, index],
                  );
                }}
              >
                <span>0{index + 1}</span>
                <strong>{highlight.title}</strong>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div
        className="module-panel contrast"
        key={activeHighlight.title}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <span className="eyebrow">当前构件</span>
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
          {module.completionNote ?? "继续展开所有层级，完整阅读这套结构系统。"}
        </p>
      </motion.div>
    </div>
  );
}
