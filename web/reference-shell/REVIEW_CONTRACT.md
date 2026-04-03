# Reference Shell Review Contract

## 目的
本文件是当前 `reference-shell` 与后续网页实现 agent 的**单一 scene 审查合同**。

它把每个 first-wave scene 的：
- 阅读任务
- 边界文本
- 误读风险
- 页面纪律
- 必须持续披露的信息

从页面脚本的隐式写法里抽出来，
变成一个可以被明确阅读、明确继承、明确审查的合同文件。

## 全站硬边界
1. 当前仓库不是最终上线站。
2. `scene_00_intro_entry` 仍未冻结，不得被实现成单一真实遗址入口。
3. `reviewed_candidate` scene 只是受控解释锚点，不是最终事实层证明。
4. 当前环境未直接完成外部参考站对照审查，不能声称已完成 reference parity 验证。

## Scene Contract 00
### `scene_00_intro_entry`
- `chapter_label`: `Chapter 00 · Intro`
- `strategy`: `composite-threshold-disclosure-first`
- `reading_task`: 建立观看协议、真实性边界与进入节奏，而不是建立单一真实 site identity
- `lede`: 入口应被读成一个克制、缓慢、带阈限感的综合教学场景，而不是地标宣告
- `boundary_text`: anchor 仍 unresolved；当前只允许 composite teaching threshold，不允许暗示 frozen single-site identity
- `discipline`: disclosure 必须强于 monumentality；intro 不得抢走后续 first-wave 主解释位置
- `must_not_become`:
  - single real-site hero entrance
  - tourism promo opening
  - documentary reconstruction proof
- `required_disclosures`:
  - unresolved status 持续可见
  - composite teaching scene framing 持续可见
  - 不引入单一遗址身份宣告

## Scene Contract 01
### `scene_01_orientation_order`
- `chapter_label`: `Chapter 01 · Orientation`
- `strategy`: `bounded-order-threshold-reading`
- `reading_task`: 让阈限、方向、压缩与释放、层级关系可读，而不是做礼仪路线或权力 spectacle
- `lede`: 应通过空间顺序和阈限节奏教学秩序，而不是通过表演性路线和 monumental framing 压人
- `boundary_text`: 当前只允许以 reviewed Beijing palace-complex candidate 作为秩序解释锚点
- `discipline`: pause-frame 可读性必须强于 spectacle；不得滑向 staged route 或 central-axis wonder reel
- `must_not_become`:
  - ritual route demonstration
  - central-axis spectacle
  - generic majestic fly-through
- `required_disclosures`:
  - reviewed candidate status 可见
  - order / threshold framing 保持主位
  - 不引入 power-narrative wording

## Scene Contract 03
### `scene_03_structure_primary`
- `chapter_label`: `Chapter 03 · Structure`
- `strategy`: `semi-abstract-structural-reading`
- `reading_task`: 让支撑层级、柱梁关系与主结构栈成为解释层，而不是技术表演
- `lede`: 应把建筑智慧压缩成冷静、可读、可停顿的结构阅读，而不是复杂炫技
- `boundary_text`: 当前只允许以 Foguang Temple East Hall reviewed candidate 作为 bounded explanatory anchor
- `discipline`: 单主结构栈、克制节奏、解释性 calm 为强制项；spectacle 与 documentary certainty 为禁止项
- `must_not_become`:
  - technical spectacle
  - documentary real-site proof
  - decorative mechanical show
- `required_disclosures`:
  - reviewed candidate status 可见
  - abstract explanatory mode 可见
  - 不引入 totalizing structural proof

## Scene Contract 06
### `scene_06_conservation_boundary`
- `chapter_label`: `Chapter 05 · Conservation`
- `strategy`: `care-boundary-judgement`
- `reading_task`: 让 historic layer 与 careful intervention layer 的区别可读，并把保护读成边界判断，而不是 triumph
- `lede`: 应把保护读成 civic care、 restraint 和 boundary judgement，而不是 miracle restoration
- `boundary_text`: 当前只允许以 Pingyao reviewed candidate 作为 conservation-boundary anchor
- `discipline`: neutral、annotation-friendly、still-frame readable 为强制项；triumph framing 为禁止项
- `must_not_become`:
  - miracle restoration film
  - renewal promo
  - single-shot proof of total conservation success
- `required_disclosures`:
  - reviewed candidate status 可见
  - conservation-as-care framing 保持主位
  - 不引入 triumph 或 tourism wording

## 页面级强制要求
### 必须显示
- scene status
- evidence grade
- anchor boundary
- allowed mode
- misreading risk

### 必须优先
- 阅读秩序
- 停顿与推进节奏
- 三条 first-wave 样片的气质统一
- truth-boundary disclosure

### 必须避免
- marketing-page hero logic
- tourism-promo framing
- 视觉特效强于边界披露
- 主表中不存在的新事实

## 使用方式
当 agent 实现页面时：
1. 先读主表与 `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
2. 再读本合同
3. 再决定页面表达
4. 任何实现如果违背本合同，优先改实现，不是改合同

## 当前结论
当前 first-wave 页面如果想继续向参考级作品标准推进，
不能再靠“感觉差不多”。

必须靠这种**scene 合同化、边界显式化、误读风险前景化**的方式继续推进。