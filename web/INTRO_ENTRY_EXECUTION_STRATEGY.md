# Intro Entry Execution Strategy

## 定位
本文件只解决一个问题：
`scene_00_intro_entry` 在当前阶段到底应该怎么做，才能**继续推进项目**，同时**不制造假冻结、假真实、假成熟**。

它不是为了把 intro 包装成已经完美，
而是为了把当前唯一允许的执行策略钉死。

## 当前硬事实
- `chapter_00_intro` 当前 `case_anchor` 仍为 `TBD_CASE_ANCHOR_INTRO_01`。
- `scene_00_intro_entry` 当前 `evidence_grade` 仍为 `E2_unresolved`。
- 已有 exploratory candidate review，但当前不进入主表真实 anchor 注册。
- 因此，intro 当前**不能**被实现为“单一真实遗址入口”。

## 当前唯一允许的 intro 策略
### 策略名称
`composite-threshold-disclosure-first`

### 含义
intro 必须是：
- 一个**综合教学场景**入口；
- 一个**观看关系声明**；
- 一个**真实性边界前置披露**；
- 一个**长滚动作品观看协议的开始**。

intro 当前**不是**：
- 某一真实遗址的最终入口锚点；
- 纪录式遗址证明；
- 高地标英雄镜头；
- 旅游宣传式开场奇观；
- 单站点身份宣告。

## 为什么必须这样做
因为当前 open items 里，首批真实 `case_anchor` 名单、精确证据锚点都没有整体关闭；`scene_00_intro_entry` 更没有进入真实 anchor 注册。

在这个条件下，
如果强行把 intro 做成单一真实遗址入口，
会同时制造 4 个错误：
1. 把 unresolved 问题伪装成已解决；
2. 把 composite teaching scene 误做成 documentary claim；
3. 让入口提前偷走主体知识锚点；
4. 让整站后续 scene 被错误的 site identity 绑死。

## intro 的页面职责
当前 intro 只承担 4 个职责：
1. 建立观看方式
2. 建立真实性边界
3. 建立缓慢、克制、可停顿的进入节奏
4. 把观众导向后续 first-wave 三条真正受控候选 scene

intro **不承担**：
- 事实高潮
- 场址证明
- 最终案例声明
- 建筑奇观展示

## intro 的视觉纪律
### 必须具备
- 阈限感
- 内向关系
- 层层进入但不指向唯一遗址身份
- 可停顿阅读
- disclosure 强于 monumentality
- calm, slow, restrained

### 必须禁止
- 单一宫殿 / 寺院 / 城楼式身份过强构图
- 一眼可被识别为具体世界遗产的地标 framing
- 大尺度航拍权威镜头
- 强 monument reveal
- 旅游宣传式 sunrise / glory / triumphant mood
- 纪录重建口吻

## 页面文案纪律
只允许把 intro 写成：
- 进入观看协议
- 进入建筑阅读方式
- 进入综合教学场景

不允许把 intro 写成：
- “这是某处古建筑遗址”
- “这是最终真实入口”
- “这是某一代表性建筑的正式起点”

## 对视频生成提示词的影响
当前 `web/DIRECT_COPY_VIDEO_TEXTS.md` 中 Scene 00 的 direct-copy 文本可以继续使用，
但它的地位必须被理解为：
- 当前阶段的**保守合法入口文本**；
- 不是已经冻结最终入口的证明；
- 不是“生成完就一定不用再审”的免检口令。

## 对 agent 的强制实现要求
agent 在实现 intro 时必须满足：
- 页面首层持续可见 unresolved disclosure
- intro 不得被放大为唯一真实 site identity
- 页面不得用视觉特效压过 disclosure
- intro 的转场必须服务后续三条 first-wave scene，而不是自成高潮

## 允许升级为更强入口的条件
只有在以下条件满足后，intro 才允许从当前策略升级：
1. `chapter_00_intro` 的真实 `case_anchor` 被正式注册
2. 对应 `source_ref` 不再是 `SRC_TBD_*`
3. `evidence_grade` 达到 `E3_supported` 或更高
4. 已在 `review/` 中记录阶段切换
5. 页面级误读测试证明不会被读成单一遗址宣传入口

## 当前结论
在当前阶段，`scene_00_intro_entry` 的最优策略不是“做得更像真实遗址”，
而是：
**把它做成一个披露优先、阈限优先、观看协议优先的 composite threshold entry。**

这不是退让，
而是当前条件下最严肃、最稳、最不自欺的推进方式。