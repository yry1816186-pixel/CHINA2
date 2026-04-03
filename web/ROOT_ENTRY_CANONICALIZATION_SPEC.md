# Root Entry Canonicalization Spec

## 当前状态
本文件描述的问题已经在当前 main 上落地关闭。

## 已关闭的问题
仓库根入口不再要求执行者自己判断该进哪个页面。
当前 `web/index.html` 已被收口为：
- canonical handoff / redirect
- 默认导向 `web/reference-shell/index.contract.html`

## 当前 live-state 要求
根入口现在必须被理解为：
- 不是独立旧 execution shell
- 不是并列默认入口
- 不是“两个入口都可以”

它只负责把执行者直接送到 canonical shell。

## 仍需防止的误读
当前仍需避免：
- 只读旧文档，不读 live file
- 把 `web/reference-shell/index.html` 当作并列入口
- 把历史 swap / blocker 文件当成当前真状态

## 当前结论
只要从 `web/` 根目录进入，
默认路径就应被理解为：

**`web/index.html` -> `web/reference-shell/index.contract.html`**
