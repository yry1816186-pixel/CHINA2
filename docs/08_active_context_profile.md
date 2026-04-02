# 08 Active Context Profile

## 文档定位
本文件定义当前阶段默认允许进入模型 / Agent 活跃上下文的最小文件集，以及必须退出现役的重型参考文件。

本文件的目标不是减少标准，而是减少重复读取、上下文漂移、伪完成感与无效 token 消耗。

## 当前阶段结论
当前项目处于：`frozen_planning_baseline_with_controlled_video_planning`

这不是网站实现阶段，
这不是 keyframe 拆解执行阶段，
这也不是批量外部视频生成执行授权阶段。

## 默认活跃上下文层（只读）
以下文件构成当前默认活跃上下文。除非任务明确需要，否则不得自动扩展：

1. `docs/00_master_spec.md`
2. `docs/01_scope_and_boundaries.md`
3. `docs/03_chapter_map.md`
4. `docs/04_responsibility_matrix.md`
5. `docs/05_asset_policy.md`
6. `contracts/truth_mode.md`
7. `contracts/evidence_scale.md`
8. `video/03_scene_matrix.md`
9. `research/evidence_manifest.md`
10. `research/case_anchor_register.md`
11. `research/validation_open_items.md`

## 默认退出现役层（按需参考）
以下文件不得自动进入默认上下文，只能在显式需要时按需读取：

- `contracts/field_schema.md`
- `contracts/naming_rules.md`
- `docs/02_narrative_blueprint.md`
- `docs/06_risks_and_validation.md`
- `docs/07_change_control.md`
- `review/freeze_log.md`
- `review/red_team_review.md`
- `video/00_seedance_master_brief.md`
- `video/01_chapter_video_briefs.md`
- `video/02_prompt_template_library.md`
- `video/04_output_review_checklist.md`
- `video/09_prompt_writing_source_pack.md`
- `video/11_full_generation_plan.md`
- `video/12_full_prompt_packets_master.md`
- `video/13_generation_sequence_and_priority.md`
- `video/14_scene_exclusion_and_downgrade_list.md`
- `keyframes/*`

## 强制规则
- 不允许把 `video/11_full_generation_plan.md` 与 `video/12_full_prompt_packets_master.md` 自动视为默认主包。
- 不允许把参考级重型文件当作默认工作入口。
- 不允许为了“显得完整”而在每次 prompt 写作时全量读入 `video/*`。
- 不允许用文件数量代替系统质量。

## 启用条件
当且仅当以下条件满足时，才允许把更多文件拉回活跃上下文：
- 首批真实 `case_anchor` 已冻结；
- 对应 `source_ref` 已不再以 `SRC_TBD_*` 为主；
- 活跃 scene 不再大面积停留在 `E2_unresolved`；
- `review/` 中已记录阶段切换批准。

## 禁止项
- 禁止把本文件视为“建议”。本文件是当前阶段的上下文控制规则。
- 禁止在未完成 research 硬化前，重新把 `11`、`12` 拉回默认活跃上下文。
