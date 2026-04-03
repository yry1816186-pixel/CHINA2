# CHINA2

一个面向大众的中国古代建筑长滚动叙事项目仓库。

本仓库当前主线已经不再只是“纯规范仓库”。
当前状态是：
- 规范冻结与研究收口持续有效
- first-wave 视频规划与主表回填已进入受限执行状态
- 已新增 `web/` 前端执行壳，用于承接样片、验证长滚动节奏与文本/视频关系

它仍然**不是最终成品网站仓库**，
也仍然**不是全量最终视频资产仓库**。

## 项目目标

- 以综合场景游历作为教学容器，帮助大众建立可理解、可复述、可审校的古代建筑阅读路径。
- 以空间游历为主轴，组织礼制、结构、工艺、保护四层知识。
- 在诗化表达存在的前提下，保持史实层不可改写。

核心上位规范见：docs/00_master_spec.md

## 当前阶段边界

- 已冻结：总规范、范围边界、章节映射、职责矩阵、风险与变更控制。
- 已建立：first-wave 关键 scene 的候选锚点、证据主表、scene matrix 与受控 packet。
- 已新增：`web/` 执行壳，用于 first-wave 样片接入与 long-scroll 验证。
- 未完成：最终前端工程化、最终播放器系统、最终成品级动效与整站实现。

范围与边界见：docs/01_scope_and_boundaries.md
当前唯一推荐入口见：docs/09_canonical_working_entry.md

## 当前最重要的执行口径

当前不要做这几件事：
- 不要把 `video/11_full_generation_plan.md` 和 `video/12_full_prompt_packets_master.md` 当作默认全量执行入口。
- 不要把仓库现状误判为“已经可以直接一次性全量生成最终视频 + 最终整站”。
- 不要把未冻结的 intro 入口强行做成高地标、单遗址、纪录式入口。

当前应该做的是：
- 只围绕 first-wave 的受限真实候选推进
- 先接入和验证 3 条样片：
  - `scene_03_structure_primary`
  - `scene_06_conservation_boundary`
  - `scene_01_orientation_order`
- 保持 `scene_00_intro_entry` 为保守未冻结入口，直到找到更低误读风险的真实候选

## 仓库结构

- chapters/: 七章级规格文件，定义每章目标与约束。
- contracts/: truth、evidence、字段、命名等跨阶段合同。
- docs/: 主规范与治理文档，约束全链路。
- keyframes/: 场景到关键帧映射规则与抽取标准。
- research/: 证据清单、案例锚点、待验证项、候选 proposal 与 claim-scope 审查。
- review/: 冻结日志与红队审查记录。
- video/: 视频主规范、场景矩阵、priority packet 与生成约束。
- web/: first-wave 前端执行壳，用于本地样片接入和长滚动验证。

## 叙事与章节

- 章节共 7 个：
  - chapter_00_intro
  - chapter_01_orientation
  - chapter_02_progression
  - chapter_03_structure
  - chapter_04_craft
  - chapter_05_conservation
  - chapter_06_outro
- 叙事段落共 5 段，映射到上述 7 章执行。

章节映射见：docs/03_chapter_map.md

## first-wave 当前状态

已进入主表受限候选状态的 3 个 scene：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`

仍保持未冻结入口状态的 scene：
- `scene_00_intro_entry`

主表入口见：
- `research/evidence_manifest.md`
- `research/case_anchor_register.md`
- `video/03_scene_matrix.md`
- `video/20_priority_scene_candidate_packets.md`

## 本地最小运行方式

### 运行前端执行壳
```bash
cd web
python -m http.server 8000
```
访问：
- `http://localhost:8000`

### 接入第一批样片
将样片放入 `web/assets/`，并在 `web/scenes.manifest.json` 中为对应 scene 填写：
- `poster`
- `video`

推荐接入顺序：
1. `scene_03_structure_primary`
2. `scene_06_conservation_boundary`
3. `scene_01_orientation_order`

## 协作约定

- 变更前先检查是否触及冻结项。
- 涉及 truth_mode 或 evidence 规则调整时，优先更新 contracts/ 与 docs/。
- 每轮输出后在 review/ 记录审查结论与风险。
- 任何新视频资产接入前，先核对其 scene 是否已经进入主表受限候选状态。

## 版本管理

- 默认分支：main
- 远程仓库：origin (GitHub)

## 当前现实判断

本仓库现在已经足够支撑：
- first-wave 高质量样片接入
- long-scroll 原型验证
- 受控 research 与 packet 协同

但它还不等于：
- 最终成片已经完成
- 最终顶级整站已经完成
- 所有章节都已进入正式执行状态
