# Root Entry Canonicalization Spec

## 文件目的
本文件只解决一个仍未关闭的阻塞：

**仓库实际根入口如何真正收口到 canonical entry，而不是继续让文档层和真实默认 URL 分裂。**

## 当前问题
当前仓库已经明确把：
- `web/reference-shell/index.contract.html`

作为当前唯一推荐页面入口。

但真实根入口仍是：
- `web/index.html`

这会导致：
- 人在 `web/` 根目录启动静态服务后，默认先进入旧 execution shell
- agent 若按最短路径打开页面，仍可能绕过 canonical shell
- “canonical entry” 继续停留在文档层，而不是默认执行面

## 当前强制目标
根入口必须满足以下至少一条：

### 方案 A · 强制 redirect
- `web/index.html` 不再作为独立第一阅读面
- 根入口直接重定向到 `web/reference-shell/index.contract.html`
- 不让执行者再自己判断“该打开哪一个”

### 方案 B · 强制 canonical handoff
若暂时不能 redirect，则至少必须做到：
- `web/index.html` 的首屏明确声明它不是当前 canonical entry
- 页面首层直接给出唯一按钮或唯一自动跳转路径到 `web/reference-shell/index.contract.html`
- 不能继续让旧 execution shell 与 contract shell 看起来像并列默认入口

## 禁止状态
以下状态都不算关闭问题：
- 只在文档里说 canonical entry 是 contract shell
- 仍让 `web/index.html` 保持旧入口姿态不变
- 仍让执行者自己决定是进 execution shell 还是 contract shell
- 用“都可以”回避入口收口

## 推荐落地方式
当前更稳的方式是：
1. 根入口显示 very short disclosure：
   - current canonical entry
   - current project status: first-wave / not final
2. 自动把实现者导向 `web/reference-shell/index.contract.html`
3. 旧 execution shell 降级为 baseline / fallback，不再承担默认入口身份

## 与项目目标的关系
这不是页面小修小补。

它直接决定能否接近：
- 入口单一
- 页面首选入口单一
- agent 读取路径单一
- 用户不需要人工判断入口

## 当前结论
只要根入口还没真正 canonicalized，
就还不能诚实地说：

**项目已经收口成单一路径。**
