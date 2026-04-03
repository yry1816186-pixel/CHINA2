# Handoff Package Index

## 目的
本文件用于把当前 first-wave 的 handoff 相关文件串成一条**单一路径**。

它解决的问题是：
文件已经不少了，
但如果没有一个明确索引，
执行者仍然可能不知道该先看什么、后看什么、用哪一个模板。

## 当前推荐顺序
1. `web/VIDEO_TO_WEB_HANDOFF_GATE.md`
2. `web/FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
3. `web/ASSET_INTAKE_CHECKLIST.md`
4. `web/AGENT_HANDOFF_PACKAGE_TEMPLATE.md`
5. `web/FIRST_WAVE_AGENT_STARTER_PACK.md`
6. `web/FIRST_WAVE_AGENT_STARTER_PACK.json`
7. `web/SAMPLE_HANDOFF_PACKAGE_scene_03_structure_primary.md`
8. `web/SAMPLE_HANDOFF_PACKAGE_scene_06_conservation_boundary.md`
9. `web/SAMPLE_HANDOFF_PACKAGE_scene_01_orientation_order.md`

## 每个文件负责什么
### 1. `VIDEO_TO_WEB_HANDOFF_GATE.md`
回答：这条视频现在能不能进入网页实现阶段。

### 2. `FIRST_WAVE_VIDEO_REVIEW_SCORECARD.md`
回答：这条视频在 scene 身份、禁区漂移、暂停帧可读性、same-page tone 上是否过关。

### 3. `ASSET_INTAKE_CHECKLIST.md`
回答：资产文件本身是否命名正确、归属正确、可接入页面、不会制造混乱。

### 4. `AGENT_HANDOFF_PACKAGE_TEMPLATE.md`
回答：一个标准 handoff 包必须包含哪些字段。

### 5. `FIRST_WAVE_AGENT_STARTER_PACK.md`
回答：当前 first-wave 三条核心 scene 的人类可读 starter pack 是什么。

### 6. `FIRST_WAVE_AGENT_STARTER_PACK.json`
回答：当前 first-wave 三条核心 scene 的 machine-readable starter pack 是什么。

### 7–9. 三份 `SAMPLE_HANDOFF_PACKAGE_*.md`
回答：对不同类型 scene，合格 handoff 样例包应该长什么样。

## 当前三条 sample handoff 覆盖关系
- `scene_03_structure_primary`：结构解释高潮样例
- `scene_06_conservation_boundary`：保护边界判断样例
- `scene_01_orientation_order`：秩序 / 阈限阅读样例

这三份加在一起，已经覆盖当前 first-wave 的三条核心受控候选。

## 当前一句话流程
当前更安全的交付路径不是：

`video -> agent`

而是：

`video -> scorecard -> asset intake -> handoff package -> agent`

## 当前结论
如果后续要把视频真正交给网页 agent，
请不要自己从文件堆里摸索。

先从本文件开始，
然后按这里的顺序进入。 
