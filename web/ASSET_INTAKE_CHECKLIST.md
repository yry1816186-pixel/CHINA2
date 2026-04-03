# Asset Intake Checklist

## 目的
本文件用于在视频真正进入网页实现前，先做一轮**资产接收检查**。

它解决的是一个常被忽略的问题：
不是视频生成出来就能进页面，
还要先确认它在文件层、命名层、可访问层和页面接入层不会制造混乱。

## 使用时机
使用顺序应为：
1. 视频生成完成
2. scene 审片完成
3. 本 intake checklist 完成
4. 再进入 handoff package 与页面接入

## 基础信息
- `scene_id`:
- `asset_owner`:
- `received_date`:
- `reviewer`:

---

## A. 文件存在性
- 视频文件已收到：`YES / NO`
- poster 文件已收到（如有）：`YES / NO / N/A`
- 文件可在本地正常打开：`YES / NO`
- 文件没有损坏或播放失败：`YES / NO`
- 结论：`PASS / FAIL`

## B. 命名一致性
- 文件名包含正确 `scene_id`：`YES / NO`
- 文件名不会与其他 scene 混淆：`YES / NO`
- 命名没有使用最终化误导词（如 `ultimate`, `final_masterpiece`, `final_frozen_truth`）：`YES / NO`
- 结论：`PASS / FAIL`

## C. scene 身份一致性
- 资产对应的 scene 身份正确：`YES / NO`
- chapter 归属未错位：`YES / NO`
- 没有把 intro 素材误当其他 scene 正片：`YES / NO`
- 结论：`PASS / FAIL`

## D. 页面接入兼容性
- 视频适合接入 sticky stage：`YES / NO`
- poster 可作为回退展示：`YES / NO / N/A`
- 不会要求页面隐藏 status / evidence / boundary：`YES / NO`
- 结论：`PASS / FAIL`

## E. 同页统一性风险
- 与现有 first-wave 资产气质冲突明显：`YES / NO`
- 色调、节奏、镜头语法与同页资产严重不统一：`YES / NO`
- 该资产会压倒其他 scene：`YES / NO`
- 结论：`PASS / RISK / FAIL`

## F. truth-boundary 风险
- 资产会被天然读成最终事实证明：`YES / NO`
- 资产会弱化 reviewed candidate / unresolved 披露：`YES / NO`
- 资产会诱导 agent 做 promo / tourism / marketing 页面：`YES / NO`
- 结论：`PASS / FAIL`

---

## Final Intake Result
- `overall_result`: `ACCEPT_FOR_HANDOFF / HOLD_FOR_REVIEW / REJECT`
- `required_actions`:
  -
  -
  -

## 强制规则
- 任一 A / B / C / D / F 为 `FAIL`，不得 handoff。
- E 若为 `RISK`，必须在 same-page 原型中复看后再决定是否 handoff。
- intro 资产即使通过 intake，也不得自动升级为最终真入口资产。

## 当前结论
页面质量不只取决于 prompt 和审美，
也取决于资产进入页面前有没有被严格接收、命名、归类、审查。

少掉 intake 这一关，
后面再强的 agent 也可能只是从一份混乱输入开始工作。 