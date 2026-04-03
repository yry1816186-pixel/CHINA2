# Canonical User-Only Video Drop Workflow

## 目的
本文件只定义 **用户唯一需要做的动作**。

如果你是生成视频并把项目交给 agent 的人，
你只需要按本文件操作。
不要额外承担 gate review、manifest 接线、scene-to-file 配对、handoff package 组装或页面入口判断。

## 你唯一需要做的事

### Step 01 · 复制唯一允许直接生成视频的提示词
只从下面这个文件复制提示词：
- `web/DIRECT_COPY_VIDEO_TEXTS.md`

不要自己在候选 packet、planning 文件、旧 prompt 草案之间做判断。

### Step 02 · 生成 first-wave 视频
当前 strong handoff 只要求这 3 条：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`

`scene_00_intro_entry` 当前只允许作为 exploratory / disclosure-first 入口测试资产。
它不是强 handoff 必需项，也不是最终冻结入口证明。

### Step 03 · 把视频文件改成 canonical dropzone 命名
放进 dropzone 前，把文件名改成下面这些精确名称：

- `scene_03_structure_primary.mp4`
- `scene_06_conservation_boundary.mp4`
- `scene_01_orientation_order.mp4`

如果你另外生成了 intro 测试资产，只能命名为：
- `scene_00_intro_entry.mp4`

如果生成平台导出的是别的文件名，例如：
- `_final`
- `masterpiece`
- 平台默认长随机名

先重命名，再放入 dropzone。

### Step 04 · 放进唯一指定文件夹
把文件放进：
- `web/assets/first-wave/`

到这里为止，你的工作就结束了。

## 你不需要做的事
以下事情都不应再回流给你：

- 不需要改 `web/scenes.manifest.json`
- 不需要手工写 scene-to-file 对应表
- 不需要手工组装 handoff package
- 不需要决定该从哪个页面入口继续做
- 不需要自己做页面实现边界解释
- 不需要协调旧壳体和新壳体
- 不需要判断 intro 是否升级为最终入口
- 不需要把 gate review 结果手工写成给 agent 的材料

## 视频放进去之后，必须由 agent 处理的事
视频进入 dropzone 后，agent 必须自行承担：

- 读取 `web/ASSET_DROPZONE_SPEC.json`
- 读取 `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- 从 `web/reference-shell/index.contract.html` 开始继续实现
- 运行 gate review 与 scorecard 判断
- 决定哪些视频允许进入页面强 handoff
- 必要时自行整理 agent-side handoff structure
- 保持 disclosure、truth-boundary、scene discipline 和 same-page tone

## 当前结论
对用户而言，当前 canonical 路径必须收敛成：

1. 复制 `web/DIRECT_COPY_VIDEO_TEXTS.md`
2. 生成视频
3. 把视频按 canonical 文件名放进 `web/assets/first-wave/`
4. 交给 agent
