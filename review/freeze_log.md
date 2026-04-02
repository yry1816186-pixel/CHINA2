# Freeze Log

## 文档定位
本文件记录本项目冻结版规划包的版本、冻结范围、门禁状态、已解决事项、待验证项与后续允许的下游动作。

本文件只记录冻结与交接状态，不承载网站实现信息。

## 当前冻结版本
- `spec_version`: `v0.1.0-frozen-planning`
- 冻结日期：`2026-04-02`
- 冻结状态：`frozen`
- baseline 状态：`approved_current_baseline`

## 本轮审批记录
- 审批结论：本冻结版规划包已批准为项目当前 baseline。
- 审批范围：仅批准规划 artifacts、规则文件、章节规格文件与 review 文件。
- 审批边界：本轮审批不授权网站实现、不授权 UI / 路由 / 组件 / 动画代码 / 资产接入实现。
- 行政完成状态：签署元数据待补，但不阻塞当前规划链路继续推进。

## 签署信息
- `signer_name`: `TBD_SIGNER_NAME`
- `signer_title`: `Project Owner / Final Spec Approver`
- 签署状态：`pending_administrative_completion`
- 说明：以上签署字段为行政补全项，不改变本轮 baseline 已获批准的事实，不构成当前规划链路 blocker。

## 冻结产物
### `docs/*`
- `docs/00_master_spec.md`
- `docs/01_scope_and_boundaries.md`
- `docs/02_narrative_blueprint.md`
- `docs/03_chapter_map.md`
- `docs/04_responsibility_matrix.md`
- `docs/05_asset_policy.md`
- `docs/06_risks_and_validation.md`
- `docs/07_change_control.md`

### `contracts/*`
- `contracts/evidence_scale.md`
- `contracts/field_schema.md`
- `contracts/truth_mode.md`
- `contracts/naming_rules.md`

### `chapters/*`
- `chapters/chapter_00_intro.md`
- `chapters/chapter_01_orientation.md`
- `chapters/chapter_02_progression.md`
- `chapters/chapter_03_structure.md`
- `chapters/chapter_04_craft.md`
- `chapters/chapter_05_conservation.md`
- `chapters/chapter_06_outro.md`

### `review/*`
- `review/freeze_log.md`
- `review/red_team_review.md`

## 门禁状态
| 门禁 | 状态 | 说明 |
| --- | --- | --- |
| `video_first_review` | `passed_with_known_todo` | 已形成可执行规划口径，仍保留章节级待验证项 |
| `keyframe_review` | `not_started` | 尚未进入 keyframe 拆解执行 |
| `chapter_spec_freeze` | `passed_with_known_todo` | 章节级冻结提纲已落地，待证据锚点与阈值细化 |
| `web_manifest_review` | `not_started` | 尚未进入 web manifest 或前端实现阶段 |

## 已解决事项
- `scene_mode`、`truth_mode_default`、`evidence_grade`、`source_ref`、`dispute_flag`、`canonical_owner` 的合同口径已统一。
- 综合场景真实性模式已明确为 `B_composite_teaching_scene`，并要求披露为受证据约束的综合教学场景。
- 六类建筑类型上限、七个章节 ID、五段叙事结构已冻结。
- 视频 / 交互 / 程序动画职责矩阵已冻结。
- 素材分类与禁止替代关系已冻结。
- 变更控制、术语与命名规则已形成可交接口径。

## Open 待验证项
- 首批锚点案例名单。
- 章节级 `case_anchor` 与 `case_support` 的最终冻结值。
- 各章节 `chapter_goal`、`core_claim` 的证据锚点细化值。
- 章节负载预算、信息密度阈值与降级阈值。
- `a11y_level` 的组织级分级说明。
- 来源类型到 `E4_confirmed` 的边界阈值细化。
- review 表单中的正式签署完成时间与行政归档记录。

## 下一步允许的下游动作
1. 生成 Seedance 2.0 视频规划输入，但仅限规划，不进入视频生成。
2. 生成 keyframe 映射草案，但不得开始拆解执行。
3. 生成章节规格模板草案，但不得进入前端实现。
4. 依据已冻结 schema 补充 research 索引与 evidence 索引。

## 不允许的下游动作
- 不允许进入网站实现。
- 不允许开始界面、路由、组件、动画、视频接入实现。
- 不允许把冻结提纲改写成分镜稿、网页文案稿或代码稿。
- 不允许把综合场景未披露地包装成真实单一遗址。

## 关闭条件
- 当 `keyframe_review` 与 `web_manifest_review` 均通过并完成对应 review 记录后，可进入下一阶段交接。
- 任一冻结项被修改，必须先走 `docs/07_change_control.md` 的变更流程，再更新本文件。

## 确定项
- 本文件仅记录冻结状态与交接状态。
- 当前冻结包不授权网站实现。
- 当前冻结包允许继续做规划类下游动作，但不允许做实现类动作。

## 待验证项
- 若组织层后续采用统一版本命名法，`spec_version` 可按 `docs/07_change_control.md` 升级，但当前版本号已具备冻结效力。

## 禁止项
- 禁止把本文件当作进度日志替代规范正文。
- 禁止在未通过门禁时宣称进入实现阶段。
- 禁止把待验证项静默写成已完成。
