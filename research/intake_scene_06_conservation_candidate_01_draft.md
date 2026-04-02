# Intake Record Draft — `scene_06_conservation_boundary` Candidate 01

## 文档定位
本文件是 `scene_06_conservation_boundary` 的第一条 candidate evidence intake 记录草案。

它的作用不是宣布已经找到真实案例或真实来源，
而是把“第一条候选证据记录应该怎么填、怎么审、怎么回填”压成一个具体对象。

本文件不是正式证据主表，
不是正式案例登记表，
不是冻结结论，
也不是外部视频生成口令。

## 当前约束来源
本记录必须同时服从以下上游约束：
- `chapter_05_conservation` 的核心论断是：保护不是“恢复崭新原貌”，而是以证据为约束、以最小干预为原则、以持续照护与公开展示平衡为目标的当代责任。
- 本章主要任务是区分历史层、当代保护层、展示层与解释边界，避免把保护误写为翻新或复古复原。
- 本章默认 `truth_mode_default` 为 `B_composite_teaching_scene`，主要资产职责是 `evidence_reference`，表现方式以静态与受控程序性说明为主。
- `B_composite_teaching_scene` 不能冒充单一真实完整遗址；`E2_unresolved` 不得进入最终下游产物。
- 当前 `scene_06_conservation_boundary` 仍挂在 `TBD_CASE_ANCHOR_CONSERVATION_01`、`SRC_TBD_CONSERVATION_01` 与 `E2_unresolved` 上。

---

## A. Intake meta
- `intake_id`: `INTAKE_SCENE06_CONSERVATION_CANDIDATE_01_DRAFT`
- `scene_id`: `scene_06_conservation_boundary`
- `chapter_id`: `chapter_05_conservation`
- `candidate_sequence`: `01`
- `submitted_by`: `assistant_baseline_hardening_branch`
- `submission_date`: `2026-04-03`
- `current_status`: `candidate`
- `linked_scene_intake`: `research/intake_scene_06_conservation_boundary_draft.md`
- `linked_collection_brief`: `research/scene_06_conservation_candidate_collection_brief.md`

## B. Candidate target type
- `candidate_role`: `primary_anchor_candidate`
- `candidate_goal`: 为保护边界 scene 提供第一条主锚点候选与第一组来源候选
- `why_this_candidate_exists`:
  - 当前 `scene_06_conservation_boundary` 不能继续只靠占位 source 与占位 anchor 维持；
  - 需要先形成第一条主锚点候选记录，才能进入正式 backfill 判断；
  - 该候选必须优先支撑“保护边界”，不是支撑“修得很新”或“对比很强”的效果。

## C. Candidate case anchor (to be filled during real intake)
- `candidate_case_anchor_id`: `TBD_REAL_CANDIDATE`
- `candidate_case_name`: `TBD_REAL_CANDIDATE`
- `building_type`: `TBD`
- `time_scope`: `TBD`
- `region_scope`: `TBD`
- `why_this_case_fits_this_scene`:
  - 需能支撑历史层、照护层、展示层与干预边界中的至少一个清晰关系；
  - 需能服务“保护不是翻新”的解释层目标；
  - 需能在综合教学场景或受控解释层中保持边界可读性，而不是依赖焕新效果成立。
- `why_this_case_might_fail`:
  - 若它只能支撑“修完更好看”而不能支撑保护边界，则不应做 primary anchor；
  - 若它会诱导 scene 滑向翻新宣传或修复奇迹叙事，则不适合当前主 scene；
  - 若它过强地绑定单一完整遗址并削弱综合教学场景披露，则应降级为 support 或弃用。

## D. Candidate source bundle (to be filled during real intake)
- `candidate_source_ref`: `TBD_REAL_SOURCE`
- `source_type`: `TBD`
- `source_title_or_description`: `TBD`
- `source_owner_or_institution`: `TBD`
- `source_date_if_known`: `TBD`
- `copyright_status`: `TBD`
- `supports_which_claim_exactly`:
  - 至少需支持以下之一：
    1. 一条明确的保护边界关系；
    2. 保护不是恢复崭新原貌这一解释边界；
    3. 哪些现状说明可进入解释层，哪些推测仍必须保守表达。
- `what_this_source_does_not_support`:
  - 不自动支持所有保护工作的统一定律；
  - 不自动支持“修好了就是更真实”；
  - 不自动支持把现状、复原、争议混写成单一事实。
- `initial_evidence_grade_recommendation`: `target_E3_supported_minimum`

## E. Pre-review risk screen
- `single_site_misreading_risk`: `unknown_until_real_candidate_is_entered`
- `false_documentary_risk`: `medium_to_high_if_visualized_as_complete_proof`
- `restoration-overclaim_risk`: `high`
- `promo-overread_risk`: `high`
- `reason_for_high_risk`:
  - 保护章天然容易被视觉团队拍成“焕新宣传片”或“修复奇迹片”；
  - 在真实来源未补齐前，任何看起来很强的保护对比画面都可能越界成伪证据。

## F. Review questions for this candidate
1. 这条候选到底支持的是哪一条保护边界，而不是哪种“改善效果”？
2. 它是否足以成为 primary anchor，还是只能做 support？
3. 它是否会诱导我们把保护拍成翻新宣传或单一完整遗址证明？
4. 它能否帮助把 evidence 从 `E2_unresolved` 推到至少 `E3_supported`？
5. 它是否仍要求 scene 保持严格的综合教学场景 / 解释层披露？

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
2. 明确该候选支持的是哪条保护边界关系
3. 完成一次 `primary_anchor vs support` 判断
4. 若通过，再进入 `research/evidence_manifest.md` 与 `research/case_anchor_register.md` 的正式回填流程

## 禁止项
- 禁止把本记录草案当作“已经找到真实主锚点”的证明。
- 禁止在未填真实来源前，把它当作 packet 放行依据。
- 禁止用画面对比强弱替代保护证据强弱。
