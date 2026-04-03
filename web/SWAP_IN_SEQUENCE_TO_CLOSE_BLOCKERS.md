# Swap-In Sequence to Close Remaining Blockers

## 文件目的
本文件不再讨论“方向”。

它只回答一个问题：

**如果现在就要把当前最关键的两个 blocker 关掉，现有文件应该按什么顺序替换成哪些草案。**

## 当前仍未关闭的两个 blocker
1. 根默认入口仍未 canonicalized
2. dropzone 自动承接仍未进入 canonical shell 默认逻辑

## 最短关闭路径
按下面 3 步替换现有文件：

### Step 01 · 收根入口
把：
- `web/index.html`

替换为：
- `web/ROOT_ENTRY_CANONICAL_HANDOFF_DRAFT.html`

### Step 02 · 收 contract shell 的资产解析逻辑
把：
- `web/reference-shell/app.contract.js`

替换为：
- `web/reference-shell/app.contract.dropzone-ready.js`

### Step 03 · 收 contract shell 的 HTML 入口
把：
- `web/reference-shell/index.contract.html`

替换为：
- `web/reference-shell/index.contract.dropzone-ready.html`

## 替换后的预期结果
完成上面 3 步后，仓库应至少达到以下状态：

### A. 默认入口单一化
- 从 `web/` 根目录进入时，不再先落到旧 execution shell
- 默认会被导向 contract-driven canonical entry
- 旧 `web/index.html` 不再承担并列默认入口身份

### B. canonical shell 默认继承 dropzone
- canonical shell 优先按 `web/assets/first-wave/` 找资产
- 先读 `ASSET_RESOLUTION_CONTRACT.json`
- 优先 video，其次 poster，再回退 placeholder / manifest
- 不再把手工 manifest 编辑作为隐性默认接线方式

### C. intro 仍保持受控
即使 `scene_00_intro_entry` 文件存在，也仍然只能按：
- exploratory asset
- disclosure-first threshold test

而不是：
- frozen final entrance
- single real-site hero entry
- strong handoff final intro

## 替换后必须再核对的 8 项
1. 根入口是否直接进入 canonical shell
2. `scene_03_structure_primary.mp4` 是否可从 dropzone 自动解析
3. `scene_06_conservation_boundary.mp4` 是否可从 dropzone 自动解析
4. `scene_01_orientation_order.mp4` 是否可从 dropzone 自动解析
5. poster 是否能在无视频时自动回退
6. `scene_00_intro_entry` 是否仍保持 unresolved disclosure
7. 页面是否持续显示 status / evidence / anchor / allowed mode / risk
8. manifest 是否已退回到事实层 / supplement 角色，而不是用户接线层

## 当前结论
如果不想再继续停留在“规范已经足够多，但代码还没换”的状态，
就按本文件的 3 步 swap-in sequence 执行。

这是当前关闭 blocker 的最短路径。
