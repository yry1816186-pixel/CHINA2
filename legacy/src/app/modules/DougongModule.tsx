import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface DougongModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function DougongModule({
  building,
  onComplete,
  isCompleted,
}: DougongModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "dougong"),
    [building.modules],
  );
  const steps = module?.steps ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>(isCompleted ? [0, 1, 2] : [0]);
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setVisited(isCompleted ? steps.map((_, index) => index) : steps.length ? [0] : []);
    completedRef.current = isCompleted;
  }, [building.id, isCompleted, steps]);

  useEffect(() => {
    if (!steps.length || completedRef.current || visited.length !== steps.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [onComplete, steps.length, visited.length]);

  if (!module || !steps.length) {
    return null;
  }

  const activeStep = steps[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel contrast">
        <span className="eyebrow">节点工艺</span>
        <h3>{activeStep.title}</h3>
        <p>{activeStep.description}</p>

        <div className="assembly-orbit">
          {steps.map((step, index) => (
            <motion.button
              key={step.id}
              type="button"
              className={`assembly-node ${activeIndex === index ? "is-active" : ""}`}
              animate={{ opacity: visited.includes(index) ? 1 : 0.55, scale: activeIndex === index ? 1.04 : 1 }}
              transition={{ duration: 0.24 }}
              onClick={() => {
                setActiveIndex(index);
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
              }}
            >
              <span>{step.label}</span>
              <strong>{step.title}</strong>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="module-panel">
        <div className="module-kicker">
          <span className="eyebrow">装配路径</span>
          <span className="step-counter">
            {visited.length}/{steps.length}
          </span>
        </div>

        <div className="assembly-list">
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              className={`assembly-list-item ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
              }}
            >
              <span>{step.label}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="module-summary">
          {module.completionNote ?? "依次阅读每个节点，理解构件是如何工作起来的。"}
        </p>
      </div>
    </div>
  );
}
