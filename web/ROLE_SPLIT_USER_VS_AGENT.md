# Role Split · User vs Agent

## 文件目的
本文件只解决一个问题：

**当前 first-wave 路径里，哪些是用户唯一工作，哪些是 agent / review 层工作？**

如果这个边界不写死，
scorecard、intake、handoff template 这些文件虽然本身有价值，
也仍然会被误读成：
“用户还得自己兼职项目经理”。

这必须被切断。

## 用户唯一工作
用户在整个流程中的唯一工作只有：
1. 从 `web/DIRECT_COPY_VIDEO_TEXTS.md` 拿提示词
2. 生成视频
3. 把生成好的视频放入 `web/assets/first-wave/`
4. 把项目交给 agent

用户不应再承担：
- 手工修改 `web/scenes.manifest.json`
- 手工判断页面入口
- 手工决定 scene 顺序
- 手工解决文档冲突
- 手工填写 scorecard
- 手工填写 asset intake
- 手工拼接 handoff package
- 手工重述 scene contract

## agent / review 层工作
以下工作属于 agent / review / implementation governance：
- 按 `web/START_HERE.md` 进入 canonical 路径
- 读取 `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
- 读取 `web/ASSET_DROPZONE_SPEC.json`
- 进行 `FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md` 审核
- 进行 `ASSET_INTAKE_CHECKLIST.md` 审核
- 组装 `AGENT_HANDOFF_PACKAGE_TEMPLATE.md`
- 按 `web/reference-shell/REVIEW_CONTRACT.md` 实现页面
- 保持 truth-boundary disclosure 与 scene discipline

## 这些文件的真实角色
### `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
角色：review gate tool
不是：用户额外劳动包

### `web/ASSET_INTAKE_CHECKLIST.md`
角色：asset acceptance tool
不是：用户必须手填的接入前表格

### `web/AGENT_HANDOFF_PACKAGE_TEMPLATE.md`
角色：agent handoff assembly template
不是：让用户手工拼接项目逻辑的说明书

### `web/FIRST_WAVE_AGENT_STARTER_PACK.md`
角色：给 agent 的人类可读起始包
不是：要求用户重新理解全项目的补课文件

### `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
角色：给 agent 的 machine-readable 起始包
不是：要求用户手工维护的状态表

## 当前执行口径
对用户应当只保留最小指令：
- 复制提示词
- 生成视频
- 放入指定目录
- 把项目交给 agent

对 agent 才保留完整治理链：
- canonical entry
- review contract
- intake
- handoff
- implementation boundary

## 当前结论
本文件不让仓库看起来“更复杂”。

它的作用恰好相反：
**把复杂度从用户身上切下来，重新压回 agent / review 层。**
