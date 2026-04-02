# 07 Change Control

## 变更控制目的
本文件用于定义哪些内容已经冻结、哪些内容可变、如何审批变更、如何同步下游，以及冻结违规时如何回退。

## Frozen items list
以下内容属于冻结项：
- 一句话定义
- 项目方向冻结项
- 七个 `chapter_id`
- 五段 `segment_id`
- 六类 `building_type`
- `scene_mode` 与 `truth_mode_default` 的定义与使用边界
- `evidence_grade` 的等级体系与使用权限
- 视频/交互/程序动画职责矩阵
- 禁止替代关系
- 关口序列与阻断顺位

## Mutable items list
以下内容可在不改变上位含义的前提下细化：
- 锚点案例名单
- `case_anchor` 与 `case_support`
- 章节级证据锚点
- 量化预算与阈值
- 审核角色的组织称谓
- 评审模板中的操作说明

## Change classes
### `Class_1_structure`
涉及主题、范围、章节、truth/evidence 合同、字段集合、职责矩阵、风险关口的变更。

### `Class_2_fact`
涉及案例归属、证据等级、争议标记、章节论断的变更。

### `Class_3_editorial`
不改变含义的排版、表述精修、链接修订。

## Approval flow
| 变更级别 | 必需审批 |
| --- | --- |
| `Class_1_structure` | `spec_owner` + `historical_reviewer` + 受影响关口负责人 |
| `Class_2_fact` | `historical_reviewer` + `spec_owner` |
| `Class_3_editorial` | 文件负责人登记即可 |

## Mandatory downstream update matrix
| 变更对象 | 必须同步更新的下游产物 |
| --- | --- |
| truth boundary 或 `scene_mode` 规则 | `docs/*`, `contracts/truth_mode.md`, `contracts/field_schema.md`, 受影响 `chapters/*`, `review/*` |
| `evidence_grade` 规则 | `contracts/evidence_scale.md`, `contracts/field_schema.md`, `docs/06_risks_and_validation.md`, 受影响章节与 review |
| `chapter_id` | `docs/03_chapter_map.md`, `contracts/naming_rules.md`, 全部 `chapters/*`, `review/*`, 后续 manifest |
| `building_type` | `docs/01_scope_and_boundaries.md`, `contracts/field_schema.md`, 受影响章节与资产策略 |
| 职责矩阵 | `docs/04_responsibility_matrix.md`, `docs/05_asset_policy.md`, `docs/06_risks_and_validation.md`, 受影响章节 |

## Versioning and rollback rules
- 冻结包版本使用 `spec_version` 统一管理。
- 任一 `Class_1_structure` 变更都必须提升版本并记录影响面。
- 任一未登记变更视为无效变更，相关产物视为不可交接。
- 回退必须恢复文档、合同、章节、review 的一致版本，不允许局部回退。

## Freeze breach handling
- 若下游发现未登记的结构级改动，必须停止消费该版本。
- 若发现字段、命名、truth/evidence 规则不一致，按最近有效冻结版回退。
- 任何冻结违规必须进入 `review/freeze_log.md` 记录。

## 确定项
- `Class_1_structure` 与 `Class_2_fact` 变更未经批准不得执行。
- truth boundary、chapter ID、field schema 变更必须同步下游全部受影响文件。
- 冻结违规必须回退到最近有效冻结版。

## 待验证项
- 具体版本号命名策略和审批表单模板待在 review 目录中细化。

## 禁止项
- 禁止口头变更。
- 禁止下游先改后报。
- 禁止只改一个文件而不更新关联文件。
