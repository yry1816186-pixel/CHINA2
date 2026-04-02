# 12 Priority Scene Backfill Workflow

## 文档定位
本文件定义首批 4 个关键 scene 的 `case_anchor` / `source_ref` 候选条目如何回填到正式主表，以及回填后如何影响 scene 与 packet。

本文件只服务当前阶段，
不扩展为全项目通用复杂流程。

## 适用范围
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_00_intro_entry`
- `scene_01_orientation_order`

## 核心原则
- 先 intake，再 review，再回填，再同步下游。
- 不允许先改 packet，再补 research 主表。
- 不允许让 `video/*` 先行定义事实。

## 五步流程

### Step 1 — intake
先在 `research/priority_scene_evidence_intake_template.md` 中登记候选条目。

输出：
- 候选 `case_anchor`
- 候选 `source_ref`
- 初始 evidence 建议
- 风险与边界说明

### Step 2 — review
对 intake 条目做最小审查，回答四个问题：
1. 这个候选条目到底支持什么，不支持什么？
2. 它会不会让 scene 滑向单一遗址误读？
3. 它会不会制造“翻新宣传”“礼仪奇观”“伪纪录片”风险？
4. 它能否把 `E2_unresolved` 推进到 `E3_supported` 或更高？

### Step 3 — backfill research masters
审查通过后，优先回填：
1. `research/evidence_manifest.md`
2. `research/case_anchor_register.md`

回填要求：
- 不删除旧占位，除非已明确替换
- 若仍需保留占位，必须写清主次关系
- 若只是 support，不得误写成 anchor

### Step 4 — sync scene layer
research 主表更新后，再同步：
- `video/03_scene_matrix.md`
- `research/priority_scene_hardening_sheet.md`

同步要求：
- 更新 scene 对应的 `case_anchor`
- 更新 scene 对应的 `source_ref`
- 更新 evidence 状态说明
- 明确该 scene 是否已满足下一轮 packet 校准条件

### Step 5 — sync candidate packet layer
只有在前四步完成后，才允许更新：
- `video/20_priority_scene_candidate_packets.md`

更新内容只允许包括：
- 去掉已过时的 research gate 说明
- 调整 packet status
- 收紧或放宽最小 prompt 方向
- 明确新的 review focus

## 当前建议顺序
1. `scene_03_structure_primary`
2. `scene_06_conservation_boundary`
3. `scene_00_intro_entry`
4. `scene_01_orientation_order`

## 通过门槛
一个 scene 只有同时满足以下条件，才算完成本轮回填：
- `case_anchor` 已在正式主表登记
- `source_ref` 已在正式主表登记
- `evidence_grade` 不再主要停留在 `E2_unresolved`
- `priority_scene_hardening_sheet` 已同步更新
- `video/20_priority_scene_candidate_packets.md` 已完成对应状态更新

## 禁止项
- 禁止跳过 intake 模板直接写正式主表。
- 禁止跳过 research 主表直接改 packet。
- 禁止把 support 来源误写成 anchor 来源。
- 禁止因为赶进度而让 `video/12` 重新成为默认工作入口。
