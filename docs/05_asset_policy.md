# 05 Asset Policy

## 素材政策目的
本文件用于冻结素材类型、允许用途、替代禁令、真实性约束与降级关系，确保下游不会把素材当成万能解释工具。

## Asset classes
- `video`：承载进入、退场、氛围转场与受控的综合场景连续感。
- `2.5D`：承载空间递进、层次揭示、受控的结构过渡。
- `vector_programmatic`：承载路径、标注、对照、状态反馈、结构关系。
- `static_reference`：承载证据锚点、图版底、说明引用、静态保底内容。

说明：`static_reference` 是素材政策类名；进入 schema 时，其常见映射为 `representation_mode=static`，并常与 `asset_role=evidence_reference` 搭配使用。

## Allowed use by class
| `asset_class` | 允许用途 |
| --- | --- |
| `video` | 氛围层、节奏层、综合场景进入与退出 |
| `2.5D` | 受控空间递进、分层显隐、解释性过渡 |
| `vector_programmatic` | 核心解释层、比较层、标注层、状态层 |
| `static_reference` | 证据锚点层、静态保底层、引用层 |

## Prohibited substitution matrix
| 原始需求 | 正确主类 | 禁止替代 |
| --- | --- | --- |
| 核心事实解释 | `vector_programmatic` / `static_reference` | 纯 `video` |
| 结构关系比较 | `vector_programmatic` | 纯 `video`, 纯 `static_reference` |
| 证据锚点引用 | `static_reference` | `video` |
| 氛围进入与离场 | `video` / `2.5D` | 纯 `static_reference` |
| 章节状态反馈 | `vector_programmatic` | `video` |

## 综合场景真实性限制
- `truth_mode=B_composite_teaching_scene` 的资产不得渲染成未经披露的纪录片式单一实景证明。
- `truth_mode=C_abstract_explanatory_layer` 的资产不得伪装成真实保留空间连续镜头。
- 未显式标记 `truth_mode=A_real_anchor` 的资产，不得使用“实景唯一锚定”语气。

## Asset disclosure obligations
每个资产至少必须具备：
- `chapter_id`
- `asset_id`
- `scene_mode`
- `evidence_grade`
- `source_ref`
- `layer_type`
- `asset_role`
- `representation_mode`
- `canonical_owner`
- `fallback_level`

## Mobile and low-bandwidth fallback relationship
- `A_full`：允许全部媒介共同工作。
- `B_reduced_motion`：削减自动运动，不削减事实层。
- `C_low_bandwidth`：压缩视频存在感，把核心解释转移到 `vector_programmatic` 与 `static_reference`。
- `D_static_minimum`：必须保留章节导航、`core_claim`、必要说明与证据可见性。

## 确定项
- 核心解释层不能被纯氛围媒体替代。
- 复合场景不能未披露地被表现为单一真实遗址实景。
- 每个资产必须被标注其 `representation_mode`、`scene_mode` 与 `fallback_level`。

## 待验证项
- 各类资产在各章节中的比例与上限待在后续资产清单中量化。
- 各类设备对应的默认运行模式待验证。

## 禁止项
- 禁止把综合场景做成“纪录片式实地证明”而不披露。
- 禁止用视频承载不可暂停比较的知识。
- 禁止把结构说明静态化到无法理解的程度。
