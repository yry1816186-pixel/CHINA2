# Agent Handoff Package Template

## 目的
本文件用于把允许 handoff 的视频资产，整理成一个**不会丢边界、不会丢约束、不会丢 scene 身份**的标准包，再交给网页 agent。

它不是礼貌性附件，
而是为了防止出现这种问题：
- 给了 agent 视频
- 没给 scene discipline
- 没给边界文本
- 没给 risk disclosure
- 最后 agent 只能按视觉直觉自由发挥

## 使用前提
只有在视频先通过：
- `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
- `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`

之后，才允许组装本 handoff package。

---

## Handoff Package Header
- `handoff_id`:
- `handoff_date`:
- `prepared_by`:
- `target_agent`:
- `page_target`: `first-wave controlled long-scroll page`
- `project_status`: `controlled_first_wave_not_final`

## Asset Block
- `scene_id`:
- `chapter_id`:
- `video_file`:
- `poster_file`:
- `status`:
- `anchor`:
- `source_ref`:
- `evidence_grade`:
- `allowed_mode`:

## Reading Block
- `reading_task`:
- `scene_lede`:
- `boundary_text`:
- `discipline`:

## Risk Block
- `must_not_become`:
  -
  -
  -
- `misreading_risks`:
  -
  -
  -

## Disclosure Block
以下信息必须允许页面继续显示：
- `status`
- `evidence_grade`
- `anchor boundary`
- `allowed_mode`
- `misreading risk`

## Page Placement Block
- `suggested_order_in_page`:
- `stage_priority`: `primary / secondary / transitional`
- `tone_relationship_to_other_first_wave_scenes`:
- `notes_for_same-page_consistency`:

## Agent Constraints Block
agent 必须继续遵守：
- `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
- `web/reference-shell/REVIEW_CONTRACT.md`
- `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`（如涉及 intro）

agent 不得自行：
- 更改 scene 身份
- 删除边界披露
- 把 reviewed candidate 改写成冻结事实层
- 把页面做成 marketing / tourism / promo

## Gate Result Block
- `video_review_result`: `HANDOFF_ALLOWED / REVISE_AND_REVIEW_AGAIN / REJECT`
- `scorecard_file_or_reference`:
- `remaining_known_risks`:
  -
  -
  -

## Final Delivery Note to Agent
请按当前仓库主表与 review contract 实现页面。
你的任务不是重新解释项目，
而是在不制造假确定性、不抹除 truth-boundary disclosure 的前提下，
把该 scene 组织进 first-wave 长滚动页面。

---

## 最小示例
- `scene_id`: `scene_03_structure_primary`
- `chapter_id`: `chapter_03_structure`
- `status`: `reviewed_candidate_registered`
- `anchor`: `CANDIDATE_FOGUANG_EAST_HALL_01`
- `source_ref`: `SRC_CANDIDATE_FOGUANG_UNESCO_01`
- `evidence_grade`: `E3_supported`
- `allowed_mode`: `C_abstract_explanatory_layer`
- `reading_task`: 把支撑层级与主结构栈做成解释层，而不是技术奇观
- `must_not_become`:
  - technical spectacle
  - documentary real-site proof
  - decorative mechanical show

## 当前结论
handoff package 的质量，直接决定 agent 会不会开始自由发挥。

包越完整，越接近受控实现；
包越空，越接近“把错误做得更高级”。