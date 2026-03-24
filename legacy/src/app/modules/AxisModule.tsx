import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface AxisModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function AxisModule({
  building,
  onComplete,
  isCompleted,
}: AxisModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "axis"),
    [building.modules],
  );
  const steps = module?.steps ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedIds, setVisitedIds] = useState<string[]>(
    isCompleted ? steps.map((step) => step.id) : steps[0] ? [steps[0].id] : [],
  );
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setVisitedIds(
      isCompleted ? steps.map((step) => step.id) : steps[0] ? [steps[0].id] : [],
    );
    completedRef.current = isCompleted;
  }, [building.id, isCompleted, steps]);

  useEffect(() => {
    if (!steps.length || completedRef.current || visitedIds.length !== steps.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [onComplete, steps, visitedIds.length]);

  if (!module || !steps.length) {
    return null;
  }

  const activeStep = steps[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel">
        <div className="module-kicker">
          <span className="eyebrow">空间秩序</span>
          <div className="progress-track compact">
            <div
              className="progress-fill"
              style={{ width: `${(visitedIds.length / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="timeline-list">
          {steps.map((step, index) => {
            const unlocked = index <= activeIndex + 1 || visitedIds.includes(step.id);

            return (
              <button
                key={step.id}
                type="button"
                className={`timeline-step ${index === activeIndex ? "is-active" : ""}`}
                disabled={!unlocked}
                onClick={() => {
                  if (!unlocked) {
                    return;
                  }

                  setActiveIndex(index);
                  setVisitedIds((current) =>
                    current.includes(step.id) ? current : [...current, step.id],
                  );
                }}
              >
                <span className="timeline-step-index">{step.label}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        className="module-panel contrast"
        key={activeStep.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <span className="eyebrow">当前节点</span>
        <h3>{activeStep.title}</h3>
        <p>{activeStep.description}</p>
        {activeStep.note ? <p className="muted-note">{activeStep.note}</p> : null}

        <div className="axis-visual">
          {steps.map((step, index) => (
            <div key={step.id} className="axis-visual-item">
              <div
                className={`axis-visual-dot ${
                  index <= activeIndex ? "is-active" : ""
                }`}
              />
              {index < steps.length - 1 ? <div className="axis-visual-line" /> : null}
              <span>{step.title}</span>
            </div>
          ))}
        </div>

        <p className="module-summary">
          {module.completionNote ?? "继续点击节点，读完整条空间路径。"}
        </p>
      </motion.div>
    </div>
  );
}
