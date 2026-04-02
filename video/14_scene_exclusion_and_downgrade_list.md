# 14 Scene Exclusion And Downgrade List

## 文档目的
本文件列出所有不适合直接按高真实性生成的 scene，并明确：
- 为什么不适合高真实性直出
- 是否维持原 `truth_mode`
- 是否需要降级
- 降到什么 `truth_mode`
- 是否仍允许生成
- 若不允许生成，原因是什么

这里的“高真实性生成”特指会被观众误读为：
- 单一真实遗址的纪录片式连续实景
- 具体案例、具体朝代、具体修缮事实的直接证明
- 未披露 composite / explanatory 状态的高写实外部宣传片

## 总表
| `scene_id` | 规划 `scene_mode` | 高真实性直出是否允许 | 处理结果 | 生成 `truth_mode` | 是否仍允许生成 | 原因 |
| --- | --- | --- | --- | --- | --- | --- |
| `scene_00_intro_entry` | `B_composite_teaching_scene` | 否 | 维持 `B` 生成 | `B_composite_teaching_scene` | 是 | 入口 scene 必须保留 composite 教学容器属性，不能误读为单一遗址纪录片式开场 |
| `scene_01_orientation_order` | `B_composite_teaching_scene` | 否 | 维持 `B` 生成 | `B_composite_teaching_scene` | 是 | 秩序场景若拍得过实，会被误判为某一真实礼制中轴空间的完整复原 |
| `scene_02_progression_path` | `B_composite_teaching_scene` | 否 | 维持 `B` 生成 | `B_composite_teaching_scene` | 是 | 递进场景若高真实性直拍，容易滑成单一遗址连续游览实景 |
| `scene_03_structure_primary` | `C_abstract_explanatory_layer` | 否 | 原本即按 `C` 生成 | `C_abstract_explanatory_layer` | 是 | 结构主解释本来就是解释层，不能以纪录片实景承担唯一结构证明 |
| `scene_04_structure_support` | `B_composite_teaching_scene` | 否 | 降级生成 | `C_abstract_explanatory_layer` | 是 | 作为结构辅助承接 scene，若维持较强实景感，容易误导成真实空间中的结构确证镜头 |
| `scene_05_craft_detail` | `B_composite_teaching_scene` | 否 | 降级生成 | `C_abstract_explanatory_layer` | 是 | 细部近拍在来源未冻结时最容易被误读为具体遗址、具体构件、具体工艺证据 |
| `scene_06_conservation_boundary` | `B_composite_teaching_scene` | 否 | 降级生成 | `C_abstract_explanatory_layer` | 是 | 保护边界若高真实性生成，极易滑向“修旧如新”或“真实修缮纪录”叙事 |
| `scene_07_outro_exit` | `B_composite_teaching_scene` | 否 | 维持 `B` 生成 | `B_composite_teaching_scene` | 是 | 离场 scene 只能做 composite 回望，不能拍成某单一遗址的终极实景结论 |

## 逐项说明
### `scene_00_intro_entry`
- 不允许高真实性直出原因：intro 一旦像具体遗址宣传片，整包的 truth 立场会被误设为 `A_real_anchor`。
- 处理：维持 `B_composite_teaching_scene`。
- 是否仍允许生成：允许。

### `scene_01_orientation_order`
- 不允许高真实性直出原因：秩序与方向在此阶段是教学组织关系，不是具体案例的礼制复原。
- 处理：维持 `B_composite_teaching_scene`。
- 是否仍允许生成：允许。

### `scene_02_progression_path`
- 不允许高真实性直出原因：递进需要是受控 composite 经验，不能伪装成某一真实遗址的连续游历视频。
- 处理：维持 `B_composite_teaching_scene`。
- 是否仍允许生成：允许。

### `scene_03_structure_primary`
- 不允许高真实性直出原因：结构解释必须保持解释层地位，不能被包装成现场实拍证明。
- 处理：原本即按 `C_abstract_explanatory_layer` 正式生成。
- 是否仍允许生成：允许。

### `scene_04_structure_support`
- 不允许高真实性直出原因：它只是结构章的辅助承接 scene，不应承担真实遗址空间中的结构证明。
- 处理：从 `B_composite_teaching_scene` 降到 `C_abstract_explanatory_layer`。
- 是否仍允许生成：允许。

### `scene_05_craft_detail`
- 不允许高真实性直出原因：细部 close-up 在无冻结来源时会被观众自动理解为某个具体文物级构件的实证镜头。
- 处理：从 `B_composite_teaching_scene` 降到 `C_abstract_explanatory_layer`。
- 是否仍允许生成：允许。

### `scene_06_conservation_boundary`
- 不允许高真实性直出原因：保护议题若高写实直拍，最容易被误读为“正确修缮方法”的事实背书。
- 处理：从 `B_composite_teaching_scene` 降到 `C_abstract_explanatory_layer`。
- 是否仍允许生成：允许。

### `scene_07_outro_exit`
- 不允许高真实性直出原因：outro 只能做方法回望，不能以高真实性实景收尾制造终极结论感。
- 处理：维持 `B_composite_teaching_scene`。
- 是否仍允许生成：允许。

## 暂缓生成清单
本轮无 scene 被列入暂缓生成。

## 不允许生成项
本轮无 scene 被判定为“完全不允许生成”。

## 使用规则
- 若 scene 在本表中被标记为“降级生成”，则 `video/12_full_prompt_packets_master.md` 必须使用降级后的 `scene_mode` / `truth_mode`。
- 若 scene 维持 `B_composite_teaching_scene`，也不表示允许把它拍成高真实性单一遗址纪录片。
- 若后续 research 冻结了更高等级证据，也不能自动把本表中的 scene 升成 `A_real_anchor`；必须经过单独规范更新。
