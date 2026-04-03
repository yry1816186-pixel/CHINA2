# Direct Copy Video Texts

## 用途
本文件只服务一件事：
你直接复制下面 4 段文本去生成视频。

## Scene 00 — `scene_00_intro_entry`
Calm threshold entry into a non-site-specific composite teaching scene of ancient Chinese architecture, layered courtyard depth, inward relation, restrained atmosphere, one coherent architectural threshold sequence, clear sense of entry without any identifiable landmark identity, no site-specific reconstruction, no tourism promo tone, no monumental hero shot, no ceremonial feeling, no spectacle climax, no documentary realism, subtle dignity, slow and readable, built for a long-scroll art web experience, designed to declare a composite teaching scene rather than a single real heritage site

## Scene 01 — `scene_01_orientation_order`
Controlled walking-height spatial order study in a composite teaching scene of ancient Chinese architecture, bounded only by a reviewed Beijing palace-complex candidate as an order-and-threshold anchor, threshold spacing, compression and release rhythm, layered hierarchy, directional clarity, restrained movement, no staged route, no documentary reconstruction, no monumentality-first framing, architecture teaches order through spatial sequence, calm and disciplined composition, still-frame readability, built for a long-scroll art web experience

## Scene 03 — `scene_03_structure_primary`
Restrained semi-abstract structural reading of ancient Chinese timber architecture, based only on a bounded explanatory reference to Foguang Temple East Hall and not as a documentary reconstruction, clear column-beam support hierarchy, one main structural stack only, slow explanatory reveal, calm camera, readable still frame, layered timber order, architectural intelligence over spectacle, no decorative overload, no fantasy, no blockbuster energy, no literal real-site proof, quiet authority, museum-grade explanatory atmosphere, controlled light, stable composition, high material dignity, precise but not technical-showy, made for a long-scroll art web experience

## Scene 06 — `scene_06_conservation_boundary`
Low-motion schematic conservation boundary study for ancient Chinese architectural heritage, bounded by the reviewed Ping Yao candidate only as a conservation-boundary anchor, clear distinction between historic layer and careful intervention layer, stable and neutral composition, annotation-friendly space, no triumph, no renewal spectacle, no before-after miracle narrative, conservation as care, maintenance, restraint and boundary judgement, historical layers remain visible, quiet civic dignity, no tourism framing, no promotional tone, high clarity, still-frame readability, made for a long-scroll art web experience

## 当前生成优先级
### strong handoff 必需
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`

### exploratory only
- `scene_00_intro_entry`

`scene_00_intro_entry` 当前仍是 disclosure-first / unresolved 入口测试资产。
它不是强 handoff 必需项，也不是冻结最终入口证明。

## canonical 文件名
生成完成后，放进 dropzone 前请把文件名改成：

- `scene_03_structure_primary.mp4`
- `scene_06_conservation_boundary.mp4`
- `scene_01_orientation_order.mp4`

如果另外生成 intro 测试资产，只能命名为：
- `scene_00_intro_entry.mp4`

## 禁止继续使用的命名方式
以下命名会与 canonical dropzone 规则冲突，不应再使用：

- `scene_00_intro_entry_final.mp4`
- `scene_01_orientation_order_final.mp4`
- `scene_03_structure_primary_final.mp4`
- `scene_06_conservation_boundary_final.mp4`

原因不是审美问题，
而是 `web/ASSET_DROPZONE_SPEC.json` 要求：
- basename 必须等于 scene id
- 禁止 `_final` 这类伪冻结后缀

## 放置位置
把生成好的文件放进：
- `web/assets/first-wave/`
