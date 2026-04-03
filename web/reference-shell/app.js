const sceneIndex = document.getElementById('scene-index');
const sceneStack = document.getElementById('scene-stack');
const metricsRoot = document.getElementById('metrics');
const hardBoundariesRoot = document.getElementById('hard-boundaries');

const stageMedia = document.getElementById('stage-media');
const stageChapter = document.getElementById('stage-chapter');
const stageCounter = document.getElementById('stage-counter');
const stageStatusLabel = document.getElementById('stage-status-label');
const stageTitle = document.getElementById('stage-title');
const stageSummary = document.getElementById('stage-summary');
const stageBadges = document.getElementById('stage-badges');
const stageReadingTask = document.getElementById('stage-reading-task');
const stageRiskList = document.getElementById('stage-risk-list');
const stageBoundary = document.getElementById('stage-boundary');

const HARD_BOUNDARIES = [
  '当前仓库不是最终成品站。',
  'scene_00_intro_entry 仍未冻结，不得伪装成单一真实遗址入口。',
  'reviewed_candidate 只能作为受控解释锚点，不等于最终事实层。',
  '当前环境无法实际浏览外部参考站，因此本页不声称已完成参考级对照审查。'
];

const ENRICHMENTS = {
  scene_00_intro_entry: {
    chapterLabel: 'Chapter 00 · Intro',
    readingTask: '建立观看关系、真实性边界与综合教学场景的进入方式，而不是直接抛出单一真实遗址。',
    boundaryText: '当前 anchor 仍为 TBD。允许 composite teaching scene，但必须持续披露它不是单一真实遗址的冻结入口。',
    lede: '入口不是高地标英雄镜头，而是对整站观看协议的声明：观众进入的是一个受控、克制、复合的教学场景。',
    mustNotBecome: [
      '单一真实遗址的 hero shot',
      '旅游宣传片式地标开场',
      '纪实重建式入口证明'
    ],
    discipline: '必须让 disclosure 强于 monumentality。观众第一眼读到的应该是“如何观看”，而不是“哪座名建筑”。'
  },
  scene_01_orientation_order: {
    chapterLabel: 'Chapter 01 · Orientation',
    readingTask: '让方向、阈限、压缩与释放、层级关系成为可读秩序，而不是礼仪路线或权力 spectacle。',
    boundaryText: '当前 anchor 为受控候选，允许以 Beijing palace-complex candidate 作秩序解释锚点，但不得滑向中轴奇观、皇家奇观或 staged route。',
    lede: '秩序先通过空间关系被身体读到，再通过符号被理解。这个 scene 的任务，是把空间序列本身做成知识语言。',
    mustNotBecome: [
      '礼仪路线演示',
      '中轴奇观展示',
      '泛 majestic fly-through'
    ],
    discipline: '要把阈限、层级、方向做成 pause 后仍可理解的结构秩序，而不是靠大镜头压人。'
  },
  scene_03_structure_primary: {
    chapterLabel: 'Chapter 03 · Structure',
    readingTask: '把柱、梁、支撑层级与主结构秩序做成解释层，而不是技术炫耀或纪录式实景证明。',
    boundaryText: '当前 anchor 为 Foguang Temple East Hall reviewed candidate。可作为 bounded explanatory anchor，不可扩写成 blanket structural proof。',
    lede: '结构高潮的价值不在于“复杂”，而在于把建筑智慧压缩成一眼就能读到的支撑关系。',
    mustNotBecome: [
      '技术奇观',
      '纪录式遗址证明',
      '装饰性机械表演'
    ],
    discipline: '必须保持半抽象、层级清晰、单主结构栈可读。暂停后应先读到 support order，而不是读到视觉刺激。'
  },
  scene_06_conservation_boundary: {
    chapterLabel: 'Chapter 05 · Conservation',
    readingTask: '把 historic layer 与 careful intervention layer 的边界做清楚，让保护看起来像克制判断，而不是焕新叙事。',
    boundaryText: '当前 anchor 为 Pingyao reviewed candidate。可作 conservation-boundary explanation，不可滑向旅游宣传或奇迹修复 narrative。',
    lede: '保护不是胜利叙事，而是边界判断：什么应保留，什么应克制介入，什么必须让历史层继续可见。',
    mustNotBecome: [
      '修复奇迹片',
      '更新焕新宣传片',
      '以单镜头充当全部保护证明'
    ],
    discipline: '画面必须稳定、中性、可注释。观众读到的应是 boundary judgement，而不是 triumphant transformation。'
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getStatusTone(scene) {
  return scene.evidenceGrade.startsWith('E3') ? 'ok' : 'warning';
}

function getStatusLabel(scene) {
  return scene.status === 'reviewed_candidate_registered'
    ? 'Reviewed candidate · bounded use only'
    : 'Unresolved intro · disclosure required';
}

function renderHardBoundaries() {
  hardBoundariesRoot.innerHTML = HARD_BOUNDARIES
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

function renderMetrics(scenes) {
  const reviewed = scenes.filter((scene) => scene.status === 'reviewed_candidate_registered').length;
  const unresolved = scenes.filter((scene) => scene.evidenceGrade.includes('E2')).length;

  metricsRoot.innerHTML = [
    ['当前工作面', 'first-wave / 4 key scenes'],
    ['已进入 reviewed candidate', `${reviewed} / ${scenes.length}`],
    ['仍未冻结入口', 'scene_00_intro_entry'],
    ['仍属 unresolved', `${unresolved} scene requires caution`]
  ]
    .map(
      ([label, value]) => `
        <article class="metric">
          <p class="metric__label">${escapeHtml(label)}</p>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `
    )
    .join('');
}

function renderSceneIndex(scenes) {
  sceneIndex.innerHTML = scenes
    .map((scene, index) => {
      const tone = getStatusTone(scene);
      return `
        <a class="scene-index__link" href="#${scene.id}" data-scene-link="${scene.id}">
          <p class="scene-index__meta">${String(index + 1).padStart(2, '0')} · ${escapeHtml(scene.chapterId)}</p>
          <strong class="scene-index__title">${escapeHtml(scene.title)}</strong>
          <span class="status-pill status-pill--${tone}">${escapeHtml(scene.evidenceGrade)}</span>
        </a>
      `;
    })
    .join('');
}

function renderSceneStack(scenes) {
  sceneStack.innerHTML = scenes
    .map((scene, index) => {
      const extra = ENRICHMENTS[scene.id];
      const tags = [scene.anchor, scene.sourceRef, scene.allowedMode, scene.status]
        .map((item) => `<span class="scene-tag">${escapeHtml(item)}</span>`)
        .join('');
      const riskItems = extra.mustNotBecome.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

      return `
        <article class="scene-card" id="${scene.id}" data-scene="${scene.id}">
          <div class="scene-card__head">
            <div>
              <p class="scene-card__label scene-card__index">Scene ${String(index + 1).padStart(2, '0')}</p>
              <h3>${escapeHtml(scene.title)}</h3>
              <p class="scene-card__lede">${escapeHtml(extra.lede)}</p>
              <div class="scene-tags">${tags}</div>
            </div>
            <aside class="scene-card__aside">
              <p class="scene-card__label">当前任务</p>
              <p class="scene-card__summary">${escapeHtml(extra.readingTask)}</p>
            </aside>
          </div>

          <div class="scene-card__grid">
            <section class="scene-panel">
              <p class="scene-card__label">观看纪律</p>
              <p class="scene-panel__content">${escapeHtml(extra.discipline)}</p>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">不可滑向</p>
              <ul>${riskItems}</ul>
            </section>
            <section class="scene-panel scene-panel--wide">
              <p class="scene-card__label">证据边界</p>
              <p class="scene-panel__content">${escapeHtml(extra.boundaryText)}</p>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">Manifest 摘要</p>
              <p class="scene-panel__content">${escapeHtml(scene.summary)}</p>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">当前备注</p>
              <p class="scene-panel__content">${escapeHtml(scene.notes)}</p>
            </section>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderMedia(scene) {
  if (scene.video) {
    stageMedia.innerHTML = `<video controls playsinline muted loop preload="metadata" src="${escapeHtml(scene.video)}"></video>`;
    return;
  }

  if (scene.poster) {
    stageMedia.innerHTML = `<img src="${escapeHtml(scene.poster)}" alt="${escapeHtml(scene.title)} poster" />`;
    return;
  }

  const extra = ENRICHMENTS[scene.id];
  stageMedia.innerHTML = `
    <div class="media-placeholder">
      <div class="media-placeholder__inner">
        <strong>${escapeHtml(scene.title)}</strong>
        <p>${escapeHtml(extra.lede)}</p>
      </div>
    </div>
  `;
}

function setActiveScene(scene, index, total) {
  const extra = ENRICHMENTS[scene.id];
  document.documentElement.dataset.scene = scene.id;

  stageChapter.textContent = extra.chapterLabel;
  stageCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  stageStatusLabel.textContent = getStatusLabel(scene);
  stageTitle.textContent = scene.title;
  stageSummary.textContent = extra.lede;
  stageReadingTask.textContent = extra.readingTask;
  stageBoundary.textContent = `${extra.boundaryText} Evidence: ${scene.evidenceGrade} · ${scene.sourceRef}. Allowed mode: ${scene.allowedMode}.`;

  stageBadges.innerHTML = `
    <span class="status-pill status-pill--${getStatusTone(scene)}">${escapeHtml(scene.status)}</span>
    <span class="status-pill">${escapeHtml(scene.anchor)}</span>
    <span class="status-pill">${escapeHtml(scene.allowedMode)}</span>
  `;

  stageRiskList.innerHTML = extra.mustNotBecome
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  renderMedia(scene);

  document.querySelectorAll('[data-scene-link]').forEach((node) => {
    node.classList.toggle('is-active', node.dataset.sceneLink === scene.id);
  });
}

async function init() {
  const response = await fetch('../scenes.manifest.json');
  const data = await response.json();
  const scenes = data.scenes.filter((scene) => ENRICHMENTS[scene.id]);

  renderHardBoundaries();
  renderMetrics(scenes);
  renderSceneIndex(scenes);
  renderSceneStack(scenes);
  setActiveScene(scenes[0], 0, scenes.length);

  const sceneMap = new Map(scenes.map((scene, index) => [scene.id, { scene, index }]));
  const sections = [...document.querySelectorAll('[data-scene]')];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const payload = sceneMap.get(visible.target.dataset.scene);
      if (payload) {
        setActiveScene(payload.scene, payload.index, scenes.length);
      }
    },
    {
      rootMargin: '-18% 0px -34% 0px',
      threshold: [0.2, 0.35, 0.5, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

init().catch((error) => {
  console.error(error);
  sceneStack.innerHTML = '<p style="color:#d88c7b">reference-shell 读取失败。请确认静态服务器运行在 web/ 根目录，并且 ../scenes.manifest.json 可访问。</p>';
});
