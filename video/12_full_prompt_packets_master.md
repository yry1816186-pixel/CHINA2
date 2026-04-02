# 12 Full Prompt Packets Master

## 文档目的
本文件是当前冻结规划范围内的正式视频生成 prompt 主包，覆盖全部 8 个已规划 scene。

本文件不是创意说明，不是样片清单，不是 shot list。
本文件中的每条 packet 都必须可直接复制进入外部视频生成流程。

## 使用规则
- 每条 packet 必须按其自身 `scene_mode` / `truth_mode` 执行。
- 若某条 packet 与 scene matrix 的原始 `scene_mode` 不同，以 `video/14_scene_exclusion_and_downgrade_list.md` 中记录的降级结果为准。
- `E2_unresolved` 只允许以 atmospheric / interpretive / schematic 方式承载，不允许写成唯一事实确证。
- 不允许自行补写具体遗址名、朝代归属、修缮事实、案例归属。

---

## Packet 01
- `packet_id`: `packet_f01_01_intro_threshold`
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
- `intended downstream use`: final opening threshold clip for chapter_00, used to establish composite viewing mode, entry atmosphere, and controlled architectural presence before non-video explanation layers appear
- `generation prompt`: slow dignified forward drift toward the threshold of a composite teaching scene of ancient Chinese architecture, layered gate and courtyard depth, restrained timber rooflines emerging through soft morning haze, calm entrance atmosphere, one coherent path inward, subtle shadow-to-light transition, realistic materials, no site-specific landmark identity, readable from a single paused frame, strong threshold feeling without spectacle, cinematic but disciplined, no dramatic climax, no tourism-promo tone
- `negative constraints`:
  - no people, no crowd, no guards, no tourists
  - no ritual, no procession, no reenactment, no costumes, no banners
  - no single named heritage-site silhouette or landmark-specific reconstruction
  - no documentary claim that this is one fully preserved real site
  - no fantasy glow, no mythical creature, no supernatural force
  - no drone dive, no fast montage, no epic trailer energy
  - no hard historical insert, no restoration claim, no timeline claim
- `failure conditions`:
  - the clip reads like publicity footage for one specific heritage site
  - human presence or staged historical action appears
  - the frame only works through motion and loses meaning when paused
  - the mood becomes spectacular, triumphant, or theme-park-like
- `retry strategy`:
  1. remove any overly iconic gate silhouette or unique skyline shape
  2. simplify to one threshold and one courtyard depth relation
  3. reduce motion speed and lower contrast if the result feels theatrical
  4. cut any epic light shaft or promotional monumentality

## Packet 02
- `packet_id`: `packet_f01_02_order_entry`
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
- `intended downstream use`: formal order-entry clip for chapter_01, used to show direction, threshold spacing, hierarchy and controlled approach before vector path explanation overlays
- `generation prompt`: controlled entrance into a composite teaching courtyard sequence that communicates order through threshold spacing, alignment, compression and release, walking-height forward motion, nested gateways and open court progression, hierarchy felt through roof height, stair emphasis, framing and pause points, restrained material palette, no iconic site identity, no pageantry, no complete monument-axis spectacle, the image must still read as directional order and spatial hierarchy when paused
- `negative constraints`:
  - no ceremonial queue, no marching line, no ritual approach
  - no imperial pageant, no throne-room fantasy, no power spectacle
  - no claim that symmetry alone explains all spatial logic
  - no one-site reconstruction look, no exact landmark duplication
  - no fast push-in, no rotating showcase camera, no montage editing
  - no typography, no UI overlay, no text baked into frame
- `failure conditions`:
  - the clip becomes a ceremonial route instead of a spatial order cue
  - symmetry dominates so heavily that threshold reading disappears
  - the result looks like generic majestic fly-through footage
  - mobile viewing collapses the hierarchy into one flat layer
- `retry strategy`:
  1. reduce the number of gates and strengthen only one or two threshold changes
  2. lower monumentality and keep the camera at walking height
  3. replace spectacle framing with spacing-based hierarchy cues
  4. emphasize compression-release rhythm rather than centered symmetry

## Packet 03
- `packet_id`: `packet_f01_03_progression_path`
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
- `intended downstream use`: formal progression clip for chapter_02, used to express body-led spatial advance, pause, turn and slight lift without adding character narrative
- `generation prompt`: walking-scale movement through a coherent composite teaching scene of ancient Chinese architecture, sequence of compressed passage, brief pause, framed courtyard opening, slight directional turn, then gentle perceptual lift toward a higher roofline, clear near-far plane changes, body-led spatial progression without showing any body, calm continuous movement, no landmark specificity, no action plot, no tourism spectacle, progression must be understandable through spatial change rather than editing tricks
- `negative constraints`:
  - no person in frame, no point-of-view character story, no guide figure
  - no cross-region jump cuts disguised as one literal real site
  - no ritual staging, no dramatic encounter, no festival atmosphere
  - no drone flight, no roller-coaster motion, no music-video montage
  - no giant reveal built as spectacle tourism
  - no hard historical claim or named-site assertion
- `failure conditions`:
  - the clip reads as tourism aerial footage instead of bodily progression
  - speed, novelty, or cut frequency replaces spatial reading
  - the sequence implies one exact preserved site with documentary certainty
  - key frames do not show readable pause-turn-lift progression
- `retry strategy`:
  1. reduce spatial beats to three or four clear phases
  2. keep the camera slower and closer to walking height
  3. remove any aerial or sweeping move that flattens bodily reading
  4. strengthen foreground thresholds and one clear turn point

## Packet 04
- `packet_id`: `packet_f01_04_structure_primary`
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
- `intended downstream use`: main structural explanation clip for chapter_03, used as the formal visual core of the structure chapter and designed to sit inside a non-video explanation stack rather than imitate documentary footage
- `generation prompt`: semi-abstract 2.5D explanatory reveal of ancient Chinese timber architecture, clearly organized column-beam-bracket-roof relationship, layered structural assembly and disassembly, restrained neutral backdrop, three-quarter cutaway readability, precise spatial stacking, subtle parallax only, strong explanatory hierarchy from support to load-bearing tiers, calm analytical tone, no photoreal site documentary style, no decorative overload, must pause cleanly on one frame that shows the main structural order
- `negative constraints`:
  - no photoreal heritage-site documentary look
  - no magical energy lines, glow, sparks, or mystical symbolism
  - no atmosphere-only clip with structure left unexplained
  - no impossible geometry, no floating roof without support logic
  - no decorative close-up replacing structural relation
  - no fast spin, no explosion reveal, no blockbuster mechanics
- `failure conditions`:
  - the clip looks like fantasy x-ray architecture rather than explanation
  - structure remains unreadable after motion completes
  - the result implies a real-site documentary proof instead of explanatory abstraction
  - a paused frame cannot show the main support-order clearly
- `retry strategy`:
  1. simplify to one structural stack and remove secondary flourishes
  2. slow the reveal into a controlled cutaway or exploded sequence
  3. strip all particles, glow and dramatic color coding
  4. reinforce the order from base supports to roof load path

## Packet 05
- `packet_id`: `packet_f01_05_structure_support`
- `chapter_id`: `chapter_03_structure`
- `scene_id`: `scene_04_structure_support`
- `scene_mode`: `C_abstract_explanatory_layer`
- `truth_mode`: `C_abstract_explanatory_layer`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_STRUCTURE_01`
- `asset_role`: `supporting_transition`
- `motion_owner`: `video`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `low`
- `intended downstream use`: optional supporting transition clip for chapter_03, used to bridge from composite spatial experience into structure explanation without implying one real preserved site
- `generation prompt`: restrained semi-abstract transition across layered roof masses, bracket silhouettes and spatial depth cues of ancient Chinese architecture, gentle forward-to-upward transition, minimal parallax, soft neutral atmosphere, clear movement from overall spatial presence toward structural legibility, not photoreal documentary footage, not a named site, readable from a single representative frame, calm analytical bridge rather than spectacle
- `negative constraints`:
  - no single real-site documentary look
  - no fantasy transformation, no glowing mechanics, no mystical reveal
  - no people, no ceremonial use scene, no historical reenactment
  - no extreme camera move, no rapid montage, no drone flight
  - no complete structure explanation replacing packet 04
  - no decorative skyline hero shot
- `failure conditions`:
  - the clip reads like a real-site fly-through with thin abstract overlay
  - the transition becomes spectacle and stops functioning as support
  - the image is too atmospheric to point toward structure
  - the frame cannot pause cleanly without losing meaning
- `retry strategy`:
  1. flatten the scene further into semi-abstract massing and silhouette
  2. reduce motion to one calm directional shift
  3. remove skyline heroism and keep roof-bracket relation legible
  4. treat it explicitly as a bridge clip, not as a second climax

## Packet 06
- `packet_id`: `packet_f01_06_craft_detail`
- `chapter_id`: `chapter_04_craft`
- `scene_id`: `scene_05_craft_detail`
- `scene_mode`: `C_abstract_explanatory_layer`
- `truth_mode`: `C_abstract_explanatory_layer`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_CRAFT_01`
- `asset_role`: `comparative_overlay`
- `motion_owner`: `2.5D`
- `fallback_level`: `C_low_bandwidth`
- `mobile_risk`: `medium`
- `intended downstream use`: formal craft-study clip for chapter_04, used as an interpretive detail overlay that reconnects local material and joinery detail to larger architectural organization
- `generation prompt`: semi-abstract 2.5D craft detail study of ancient Chinese architectural components, one main junction or joinery edge as the anchor, visible timber grain, worn surface, layered pigment remnants, edge condition and material transitions, then gentle pullback to show how that detail belongs to a larger component system, quiet and precise, explanatory rather than documentary, no site-specific identity, no luxury fetish mood, readable hierarchy from detail to component even when paused
- `negative constraints`:
  - no decorative pattern montage, no generic national-style ornament reel
  - no jewelry-like fetish close-up, no glossy premium finish, no gold sparkle
  - no floating fragments detached from construction context
  - no overly shallow focus that hides component belonging
  - no human hands, no craftsman reenactment, no workshop drama
  - no claim that this is direct evidence from one named historic site
- `failure conditions`:
  - the clip becomes pure ornament showcase with no system relation
  - the surface looks newly polished, fantasy-clean or luxury-commercial
  - scale and placement within a larger architectural component remain unclear
  - mobile viewing loses the main detail because the image is too dense
- `retry strategy`:
  1. reduce to one main junction and one secondary contextual component
  2. flatten lighting and remove fetish shine
  3. strengthen the pullback so the larger system becomes legible
  4. simplify texture density while keeping wear and material variation visible

## Packet 07
- `packet_id`: `packet_f01_07_conservation_boundary`
- `chapter_id`: `chapter_05_conservation`
- `scene_id`: `scene_06_conservation_boundary`
- `scene_mode`: `C_abstract_explanatory_layer`
- `truth_mode`: `C_abstract_explanatory_layer`
- `evidence_grade`: `E2_unresolved`
- `source_ref`: `SRC_TBD_CONSERVATION_01`
- `asset_role`: `evidence_reference`
- `motion_owner`: `vector_programmatic`
- `fallback_level`: `D_static_minimum`
- `mobile_risk`: `medium`
- `intended downstream use`: formal conservation-boundary clip for chapter_05, used as a schematic low-motion support plate under later annotation and evidence-reference overlays
- `generation prompt`: schematic low-motion explanatory plate of ancient Chinese architectural conservation boundary, clear distinction between aged historic material and restrained contemporary care intervention, calm overcast light, stable composition, annotation-ready negative space, low-motion emphasis, semi-abstract rather than documentary, no restoration triumph, no glossy newness, no worker action, no site-specific claim, must remain readable as a pause frame for boundary explanation
- `negative constraints`:
  - no before-and-after miracle reveal
  - no glossy renovation aesthetic, no luxury refurbishment mood
  - no workers, no active tools, no ribbon cutting, no promo-documentary tone
  - no claim that conservation means returning to original newness
  - no emotional climax, no heroic rebirth narrative
  - no busy motion that conflicts with future vector annotations
- `failure conditions`:
  - the clip reads like renovation advertising or heritage promo footage
  - the boundary between historic layer and care layer disappears
  - the image becomes too clean, too celebratory, or too newly rebuilt
  - the clip tries to act as sole factual proof rather than schematic support
- `retry strategy`:
  1. flatten motion further and keep one main boundary in frame
  2. desaturate and reduce shine if the scene feels newly rebuilt
  3. emphasize material contrast between aging and careful intervention
  4. simplify the composition to preserve annotation-friendly space

## Packet 08
- `packet_id`: `packet_f01_08_outro_lookback`
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
- `intended downstream use`: formal closing clip for chapter_06, used to taper the sequence, return to layered architectural memory, and exit without adding new claims or new chapters
- `generation prompt`: quiet controlled exit from a composite teaching scene of ancient Chinese architecture, slow retreat or gentle turn-back glance across layered roofs, thresholds and receding courtyard depth, late-afternoon softness, reflective closure, no final spectacle, no new spatial surprise, no people, no ceremony, no triumph, must feel like a calm look-back that preserves method and atmosphere without claiming a final answer
- `negative constraints`:
  - no new landmark reveal, no hidden climax, no surprise monument
  - no triumphant ending, no celebratory pageant, no fireworks of mood
  - no added factual payload, no new case, no new theme branch
  - no people, no procession, no ruler-like symbolic presence
  - no sharp montage, no escalating tempo, no music-video ending
  - no documentary certainty that closes all interpretation
- `failure conditions`:
  - the ending introduces new content instead of tapering the sequence
  - the scene becomes triumphant, conclusive or monumentally final
  - a paused frame cannot read as reflective exit or look-back
  - the atmosphere breaks continuity with the established opening and middle chapters
- `retry strategy`:
  1. shorten motion to one controlled retreat or turn-back move
  2. lower contrast and strip out any spectacular late reveal
  3. reuse threshold and layered-depth grammar from the opening scenes
  4. remove any new object or composition that reads like a fresh claim
