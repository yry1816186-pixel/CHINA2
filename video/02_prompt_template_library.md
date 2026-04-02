# 02 Prompt Template Library

## 文档目的
本文件提供 Seedance 2.0 规划阶段使用的提示词模板结构，不提供最终 prompt 实例，不写具体案例细节，不写镜头脚本。模板的作用是把 frozen docs/contracts 转译成可执行规划字段。

## 模板使用规则
1. 模板只能填入已冻结字段与已批准占位符。
2. 模板缺少 `negative_constraints` 时，不得使用。
3. 模板中的 `待验证项` 必须保留，不得自动补全。

## Template A：章节级 brief 模板
| 字段 | 必填说明 |
| --- | --- |
| `chapter_id` | 必填 |
| `segment_id` | 必填 |
| `chapter_goal` | 必填 |
| `core_claim` | 必填 |
| `truth_mode_default` | 必填 |
| `case_anchor` | 可为 `待验证项` 占位 |
| `case_support` | 可为 `待验证项` 占位 |
| `evidence_grade` | 必填 |
| `source_ref` | 可为 `待验证项` 占位，但不得留空 |
| `asset_role` | 必填 |
| `motion_owner` | 必填 |
| `fallback_level` | 必填 |
| `positive_constraints` | 必填 |
| `negative_constraints` | 必填 |

## Template B：`A_real_anchor` 规划模板
- 适用：只有在某场景明确指向真实锚点时使用。
- 必填补充：
  - `scene_mode=A_real_anchor`
  - `source_ref` 已存在于 `research/evidence_manifest.md`
  - `evidence_grade` 不低于允许层级
- 禁止：
  - 未经核实使用 `A_real_anchor`
  - 用 `A_real_anchor` 承担超出锚点证据边界的结论

## Template C：`B_composite_teaching_scene` 规划模板
- 适用：综合教学场景。
- 必填补充：
  - `scene_mode=B_composite_teaching_scene`
  - `case_anchor` / `case_support` 至少为结构化占位
  - `negative_constraints` 包含“不得伪装为单一真实实景”
- 禁止：
  - 省略 composite 披露
  - 用“纪录片式真实场所”口径承载 B 层

## Template D：`C_abstract_explanatory_layer` 规划模板
- 适用：结构、路径、比较示意层。
- 必填补充：
  - `scene_mode=C_abstract_explanatory_layer`
  - `layer_type` 不得偏离解释层/比较层/标注层
  - `negative_constraints` 包含“不得伪装实景连续空间”
- 禁止：
  - 把 C 层写成真实遗址现场
  - 让 C 层承担未经证据支持的历史确定性

## 通用负向约束模板
- 禁止人物、仪式、服饰、神怪、权力奇观自动补写
- 禁止未披露的单一真实遗址连续空间宣称
- 禁止把 `E2_unresolved` / `E1_unverified` 内容写成主事实
- 禁止把 prior repo content 当作来源
- 禁止用气氛替代解释层

## 确定项
- 模板是字段模板，不是内容 prompt 成品。
- 所有 Seedance 规划必须同时具备正向约束与负向约束。
- `A/B/C` 三种模板必须服从 truth contract。

## 待验证项
- 组织是否还需要为不同 `building_type` 拆分子模板。
- 各章节是否需要单独的 `negative_constraints` 扩展包。

## 禁止项
- 禁止把本文件当作最终 prompt 文案库。
- 禁止在模板中补写未经批准的案例细节。
- 禁止删除 `negative_constraints`。
