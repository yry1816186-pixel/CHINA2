# Sample Handoff Package · `scene_01_orientation_order`

## 用途
本文件是 `scene_01_orientation_order` 进入网页实现前的参考 handoff 样例。

它的作用是把“秩序 scene 该如何被交给 agent”写成一个足够具体的交付骨架，
避免后续把方向、阈限和层级关系误做成权力 spectacle 或礼仪路线。

## 使用前提
本样例默认以下前提已经成立：
- 视频已通过 `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
- 视频已通过 `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
- 资产已通过 `web/ASSET_INTAKE_CHECKLIST.md`
- 当前页面入口使用 `web/reference-shell/index.contract.html`

---

## Handoff Package Header
- `handoff_id`: `handoff_scene_01_orientation_order_sample_01`
- `handoff_date`: `to_be_filled_at_real_delivery`
- `prepared_by`: `to_be_filled`
- `target_agent`: `web implementation agent`
- `page_target`: `first-wave controlled long-scroll page`
- `project_status`: `controlled_first_wave_not_final`

## Asset Block
- `scene_id`: `scene_01_orientation_order`
- `chapter_id`: `chapter_01_orientation`
- `video_file`: `to_be_filled_after_review`
- `poster_file`: `to_be_filled_after_review`
- `status`: `reviewed_candidate_registered`
- `anchor`: `CANDIDATE_FORBIDDEN_CITY_ORIENTATION_01`
- `source_ref`: `SRC_CANDIDATE_FORBIDDEN_CITY_UNESCO_01`
- `evidence_grade`: `E3_supported`
- `allowed_mode`: `B_composite_teaching_scene`

## Reading Block
- `reading_task`: 让方向、阈限、压缩与释放、层级关系成为可读秩序，而不是礼仪路线或权力 spectacle
- `scene_lede`: 秩序先通过空间关系被身体读到，再通过符号被理解；这个 scene 的任务，是把空间序列本身做成知识语言
- `boundary_text`: 当前只允许以 reviewed Beijing palace-complex candidate 作为秩序解释锚点，不得滑向中轴奇观、皇家奇观或 staged route
- `discipline`: pause-frame 可读性必须强于 spectacle；不得滑向 staged route 或 central-axis wonder reel

## Risk Block
- `must_not_become`:
  - ritual route demonstration
  - central-axis spectacle
  - generic majestic fly-through
- `misreading_risks`:
  - 被读成“礼仪路线演示”
  - 被读成“权力空间壮观展示”
  - 被读成“一条视频证明全部秩序逻辑都来自单一 palace-complex”

## Disclosure Block
以下信息必须允许页面继续显示：
- `status`
- `evidence_grade`
- `anchor boundary`
- `allowed_mode`
- `must_not_become / misreading risk`

## Page Placement Block
- `suggested_order_in_page`: `03`
- `stage_priority`: `secondary`
- `tone_relationship_to_other_first_wave_scenes`: 作为秩序收束与重新定向，不可把整站拉成权力叙事或中轴奇观页面
- `notes_for_same-page_consistency`: 这条必须让 order 和 threshold 可停顿可阅读，不能因为想做出气势就把方向阅读变成 spectacle

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
- 把页面做成 central-axis spectacle / ritual-route page / power narrative page

## Gate Result Block
- `video_review_result`: `HANDOFF_ALLOWED`
- `scorecard_file_or_reference`: `to_be_filled`
- `remaining_known_risks`:
  - 若镜头过于 monumental，threshold readability 可能下降
  - 若页面边界标签被弱化，order scene 可能被误读成 power scene
  - 若与 `scene_03`、`scene_06` 同页不统一，需优先修 same-page tone 而不是继续扩视频

## Final Delivery Note to Agent
请把该 scene 作为 first-wave 长滚动页面中的秩序阅读段来组织。
你的任务不是把它做成礼仪路线片，
而是把它做成一个可停顿、可阅读、可披露边界的空间秩序解释层。

## 当前结论
对秩序类 scene 的 handoff，
真正要交出去的不是“气势”，
而是“order / threshold / hierarchy 如何继续在页面里成立”。

本文件就是这个标准的最小样例。
