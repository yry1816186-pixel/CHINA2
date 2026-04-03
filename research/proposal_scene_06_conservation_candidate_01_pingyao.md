# Proposal — `scene_06_conservation_boundary` Candidate 01 (Ancient City of Ping Yao)

## Document status
- `proposal_status`: `public-source-backed_candidate_pending_review`
- `scene_id`: `scene_06_conservation_boundary`
- `chapter_id`: `chapter_05_conservation`
- `candidate_sequence`: `01`
- `candidate_case_role`: `primary_anchor_candidate`
- `prepared_date`: `2026-04-03`

## Why this proposal exists
This file proposes the first real candidate anchor direction for `scene_06_conservation_boundary`.

It does **not** declare the candidate accepted.
It does **not** backfill the research master tables yet.
It only records a concrete public-source-backed proposal that can now enter review.

## Proposed candidate case
- `candidate_case_name`: `Ancient City of Ping Yao`
- `candidate_case_name_zh`: `平遥古城`
- `candidate_case_anchor_id`: `CANDIDATE_PINGYAO_CONSERVATION_01`
- `building_type`: `historic urban fabric / traditional dwellings and associated temples`
- `time_scope`: `14th–20th century urban fabric, pending internal verification scope`
- `region_scope`: `Pingyao County, Shanxi`

## Why this case is a serious fit
- Public UNESCO material identifies Ping Yao as an exceptionally well-preserved traditional Han Chinese city whose urban fabric reflects imperial Chinese architectural and planning development over more than five centuries.
- UNESCO states that Ping Yao has preserved authentic layout, architectural style, building materials, construction craftsmanship and traditional technology, as well as the internal relations between the overall cityscape and its elements.
- UNESCO also states that the property is under authentic and integrated conservation through conservation and management plans, intervention and maintenance measures, and heritage-setting improvement.
- UNESCO’s conservation and revitalisation programme page describes a conservation master plan that aims to enhance heritage conservation and liveability while balancing social-economic development, tourism pressure and urban life.
- The same programme page explicitly says the framework protects authenticity and integrity, historical layers, traditional courtyard houses and living-city conditions, rather than treating conservation as simple renewal.

## What this candidate could support
### Stronger support
- scene-level anchor for explaining that conservation is not the same as restoring a site to a brand-new state
- support for distinguishing historic layers, ongoing care, liveability and tourism pressure within one conservation-boundary discussion
- support for framing conservation as management, maintenance, intervention control and balance, rather than miracle-style renewal

### Likely limited support
- it should not automatically support every conservation claim for all Chinese heritage buildings
- it should not automatically justify specific material-intervention claims for a single timber component without more focused sources
- it should not automatically settle every technical conservation method question without additional case-specific support

## Proposed source bundle

### Source A
- `candidate_source_ref`: `SRC_CANDIDATE_PINGYAO_UNESCO_01`
- `source_type`: `official_world_heritage_description`
- `source_title_or_description`: `UNESCO World Heritage Centre — Ancient City of Ping Yao`
- `source_owner_or_institution`: `UNESCO World Heritage Centre`
- `source_date_if_known`: `current official property page reviewed 2026-04-03`
- `copyright_status`: `public web reference; downstream asset reuse not implied`
- `supports_which_claim_exactly`:
  - Ping Yao is an exceptionally well-preserved traditional Han Chinese city
  - the property preserves authentic layout, architectural style, building materials, construction craftsmanship and traditional technology
  - the property is under authentic and integrated conservation through management plans and maintenance/intervention measures
  - site management aims to balance heritage conservation, tourism development and urban construction
- `initial_evidence_grade_recommendation`: `E3_supported` for scene-level conservation-boundary anchoring, with some direct identity/property-description claims potentially reviewable toward `E4_confirmed`
- `source_url`: `https://whc.unesco.org/en/list/812/`

### Source B
- `candidate_source_ref`: `SRC_CANDIDATE_PINGYAO_PROGRAMME_01`
- `source_type`: `official_conservation_programme_description`
- `source_title_or_description`: `UNESCO World Heritage Centre — Conservation and revitalisation programme of Ancient City of Ping Yao`
- `source_owner_or_institution`: `UNESCO World Heritage Centre / programme page`
- `source_date_if_known`: `programme page reviewed 2026-04-03`
- `copyright_status`: `public web reference; downstream asset reuse not implied`
- `supports_which_claim_exactly`:
  - the comprehensive conservation master plan aims to enhance heritage conservation and liveability while supporting sustainable development
  - the framework protects authenticity and integrity and preserves historical layers of the city
  - restoration guidelines, subsidies and integrated management are used instead of a simplistic renewal logic
  - the programme explicitly addresses the balance between tourism development and liveability
- `initial_evidence_grade_recommendation`: `E3_supported`
- `source_url`: `https://whc.unesco.org/en/canopy/ping-yao/`

## Risk review
- `single_site_misreading_risk`: `medium`
- `false_documentary_risk`: `medium`
- `restoration-overclaim_risk`: `medium_if_visual_language_becomes_before-after_promo`
- `why_risk_is_not_low`:
  - Ping Yao is visually strong and publicly famous enough that it could pull the scene toward a city-as-proof reading
  - the conservation scene therefore still needs strict disclosure and must remain focused on boundary explanation, not destination promotion

## Recommended provisional judgment
- `candidate_anchor_decision`: `promising_primary_anchor_candidate`
- `candidate_source_decision`: `promising_support_bundle`
- `recommended_path_after_review`: `review_for_backfill_after_claim-scope_tightening`

## What still needs review before backfill
- define the exact claim scope allowed from the UNESCO property page versus the programme page
- decide which claims remain only `E3_supported` and which direct identity/property-description claims may be treated more strongly
- decide whether an additional more case-specific support source is needed for intervention methodology before packet tightening
- keep the scene focused on conservation boundary, not on tourism or revitalisation success narrative

## Not allowed at this stage
- do not treat this proposal as already accepted into `research/evidence_manifest.md`
- do not replace `TBD_CASE_ANCHOR_CONSERVATION_01` yet
- do not rewrite the packet as if a complete conservation proof or restoration success narrative has been approved
