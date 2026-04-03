# Backfill Bundle — Scene 03 + Scene 06 (v1)

## 文档定位
本文件是 `scene_03_structure_primary` 与 `scene_06_conservation_boundary` 的首版主表回填 bundle。

它不是正式主表本身，
不是冻结结论，
也不是外部执行授权。

它的作用是把：
- 哪些候选可进入正式主表回填审查；
- 该写成什么短 claim scope；
- 回填后哪些 scene / packet 字段需要同步；

一次性整理为可执行清单。

## 适用 scene
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`

---

## Part A — Scene 03 backfill package

### A1. Candidate anchor under review
- `chapter_id`: `chapter_03_structure`
- `scene_id`: `scene_03_structure_primary`
- `candidate_case_anchor_id`: `CANDIDATE_FOGUANG_EAST_HALL_01`
- `candidate_case_name`: `Foguang Temple East Hall / 佛光寺东大殿`
- `provisional_status`: `reviewable_with_scope_limits`
- `recommended_current_grade_floor`: `E3_supported`

### A2. Proposed evidence rows to register
#### Row 1
- `source_ref`: `SRC_CANDIDATE_FOGUANG_UNESCO_01`
- `source_type`: `official_world_heritage_description`
- `default_evidence_grade`: `E3_supported`
- `applicable_chapter_ids`: `[chapter_03_structure]`
- `claim_scope`: `East Hall identity as major surviving Tang timber building; bounded use for structure-anchor explanation; no documentary proof extension`
- `copyright_status`: `public_web_reference_only`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Use only for controlled structure-anchor explanation; do not extend to blanket structural claims`

#### Row 2
- `source_ref`: `SRC_CANDIDATE_FOGUANG_STRUCTURAL_STUDY_01`
- `source_type`: `scholarly_article`
- `default_evidence_grade`: `E3_supported`
- `applicable_chapter_ids`: `[chapter_03_structure]`
- `claim_scope`: `Limited support for Tang column-frame discussion and straight tenon joint style reference linked to Foguang Temple East Hall`
- `copyright_status`: `public_web_reference_only`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Do not use as blanket support for all load-path or bracket-set claims`

### A3. Proposed case-anchor row adjustment
- replace target row: `chapter_03_structure`
- `case_anchor`: `CANDIDATE_FOGUANG_EAST_HALL_01`
- `case_support`: `[TBD_CASE_SUPPORT_STRUCTURE_01]`
- `building_type`: `hall / Buddhist timber hall`
- `time_scope`: `Tang dynasty (candidate scope under review)`
- `region_scope`: `Mount Wutai, Shanxi`
- `evidence_grade`: `E3_supported`
- `source_ref`: `SRC_CANDIDATE_FOGUANG_UNESCO_01`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Candidate anchor only; keep scene in C_abstract_explanatory_layer; no documentary-style proof use`

### A4. Short claim scope for scene-level use
Safe short claim scope draft:
- `Foguang Temple East Hall` may be used as a bounded candidate anchor for explaining that structural organization and hierarchy are central to architectural reading in ancient Chinese timber architecture.
- Current use must remain explanatory, not documentary.
- Current support does not justify totalizing claims about all Chinese ancient timber structures.

### A5. Required sync points after master-table acceptance
If A2 + A3 are accepted:
- update `research/priority_scene_hardening_sheet.md`
- update `video/03_scene_matrix.md`
- update `video/20_priority_scene_candidate_packets.md`

Recommended sync direction:
- move scene from pure TBD state to reviewed candidate state
- keep packet status as non-execution-authorized
- tighten language toward bounded structure explanation

---

## Part B — Scene 06 backfill package

### B1. Candidate anchor under review
- `chapter_id`: `chapter_05_conservation`
- `scene_id`: `scene_06_conservation_boundary`
- `candidate_case_anchor_id`: `CANDIDATE_PINGYAO_CONSERVATION_01`
- `candidate_case_name`: `Ancient City of Ping Yao / 平遥古城`
- `provisional_status`: `reviewable_with_scope_limits`
- `recommended_current_grade_floor`: `E3_supported`

### B2. Proposed evidence rows to register
#### Row 1
- `source_ref`: `SRC_CANDIDATE_PINGYAO_UNESCO_01`
- `source_type`: `official_world_heritage_description`
- `default_evidence_grade`: `E3_supported`
- `applicable_chapter_ids`: `[chapter_05_conservation]`
- `claim_scope`: `Property identity, authenticity/integrity framing, integrated conservation and management context for bounded conservation-boundary explanation`
- `copyright_status`: `public_web_reference_only`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Do not extend to blanket proof for all conservation methodologies`

#### Row 2
- `source_ref`: `SRC_CANDIDATE_PINGYAO_PROGRAMME_01`
- `source_type`: `official_conservation_programme_description`
- `default_evidence_grade`: `E3_supported`
- `applicable_chapter_ids`: `[chapter_05_conservation]`
- `claim_scope`: `Bounded support for conservation/liveability/tourism balance, historical-layer preservation, restoration guidelines and integrated management discussion`
- `copyright_status`: `public_web_reference_only`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Use only for conservation-boundary explanation; do not convert into restoration-success narrative`

### B3. Proposed case-anchor row adjustment
- replace target row: `chapter_05_conservation`
- `case_anchor`: `CANDIDATE_PINGYAO_CONSERVATION_01`
- `case_support`: `[TBD_CASE_SUPPORT_CONSERVATION_01]`
- `building_type`: `historic urban fabric / traditional dwellings and associated heritage structures`
- `time_scope`: `14th–20th century urban fabric (candidate scope under review)`
- `region_scope`: `Pingyao County, Shanxi`
- `evidence_grade`: `E3_supported`
- `source_ref`: `SRC_CANDIDATE_PINGYAO_UNESCO_01`
- `dispute_flag`: `false`
- `revision_status`: `reviewed_candidate`
- `notes`: `Candidate anchor only; keep scene boundary-focused; no tourism-promo or restoration-miracle framing`

### B4. Short claim scope for scene-level use
Safe short claim scope draft:
- `Ancient City of Ping Yao` may be used as a bounded candidate anchor for explaining conservation as authenticity/integrity management, historical-layer preservation, and balance among conservation, liveability and tourism pressure.
- Current use must remain boundary-focused and explanatory, not promotional.
- Current support does not justify totalizing claims about all Chinese conservation practice.

### B5. Required sync points after master-table acceptance
If B2 + B3 are accepted:
- update `research/priority_scene_hardening_sheet.md`
- update `video/03_scene_matrix.md`
- update `video/20_priority_scene_candidate_packets.md`

Recommended sync direction:
- move scene from pure TBD state to reviewed candidate state
- keep packet status as non-execution-authorized
- tighten language toward conservation-boundary explanation rather than renewal imagery

---

## Global guardrails
- Do not interpret this bundle as automatic master-table acceptance.
- Do not raise either candidate above `E3_supported` by default.
- Do not let candidate identity override truth-mode restrictions.
- Do not convert reviewed candidates into documentary or promo-style downstream assets.
