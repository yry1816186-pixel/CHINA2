# Agent Implementation Boundary

## 文件目的
本文件是当前阶段给网页实现 agent 的**唯一实现边界说明**。

它的作用不是提供灵感，
而是切断这些高风险行为：
- 自由发挥改项目目标
- 把 reviewed candidate 包装成冻结事实
- 把 unresolved intro 做成单一真实遗址入口
- 把 first-wave 页面做成产品页、宣传页、旅游页或酷炫 demo

## 当前阶段身份
agent 当前接到的任务不是：
- 做最终全站上线版本
- 发明新的内容架构
- 重新设定 scene 含义
- 随意追加新章节或新视频逻辑

agent 当前真正接到的任务是：
**基于仓库现有主表、候选 scene、受控提示词与页面样机，把 CHINA2 推进成更接近参考级作品标准的 first-wave 长滚动网页。**

## 唯一事实来源顺序
agent 必须按以下顺序读事实来源，不能跳序：
1. `docs/99_NEW_CHAT_TAKEOVER_BRIEF.md`
2. `README.md`
3. `docs/09_canonical_working_entry.md`
4. `research/case_anchor_register.md`
5. `research/evidence_manifest.md`
6. `video/03_scene_matrix.md`
7. `video/20_priority_scene_candidate_packets.md`
8. `web/INTRO_ENTRY_EXECUTION_STRATEGY.md`
9. `web/reference-shell/review.contract.json`
10. `web/reference-shell/README.md`

## agent 不得自行改写的东西
### 1. scene 身份
不得自行改写：
- scene id
- chapter id
- case anchor
- source ref
- evidence grade
- allowed mode
- revision status

这些字段如果要变，必须先改主表，不得在页面层偷偷改写。

### 2. scene 含义
不得自行把：
- `scene_01_orientation_order` 改成礼仪路线或权力叙事
- `scene_03_structure_primary` 改成技术奇观或纪录式证明
- `scene_06_conservation_boundary` 改成修复奇迹或旅游宣传
- `scene_00_intro_entry` 改成单一真实遗址入口

### 3. 项目阶段身份
不得把当前项目表述为：
- final launch site
- fully validated heritage interpretation platform
- already reference-grade complete
- guaranteed final masterpiece

## agent 必须优先满足的页面要求
### A. 披露优先
页面必须持续可见：
- 当前 scene status
- 当前 evidence grade
- 当前 anchor 边界
- 当前 allowed mode
- 当前误读风险

### B. 秩序优先
页面必须先建立：
- 观看秩序
- 节奏停顿
- 信息密度控制
- scene 之间的气质统一

不能先追求：
- 炫技动效
- 复杂切换
- 视觉爆点堆叠

### C. 受控统一
三条 first-wave 样片放在同一页面里时，
必须先服务整体气质统一，
不能各自追求“单段最炸”。

## agent 被禁止的实现冲动
- 禁止把 sticky stage 做成炫技播放器
- 禁止把页面做成产品 marketing hero
- 禁止引入会压过文本边界披露的巨型视觉特效
- 禁止为了“高级感”弱化 unresolved / reviewed_candidate 提示
- 禁止在没有主表依据时新增 scene 级事实标签
- 禁止擅自扩写到 chapter_02 / chapter_04 / chapter_06 的最终成片结构

## 当前允许的实现自由度
agent 当前可以自由发挥的范围只包括：
- 版式精度
- 留白与节奏
- 字级层次
- sticky / scroll 的组织方式
- 信息块显隐逻辑
- 低风险的微动效
- 样片 / poster / 占位态的统一表现方式

但前提是：
**不能改变事实层，不能改变 scene 纪律，不能制造额外确定性。**

## intro 的特别条款
agent 实现 intro 时，必须默认遵守：
- `composite-threshold-disclosure-first`
- disclosure 强于 monumentality
- unresolved 提示不能被藏起来
- intro 不能抢走结构 / 保护 / 秩序三条 scene 的主体解释位置

## 页面交付前必须自检的 8 个问题
1. 有没有把 reviewed candidate 做成冻结事实层？
2. 有没有把 intro 做成单一真实遗址入口？
3. 有没有把页面气质做成 marketing / promo / tourism？
4. 有没有让 scene 纪律在页面里消失？
5. 有没有让视觉特效压过证据边界？
6. 有没有把三条样片做得彼此打架？
7. 有没有在没有主表依据时新增事实？
8. 有没有把当前阶段谎称为 final？

任一答案如果是“有”，就不能交付。

## 当前结论
agent 的任务不是“自由创作一个好看的网页”。

agent 的任务是：
**在严格服从主表与 scene 纪律的前提下，把 first-wave 页面做得足够强，足够克制，足够接近参考级作品标准。**

如果 agent 需要通过歪曲事实、弱化披露、夸大成熟度来让页面看起来“更高级”，
那就说明实现方向已经错了。