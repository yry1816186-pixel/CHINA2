# 01 Scene to Chapter Mapping

## 文档目的
本文件用于把 `video/03_scene_matrix.md` 中的场景容器稳定映射到 `chapter_id` 与后续 keyframe 抽取范围。

## Mapping table
| `planned_scene_id` | `chapter_id` | `segment_id` | `default_keyframe_band` | `core_claim_alignment` | `truth_mode_reference` | `notes` |
| --- | --- | --- | --- | --- | --- | --- |
| `scene_00_intro_entry` | `chapter_00_intro` | `segment_00_invocation` | `band_intro` | 入口真实性声明 | `B_composite_teaching_scene` | 不产生结构高潮 keyframe |
| `scene_01_orientation_order` | `chapter_01_orientation` | `segment_01_order_entry` | `band_orientation` | 定向与秩序建立 | `B_composite_teaching_scene` | 仅服务秩序理解 |
| `scene_02_progression_path` | `chapter_02_progression` | `segment_01_order_entry` | `band_progression` | 递进关系与身体阅读 | `B_composite_teaching_scene` | 不引入人物叙事 |
| `scene_03_structure_primary` | `chapter_03_structure` | `segment_02_structural_climax` | `band_structure_primary` | 结构高潮主解释 | `C_abstract_explanatory_layer` | 必须进入解释层 keyframe |
| `scene_04_structure_support` | `chapter_03_structure` | `segment_02_structural_climax` | `band_structure_support` | 结构辅助承接 | `B_composite_teaching_scene` | 不能代替主解释层 |
| `scene_05_craft_detail` | `chapter_04_craft` | `segment_03_return_to_detail_and_care` | `band_craft` | 工艺细部回归整体 | `B_composite_teaching_scene` | 服务比较与标注 |
| `scene_06_conservation_boundary` | `chapter_05_conservation` | `segment_03_return_to_detail_and_care` | `band_conservation` | 保护边界说明 | `B_composite_teaching_scene` | 以事实与注释层为主 |
| `scene_07_outro_exit` | `chapter_06_outro` | `segment_04_controlled_exit` | `band_outro` | 收束与方法回收 | `B_composite_teaching_scene` | 不新增知识分支 |

## 使用规则
- 一个 `planned_scene_id` 只能映射到一个主 `chapter_id`。
- `chapter_03_structure` 允许两个 scene band，但只允许一个主解释 band。
- 若未来增加 support scene，必须先更新本文件，再更新 keyframe 规则。

## 确定项
- 本表是 scene 到 chapter 的唯一主映射表。
- `scene_03_structure_primary` 为结构高潮主解释容器。
- 本表不定义具体 frame 数量。

## 待验证项
- 各 band 的最终 keyframe 数量。
- 是否需要为 `chapter_04_craft` 和 `chapter_05_conservation` 增加 support band。

## 禁止项
- 禁止一 scene 多主 chapter。
- 禁止未经更新本表就新增 scene band。
- 禁止把 band 直接等同 shot sequence。
