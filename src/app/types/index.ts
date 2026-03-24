export type BuildingCategory =
  | "palace"
  | "altar"
  | "religious"
  | "garden"
  | "residence";

export type IllustrationKind =
  | "taihedian"
  | "qiniandian"
  | "potala"
  | "liuyuan"
  | "tulou";

export type ModuleId = "axis" | "structure" | "craft" | "ornament" | "preservation";

export type ModuleVisualization = "axis" | "layers" | "rings" | "courtyard" | "timeline";

export interface MetricItem {
  label: string;
  value: string;
  description: string;
}

export interface TimelineItem {
  era: string;
  title: string;
  description: string;
}

export interface ModuleStep {
  title: string;
  detail: string;
  emphasis?: string;
}

export interface BuildingModule {
  id: ModuleId;
  title: string;
  strapline: string;
  summary: string;
  visualization: ModuleVisualization;
  steps: ModuleStep[];
  facts: MetricItem[];
  takeaways: string[];
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface BuildingData {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  dynasty: string;
  location: string;
  category: BuildingCategory;
  illustration: IllustrationKind;
  palette: [string, string];
  overview: string;
  significance: string[];
  metrics: MetricItem[];
  timeline: TimelineItem[];
  modules: BuildingModule[];
  sources: SourceLink[];
}

export interface SiteTheme {
  title: string;
  description: string;
  accent: string;
}

export interface TechnologyPillar {
  title: string;
  description: string;
  detail: string;
}

export interface ChapterSeal {
  id: string;
  name: string;
  description: string;
  earnedAt?: number;
}

export interface UserProgress {
  visitedBuildings: string[];
  completedModules: string[];
  earnedSeals: ChapterSeal[];
}

export const categoryLabels: Record<BuildingCategory, string> = {
  palace: "宫殿",
  altar: "坛庙",
  religious: "宗教建筑",
  garden: "园林",
  residence: "聚居建筑",
};

export const moduleLabels: Record<ModuleId, string> = {
  axis: "空间秩序",
  structure: "结构逻辑",
  craft: "营造工艺",
  ornament: "装饰象征",
  preservation: "保护传承",
};

export function getModuleProgressKey(buildingId: string, moduleId: ModuleId): string {
  return `${buildingId}:${moduleId}`;
}
