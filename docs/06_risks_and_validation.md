# 06 Risks and Validation

## 风险文档目的
本文件用于定义技术、史实、审美三类风险的失败模式、验证角色、验证关口、通过条件与回退动作。

## Gate sequence
1. `video_first_review`
2. `keyframe_review`
3. `chapter_spec_freeze`
4. `web_manifest_review`

任何关口出现 blocker，禁止进入下一关。

## 技术风险表
| `risk_id` | `risk_description` | `failure_mode` | `validator_role` | `validation_gate` | `pass_condition` | `rollback_action` |
| --- | --- | --- | --- | --- | --- | --- |
| `T-01` | 视频承担过多解释负荷 | 去视频后章节失效 | `technical_validator` | `video_first_review` | 通过 `去视频测试` | 退回 `docs/04_responsibility_matrix.md` 重新分配 |
| `T-02` | 降级路径不存在 | `D_static_minimum` 下无法形成理解链 | `technical_validator` | `chapter_spec_freeze` | 低带宽与静态保底仍可理解 | 退回 `docs/05_asset_policy.md` 与章节文件补足 |
| `T-03` | 字段不完整导致链路断裂 | assets 无法被 keyframe 或 manifest 追踪 | `spec_owner` | `keyframe_review` | 必填字段完整 | 退回 `contracts/field_schema.md` 与清单 |
| `T-04` | 资产命名与 manifest 脱节 | ID 与文件名不一致 | `technical_validator` | `web_manifest_review` | 命名与 manifest 一一对应 | 按 `contracts/naming_rules.md` 重整 |

## 史实风险表
| `risk_id` | `risk_description` | `failure_mode` | `validator_role` | `validation_gate` | `pass_condition` | `rollback_action` |
| --- | --- | --- | --- | --- | --- | --- |
| `H-01` | 综合场景误读为真实完整遗址 | 未披露 `scene_mode=B/C` | `historical_reviewer` | `video_first_review` | 综合状态对内对外均可识别 | 退回 `contracts/truth_mode.md` 与资产说明 |
| `H-02` | 推测内容被写成事实 | `evidence_grade` 低于门槛仍进入主层 | `historical_reviewer` | `keyframe_review` | 主层仅含允许等级内容 | 退回 `contracts/evidence_scale.md` 校正 |
| `H-03` | 人物/仪式被模型自动补写 | 出现未授权历史场景再现 | `historical_reviewer` | `video_first_review` | 无违规人物与仪式暗示 | 退回资产规划并追加负向约束 |
| `H-04` | 术语误用导致伪知识 | 章节说法与术语表冲突 | `spec_owner` | `chapter_spec_freeze` | 术语引用一致 | 退回术语与章节规格统一 |

## 审美风险表
| `risk_id` | `risk_description` | `failure_mode` | `validator_role` | `validation_gate` | `pass_condition` | `rollback_action` |
| --- | --- | --- | --- | --- | --- | --- |
| `A-01` | 国潮化与公式化古风 | 红金黑堆砌替代理解 | `aesthetic_reviewer` | `video_first_review` | 风格不盖过解释层 | 退回素材策略与章节表达 |
| `A-02` | 氛围压过事实层 | 用户只记得气氛不记得论点 | `aesthetic_reviewer` | `chapter_spec_freeze` | `core_claim` 可独立成立 | 退回章节规格补充解释层 |
| `A-03` | 保护章风格断裂 | 变成另一套现代展陈页面逻辑 | `aesthetic_reviewer` | `web_manifest_review` | 保护章与全站叙事连续 | 退回章节逻辑与资产归属 |

## 阻断权顺位
1. `historical_reviewer`
2. `spec_owner`
3. `technical_validator`
4. `aesthetic_reviewer`

当上位阻断存在时，下位不得以进度理由放行。

## 确定项
- 四道关口为强制关口。
- 每个风险必须绑定角色、关口、通过条件、回退动作。
- 史实阻断优先级高于审美偏好与实现便利。

## 待验证项
- 各关口的具体表单字段、量化阈值和签署人名称待在 review 模板中细化。

## 禁止项
- 禁止没有 blocker 记录就口头放行。
- 禁止把修复动作写成代码任务。
- 禁止跳关。
