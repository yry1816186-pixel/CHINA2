# First-Wave Video Review Scorecard

## 目的
本文件是 **agent-side 审片表**。

它用于在用户把视频放进 canonical dropzone 之后，
由 agent 统一审查 first-wave 样片，
而不是让用户在 handoff 之前手工填写。

## 使用范围
当前只用于：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`

`scene_00_intro_entry` 仅可作保守占位和观看协议验证，不进入 strong handoff 评分。

## 使用前提
在填写本表前，默认已经成立：
- 用户已按 `web/USER_ONLY_WORKFLOW.md` 完成生成和 drop
- 文件已进入 `web/assets/first-wave/`
- agent 已读取 `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- agent 已进入 `web/reference-shell/index.contract.html` 继续审看

## 评分方式
每条视频按以下维度评分：
- `PASS`
- `RISK`
- `FAIL`

只要任一关键项是 `FAIL`，该视频不得进入 handoff。

---

## Scene Info
- `scene_id`:
- `video_file`:
- `review_date`:
- `reviewer`:

## Gate 01 · Scene Identity
- scene 身份是否与主表一致：
- chapter 归属是否正确：
- allowed mode 是否未被偷换：
- 是否嫁接了不属于本 scene 的任务：
- 结论：`PASS / RISK / FAIL`
- 备注：

## Gate 02 · Forbidden Drift
### `scene_01_orientation_order`
- 是否滑向礼仪路线：
- 是否滑向权力 spectacle：
- 是否滑向 staged route：

### `scene_03_structure_primary`
- 是否滑向技术奇观：
- 是否滑向纪录式实景证明：
- 是否滑向机械装饰表演：

### `scene_06_conservation_boundary`
- 是否滑向修复奇迹叙事：
- 是否滑向旅游宣传：
- 是否滑向 triumph framing：

- 结论：`PASS / RISK / FAIL`
- 备注：

## Gate 03 · Paused-Frame Readability
- 暂停后是否仍可读出 scene 核心任务：
- 是否依赖高速镜头或强转场才成立：
- 第一眼读到的是纪律还是噪音：
- 结论：`PASS / RISK / FAIL`
- 备注：

## Gate 04 · Tone Compatibility in Same Page
- 与其余 first-wave 样片同屏后是否气质统一：
- 是否明显像不同项目出来的片子：
- 是否有一条压倒其他两条：
- 结论：`PASS / RISK / FAIL`
- 备注：

## Gate 05 · Page Disclosure Compatibility
- 页面是否还能继续显示 status：
- 页面是否还能继续显示 evidence grade：
- 页面是否还能继续显示 anchor boundary：
- 页面是否还能继续显示 allowed mode：
- 页面是否还能继续显示 misreading risk：
- 结论：`PASS / RISK / FAIL`
- 备注：

## Gate 06 · False Certainty Risk
- 是否天然被读成最终真实遗址证明：
- 是否天然被读成最终历史结论：
- 是否天然被读成最终保护成果宣传：
- 是否天然被读成最终整站视觉答案：
- 结论：`PASS / RISK / FAIL`
- 备注：

---

## Final Decision
- `overall_result`: `HANDOFF_ALLOWED / REVISE_AND_REVIEW_AGAIN / REJECT`
- `required_fixes`:
  -
  -
  -

## 强制规则
- 任一关键 gate 为 `FAIL`，不得 handoff。
- 若 `Gate 04` 为 `RISK` 或更差，优先修统一气质，不继续扩视频数量。
- 若 `Gate 05` 失败，说明视频正在逼页面隐藏 truth-boundary，不得 handoff。
- 若 `Gate 06` 失败，说明视频在制造假确定性，不得 handoff。

## 当前结论
要把视频做成网页，不是看它单条是否“好看”，
而是看它是否 **还能服从页面级 truth-boundary 与 scene discipline**。

但执行这份审查表的人必须是 agent，
不是用户。
