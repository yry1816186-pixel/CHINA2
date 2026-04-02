# Priority Scene Evidence Intake Template

## 文档定位
本文件用于给首批 4 个关键 scene 补录 `case_anchor` 与 `source_ref` 时提供统一模板。

它不是 research 正式主表，
不是最终证据登记表，
也不是视频 packet 文件。

它的作用是：
先把候选证据条目按统一格式整理好，再回填到正式主表。

## 适用 scene
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_00_intro_entry`
- `scene_01_orientation_order`

## 使用规则
- 每次只补 1 个候选主锚点或 1 组强相关来源。
- 未核实前，不得把候选值直接写成正式冻结值。
- 任何候选条目若进入正式主表，必须同步更新：
  - `research/evidence_manifest.md`
  - `research/case_anchor_register.md`
  - 对应 `video/*`
  - 对应 `review/*`（如已触发阶段判断）

---

## Intake Record Template

### A. Intake meta
- `intake_id`:
- `scene_id`:
- `chapter_id`:
- `submitted_by`:
- `submission_date`:
- `current_status`: `candidate / under_review / accepted_for_backfill / rejected / needs_more_evidence`

### B. Candidate case anchor
- `candidate_case_anchor_id`:
- `candidate_case_name`:
- `building_type`:
- `time_scope`:
- `region_scope`:
- `why_this_case_fits_this_scene`:
- `why_it_does_not_overclaim`:
- `known_limits_or_disputes`:

### C. Candidate source bundle
- `candidate_source_ref`:
- `source_type`:
- `source_title_or_description`:
- `source_owner_or_institution`:
- `source_date_if_known`:
- `copyright_status`:
- `supports_which_claim_exactly`:
- `supports_scene_level_or_chapter_level`:
- `initial_evidence_grade_recommendation`:

### D. Boundary check
- `can_support_direct factual statement?`:
- `only supports interpretive framing?`:
- `must remain composite/non-site-specific?`:
- `would this create single-site misreading risk?`:
- `does this introduce restoration overclaim risk?`:
- `does this introduce ritual/power overclaim risk?`:

### E. Backfill decision draft
- `recommended_case_anchor_action`: `keep_tbd / replace_with_candidate / add_as_support_only`
- `recommended_source_ref_action`: `keep_tbd / replace_with_candidate / add_secondary_source`
- `recommended_video_action`: `no_change / tighten_packet / downgrade_packet / enable_next_round`
- `reviewer_note`:

---

## Scene-specific prompts for intake

### `scene_03_structure_primary`
优先补：
- 主结构关系可复核来源
- 支撑层级与受力关系可解释边界
- 哪些结构关系可以进入解释层，哪些不能伪装成实测结论

### `scene_06_conservation_boundary`
优先补：
- 历史层 / 照护层 / 干预层的边界来源
- 哪些表达只能示意，哪些能进入解释层
- 如何避免滑向“翻新宣传”或“焕新奇迹”

### `scene_00_intro_entry`
优先补：
- 综合教学场景而非单一遗址的最小支撑
- 哪些入口语法可被支撑，哪些不能被讲成真实遗址入口

### `scene_01_orientation_order`
优先补：
- 阈限、秩序、层级、定向关系的最小来源支撑
- 如何避免把秩序误读成礼仪表演路线或帝王空间奇观

## 禁止项
- 禁止直接在模板里写“已冻结”“已确认”，除非已完成正式回填。
- 禁止用泛称来源替代真实候选来源。
- 禁止为了加快推进，把候选条目直接跳过正式主表回填流程。
