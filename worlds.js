/* ============================================================
   MUSICA UNIVERSALIS · Seven small worlds
   Each planet opens a different room in the same universe.
   ============================================================ */

(() => {
  'use strict';

  const MU = window.MusicUniverse;
  if (!MU) return;

  const { ERAS, audio, scene } = MU;
  const REDUCED_MOTION = Boolean(MU.reduceMotion);
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const ROMAN = ['I', 'II', 'III'];
  const BRANCH_PALETTES = {
    medieval: ['#c8b5ff', '#ffd18f', '#91dcff'],
    renaissance: ['#99512e', '#69784d', '#b18233'],
    baroque: ['#ffd27a', '#ff9c7b', '#d1afff'],
    classical: ['#9d783b', '#6f7f8f', '#b68e51'],
    romantic: ['#ffc1cb', '#b9c8ff', '#ffe0af'],
    modern: ['#62f4ff', '#ff4fd8', '#d5ff4d'],
    contemporary: ['#b7a5ff', '#7fe8ff', '#ff9fe7']
  };

  const worldView = $('#worldView');
  const worldStage = $('#worldStage');
  const worldBack = $('#worldBack');
  const worldPrev = $('#worldPrev');
  const worldNext = $('#worldNext');
  const worldPrevName = $('#worldPrevName');
  const worldNextName = $('#worldNextName');
  const worldIndex = $('#worldIndex');
  const worldEn = $('#worldEn');
  const worldWarp = $('#worldWarp');
  const stageEl = $('#stage');
  const topbarEl = $('#topbar');

  let worldOpen = false;
  let currentWorld = 0;
  let pendingWorld = null;
  let lastTrigger = null;
  let closingTimer = null;
  let switchingTimer = null;
  let audioPlaying = false;
  let activeTrack = null;
  let worldAudioElement = null;
  let activeSceneCleanup = null;
  let modernSetMode = null;

  function esc(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function hexToRgb(hex) {
    const normalized = hex.replace('#', '');
    const value = parseInt(normalized, 16);
    return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
  }

  /* ----------------------------------------------------------
     Shared editorial pieces
     ---------------------------------------------------------- */

  function heading(era, options = {}) {
    const glitch = options.glitch ? ` data-text="${esc(era.name)}"` : '';
    return `
      <header class="w-head ${options.className || ''}">
        <p class="w-kicker"><span class="w-kicker__line" aria-hidden="true"></span>${esc(era.kicker)}</p>
        <h1 class="w-title" id="worldTitle">
          <span class="w-title__name"${glitch}>${esc(era.name)}</span>
          <em class="w-title__tag">${esc(era.tagline)}</em>
        </h1>
        <p class="w-years">${esc(era.years)}<span class="w-room">${esc(era.worldName)}</span></p>
      </header>
    `;
  }

  function description(era, className = '') {
    return `<p class="w-desc ${className}">${esc(era.desc)}</p>`;
  }

  function quote(era, className = '') {
    return `<blockquote class="w-quote ${className}">
      <span>${esc(era.quote)}</span>
      <cite>— ${esc(era.quoteBy)}</cite>
    </blockquote>`;
  }

  function traits(era, className = '') {
    return `<ul class="w-traits ${className}" aria-label="時代特徵">
      ${era.traits.map((trait) => `<li>${esc(trait)}</li>`).join('')}
    </ul>`;
  }

  function branches(era, className = '') {
    return `<div class="w-branches ${className}" role="group" aria-label="三條支流">
      ${era.branches.map((branch, index) => `
        <button
          class="w-branch"
          type="button"
          data-world-branch="${index}"
          aria-pressed="${index === 0}"
        >
          <span class="w-branch__num">${ROMAN[index]}</span>
          <span class="w-branch__copy">
            <span class="w-branch__name">${esc(branch.title)}</span>
            <span class="w-branch__tag">${esc(branch.tag)}</span>
          </span>
          <span class="w-branch__arrow" aria-hidden="true">↗</span>
        </button>
      `).join('')}
    </div>`;
  }

  function lore(era, className = '') {
    const branch = era.branches[0];
    return `<div class="w-lore ${className}" data-world-lore aria-live="polite">
      <p class="w-lore__tag" data-lore-tag>${esc(branch.tag)}</p>
      <h2 class="w-lore__title" data-lore-title>${esc(branch.title)}</h2>
      <p class="w-lore__text" data-lore-text>${esc(branch.text)}</p>
    </div>`;
  }

  function people(era, className = '', label = '代表作曲家 · COMPOSERS') {
    return `<div class="w-people-wrap ${className}">
      <p class="w-label">${esc(label)}</p>
      <ol class="w-people">
        ${era.composers.map((composer, index) => `
          <li class="w-person">
            <span class="w-person__num">0${index + 1}</span>
            <span class="w-person__name">${esc(composer.name)}<small>${esc(composer.work)}</small></span>
            <span class="w-person__dates">${esc(composer.years)}</span>
          </li>
        `).join('')}
      </ol>
    </div>`;
  }

  function audioControl(era, className = '') {
    const track = era.tracks?.[0] || {
      title: '歷史曲目',
      composer: '',
      year: '',
      src: null
    };
    return `<div class="w-audio ${className}" data-world-audio>
      <button class="w-audio__btn" type="button" data-world-play aria-label="播放曲目：${esc(track.title)}" aria-pressed="false">
        <span class="w-audio__icon" aria-hidden="true"><i></i></span>
      </button>
      <div class="w-audio__text">
        <span class="w-audio__title" data-track-title title="${esc(track.fullTitle || track.title)}">${esc(track.title)}</span>
        <span class="w-audio__meta" data-track-meta title="${esc(track.composer)}${track.year ? ` · ${esc(track.year)}` : ''}">${esc(track.composer)}${track.year ? ` · ${esc(track.year)}` : ''} · ${track.src ? '歷史錄音' : '聲音示意'}</span>
      </div>
      <div class="w-eq" aria-hidden="true">${'<i></i>'.repeat(14)}</div>
      <span class="w-audio__status" data-audio-status>PLAY</span>
    </div>`;
  }

  /* ----------------------------------------------------------
     Seven worlds
     ---------------------------------------------------------- */

  function medievalWorld(era) {
    return `<div class="ws ws-medieval">
      <div class="med-vault" aria-hidden="true"></div>
      <div class="med-arch" aria-hidden="true"></div>
      <div class="med-dust" aria-hidden="true">${'<i></i>'.repeat(12)}</div>
      <div class="med-layout">
        <div class="med-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          <div class="med-folios">
            <p class="w-label">三頁手抄本 · FOLIOS</p>
            ${branches(era, 'med-branches')}
            ${lore(era, 'med-lore')}
          </div>
        </div>
        <aside class="med-side">
          <div class="med-window-zone" aria-hidden="true">
            <div class="med-window">
              <span class="med-window__glass"></span>
              <span class="med-window__petals"></span>
              <span class="med-window__core"></span>
            </div>
            <p class="med-caption">LUX AETERNA</p>
          </div>
          <div class="med-candle" aria-hidden="true">
            <span class="med-candle__flame"></span>
            <span class="med-candle__wick"></span>
            <span class="med-candle__wax"></span>
          </div>
          ${audioControl(era, 'med-audio')}
          ${people(era, 'med-people', '邊註 · MARGINALIA')}
        </aside>
      </div>
    </div>`;
  }

  function renaissanceWorld(era) {
    return `<div class="ws ws-renaissance">
      <div class="ren-sky" aria-hidden="true"></div>
      <div class="ren-sun" aria-hidden="true"></div>
      <div class="ren-arches" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="ren-hedges" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="ren-layout">
        <div class="ren-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          <div class="ren-voices">
            <p class="w-label">三條聲部 · VOICES</p>
            ${branches(era, 'ren-branches')}
          </div>
          ${lore(era, 'ren-lore')}
        </div>
        <div class="ren-visual">
          <div class="ren-ribbons" aria-hidden="true">
            <svg viewBox="0 0 620 430" preserveAspectRatio="none">
              <path class="ren-ribbon ren-ribbon--a" d="M -30 332 C 110 386, 188 164, 340 214 S 552 121, 668 37"/>
              <path class="ren-ribbon ren-ribbon--b" d="M -36 292 C 132 252, 196 360, 352 282 S 516 187, 660 110"/>
              <path class="ren-ribbon ren-ribbon--c" d="M -20 382 C 154 316, 214 108, 356 166 S 528 278, 666 234"/>
              <path class="ren-ribbon ren-ribbon--d" d="M -26 224 C 118 178, 234 278, 366 318 S 528 100, 662 68"/>
            </svg>
            <span class="ren-ribbons__caption">QUATTUOR VOCES</span>
          </div>
          ${audioControl(era, 'ren-audio')}
          ${people(era, 'ren-people', '宮廷名冊 · REGISTER')}
        </div>
      </div>
    </div>`;
  }

  function baroqueWorld(era) {
    return `<div class="ws ws-baroque">
      <div class="bar-arch" aria-hidden="true"></div>
      <div class="bar-curtain bar-curtain--left" aria-hidden="true"></div>
      <div class="bar-curtain bar-curtain--right" aria-hidden="true"></div>
      <div class="bar-lights" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="bar-chandelier" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="bar-layout">
        <div class="bar-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          ${people(era, 'bar-people', 'DRAMATIS PERSONAE')}
        </div>
        <aside class="bar-playbill">
          <div class="bar-playbill__head">
            <p>TEATRO D'OMBRE</p>
            <h2>今夜劇目</h2>
            <span>TRE ATTI</span>
          </div>
          ${branches(era, 'bar-branches')}
          ${lore(era, 'bar-lore')}
          ${audioControl(era, 'bar-audio')}
        </aside>
      </div>
    </div>`;
  }

  function classicalWorld(era) {
    return `<div class="ws ws-classical">
      <div class="cla-sun" aria-hidden="true"></div>
      <div class="cla-columns" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="cla-layout">
        <div class="cla-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          <div class="cla-under">
            ${audioControl(era, 'cla-audio')}
            ${people(era, 'cla-people', '代表作曲家 · COMPOSERS')}
          </div>
        </div>
        <div class="cla-atlas">
          <div class="cla-dial" aria-hidden="true">
            <span class="cla-ring cla-ring--1"></span>
            <span class="cla-ring cla-ring--2"></span>
            <span class="cla-ring cla-ring--3"></span>
            <span class="cla-axis"></span>
            <span class="cla-node cla-node--1">I</span>
            <span class="cla-node cla-node--2">II</span>
            <span class="cla-node cla-node--3">III</span>
            <span class="cla-pointer"></span>
            <span class="cla-center"><i></i></span>
          </div>
          <div class="cla-movements">
            <p class="w-label">三個樂章 · MOVEMENTS</p>
            ${branches(era, 'cla-branches')}
          </div>
          ${lore(era, 'cla-lore')}
        </div>
      </div>
    </div>`;
  }

  function romanticWorld(era) {
    return `<div class="ws ws-romantic">
      <div class="rom-sky" aria-hidden="true"></div>
      <div class="rom-moon" aria-hidden="true"></div>
      <div class="rom-clouds" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="rom-rain" aria-hidden="true"></div>
      <div class="rom-mountains" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="rom-layout">
        <div class="rom-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          <div class="rom-paths">
            <p class="w-label">三條夜路 · PATHS</p>
            ${branches(era, 'rom-branches')}
          </div>
          ${lore(era, 'rom-lore')}
        </div>
        <aside class="rom-side">
          ${audioControl(era, 'rom-audio')}
          ${people(era, 'rom-people', '星座上的名字 · CONSTELLATION')}
          <div class="rom-piano" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </aside>
      </div>
    </div>`;
  }

  function modernWorld(era) {
    return `<div class="ws ws-modern">
      <div class="mod-grid" aria-hidden="true"></div>
      <div class="mod-scanlines" aria-hidden="true"></div>
      <div class="mod-shards" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="mod-layout">
        <div class="mod-main">
          ${heading(era, { glitch: true })}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          ${audioControl(era, 'mod-audio')}
        </div>
        <div class="mod-console">
          <div class="mod-scope">
            <canvas id="modernScope" class="mod-canvas" aria-hidden="true"></canvas>
            <div class="mod-scope__hud">
              <span>CHANNEL <b data-mod-channel>01</b></span>
              <span data-mod-mode>SINE</span>
            </div>
          </div>
          <div class="mod-fragments">
            <p class="w-label">三塊碎片 · FRAGMENTS</p>
            ${branches(era, 'mod-branches')}
          </div>
          ${lore(era, 'mod-lore')}
          ${people(era, 'mod-people', '訊號來源 · SOURCES')}
        </div>
      </div>
    </div>`;
  }

  function contemporaryWorld(era) {
    return `<div class="ws ws-contemporary">
      <div class="con-aurora" aria-hidden="true"></div>
      <div class="con-mesh" aria-hidden="true"></div>
      <div class="con-layout">
        <div class="con-main">
          ${heading(era)}
          ${description(era)}
          ${quote(era)}
          ${traits(era)}
          ${audioControl(era, 'con-audio')}
          ${people(era, 'con-people', '軌道上的名字 · IN ORBIT')}
        </div>
        <div class="con-orbit">
          <div class="con-sphere" aria-hidden="true">
            <svg viewBox="0 0 420 420" class="con-wire">
              <circle cx="210" cy="210" r="150" />
              <ellipse cx="210" cy="210" rx="150" ry="52" />
              <ellipse cx="210" cy="210" rx="150" ry="52" transform="rotate(60 210 210)" />
              <ellipse cx="210" cy="210" rx="150" ry="52" transform="rotate(120 210 210)" />
              <ellipse cx="210" cy="210" rx="52" ry="150" />
              <ellipse cx="210" cy="210" rx="108" ry="150" />
              <ellipse cx="210" cy="210" rx="36" ry="150" />
            </svg>
            <span class="con-ring con-ring--a"></span>
            <span class="con-ring con-ring--b"></span>
            <span class="con-ring con-ring--c"></span>
            <span class="con-core"></span>
          </div>
          <div class="con-nodes">
            <p class="w-label">三顆訊號節點 · SIGNAL NODES</p>
            ${branches(era, 'con-branches')}
          </div>
          ${lore(era, 'con-lore')}
        </div>
      </div>
    </div>`;
  }

  const WORLD_TEMPLATES = {
    medieval: medievalWorld,
    renaissance: renaissanceWorld,
    baroque: baroqueWorld,
    classical: classicalWorld,
    romantic: romanticWorld,
    modern: modernWorld,
    contemporary: contemporaryWorld
  };

  /* ----------------------------------------------------------
     World scene effects
     ---------------------------------------------------------- */

  function initModernScope(era, worldData) {
    const canvas = $('#modernScope', worldStage);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    let mode = 0;
    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now) => {
      if (!canvas.isConnected) return;
      const t = now * 0.001;
      const amp = (worldView.classList.contains('is-playing') ? 1.5 : 1) * (height * 0.18);
      const palette = mode === 0
        ? ['rgba(98,244,255,.88)', 'rgba(98,244,255,.2)']
        : mode === 1
          ? ['rgba(255,79,216,.9)', 'rgba(255,79,216,.18)']
          : ['rgba(213,255,77,.9)', 'rgba(213,255,77,.16)'];

      ctx.clearRect(0, 0, width, height);

      // A faint centre line and moving grid.
      ctx.strokeStyle = 'rgba(160, 240, 255, .08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.5);
      ctx.lineTo(width, height * 0.5);
      ctx.stroke();

      for (let x = 0; x < width; x += 32) {
        ctx.strokeStyle = 'rgba(180, 240, 255, .035)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const trace = (offset, alpha, lineWidth) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const p = x / Math.max(1, width);
          let y = 0;

          if (mode === 0) {
            y = Math.sin(p * 8 + t * 1.4 + offset) * amp * 0.58
              + Math.sin(p * 19 - t * 0.9 + offset * 2) * amp * 0.26
              + Math.sin(p * 2.2 + t * 0.4) * amp * 0.2;
          } else if (mode === 1) {
            const step = Math.sin(p * 14 + t * 1.1 + offset);
            y = Math.sign(step) * amp * 0.55
              + Math.sin(p * 83 - t * 2.2 + offset) * amp * 0.08;
          } else {
            const cell = Math.floor(p * 18 + t * 8 + offset);
            const values = [0.8, -0.42, 0.1, -0.85, 0.55, -0.15, 0.95, -0.62];
            y = values[Math.abs(cell) % values.length] * amp * 0.62;
          }

          const px = x;
          const py = height * 0.5 + y;
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = palette[0];
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };

      trace(0, 0.95, 1.8);
      trace(1.4, 0.28, 1);

      // Blips and glitch bands.
      if (Math.random() < 0.025) {
        ctx.fillStyle = 'rgba(255,255,255,.14)';
        ctx.fillRect(0, Math.random() * height, width, 2);
      }
      ctx.fillStyle = palette[1];
      ctx.fillRect((t * 80) % width, height * 0.5 - 1, 1, 2);

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);

    return {
      setMode(nextMode) {
        mode = nextMode;
        const labels = ['SINE', 'PULSE', 'SERIES'];
        const channel = $(`[data-mod-channel]`, worldStage);
        const label = $(`[data-mod-mode]`, worldStage);
        if (channel) channel.textContent = `0${nextMode + 1}`;
        if (label) label.textContent = labels[nextMode];
        worldView.style.setProperty('--branch-color', BRANCH_PALETTES[era.id][nextMode]);
        worldView.style.setProperty('--branch-rgb', hexToRgb(BRANCH_PALETTES[era.id][nextMode]));
        worldData.activeBranch = nextMode;
      },
      cleanup() {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
      }
    };
  }

  /* ----------------------------------------------------------
     Render + interactions
     ---------------------------------------------------------- */

  function setAudioPlaying(playing) {
    audioPlaying = playing;
    const wrapper = $('[data-world-audio]', worldStage);
    const button = $('[data-world-play]', worldStage);
    const status = $('[data-audio-status]', worldStage);
    if (!wrapper || !button || !status) return;

    const trackTitle = $('[data-track-title]', worldStage)?.textContent?.trim() || '曲目';
    wrapper.classList.toggle('is-playing', playing);
    worldView.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? `暫停 ${trackTitle}` : `播放曲目：${trackTitle}`);
    status.textContent = playing ? 'PAUSE' : 'PLAY';
  }

  function stopWorldTrackAudio() {
    if (!worldAudioElement) return;
    try {
      worldAudioElement.pause();
      worldAudioElement.currentTime = 0;
      worldAudioElement.src = '';
    } catch (error) {
      // The element may already have been detached by the browser.
    }
    worldAudioElement = null;
  }

  function stopWorldAudio() {
    stopWorldTrackAudio();
    audio.stop();
    if (audioPlaying) setAudioPlaying(false);
  }

  function playActiveTrack(era) {
    if (!activeTrack) return false;

    if (activeTrack.src) {
      try {
        const element = new Audio(activeTrack.src);
        element.loop = true;
        element.volume = 0.82;
        worldAudioElement = element;
        const promise = element.play();
        if (promise && typeof promise.catch === 'function') {
          promise.catch(() => {
            stopWorldTrackAudio();
            setAudioPlaying(false);
            const status = $('[data-audio-status]', worldStage);
            if (status) status.textContent = 'ERROR';
          });
        }
        return true;
      } catch (error) {
        worldAudioElement = null;
        return false;
      }
    }

    return audio.play(era.motif);
  }

  function bindWorld(era, index) {
    setAudioPlaying(false);
    activeTrack = null;
    const branchButtons = $$('[data-world-branch]', worldStage);
    const loreTag = $('[data-lore-tag]', worldStage);
    const loreTitle = $('[data-lore-title]', worldStage);
    const loreText = $('[data-lore-text]', worldStage);
    const loreBox = $('[data-world-lore]', worldStage);
    const palette = BRANCH_PALETTES[era.id] || BRANCH_PALETTES.medieval;

    const selectBranch = (branchIndex, animate = true) => {
      const branch = era.branches[branchIndex];
      if (!branch) return;

      if (audioPlaying) stopWorldAudio();

      branchButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === branchIndex;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      worldView.dataset.branch = String(branchIndex);
      worldView.style.setProperty('--branch-color', palette[branchIndex]);
      worldView.style.setProperty('--branch-rgb', hexToRgb(palette[branchIndex]));
      worldView.style.setProperty('--branch-index', String(branchIndex));
      worldView.dataset.branchName = branch.title;

      if (loreTag) loreTag.textContent = branch.tag;
      if (loreTitle) loreTitle.textContent = branch.title;
      if (loreText) loreText.textContent = branch.text;

      const track = era.tracks?.[branchIndex];
      const trackTitle = $('[data-track-title]', worldStage);
      const trackMeta = $('[data-track-meta]', worldStage);
      const playButton = $('[data-world-play]', worldStage);
      if (track) {
        activeTrack = track;
        const fullTitle = track.fullTitle || track.title;
        const meta = `${track.composer}${track.year ? ` · ${track.year}` : ''}${track.src ? ' · 歷史錄音' : ' · 聲音示意'}`;
        if (trackTitle) {
          trackTitle.textContent = track.title;
          trackTitle.title = fullTitle;
        }
        if (trackMeta) {
          trackMeta.textContent = meta;
          trackMeta.title = meta;
        }
        worldView.dataset.track = track.title;
        if (playButton) {
          playButton.setAttribute('aria-label', `播放曲目：${fullTitle}${track.src ? '' : '（聲音示意）'}`);
          playButton.title = track.note ? `${fullTitle} — ${track.note}` : fullTitle;
        }
      }

      if (loreBox && animate && !REDUCED_MOTION) {
        loreBox.classList.remove('is-swapping');
        void loreBox.offsetWidth;
        loreBox.classList.add('is-swapping');
        window.setTimeout(() => loreBox.classList.remove('is-swapping'), 140);
      }

      if (modernSetMode) modernSetMode(branchIndex);
    };

    branchButtons.forEach((button) => {
      button.addEventListener('click', () => {
        selectBranch(Number(button.dataset.worldBranch));
      });
    });

    worldStage.onkeydown = (event) => {
      const currentButton = event.target.closest('[data-world-branch]');
      if (!currentButton) return;
      const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();

      const currentIndex = Number(currentButton.dataset.worldBranch);
      let nextIndex = currentIndex;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % branchButtons.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + branchButtons.length) % branchButtons.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = branchButtons.length - 1;

      selectBranch(nextIndex);
      branchButtons[nextIndex].focus();
    };

    selectBranch(0, false);

    const playButton = $('[data-world-play]', worldStage);
    if (playButton) {
      if (!audio.supported) {
        playButton.disabled = true;
        const status = $('[data-audio-status]', worldStage);
        if (status) status.textContent = 'N/A';
      } else {
        playButton.addEventListener('click', () => {
          if (audioPlaying) {
            stopWorldAudio();
            return;
          }
          const started = playActiveTrack(era);
          if (started) setAudioPlaying(true);
          else {
            const status = $('[data-audio-status]', worldStage);
            if (status) status.textContent = 'ERROR';
          }
        });
      }
    }

    if (era.id === 'modern') {
      const scope = initModernScope(era, { activeBranch: 0 });
      if (scope) {
        modernSetMode = scope.setMode;
        modernSetMode(0);
        activeSceneCleanup = () => {
          modernSetMode = null;
          scope.cleanup();
        };
      }
    }
  }

  function renderWorld(index) {
    const era = ERAS[index];
    if (!era) return;

    if (activeSceneCleanup) {
      activeSceneCleanup();
      activeSceneCleanup = null;
    }
    modernSetMode = null;
    stopWorldAudio();

    currentWorld = index;
    worldView.dataset.world = era.id;
    worldView.style.setProperty('--branch-color', BRANCH_PALETTES[era.id][0]);
    worldView.style.setProperty('--branch-rgb', hexToRgb(BRANCH_PALETTES[era.id][0]));
    worldIndex.textContent = era.idx;
    worldEn.textContent = era.en;

    const matchingPlanet = document.querySelector(`.planet[data-era="${era.id}"]`);
    if (matchingPlanet) lastTrigger = matchingPlanet;
    worldView.style.setProperty('--origin-x', worldView.style.getPropertyValue('--origin-x') || '50vw');
    worldView.scrollTop = 0;

    const template = WORLD_TEMPLATES[era.id];
    worldStage.innerHTML = template(era);
    bindWorld(era, index);
    updateNavigation(index);

    document.title = `${era.name} · 音樂宇宙`;
  }

  function updateNavigation(index) {
    const total = ERAS.length;
    const prev = ERAS[(index - 1 + total) % total];
    const next = ERAS[(index + 1) % total];
    worldPrevName.textContent = prev.name;
    worldNextName.textContent = next.name;
    worldPrev.setAttribute('aria-label', `上一個世界：${prev.name}`);
    worldNext.setAttribute('aria-label', `下一個世界：${next.name}`);
  }

  function animateWarpAt(x, y) {
    if (REDUCED_MOTION) return;
    worldWarp.style.left = `${x}px`;
    worldWarp.style.top = `${y}px`;
    worldWarp.classList.remove('is-active');
    void worldWarp.offsetWidth;
    worldWarp.classList.add('is-active');
  }

  function openWorld(eraId, trigger) {
    const index = ERAS.findIndex((era) => era.id === eraId);
    if (index < 0) return;

    if (worldOpen) {
      switchWorldTo(index, true);
      return;
    }

    window.clearTimeout(closingTimer);
    lastTrigger = trigger || null;
    pendingWorld = null;

    const rect = trigger ? trigger.getBoundingClientRect() : null;
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    worldView.style.setProperty('--origin-x', `${originX}px`);
    worldView.style.setProperty('--origin-y', `${originY}px`);

    renderWorld(index);
    worldView.scrollTop = 0;
    worldView.removeAttribute('inert');
    worldView.setAttribute('aria-hidden', 'false');
    stageEl.setAttribute('inert', '');
    stageEl.setAttribute('aria-hidden', 'true');
    topbarEl.setAttribute('inert', '');
    topbarEl.setAttribute('aria-hidden', 'true');

    worldOpen = true;
    scene.paused = true;
    document.body.classList.add('is-world');
    animateWarpAt(originX, originY);

    requestAnimationFrame(() => {
      worldView.classList.add('is-open');
    });

    window.setTimeout(() => {
      if (worldOpen) worldBack.focus({ preventScroll: true });
    }, REDUCED_MOTION ? 40 : 220);
  }

  function closeWorld() {
    if (!worldOpen) return;

    worldOpen = false;
    pendingWorld = null;
    stopWorldAudio();
    activeTrack = null;
    if (activeSceneCleanup) {
      activeSceneCleanup();
      activeSceneCleanup = null;
    }
    modernSetMode = null;
    window.clearTimeout(switchingTimer);

    worldView.classList.remove('is-open');
    worldView.setAttribute('inert', '');
    document.body.classList.remove('is-world');
    scene.paused = document.hidden;

    stageEl.removeAttribute('inert');
    stageEl.removeAttribute('aria-hidden');
    topbarEl.removeAttribute('inert');
    topbarEl.removeAttribute('aria-hidden');

    document.title = '音樂宇宙 · Musica Universalis';

    window.clearTimeout(closingTimer);
    closingTimer = window.setTimeout(() => {
      if (worldOpen) return;
      worldView.setAttribute('aria-hidden', 'true');
    }, 980);

    if (lastTrigger && document.contains(lastTrigger)) {
      window.setTimeout(() => {
        if (!worldOpen) lastTrigger.focus({ preventScroll: true });
      }, REDUCED_MOTION ? 60 : 520);
    }
  }

  function switchWorldTo(index, immediate = false) {
    const total = ERAS.length;
    const normalized = ((index % total) + total) % total;
    if (normalized === currentWorld && pendingWorld === null && !immediate) return;
    if (!worldOpen) {
      openWorld(ERAS[normalized].id, null);
      return;
    }

    pendingWorld = normalized;
    stopWorldAudio();
    if (activeSceneCleanup) {
      activeSceneCleanup();
      activeSceneCleanup = null;
    }
    window.clearTimeout(switchingTimer);
    worldStage.classList.add('is-switching');

    switchingTimer = window.setTimeout(() => {
      const target = pendingWorld ?? normalized;
      pendingWorld = null;
      renderWorld(target);
      worldView.scrollTop = 0;
      worldStage.classList.remove('is-switching');
    }, REDUCED_MOTION ? 20 : 190);
  }

  function nextWorld() {
    switchWorldTo((pendingWorld ?? currentWorld) + 1);
  }

  function previousWorld() {
    switchWorldTo((pendingWorld ?? currentWorld) - 1);
  }

  function getFocusable() {
    return $$('button:not([disabled]), [href], [tabindex]', worldView)
      .filter((element) => element.offsetParent !== null && element.tabIndex >= 0 && !element.closest('[inert]'));
  }

  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  worldView.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeWorld();
      return;
    }

    const insideBranch = event.target.closest('[data-world-branch]');
    if (!insideBranch && event.key === 'ArrowLeft') {
      event.preventDefault();
      previousWorld();
      return;
    }
    if (!insideBranch && event.key === 'ArrowRight') {
      event.preventDefault();
      nextWorld();
      return;
    }

    trapFocus(event);
  });

  worldBack.addEventListener('click', closeWorld);
  worldPrev.addEventListener('click', previousWorld);
  worldNext.addEventListener('click', nextWorld);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && worldOpen) stopWorldAudio();
  });

  // Expose the new experience to the galaxy scene.
  MU.openWorld = openWorld;

  // If the viewport is resized while a world is open, let the fixed scenes
  // recalculate without disturbing the current world.
  window.addEventListener('resize', () => {
    if (!worldOpen) return;
    if (currentWorld === 5 && modernSetMode) modernSetMode(Number(worldView.dataset.branch || 0));
  });
})();
