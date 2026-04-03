# START HERE

## 目的
如果你现在要在 `web/` 层继续推进 CHINA2，
不要从目录里随便选一个页面入口开始。

本文件只做一件事：
**把你直接带到当前唯一推荐路径。**

## 当前唯一推荐路径
按以下顺序进入：
1. `web/WEB_CANONICAL_ENTRY.md`
2. `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
3. `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
4. `web/reference-shell/REVIEW_CONTRACT.md`
5. `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
6. `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
7. `web/FIRST_WAVE_AGENT_STARTER_PACK.md`
8. `web/reference-shell/index.contract.html`

## 当前唯一推荐页面入口
- `web/reference-shell/index.contract.html`

这是当前首选页面入口，
因为它直接读取：
- `web/reference-shell/scene.contracts.json`
- `web/scenes.manifest.json`

而不是只依赖实现者在 JS 里手写理解。

## 当前不要默认进入的入口
- `web/index.html`：最小执行壳，只保留基线作用
- `web/reference-shell/index.html`：第一代 reference shell，可参考，但不是当前首选
- `web/DIRECT_COPY_VIDEO_TEXTS.md`：只解决视频提示词，不解决网页实现边界

## 当前阶段一句话定义
当前你不是在做 final launch site，
而是在做一个**controlled first-wave long-scroll page**。

## 当前最重要的原则
不要从“哪个页面更像成品”开始，
而要从“哪个入口更少误读、更少自由发挥、更稳地继承 scene 合同”开始。

## 当前结论
如果你现在时间只够打开一个文件，
先开：

**`web/WEB_CANONICAL_ENTRY.md`**

如果你现在时间只够打开一个页面，
先开：

**`web/reference-shell/index.contract.html`**