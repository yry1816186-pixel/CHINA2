# Case Anchor Register

## 文档目的
本文件用于统一登记各 `chapter_id` 在 pre-production 阶段可使用的 `case_anchor` 与 `case_support` 占位对象，确保后续 Seedance 2.0 视频规划与 keyframe 映射有统一入口，但不在证据未冻结时擅自补写真实案例。

## 使用规则
1. 本表是 `case_anchor` 与 `case_support` 的唯一注册入口。
2. 未在本表登记的案例占位符，不得进入 `video/*` 或 `keyframes/*`。
3. 本表当前只允许使用结构化占位符，不得在未通过 research 审核前填入未经核实的真实案例。
4. 任一占位符转为真实案例时，必须同步更新：
   - `research/evidence_manifest.md`
   - 对应 `video/*`
   - 对应 `keyframes/*`
   - `review/freeze_log.md`

## 字段说明
| 字段 | 说明 |
| --- | --- |
| `chapter_id` | 章节 ID，必须与 `contracts/field_schema.md` 一致 |
| `case_anchor` | 主锚点案例占位符或已冻结案例 ID |
| `case_support` | 辅助案例占位符集合 |
| `building_type` | 必须来自固定六类 `building_type` |
| `time_scope` | 时间边界，占位或冻结值 |
| `region_scope` | 地域边界，占位或冻结值 |
| `evidence_grade` | 当前证据等级 |
| `source_ref` | 证据索引 ID；未冻结时必须显式写 `待验证项` 状态 |
| `dispute_flag` | 是否争议 |
| `revision_status` | 当前状态，默认 `draft` 或 `reviewed` |

## 章节级占位注册表
| `chapter_id` | `case_anchor` | `case_support` | `building_type` | `time_scope` | `region_scope` | `evidence_grade` | `source_ref` | `dispute_flag` | `revision_status` | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `chapter_00_intro` | `TBD_CASE_ANCHOR_INTRO_01` | `[]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 仅用于入口真实性说明，不承载主知识点 |
| `chapter_01_orientation` | `TBD_CASE_ANCHOR_ORIENTATION_01` | `[TBD_CASE_SUPPORT_ORIENTATION_01]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 只服务路径与秩序建立 |
| `chapter_02_progression` | `TBD_CASE_ANCHOR_PROGRESSION_01` | `[TBD_CASE_SUPPORT_PROGRESSION_01, TBD_CASE_SUPPORT_PROGRESSION_02]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 只服务递进关系与身体阅读 |
| `chapter_03_structure` | `TBD_CASE_ANCHOR_STRUCTURE_01` | `[TBD_CASE_SUPPORT_STRUCTURE_01]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 结构高潮章可额外保留一个受限 `A_real_anchor` 候选 |
| `chapter_04_craft` | `TBD_CASE_ANCHOR_CRAFT_01` | `[TBD_CASE_SUPPORT_CRAFT_01, TBD_CASE_SUPPORT_CRAFT_02]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 用于工艺细部回到整体系统 |
| `chapter_05_conservation` | `TBD_CASE_ANCHOR_CONSERVATION_01` | `[TBD_CASE_SUPPORT_CONSERVATION_01]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 默认进入保护层说明，不进入单一实景证明 |
| `chapter_06_outro` | `TBD_CASE_ANCHOR_OUTRO_01` | `[]` | `待验证项` | `待验证项` | `待验证项` | `E2_unresolved` | `待验证项` | `false` | `draft` | 仅用于方法回收，不承担新事实引入 |

## 状态升级规则
- 从 `draft` 升级到 `reviewed` 的条件：
  - `building_type`、`time_scope`、`region_scope` 已有明确候选
  - 已补充至少一个有效 `source_ref`
  - 已由 `historical_reviewer` 复核
- 从 `reviewed` 升级到 `frozen` 的条件：
  - `evidence_grade` 至少达到允许进入目标层级的门槛
  - 无未披露争议
  - 已同步更新 `research/evidence_manifest.md`

## 确定项
- 本表为 `case_anchor` / `case_support` 唯一注册表。
- 当前阶段仅允许结构化占位符，不允许凭空填真实案例。
- 所有案例占位符默认处于 `待验证项` 状态。

## 待验证项
- 七个章节的首批真实锚点案例名单。
- `chapter_03_structure` 是否需要额外保留第二个结构锚点。
- 各章节辅助案例数量上限。

## 禁止项
- 禁止把 prior repo content 直接写成真实案例。
- 禁止在未补 `source_ref` 的情况下把占位符升级为 `reviewed`。
- 禁止在 `video/*` 与 `keyframes/*` 中使用未登记案例对象。
