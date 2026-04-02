# 00 Master Spec

## 文档定位
本文件是本项目唯一的上位治理文件，用于约束 `母规范 → Seedance 2.0 视频规划 → keyframe 映射 → 章节规格 → VSCode 前端构建` 的全部冻结决策。

本文件不是创意提案、分镜稿、网页文案、组件设计稿或实现说明。下游文档不得覆盖本文件，只能在本文件允许的范围内细化。

## 冻结原则
1. 先冻结规则，再规划资产，再拆解章节，再进入实现。
2. 先定义真实性模式，再决定表现形式。
3. 先定义证据边界，再允许解释与诗化。
4. 下游任何便利性判断不得改写上游冻结项。
5. 旧仓库内容只能作为结构参考，不得作为历史证据。

## 一句话定义
本项目是一个面向大众的长滚动沉浸式交互阅读系统：以综合场景游历为叙事容器，以空间游历为主轴，以礼制、结构、工艺、保护为嵌套层，在不改写史实层的前提下，通过受控的氛围化表达建立可理解、可复述、可审校的中国古代建筑阅读路径。

## 项目方向冻结项
- audience priority：大众优先。
- narrative container：综合场景游历容器。
- narrative axis：空间游历主轴。
- nested layers：礼制秩序、结构智慧、工艺细部、当代保护。
- poetic limit：诗化增强只作用于氛围层，不得改写史实层。
- scope limit：当前范围以六类建筑类型为上限，不扩写为百科全域站点。

## 生产链路定义
1. 本文件冻结顶层方向、边界、字段、职责与验收规则。
2. `docs/*` 负责共享规范与章节映射。
3. `contracts/*` 负责 truth、evidence、schema、命名四类操作合同。
4. `chapters/*` 负责章节级冻结规格，不重复共享规则。
5. `review/*` 负责冻结记录与红队审计，不替代规范正文。

## 综合场景真实性声明
“综合场景游历容器”是 `evidence-constrained composite teaching scene`，即受证据约束的综合教学场景，不宣称其为一个真实完整保存至今的单一遗址，除非某章节或某资产被明确标记为 `truth_mode=A_real_anchor`。

任何未标记 `truth_mode=A_real_anchor` 的内容，均不得对外暗示“这就是某一真实完整建筑群的连续实景”。

## 共享字段与共享合同引用
- `contracts/truth_mode.md`：定义 `scene_mode` 与 `truth_mode_default` 的允许范围、禁止范围、披露义务、混用规则。
- `contracts/evidence_scale.md`：定义 `evidence_grade`、`source_ref`、`dispute_flag` 的操作规则。
- `contracts/field_schema.md`：定义跨阶段字段、枚举、必填矩阵、空值规则、依赖关系。
- `contracts/naming_rules.md`：定义 `chapter_id`、`asset_id`、`frame_id`、文件名与 manifest 的绑定规则。

## 共享审校原则
1. 任何事实性信息必须具备 `evidence_grade` 与 `source_ref`。
2. 任何综合场景内容必须具备 `scene_mode` 或 `truth_mode_default`。
3. 任何争议内容必须具备 `dispute_flag`，且不得进入唯一结论层。
4. 任何核心知识点必须有 `canonical_owner`，不得由多个媒介各自改写。
5. 任何下游输出不得加入本文件未授权的新主题、新章节逻辑或新历史判断。

## 跨文件引用关系
| 文件 | 主责任 |
| --- | --- |
| `docs/01_scope_and_boundaries.md` | 范围、边界、排除项 |
| `docs/02_narrative_blueprint.md` | 总体教学逻辑与段落结构 |
| `docs/03_chapter_map.md` | 章节映射、章节字段、下游交接 |
| `docs/04_responsibility_matrix.md` | 视频/交互/程序动画职责与失败判定 |
| `docs/05_asset_policy.md` | 素材分类、替代禁令、降级约束 |
| `docs/06_risks_and_validation.md` | 风险、关口、验证、阻断 |
| `docs/07_change_control.md` | 冻结、变更、回退与更新矩阵 |

## 确定项
- 本文件为唯一上位治理文件。
- 项目方向冻结为：大众优先、空间游历主轴、综合场景游历容器、礼制/结构/工艺/保护嵌套层。
- 综合场景默认不是单一真实遗址声明。
- 网站实现、UI、路由、组件、动画、视频接入均不在本轮范围内。

## 待验证项
- 首批锚点案例名单与章节级证据锚点尚未冻结。
- 章节负载阈值、性能阈值与降级预算需在后续规划模板中量化。
- 审核角色的具体人员称谓可在组织层面调整，但职责边界不得调整。

## 禁止项
- 禁止把 prior repo content 当作历史证据。
- 禁止下游以实现便利为由覆盖本文件。
- 禁止输出分镜、文案、组件稿、路由稿、实现代码。
- 禁止将综合场景未标注地伪装为真实完整遗址。
