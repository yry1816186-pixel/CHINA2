# 04 Output Review Checklist

## 文档目的
本文件用于审查 Seedance 2.0 输出是否仍然符合 frozen planning package 的 truth、evidence、chapter、asset 和 fallback 规则。

## Review checklist
| 检查项 | 通过标准 | 失败后动作 |
| --- | --- | --- |
| `chapter_id` 一致 | 输出可唯一映射回 `chapter_id` | 退回 scene matrix |
| `scene_mode` 一致 | 输出未违背 `A/B/C` 模式声明 | 退回 truth 审查 |
| `evidence_grade` 合法 | 未把 `E2/E1` 写成主事实层 | 退回 evidence 审查 |
| `source_ref` 可追踪 | 每个输出能追溯到登记来源 | 退回 evidence manifest |
| `asset_role` 一致 | 输出与章节职责匹配 | 退回 chapter brief |
| `motion_owner` 一致 | 输出未让错误媒介越权 | 退回 responsibility matrix |
| `fallback_level` 可执行 | 输出在对应降级级别仍有替代路径 | 退回 asset policy |
| `negative_constraints` 未违背 | 无人物、仪式、伪实景、神怪等违规 | 直接 block |
| composite 披露成立 | `B` 模式未被误读为单一实景 | 直接 block |
| 结构高潮未视频独占 | `chapter_03_structure` 仍有非视频解释路径 | 直接 block |

## 审查动作
1. 先核对字段。
2. 再核对 truth/evidence。
3. 再核对媒介职责。
4. 最后核对降级与无障碍路径。

## Blocker conditions
- 出现未披露的单一实景宣称。
- 出现人物/仪式/服饰自动补写。
- 出现 prior repo content 被当作来源。
- 出现核心事实只能靠视频理解。
- 出现 `source_ref` 缺失或泛称。

## 确定项
- 本清单是 Seedance 输出审查的强制清单。
- 任何 blocker 都会阻止进入 keyframe 规划。
- 审查顺序必须先字段、后 truth/evidence、再媒介。

## 待验证项
- 组织是否需要增加额外审查人签署位。
- 是否需要把清单拆为章节版与总表版。

## 禁止项
- 禁止把 review 只写成“整体不错”。
- 禁止跳过 blocker。
- 禁止在未通过清单前继续下游。
