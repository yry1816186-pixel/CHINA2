/**
 * 循轴入院模块导出文件
 * 统一导出所有组件和配置
 */

// 导出类型定义和配置
export { defaultGates } from "./axisConfig";
export type { AxisGate } from "./axisConfig";

// 导出组件
export { default as AxisGateComponent } from "./AxisGate";
export { default as AxisPath } from "./AxisPath";
export { default as AxisDirection } from "./AxisDirection";
export { default as SVGDefs } from "./SVGDefs";
