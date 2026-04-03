# Swap-In Sequence to Close Remaining Blockers

## 当前状态
本文件现在是 **历史记录**。

它记录的是：
- 之前为了关闭 blocker 所准备的 swap 路径

它不再代表当前 main 上仍未执行的动作。

## 已落地结果
以下 3 步对应的落地状态已经进入 main：

### Step 01 · 根入口已收口
- `web/index.html`
- 当前状态：已成为 canonical handoff / redirect
- 当前目标：直接导向 `web/reference-shell/index.contract.html`

### Step 02 · contract shell 已继承 dropzone 资产解析
- `web/reference-shell/app.contract.js`
- 当前状态：已落地 dropzone-first resolution 逻辑

### Step 03 · contract shell HTML 已指向 dropzone-ready 实现
- `web/reference-shell/index.contract.html`
- 当前状态：已作为 canonical shell 指向 dropzone-ready implementation

## 当前仍需要注意的不是 swap，而是口径清理
当前 main 上真正还需要防止的是：
1. 把历史 blocker 文档误读成当前 live-state
2. 把 gate review 和 handoff package 重新推回给用户
3. 把 legacy entry surface 误读成并列实现入口

## 当前结论
如果你现在要判断项目状态，
不要再按本文件执行 swap。

直接读取当前 live path：
- `web/USER_ONLY_WORKFLOW.md`
- `web/ASSET_DROPZONE_SPEC.json`
- `web/reference-shell/index.contract.html`
