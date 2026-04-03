# Video to Web Handoff Gate

## 目的
本文件定义 **agent-side gate review**。

它不再是用户前置任务清单。
用户把视频放进 canonical dropzone 之后，
由 agent 继续执行这里的判断，
而不是把 gate review 再推回给用户。

## 当前输入前提
本 gate 只在以下条件成立后运行：
1. 用户已按 `web/USER_ONLY_WORKFLOW.md` 生成视频
2. 视频已放进 `web/assets/first-wave/`
3. 文件名已符合 canonical scene-id 命名
4. agent 已读取 `web/ASSET_DROPZONE_SPEC.json` 与 `web/FIRST_WAVE_AGENT_STARTER_PACK.json`

## 当前结论先写在前面
当前 first-wave 视频进入 dropzone 后，
**仍然不是自动进入网页最终实现阶段**。

但 gate review 的执行者应是 agent，
不是用户。

## 允许进入 strong handoff 的对象
当前只允许这 3 条先进入标准 handoff 判断：
1. `scene_03_structure_primary`
2. `scene_06_conservation_boundary`
3. `scene_01_orientation_order`

`scene_00_intro_entry` 当前只允许：
- 保守占位
- 辅助试装
- 观看协议验证

不允许被当成“已冻结最终入口视频”进入 strong handoff。

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

## handoff 包的责任归属
当视频允许进入页面实现时，
如需形成结构化 handoff 记录，
应由 agent 基于以下输入自行整理：
- dropzone 里的文件
- `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- `web/reference-shell/scene.contracts.json`
- `web/scenes.manifest.json`

用户不负责手工组装 handoff package。

## agent 接手后必须继续保留什么
agent 不得把以下信息吞掉：
- status
- evidence grade
- anchor boundary
- misreading risk
- unresolved / reviewed_candidate disclosure

如果 agent 的页面必须靠隐藏这些信息才能“变高级”，说明网页方向已经错了。

## intro 的特别说明
`scene_00_intro_entry` 当前哪怕生成出效果不错的视频，
也不能因此自动升级为 strong handoff 资产。

它当前最多只能作为：
- 观看协议入口测试资产
- disclosure-first 占位资产
- 节奏验证资产

除非它的真实 anchor 与 evidence 条件被正式关闭，
否则不得把它当成最终入口真资产去组织全站。

## 当前结论
真正安全的流程应是：

**user prompt -> user video generation -> user drops files into canonical dropzone -> agent gate review -> controlled handoff inside project -> agent implementation -> page review**
