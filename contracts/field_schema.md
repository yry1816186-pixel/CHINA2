# Field Schema Contract

## Schema purpose
本合同定义 frozen planning package 在 `video planning`、`keyframe mapping`、`chapter specs`、`web manifest` 四个阶段共用的字段、枚举、必填规则、空值规则和跨字段依赖。所有 schema-like 字段名必须以本合同为唯一主表，不允许在下游自造同义字段。

## Core downstream fields
| 字段 | 含义 | 说明 |
| --- | --- | --- |
| `project_id` | 项目标识 | 固定唯一值 |
| `spec_version` | 规范版本 | 必须与 freeze log 一致 |
| `chapter_id` | 章节 ID | 见 naming rules |
| `segment_id` | 五段叙事段落 ID | 固定枚举 |
| `asset_group_id` | 资产分组 ID | 章节到资产组的上层映射 |
| `asset_id` | 资产 ID | 唯一标识具体规划资产 |
| `frame_id` | keyframe ID | 唯一标识 keyframe |
| `scene_mode` | 资产级真实性模式 | 见 `contracts/truth_mode.md` |
| `truth_mode_default` | 章节级默认真实性模式 | 值域与 `scene_mode` 相同 |
| `case_anchor` | 主锚点案例 | 必须可追溯到 research register |
| `case_support` | 辅助案例集合 | 列表或空列表 |
| `time_scope` | 时间边界 | 受控字符串 |
| `region_scope` | 地域边界 | 受控字符串 |
| `building_type` | 建筑类型 | 固定六类枚举 |
| `chapter_goal` | 章节目标 | 冻结表述 |
| `core_claim` | 核心论断 | 冻结表述 |
| `learning_outcome` | 学习结果 | 冻结表述 |
| `emotional_goal` | 情绪目标 | 冻结表述 |
| `info_density` | 信息密度 | 固定枚举 |
| `interaction_role` | 交互职责 | 冻结表述 |
| `asset_role` | 资产职责 | 固定枚举 |
| `asset_class` | 资产政策分类 | 仅用于 asset policy |
| `layer_type` | 信息层类型 | 固定枚举 |
| `representation_mode` | 表现媒介类型 | 固定枚举 |
| `interaction_dependency` | 对交互的依赖程度 | 固定枚举 |
| `motion_owner` | 动态主承载媒介 | 固定枚举 |
| `canonical_owner` | 核心解释主归属媒介 | 固定枚举 |
| `fallback_level` | 资产级降级等级 | 固定枚举 |
| `mobile_fallback_level` | 章节级移动端最低保留等级 | 固定枚举 |
| `mobile_path` | 移动端理解路径说明 | 冻结表述 |
| `a11y_level` | 无障碍等级 | 受控字符串，后续细化 |
| `evidence_grade` | 证据等级 | 见 `contracts/evidence_scale.md` |
| `source_ref` | 来源索引 ID | 不允许泛称 |
| `source_type` | 来源类型 | research 阶段使用 |
| `default_evidence_grade` | 来源默认等级 | research 阶段使用 |
| `dispute_flag` | 是否争议 | `true` / `false` / `D_disputed` |
| `copyright_status` | 权限状态 | 固定枚举 |
| `review_gate` | 当前审核关口 | 固定枚举 |
| `revision_status` | 当前修订状态 | 固定枚举 |
| `upstream_dependency` | 上游依赖对象 | ID 或列表 |
| `downstream_target` | 下游消费对象 | 受控列表 |
| `forbidden_payload` | 不得承载内容 | 冻结表述或列表 |
| `removal_justification` | 章节不可删除原因 | 冻结表述 |

## Planning-only fields
| 字段 | 含义 | 说明 |
| --- | --- | --- |
| `planned_scene_id` | 规划场景容器 ID | 仅用于 pre-production |
| `scene_role` | 场景容器职责 | 只能描述规划功能 |
| `planning_status` | 规划状态 | 固定枚举 |
| `positive_constraints` | 正向允许约束 | 规划列表 |
| `negative_constraints` | 负向禁止约束 | 规划列表 |
| `keyframe_role` | keyframe 角色 | 只能描述解释功能，不得写 shot |
| `extraction_reason` | 提取原因 | 必须回指章节目标或核心论断 |
| `interaction_candidate` | 交互候选类型 | 仅用于 keyframe 规划 |
| `chapter_alignment_note` | 与章节论断对齐说明 | 冻结表述 |
| `default_keyframe_band` | 默认 keyframe band | 仅用于 scene-keyframe 映射 |
| `core_claim_alignment` | scene 与核心论断的对齐项 | 冻结表述 |
| `truth_mode_reference` | scene 映射使用的 truth mode 引用 | 值域与 `scene_mode` 相同 |
| `applicable_chapter_ids` | 适用章节列表 | research 阶段使用 |
| `claim_scope` | 来源支持的主张范围 | research 阶段使用 |
| `open_item_id` | 待验证项 ID | review/research 阶段使用 |
| `pending_item` | 待关闭事项 | review/research 阶段使用 |
| `blocking_stage` | 阻断阶段 | 受控字符串 |
| `required_artifacts` | 关闭该项必须同步更新的文件 | 列表 |
| `owner_role` | 事项责任角色 | 受控字符串 |
| `close_condition` | 关闭条件 | 冻结表述 |
| `status` | 当前事项状态 | 受控字符串 |
| `risk_id` | 风险编号 | docs/review 阶段使用 |
| `risk_point` | 风险点名称 | review 阶段使用 |
| `risk_description` | 风险描述 | docs/review 阶段使用 |
| `failure_mode` | 失败模式 | docs/review 阶段使用 |
| `validator_role` | 验证角色 | docs/review 阶段使用 |
| `validation_gate` | 验证关口 | 值域与 `review_gate` 相同 |
| `pass_condition` | 通过条件 | docs/review 阶段使用 |
| `rollback_action` | 回退动作 | docs/review 阶段使用 |
| `spec_owner` | 规范维护责任角色 | review/change 阶段使用 |
| `signer_name` | 签署人姓名 | 行政占位允许 |
| `signer_title` | 签署人职务 | 行政占位允许 |
| `notes` | 备注 | 非核心字段，仅作说明 |

## Enums
### `scene_mode` / `truth_mode_default` / `truth_mode_reference`
- `A_real_anchor`
- `B_composite_teaching_scene`
- `C_abstract_explanatory_layer`

### `building_type`
- `palatial_ritual`
- `altar_temple`
- `tower_pagoda`
- `garden`
- `bridge`
- `residential_courtyard`

### `layer_type`
- `fact_layer`
- `atmosphere_layer`
- `comparison_layer`
- `annotation_layer`

### `asset_role`
- `primary_explanation`
- `supporting_transition`
- `comparative_overlay`
- `contextual_atmosphere`
- `evidence_reference`

### `asset_class`
- `video`
- `2.5D`
- `vector_programmatic`
- `static_reference`

### `representation_mode`
- `video`
- `2.5D`
- `vector_programmatic`
- `static`

### `motion_owner` / `canonical_owner`
- `video`
- `2.5D`
- `vector_programmatic`
- `static_reference`
- `none`

### `fallback_level` / `mobile_fallback_level`
- `A_full`
- `B_reduced_motion`
- `C_low_bandwidth`
- `D_static_minimum`

### `review_gate` / `validation_gate`
- `video_first_review`
- `keyframe_review`
- `chapter_spec_freeze`
- `web_manifest_review`

### `revision_status`
- `draft`
- `reviewed`
- `frozen`
- `superseded`

### `planning_status`
- `not_started`
- `draft`
- `reviewed`
- `ready_for_generation`
- `superseded`

### `copyright_status`
- `internal_reference_only`
- `cleared_for_downstream`
- `uncleared`

### `interaction_dependency`
- `none`
- `optional`
- `required_for_comparison`
- `required_for_navigation`

### `info_density`
- `low`
- `medium_low`
- `medium`
- `medium_high`
- `high`

### `status`
- `待验证项`
- `reviewed`
- `closed`
- `superseded`

## Required-field matrix by stage
| 字段 | `video planning` | `keyframe mapping` | `chapter specs` | `web manifest` |
| --- | --- | --- | --- | --- |
| `project_id` | 必填 | 必填 | 必填 | 必填 |
| `spec_version` | 必填 | 必填 | 必填 | 必填 |
| `chapter_id` | 必填 | 必填 | 必填 | 必填 |
| `segment_id` | 必填 | 必填 | 必填 | 必填 |
| `planned_scene_id` | 必填 | 选填 | 禁用 | 禁用 |
| `scene_mode` | 必填 | 必填 | 选填 | 必填 |
| `truth_mode_default` | 选填 | 选填 | 必填 | 选填 |
| `chapter_goal` | 必填 | 选填 | 必填 | 选填 |
| `core_claim` | 必填 | 必填 | 必填 | 必填 |
| `learning_outcome` | 选填 | 选填 | 必填 | 选填 |
| `emotional_goal` | 选填 | 选填 | 必填 | 选填 |
| `info_density` | 选填 | 选填 | 必填 | 选填 |
| `interaction_role` | 选填 | 选填 | 必填 | 选填 |
| `asset_role` | 必填 | 必填 | 必填 | 必填 |
| `representation_mode` | 必填 | 必填 | 选填 | 必填 |
| `motion_owner` | 必填 | 必填 | 选填 | 必填 |
| `canonical_owner` | 必填 | 必填 | 必填 | 必填 |
| `evidence_grade` | 必填 | 必填 | 必填 | 必填 |
| `source_ref` | 必填 | 必填 | 必填 | 必填 |
| `dispute_flag` | 必填 | 必填 | 必填 | 必填 |
| `fallback_level` | 必填 | 必填 | 选填 | 必填 |
| `mobile_fallback_level` | 选填 | 选填 | 必填 | 选填 |
| `mobile_path` | 选填 | 选填 | 必填 | 选填 |
| `interaction_dependency` | 选填 | 必填 | 必填 | 必填 |
| `review_gate` | 必填 | 必填 | 必填 | 必填 |
| `revision_status` | 必填 | 必填 | 必填 | 必填 |
| `forbidden_payload` | 必填 | 必填 | 必填 | 必填 |
| `negative_constraints` | 必填 | 选填 | 选填 | 禁用 |
| `keyframe_role` | 禁用 | 必填 | 禁用 | 禁用 |
| `extraction_reason` | 禁用 | 必填 | 禁用 | 禁用 |
| `interaction_candidate` | 禁用 | 选填 | 禁用 | 禁用 |

## Null / empty rules
- `source_ref` 不能为空字符串，不允许“官方资料”“馆方资料”“网络资料”等泛称。
- `scene_mode`、`evidence_grade`、`layer_type`、`canonical_owner`、`review_gate` 不允许空值。
- `case_anchor`、`case_support` 未冻结时允许为占位，但必须同时在 `research/validation_open_items.md` 中保留对应 `待验证项`。
- `negative_constraints` 在 `video planning` 阶段不得为空；为空视为规划无效。
- `truth_mode_default` 仅允许在章节级文件为空以外，其余阶段不得把它当作 `scene_mode` 的替代值。

## Cross-field dependencies
- 若 `scene_mode=B_composite_teaching_scene`，则必须具备 composite 披露说明，并遵守 `contracts/truth_mode.md`。
- 若 `scene_mode=C_abstract_explanatory_layer`，则 `representation_mode` 不得以“实景确证”语气承担唯一结论。
- 若 `evidence_grade=E2_unresolved` 或 `E1_unverified`，则 `layer_type` 不得为 `fact_layer`。
- 若 `canonical_owner=video`，则必须通过 `去视频测试`；未通过即规划失效。
- 若 `copyright_status=uncleared`，则不得进入 `web manifest`。
- 若 `planned_scene_id` 存在，则其 `chapter_id`、`segment_id`、`scene_mode`、`asset_role`、`motion_owner`、`fallback_level` 必须与 `video/03_scene_matrix.md` 一致。
- 若 `frame_id` 存在，则必须可追溯到唯一 `planned_scene_id` 或唯一上游 `asset_id`。

## Example state relationships without content examples
- 章节默认真实性模式用 `truth_mode_default` 表示；资产实际模式用 `scene_mode` 表示。
- 同一 `chapter_id` 下可以有多个 `planned_scene_id`、`asset_id`、`frame_id`，但每个资产只能有一个 `canonical_owner`。
- 同一 `planned_scene_id` 可以拆成多个 `frame_id`，但它们必须继承同一 `chapter_id`、`segment_id` 与 `scene_mode`。

## 确定项
- 本合同为字段命名唯一主表。
- 所有 planning artifacts、contracts、chapter specs、review files 的 schema-like 字段名必须与本合同一致。
- `video planning`、`keyframe mapping`、`chapter specs`、`web manifest` 四阶段必须复用同一字段体系。

## 待验证项
- `time_scope`、`region_scope` 的受控格式细粒度仍待在 research 索引阶段冻结。
- `a11y_level` 的正式分级文本仍待后续无障碍附录细化。
- `source_type` 的完整受控枚举仍待首批真实来源进入 research manifest 后补齐。

## 禁止项
- 禁止自由发挥字段名。
- 禁止使用 JSON、前端类型定义或实现代码替代本合同。
- 禁止在下游实现阶段私自新增同义字段绕开本合同。
