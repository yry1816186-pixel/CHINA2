# 15 Returned Video Metadata Template

## 文档目的
本文件提供统一的回传模板。你每次把生成结果交还给我时，请按同一字段结构提交，这样我可以直接对照：
- `packet_id`
- `scene_id`
- truth / downgrade 规则
- 输出质量与失败模式

## 使用规则
- 每个生成结果对应填写一份条目。
- 若同一 packet 有多个版本，每个版本都单独填写。
- 若工具无法提供某字段，不留空，写 `UNAVAILABLE`。
- `prompt_used_exact` 与 `negative_constraints_used_exact` 必须写实际投喂文本，而不是只写“同 packet”。

## 固定模板
```md
## Returned Video Item
- `delivery_batch_id`:
- `packet_id`:
- `chapter_id`:
- `scene_id`:
- `generator_tool`:
- `model_name`:
- `model_version`:
- `generation_date`:
- `operator`:
- `attempt_index`:
- `seed`:
- `duration_seconds`:
- `fps`:
- `resolution`:
- `aspect_ratio`:
- `output_filename`:
- `output_link_or_path`:
- `prompt_used_exact`:
- `negative_constraints_used_exact`:
- `matches_packet_without_change`: `yes` / `no`
- `if_changed_what_changed`:
- `manual_postprocess_applied`: `yes` / `no`
- `manual_postprocess_details`:
- `observed_failure_conditions`:
- `self_assessed_status`: `accepted` / `retry_needed` / `rejected`
- `notes`:
```

## 最低必填字段
- `packet_id`
- `chapter_id`
- `scene_id`
- `generator_tool`
- `model_name`
- `attempt_index`
- `seed`
- `duration_seconds`
- `resolution`
- `aspect_ratio`
- `output_link_or_path`
- `prompt_used_exact`
- `negative_constraints_used_exact`
- `matches_packet_without_change`
- `manual_postprocess_applied`
- `self_assessed_status`

## 推荐补充字段
- `fps`
- `model_version`
- `operator`
- `observed_failure_conditions`
- `notes`

## 示例空表
```md
## Returned Video Item
- `delivery_batch_id`: batch_001
- `packet_id`: packet_f01_01_intro_threshold
- `chapter_id`: chapter_00_intro
- `scene_id`: scene_00_intro_entry
- `generator_tool`: UNAVAILABLE
- `model_name`: UNAVAILABLE
- `model_version`: UNAVAILABLE
- `generation_date`: YYYY-MM-DD
- `operator`: UNAVAILABLE
- `attempt_index`: 1
- `seed`: UNAVAILABLE
- `duration_seconds`: UNAVAILABLE
- `fps`: UNAVAILABLE
- `resolution`: UNAVAILABLE
- `aspect_ratio`: UNAVAILABLE
- `output_filename`: UNAVAILABLE
- `output_link_or_path`: UNAVAILABLE
- `prompt_used_exact`: UNAVAILABLE
- `negative_constraints_used_exact`: UNAVAILABLE
- `matches_packet_without_change`: no
- `if_changed_what_changed`: UNAVAILABLE
- `manual_postprocess_applied`: no
- `manual_postprocess_details`: none
- `observed_failure_conditions`: none
- `self_assessed_status`: retry_needed
- `notes`: none
```
