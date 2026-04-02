# 03 Interaction Candidate Map

## 文档目的
本文件用于在不进入网站实现的前提下，提前标出哪些 scene / keyframe 更适合未来承接交互候选。它只提供候选映射，不定义组件、路由、动画代码或具体交互实现。

## 候选类型说明
| `interaction_candidate` | 适用说明 |
| --- | --- |
| `candidate_entry_acknowledgement` | 入口确认或规则知晓 |
| `candidate_path_reveal` | 路径与方向显隐 |
| `candidate_progressive_compare` | 递进关系比较 |
| `candidate_structure_explain` | 结构剖示与分层解释 |
| `candidate_detail_annotation` | 细部标注联动 |
| `candidate_boundary_compare` | 保护边界与对照说明 |
| `candidate_summary_recall` | 方法回收与离场复述 |

## 候选映射表
| `chapter_id` | `planned_scene_id` | `interaction_candidate` | `interaction_dependency` | `fallback_level` | `notes` |
| --- | --- | --- | --- | --- | --- |
| `chapter_00_intro` | `scene_00_intro_entry` | `candidate_entry_acknowledgement` | `required_for_navigation` | `D_static_minimum` | 只服务入口确认 |
| `chapter_01_orientation` | `scene_01_orientation_order` | `candidate_path_reveal` | `required_for_navigation` | `C_low_bandwidth` | 方向与层级可视化 |
| `chapter_02_progression` | `scene_02_progression_path` | `candidate_progressive_compare` | `required_for_comparison` | `C_low_bandwidth` | 递进关系对照 |
| `chapter_03_structure` | `scene_03_structure_primary` | `candidate_structure_explain` | `required_for_comparison` | `D_static_minimum` | 解释主层 |
| `chapter_04_craft` | `scene_05_craft_detail` | `candidate_detail_annotation` | `required_for_comparison` | `C_low_bandwidth` | 局部标注与整体关系 |
| `chapter_05_conservation` | `scene_06_conservation_boundary` | `candidate_boundary_compare` | `optional` | `D_static_minimum` | 边界说明不可缺失 |
| `chapter_06_outro` | `scene_07_outro_exit` | `candidate_summary_recall` | `optional` | `D_static_minimum` | 仅服务回收，不新增内容 |

## 使用规则
- 候选映射不是交互实现说明。
- 任何候选若后续进入实现，必须回到 frozen docs/contracts 复核。
- 候选映射不能改写 `canonical_owner` 或 `motion_owner`。

## 确定项
- 本表只定义 interaction candidate，不定义组件或动画。
- `chapter_03_structure` 的候选交互具有最高解释优先级。
- 每个候选都已绑定 `fallback_level`。

## 待验证项
- 各候选是否需要进一步拆成主候选与备用候选。
- `chapter_05_conservation` 是否需要第二个边界比较候选。

## 禁止项
- 禁止把候选映射直接转成前端任务单。
- 禁止在本文件中写组件、路由或动画实现。
- 禁止新增不在 frozen chapter logic 内的交互类型。
