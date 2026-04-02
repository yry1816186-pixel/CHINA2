# 09 Prompt Writing Source Pack

## 文档目的
本文件是视频提示词阶段的唯一缩编源包，只服务首批小规模 prompt packets 编写与首轮内部视频生成。

本文件不承担以下任务：
- 不生成网页文案
- 不生成分镜脚本
- 不生成 shot list
- 不生成网站代码
- 不改写上游冻结结论

## 本阶段唯一默认有效上下文
- `docs/00_master_spec.md`
- `docs/01_scope_and_boundaries.md`
- `docs/03_chapter_map.md`
- `docs/04_responsibility_matrix.md`
- `docs/05_asset_policy.md`
- `contracts/evidence_scale.md`
- `contracts/field_schema.md`
- `contracts/truth_mode.md`
- `video/00_seedance_master_brief.md`
- `video/01_chapter_video_briefs.md`
- `video/02_prompt_template_library.md`
- `video/03_scene_matrix.md`
- `video/04_output_review_checklist.md`

## 默认排除
- `review/*` 不作为默认上下文；仅在核对冲突时引用
- 不进入网页实现、UI、路由、组件、动画代码或资产接入
- 不把 prior repo content 当作历史证据

## 冻结继承摘要
- 项目叙事容器固定为受证据约束的综合场景游历容器。
- 叙事主轴固定为空间游历；比较与解释为辅，不可反客为主。
- 时间中心固定为唐至清；早期阶段仅可作为受限比较支持。
- 地域范围固定为中国范围内可审校案例；跨地域拼接不得伪装为单地连续空间。
- 六类建筑类型上限已冻结，不得自行扩类。
- 人物、仪式、服饰、神怪、权力奇观不在默认允许项中。
- 视频不能单独承担核心事实解释；结构关系与证据锚点不能靠视频独占。
- `chapter_03_structure` 的视频只能作为辅助过渡或 2.5D 解释片段，不得成为唯一解释路径。

## Truth / Evidence / Asset 底线
- `B_composite_teaching_scene` 必须被写成综合教学场景，不得写成某一单一真实遗址的完整连续实景。
- `C_abstract_explanatory_layer` 必须被写成解释层或示意层，不得伪装成纪录片式实景。
- `E2_unresolved` 与 `E1_unverified` 不得写成主事实结论；在本阶段只能作为内部生成与审校占位使用。
- `source_ref` 允许保留结构化占位，但不得写成“官方资料”“馆方资料”“网络资料”等泛称。
- `fallback_level=C_low_bandwidth` 的 packet 不得依赖细碎运动才能读懂。
- `fallback_level=D_static_minimum` 的 packet 必须允许单帧保留核心视觉意图。

## Prompt Packet 字段绑定规则
| packet 字段 | 写法规则 |
| --- | --- |
| `packet_id` | 本轮固定使用 `packet_b01_XX_*` |
| `chapter_id` | 直接继承 `docs/03_chapter_map.md` |
| `scene_id` | 严格等于 `video/03_scene_matrix.md` 的 `planned_scene_id`，不得另造 ID |
| `scene_mode` | 直接继承 scene matrix |
| `truth_mode` | 继承章节 `truth_mode_default` |
| `evidence_grade` | 直接继承 scene matrix |
| `source_ref` | 直接继承 scene matrix 的结构化占位或已冻结来源 |
| `asset_role` | 直接继承 scene matrix |
| `motion_owner` | 直接继承 scene matrix |
| `fallback_level` | 直接继承 scene matrix |
| `mobile_risk` | 本阶段新增工作字段，取值建议为 `low` / `medium` / `high` |
| `intended downstream use` | 说明该 packet 仅用于哪一类内部生成与后续叠加 |
| `generation prompt` | 必须写成可直接复制进生成器的单段 prompt，不写抽象创意说明 |
| `negative constraints` | 必须是可直接复制的负向约束清单 |
| `failure conditions` | 必须是能一眼判断失败的画面条件 |
| `retry strategy` | 必须是下一轮重试时可执行的修改动作 |

## 第一批优先级列表
本轮只做 7 条，不全项目铺开。

| priority | `packet_id` | `chapter_id` | `scene_id` | 场景类型 | `scene_mode` | `truth_mode` | `asset_role` | `motion_owner` | `fallback_level` | `evidence_grade` | `source_ref` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | `packet_b01_01_intro_threshold` | `chapter_00_intro` | `scene_00_intro_entry` | 开场氛围 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `contextual_atmosphere` | `video` | `D_static_minimum` | `E2_unresolved` | `SRC_TBD_INTRO_01` |
| P1 | `packet_b01_02_order_entry` | `chapter_01_orientation` | `scene_01_orientation_order` | 入院/秩序感 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | `video` | `C_low_bandwidth` | `E2_unresolved` | `SRC_TBD_ORDER_01` |
| P1 | `packet_b01_03_progression_walk` | `chapter_02_progression` | `scene_02_progression_path` | 空间递进 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | `video` | `C_low_bandwidth` | `E2_unresolved` | `SRC_TBD_ORDER_01` |
| P1 | `packet_b01_04_structure_reveal` | `chapter_03_structure` | `scene_03_structure_primary` | 结构揭示 | `C_abstract_explanatory_layer` | `C_abstract_explanatory_layer` | `primary_explanation` | `2.5D` | `D_static_minimum` | `E2_unresolved` | `SRC_TBD_STRUCTURE_01` |
| P1 | `packet_b01_05_craft_detail` | `chapter_04_craft` | `scene_05_craft_detail` | 工艺细部 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `comparative_overlay` | `2.5D` | `C_low_bandwidth` | `E2_unresolved` | `SRC_TBD_CRAFT_01` |
| P1 | `packet_b01_06_conservation_boundary` | `chapter_05_conservation` | `scene_06_conservation_boundary` | 保护边界 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `evidence_reference` | `vector_programmatic` | `D_static_minimum` | `E2_unresolved` | `SRC_TBD_CONSERVATION_01` |
| P1 | `packet_b01_07_outro_lookback` | `chapter_06_outro` | `scene_07_outro_exit` | 保护/回望中的回望收束 | `B_composite_teaching_scene` | `B_composite_teaching_scene` | `supporting_transition` | `video` | `D_static_minimum` | `E2_unresolved` | `SRC_TBD_OUTRO_01` |

## 本批优先级依据
- 先覆盖用户指定的 6 类场景需求。
- 先跑通从进入到回望的完整主线，不扩写 support scene。
- 先覆盖三种高风险组合：`B + video`、`C + 2.5D`、`B + vector_programmatic`。
- 先选最容易暴露 truth、evidence、媒介越权问题的容器。

## Prompt 编写规则
- 每条 packet 只服务一个清晰场景目的，不写多主题混剪。
- 每条 prompt 只保留一个主运动逻辑；不要同时要求推轨、环绕、俯冲、航拍切换。
- 对 `B_composite_teaching_scene`，要写“composite teaching scene”语义，但不要把它写成说明文或免责声明字幕。
- 对 `C_abstract_explanatory_layer`，要把“semi-abstract”与“explanatory”写进 prompt，使其主动远离实景纪录感。
- 不写具体遗址名、朝代名、修缮事实、案例归属，除非这些信息已经在上游冻结；本轮没有冻结这些值，因此不得补写。
- 不写人物行为链，不写故事，不写仪式性队列。
- 不用“震撼史诗”“帝王降临”“神圣降世”等权力奇观口径。
- 所有 prompt 都要能在单帧上成立，避免只能靠连续运动才能读懂。

## 通用负向约束库
- no people, no crowd, no guards, no tourists
- no ritual procession, no ceremony reenactment, no costume display
- no mythical creature, no fantasy glow, no supernatural force
- no single named heritage-site look, no landmark-specific reconstruction
- no documentary claim that implies one fully preserved real site
- no use of unresolved evidence as hard fact
- no montage overload, no music-video editing logic
- no website UI, no typography, no interface mockup

## 场景模式补充规则
### `B_composite_teaching_scene`
- 可写成连贯、受控、教学性的空间经验。
- 必须避免唯一遗址外观指认。
- 必须避免强案例归属、强时代归属、强修复结论。

### `C_abstract_explanatory_layer`
- 可写成剖示、分层、显隐、装配、关系说明。
- 必须避免照片级写实遗址外观。
- 必须避免神秘化结构受力或把解释层拍成奇观。

## 失败判定通则
- 一眼看成某个单一真实遗址的宣传片或纪录片。
- 出现人物、仪式、服饰、队列、戏剧情节。
- 画面靠神怪、光效、魔法粒子制造“结构解释”。
- 视频成了唯一解释载体，离开叠加说明就无法理解章节功能。
- 单帧无法成立，必须靠连续切镜才知道在讲什么。

## Retry 通则
1. 先减法，不先加法：先减少场景数量、装饰量、运动种类。
2. 先压低唯一性：移除地标性轮廓、强纪念碑式构图、过度修复感。
3. 先澄清主关系：把镜头只服务于阈限、递进、结构、细部或保护边界中的一个。
4. 先保住降级：让代表帧在移动端或静态回退时仍能读出主功能。

## 生成后最少回传元数据
- `packet_id`
- 输出文件名或可访问链接
- 使用模型/工具与版本
- `seed`；如工具不返回，则提供 `attempt_index`
- 时长
- 分辨率
- 画幅比例
- 实际使用的 prompt 是否与 packet 一致
- 实际使用的 negative constraints 是否与 packet 一致
- 是否做过手工后二次处理；如有，说明改动

## 本文件与下游关系
- 本文件是第一批 prompt packets 的唯一缩编源包。
- 下游 packet 只能细化，不得改写本文件继承的冻结字段。
- 若首轮生成结果出现 truth/evidence 冲突，先回到本文件和上游冻结文件修正，不直接在 packet 文案里私自发明新设定。
