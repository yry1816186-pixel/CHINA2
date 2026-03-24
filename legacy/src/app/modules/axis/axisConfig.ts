/**
 * 循轴入院模块配置
 * 定义门的类型和默认数据
 */

export interface AxisGate {
  id: string;
  name: string;
  description: string;
  isOpen: boolean;
  position: { x: number; y: number };
}

export const defaultGates: AxisGate[] = [
  {
    id: "gate1",
    name: "午门",
    description: "紫禁城正门，威严壮观，五凤楼式建筑",
    isOpen: false,
    position: { x: 50, y: 85 },
  },
  {
    id: "gate2",
    name: "太和门",
    description: "外朝正门，前有金水桥，后有太和殿",
    isOpen: false,
    position: { x: 50, y: 65 },
  },
  {
    id: "gate3",
    name: "太和殿",
    description: "金銮宝殿，皇权象征，九五之尊",
    isOpen: false,
    position: { x: 50, y: 45 },
  },
  {
    id: "gate4",
    name: "中和殿",
    description: "皇帝休憩之所，方形单檐攒尖顶",
    isOpen: false,
    position: { x: 50, y: 30 },
  },
  {
    id: "gate5",
    name: "保和殿",
    description: "殿试之所，重檐歇山顶",
    isOpen: false,
    position: { x: 50, y: 15 },
  },
];
