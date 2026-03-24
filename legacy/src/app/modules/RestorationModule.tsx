import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData } from "../types";

interface RestorationModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function RestorationModule({
  building,
  onComplete,
  isCompleted,
}: RestorationModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "restoration"),
    [building.modules],
  );
  const stages = module?.restorationStages ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>(isCompleted ? [0, 1, 2] : [0]);
  const [viewMode, setViewMode] = useState<"before" | "after">("before");
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setActiveIndex(0);
    setVisited(
      isCompleted ? stages.map((_, index) => index) : stages.length ? [0] : [],
    );
    setViewMode("before");
    completedRef.current = isCompleted;
  }, [building.id, isCompleted, stages]);

  useEffect(() => {
    if (!stages.length || completedRef.current || visited.length !== stages.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [onComplete, stages.length, visited.length]);

  if (!module || !stages.length) {
    return null;
  }

  const activeStage = stages[activeIndex];

  return (
    <div className="module-shell">
      <div className="module-panel contrast">
        <div className="module-kicker">
          <span className="eyebrow">修护现场</span>
          <div className="mode-switch">
            <button
              type="button"
              className={viewMode === "before" ? "is-active" : ""}
              onClick={() => setViewMode("before")}
            >
              修护前
            </button>
            <button
              type="button"
              className={viewMode === "after" ? "is-active" : ""}
              onClick={() => setViewMode("after")}
            >
              修护后
            </button>
          </div>
        </div>

        <motion.div
          className={`restoration-stage restoration-${viewMode}`}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <strong>{viewMode === "before" ? "问题识别" : "修护原则"}</strong>
          <p>
            {viewMode === "before"
              ? activeStage.description
              : activeStage.principle}
          </p>
        </motion.div>
      </div>

      <div className="module-panel">
        <div className="module-kicker">
          <span className="eyebrow">修护流程</span>
          <span className="step-counter">
            {visited.length}/{stages.length}
          </span>
        </div>

        <div className="restoration-list">
          {stages.map((stage, index) => (
            <button
              key={stage.stage}
              type="button"
              className={`restoration-item ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
              }}
            >
              <span>{stage.stage}</span>
              <div>
                <strong>{stage.title}</strong>
                <p>{stage.description}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="module-summary">
          {module.completionNote ?? "继续阅读每个阶段，理解保护工作的判断顺序。"}
        </p>
      </div>
    </div>
  );
}
