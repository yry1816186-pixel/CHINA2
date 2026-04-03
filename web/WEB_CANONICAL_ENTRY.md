# Web Canonical Entry

## 目的
本文件用于回答一个非常具体的问题：

**当前 `web/` 目录里到底该从哪里进入，按什么顺序用，哪些只是基线，哪些才是当前优先推荐入口？**

如果这一点不钉死，
后续就很容易出现：
- 有旧执行壳
- 有 reference shell
- 有 contract-driven shell
- 有很多边界文件
- 但实现 agent 不知道该以哪个为主

## 当前结论先写在前面
### 当前 `web/` 层推荐入口顺序
1. `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
2. `web/AGENT_IMPLEMENTATION_BOUNDARY.md`
3. `web/reference-shell/REVIEW_CONTRACT.md`
4. `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
5. `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
6. `web/AGENT_HANDOFF_PACKAGE_TEMPLATE.md`
7. `web/reference-shell/index.contract.html`
8. `web/reference-shell/scene.contracts.json`
9. `web/scenes.manifest.json`

## 当前页面入口分层
### A. `web/index.html`
- 身份：最小执行壳
- 作用：基础运行、基础样片接入、最小验证
- 当前地位：**保留基线，不是优先审查入口**

### B. `web/reference-shell/index.html`
- 身份：第一代 reference shell
- 作用：更接近作品级审查面的并行样机
- 当前地位：**仍可参考，但不是当前最优先入口**

### C. `web/reference-shell/index.contract.html`
- 身份：contract-driven reference shell
- 作用：直接读取 structured scene contract + manifest 的当前优先审查入口
- 当前地位：**当前首选页面入口**

## 为什么当前首选 `index.contract.html`
因为它解决了一个关键问题：
页面不再只依赖实现者在 JS 中手写理解，
而是直接读取：
- `scene.contracts.json`
- `scenes.manifest.json`

这意味着：
- scene 纪律更稳定
- 边界文本更稳定
- must-not-become 更稳定
- required disclosures 更稳定
- 后续 agent 误读风险更低

## 当前推荐工作流
### 路线 1 · 页面审查
- 读 `INTRO_ENTRY_EXECUTION_STRATEGY.md`
- 读 `AGENT_IMPLEMENTATION_BOUNDARY.md`
- 读 `REVIEW_CONTRACT.md`
- 打开 `reference-shell/index.contract.html`
- 用它审查 same-page tone、scene discipline、truth-boundary disclosure

### 路线 2 · 视频进入网页
- 先按 `VIDEO_TO_WEB_HANDOFF_GATE.md` 判断能否 handoff
- 用 `FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md` 审片
- 通过后用 `AGENT_HANDOFF_PACKAGE_TEMPLATE.md` 组装交付包
- 再交给网页 agent

## 当前不推荐的进入方式
- 不推荐只读 `web/DIRECT_COPY_VIDEO_TEXTS.md` 就直接开始做网页
- 不推荐只打开 `web/index.html` 就判断整体成品方向
- 不推荐跳过 handoff gate 直接把视频丢给 agent
- 不推荐只看视觉效果，不看 scene discipline 与边界披露

## 当前最重要的原则
在 `web/` 层，
现在最该优先保住的不是“更炫”，
而是：
- 更少误读
- 更少自由发挥
- 更稳的 scene 合同继承
- 更稳的 same-page 气质统一

## 当前结论
如果当前只允许保留一个最优先页面入口，
应该是：

**`web/reference-shell/index.contract.html`**

如果当前只允许保留一条最优先网页执行路径，
应该是：

**intro strategy -> agent boundary -> review contract -> handoff gate -> scorecard -> handoff package -> contract-driven shell**

这条路径比旧执行壳路径更接近当前项目真正需要的严肃推进方式。