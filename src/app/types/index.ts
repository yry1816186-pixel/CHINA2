export type BuildingCategory =
  | "palace"
  | "altar"
  | "religious"
  | "garden"
  | "residence"
  | "temple"
  | "tower"
  | "pagoda"
  | "bridge";

export type IllustrationKind =
  | "taihedian"
  | "qiniandian"
  | "potala"
  | "liuyuan"
  | "tulou"
  | "zhuozhengyuan"
  | "yiheyuan"
  | "baimasi"
  | "xuankongsi"
  | "shaolinsi"
  | "tiantan"
  | "kongmiao"
  | "bishushanzhuang"
  | "kaifengta"
  | "songyuesita"
  | "leifengta"
  | "liuheta"
  | "xianzhonglou"
  | "shizilin"
  | "wangshiyuan"
  | "zhaozhouqiao"
  | "lugouqiao"
  | "luoyangqiao"
  | "wangjiadayuan"
  | "hongcun"
  | "zhenglenglou"
  | "famensi"
  | "guanquelou"
  | "huanghelou"
  | "qiaojiaDayuan"
  | "kongmiaodachengdian"
  | "kaifengtieta";

export type ModuleId = "axis" | "structure" | "craft" | "ornament" | "preservation" | "dougong" | "caisson" | "seasons" | "ridge" | "restoration" | "garden" | "pagoda" | "bridge" | "dwelling";

export type ModuleVisualization = "axis" | "layers" | "rings" | "courtyard" | "timeline" | "ring" | "grid";

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
  imageUrl: string;
  poem: string;
  seal: string;
  history: string;
  features: string;
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
  type: string;
  earned?: boolean;
  earnedAt?: number;
}

export interface UserProgress {
  visitedBuildings: string[];
  completedModules: string[];
  earnedSeals: ChapterSeal[];
  currentChapter: string;
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
  dougong: "斗拱",
  caisson: "藻井",
  seasons: "四时",
  ridge: "脊兽",
  restoration: "修复",
  garden: "园林意境",
  pagoda: "登临宝塔",
  bridge: "水影桥韵",
  dwelling: "四时宜居"
};

export function getModuleProgressKey(buildingId: string, moduleId: ModuleId): string {
  return `${buildingId}:${moduleId}`;
}

export interface StructureLayer {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface SeasonConfig {
  id: 'spring' | 'summer' | 'autumn' | 'winter';
  name: string;
  icon: string;
  color: string;
  lightAngle: number;
}

export const SEASONS: SeasonConfig[] = [
  { id: 'spring', name: '春', icon: 'sun', color: '#4CAF50', lightAngle: 45 },
  { id: 'summer', name: '夏', icon: 'cloud', color: '#FF9800', lightAngle: 75 },
  { id: 'autumn', name: '秋', icon: 'leaf', color: '#D4AF37', lightAngle: 30 },
  { id: 'winter', name: '冬', icon: 'snowflake', color: '#90CAF9', lightAngle: 20 }
];

export const STRUCTURE_LAYERS: StructureLayer[] = [
  {
    id: 'roof',
    name: '屋顶',
    description: '中国传统建筑中最显著的部位，形式多样等级分明，承载着排水、保温和象征功能。',
    color: '#C23531'
  },
  {
    id: 'rafter',
    name: '椽子',
    description: '从屋顶向外延伸的斜向构件，将屋面重量传递至横梁，排列整齐形成优美的线条。',
    color: '#8B7355'
  },
  {
    id: 'purlin',
    name: '檩',
    description: '横向跨越于梁架之上的构件，又称桁，主要承受屋面传来的荷载并传递至梁柱。',
    color: '#A08060'
  },
  {
    id: 'beam',
    name: '梁',
    description: '建筑结构中的水平承重构件，承接楼板或屋面重量，是木构架中的核心组件。',
    color: '#6B5B45'
  },
  {
    id: 'column',
    name: '柱子',
    description: '垂直承重构件，支撑梁架和屋面，将荷载传递至基础，排列形成建筑空间。',
    color: '#8B7355'
  },
  {
    id: 'platform',
    name: '台基',
    description: '建筑物的底部基础平台，抬高建筑主体，体现等级制度并具有防潮功能。',
    color: '#9C9C9C'
  }
];

export interface RidgeBeast {
  id: string;
  name: string;
  order: number;
  rank: number;
  meaning: string;
  description: string;
}

export const RIDGE_BEASTS: RidgeBeast[] = [
  { id: 'long', name: '龙', order: 1, rank: 10, meaning: '皇权象征', description: '龙为四灵之首，能显云降雨，象征着至高无上的皇权。 太和殿脊兽以龙为首，寓意真龙天子.' },
  { id: 'feng', name: '凤', order: 2, rank: 9, meaning: '祥瑞之兆', description: '凤凰为百鸟之王，象征祥瑞与高贵，与龙配套使用，代表龙凤呈祥.' },
  { id: 'shi', name: '狮', order: 3, rank: 8, meaning: '威猛守护', description: '狮子为百兽之王，镇宅护院，驱邪避崇，象征威严与守护.' },
  { id: 'tian', name: '天马', order: 4, rank: 7, meaning: '通达天地', description: '天马象征通达天地，翱翔于天际，寓意皇权通达四方.' },
  { id: 'hai', name: '海马', order: 5, rank: 6, meaning: '威震四海', description: '海马象征威震四海，通达江河，寓意江山永固.' },
  { id: 'xie', name: '狻猊', order: 6, rank: 5, meaning: '护法神兽', description: '狻猊形似狮子，传说中能食虎豹，象征护法镇邪.' },
  { id: 'zhong', name: '狎鱼', order: 7, rank: 4, meaning: '兴风作雨', description: '狎鱼为海中异兽，能兴风作雨，象征风调雨顺.' },
  { id: 'suanni', name: '獬豸', order: 8, rank: 3, meaning: '公正严明', description: '獬豸能辨是非曲直，象征公正严明，明察秋毫.' },
  { id: 'dou', name: '斗牛', order: 9, rank: 2, meaning: '镇邪除祟', description: '斗牛能吞云吐雾，镇邪除祟，寓意消除灾厄.' },
  { id: 'wenshi', name: '行什', order: 10, rank: 1, meaning: '防雷止灾', description: '行什为脊兽之末，形似带翼的猴子，能防雷止灾，保佑建筑.' }
];
