# Web Execution Shell

## 定位
本目录是当前仓库的前端执行壳。

它不是最终成品网站，
不是最终审美定稿，
也不是对视频资产的替代。

它的作用是把当前仓库已经完成的：
- 真实候选主表回填
- first-wave scene packet
- 受控 research 边界

转成一个可以直接承接样片、验证滚动节奏、验证文本与视频关系的可运行网页骨架。

## 当前范围
当前壳体只服务 first-wave：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`
- `scene_00_intro_entry`（仍是未冻结入口，占位保留）

其中只有以下 3 个 scene 已进入受限真实候选状态：
- `scene_03_structure_primary`
- `scene_06_conservation_boundary`
- `scene_01_orientation_order`

## 使用方式
### 最简方式
直接在 `web/` 目录运行静态服务器：

```bash
cd web
python -m http.server 8000
```

然后访问：
- `http://localhost:8000`

### 替换真实样片
当前页面默认使用占位 media panel。
当你拿到第一批样片后，推荐按以下方式接入：

1. 将样片放入 `web/assets/`
2. 在 `web/scenes.manifest.json` 中为对应 scene 填写：
   - `poster`
   - `video`
3. 页面会自动在 sticky stage 中优先显示真实 video，其次显示 poster

## 当前页面目标
- 验证 long-scroll 的信息密度是否成立
- 验证 scene 文案与视频关系是否成立
- 验证 first-wave 三条样片是否足以支撑整站气质
- 验证 unresolved intro 是否必须继续保守处理

## 当前明确不做
- 不做最终视觉特效
- 不做复杂前端框架接入
- 不做播放器高级控制
- 不做章节级全量站点实现
- 不把未冻结 scene 伪装成可直接上线资产

## 下一步接入顺序
1. 先接 `scene_03_structure_primary`
2. 再接 `scene_06_conservation_boundary`
3. 再接 `scene_01_orientation_order`
4. 最后再判断 `scene_00_intro_entry` 是否需要新候选
