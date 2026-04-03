# User Only 4 Steps

## 文件目的
本文件把**用户在整个流程中的唯一工作**钉死，避免复杂度重新回流到用户身上。

它不负责美化成熟度，
只负责把用户动作压缩到最少。

## 用户唯一允许做的 4 步
1. 从 `web/DIRECT_COPY_VIDEO_TEXTS.md` 复制视频提示词
2. 生成视频
3. 把生成好的视频放入 `web/assets/first-wave/`
4. 把项目交给 agent

除此之外，用户**不应再承担**：
- 手工修改 `web/scenes.manifest.json`
- 手工填写 `FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
- 手工填写 `ASSET_INTAKE_CHECKLIST.md`
- 手工拼接 handoff package
- 手工判断网页入口
- 手工判断 scene 顺序
- 手工解决文档冲突

## 当前唯一视频提示词来源
- `web/DIRECT_COPY_VIDEO_TEXTS.md`

## 当前唯一推荐页面入口
- `web/reference-shell/index.contract.html`

## 当前唯一推荐 agent 起始包
- `web/FIRST_WAVE_AGENT_STARTER_PACK.json`

## 当前唯一推荐资产放置目录
- `web/assets/first-wave/`

## 当前推荐的精确文件名
### 必放 3 条 first-wave 核心视频
- `scene_03_structure_primary.mp4`
- `scene_06_conservation_boundary.mp4`
- `scene_01_orientation_order.mp4`

### 可选 poster
- `scene_03_structure_primary.jpg` / `png` / `webp`
- `scene_06_conservation_boundary.jpg` / `png` / `webp`
- `scene_01_orientation_order.jpg` / `png` / `webp`

### intro 仅允许保守测试，不是强制项
- `scene_00_intro_entry.mp4`
- `scene_00_intro_entry.jpg` / `png` / `webp`

## 命名强制规则
- 文件基名必须直接等于 `scene_id`
- 不使用 `_final`、`ultimate`、`masterpiece`、`frozen_truth` 等误导性后缀
- intro 文件即使存在，也不得被理解为最终冻结入口资产

## agent 接手时必须先读的文件
1. `web/START_HERE.md`
2. `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
3. `web/ASSET_DROPZONE_SPEC.json`
4. `web/reference-shell/REVIEW_CONTRACT.md`
5. `web/reference-shell/index.contract.html`

## 当前结论
本文件只关闭一类风险：
**不要再把项目管理、manifest 编辑、handoff 拼接、入口判断重新推回给用户。**

它不等于项目已经完美，
但它把“用户到底只做什么”明确写死了。
