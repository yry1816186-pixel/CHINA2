# 11 Full Generation Plan

## 文档目的
本文件是当前冻结范围内的正式视频生成规划总表，用于一次性覆盖全部已规划 scene，并明确：
- 哪些 scene 必须生成
- 哪些 scene 可作为后置增强
- 哪些 scene 需要按降级 truth_mode 生成
- 哪些 scene 暂不进入本轮生成

本文件不再采用“小批试错”或“样片优先”作为默认推进逻辑。

## 适用范围
当前完整生成范围严格限定为 `video/03_scene_matrix.md` 中已冻结的 8 个 `planned_scene_id`：
- `scene_00_intro_entry`
- `scene_01_orientation_order`
- `scene_02_progression_path`
- `scene_03_structure_primary`
- `scene_04_structure_support`
- `scene_05_craft_detail`
- `scene_06_conservation_boundary`
- `scene_07_outro_exit`

不新增 scene，不扩写章节，不进入网页实现。

## 生成包总览
| 指标 | 数值 |
| --- | --- |
| 总 scene 数 | 8 |
| 必须生成 | 7 |
| 可后置增强 | 1 |
| 暂缓生成 | 0 |
| 维持原 `scene_mode` 生成 | 5 |
| 需降级 truth_mode 生成 | 3 |

## 生成包覆盖总表
| `chapter_id` | `scene_id` | 场景目标 | 规划 `scene_mode` | 生成 `truth_mode` | `asset_role` | 建议优先生成 | 生成状态 | 说明 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `chapter_00_intro` | `scene_00_intro_entry` | 建立观看关系、入口阈限与 composite 进入感 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `contextual_atmosphere` | 是 | 必须生成 | 作为全包的入口气质与阈限样式基准 |
| `chapter_01_orientation` | `scene_01_orientation_order` | 建立方向、层级、秩序与入院感 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | 是 | 必须生成 | 为后续路径与结构层提供秩序基线 |
| `chapter_02_progression` | `scene_02_progression_path` | 组织步行、停驻、回望、抬升的空间递进 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | 否 | 必须生成 | 依赖前两章已建立的运动语法，可排在第二梯队 |
| `chapter_03_structure` | `scene_03_structure_primary` | 作为结构高潮的主解释 scene | `C_abstract_explanatory_layer` | `C_abstract_explanatory_layer` | `primary_explanation` | 是 | 必须生成 | 结构章主场景，不能缺失 |
| `chapter_03_structure` | `scene_04_structure_support` | 承接结构章情绪和层次切换 | `B_composite_teaching_scene` | `C_abstract_explanatory_layer` | `supporting_transition` | 否 | 可后置增强 | 允许生成，但不作为结构章成立的前提 |
| `chapter_04_craft` | `scene_05_craft_detail` | 让细部回到整体营造系统 | `B_composite_teaching_scene` | `C_abstract_explanatory_layer` | `comparative_overlay` | 否 | 必须生成 | 为避免误读为具体遗址工艺证据，按解释性细部 study 生成 |
| `chapter_05_conservation` | `scene_06_conservation_boundary` | 明确历史层与保护层的边界 | `B_composite_teaching_scene` | `C_abstract_explanatory_layer` | `evidence_reference` | 是 | 必须生成 | 高风险内容，必须明确降级为示意/解释性生成 |
| `chapter_06_outro` | `scene_07_outro_exit` | 收束、回望、控制离场 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | 否 | 必须生成 | 收束而非新增信息，放在后段生成更稳 |

## 章节覆盖清单
### `chapter_00_intro`
- scene: `scene_00_intro_entry`
- 目标：建立 composite 观看入口，不把综合场景伪装成单一遗址实景
- 生成 truth_mode：`B_composite_teaching_scene`
- 资产职责：`contextual_atmosphere`
- 结论：必须生成

### `chapter_01_orientation`
- scene: `scene_01_orientation_order`
- 目标：通过路径、阈限、层级建立秩序感
- 生成 truth_mode：`B_composite_teaching_scene`
- 资产职责：`supporting_transition`
- 结论：必须生成

### `chapter_02_progression`
- scene: `scene_02_progression_path`
- 目标：以无人物方式组织身体化递进
- 生成 truth_mode：`B_composite_teaching_scene`
- 资产职责：`supporting_transition`
- 结论：必须生成

### `chapter_03_structure`
- scene: `scene_03_structure_primary`
- 目标：完成结构章主解释
- 生成 truth_mode：`C_abstract_explanatory_layer`
- 资产职责：`primary_explanation`
- 结论：必须生成

- scene: `scene_04_structure_support`
- 目标：在结构章中承担辅助承接与节奏缓冲
- 生成 truth_mode：`C_abstract_explanatory_layer`
- 资产职责：`supporting_transition`
- 结论：可后置增强

### `chapter_04_craft`
- scene: `scene_05_craft_detail`
- 目标：把细部重新嵌回营造系统
- 生成 truth_mode：`C_abstract_explanatory_layer`
- 资产职责：`comparative_overlay`
- 结论：必须生成

### `chapter_05_conservation`
- scene: `scene_06_conservation_boundary`
- 目标：显示历史层与照护层的边界，不做翻新宣传
- 生成 truth_mode：`C_abstract_explanatory_layer`
- 资产职责：`evidence_reference`
- 结论：必须生成

### `chapter_06_outro`
- scene: `scene_07_outro_exit`
- 目标：完成回望与离场，不新增主题
- 生成 truth_mode：`B_composite_teaching_scene`
- 资产职责：`supporting_transition`
- 结论：必须生成

## 生成状态定义
- 必须生成：本轮完整外部生成包的主干 scene，缺失将导致章节或总叙事不成立。
- 可后置增强：允许生成且已给出正式 packet，但其缺失不会阻断主干生成包交付。
- 暂缓生成：仅限确实无法在当前 truth/evidence 条件下安全生成的 scene。本轮为空。

## 降级处理规则
若 scene 在 `video/14_scene_exclusion_and_downgrade_list.md` 中被标记为降级，则正式生成时按降级后的 `truth_mode` 执行：
- 保留原 `scene_id`
- 保留原 `asset_role`
- 保留原 `motion_owner`
- 只调整生成时的 truth 表达与画面语法

## 本轮暂缓生成清单
本轮无暂缓生成 scene。

## 生成完整性要求
- `video/12_full_prompt_packets_master.md` 必须覆盖本表全部 8 个 scene。
- `scene_04_structure_support` 虽为“可后置增强”，仍必须有正式 packet，不得留空。
- 对 `E2_unresolved` 与 `SRC_TBD_*` 项，不允许以“等待验证”为由停止规划；只能保留、降级或排除。

## 与下游关系
- `11` 是完整规划总表。
- `12` 是正式 prompt 主包。
- `13` 给出生成顺序。
- `14` 给出高真实性排除与降级依据。
- `15` 给出回传元数据模板。
