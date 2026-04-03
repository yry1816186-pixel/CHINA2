# Web Canonical Entry

## 目的
本文件只回答一个问题：

**当前 `web/` 目录里，真实单一路径到底是什么；哪些是 live path，哪些只是 legacy 或历史记录。**

## 当前结论先写在前面
### 对用户的唯一动作路径
- `web/USER_ONLY_WORKFLOW.md`
- `web/DIRECT_COPY_VIDEO_TEXTS.md`
- `web/assets/first-wave/`

### 对 agent 的唯一实现路径
1. `web/ASSET_DROPZONE_SPEC.json`
2. `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
3. `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
4. `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
5. `web/reference-shell/REVIEW_CONTRACT.md`
6. `web/reference-shell/index.contract.html`

## 当前页面入口分层

### A. `web/index.html`
- 身份：root canonical handoff / redirect
- 作用：把从仓库根进入的人直接导向 canonical shell
- 当前地位：**不是并列实现入口；它只负责收口根默认入口**

### B. `web/reference-shell/index.html`
- 身份：legacy reference-shell surface
- 作用：历史保留名；必须继续导向 `index.contract.html`
- 当前地位：**不得再作为并列默认入口**

### C. `web/reference-shell/index.contract.html`
- 身份：contract-driven + dropzone-driven canonical shell
- 作用：直接读取 structured scene contract、manifest、asset resolution contract 与 canonical dropzone
- 当前地位：**当前唯一可信实现入口**

## 为什么当前首选 `index.contract.html`
因为它现在不是只读合同层，
还直接继承了 canonical intake path：

- `scene.contracts.json`
- `scenes.manifest.json`
- `ASSET_RESOLUTION_CONTRACT.json`
- `web/assets/first-wave/`

这意味着：
- scene 纪律更稳
- 边界文本更稳
- disclosure 更稳
- scene-to-file 映射不再默认推回给用户
- agent 的自由发挥空间更小

## 当前推荐工作流

### 路线 1 · 用户
- 读 `web/USER_ONLY_WORKFLOW.md`
- 复制 `web/DIRECT_COPY_VIDEO_TEXTS.md`
- 生成视频
- 放进 `web/assets/first-wave/`
- 停止，交给 agent

### 路线 2 · agent
- 读 `web/ASSET_DROPZONE_SPEC.json`
- 读 `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- 读 `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
- 读 `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
- 读 `web/reference-shell/REVIEW_CONTRACT.md`
- 打开 `web/reference-shell/index.contract.html`
- 在 canonical shell 内继续实现、审片、保留 disclosure 与 truth boundary

## 当前不推荐的进入方式
- 不推荐把 `web/reference-shell/index.html` 当作并列入口
- 不推荐把 `web/index.html` 当作独立 execution shell
- 不推荐要求用户先手工做 gate review、scorecard、handoff package
- 不推荐让用户自己解释 scene-to-file 映射
- 不推荐跳过 canonical dropzone 直接改 manifest 做临时接线

## 当前结论
如果当前只允许保留一个实现入口，
必须是：

**`web/reference-shell/index.contract.html`**

如果当前只允许保留一个用户工作流，
必须是：

**prompt -> video -> rename to canonical scene ids -> drop into `web/assets/first-wave/` -> hand to agent**
