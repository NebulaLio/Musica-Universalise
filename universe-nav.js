/* Shared cosmic loading screen between universe pages. */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STATUS_STEPS = [
    '建立星際航道',
    '壓縮星系座標',
    '同步音樂指紋',
    '校準引力入場角',
    '準備進入宇宙'
  ];

  function startLoader(link, href) {
    if (document.querySelector('.universe-loader')) return;

    const title = link.dataset.universeTitle || '另一個宇宙';
    const subtitle = link.dataset.universeSub || 'INTERSTELLAR TRANSFER';
    const code = link.dataset.universeCode || 'UNIVERSE';
    const number = link.dataset.universeNumber || '';
    const from = link.dataset.universeFrom || '001';
    const to = link.dataset.universeTo || '002';
    const accent = link.dataset.universeAccent || '#e8c79e';
    const accentRgb = link.dataset.universeAccentRgb || '232, 199, 158';

    const loader = document.createElement('div');
    loader.className = 'universe-loader';
    loader.tabIndex = -1;
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    loader.setAttribute('aria-label', `正在前往${title}`);
    loader.style.setProperty('--loader-accent', accent);
    loader.style.setProperty('--loader-accent-rgb', accentRgb);
    loader.innerHTML = `
      <div class="universe-loader__stars" aria-hidden="true"></div>
      <div class="universe-loader__vignette" aria-hidden="true"></div>
      <span class="universe-loader__ghost" aria-hidden="true" data-loader-ghost></span>
      <div class="universe-loader__panel">
        <p class="universe-loader__eyebrow">INTERSTELLAR TRANSIT · <span data-loader-code></span></p>
        <div class="universe-loader__route" aria-hidden="true">
          <span data-loader-from></span>
          <i></i>
          <b data-loader-to></b>
        </div>
        <div class="universe-loader__orbit" aria-hidden="true">
          <span class="universe-loader__ring"></span>
          <span class="universe-loader__ring universe-loader__ring--two"></span>
          <span class="universe-loader__core"></span>
        </div>
        <h2 class="universe-loader__title">正在前往<span data-loader-title></span></h2>
        <p class="universe-loader__sub" data-loader-sub></p>
        <div class="universe-loader__bar" aria-hidden="true"><span data-loader-bar></span></div>
        <div class="universe-loader__meta">
          <span data-loader-status>建立星際航道</span>
          <b data-loader-percent aria-hidden="true">00%</b>
        </div>
        <div class="universe-loader__telemetry" aria-hidden="true">
          <span><i></i>GRAVITY STABLE</span>
          <span><i></i>SIGNAL LOCKED</span>
          <span><i></i>STAR MAP LINK</span>
        </div>
      </div>
      <p class="universe-loader__footer">
        <span><b></b>GRAVITY LOCK</span>
        <span>DO NOT CLOSE THE PORTAL</span>
      </p>
    `;

    document.body.appendChild(loader);
    loader.querySelector('[data-loader-code]').textContent = code;
    loader.querySelector('[data-loader-title]').textContent = title;
    loader.querySelector('[data-loader-sub]').textContent = subtitle;
    loader.querySelector('[data-loader-from]').textContent = from;
    loader.querySelector('[data-loader-to]').textContent = to;
    loader.querySelector('[data-loader-ghost]').textContent = number;

    [...document.body.children].forEach((child) => {
      if (child !== loader) child.inert = true;
    });
    document.body.setAttribute('aria-busy', 'true');
    document.documentElement.classList.add('is-universe-loading');
    loader.focus({ preventScroll: true });

    requestAnimationFrame(() => loader.classList.add('is-visible'));

    const fill = loader.querySelector('[data-loader-bar]');
    const percent = loader.querySelector('[data-loader-percent]');
    const status = loader.querySelector('[data-loader-status]');
    const duration = reduceMotion ? 680 : 2400;
    const started = performance.now();
    let stage = 0;
    let navigated = false;

    const go = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = href;
    };

    const frame = (now) => {
      const raw = Math.min(1, Math.max(0, (now - started) / duration));
      const eased = 1 - Math.pow(1 - raw, 3);
      fill.style.transform = `scaleX(${eased.toFixed(4)})`;
      percent.textContent = `${String(Math.round(eased * 100)).padStart(2, '0')}%`;

      const nextStage = raw < 0.2 ? 0 : raw < 0.42 ? 1 : raw < 0.64 ? 2 : raw < 0.84 ? 3 : 4;
      if (nextStage !== stage) {
        stage = nextStage;
        status.textContent = STATUS_STEPS[stage];
      }

      if (raw < 1) {
        requestAnimationFrame(frame);
      } else {
        status.textContent = '引力鎖定 · 準備進入';
        window.setTimeout(go, reduceMotion ? 80 : 320);
      }
    };

    requestAnimationFrame(frame);
    window.setTimeout(go, duration + 1400);
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-universe-link]');
    if (!link) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (document.querySelector('.universe-loader')) return;

    event.preventDefault();
    const href = link.getAttribute('href');
    if (!href) return;
    startLoader(link, href);
  });
})();
