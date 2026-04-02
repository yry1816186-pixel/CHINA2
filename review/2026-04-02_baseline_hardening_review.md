# 2026-04-02 Baseline Hardening Review

## 审查定位
本文件记录一次针对当前 frozen planning baseline 的结构性减载与阶段口径加固。

本文件不是创意总结，不是项目宣传稿，而是一次强制性的总控审查记录。

## 审查结论
当前项目方向正确，但存在三个必须立即纠正的结构性问题：

1. `video/11_full_generation_plan.md` 与 `video/12_full_prompt_packets_master.md` 的语义位置过高，容易被误读为正式执行授权。
2. 默认上下文过重，容易导致 Agent / 模型重复读取重型参考文件，产生 token 浪费与口径漂移。
3. research 仍存在大量 `SRC_TBD_*`、`TBD_CASE_*` 与 `E2_unresolved`，不适合继续按“完整全量执行包”逻辑推进。

## 本次加固动作
- 新增 `docs/08_active_context_profile.md`，定义默认活跃上下文 11 文件集。
- 新增 `video/16_execution_status_and_activation.md`，明确 `11`、`12` 的参考级地位与显式激活条件。
- 规定 `11`、`12` 在 research 硬化前不得作为默认执行入口。
- 规定活跃 scene 的首批优先级只允许从结构、保护、入口、定向四个核心场景开始。

## 当前有效工作口径
当前有效工作口径如下：
- 默认只读最小活跃上下文层；
- 重型视频文件默认退出现役；
- 先补 research，再做 scene 级候选 packet 校准；
- 不允许把“文件齐全”误判为“已正式授权执行”。

## 下一步强制顺序
1. 优先补 `case_anchor`
2. 优先补 `source_ref`
3. 优先把首批活跃 scene 从 `E2_unresolved` 提升到 `E3_supported` 或更高
4. 只做首批 4 个高优先级 scene 的逐条校准
5. 未满足以上条件前，不恢复全量执行口径

## 禁止项
- 禁止把本审查文件视为可有可无。
- 禁止在未登记阶段切换前，重新把 `11`、`12` 视作默认主包。
- 禁止继续增加重型规划文件来替代 research 硬化。
