# Agent Handoff Package Template

## 目的
本文件现在只承担一个角色：

**当 agent 在 canonical dropzone 内完成审片后，如需把已通过 gate 的资产整理成内部结构化记录，可使用本模板。**

它不再是用户必须手工组装的交付物。

## 当前责任边界
用户的责任只到这里为止：
- 复制 `web/DIRECT_COPY_VIDEO_TEXTS.md`
- 生成视频
- 把视频按 canonical scene-id 命名放进 `web/assets/first-wave/`

从这里开始，以下工作都由 agent 自行承担：
- 读取 dropzone
- 做 gate review
- 填 scorecard
- 判断 strong handoff / exploratory only
- 必要时整理内部 handoff package

## agent 组包时的事实来源
agent 必须从以下来源自动继承信息，而不是向用户反问：

- `web/ASSET_DROPZONE_SPEC.json`
- `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- `web/reference-shell/scene.contracts.json`
- `web/scenes.manifest.json`
- `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
- `web/AGENT_IMPLEMENTATION_BOUNDARY.md`

---

## Handoff Package Header
- `handoff_id`:
- `handoff_date`:
- `prepared_by_agent`:
- `target_agent_or_runtime`:
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

## 当前结论
handoff package 仍然有价值，
但它现在必须被收回为 **agent-side internal structure**，
不能再作为用户额外劳动。
