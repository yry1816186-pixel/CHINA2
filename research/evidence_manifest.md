# Evidence Manifest

## 文档目的
本文件用于为 pre-production 阶段建立统一证据主表，承载 `source_ref`、来源类型、默认 `evidence_grade`、适用范围与使用权限。它是 `contracts/evidence_scale.md` 的实例化载体，但当前只允许结构化占位与冻结后的真实证据条目进入。

## 使用规则
1. 本表是 `source_ref` 的唯一主表。
2. 所有进入 `video/*` 和 `keyframes/*` 的证据引用都必须先在此登记。
3. 未登记的来源不得以泛称进入任何规划文件。
4. 真实来源尚未补齐时，允许使用占位 `source_ref`，但必须与 `待验证项` 绑定，且默认不高于 `E2_unresolved`。

## 字段说明
| 字段 | 说明 |
| --- | --- |
| `source_ref` | 证据索引唯一 ID |
| `source_type` | 来源类型，必须可映射到 `contracts/evidence_scale.md` |
| `default_evidence_grade` | 默认等级 |
| `applicable_chapter_ids` | 可适用章节列表 |
| `claim_scope` | 可支持的论断范围 |
| `copyright_status` | 使用权限状态 |
| `dispute_flag` | 是否争议 |
| `revision_status` | 当前修订状态 |
| `notes` | 仅用于规划备注，不得写成事实性结论 |

## 占位证据主表
| `source_ref` | `source_type` | `default_evidence_grade` | `applicable_chapter_ids` | `claim_scope` | `copyright_status` | `dispute_flag` | `revision_status` | `notes` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `SRC_TBD_INTRO_01` | `待验证项` | `E2_unresolved` | `[chapter_00_intro]` | 入口真实性说明 | `internal_reference_only` | `false` | `draft` | 待补真实来源 |
| `SRC_TBD_ORDER_01` | `待验证项` | `E2_unresolved` | `[chapter_01_orientation, chapter_02_progression]` | 路径、秩序、空间递进 | `internal_reference_only` | `false` | `draft` | 待补真实来源 |
| `SRC_TBD_STRUCTURE_01` | `待验证项` | `E2_unresolved` | `[chapter_03_structure]` | 结构、层次、关系解释 | `internal_reference_only` | `false` | `draft` | 待补真实来源 |
| `SRC_TBD_CRAFT_01` | `待验证项` | `E2_unresolved` | `[chapter_04_craft]` | 工艺细部与整体关系 | `internal_reference_only` | `false` | `draft` | 待补真实来源 |
| `SRC_TBD_CONSERVATION_01` | `待验证项` | `E2_unresolved` | `[chapter_05_conservation]` | 当代保护边界与方法 | `internal_reference_only` | `false` | `draft` | 待补真实来源 |
| `SRC_TBD_OUTRO_01` | `待验证项` | `E2_unresolved` | `[chapter_06_outro]` | 方法回收与边界重申 | `internal_reference_only` | `false` | `draft` | 仅服务总结，不引入新事实 |

## 来源类型操作说明
- 真实来源补录后，必须写明 `source_type`，并按 `contracts/evidence_scale.md` 的默认映射赋级。
- 若需将某条来源升级到 `E4_confirmed`，必须在 `notes` 或配套 research 文档中说明升级依据。
- 若来源存在权限问题，`copyright_status` 不得写成 `cleared_for_downstream`。

## 确定项
- 本表为 `source_ref` 唯一主表。
- 当前阶段允许占位 `source_ref`，但默认只作为 `待验证项` 工作对象。
- 未登记来源不得进入 `video/*` 或 `keyframes/*`。

## 待验证项
- 首批真实来源条目。
- 来源类型到 `E4_confirmed` 的升级样本。
- 版权状态在后续视频输出阶段的细化规则。

## 禁止项
- 禁止使用“官方资料”“馆方资料”“网络资料”等泛称替代 `source_ref`。
- 禁止未登记来源进入主规划文件。
- 禁止将 `E2_unresolved` 或 `E1_unverified` 来源包装为可直接下游使用的主证据。
