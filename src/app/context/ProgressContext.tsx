import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ChapterSeal, UserProgress } from "../types";

interface ProgressContextType {
  progress: UserProgress;
  visitBuilding: (buildingId: string) => void;
  completeModule: (moduleKey: string) => void;
  earnSeal: (seal: Omit<ChapterSeal, "earnedAt">) => void;
  hasVisited: (buildingId: string) => boolean;
  hasCompletedModule: (moduleKey: string) => boolean;
  hasEarnedSeal: (sealId: string) => boolean;
  getBuildingProgress: (
    buildingId: string,
    totalModules: number,
  ) => { completed: number; total: number; ratio: number };
}

const STORAGE_KEY = "china-architecture-progress-v3";

const defaultProgress: UserProgress = {
  visitedBuildings: [],
  completedModules: [],
  earnedSeals: [],
};

const ProgressContext = createContext<ProgressContextType | null>(null);

function parseStoredProgress(raw: string | null): UserProgress {
  if (!raw) {
    return defaultProgress;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      visitedBuildings: Array.isArray(parsed.visitedBuildings)
        ? parsed.visitedBuildings.filter((item): item is string => typeof item === "string")
        : [],
      completedModules: Array.isArray(parsed.completedModules)
        ? parsed.completedModules.filter((item): item is string => typeof item === "string")
        : [],
      earnedSeals: Array.isArray(parsed.earnedSeals)
        ? parsed.earnedSeals.filter(
            (item): item is ChapterSeal =>
              !!item &&
              typeof item === "object" &&
              typeof item.id === "string" &&
              typeof item.name === "string" &&
              typeof item.description === "string",
          )
        : [],
    };
  } catch {
    return defaultProgress;
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === "undefined") {
      return defaultProgress;
    }

    return parseStoredProgress(window.localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const value = useMemo<ProgressContextType>(
    () => ({
      progress,
      visitBuilding: (buildingId: string) => {
        setProgress((current) => {
          if (current.visitedBuildings.includes(buildingId)) {
            return current;
          }

          return {
            ...current,
            visitedBuildings: [...current.visitedBuildings, buildingId],
          };
        });
      },
      completeModule: (moduleKey: string) => {
        setProgress((current) => {
          if (current.completedModules.includes(moduleKey)) {
            return current;
          }

          return {
            ...current,
            completedModules: [...current.completedModules, moduleKey],
          };
        });
      },
      earnSeal: (seal: Omit<ChapterSeal, "earnedAt">) => {
        setProgress((current) => {
          if (current.earnedSeals.some((item) => item.id === seal.id)) {
            return current;
          }

          return {
            ...current,
            earnedSeals: [...current.earnedSeals, { ...seal, earnedAt: Date.now() }],
          };
        });
      },
      hasVisited: (buildingId: string) => progress.visitedBuildings.includes(buildingId),
      hasCompletedModule: (moduleKey: string) => progress.completedModules.includes(moduleKey),
      hasEarnedSeal: (sealId: string) =>
        progress.earnedSeals.some((seal) => seal.id === sealId),
      getBuildingProgress: (buildingId: string, totalModules: number) => {
        const completed = progress.completedModules.filter((key) =>
          key.startsWith(`${buildingId}:`),
        ).length;

        return {
          completed,
          total: totalModules,
          ratio: totalModules === 0 ? 0 : completed / totalModules,
        };
      },
    }),
    [progress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider.");
  }

  return context;
}
