# 03 Scene Matrix

## 文档目的
本文件用于定义 Seedance 2.0 pre-production 的场景容器矩阵。每个 `planned_scene_id` 是一个规划单元，不是最终 shot，不是最终 storyboard。

## Scene matrix
| `planned_scene_id` | `chapter_id` | `segment_id` | `scene_role` | `scene_mode` | `case_anchor` | `evidence_grade` | `source_ref` | `asset_role` | `motion_owner` | `fallback_level` | `review_gate` | `revision_status` | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `scene_00_intro_entry` | `chapter_00_intro` | `segment_00_invocation` | 入口声明容器 | `B_composite_teaching_scene` | `TBD_CASE_ANCHOR_INTRO_01` | `E2_unresolved` | `SRC_TBD_INTRO_01` | `contextual_atmosphere` | `video` | `D_static_minimum` | `video_first_review` | `draft` | 已有 exploratory candidate review，但当前不进入主表注册 |
| `scene_01_orientation_order` | `chapter_01_orientation` | `segment_01_order_entry` | 定向与秩序容器 | `B_composite_teaching_scene` | `CANDIDATE_FORBIDDEN_CITY_ORIENTATION_01` | `E3_supported` | `SRC_CANDIDATE_FORBIDDEN_CITY_UNESCO_01` | `supporting_transition` | `video` | `C_low_bandwidth` | `video_first_review` | `reviewed_candidate` | 已进入受限真实候选审查；仅可用于秩序、阈限、层级解释，不得滑向礼仪路线、权力叙事或纪录式实景证明 |
| `scene_02_progression_path` | `chapter_02_progression` | `segment_01_order_entry` | 递进关系容器 | `B_composite_teaching_scene` | `TBD_CASE_ANCHOR_PROGRESSION_01` | `E2_unresolved` | `SRC_TBD_ORDER_01` | `supporting_transition` | `video` | `C_low_bandwidth` | `video_first_review` | `draft` | 不得人物剧情化 |
| `scene_03_structure_primary` | `chapter_03_structure` | `segment_02_structural_climax` | 结构高潮主容器 | `C_abstract_explanatory_layer` | `CANDIDATE_FOGUANG_EAST_HALL_01` | `E3_supported` | `SRC_CANDIDATE_FOGUANG_UNESCO_01` | `primary_explanation` | `2.5D` | `D_static_minimum` | `video_first_review` | `reviewed_candidate` | 已进入受限真实候选审查；仅可作解释层结构锚定，不得转为纪录式实景证明 |
| `scene_04_structure_support` | `chapter_03_structure` | `segment_02_structural_climax` | 结构辅助过渡容器 | `B_composite_teaching_scene` | `TBD_CASE_SUPPORT_STRUCTURE_01` | `E2_unresolved` | `SRC_TBD_STRUCTURE_01` | `supporting_transition` | `video` | `D_static_minimum` | `video_first_review` | `draft` | 只做辅助氛围承接 |
| `scene_05_craft_detail` | `chapter_04_craft` | `segment_03_return_to_detail_and_care` | 工艺细部容器 | `B_composite_teaching_scene` | `TBD_CASE_ANCHOR_CRAFT_01` | `E2_unresolved` | `SRC_TBD_CRAFT_01` | `comparative_overlay` | `2.5D` | `C_low_bandwidth` | `video_first_review` | `draft` | 禁止装饰合集化 |
| `scene_06_conservation_boundary` | `chapter_05_conservation` | `segment_03_return_to_detail_and_care` | 保护边界容器 | `B_composite_teaching_scene` | `CANDIDATE_PINGYAO_CONSERVATION_01` | `E3_supported` | `SRC_CANDIDATE_PINGYAO_UNESCO_01` | `evidence_reference` | `vector_programmatic` | `D_static_minimum` | `video_first_review` | `reviewed_candidate` | 已进入受限真实候选审查；强调保护边界解释，不得滑向旅游宣传或修复奇迹叙事 |
| `scene_07_outro_exit` | `chapter_06_outro` | `segment_04_controlled_exit` | 收束离场容器 | `B_composite_teaching_scene` | `TBD_CASE_ANCHOR_OUTRO_01` | `E2_unresolved` | `SRC_TBD_OUTRO_01` | `supporting_transition` | `video` | `D_static_minimum` | `video_first_review` | `draft` | 不引入新主题 |

## 使用规则
- 任何 `planned_scene_id` 若 `case_anchor`、`source_ref`、`evidence_grade` 未满足最低要求，必须继续标记 `待验证项`。
- `scene_role` 只能描述规划功能，不得写成镜头动作。
- 每个场景必须通过 `video/04_output_review_checklist.md` 审查后，才可进入实际视频生成阶段。

## 确定项
- 本矩阵只定义场景容器，不定义 storyboard。
- 所有场景都已声明 `scene_mode`、`evidence_grade`、`chapter_id`、`asset_role`、`motion_owner`、`fallback_level`。
- 结构高潮章保留主解释容器与辅助承接容器的分离。

## 待验证项
- 各 `planned_scene_id` 的最终数量与是否增删 support 容器。
- 各场景的真实锚点与证据等级升级。

## 禁止项
- 禁止将 `planned_scene_id` 当作最终 shot。
- 禁止给场景补写未冻结案例。
- 禁止在本矩阵中引入页面实现字段。
