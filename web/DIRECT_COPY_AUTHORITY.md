# Direct-Copy Prompt Authority

## 文件目的
本文件只关闭一个经常会把执行者带歪的问题：

**当前仓库里，到底哪一份文本允许用户直接复制去生成视频，哪一些不允许？**

如果这件事不写死，
就会出现：
- `video/20_priority_scene_candidate_packets.md` 仍在说 candidate packet 不是正式外部执行口令
- `web/DIRECT_COPY_VIDEO_TEXTS.md` 又在提供可直接复制文本
- 最后执行者自己猜

这不允许继续存在。

## 当前唯一可直接复制的外部生成文本来源
- `web/DIRECT_COPY_VIDEO_TEXTS.md`

对用户而言，
当前**只有这一份文件**是默认允许直接复制到视频生成器中的文本来源。

## 明确不是用户默认外部生成入口的文件
以下文件即使仍有参考价值，
也**不是**用户默认可直接复制的外部生成入口：
- `video/20_priority_scene_candidate_packets.md`
- `video/12_full_prompt_packets_master.md`
- `video/11_full_generation_plan.md`
- 任何 `video/*` 中的候选 packet / 参考 planning 文本

## 为什么必须这样收口
因为仓库上层仍明确规定：
- 视频链路当前是 `planning_authorized_reference_only`
- candidate packet 不等于正式外部执行授权

在这个前提下，
如果不把用户默认入口单独切出来，
就会把“哪份能直接用、哪份只是候选”重新推回给用户。

## 与上层文件的关系
### `video/20_priority_scene_candidate_packets.md`
它负责：
- scene 候选 packet
- research gate 显示
- must-not-become 约束
- review focus

它不负责：
- 给用户提供默认可直接复制的最终外部生成入口

### `web/DIRECT_COPY_VIDEO_TEXTS.md`
它负责：
- 给用户提供当前阶段唯一允许直接复制的生成文本

它不负责：
- 声称视频已经免审
- 声称 intro 已冻结
- 声称生成结果自动可 handoff

## 当前适用范围
当前 direct-copy 只服务以下 4 条：
- `scene_00_intro_entry`
- `scene_01_orientation_order`
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`

其中：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`
  是当前 first-wave 核心受控候选
- `scene_00_intro_entry`
  仍只允许作为保守测试 / disclosure-first / threshold entry 试装，不得被包装成冻结真入口

## 执行口径
对用户只说一句话即可：

**当前请只从 `web/DIRECT_COPY_VIDEO_TEXTS.md` 复制提示词生成视频；不要自行改用其他 `video/*` 候选 packet 作为默认外部生成入口。**

## 当前结论
本文件不是新增资料堆。

它的作用是把一个会持续制造误读的口径冲突，
收成一条单句规则。
