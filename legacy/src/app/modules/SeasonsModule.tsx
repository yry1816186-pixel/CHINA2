import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { BuildingData, SeasonId } from "../types";

interface SeasonsModuleProps {
  building: BuildingData;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function SeasonsModule({
  building,
  onComplete,
  isCompleted,
}: SeasonsModuleProps) {
  const module = useMemo(
    () => building.modules.find((item) => item.id === "seasons"),
    [building.modules],
  );
  const scenes = module?.seasonalScenes ?? [];
  const [currentSeason, setCurrentSeason] = useState<SeasonId>(
    scenes[0]?.season ?? "spring",
  );
  const [timeOfDay, setTimeOfDay] = useState(9);
  const [visited, setVisited] = useState<SeasonId[]>(
    isCompleted ? scenes.map((scene) => scene.season) : scenes[0] ? [scenes[0].season] : [],
  );
  const completedRef = useRef(isCompleted);

  useEffect(() => {
    setCurrentSeason(scenes[0]?.season ?? "spring");
    setTimeOfDay(9);
    setVisited(
      isCompleted ? scenes.map((scene) => scene.season) : scenes[0] ? [scenes[0].season] : [],
    );
    completedRef.current = isCompleted;
  }, [building.id, isCompleted, scenes]);

  useEffect(() => {
    if (!scenes.length || completedRef.current || visited.length !== scenes.length) {
      return;
    }

    completedRef.current = true;
    onComplete();
  }, [onComplete, scenes.length, visited.length]);

  if (!module || !scenes.length) {
    return null;
  }

  const activeScene =
    scenes.find((scene) => scene.season === currentSeason) ?? scenes[0];
  const lightPosition = 15 + (timeOfDay / 24) * 70;

  return (
    <div className="module-shell">
      <motion.div
        className="module-panel contrast seasonal-stage"
        animate={{
          background: `radial-gradient(circle at ${lightPosition}% 20%, ${activeScene.palette}55, transparent 35%), linear-gradient(180deg, rgba(245, 240, 225, 0.02), rgba(7, 12, 17, 0.92))`,
        }}
        transition={{ duration: 0.45 }}
      >
        <span className="eyebrow">时令光影</span>
        <h3>{activeScene.title}</h3>
        <p>{activeScene.description}</p>
        <div className="season-meta">
          <div className="stat-item">
            <span>光线提示</span>
            <strong>{activeScene.light}</strong>
          </div>
          <div className="stat-item">
            <span>当前时刻</span>
            <strong>{`${String(timeOfDay).padStart(2, "0")}:00`}</strong>
          </div>
        </div>
      </motion.div>

      <div className="module-panel">
        <div className="module-kicker">
          <span className="eyebrow">切换季节</span>
          <span className="step-counter">
            {visited.length}/{scenes.length}
          </span>
        </div>

        <div className="season-tabs">
          {scenes.map((scene) => (
            <button
              key={scene.season}
              type="button"
              className={`season-tab ${
                scene.season === currentSeason ? "is-active" : ""
              }`}
              onClick={() => {
                setCurrentSeason(scene.season);
                setVisited((current) =>
                  current.includes(scene.season) ? current : [...current, scene.season],
                );
              }}
            >
              {scene.title}
            </button>
          ))}
        </div>

        <label className="range-block">
          <span>拖动时间滑杆，观察光位变化</span>
          <input
            type="range"
            min={6}
            max={18}
            value={timeOfDay}
            onChange={(event) => setTimeOfDay(Number(event.target.value))}
          />
        </label>

        <p className="module-summary">
          {module.completionNote ?? "至少切换四个季节，比较建筑如何被不同气候重新着色。"}
        </p>
      </div>
    </div>
  );
}
