# 10 Prompt Packets Batch 01

## 文档目的
本文件仅包含第一批小规模 prompt packets，用于首轮内部视频生成与 `video_first_review` 前的样片测试。

本文件直接继承：
- `video/09_prompt_writing_source_pack.md`
- `video/03_scene_matrix.md`
- `video/01_chapter_video_briefs.md`
- `docs/03_chapter_map.md`

---

## Packet 01
- `packet_id`: `packet_b01_01_intro_threshold`
- `chapter_id`: `chapter_00_intro`
- `scene_id`: `scene_00_intro_entry`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_INTRO_01`
- `asset_role`: `contextual_atmosphere`
- `motion_owner`: `video`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `low`
- `intended downstream use`: internal first-pass Seedance opening clip for truth-mode-friendly entry only; usable as an atmosphere-led threshold plate before later explanation layers
- `generation prompt`: slow forward drift toward the threshold of a composite teaching scene of ancient Chinese architecture, layered gate-courtyard depth, timber rooflines emerging through soft morning haze, calm restrained atmosphere, no site-specific landmark, no human activity, one coherent approach path, subtle light shift from shadow to soft daylight, readable from a single representative frame, dignified entrance mood, cinematic but controlled, realistic materials, restrained contrast, no spectacle ending
- `negative constraints`:
  - no people, no crowd, no guards, no tourists
  - no ceremony, no reenactment, no costume, no banners
  - no single named heritage-site look or iconic landmark silhouette
  - no documentary claim of one fully preserved real site
  - no fantasy glow, no mythical creature, no supernatural atmosphere
  - no fast montage, no drone swoop, no aggressive epic climax
  - no hard factual inserts, no restoration claim, no timeline claim
- `failure conditions`:
  - the shot reads like a promotion film for one specific palace or heritage site
  - figures, rituals, guards, or staged historical activity appear
  - the frame depends on extreme motion or multi-cut montage to make sense
  - the atmosphere becomes grandiose spectacle instead of controlled entry
- `retry strategy`:
  1. remove any landmark-like roof profile or overly unique gate composition
  2. reduce camera speed and keep a single forward threshold motion
  3. simplify lighting and lower contrast if the scene turns theatrical
  4. rebuild around one gate-courtyard relation instead of stacked reveals

## Packet 02
- `packet_id`: `packet_b01_02_order_entry`
- `chapter_id`: `chapter_01_orientation`
- `scene_id`: `scene_01_orientation_order`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_ORDER_01`
- `asset_role`: `supporting_transition`
- `motion_owner`: `video`
- `fallback_level`: `C_low_bandwidth`
- `mobile_risk`: `medium`
- `intended downstream use`: internal first-pass order-entry transition clip for chapter_01; designed to hand off to later vector path and hierarchy explanation rather than replace it
- `generation prompt`: controlled entrance into a composite teaching courtyard sequence that communicates order through threshold spacing, alignment, compression and release, gentle forward movement at walking height, clear directional reading, nested gates and open court progression, hierarchy felt through roof height, stair emphasis, shadow-to-light transition, restrained material palette, no iconic site identity, no people, no pageantry, no over-complete axial monumentality, the frame should still read as orientation and order when paused
- `negative constraints`:
  - no marching line, no ritual queue, no ceremonial approach
  - no throne-room spectacle, no imperial fantasy, no power pageant
  - no claim that symmetry alone explains the whole spatial logic
  - no one-site reconstruction look, no exact landmark duplication
  - no hyper-fast push, no rotating showcase camera, no montage edits
  - no interface overlay, no text baked into image
- `failure conditions`:
  - the scene looks like a ceremonial parade route rather than a spatial orientation cue
  - symmetry overwhelms depth and threshold reading
  - the shot turns into a generic majestic fly-through with no order cues
  - mobile viewing would lose the hierarchy because everything sits at one scale
- `retry strategy`:
  1. strengthen one or two threshold changes instead of showing many gates
  2. lower spectacle and remove overly centered monumental framing
  3. bring the camera closer to human walking height and slower pace
  4. add clearer compression-release rhythm through spacing, not decoration

## Packet 03
- `packet_id`: `packet_b01_03_progression_walk`
- `chapter_id`: `chapter_02_progression`
- `scene_id`: `scene_02_progression_path`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_ORDER_01`
- `asset_role`: `supporting_transition`
- `motion_owner`: `video`
- `fallback_level`: `C_low_bandwidth`
- `mobile_risk`: `medium`
- `intended downstream use`: internal first-pass spatial progression clip for chapter_02; intended to support later path/comparison overlays and test whether bodily progression reads without human actors
- `generation prompt`: walking-scale movement through a coherent composite teaching scene of ancient Chinese architecture, a sequence of compressed passage, pause, framed courtyard opening, slight turn, then gentle vertical lift in perception, body-led spatial progression without showing any body, clear change of near and far planes, controlled depth cues, calm continuous motion, no landmark specificity, no people, no ceremony, no action plot, the scene should express progression through space rather than through editing tricks
- `negative constraints`:
  - no person walking in frame, no point-of-view character story, no guide figure
  - no cross-region jump cuts disguised as one literal real site
  - no ritual staging, no dramatic encounter, no festival scene
  - no drone flight, no roller-coaster camera, no music-video montage
  - no giant reveal that turns the scene into spectacle tourism
  - no hard historical claim or named-site assertion
- `failure conditions`:
  - the shot reads as tourism aerial footage rather than bodily progression
  - progression is replaced by speed, cutting, or novelty
  - the sequence implies a single exact preserved site with documentary certainty
  - there is no readable pause-turn-lift rhythm when paused at key frames
- `retry strategy`:
  1. reduce the number of spatial beats to three or four clear transitions
  2. switch to slower walking-height motion with stronger foreground anchors
  3. remove aerial or sweeping moves that flatten bodily reading
  4. clarify one pause and one turn before any upward opening

## Packet 04
- `packet_id`: `packet_b01_04_structure_reveal`
- `chapter_id`: `chapter_03_structure`
- `scene_id`: `scene_03_structure_primary`
- `scene_mode`: `C_abstract_explanatory_layer`
- `truth_mode`: `C_abstract_explanatory_layer`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_STRUCTURE_01`
- `asset_role`: `primary_explanation`
- `motion_owner`: `2.5D`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `medium`
- `intended downstream use`: internal first-pass semi-abstract 2.5D structure reveal clip for chapter_03; intended to serve inside a non-video explanation stack, not as a standalone documentary proof
- `generation prompt`: semi-abstract 2.5D explanatory reveal of ancient Chinese timber architecture, clear column-beam-bracket-roof relationship, layered structural assembly and disassembly, restrained neutral backdrop, three-quarter cutaway readability, subtle depth parallax, no photoreal site footage, no fantasy effects, no decorative overload, visual emphasis on how structural tiers organize force and spatial presence, clean readable motion that can pause on one explanatory frame, precise and calm rather than spectacular
- `negative constraints`:
  - no photoreal heritage-site documentary look
  - no magical energy lines, glowing force fields, sparks, or mystical symbolism
  - no pure atmosphere clip with structure left unexplained
  - no impossible geometry, no floating roof without support logic
  - no decorative close-up replacing structural relation
  - no fast spin, no chaos explosion, no blockbuster mechanics
- `failure conditions`:
  - the shot looks like fantasy x-ray or mystical architecture rather than explanation
  - structure remains unreadable after the motion completes
  - the reveal depends on photoreal real-site illusion instead of abstract explanation
  - a paused frame cannot show the main column-beam-bracket order
- `retry strategy`:
  1. simplify to one structural stack and remove secondary flourishes
  2. change to a slower cutaway or exploded view with fewer moving layers
  3. remove any particles, glow, or dramatic color coding that suggests magic
  4. strengthen the visual order from base support to roof load path

## Packet 05
- `packet_id`: `packet_b01_05_craft_detail`
- `chapter_id`: `chapter_04_craft`
- `scene_id`: `scene_05_craft_detail`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_CRAFT_01`
- `asset_role`: `comparative_overlay`
- `motion_owner`: `2.5D`
- `fallback_level`: `C_low_bandwidth`
- `mobile_risk`: `medium`
- `intended downstream use`: internal first-pass craft-detail comparison clip for chapter_04; designed to sit beneath later labels or overlays that reconnect detail to the whole system
- `generation prompt`: close controlled study of ancient Chinese architectural craft details as part of a larger building system, begin on one material junction or joinery edge, reveal surface wear, tool marks, layered paint remnants, timber grain and bracket edge condition, then gently pull back just enough to show where the detail belongs in the larger construction, quiet and precise, no ornamental collage, no luxury fetish look, no site-specific identity, readable detail hierarchy even on a paused frame
- `negative constraints`:
  - no decorative pattern reel, no generic national-style ornament montage
  - no jewelry-like fetish close-up, no gold sparkle, no luxury commercial finish
  - no floating fragments detached from construction context
  - no overly shallow focus that hides structural belonging
  - no human hands, no craftsman reenactment, no workshop drama
  - no claim that detail alone explains the whole building
- `failure conditions`:
  - the clip becomes a pure ornament showcase with no system context
  - details appear brand new, glossy, or fantasy-polished
  - scale and placement in the larger architectural system remain unclear
  - mobile viewing loses all meaningful detail because the frame is too dense
- `retry strategy`:
  1. reduce the number of details and keep one main junction as the anchor
  2. add a gentler pullback that reconnects the detail to a visible component
  3. lower saturation and shine if the result feels decorative-commercial
  4. increase material texture clarity and reduce depth-of-field blur

## Packet 06
- `packet_id`: `packet_b01_06_conservation_boundary`
- `chapter_id`: `chapter_05_conservation`
- `scene_id`: `scene_06_conservation_boundary`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_CONSERVATION_01`
- `asset_role`: `evidence_reference`
- `motion_owner`: `vector_programmatic`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `medium`
- `intended downstream use`: internal first-pass low-motion conservation boundary plate for chapter_05; intended to sit under later vector or static evidence overlays and never act as the sole explanation
- `generation prompt`: very restrained low-motion plate showing the boundary between aged historic material and careful contemporary conservation intervention in ancient Chinese architecture, subtle contrast between weathered timber and measured repair zones, calm overcast light, stable composition, no triumphal restoration mood, no workers, no celebration, no glossy new finish, minimal camera drift only, designed to remain legible under later vector annotations and from a single paused frame
- `negative constraints`:
  - no before-and-after miracle reveal
  - no brand-new shining surfaces, no luxury renovation aesthetic
  - no workers, no tools in action, no ribbon cutting, no documentary restoration promo
  - no claim that conservation equals returning to original newness
  - no emotional climax, no heroic rebirth narrative
  - no busy motion that fights later overlays
- `failure conditions`:
  - the clip reads like a renovation advertisement
  - the difference between historic layer and care layer is visually erased
  - the scene becomes too new, too clean, or too celebratory
  - the video tries to carry the whole conservation argument without overlays
- `retry strategy`:
  1. flatten motion further and keep one clear repair boundary in frame
  2. desaturate and reduce shine if the image feels newly rebuilt
  3. emphasize material aging and restrained intervention rather than completion
  4. simplify composition so later labels can anchor without clutter

## Packet 07
- `packet_id`: `packet_b01_07_outro_lookback`
- `chapter_id`: `chapter_06_outro`
- `scene_id`: `scene_07_outro_exit`
- `scene_mode`: `B_composite_teaching_scene`
- `truth_mode`: `B_composite_teaching_scene`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_OUTRO_01`
- `asset_role`: `supporting_transition`
- `motion_owner`: `video`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `low`
- `intended downstream use`: internal first-pass controlled exit clip for chapter_06; intended for recap, taper, and look-back only, with no new knowledge payload
- `generation prompt`: quiet controlled exit from a composite teaching scene of ancient Chinese architecture, slow retreat or gentle turn-back glance across layered roofs, thresholds, and receding courtyard depth, late-afternoon or dusk softness, calm closure, no final spectacle, no new spatial surprise, no people, no ceremony, no triumph, image should feel like a reflective look-back that preserves method and atmosphere without claiming a final answer
- `negative constraints`:
  - no new landmark reveal, no surprise monument, no hidden climax
  - no triumphant ending, no celebratory pageant, no fireworks of mood
  - no added factual payload, no new case, no new theme branch
  - no people, no procession, no symbolic ruler presence
  - no sharp montage or escalating tempo
  - no documentary certainty that closes all interpretation
- `failure conditions`:
  - the ending introduces new content instead of tapering the existing frame
  - the scene becomes triumphant, conclusive, or monumentally final
  - a single paused frame cannot read as reflective exit or look-back
  - the atmosphere breaks continuity with the intro and prior chapters
- `retry strategy`:
  1. shorten motion and rely on one controlled retreat or turn-back move
  2. lower contrast and remove any spectacular late reveal
  3. reuse the visual vocabulary of thresholds and layered depth from the opening
  4. strip away any new object or composition that reads like a fresh claim
