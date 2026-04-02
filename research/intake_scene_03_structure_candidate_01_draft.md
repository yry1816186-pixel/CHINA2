# Intake Record Draft — `scene_03_structure_primary` Candidate 01

## 文档定位
本文件是 `scene_03_structure_primary` 的第一条 candidate evidence intake 记录草案。

它的作用不是宣布已经找到真实案例或真实来源，
而是把“第一条候选证据记录应该怎么填、怎么审、怎么回填”压成一个具体对象。

本文件不是正式证据主表，
不是正式案例登记表，
不是冻结结论，
也不是外部视频生成口令。

## 当前约束来源
本记录必须同时服从以下上游约束：
- `chapter_03_structure` 的核心论断是：建筑的气势与形式秩序来自结构组织与层次关系，而不是独立装饰的堆叠。
- 本章默认 `truth_mode_default` 为 `C_abstract_explanatory_layer`，且禁止仅靠氛围视频解释结构逻辑。fileciteturn171file0
- `C_abstract_explanatory_layer` 只能说明关系，不得包装成真实保留空间连续性或纪录式证明。fileciteturn172file0
- `E2_unresolved` 只可进入 research 与内部验证区，不得进入最终下游产物。fileciteturn173file0
- 当前 `scene_03_structure_primary` 仍挂在 `TBD_CASE_ANCHOR_STRUCTURE_01`、`SRC_TBD_STRUCTURE_01` 与 `E2_unresolved` 上。fileciteturn126file0

---

## A. Intake meta
- `intake_id`: `INTAKE_SCENE03_STRUCTURE_CANDIDATE_01_DRAFT`
- `scene_id`: `scene_03_structure_primary`
- `chapter_id`: `chapter_03_structure`
- `candidate_sequence`: `01`
- `submitted_by`: `assistant_baseline_hardening_branch`
- `submission_date`: `2026-04-03`
- `current_status`: `candidate`
- `linked_scene_intake`: `research/intake_scene_03_structure_primary_draft.md`
- `linked_collection_brief`: `research/scene_03_structure_candidate_collection_brief.md`

## B. Candidate target type
- `candidate_role`: `primary_anchor_candidate`
- `candidate_goal`: 为结构主解释 scene 提供第一条主锚点候选与第一组来源候选
- `why_this_candidate_exists`:
  - 当前 `scene_03_structure_primary` 不能继续只靠占位 source 与占位 anchor 维持；
  - 需要先形成第一条主锚点候选记录，才能进入正式 backfill 判断；
  - 该候选必须优先支撑“主结构关系”，不是支撑装饰、风貌或视觉震撼。

## C. Candidate case anchor (to be filled during real intake)
- `candidate_case_anchor_id`: `TBD_REAL_CANDIDATE`
- `candidate_case_name`: `TBD_REAL_CANDIDATE`
- `building_type`: `TBD`
- `time_scope`: `TBD`
- `region_scope`: `TBD`
- `why_this_case_fits_this_scene`:
  - 需能支撑柱、梁、铺作、屋盖等主结构关系中的至少一个稳定链条；
  - 需能服务“结构如何参与形式秩序”这一解释层目标；
  - 需能在抽象解释层中保留结构可读性，而不是依赖实景纪录感成立。
- `why_this_case_might_fail`:
  - 若它只能支撑局部构件细节而不能支撑主关系，则不应做 primary anchor；
  - 若它的地标性强到会把 scene 拉向单一真实遗址纪录式误读，则不适合当前主 scene；
  - 若它会诱导视觉团队追求“结构奇观”而不是“结构可读”，则应降级为 support 或弃用。

## D. Candidate source bundle (to be filled during real intake)
- `candidate_source_ref`: `TBD_REAL_SOURCE`
- `source_type`: `TBD`
- `source_title_or_description`: `TBD`
- `source_owner_or_institution`: `TBD`
- `source_date_if_known`: `TBD`
- `copyright_status`: `TBD`
- `supports_which_claim_exactly`:
  - 至少需支持以下之一：
    1. 一条明确的主结构层级关系；
    2. 结构组织与形式秩序之间的可解释联系；
    3. 哪些关系可进入解释层，哪些关系仍必须保守表达。
- `what_this_source_does_not_support`:
  - 不自动支持全部建筑通例；
  - 不自动支持完整实景连续性；
  - 不自动支持结构结论的唯一终局版本。
- `initial_evidence_grade_recommendation`: `target_E3_supported_minimum`

## E. Pre-review risk screen
- `single_site_misreading_risk`: `unknown_until_real_candidate_is_entered`
- `false_documentary_risk`: `high_by_default_if_visualized_too literally`
- `spectacle_overread_risk`: `high`
- `decorative-distraction_risk`: `medium`
- `reason_for_high_risk`:
  - 结构章天然容易被视觉团队拍成“技术奇观”或“实景剖示纪录片”；
  - 在真实来源未补齐前，任何看起来很强的结构画面都可能越界成伪证据。

## F. Review questions for this candidate
1. 这条候选到底支持的是哪一条主结构链，而不是哪种“震撼感”？
2. 它是否足以成为 primary anchor，还是只能做 support？
3. 它是否会诱导我们把解释层拍成纪录片式真实场所证明？
4. 它能否帮助把 evidence 从 `E2_unresolved` 推到至少 `E3_supported`？
5. 它是否仍要求 scene 保持严格的 `C_abstract_explanatory_layer` 披露？

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
2. 明确该候选支持的是哪条主结构关系
3. 完成一次 `primary_anchor vs support` 判断
4. 若通过，再进入 `research/evidence_manifest.md` 与 `research/case_anchor_register.md` 的正式回填流程

## 禁止项
- 禁止把本记录草案当作“已经找到真实主锚点”的证明。
- 禁止在未填真实来源前，把它当作 packet 放行依据。
- 禁止用视觉效果强弱替代结构证据强弱。
