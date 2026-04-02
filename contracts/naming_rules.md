# Naming Rules Contract

## Naming purpose
本合同用于冻结章节、资产、frame、review 文件以及版本后缀的命名规则，确保文件名、ID、manifest 可互相反推。

## Chapter naming
- 章节文件名固定为：
  - `chapter_00_intro.md`
  - `chapter_01_orientation.md`
  - `chapter_02_progression.md`
  - `chapter_03_structure.md`
  - `chapter_04_craft.md`
  - `chapter_05_conservation.md`
  - `chapter_06_outro.md`
- `chapter_id` 必须与文件名去除扩展名后的主名一致。

## Asset naming
- `asset_id` 必须包含章节来源、资产主责任和顺序信息。
- 文件名必须能反推出 `chapter_id`、`asset_id`、`revision_status`。
- 资产规划命名模式只能使用本合同定义的结构，不得自行发明缩写。

## Frame naming
- `frame_id` 必须从属于唯一 `chapter_id` 与 `asset_id`。
- frame 命名不得脱离其上游章节与资产关系单独编号。

## Review file naming
- review 文件名必须能反推出关口或用途。
- `freeze_log.md` 和 `red_team_review.md` 为固定保留文件名，不允许重命名。

## Version suffix rules
- 版本后缀必须与 `revision_status` 对应。
- 同一对象的 superseded 版本不得覆盖 frozen 版本。

## Manifest binding rules
- 任一文件若进入正式流转，必须出现在 manifest 或索引表中。
- 不允许存在 manifest 外游离文件。
- 文件名、`asset_id`、`frame_id`、manifest 记录必须一致。

## Rename procedure
1. 先登记变更。
2. 再同步 manifest。
3. 再同步相关 review 记录。
4. 最后执行文件重命名。

未完成以上步骤的 rename 视为无效。

## 确定项
- 文件名必须映射回稳定 ID。
- `chapter_id` 与章节文件名已冻结。
- rename 必须同步 manifest 与 change log。

## 待验证项
- 资产与 frame 的最终命名细粒度模板待在实际资产规划阶段冻结。

## 禁止项
- 禁止脱离 manifest 单独建文件。
- 禁止临时改名后事后补录。
- 禁止生成尚未规划资产的具体假文件名。
