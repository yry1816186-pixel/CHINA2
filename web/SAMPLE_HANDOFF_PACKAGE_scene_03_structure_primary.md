# Sample Handoff Package · `scene_03_structure_primary`

## 用途
本文件是一个**可直接参考的 handoff 样例包**。

它的作用不是替代真实审片，
而是让后续执行者看到：
当一条视频真的允许进入网页实现阶段时，
一个合格的 handoff 包应该长什么样。

## 使用前提
本样例默认以下前提已经成立：
- 视频已通过 `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
- 视频已通过 `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
- 当前页面入口使用 `web/reference-shell/index.contract.html`

---

## Handoff Package Header
- `handoff_id`: `handoff_scene_03_structure_primary_sample_01`
- `handoff_date`: `to_be_filled_at_real_delivery`
- `prepared_by`: `to_be_filled`
- `target_agent`: `web implementation agent`
- `page_target`: `first-wave controlled long-scroll page`
- `project_status`: `controlled_first_wave_not_final`

## Asset Block
- `scene_id`: `scene_03_structure_primary`
- `chapter_id`: `chapter_03_structure`
- `video_file`: `to_be_filled_after_review`
- `poster_file`: `to_be_filled_after_review`
- `status`: `reviewed_candidate_registered`
- `anchor`: `CANDIDATE_FOGUANG_EAST_HALL_01`
- `source_ref`: `SRC_CANDIDATE_FOGUANG_UNESCO_01`
- `evidence_grade`: `E3_supported`
- `allowed_mode`: `C_abstract_explanatory_layer`

## Reading Block
- `reading_task`: 把柱、梁、支撑层级与主结构秩序做成解释层，而不是技术炫耀或纪录式实景证明
- `scene_lede`: 结构高潮的价值不在于复杂，而在于把建筑智慧压缩成一眼可读的支撑关系
- `boundary_text`: 当前只允许以 Foguang Temple East Hall reviewed candidate 作为 bounded explanatory anchor，不可扩写成 blanket structural proof
- `discipline`: 必须保持半抽象、层级清晰、单主结构栈可读；暂停后先读到 support order，而不是视觉刺激

## Risk Block
- `must_not_become`:
  - technical spectacle
  - documentary real-site proof
  - decorative mechanical show
- `misreading_risks`:
  - 被读成“结构奇观秀”
  - 被读成“遗址纪录证明”
  - 被读成“一条视频证明全部中国古代木构结构规律”

## Disclosure Block
以下信息必须允许页面继续显示：
- `status`
- `evidence_grade`
- `anchor boundary`
- `allowed_mode`
- `must_not_become / misreading risk`

## Page Placement Block
- `suggested_order_in_page`: `01`
- `stage_priority`: `primary`
- `tone_relationship_to_other_first_wave_scenes`: 作为知识高潮，但不能把整站气质拉成技术奇观片
- `notes_for_same-page_consistency`: 节奏必须冷静、可停顿、可读；不能因为它是结构高潮就把其余两条 scene 压扁

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
- 把页面做成 engineering spectacle / technical promo

## Gate Result Block
- `video_review_result`: `HANDOFF_ALLOWED`
- `scorecard_file_or_reference`: `to_be_filled`
- `remaining_known_risks`:
  - 若镜头过快，pause-frame readability 可能下降
  - 若页面文字被弱化，scene discipline 可能被视觉刺激盖过
  - 若与 `scene_06`、`scene_01` 同页不统一，需优先修 tone 而不是继续扩视频

## Final Delivery Note to Agent
请把该 scene 作为 first-wave 长滚动页面中的结构解释高潮来组织。
你的任务不是把它做成炫技段落，
而是把它做成一个可停顿、可阅读、可披露边界的解释层。

## 当前结论
真正的 handoff 包，
不是“给一个 mp4 再加一句备注”，
而是把 scene 身份、边界、风险、页面位置和披露要求一起交出去。

本文件就是这个标准的最小样例。 