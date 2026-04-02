# CHINA2

一个面向大众的中国古代建筑长滚动叙事项目规范仓库。

本仓库当前阶段聚焦在规范冻结与视频生成规划，不包含网页前端实现代码。

## 项目目标

- 以综合场景游历作为教学容器，帮助大众建立可理解、可复述、可审校的古代建筑阅读路径。
- 以空间游历为主轴，组织礼制、结构、工艺、保护四层知识。
- 在诗化表达存在的前提下，保持史实层不可改写。

核心上位规范见：docs/00_master_spec.md

## 当前阶段边界

- 已冻结：总规范、范围边界、章节映射、职责矩阵、风险与变更控制。
- 已冻结：视频场景矩阵、Prompt Packet 主包、生成顺序与降级策略。
- 未进入：路由、组件、动画、交互、播放器接入等前端工程实现。

范围与边界见：docs/01_scope_and_boundaries.md

## 仓库结构

- chapters/: 七章级规格文件，定义每章目标与约束。
- contracts/: truth、evidence、字段、命名等跨阶段合同。
- docs/: 主规范与治理文档，约束全链路。
- keyframes/: 场景到关键帧映射规则与抽取标准。
- research/: 证据清单、案例锚点、待验证项。
- review/: 冻结日志与红队审查记录。
- video/: 视频主规范、场景矩阵、prompt 包与生成计划。

## 叙事与章节

- 章节共 7 个：
  - chapter_00_intro
  - chapter_01_orientation
  - chapter_02_progression
  - chapter_03_structure
  - chapter_04_craft
  - chapter_05_conservation
  - chapter_06_outro
- 叙事段落共 5 段，映射到上述 7 章执行。

章节映射见：docs/03_chapter_map.md

## 视频生成现状

- 规划场景总数：8
- 必须生成：7
- 可后置增强：1
- 推荐优先顺序以结构主解释、保护边界、入口语法为先。

完整生成规划见：video/11_full_generation_plan.md
生成顺序见：video/13_generation_sequence_and_priority.md

## 工作方式

1. 先冻结规范，再产出下游资产。
2. 任何事实性表达必须绑定 evidence 字段与来源。
3. 任何综合场景表达必须声明 truth_mode。
4. 下游文档不得改写上游冻结结论。

建议阅读顺序：

1. docs/00_master_spec.md
2. docs/01_scope_and_boundaries.md
3. docs/03_chapter_map.md
4. video/00_seedance_master_brief.md
5. video/11_full_generation_plan.md
6. video/12_full_prompt_packets_master.md

## 协作约定

- 变更前先检查是否触及冻结项。
- 涉及 truth_mode 或 evidence 规则调整时，优先更新 contracts/ 与 docs/。
- 每轮输出后在 review/ 记录审查结论与风险。

## 版本管理

- 默认分支：main
- 远程仓库：origin (GitHub)

如需继续推进到前端实现阶段，建议先在 docs/07_change_control.md 中登记阶段切换与新增交付范围。