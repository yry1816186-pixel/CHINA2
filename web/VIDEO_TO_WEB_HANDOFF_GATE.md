# Video to Web Handoff Gate

## 目的
本文件直接回答你最关心的那个落地问题：

**视频生成出来以后，什么时候可以交给网页 agent 继续做，什么时候绝对不能交？**

它的作用不是让流程看起来更完整，
而是防止出现这种假闭环：
- prompt 已复制
- 视频已生成
- agent 已接手
- 结果却只是一个看起来高级、实际上已经偏离项目边界的网页

## 当前结论先写在前面
当前 first-wave 视频生成完成后，
**不是自动进入网页实现阶段**。

只有在通过本文件的 handoff gate 后，
视频才允许进入页面实现流程。

## 允许进入 handoff 的对象
当前只允许这 3 条先进入标准 handoff 判断：
1. `scene_03_structure_primary`
2. `scene_06_conservation_boundary`
3. `scene_01_orientation_order`

`scene_00_intro_entry` 当前只允许：
- 保守占位
- 辅助试装
- 观看协议验证

不允许被当成“已冻结最终入口视频”进入强 handoff。

## 进入 handoff 前必须满足的 6 个条件
### Gate 01 · scene 身份正确
视频必须与主表 scene 一一对应：
- scene id 正确
- chapter 归属正确
- allowed mode 没被偷换
- 没有额外嫁接别的章节任务

### Gate 02 · 没有滑向禁区
每条视频都必须证明自己没有滑向对应禁区：
- `scene_01` 不能滑向礼仪路线 / 权力 spectacle
- `scene_03` 不能滑向技术奇观 / 纪录式证明
- `scene_06` 不能滑向修复奇迹 / 旅游宣传

只要明显滑向一次，就不能 handoff。

### Gate 03 · 暂停帧仍可读
视频必须满足 paused-frame readability：
- 画面在静止时仍能读出当前场景的核心任务
- 不依赖高速动效、炫技转场、镜头刺激来成立
- 第一眼读到的是 scene discipline，不是视觉噪音

### Gate 04 · 三条合屏不打架
这 3 条视频必须被放到同一网页原型中一起看。
如果出现以下任一情况，不能 handoff：
- 气质明显互相打架
- 一条像纪录片，一条像广告，一条像艺术片
- 色调、节奏、镜头语法完全不统一
- 一条明显压倒其他两条，导致整站气质失衡

### Gate 05 · 页面可披露
视频必须允许页面继续显示：
- reviewed candidate status
- evidence grade
- anchor boundary
- allowed mode
- misreading risk

如果视频强烈要求页面把这些东西藏掉、弱化掉、边角化，不能 handoff。

### Gate 06 · 不制造假确定性
视频不能让观众天然读成：
- 最终真实遗址证明
- 最终历史结论
- 最终保护成果宣传
- 最终整站视觉答案

如果视频本身已经制造了这种确定性错觉，也不能 handoff。

## handoff 包必须包含什么
当视频允许交给 agent 时，handoff 包里必须至少包含：
1. 对应视频文件
2. 对应 scene id
3. 当前 status
4. 对应 anchor
5. 对应 source ref
6. 对应 allowed mode
7. 本 scene 的 must-not-become 列表
8. 本 scene 的页面 reading task

缺任一项，handoff 包不完整。

## agent 接手后必须继续保留什么
agent 接手后不得把 handoff 包里的这些信息吞掉：
- status
- evidence grade
- anchor boundary
- misreading risk
- unresolved / reviewed_candidate 披露

如果 agent 的页面必须靠隐藏这些信息才能“变高级”，说明网页方向已经错了。

## 当前最重要的判断方式
对每条视频，不要问：
- 它炸不炸
- 它酷不酷
- 它像不像某个大项目

而要问：
- 它是不是仍然服从当前 scene 身份？
- 它有没有越过 evidence / anchor 边界？
- 它放进同一页面后会不会破坏整站气质？
- 它是否允许页面继续诚实披露当前阶段的未完成状态？

## intro 的特别说明
`scene_00_intro_entry` 当前哪怕生成出效果不错的视频，
也不能因此自动升级为强 handoff 资产。

它当前最多只能作为：
- 观看协议入口测试资产
- disclosure-first 占位资产
- 节奏验证资产

除非它的真实 anchor 与 evidence 条件被正式关闭，
否则不得把它交给 agent 当成最终入口真资产去组织全站。

## 当前结论
你之后复制提示词生成视频时，
真正安全的流程不是：

prompt -> video -> agent -> final site

而是：

prompt -> video -> gate review -> controlled handoff -> agent implementation -> page review

少掉中间的 gate review，
后面再强的 agent 也可能只是把错误做得更高级。