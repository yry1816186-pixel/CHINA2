# START HERE

## 目的
本文件只做一件事：
把不同角色直接带到各自唯一该走的路径上。

不要再让用户、agent、审查路径和历史补丁路径混在一起。

## 路径分流

### 如果你是“生成视频并把项目交给 agent”的用户
你只需要打开：
1. `web/USER_ONLY_WORKFLOW.md`
2. `web/DIRECT_COPY_VIDEO_TEXTS.md`

然后停止。
不要再继续读 gate review、scorecard、handoff package template 或 legacy shell。

### 如果你是继续实现页面的 agent
按以下顺序进入：
1. `web/USER_ONLY_WORKFLOW.md`
2. `web/ASSET_DROPZONE_SPEC.json`
3. `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
4. `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
5. `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
6. `web/reference-shell/REVIEW_CONTRACT.md`
7. `web/reference-shell/index.contract.html`

## 当前唯一推荐页面入口
- `web/reference-shell/index.contract.html`

它是当前唯一可信的默认实现入口。
原因不是“它更像成品”，而是它当前同时继承：
- `web/reference-shell/scene.contracts.json`
- `web/scenes.manifest.json`
- `web/reference-shell/ASSET_RESOLUTION_CONTRACT.json`
- `web/assets/first-wave/`

## 当前不要默认进入的入口
- `web/index.html`：根入口 handoff / redirect 面，不再承担独立实现面身份
- `web/reference-shell/index.html`：legacy reference-shell surface；不再作为并列实现入口
- `web/DIRECT_COPY_VIDEO_TEXTS.md`：只解决视频生成，不解决页面实现
- `web/VIDEO_TO_WEB_HANDOFF_GATE.md`：agent-side review gate，不是用户前置任务
- `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`：agent-side 审片表，不是用户填写表
- `web/AGENT_HANDOFF_PACKAGE_TEMPLATE.md`：agent-side 内部整理模板，不是用户交付物

## 当前阶段一句话定义
当前你不是在做 final launch site。
当前你在做一个 **dropzone-driven, contract-driven, controlled first-wave long-scroll page**。

## 当前结论
如果你是用户，
只看：
- `web/USER_ONLY_WORKFLOW.md`

如果你是 agent，
只从：
- `web/reference-shell/index.contract.html`

继续推进页面实现。
