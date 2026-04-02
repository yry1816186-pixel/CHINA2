# Proposal — `scene_03_structure_primary` Candidate 01 (Foguang Temple East Hall)

## Document status
- `proposal_status`: `public-source-backed_candidate_pending_review`
- `scene_id`: `scene_03_structure_primary`
- `chapter_id`: `chapter_03_structure`
- `candidate_sequence`: `01`
- `candidate_case_role`: `primary_anchor_candidate`
- `prepared_date`: `2026-04-03`

## Why this proposal exists
This file proposes the first real candidate anchor direction for `scene_03_structure_primary`.

It does **not** declare the candidate accepted.
It does **not** backfill the research master tables yet.
It only records a concrete public-source-backed proposal that can now enter review.

## Proposed candidate case
- `candidate_case_name`: `Foguang Temple East Hall`
- `candidate_case_name_zh`: `佛光寺东大殿`
- `candidate_case_anchor_id`: `CANDIDATE_FOGUANG_EAST_HALL_01`
- `building_type`: `hall / Buddhist timber hall`
- `time_scope`: `Tang dynasty (built 857, pending internal verification scope)`
- `region_scope`: `Mount Wutai, Shanxi`

## Why this case is a serious fit
- It is an extant Tang timber hall with unusually strong historical and structural importance.
- Public UNESCO material identifies the East Main Hall of Foguang Temple as a major surviving Tang timber building.
- UNESCO evaluation material describes the 7-bay East Hall as the largest and most intact of the surviving Tang structures and says it demonstrates sophisticated girder-and-beam timber techniques.
- A recent structural research paper explicitly states that its experimental Tang column-frame model resembles the straight tenon joint style of the Foguang Temple East Hall.

## What this candidate could support
### Stronger support
- scene-level anchor for explaining that structural hierarchy is central to the architectural reading
- support for using a Tang timber hall as a structural relation anchor rather than as a decorative image source
- support for discussing girder/beam timber techniques and column-frame logic at an explanatory level

### Likely limited support
- it should not automatically support every generalized claim about all Chinese ancient timber buildings
- it should not automatically justify a documentary-style real-site reconstruction look
- it should not automatically settle every bracket-set or load-path claim without more specific supporting sources

## Proposed source bundle

### Source A
- `candidate_source_ref`: `SRC_CANDIDATE_FOGUANG_UNESCO_01`
- `source_type`: `official_world_heritage_description`
- `source_title_or_description`: `UNESCO World Heritage Centre — Mount Wutai`
- `source_owner_or_institution`: `UNESCO World Heritage Centre`
- `source_date_if_known`: `current official property page / advisory material reviewed 2026-04-03`
- `copyright_status`: `public web reference; downstream asset reuse not implied`
- `supports_which_claim_exactly`:
  - Foguang Temple East Hall is an important surviving Tang timber building
  - the East Hall is a 7-bay Tang hall
  - the East Hall demonstrates sophisticated girder-and-beam timber techniques
- `initial_evidence_grade_recommendation`: `E3_supported` for scene-level explanatory anchoring, with some direct identity claims potentially reviewable toward `E4_confirmed`
- `source_url`: `https://whc.unesco.org/en/list/1279/`
- `secondary_source_url`: `https://whc.unesco.org/document/152245`

### Source B
- `candidate_source_ref`: `SRC_CANDIDATE_FOGUANG_STRUCTURAL_STUDY_01`
- `source_type`: `scholarly_article`
- `source_title_or_description`: `Research on the Lateral Resistance of Column Frames in the Tang Dynasty: A Case Study of the Straight Tenon Joints Under Varied Vertical Load Levels`
- `source_owner_or_institution`: `Buildings (MDPI); authors from Nanjing Forestry University`
- `source_date_if_known`: `2024-12-25`
- `copyright_status`: `public web reference; downstream asset reuse not implied`
- `supports_which_claim_exactly`:
  - the study constructed a Tang column-frame experimental model resembling the straight tenon joint style of Foguang Temple East Hall
  - this supports using Foguang Temple East Hall as a candidate anchor for Tang column-frame structural relation discussion
- `initial_evidence_grade_recommendation`: `E3_supported`
- `source_url`: `https://www.mdpi.com/2075-5309/15/1/25`

## Risk review
- `single_site_misreading_risk`: `medium`
- `false_documentary_risk`: `high_if_over-literalized`
- `spectacle_overread_risk`: `high_if_used_as_visual hero object`
- `why_risk_is_not_low`:
  - the East Hall is historically important and visually legible enough that it could easily pull the scene toward a single-site documentary reading
  - the candidate should therefore remain inside `C_abstract_explanatory_layer` or other tightly controlled explanatory usage unless further review says otherwise

## Recommended provisional judgment
- `candidate_anchor_decision`: `promising_primary_anchor_candidate`
- `candidate_source_decision`: `promising_support_bundle`
- `recommended_path_after_review`: `review_for_backfill_after_claim-scope_tightening`

## What still needs review before backfill
- define the exact claim scope allowed from the UNESCO materials
- decide which claims remain only `E3_supported` and which direct identity/building-description claims may be treated more strongly
- decide whether an additional support source is needed specifically for bracket-set / load-path explanation before packet tightening
- keep the scene in `C_abstract_explanatory_layer` unless the review explicitly authorizes any narrower real-anchor usage

## Not allowed at this stage
- do not treat this proposal as already accepted into `research/evidence_manifest.md`
- do not replace `TBD_CASE_ANCHOR_STRUCTURE_01` yet
- do not rewrite the packet as if a real-site documentary proof has been approved
