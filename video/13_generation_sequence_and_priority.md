# 13 Generation Sequence And Priority

## 文档目的
本文件定义完整生成包的推荐生成顺序，目标不是按叙事顺序最先出片，而是按“最稳、最容易锁定生成语法、最能及早暴露风险”的顺序生成。

## 排序依据
- 先生成约束最强、替代成本最高的 scene。
- 先生成 truth 风险最高、最容易误拍成单一实景或事实证明的 scene。
- 先锁定结构、边界、入口三类核心视觉语法，再扩展到递进、细部、回望。
- 将可后置增强 scene 放在最后，避免占用主干生成预算。

## 必先生成
### 1. `scene_03_structure_primary`
- 原因：这是 `chapter_03_structure` 的主解释 scene，替代成本最高。
- 原因：其 `C_abstract_explanatory_layer` 语法最严格，最需要先锁定。
- 原因：如果这一条失真，整个结构章都会被拖向“纯氛围”或“伪纪录实景”。

### 2. `scene_06_conservation_boundary`
- 原因：保护场景误拍为翻新宣传的风险最高。
- 原因：这条 scene 已明确降级为 `C_abstract_explanatory_layer`，需要先确认“边界、照护、非翻新”的视觉表达是否成立。
- 原因：后续所有保护相关输出都可复用其低运动、可叠加标注的语法。

### 3. `scene_00_intro_entry`
- 原因：入口 scene 决定整体气质、阈限表达和 composite 容器的第一印象。
- 原因：如果 intro 被拍成具体遗址宣传片，后续整包都会偏航。
- 原因：它能为后续 `B_composite_teaching_scene` 场景统一光线、节奏和镜头克制度。

### 4. `scene_01_orientation_order`
- 原因：这一条决定“秩序通过路径与层级被感知”的成立方式。
- 原因：它是后续 progression scene 的前提语法。
- 原因：若此条失败，后续会滑向“中轴壮观片”而不是秩序阅读。

## 第二梯队
### 5. `scene_02_progression_path`
- 原因：建立在入口和秩序语法已稳定之后，递进更容易控制。
- 原因：它需要沿用已确定的 walking-height、threshold、pause-turn-lift 逻辑。

### 6. `scene_05_craft_detail`
- 原因：工艺细部已按 `C_abstract_explanatory_layer` 生成，风险低于结构与保护，但仍需在“细部”与“系统”之间保持平衡。
- 原因：等前面的整体空间语法稳定后，再生成细部更容易避免装饰合集化。

### 7. `scene_07_outro_exit`
- 原因：离场要复用 opening grammar，放在 opening 成立之后生成更稳。
- 原因：它不承担新知识，不需要最早投入预算，但必须在主干完成后尽快补齐。

## 可后置增强
### 8. `scene_04_structure_support`
- 原因：它是 `chapter_03_structure` 的辅助承接 scene，不是主解释 scene。
- 原因：即使它缺失，`scene_03_structure_primary` 仍可单独支撑结构章的正式生成。
- 原因：其作用是节奏过渡与桥接，适合在主干全部稳定后作为增强项补上。

## 推荐执行顺序总表
| 顺序 | `scene_id` | `chapter_id` | 梯队 | 说明 |
| --- | --- | --- | --- | --- |
| 01 | `scene_03_structure_primary` | `chapter_03_structure` | 必先生成 | 结构章主解释，约束最强 |
| 02 | `scene_06_conservation_boundary` | `chapter_05_conservation` | 必先生成 | 保护边界高风险，必须先锁定语法 |
| 03 | `scene_00_intro_entry` | `chapter_00_intro` | 必先生成 | 锁定整体入口与 composite 感 |
| 04 | `scene_01_orientation_order` | `chapter_01_orientation` | 必先生成 | 锁定秩序与方向语法 |
| 05 | `scene_02_progression_path` | `chapter_02_progression` | 第二梯队 | 沿用入口与秩序语法 |
| 06 | `scene_05_craft_detail` | `chapter_04_craft` | 第二梯队 | 在整体语法稳定后做细部 |
| 07 | `scene_07_outro_exit` | `chapter_06_outro` | 第二梯队 | 复用 opening grammar 做收束 |
| 08 | `scene_04_structure_support` | `chapter_03_structure` | 可后置增强 | 主干完成后再补结构桥接 |

## 使用建议
- 若预算或生成次数有限，至少先完成前 7 条，再考虑 `scene_04_structure_support`。
- 若某条 scene 连续失败，不跳过 truth 规则去硬拍“更真实”，而是回看 `video/14_scene_exclusion_and_downgrade_list.md` 的降级依据。
- 任何单条生成成功都不等于整包成功；仍需按 `video/15_returned_video_metadata_template.md` 回传统一元数据。
