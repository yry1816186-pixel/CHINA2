# Intake Record Draft — `scene_01_orientation_order` Candidate 01

## 文档定位
本文件是 `scene_01_orientation_order` 的第一条 candidate evidence intake 记录草案。

它的作用不是宣布已经找到真实案例或真实来源，
而是把“第一条候选证据记录应该怎么填、怎么审、怎么回填”压成一个具体对象。

本文件不是正式证据主表，
不是正式案例登记表，
不是冻结结论，
也不是外部视频生成口令。

## 当前约束来源
本记录必须同时服从以下上游约束：
- `chapter_01_orientation` 的核心论断是：建筑的秩序首先通过方向、路径与层级被组织出来，而不是先通过视觉装饰被感知。
- 本章默认 `truth_mode_default` 为 `B_composite_teaching_scene`，承担定向与秩序建立，不承担结构高潮或工艺高潮。
- 本章禁止把对称简单等同于全部中轴逻辑，禁止礼仪队列或使用场景，禁止用纯装饰性画面替代方向与层级说明。
- `B_composite_teaching_scene` 不能冒充单一真实完整遗址；`E2_unresolved` 不得进入最终下游产物。
- 当前 `scene_01_orientation_order` 仍挂在 `TBD_CASE_ANCHOR_ORIENTATION_01`、`SRC_TBD_ORDER_01` 与 `E2_unresolved` 上。

---

## A. Intake meta
- `intake_id`: `INTAKE_SCENE01_ORIENTATION_CANDIDATE_01_DRAFT`
- `scene_id`: `scene_01_orientation_order`
- `chapter_id`: `chapter_01_orientation`
- `candidate_sequence`: `01`
- `submitted_by`: `assistant_baseline_hardening_branch`
- `submission_date`: `2026-04-03`
- `current_status`: `candidate`
- `linked_scene_intake`: `research/intake_scene_01_orientation_order_draft.md`
- `linked_collection_brief`: `research/scene_01_orientation_candidate_collection_brief.md`

## B. Candidate target type
- `candidate_role`: `primary_anchor_candidate`
- `candidate_goal`: 为定向与秩序 scene 提供第一条主锚点候选与第一组来源候选
- `why_this_candidate_exists`:
  - 当前 `scene_01_orientation_order` 不能继续只靠占位 source 与占位 anchor 维持；
  - 需要先形成第一条主锚点候选记录，才能进入正式 backfill 判断；
  - 该候选必须优先支撑“方向、路径、阈限与层级”，不是支撑庄严感、中轴感或礼仪感。

## C. Candidate case anchor (to be filled during real intake)
- `candidate_case_anchor_id`: `TBD_REAL_CANDIDATE`
- `candidate_case_name`: `TBD_REAL_CANDIDATE`
- `building_type`: `TBD`
- `time_scope`: `TBD`
- `region_scope`: `TBD`
- `why_this_case_fits_this_scene`:
  - 需能支撑方向、路径、阈限与层级中的至少一个稳定关系链；
  - 需能服务“秩序来自空间组织”这一解释层目标；
  - 需能在综合教学场景中保留秩序可读性，而不是依赖礼仪或权力叙事成立。
- `why_this_case_might_fail`:
  - 若它只能支撑“庄严感”而不能支撑秩序关系，则不应做 primary anchor；
  - 若它会诱导 scene 滑向单一完整中轴实景或礼仪路线叙事，则不适合当前主 scene；
  - 若它会诱导视觉团队追求“庄严奇观”而不是“秩序可读”，则应降级为 support 或弃用。

## D. Candidate source bundle (to be filled during real intake)
- `candidate_source_ref`: `TBD_REAL_SOURCE`
- `source_type`: `TBD`
- `source_title_or_description`: `TBD`
- `source_owner_or_institution`: `TBD`
- `source_date_if_known`: `TBD`
- `copyright_status`: `TBD`
- `supports_which_claim_exactly`:
  - 至少需支持以下之一：
    1. 一条明确的方向 / 路径 / 阈限 / 层级关系；
    2. 秩序如何通过空间组织被感知；
    3. 哪些秩序判断可进入解释层，哪些礼制 / 权力外推仍必须保守表达。
- `what_this_source_does_not_support`:
  - 不自动支持全部中轴逻辑；
  - 不自动支持礼仪路线或权力表演结论；
  - 不自动支持单一真实完整遗址连续性证明。
- `initial_evidence_grade_recommendation`: `target_E3_supported_minimum`

## E. Pre-review risk screen
- `single_site_misreading_risk`: `unknown_until_real_candidate_is_entered`
- `false_documentary_risk`: `medium_to_high_if_visualized_as_one_real_axis`
- `ceremonial-overread_risk`: `high`
- `power-route_overread_risk`: `high`
- `reason_for_high_risk`:
  - 定向章天然容易被视觉团队拍成礼仪队列、权力路线或宏大中轴奇观；
  - 在真实来源未补齐前，任何看起来很强的秩序画面都可能越界成伪证据。

## F. Review questions for this candidate
1. 这条候选到底支持的是哪条秩序关系，而不是哪种“庄严感”？
2. 它是否足以成为 primary anchor，还是只能做 support？
3. 它是否会诱导我们把综合教学场景拍成礼仪路线或单一完整中轴证明？
4. 它能否帮助把 evidence 从 `E2_unresolved` 推到至少 `E3_supported`？
5. 它是否仍要求 scene 保持严格的综合教学场景披露？

## G. Candidate decision stub
- `candidate_anchor_decision`: `pending_real_candidate`
- `candidate_source_decision`: `pending_real_source`
- `recommended_path_after_review`: `pending`
- `possible_outcomes`:
  - `accept_as_primary_anchor_candidate`
  - `downgrade_to_support_candidate`
  - `keep_for_boundary_only`
  - `reject`

## H. Backfill readiness test
本记录只有同时满足以下条件，才允许进入正式 backfill：
- [ ] 已写入真实 `candidate_case_name`
- [ ] 已写入真实 `candidate_source_ref`
- [ ] 已明确 `source_type`
- [ ] 已明确 `supports_which_claim_exactly`
- [ ] 已明确 `what_this_source_does_not_support`
- [ ] 已完成最小风险审查
- [ ] 已给出 `primary_anchor / support / reject` 初步判断

## I. Immediate next action
1. 用真实候选值替换本记录中的 `TBD_REAL_CANDIDATE` 与 `TBD_REAL_SOURCE`
2. 明确该候选支持的是哪条秩序关系
3. 完成一次 `primary_anchor vs support` 判断
4. 若通过，再进入 `research/evidence_manifest.md` 与 `research/case_anchor_register.md` 的正式回填流程

## 禁止项
- 禁止把本记录草案当作“已经找到真实主锚点”的证明。
- 禁止在未填真实来源前，把它当作 packet 放行依据。
- 禁止用庄严感或中轴感替代秩序证据强弱。
