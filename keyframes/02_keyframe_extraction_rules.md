# 02 Keyframe Extraction Rules

## 文档目的
本文件定义未来从 Seedance 输出或预演资产中抽取 keyframe 的规则，确保抽取逻辑服务章节理解，而不是服务好看。

## 抽取原则
1. keyframe 的抽取必须服务 `core_claim`、`learning_outcome` 或 `forbidden_payload` 的控制。
2. 只要一个 scene 不能通过 keyframe 支持章节理解，该 scene 就不具备进入下游的资格。
3. keyframe 必须优先覆盖：
   - 真相模式披露点
   - 结构主解释点
   - 比较关系建立点
   - 证据锚点可见点
   - 降级后仍需保留的解释点

## 抽取触发条件
- 出现 truth mode 切换。
- 出现章节主解释关系。
- 出现用户未来可能需要停留比较的关系。
- 出现证据引用或边界说明。
- 出现降级后必须保留的信息节点。

## 不抽取原则
- 不因“视觉好看”单独抽取。
- 不因纯氛围波动抽取。
- 不为未冻结事实制造 keyframe。

## 必要记录
每个抽取出来的 keyframe 必须记录：
- `frame_id`
- `chapter_id`
- `planned_scene_id`
- `scene_mode`
- `evidence_grade`
- `source_ref`
- `keyframe_role`
- `extraction_reason`
- `fallback_level`
- `forbidden_payload`

## 审查规则
- 若 keyframe 无法对应 `chapter_goal`，则抽取无效。
- 若 keyframe 承载的内容超出 `scene_mode`，则抽取无效。
- 若 keyframe 依赖未冻结事实，必须保留 `待验证项`。

## 确定项
- keyframe 抽取服务理解，不服务炫技。
- 结构高潮章必须拥有主解释 keyframe。
- 证据锚点不可只留在视频流内而不抽取。

## 待验证项
- 各章节的最小 keyframe 数量阈值。
- `keyframe_role` 的最终枚举。

## 禁止项
- 禁止用抽取规则偷渡 storyboard。
- 禁止为纯氛围画面强行分配事实角色。
- 禁止省略 truth/evidence 字段。
