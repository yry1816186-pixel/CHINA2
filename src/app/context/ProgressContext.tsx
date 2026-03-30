import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ChapterSeal, UserProgress } from '../types';

interface ProgressContextType {
  progress: UserProgress;
  visitedBuildings: string[];
  completedModules: string[];
  visitBuilding: (buildingId: string) => void;
  completeModule: (moduleId: string) => void;
  earnSeal: (seal: ChapterSeal) => void;
  hasVisited: (buildingId: string) => boolean;
  hasCompletedModule: (moduleId: string) => boolean;
  hasEarnedSeal: (sealType: ChapterSeal['type']) => boolean;
  resetProgress: () => void;
}

const defaultProgress: UserProgress = {
  visitedBuildings: [],
  completedModules: [],
  earnedSeals: [],
  currentChapter: 'scroll'
};

const ProgressContext = createContext<ProgressContextType | null>(null);

const STORAGE_KEY = 'china-architecture-progress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return defaultProgress;
        }
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const visitBuilding = (buildingId: string) => {
    setProgress(prev => {
      if (prev.visitedBuildings.includes(buildingId)) return prev;
      return {
        ...prev,
        visitedBuildings: [...prev.visitedBuildings, buildingId]
      };
    });
  };

  const completeModule = (moduleId: string) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) return prev;
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId]
      };
    });
  };

  const earnSeal = (seal: ChapterSeal) => {
    setProgress(prev => {
      if (prev.earnedSeals.some(s => s.type === seal.type)) return prev;
      return {
        ...prev,
        earnedSeals: [...prev.earnedSeals, { ...seal, earned: true, earnedAt: Date.now() }]
      };
    });
  };

  const hasVisited = (buildingId: string) => progress.visitedBuildings.includes(buildingId);
  const hasCompletedModule = (moduleId: string) => progress.completedModules.includes(moduleId);
  const resetProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  };
  const hasEarnedSeal = (sealType: ChapterSeal['type']) => progress.earnedSeals.some(s => s.type === sealType);

  return (
    <ProgressContext.Provider value={{
      progress,
      visitedBuildings: progress.visitedBuildings,
      completedModules: progress.completedModules,
      visitBuilding,
      completeModule,
      earnSeal,
      hasVisited,
      hasCompletedModule,
      hasEarnedSeal,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}
