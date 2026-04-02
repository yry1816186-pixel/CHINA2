# 03 Chapter Map

## 章节总表
| `chapter_id` | `segment_id` | `chapter_goal` | `core_claim` | `learning_outcome` | `emotional_goal` | `info_density` | `interaction_role` | `asset_role` | `truth_mode_default` | `mobile_fallback_level` | `forbidden_payload` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `chapter_00_intro` | `segment_00_invocation` | 建立观看关系与真实性声明 | 综合场景是受证据约束的教学容器，不是默认单一实景 | 理解观看方式与真实性模式 | 敬畏、进入 | `low` | 进入门与观看定向 | 氛围引导与规范声明承载 | `B_composite_teaching_scene` | `D_static_minimum` | 未标注的单一实景宣称、历史场景再现 |
| `chapter_01_orientation` | `segment_01_order_entry` | 建立方向与秩序框架 | 空间秩序通过方向、路径和等级被感知，而非只靠说明文字 | 理解方向与秩序进入方式 | 收束、定向 | `medium_low` | 路径与层级可视化 | 解释性过渡与秩序建立 | `B_composite_teaching_scene` | `C_low_bandwidth` | 把对称直接等同于全部中轴逻辑 |
| `chapter_02_progression` | `segment_01_order_entry` | 展开递进与身体阅读 | 建筑体验通过步行、停驻、回望和抬升被组织 | 理解空间递进如何塑造身体感知 | 深入、推进 | `medium` | 递进关系与比较控制 | 空间关系承载 | `B_composite_teaching_scene` | `C_low_bandwidth` | 虚构仪式队列、虚构人物使用情景 |
| `chapter_03_structure` | `segment_02_structural_climax` | 建立结构作为高潮解释层 | 建筑气势来自结构组织与层次关系，不来自独立装饰 | 理解结构逻辑是空间与形式的共同基础 | 明晰、震撼 | `high` | 分层、剖示、对照 | 主解释层 | `C_abstract_explanatory_layer` | `D_static_minimum` | 仅靠氛围视频解释结构、神秘化力学 |
| `chapter_04_craft` | `segment_03_return_to_detail_and_care` | 把细部放回完整营造系统 | 工艺细部服务整体营造，不是可任意切割的装饰片段 | 理解细部与整体的关系 | 近观、沉静 | `medium_high` | 局部放大与标注联动 | 比较与说明层 | `B_composite_teaching_scene` | `C_low_bandwidth` | 将彩画、纹样、构件片面当作“国风装饰” |
| `chapter_05_conservation` | `segment_03_return_to_detail_and_care` | 建立保护层的当代责任 | 保护不是“恢复崭新原貌”，而是受证据约束的持续照护 | 区分历史层与保护层 | 回落、判断 | `medium` | 对照与边界说明 | 解释层与现状层 | `B_composite_teaching_scene` | `D_static_minimum` | 把修缮等同翻新、把保护等同复古还原 |
| `chapter_06_outro` | `segment_04_controlled_exit` | 收束学习结果并完成离场 | 本项目提供的是可复述的阅读框架，不是封闭终极结论 | 能复述核心方法和边界 | 收束、回望 | `low` | 总结入口与离场控制 | 收束与复盘 | `B_composite_teaching_scene` | `D_static_minimum` | 新增未铺垫知识、新增案例、新增主题分支 |

## 五段叙事到七个章节文件的映射
| `segment_id` | 章节文件 | 下游资产分组 |
| --- | --- | --- |
| `segment_00_invocation` | `chapter_00_intro.md` | `asset_group_intro` |
| `segment_01_order_entry` | `chapter_01_orientation.md`, `chapter_02_progression.md` | `asset_group_order_entry` |
| `segment_02_structural_climax` | `chapter_03_structure.md` | `asset_group_structure` |
| `segment_03_return_to_detail_and_care` | `chapter_04_craft.md`, `chapter_05_conservation.md` | `asset_group_return` |
| `segment_04_controlled_exit` | `chapter_06_outro.md` | `asset_group_outro` |

## Downstream handoff notes
### Seedance 2.0 video planning
- 每章视频规划必须继承本表的 `chapter_id`、`segment_id`、`core_claim`、`truth_mode_default`、`forbidden_payload`。
- 视频规划不得新增章节或改写 `core_claim`。

### Keyframe mapping
- keyframe 映射必须以本表为章节主索引。
- keyframe 只能细化章节，不得重写章节目标或真实性模式。

### Web build in VSCode
- 前端后续只允许消费本表已冻结的章节结构和字段命名。
- 本表未批准前，不得开始路由、组件、动画、交互实现。

## 确定项
- 七个 `chapter_id` 已冻结。
- 五段叙事到七个章节的映射已冻结。
- 每章必须继承本表字段，不得另起命名。

## 待验证项
- 各章 `case_anchor` 与 `case_support` 的具体名单待在 research 索引中冻结。
- 各章精确证据锚点与章节负载阈值待验证。

## 禁止项
- 禁止新增第八个章节文件。
- 禁止把 `chapter_03_structure` 降格为纯氛围章。
- 禁止把章节表当成 shot list。
