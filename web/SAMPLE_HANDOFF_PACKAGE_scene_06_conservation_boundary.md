# Sample Handoff Package · `scene_06_conservation_boundary`

## 用途
本文件是 `scene_06_conservation_boundary` 进入网页实现前的参考 handoff 样例。

它的作用不是替代真实审片，
而是把“保护边界 scene 该怎么被交给 agent”写成一个足够具体的交付骨架。

## 使用前提
本样例默认以下前提已经成立：
- 视频已通过 `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
- 视频已通过 `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
- 资产已通过 `web/ASSET_INTAKE_CHECKLIST.md`
- 当前页面入口使用 `web/reference-shell/index.contract.html`

---

## Handoff Package Header
- `handoff_id`: `handoff_scene_06_conservation_boundary_sample_01`
- `handoff_date`: `to_be_filled_at_real_delivery`
- `prepared_by`: `to_be_filled`
- `target_agent`: `web implementation agent`
- `page_target`: `first-wave controlled long-scroll page`
- `project_status`: `controlled_first_wave_not_final`

## Asset Block
- `scene_id`: `scene_06_conservation_boundary`
- `chapter_id`: `chapter_05_conservation`
- `video_file`: `to_be_filled_after_review`
- `poster_file`: `to_be_filled_after_review`
- `status`: `reviewed_candidate_registered`
- `anchor`: `CANDIDATE_PINGYAO_CONSERVATION_01`
- `source_ref`: `SRC_CANDIDATE_PINGYAO_UNESCO_01`
- `evidence_grade`: `E3_supported`
- `allowed_mode`: `B_composite_teaching_scene_with_explanatory_boundary`

## Reading Block
- `reading_task`: 把 historic layer 与 careful intervention layer 的边界做清楚，让保护看起来像克制判断，而不是焕新叙事
- `scene_lede`: 保护不是胜利叙事，而是边界判断：什么应保留，什么应克制介入，什么必须让历史层继续可见
- `boundary_text`: 当前只允许以 Pingyao reviewed candidate 作为 conservation-boundary explanation anchor，不可滑向旅游宣传或奇迹修复 narrative
- `discipline`: neutral、annotation-friendly、still-frame readable；不得 triumph framing

## Risk Block
- `must_not_become`:
  - miracle restoration film
  - renewal promo
  - single-shot proof of total conservation success
- `misreading_risks`:
  - 被读成“修复奇迹片”
  - 被读成“焕新升级宣传片”
  - 被读成“一条视频证明全部保护工作都已完成”

## Disclosure Block
以下信息必须允许页面继续显示：
- `status`
- `evidence_grade`
- `anchor boundary`
- `allowed_mode`
- `must_not_become / misreading risk`

## Page Placement Block
- `suggested_order_in_page`: `02`
- `stage_priority`: `secondary`
- `tone_relationship_to_other_first_wave_scenes`: 作为 care / boundary 转折，不可把整站拉成 triumph 或 tourism 页面
- `notes_for_same-page_consistency`: 这条必须稳定、中性、可注释，不能因为想追求高级感而把保护做成视觉胜利叙事

## Agent Constraints Block
agent 必须继续遵守：
- `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
- `web/reference-shell/REVIEW_CONTRACT.md`
- `web/reference-shell/scene.contracts.json`
- `web/scenes.manifest.json`

agent 不得自行：
- 更改 `scene_id`
- 更改 `allowed_mode`
- 弱化 reviewed candidate 披露
- 把页面做成 renewal promo / tourism promo / miracle-restoration framing

## Gate Result Block
- `video_review_result`: `HANDOFF_ALLOWED`
- `scorecard_file_or_reference`: `to_be_filled`
- `remaining_known_risks`:
  - 若镜头过于光洁，historic layer 的可见性可能下降
  - 若页面标签被弱化，care-boundary judgement 可能被误读成焕新叙事
  - 若与 `scene_03`、`scene_01` 同页不统一，需优先修 tone 而不是继续扩视频

## Final Delivery Note to Agent
请把该 scene 作为 first-wave 长滚动页面中的边界判断段来组织。
你的任务不是把它做成成果庆祝段，
而是把它做成一个稳定、克制、可注释、可披露边界的保护解释层。

## 当前结论
对保护类 scene 的 handoff，
真正要交出去的不是“修得多漂亮”，
而是“边界判断如何继续在页面里成立”。

本文件就是这个标准的最小样例。
