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

const DROPZONE_ROOT = '../assets/first-wave/';

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

function renderHardBoundaries(boundaries) {
  hardBoundariesRoot.innerHTML = boundaries.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderMetrics(metrics) {
  metricsRoot.innerHTML = metrics
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
      const tags = [scene.anchor, scene.sourceRef, scene.allowedMode, scene.status]
        .map((item) => `<span class="scene-tag">${escapeHtml(item)}</span>`)
        .join('');

      const riskItems = scene.contract.mustNotBecome
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');

      const disclosureItems = scene.contract.requiredDisclosures
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');

      const assetState = scene.resolvedVideo
        ? 'resolved video'
        : scene.resolvedPoster
          ? 'resolved poster'
          : 'placeholder only';

      return `
        <article class="scene-card" id="${scene.id}" data-scene="${scene.id}">
          <div class="scene-card__head">
            <div>
              <p class="scene-card__label scene-card__index">Scene ${String(index + 1).padStart(2, '0')}</p>
              <h3>${escapeHtml(scene.title)}</h3>
              <p class="scene-card__lede">${escapeHtml(scene.contract.lede)}</p>
              <div class="scene-tags">${tags}</div>
            </div>
            <aside class="scene-card__aside">
              <p class="scene-card__label">当前任务</p>
              <p class="scene-card__summary">${escapeHtml(scene.contract.readingTask)}</p>
              <p class="scene-card__summary" style="margin-top:10px;">asset resolution · ${escapeHtml(assetState)}</p>
            </aside>
          </div>

          <div class="scene-card__grid">
            <section class="scene-panel">
              <p class="scene-card__label">观看纪律</p>
              <p class="scene-panel__content">${escapeHtml(scene.contract.discipline)}</p>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">不可滑向</p>
              <ul>${riskItems}</ul>
            </section>
            <section class="scene-panel scene-panel--wide">
              <p class="scene-card__label">证据边界</p>
              <p class="scene-panel__content">${escapeHtml(scene.contract.boundaryText)}</p>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">必须持续披露</p>
              <ul>${disclosureItems}</ul>
            </section>
            <section class="scene-panel">
              <p class="scene-card__label">Manifest 摘要</p>
              <p class="scene-panel__content">${escapeHtml(scene.summary)}</p>
            </section>
            <section class="scene-panel scene-panel--wide">
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
  if (scene.resolvedVideo) {
    stageMedia.innerHTML = `<video controls playsinline muted loop preload="metadata" src="${escapeHtml(scene.resolvedVideo)}"></video>`;
    return;
  }

  if (scene.resolvedPoster) {
    stageMedia.innerHTML = `<img src="${escapeHtml(scene.resolvedPoster)}" alt="${escapeHtml(scene.title)} poster" />`;
    return;
  }

  stageMedia.innerHTML = `
    <div class="media-placeholder">
      <div class="media-placeholder__inner">
        <strong>${escapeHtml(scene.title)}</strong>
        <p>${escapeHtml(scene.contract.lede)}</p>
      </div>
    </div>
  `;
}

function setActiveScene(scene, index, total) {
  document.documentElement.dataset.scene = scene.id;

  stageChapter.textContent = scene.contract.chapterLabel;
  stageCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  stageStatusLabel.textContent = getStatusLabel(scene);
  stageTitle.textContent = scene.title;
  stageSummary.textContent = scene.contract.lede;
  stageReadingTask.textContent = scene.contract.readingTask;
  stageBoundary.textContent = `${scene.contract.boundaryText} Evidence: ${scene.evidenceGrade} · ${scene.sourceRef}. Allowed mode: ${scene.allowedMode}. Strategy: ${scene.contract.strategy}.`;

  stageBadges.innerHTML = `
    <span class="status-pill status-pill--${getStatusTone(scene)}">${escapeHtml(scene.status)}</span>
    <span class="status-pill">${escapeHtml(scene.anchor)}</span>
    <span class="status-pill">${escapeHtml(scene.allowedMode)}</span>
  `;

  stageRiskList.innerHTML = scene.contract.mustNotBecome
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  renderMedia(scene);

  document.querySelectorAll('[data-scene-link]').forEach((node) => {
    node.classList.toggle('is-active', node.dataset.sceneLink === scene.id);
  });
}

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

async function resolveSceneAssets(scene, contract) {
  const videoName = contract.video || null;
  const posterNames = contract.posters || [];

  let resolvedVideo = scene.video || '';
  let resolvedPoster = scene.poster || '';

  if (videoName) {
    const candidate = `${DROPZONE_ROOT}${videoName}`;
    if (await fileExists(candidate)) {
      resolvedVideo = candidate;
    }
  }

  if (!resolvedPoster && posterNames.length) {
    for (const posterName of posterNames) {
      const candidate = `${DROPZONE_ROOT}${posterName}`;
      if (await fileExists(candidate)) {
        resolvedPoster = candidate;
        break;
      }
    }
  }

  return {
    ...scene,
    resolvedVideo,
    resolvedPoster
  };
}

function mergeScenes(manifestScenes, contractsById) {
  return manifestScenes
    .filter((scene) => contractsById[scene.id])
    .map((scene) => ({
      ...scene,
      contract: contractsById[scene.id]
    }));
}

function buildAssetContractMap(assetContract) {
  const map = new Map();

  for (const item of assetContract.requiredCoreScenes || []) {
    map.set(item.sceneId, item);
  }

  for (const item of assetContract.exploratoryOnly || []) {
    map.set(item.sceneId, item);
  }

  return map;
}

async function init() {
  const [manifestResponse, contractResponse, assetResolutionResponse] = await Promise.all([
    fetch('../scenes.manifest.json'),
    fetch('./scene.contracts.json'),
    fetch('./ASSET_RESOLUTION_CONTRACT.json')
  ]);

  const manifestData = await manifestResponse.json();
  const contractData = await contractResponse.json();
  const assetResolutionData = await assetResolutionResponse.json();

  const assetMap = buildAssetContractMap(assetResolutionData);
  const mergedScenes = mergeScenes(manifestData.scenes, contractData.sceneContracts);
  const scenes = await Promise.all(
    mergedScenes.map((scene) => resolveSceneAssets(scene, assetMap.get(scene.id) || {}))
  );

  renderHardBoundaries(contractData.project.hardBoundaries);
  renderMetrics(contractData.project.metrics);
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
  sceneStack.innerHTML = '<p style="color:#d88c7b">dropzone-ready contract shell 读取失败。请确认静态服务器运行在 web/ 根目录，并检查 scene.contracts.json、scenes.manifest.json 与 ASSET_RESOLUTION_CONTRACT.json 是否可访问。</p>';
});
