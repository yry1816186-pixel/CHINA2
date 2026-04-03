const navRoot = document.getElementById('scene-nav');
const storyRoot = document.getElementById('story');
const stageMedia = document.getElementById('stage-media');
const stageChapter = document.getElementById('stage-chapter');
const stageTitle = document.getElementById('stage-title');
const stageSummary = document.getElementById('stage-summary');
const stageStatus = document.getElementById('stage-status');
const stageAnchor = document.getElementById('stage-anchor');
const stageEvidence = document.getElementById('stage-evidence');
const stageMode = document.getElementById('stage-mode');
const stageNotes = document.getElementById('stage-notes');

const readyStates = new Set(['reviewed_candidate_registered']);

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderNav(scenes) {
  navRoot.innerHTML = scenes
    .map((scene) => {
      const statusClass = readyStates.has(scene.status) ? 'is-ready' : 'is-risky';
      return `
        <a class="scene-link" href="#${scene.id}" data-scene-link="${scene.id}">
          <p class="scene-link__meta ${statusClass}">${escapeHtml(scene.status)}</p>
          <strong>${escapeHtml(scene.title)}</strong>
          <span class="scene-link__meta">${escapeHtml(scene.chapterId)}</span>
        </a>
      `;
    })
    .join('');
}

function renderStory(scenes) {
  storyRoot.innerHTML = scenes
    .map((scene, index) => {
      const tags = [scene.anchor, scene.sourceRef, scene.evidenceGrade, scene.allowedMode]
        .map((item) => `<span class="scene-tag">${escapeHtml(item)}</span>`)
        .join('');
      return `
        <article class="scene-section" id="${scene.id}" data-scene="${scene.id}">
          <div class="scene-section__index">Scene ${String(index + 1).padStart(2, '0')}</div>
          <h3>${escapeHtml(scene.title)}</h3>
          <p>${escapeHtml(scene.summary)}</p>
          <div class="scene-tags">${tags}</div>
          <p>${escapeHtml(scene.notes)}</p>
        </article>
      `;
    })
    .join('');
}

function renderMedia(scene) {
  if (scene.video) {
    stageMedia.innerHTML = `
      <video controls playsinline muted loop preload="metadata" src="${escapeHtml(scene.video)}"></video>
    `;
    return;
  }

  if (scene.poster) {
    stageMedia.innerHTML = `
      <img src="${escapeHtml(scene.poster)}" alt="${escapeHtml(scene.title)} poster" />
    `;
    return;
  }

  stageMedia.innerHTML = `
    <div class="media-placeholder">
      <div>
        <strong>${escapeHtml(scene.title)}</strong><br />
        暂无接入样片。当前用执行壳验证滚动节奏、文本显隐和 sticky stage 信息结构。
      </div>
    </div>
  `;
}

function setActiveScene(scene) {
  stageChapter.textContent = scene.chapterId;
  stageTitle.textContent = scene.title;
  stageSummary.textContent = scene.summary;
  stageStatus.textContent = scene.status;
  stageAnchor.textContent = scene.anchor;
  stageEvidence.textContent = `${scene.evidenceGrade} · ${scene.sourceRef}`;
  stageMode.textContent = scene.allowedMode;
  stageNotes.textContent = scene.notes;
  renderMedia(scene);

  document.querySelectorAll('[data-scene-link]').forEach((node) => {
    node.classList.toggle('is-active', node.dataset.sceneLink === scene.id);
  });
}

async function init() {
  const response = await fetch('./scenes.manifest.json');
  const data = await response.json();
  const scenes = data.scenes;

  renderNav(scenes);
  renderStory(scenes);
  setActiveScene(scenes[0]);

  const sceneMap = new Map(scenes.map((scene) => [scene.id, scene]));
  const sections = [...document.querySelectorAll('[data-scene]')];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const scene = sceneMap.get(visible.target.dataset.scene);
      if (scene) setActiveScene(scene);
    },
    {
      rootMargin: '-20% 0px -35% 0px',
      threshold: [0.2, 0.4, 0.6, 0.8]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

init().catch((error) => {
  console.error(error);
  storyRoot.innerHTML = '<p style="color:#d67a7a">scenes.manifest.json 读取失败，请检查静态服务器是否正常运行。</p>';
});
