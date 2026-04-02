# Truth Mode Contract

## 合同目的
本合同定义真实性模式 `A/B/C` 的允许声明、禁止声明、用户可见披露义务、混用规则和模糊处理方式。

## Definition of `A/B/C`
| 模式 | 定义 |
| --- | --- |
| `A_real_anchor` | 明确指向单一真实案例、单一可核对场所或其被证据支持的特定部分 |
| `B_composite_teaching_scene` | 受证据约束的综合教学场景，由多个真实案例经验、逻辑或关系经策展组织而成 |
| `C_abstract_explanatory_layer` | 用于关系说明、结构剖示、路径逻辑、比较示意的抽象解释层 |

## Allowed claims by mode
- `A_real_anchor`：可以声明与某一真实案例直接相关的事实，但仍需 `evidence_grade` 与 `source_ref`。
- `B_composite_teaching_scene`：可以声明“这是用于教学组织的综合场景”，可以承载多案例关系，但不得宣称为单一保存遗址。
- `C_abstract_explanatory_layer`：可以声明“这是示意或解释层”，只能说明关系，不得暗示真实保留空间连续性。

## Forbidden claims by mode
- `A_real_anchor`：禁止超出该真实案例证据边界的泛化宣称。
- `B_composite_teaching_scene`：禁止用“这就是某遗址全貌”或等价表述。
- `C_abstract_explanatory_layer`：禁止被包装成实景纪录式证明。

## User-visible disclosure rules
- `A_real_anchor`：若承载真实锚点，应可被明确识别为锚点层。
- `B_composite_teaching_scene`：必须让用户知道它是综合教学场景，而非未标注实景。
- `C_abstract_explanatory_layer`：必须让用户知道它是解释层或示意层。

用户可见披露不是可选项，而是强制项。

## Mixing rules
- 章节允许多模式共存，但必须有单一 `truth_mode_default`。
- 单个资产只能有一个主 `scene_mode`。
- 若同一章节从 `B` 切到 `C`，必须在规划与章节规格中标出切换点。
- 不允许单个资产同时宣称 `A` 与 `B`。

## Single-asset primary-mode rule
每个 `asset_id` 只能拥有一个主 `scene_mode`。辅助说明可引用其他模式，但不得改变该资产的主模式。

## Ambiguity handling
- 模式不明时，默认按最保守方式处理，不得进入最终下游产物。
- 只要存在“用户可能误判为单一实景”的风险，就必须降级为 `B` 或 `C` 并披露。
- 模式争议必须进入 `review` 记录，不得静默决定。

## Required fields
- `scene_mode`
- `truth_mode_default`
- `source_ref`
- `dispute_flag`

## 确定项
- `B_composite_teaching_scene` 明确是受证据约束的综合教学场景。
- `C_abstract_explanatory_layer` 不能冒充真实保留空间连续性。
- 用户是否知晓综合状态不是可选项。

## 待验证项
- 不同传播载体上的最小披露格式待后续规范模板细化。
- 章节内部模式切换的最小标记粒度待验证。

## 禁止项
- 禁止把 `B` 未披露地包装成 `A`。
- 禁止把 `C` 渲染成看似真实遗址的纪录片式连续实景。
- 禁止在未定义模式时继续下游规划。
