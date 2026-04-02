# 01 Chapter Video Briefs

## 文档目的
本文件用于按 `chapter_id` 生成 Seedance 2.0 章节级视频规划 brief。每章只定义规划边界、场景功能、字段要求与待验证项，不生成最终 shot 或镜头描述。

## 章节级 video brief 总表
| `chapter_id` | `segment_id` | `chapter_goal` | `core_claim` | `truth_mode_default` | `asset_role` | `motion_owner` | `fallback_level` | `planning_status` | `notes` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `chapter_00_intro` | `segment_00_invocation` | 建立观看关系与真实性声明 | 综合场景是教学容器，不是默认单一实景 | `B_composite_teaching_scene` | `contextual_atmosphere` | `video` | `D_static_minimum` | `draft` | 仅可做入口声明与进入氛围，不承载主解释 |
| `chapter_01_orientation` | `segment_01_order_entry` | 建立方向与秩序框架 | 秩序先通过方向、路径与层级被感知 | `B_composite_teaching_scene` | `supporting_transition` | `video` | `C_low_bandwidth` | `draft` | 只能服务定向，不可代替解释层 |
| `chapter_02_progression` | `segment_01_order_entry` | 展开递进与身体阅读 | 递进组织身体感知 | `B_composite_teaching_scene` | `supporting_transition` | `video` | `C_low_bandwidth` | `draft` | 只做受控递进氛围，不做人物剧情 |
| `chapter_03_structure` | `segment_02_structural_climax` | 建立结构高潮解释层 | 气势来自结构组织与层次关系 | `C_abstract_explanatory_layer` | `supporting_transition` | `2.5D` | `D_static_minimum` | `draft` | 视频只能辅助，不得成为唯一解释载体 |
| `chapter_04_craft` | `segment_03_return_to_detail_and_care` | 细部回到整体营造 | 工艺细部服务整体系统 | `B_composite_teaching_scene` | `comparative_overlay` | `2.5D` | `C_low_bandwidth` | `draft` | 适合受控细节过渡，不适合装饰合集 |
| `chapter_05_conservation` | `segment_03_return_to_detail_and_care` | 建立保护层责任 | 保护是持续照护，不是翻新 | `B_composite_teaching_scene` | `evidence_reference` | `vector_programmatic` | `D_static_minimum` | `draft` | 视频只可辅助边界说明 |
| `chapter_06_outro` | `segment_04_controlled_exit` | 收束与离场 | 输出的是可复述方法，而非终极结论 | `B_composite_teaching_scene` | `supporting_transition` | `video` | `D_static_minimum` | `draft` | 只做收束，不引入新信息 |

## 章节级补充约束
### `chapter_00_intro`
- `negative_constraints`：禁止单一遗址宣称、禁止人物再现、禁止直接开始知识高潮。
- `待验证项`：入口层最小证据锚点。

### `chapter_01_orientation`
- `negative_constraints`：禁止把对称直接等同中轴全部逻辑、禁止队列或仪式补写。
- `待验证项`：路径显隐阈值与首批锚点案例。

### `chapter_02_progression`
- `negative_constraints`：禁止人物行进剧情、禁止跨地未披露连续空间。
- `待验证项`：递进层的 `case_support` 列表。

### `chapter_03_structure`
- `negative_constraints`：禁止神秘化结构、禁止纯氛围视频解释结构。
- `待验证项`：结构锚点是否需要局部 `A_real_anchor` 支撑。

### `chapter_04_craft`
- `negative_constraints`：禁止把细部做成国风装饰集合。
- `待验证项`：局部比较密度与细节锚点。

### `chapter_05_conservation`
- `negative_constraints`：禁止把保护等同修旧如新、禁止翻新化叙述。
- `待验证项`：保护边界锚点与说明顺序。

### `chapter_06_outro`
- `negative_constraints`：禁止新增案例、主题、分支或封闭终极结论。
- `待验证项`：最小总结层的保留粒度。

## 确定项
- 各章节 video brief 只定义规划边界，不定义最终 shot。
- 每章的 `chapter_id`、`segment_id`、`truth_mode_default` 与上游冻结文件一致。
- `chapter_03_structure` 的视频角色只能是辅助过渡，不可成为唯一解释层。

## 待验证项
- 各章节 `case_anchor` / `source_ref` 的最终值。
- 各章节具体 scene 数量。

## 禁止项
- 禁止在本文件中写镜头语言。
- 禁止新增章节、主题或案例方向。
- 禁止把 chapter brief 写成实现任务单。
