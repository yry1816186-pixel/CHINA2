# First-Wave Execution Checklist

## 用途
本文件只服务你拉取仓库后的**一次性执行准备**。

它不是新的规范层，不是新的讨论层。
它只回答：拉下来之后，先做什么，绝对不要做什么。

## 0. 拉取
```bash
git pull origin main
```

## 1. 本地运行执行壳
```bash
cd web
python -m http.server 8000
```
打开：
- `http://localhost:8000`

## 2. 只接 first-wave 三条样片
按这个顺序：
1. `scene_03_structure_primary`
2. `scene_06_conservation_boundary`
3. `scene_01_orientation_order`

当前不要把 `scene_00_intro_entry` 当最终版接进去。

## 3. 样片文件放置位置
放入：
- `web/assets/`

推荐命名：
- `scene_03_structure_primary_final.mp4`
- `scene_06_conservation_boundary_final.mp4`
- `scene_01_orientation_order_final.mp4`

如有 poster：
- `scene_03_structure_primary_poster.jpg`
- `scene_06_conservation_boundary_poster.jpg`
- `scene_01_orientation_order_poster.jpg`

## 4. manifest 填写
修改：
- `web/scenes.manifest.json`

为对应 scene 填入：
- `video`
- `poster`

## 5. 成功标准
页面上应满足：
- sticky stage 能跟随滚动切换 scene
- 视频或 poster 能在对应 scene 出现
- `scene_03`、`scene_06`、`scene_01` 的标题、状态、anchor、sourceRef 正确显示
- `scene_00` 仍保持未冻结入口状态

## 6. 绝对不要做
- 不要把 `scene_00_intro_entry` 直接做成最终高地标入口
- 不要一次性接入全 7 条视频
- 不要把 `video/11`、`video/12` 当默认全量执行入口
- 不要把 generated video 直接当事实证明
- 不要先做整站最终特效

## 7. 真正开始做成品前的硬门槛
满足以下条件再往“最终版”推进：
- `scene_03` 成片可读，不像纪录片，也不像技术奇观
- `scene_06` 成片不滑向宣传片、焕新片、奇迹修复片
- `scene_01` 成片不滑向礼仪路线、权力叙事、中轴奇观
- 这三条样片在同一网页里放在一起，气质不打架

## 8. 当前最重要的判断
如果这三条一起放进页面后，整体气质不统一，
不要继续做更多视频。
先修 scene 级样片，再继续。
