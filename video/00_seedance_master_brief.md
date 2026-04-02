# 00 Seedance Master Brief

## 文档目的
本文件是 Seedance 2.0 pre-production 的总规划简报，只负责冻结输入约束、场景计划字段、负向边界和输出审查要求，不生成最终分镜、不生成最终提示词、不生成网站实现内容。

## 上游唯一依据
- `docs/00_master_spec.md`
- `docs/03_chapter_map.md`
- `docs/04_responsibility_matrix.md`
- `docs/05_asset_policy.md`
- `contracts/evidence_scale.md`
- `contracts/field_schema.md`
- `contracts/truth_mode.md`

## 规划目标
1. 让每个 `chapter_id` 都有可进入 Seedance 规划的 scene 容器。
2. 确保每个规划 scene 都具备可审校字段。
3. 保留所有未冻结信息为 `待验证项`，不发明案例细节。

## 全局输入规则
- 每个规划 scene 必须声明：
  - `chapter_id`
  - `segment_id`
  - `scene_mode`
  - `evidence_grade`
  - `asset_role`
  - `motion_owner`
  - `fallback_level`
- 每个规划 scene 必须引用：
  - `core_claim`
  - `forbidden_payload`
  - `negative_constraints`
- 若 `case_anchor`、`source_ref` 未冻结，必须显式标记 `待验证项`。

## 全局负向边界
- 禁止人物、仪式、服饰、神怪、权力奇观自动补写。
- 禁止将 `B_composite_teaching_scene` 伪装为单一真实遗址实景。
- 禁止将 `C_abstract_explanatory_layer` 渲染成未披露的实景连续空间。
- 禁止以气氛替代事实层、比较层或证据层。
- 禁止使用 prior repo content 作为历史证据。

## 全局输出要求
- Seedance 规划输出只允许形成：
  - 章节级视频 brief
  - 场景矩阵
  - 输出审查清单
- Seedance 规划输出不允许形成：
  - 最终 storyboard
  - 最终 shot list
  - 页面文案
  - 网站代码

## Scene planning package 要求
每个 `planned_scene_id` 至少应具备：
- `chapter_id`
- `segment_id`
- `scene_mode`
- `core_claim`
- `case_anchor`
- `evidence_grade`
- `source_ref`
- `asset_role`
- `motion_owner`
- `fallback_level`
- `negative_constraints`
- `review_gate`
- `revision_status`

## 确定项
- 本文件是 Seedance pre-production 的总 brief。
- 所有视频规划只能来源于已冻结 docs/contracts/chapters。
- 所有场景计划必须先满足字段完整，再考虑视觉表达。

## 待验证项
- 各 `planned_scene_id` 的最终数量。
- 各章节是否需要保留额外 support scene。

## 禁止项
- 禁止在本文件中生成最终 storyboard。
- 禁止在本文件中生成页面文案或代码。
- 禁止突破 truth/evidence 合同。
