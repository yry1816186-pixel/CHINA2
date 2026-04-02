# 16 Execution Status and Activation

## 文档定位
本文件用于明确当前 `video/*` 关键文件的执行状态、激活条件、默认地位与误用禁令。

本文件的作用是阻断“参考文件被误读为正式执行授权”的风险。

## 当前总状态
当前视频链路状态为：`planning_authorized_reference_only`

含义如下：
- 允许继续进行视频规划；
- 允许形成 scene 级候选 packet；
- 允许做优先级排序与降级设计；
- 不等于已批准批量外部生成；
- 不等于已批准把 packet 直接当成最终执行口令。

## 关键文件状态
### `video/03_scene_matrix.md`
- 状态：`active_planning_matrix`
- 默认地位：活跃主表
- 作用：scene 容器主索引
- 禁令：不得当 storyboard，不得当最终 shot 清单

### `video/11_full_generation_plan.md`
- 状态：`reference_heavy_planning_index`
- 默认地位：退出现役，按需参考
- 作用：完整规划覆盖参考件
- 禁令：不得自动视为“正式视频生成总表”
- 禁令：不得在 research 未硬化前作为默认下游执行授权来源

### `video/12_full_prompt_packets_master.md`
- 状态：`reference_heavy_packet_library`
- 默认地位：退出现役，按需参考
- 作用：packet 候选库 / 历史参考库
- 禁令：不得自动视为“正式 prompt 主包”
- 禁令：不得因文件已存在，就默认允许直接复制到外部视频生成流程

### `video/13_generation_sequence_and_priority.md`
- 状态：`priority_reference`
- 默认地位：按需参考
- 作用：场景优先级与生成排序参考
- 禁令：不得替代 `scene_matrix` 本身

### `video/14_scene_exclusion_and_downgrade_list.md`
- 状态：`safety_reference`
- 默认地位：按需参考
- 作用：高风险 scene 的排除与降级依据
- 禁令：不得单独脱离 truth / evidence contracts 使用

## 显式激活条件
只有满足以下条件，`11` 和 `12` 才能从“参考级重型文件”提升为“显式启用的执行参考件”：

1. 对应优先 scene 已有真实 `case_anchor`
2. 对应 `source_ref` 已不以 `SRC_TBD_*` 为主
3. 活跃 scene 已达到 `E3_supported` 或更高，且不再大面积停留在 `E2_unresolved`
4. 已在 `review/` 中记录启用决定
5. 调用者明确声明：本轮正在读取 `11` 或 `12`

## 首批允许推进的 scene
在满足上面的激活条件前，只允许把下列 scene 作为首批高优先级校准对象：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_00_intro_entry`
- `scene_01_orientation_order`

## 禁止项
- 禁止把“文件存在”误判为“阶段已批准”。
- 禁止把 `11`、`12` 当作 README 级默认入口。
- 禁止在未完成 research 硬化前，以“全量主包”方式推进外部视频生成。
