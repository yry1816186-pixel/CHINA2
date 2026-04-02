# 00 Keyframe Schema

## 文档目的
本文件用于定义从 Seedance 规划或未来视频输出中提取 keyframe 时必须使用的字段、必填规则和命名原则。它是 `contracts/field_schema.md` 在 keyframe 阶段的专用展开。

## Keyframe 必备字段
| 字段 | 说明 |
| --- | --- |
| `frame_id` | keyframe 唯一 ID |
| `asset_id` | 上游资产 ID；若尚未生成，则用 `planned_scene_id` 过渡绑定 |
| `chapter_id` | 必填 |
| `segment_id` | 必填 |
| `scene_mode` | 必填 |
| `case_anchor` | 可为 `待验证项` 占位 |
| `evidence_grade` | 必填 |
| `source_ref` | 必填，不允许泛称 |
| `layer_type` | 必填 |
| `asset_role` | 必填 |
| `motion_owner` | 必填 |
| `fallback_level` | 必填 |
| `interaction_dependency` | 必填 |
| `canonical_owner` | 必填 |
| `review_gate` | 默认 `keyframe_review` |
| `revision_status` | 默认 `draft` |
| `forbidden_payload` | 必填 |

## Keyframe 阶段附加字段
| 字段 | 说明 |
| --- | --- |
| `keyframe_role` | 本帧在章节中的功能，不得写成镜头动作 |
| `extraction_reason` | 为什么需要抽出该帧 |
| `interaction_candidate` | 后续可能承接的交互类型，占位即可 |
| `chapter_alignment_note` | 与章节 `core_claim` 的对应说明 |

## 取值规则
- `scene_mode` 必须沿用上游 scene matrix，不得临时改写。
- `keyframe_role` 只能描述解释功能、比较功能、转场功能、证据功能。
- `extraction_reason` 必须可回指章节目标，不得写“看起来好看”。

## 确定项
- keyframe 不是 shot，也不是网页组件。
- keyframe 阶段必须完整继承 frozen schema 字段。
- keyframe 只能细化章节，不得改写章节逻辑。

## 待验证项
- `keyframe_role` 的受控枚举是否需要单独冻结。
- `interaction_candidate` 的最终命名集合待验证。

## 禁止项
- 禁止用自然语言泛称代替字段。
- 禁止在 keyframe schema 里写前端组件或动画实现。
- 禁止把 keyframe 变成 storyboard。
