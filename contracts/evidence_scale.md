# Evidence Scale Contract

## 合同目的
本合同定义 `evidence_grade`、`source_ref`、`dispute_flag` 的允许范围、使用权限、模糊标注方法和禁用情形。

## Grades
| `evidence_grade` | 定义 | 允许进入的层级 |
| --- | --- | --- |
| `E4_confirmed` | 直接可核对、权威且与表述高度对应的证据 | `fact_layer`, `comparison_layer`, `annotation_layer` |
| `E3_supported` | 有可靠支持但不宜承担唯一结论的证据 | `comparison_layer`, `annotation_layer`, 受限 `fact_layer` |
| `E2_unresolved` | 有线索但结论不足以稳定成立 | research 与内部验证区 |
| `E1_unverified` | 未经核实或仅作结构参考 | 不得进入最终下游产物 |

## Overlay
- `D_disputed`：对任何等级的争议标记。带此标记的内容不得进入唯一结论层。

## Source-type to default-grade mapping
| 来源类型 | 默认等级 | 说明 |
| --- | --- | --- |
| 法定文保名录、世界遗产正式文件、官方测绘或修缮报告中直接陈述的事实 | `E4_confirmed` | 仅对直接陈述内容有效 |
| 博物馆/文保机构正式说明、学术论文、学术专著、教学性权威出版物 | `E3_supported` | 多源一致或直接引证后可升级 |
| 机构科普稿、展陈说明、可靠二手整理 | `E3_supported` | 不得单独支撑争议性唯一结论 |
| 一般媒体报道、无同行审校的通俗稿、未附来源的解释文 | `E2_unresolved` | 只能进入研究与验证区 |
| 旧仓库内容、内部笔记、AI 生成文本、无来源摘录 | `E1_unverified` | 仅作结构参考，不得作史实依据 |

## Usage permissions by grade
- `E4_confirmed`：可进入核心事实层，但仍需 `source_ref`。
- `E3_supported`：可进入解释层或受限事实层；若用于核心结论，必须有多源支持或由 `historical_reviewer` 复核。
- `E2_unresolved`：只可进入 research、待验证清单或内部讨论区；不得进入视频规划主层、keyframe 主层、网页最终章节。
- `E1_unverified`：禁止进入任何最终下游产物。

## Ambiguity labeling rules
- 只要不是 `E4_confirmed` 的唯一结论，就必须保留不确定性表达。
- 带 `D_disputed` 的内容必须显式标记争议状态。
- 来源类型与 `evidence_grade` 不一致时，必须在 review 中说明升级或降级理由。

## Mandatory fields
- `evidence_grade`
- `source_ref`
- `dispute_flag`

## 确定项
- prior repo content 只能作为结构参考，默认视为 `E1_unverified`。
- `E2_unresolved` 与 `E1_unverified` 不得进入最终下游产物。
- 任何事实层内容都不得缺失 `source_ref`。

## 待验证项
- 来源类型升级到 `E4_confirmed` 的细节阈值待在 research 索引中细化。
- 个别学术来源之间冲突时的优先处理规则待验证。

## 禁止项
- 禁止把 `E3_supported` 当作自动等同 `E4_confirmed`。
- 禁止跳过 `source_ref`。
- 禁止把 AI 输出、旧仓库、无来源摘录当作史实依据。
