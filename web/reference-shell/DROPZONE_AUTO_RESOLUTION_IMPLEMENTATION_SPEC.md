# Dropzone Auto-Resolution Implementation Spec

## 文件目的
本文件只解决一个仍未关闭的执行问题：

**用户把视频放进 `web/assets/first-wave/` 之后，shell 应该如何默认承接，而不是继续把 manifest 编辑推回给用户。**

## 当前问题
仓库当前已经有：
- `web/assets/first-wave/` 作为唯一推荐 dropzone
- `web/ASSET_DROPZONE_SPEC.json`
- `web/reference-shell/ASSET_RESOLUTION_CONTRACT.json`

但当前 shell 代码还没有明确完成：
- 先按 canonical dropzone 找资产
- 再按 scene id 做稳定匹配
- 最后才把 manifest 当补充层

这意味着：
- 用户虽然已经被要求“只放文件”
- 但代码层仍没有完全吃掉这件事

## 当前强制目标
`reference-shell` 的资产读取应遵守以下顺序：

1. 读取 `ASSET_RESOLUTION_CONTRACT.json`
2. 以 `sceneId -> canonical filename` 的关系尝试解析 `../assets/first-wave/`
3. 若视频存在，优先显示视频
4. 若视频不存在但 poster 存在，显示 poster
5. 若两者都不存在，再回退到 manifest 内字段或 placeholder

## 解析规则
### Core first-wave
必须优先尝试：
- `scene_03_structure_primary.mp4`
- `scene_06_conservation_boundary.mp4`
- `scene_01_orientation_order.mp4`

以及对应 poster：
- `.jpg`
- `.png`
- `.webp`

### Intro
`scene_00_intro_entry` 只允许：
- exploratory asset
- disclosure-first threshold test

不得因为文件存在就自动升级为：
- frozen final entrance
- single real-site hero entry
- strong handoff final intro

## 与 manifest 的关系
manifest 不应再承担：
- 用户必须手工填入视频路径的唯一通道

manifest 当前更合适的角色应是：
- scene facts
- status
- evidence
- anchor
- notes
- optional override / supplement layer

而不是：
- 用户必须手工维护的资产接入总表

## UI 层强制要求
即使自动读到视频，页面也必须持续保留：
- scene status
- evidence grade
- anchor boundary
- allowed mode
- misreading risk
- unresolved / reviewed_candidate disclosure

自动吃到资产，不等于允许页面偷掉边界披露。

## 禁止状态
以下都不算问题关闭：
- 仍要求用户手工改 manifest 才能看视频
- 仍要求用户自己判断 scene 对应哪个文件
- 仍让 agent 回头向用户要 scene-to-file mapping
- intro 文件一出现就默认当 final entrance 处理

## 推荐落地方式
当前更稳的实现方式是：
- 在 `app.contract.js` 中加入 contract + dropzone 解析层
- 解析成功后再 merge 到现有 scene 数据
- manifest 继续保留事实层，不再承担用户手工接线责任

## 当前结论
只有当 shell 真的默认继承 dropzone contract，
才能更接近：

**用户只放视频，agent 接着做。**

在这之前，
“用户不需要再碰 manifest”都还不能算彻底关闭。
