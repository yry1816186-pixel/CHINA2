# Red Team Review

## 文档定位
本文件记录对冻结版规划包的高压审计结果，只聚焦仍可能导致返工、误读、误实现、历史漂移、审美失控与技术越界的失败模式。

本文件不提供创意建议，不提供实现方案，不扩展主题。

## 仍然存在的失败模式
| `risk_id` | 漏洞位置 | 漏洞类型 | 为什么危险 | 最可能被误用的方式 | 修补建议 |
| --- | --- | --- | --- | --- | --- |
| `R-01` | `contracts/truth_mode.md` + `docs/00_master_spec.md` | 综合场景被误读为实景 | B 模式若披露不够硬，用户会默认是真实完整遗址 | 直接把 B 层视频当纪录片输出 | 强制所有 B 层资产带披露字段，章节级显示 `scene_mode` |
| `R-02` | `contracts/evidence_scale.md` | 证据等级被偷换 | 二手整理、机构科普、旧仓库可能被抬成事实层 | 把 E3/E2 写成主结论 | 维持 source-type 默认等级，不满足条件不升级 |
| `R-03` | `contracts/field_schema.md` | 字段空值或泛称 | 一旦 `source_ref`、`evidence_grade` 泛化，链路就不可追踪 | 用“官方资料”“馆方资料”糊过去 | 设定空值禁入与泛称禁入 |
| `R-04` | `docs/03_chapter_map.md` | 章节负载过载 | 章节若没有论点预算，会塞满信息而失去主线 | 一章里同时讲太多事实 | 用章节负载预算限制 `core_claim` 和锚点数量 |
| `R-05` | `docs/04_responsibility_matrix.md` | 媒介越权 | 视频被当万能解释工具，交互与程序动画失去责任边界 | 把解释层全部压给视频 | 强制 `去视频测试`、`去交互测试`、`去程序动画测试` |
| `R-06` | `docs/05_asset_policy.md` | 替代关系失控 | 核心解释层如果被纯氛围层替代，会直接损坏理解链 | 用漂亮视频替代结构说明 | 锁定 `canonical_owner` 和替代禁令 |
| `R-07` | `docs/06_risks_and_validation.md` | 门禁变成口号 | 有关口但没有阻断权，就会带病推进 | review 只写“建议优化” | 关口必须有 blocker 和回退动作 |
| `R-08` | `docs/07_change_control.md` | 冻结后私改 | 一处改动不回写上下游会造成版本漂移 | 先改文件后补日志 | 强制变更分类与下游更新矩阵 |
| `R-09` | `contracts/truth_mode.md` | `B` 与 `C` 混用无披露 | 内部知道是示意层，外部看起来像实景 | 章节中局部切到 C 但不标 | 要求单资产单主模式，章节切换点显式标记 |
| `R-10` | `contracts/naming_rules.md` | ID 与文件名脱钩 | 名称和 manifest 不一致会让后续全链路失追踪 | 临时重命名文件 | 任何重命名必须同步 manifest 与 change log |
| `R-11` | `docs/01_scope_and_boundaries.md` | 范围外内容渗入 | 现代仿古、影视置景、主题公园最容易被混入 | 用“氛围不错”掩盖来源问题 | 增加范围外对象黑名单，禁止扩类 |
| `R-12` | `docs/02_narrative_blueprint.md` | 章节被做成视觉切片 | 有五段结构但没预算时，章节会只剩节奏和氛围 | 追求“每段都很好看” | 绑定学习结果和章节完成判据 |

## 最容易被 Agent 偷懒的点
- `source_ref` 被写成泛称，而不是可追踪索引。
- `evidence_grade` 被默认抬高，避免标注不确定。
- `scene_mode` 被省略，导致综合场景被默认为实景。
- `forbidden_payload` 只写标题，不写具体禁用对象。
- `chapter_goal` 有了，但 `core_claim` 和 `learning_outcome` 为空泛。
- `mobile_fallback_level` 被留空，默认按桌面表现处理。
- `canonical_owner` 被多媒介同时占用。
- `review_gate` 只记名称，不记通过条件。
- `revision_status` 只写 draft/frozen，不写 superseded。
- `dispute_flag` 被忽略，争议内容直接进主层。

## 如何封死偷懒
- 将 `source_ref` 规定为唯一索引 ID，不接受泛称。
- 将 `evidence_grade` 与 `source_type` 绑定，默认等级不可随意上调。
- 将 `scene_mode` 设为强制字段，缺失即无效。
- 将 `forbidden_payload` 写成可审查对象清单，而不是标题。
- 将 `core_claim` 与 `learning_outcome` 设为章节必填，不允许空话。
- 将 `mobile_fallback_level` 设为 chapter spec 必填。
- 将 `canonical_owner` 设为唯一主责任，不允许并列。
- 将 `review_gate` 和 `pass_condition` 绑定。
- 将 `superseded` 作为强制版本状态写入命名与变更流程。
- 将 `dispute_flag` 与唯一结论层做硬隔离。

## 最容易出现幻觉或伪知识的点
| `risk_point` | 可能的错误表述 | 如何用字段/规则防止 |
| --- | --- | --- |
| 中轴与对称 | “中国古代建筑核心就是对称” | 术语表区分 `axis` 与 `symmetry`，禁止绝对化总括 |
| 斗拱功能 | “斗拱就是抗震的决定性核心” | `evidence_grade` + `source_ref` 必填，争议项带 `dispute_flag` |
| 飞檐意义 | “飞檐只是为了好看” | 在章节 `core_claim` 中要求功能与结构关系说明，不允许单因果 |
| 彩画意义 | “彩画只是装饰层” | 资产 `layer_type` 需标 `annotation_layer` 或 `fact_layer`，禁止误入纯装饰叙述 |
| 保护目标 | “修缮就是恢复原样” | 保护章必须绑定 `core_claim` 与 `evidence_grade`，明确最小干预与持续照护，不得翻新化 |
| 综合场景 | “观众穿越某真实建筑群” | `truth_mode=B_composite_teaching_scene` 必须披露 |
| 跨时代演进 | “从唐到清一路连续升级” | `time_scope` 必须限定比较边界 |
| 全部古建 | “中国古代建筑都……” | `building_type` 与 `time_scope`、`region_scope` 必填，禁止无限外推 |
| 人物礼仪 | “画面中可见当时礼仪活动” | `forbidden_payload` 默认禁止人物与仪式再现 |
| 旧仓库内容 | “项目里原来就这么写” | 旧仓库仅结构参考，默认 `E1_unverified` |

## 当前规则如何阻断
- `contracts/truth_mode.md` 阻断把 B/C 伪装成 A。
- `contracts/evidence_scale.md` 阻断把 E2/E1 升格为最终事实。
- `contracts/field_schema.md` 阻断空字段、泛称字段和多主责任字段。
- `docs/04_responsibility_matrix.md` 阻断视频越权解释。
- `docs/05_asset_policy.md` 阻断媒介替代错误。
- `docs/07_change_control.md` 阻断冻结后私改。

## Remaining 待验证项
- 首批锚点案例名单。
- 章节级 `case_anchor` / `case_support`。
- 章节负载预算与信息密度阈值。
- `a11y_level` 组织标准。
- review 表单的人员头衔与审批链。
- 需要在 research 索引中补齐的 source-type 到 `E4_confirmed` 的边界样本。

## 确定项
- 规划包当前只能进入规划型下游，不允许进入网站实现。
- 综合场景默认是受证据约束的教学场景。
- 旧仓库内容只可作为结构参考。
- 争议内容必须显式标记，不能静默进入唯一结论层。

## 待验证项
- 章节级锚点案例与证据等级边界尚未完全冻结。
- 章节负载阈值与降级阈值尚未量化。
- 组织层面的审查人头衔可后续细化。

## 禁止项
- 禁止用视频掩盖证据不足。
- 禁止把综合场景当实景纪录片输出。
- 禁止把 review 写成泛泛建议。
- 禁止在未验证项上直接下结论。
