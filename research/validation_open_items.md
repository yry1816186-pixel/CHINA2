# Validation Open Items

## 文档目的
本文件用于集中记录当前 planning pipeline 仍未关闭的 `待验证项`，并为每项定义阻断阶段、关闭条件、责任角色与所需更新文件。

## 开放项主表
| `open_item_id` | `pending_item` | `blocking_stage` | `required_artifacts` | `owner_role` | `close_condition` | `status` |
| --- | --- | --- | --- | --- | --- | --- |
| `OPEN_01` | 首批真实 `case_anchor` 名单 | `video planning` | `research/case_anchor_register.md`, `research/evidence_manifest.md` | `historical_reviewer` | 各章至少一项主锚点达到可用等级 | `待验证项` |
| `OPEN_02` | 各章节 `case_support` 冻结值 | `video planning` | `research/case_anchor_register.md` | `historical_reviewer` | 辅助案例被明确限定且不越界 | `待验证项` |
| `OPEN_03` | 各章节精确证据锚点 | `keyframe mapping` | `research/evidence_manifest.md`, `video/01_chapter_video_briefs.md` | `historical_reviewer` | 各章 `core_claim` 对应至少一条可用证据 | `待验证项` |
| `OPEN_04` | 来源类型升级到 `E4_confirmed` 的边界样本 | `video planning` | `research/evidence_manifest.md` | `historical_reviewer` | 完成至少一组升级样本并通过 review | `待验证项` |
| `OPEN_05` | 信息密度阈值量化 | `chapter specs` | `video/01_chapter_video_briefs.md`, `keyframes/00_keyframe_schema.md` | `spec_owner` | 各章 `info_density` 有可执行阈值 | `待验证项` |
| `OPEN_06` | 降级阈值量化 | `web manifest` | `docs/05_asset_policy.md`, `video/03_scene_matrix.md`, `keyframes/03_interaction_candidate_map.md` | `technical_validator` | 每级 `fallback_level` 有最低保留清单 | `待验证项` |
| `OPEN_07` | `a11y_level` 分级说明 | `chapter specs` | `contracts/field_schema.md`, `keyframes/03_interaction_candidate_map.md` | `technical_validator` | 无障碍等级文本与应用规则冻结 | `待验证项` |
| `OPEN_08` | review 行政签署完成 | `administrative closeout` | `review/freeze_log.md` | `spec_owner` | 补齐签署时间与行政归档号 | `待验证项` |

## 关闭流程
1. 由 `owner_role` 提交更新稿。
2. 在对应 `required_artifacts` 中完成同步更新。
3. 在 `review/freeze_log.md` 中记录关闭动作。
4. 如涉及 truth/evidence/field 变更，必须走 `docs/07_change_control.md`。

## 确定项
- 本表是 `待验证项` 的唯一集中管理表。
- 未关闭项不得被静默从各文件移除。
- 关闭任一项必须同步更新对应文件。

## 待验证项
- 各开放项的具体计划完成日期。
- 各 `owner_role` 的组织级称谓。

## 禁止项
- 禁止把开放项口头视为“默认解决”。
- 禁止在未满足 `close_condition` 前改写 `status`。
- 禁止跳过 `review/freeze_log.md` 的关闭记录。
