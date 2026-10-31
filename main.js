/* =========================================================
   Martin Frontera — Portfolio photo
   GSAP + ScrollTrigger + Lenis
   ========================================================= */
(() => {
  'use strict';

  /* ---------------------------------------------------------
     PHOTOS — fichiers dans photos/ (2400px) et photos/thumb/ (900px).
     Pour en ajouter : dépose NN.jpg dans les deux dossiers et ajoute
     une ligne ici. `p` (lieu) est optionnel, `ex` = EXIF réel.
     --------------------------------------------------------- */
  const PHOTOS = [
    { f: '01', t: 'Banc au jardin',          d: '2026-05', w: 1600, h: 1066 },
    { f: '02', t: 'Rhododendron',            d: '2026-05', w: 1600, h: 1066 },
    { f: '03', t: 'Bleu majorelle',          d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '04', t: 'Montgolfière',            d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '05', t: 'Sous la nacelle',         d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '06', t: 'Entre les oliviers',      d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '07', t: 'Mur rouge',               d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '08', t: 'Patio',                   d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '09', t: 'Zellige',                 d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '10', t: 'Chaton',                  d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '11', t: 'L\'arche',                d: '2026-06', w: 1600, h: 1066, p: 'Maroc' },
    { f: '12', t: 'Mille tiroirs',           d: '2026-06', w: 1066, h: 1600, p: 'Maroc' },
    { f: '13', t: 'Trouée',                  d: '2026-06', w: 1600, h: 1066 },
    { f: '14', t: 'Houle',                   d: '2026-06', w: 1600, h: 1066 },
    { f: '15', t: 'Sentier côtier',          d: '2026-06', w: 1066, h: 1600 },
    { f: '16', t: 'Brume du soir',           d: '2026-06', w: 1066, h: 1600 },
    { f: '17', t: 'Pin solitaire',           d: '2026-06', w: 1600, h: 1066 },
    { f: '18', t: 'Le Puy-en-Velay',         d: '2026-07', w: 2352, h: 1568, p: 'Haute-Loire', ex: { f: 5, s: '1/80', iso: 3200, mm: 63 } },
    { f: '19', t: 'Village dans la vallée',  d: '2026-07', w: 2352, h: 1568, ex: { f: 5.6, s: '1/8000', iso: 1600, mm: 96 } },
    { f: '20', t: 'Nuage d\'orage',          d: '2026-07', w: 1568, h: 2352, ex: { f: 5.6, s: '1/5000', iso: 2500, mm: 96 } },
    { f: '21', t: 'Linge au vent',           d: '2026-07', w: 1568, h: 2352, ex: { f: 20, s: '1/500', iso: 1600, mm: 96 } },
    { f: '22', t: 'La maison dans les blés', d: '2026-07', w: 1568, h: 2352, ex: { f: 5.6, s: '1/8000', iso: 1000, mm: 96 } },
    { f: '23', t: 'Clocher dans les arbres', d: '2026-07', w: 1568, h: 2352, ex: { f: 5.6, s: '1/8000', iso: 1250, mm: 96 } },
    { f: '24', t: 'Mustang',                 d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/8000', iso: 2000, mm: 96 } },
    { f: '25', t: 'Carrosserie noire',       d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/6400', iso: 2000, mm: 96 } },
    { f: '26', t: 'Ruelle et vieille auto',  d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/8000', iso: 2000, mm: 96 } },
    { f: '27', t: 'Bancs à l\'ombre',        d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 2000, mm: 96 } },
    { f: '28', t: 'Flèche',                  d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 2000, mm: 96 } },
    { f: '29', t: 'Embrasement',             d: '2026-09', w: 2352, h: 1568, ex: { f: 5.6, s: '1/8000', iso: 3200, mm: 96 } },
    { f: '30', t: 'Fin d\'été',              d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 3200, mm: 96 } },
    { f: '31', t: 'Sous les pins',           d: '2026-10', w: 2352, h: 1568, ex: { f: 5.6, s: '1/8000', iso: 3200, mm: 96 } },
    { f: '32', t: 'Garée à l\'ombre',        d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 3200, mm: 96 } },
    { f: '33', t: 'Tableau de bord',         d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/2500', iso: 3200, mm: 96 } },
    { f: '34', t: 'Parasol',                 d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 1250, mm: 96 } },
    { f: '35', t: 'Banc vert',               d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 1600, mm: 96 } },
    { f: '36', t: 'Bureau, la nuit',         d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/3333', iso: 3200, mm: 96 } },
    { f: '37', t: 'À travers les branches',  d: '2026-10', w: 2352, h: 1568, ex: { f: 5.6, s: '1/125', iso: 100, mm: 96 } },
    { f: '38', t: 'Silhouettes',             d: '2026-10', w: 1568, h: 2352, ex: { f: 10, s: '1/400', iso: 100, mm: 96 } },
    { f: '39', t: 'Goéland, I',              d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 2000, mm: 96 } },
    { f: '40', t: 'Goéland, II',             d: '2026-10', w: 1568, h: 2352, ex: { f: 5.6, s: '1/10000', iso: 2000, mm: 96 } },
    { f: '41', t: 'Compagnon',               d: '2026-10', w: 1568, h: 2352, ex: { f: 8, s: '1/250', iso: 100, mm: 96 } },
    { f: '42', t: 'Façade',                  d: '2026-09', w: 1568, h: 2352, ex: { f: 5.6, s: '1/8000', iso: 1250, mm: 96 } },
    { f: '43', t: 'Entre deux immeubles',    d: '2026-09', w: 1568, h: 2352, ex: { f: 7.1, s: '1/200', iso: 100, mm: 96 } },
    { f: '44', t: 'Ciel de traîne',          d: '2026-09', w: 1568, h: 2352, ex: { f: 9, s: '1/320', iso: 100, mm: 96 } }
  ];
  const P = (n) => PHOTOS[n - 1]; // P(29) = photos/29.jpg

  // `photo` = numéro du fichier de couverture
  const SERIES = [
    { photo: 9,  name: 'Riads',        meta: 'Maroc — Juin 2026 — 10 images' },
    { photo: 22, name: 'Haute-Loire',  meta: 'Juillet 2026 — 6 images' },
    { photo: 26, name: 'Carrosseries', meta: 'Sept.–oct. 2026 — 6 images' },
    { photo: 14, name: 'Littoral',     meta: '2026 — 9 images' },
    { photo: 43, name: 'Façades',      meta: 'Septembre 2026 — 3 images' },
    { photo: 41, name: 'Compagnons',   meta: '2026 — 4 images' }
  ];
  const TUNNEL_SET = [1, 2, 3, 4, 6, 7, 8, 11, 13, 15, 16, 18, 19, 20, 21, 23, 24, 27];
  const RING_SET = [10, 25, 28, 30, 33, 34, 35, 36, 39, 40, 42, 44];
  const ZOOM_SET = [4, 12, 38, 26, 17, 31, 21, 9, 43]; // index 4 = photo centrale

  const src = (p, w) => `photos/${w > 900 ? '' : 'thumb/'}${p.f}.jpg`;

  const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const dateOf = (p) => { const [y, m] = p.d.split('-'); return `${MOIS[+m - 1]} ${y}`; };
  const placeOf = (p) => (p.p ? `${p.p}, ${dateOf(p)}` : dateOf(p));
  const STOPS = ['1.2', '1.4', '2', '2.8', '4', '5.6', '8', '11', '16'];
  const exifOf = (p) => (p.ex ? `Canon EOS 50D · f/${p.ex.f} · ${p.ex.s}s · ISO ${p.ex.iso} · ${p.ex.mm}mm` : 'Smartphone');
  const exifStr = (p) => (p.ex ? `${p.ex.f}|${p.ex.s}|${p.ex.iso}|${p.ex.mm}` : '—|—|—|—');

  /* ---------------------------------------------------------
     Utils
     --------------------------------------------------------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad = (n, l = 2) => String(n).padStart(l, '0');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const SVGNS = 'http://www.w3.org/2000/svg';

  gsap.registerPlugin(ScrollTrigger);
  // états initiaux posés par GSAP (pas en CSS, sinon GSAP lit un `y` en px qui s'ajoute au yPercent)
  gsap.set('.hero-title .line > *, .contact-title .line > *', { yPercent: 110 });

  const mouse = { x: 0, y: 0, nx: 0, ny: 0 }; // nx/ny normalisés -1..1
  addEventListener('pointermove', (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    mouse.nx = (e.clientX / innerWidth) * 2 - 1;
    mouse.ny = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  /* ---------------------------------------------------------
     Smooth scroll
     --------------------------------------------------------- */
  let lenis = null;
  if (!reduceMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }
  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else (typeof target === 'number' ? scrollTo_(target) : $(target)?.scrollIntoView({ behavior: 'smooth' }));
  };
  const scrollTo_ = (y) => window.scrollTo({ top: y, behavior: 'smooth' });

  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    e.preventDefault();
    scrollTo(id === '#top' ? 0 : id);
  }));

  /* ---------------------------------------------------------
     Image hydration (data-photo → src)
     --------------------------------------------------------- */
  $$('img[data-photo]').forEach((img) => {
    img.src = src(P(+img.dataset.photo), +img.dataset.w);
  });

  const makeImg = (p, w, cls = '') => {
    const img = new Image();
    img.src = src(p, w);
    img.alt = `${p.t} — ${placeOf(p)}`;
    img.decoding = 'async';
    if (cls) img.className = cls;
    img.dataset.idx = PHOTOS.indexOf(p);
    return img;
  };

  /* =========================================================
     LENS — build SVG details
     ========================================================= */
  const lens = $('.lens');
  const irisG = $('.iris', lens);
  const blades = [];
  for (let i = 0; i < 9; i++) {
    const g = document.createElementNS(SVGNS, 'g');
    const r = document.createElementNS(SVGNS, 'rect');
    r.setAttribute('x', -30); r.setAttribute('y', -170);
    r.setAttribute('width', 170); r.setAttribute('height', 170);
    r.setAttribute('fill', 'url(#gBlade)');
    r.setAttribute('stroke', 'rgba(236,231,222,.16)');
    r.setAttribute('stroke-width', '.35');
    g.appendChild(r);
    irisG.appendChild(g);
    blades.push(g);
  }
  const iris = { h: 0, tw: -18 };
  const renderIris = () => {
    for (let i = 0; i < 9; i++) blades[i].setAttribute('transform', `rotate(${i * 40 + iris.tw}) translate(0 ${-iris.h})`);
  };
  renderIris();

  // knurled focus ring
  const knurl = $('.knurl', lens);
  let kn = '';
  for (let a = 0; a < 360; a += 2.5) {
    const r = (a * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
    const col = (a / 2.5) % 2 ? '#2c2b28' : '#0a0a09';
    kn += `<line x1="${(c * 71).toFixed(2)}" y1="${(s * 71).toFixed(2)}" x2="${(c * 87).toFixed(2)}" y2="${(s * 87).toFixed(2)}" stroke="${col}" stroke-width="1"/>`;
  }
  knurl.innerHTML = kn;

  // distance scale
  const ticks = $('.ticks', lens);
  let tk = '';
  for (let a = -150; a <= 150; a += 5) {
    const major = a % 30 === 0;
    tk += `<line x1="0" y1="${-102 + 0.6}" x2="0" y2="${major ? -98 : -100}" stroke="#d9d3c8" stroke-width=".35" opacity=".6" transform="rotate(${a})"/>`;
  }
  const labels = ['0.5', '0.7', '1', '1.5', '2', '3', '5', '10', '∞'];
  labels.forEach((l, i) => {
    const a = -120 + i * 30;
    tk += `<text class="tick-label${l === '∞' ? ' red' : ''}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${a}) translate(0 -93)">${l}</text>`;
  });
  tk += `<text class="tick-label" text-anchor="middle" dominant-baseline="middle" transform="rotate(150) translate(0 -93)">m</text>`;
  ticks.innerHTML = tk;

  /* =========================================================
     BUILD DYNAMIC SECTIONS
     ========================================================= */
  // ---- Tunnel
  const TUNNEL = TUNNEL_SET.map(P);
  const tWorld = $('.tunnel-world');
  const tItems = [];
  tItems.push({ el: $('.t-title'), title: true, z: -120, x: 0, y: 0 });
  TUNNEL.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = 't-card';
    fig.style.aspectRatio = `${p.w} / ${p.h}`;
    if (p.w > p.h) fig.style.width = 'clamp(200px, 25vw, 440px)';
    fig.dataset.cursor = 'Voir';
    fig.appendChild(makeImg(p, 900));
    const cap = document.createElement('figcaption');
    cap.textContent = `${pad(i + 1)} — ${placeOf(p)}`;
    fig.appendChild(cap);
    tWorld.appendChild(fig);
    tItems.push({ el: fig, p, i, a: i * 2.39996 + 0.6, z: -(i + 1) * 640 - 260 });
  });
  $('.tc-total').textContent = pad(TUNNEL.length);

  // ---- Series
  const track = $('.series-track');
  SERIES.forEach((s, i) => {
    const p = P(s.photo);
    const portrait = p.h > p.w;
    const art = document.createElement('article');
    art.className = `s-card ${portrait ? 'is-portrait' : 'is-land'} ${i % 2 ? 'is-down' : 'is-up'}`;
    const media = document.createElement('div');
    media.className = 's-media';
    media.dataset.cursor = 'Voir';
    media.appendChild(makeImg(p, 2400));
    art.appendChild(media);
    art.insertAdjacentHTML('beforeend',
      `<div class="s-meta"><span class="mono">${pad(i + 1)}</span><h3>${s.name}</h3><p class="mono">${s.meta}</p></div>`);
    track.appendChild(art);
  });

  // ---- Ring
  const RING = RING_SET.map(P);
  const ringRot = $('.ring-rot');
  const rCards = RING.map((p) => {
    const d = document.createElement('div');
    d.className = 'r-card';
    d.dataset.cursor = 'Voir';
    const img = makeImg(p, 900);
    d.appendChild(img);
    ringRot.appendChild(d);
    return { el: d, img, p };
  });

  // ---- Zoom grid (index 4 = centre)
  const zGrid = $('.zoom-grid');
  const zItems = ZOOM_SET.map((n, i) => {
    const d = document.createElement('div');
    d.className = 'z-item' + (i === 4 ? ' is-main' : '');
    d.appendChild(makeImg(P(n), i === 4 ? 2400 : 900));
    zGrid.appendChild(d);
    return { el: d, col: (i % 3) - 1, row: Math.floor(i / 3) - 1 };
  });

  // ---- Manifesto words
  const ft = $('.focus-text');
  ft.innerHTML = ft.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');

  /* =========================================================
     HUD
     ========================================================= */
  const hud = {
    f: $('[data-hud="f"]'), s: $('[data-hud="s"]'), iso: $('[data-hud="iso"]'), mm: $('[data-hud="mm"]'),
    idx: $('.hud-idx'), name: $('.hud-name'), needle: $('.hud-needle'), meter: $('.hud-meter'),
    time: $('.hud-time')
  };
  const scrambleChars = '0123456789/.';
  const scramble = (el, text) => {
    if (!el || el.textContent === text) return;
    clearInterval(el._s);
    let f = 0;
    el._s = setInterval(() => {
      f++;
      el.textContent = text.split('').map((c, i) => (i < f / 2 ? c : scrambleChars[(Math.random() * scrambleChars.length) | 0])).join('');
      if (f / 2 >= text.length) { clearInterval(el._s); el.textContent = text; }
    }, 28);
  };
  const setExif = (str) => {
    const [f, s, iso, mm] = str.split('|');
    scramble(hud.f, f); scramble(hud.s, s); scramble(hud.iso, iso); scramble(hud.mm, mm);
  };
  const t0 = Date.now();
  setInterval(() => {
    const s = Math.floor((Date.now() - t0) / 1000);
    hud.time.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  }, 1000);

  /* =========================================================
     CURSOR
     ========================================================= */
  const cursor = $('.cursor');
  if (finePointer) {
    const dot = $('.cursor-dot'), frame = $('.cursor-frame'), label = $('.cursor-label');
    const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const fx = gsap.quickTo(frame, 'x', { duration: 0.5, ease: 'power3' });
    const fy = gsap.quickTo(frame, 'y', { duration: 0.5, ease: 'power3' });
    addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); fx(e.clientX); fy(e.clientY); }, { passive: true });
    document.addEventListener('pointerover', (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) { label.textContent = t.dataset.cursor; cursor.classList.add('is-hover'); }
    });
    document.addEventListener('pointerout', (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t && !t.contains(e.relatedTarget)) cursor.classList.remove('is-hover');
    });
    addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  }

  /* =========================================================
     LOADER → INTRO
     ========================================================= */
  const loadImage = (url) => new Promise((res) => {
    const i = new Image(); i.onload = i.onerror = res; i.src = url;
  });
  const critical = [$('.hp-sharp').src, $('.hp-blur').src, ...$$('.t-card img').slice(0, 4).map((i) => i.src)];
  const countEl = $('.count'), barEl = $('.loader-bar i');
  const counter = { v: 0 };
  const countTween = gsap.to(counter, {
    v: 100, duration: reduceMotion ? 0.3 : 2.2, ease: 'power2.inOut',
    onUpdate: () => { countEl.textContent = pad(Math.round(counter.v), 3); barEl.style.transform = `scaleX(${counter.v / 100})`; }
  });
  const timeout = new Promise((r) => setTimeout(r, 7000));
  Promise.all([
    countTween.then(),
    Promise.race([Promise.all([...critical.map(loadImage), document.fonts.ready]), timeout])
  ]).then(intro);

  function intro() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' } });
    tl.to('.loader-count .count', { yPercent: -110, duration: 0.8, ease: 'expo.in' })
      .to('.loader-top, .loader-bar', { opacity: 0, duration: 0.4, ease: 'power2.out' }, '<')
      .to('.loader', { clipPath: 'inset(0 0 100% 0)', duration: 1.1 }, '-=0.15')
      .from(lens, { scale: 0.35, rotation: -120, opacity: 0, duration: 1.8, transformOrigin: '50% 50%' }, '-=0.75')
      .from('.ring-focus', { rotation: 180, svgOrigin: '0 0', duration: 2, ease: 'expo.out' }, '<0.3')
      .from('.ring-scale', { rotation: -120, svgOrigin: '0 0', duration: 2, ease: 'expo.out' }, '<')
      .to(iris, { h: 13, tw: -10, duration: 1.4, ease: 'elastic.out(1, 0.6)', onUpdate: renderIris }, '-=1.1')
      .to('.hero-photo', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '<0.1')
      .from('.intro-name .line > *', { yPercent: 110, duration: 1.3, stagger: 0.12, ease: 'expo.out' }, '-=1.2')
      .from('.hero-eyebrow span, .scroll-hint', { y: 16, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out' }, '<0.2')
      .from('.nav, .hud', { opacity: 0, duration: 1, ease: 'power2.out' }, '<')
      .from('.hero-af', { scale: 2.4, opacity: 0, duration: 0.8, ease: 'expo.out' }, '<');
    tl.add(() => {
      document.body.classList.remove('is-loading');
      $('.loader').remove();
      gsap.set(lens, { clearProps: 'opacity,rotation' });
      lenis?.start();
      initScroll();
    }, '-=0.6');
  }

  /* =========================================================
     SCROLL SCENES
     ========================================================= */
  function initScroll() {
    gsap.set(lens, { scale: 1, rotation: 0, transformOrigin: '50% 50%' });
    const heroSec = $('.hero');

    /* ---------- 00 HERO: zoom into the lens ---------- */
    const photo = $('.hero-photo');
    const zoom = { s: 1 };
    const R0 = 20.2; // rayon du verre en vmin
    const vmin = () => Math.min(innerWidth, innerHeight) / 100;
    const sEnd = () => (Math.hypot(innerWidth, innerHeight) / 2) / (R0 * vmin()) * 1.04;
    const renderZoom = () => {
      lens.style.transform = `scale(${zoom.s})`;
      photo.style.clipPath = `circle(${(R0 * zoom.s).toFixed(3)}vmin at 50% 50%)`;
    };

    const heroTl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: heroSec, start: 'top top', end: '+=280%',
        pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate: (self) => {
          // de f/16 · 24mm jusqu'aux réglages réels de la photo d'ouverture (f/5.6 · 96mm)
          const stop = 5 + Math.round(clamp(1 - (iris.h - 13) / 43, 0, 1) * 3);
          hud.f.textContent = STOPS[stop];
          hud.mm.textContent = Math.round(24 + self.progress * 72);
        },
        onEnterBack: () => setExif(heroSec.dataset.exif)
      }
    });
    heroTl
      .to('.hero-intro', { opacity: 0, y: -50, duration: 0.16 }, 0)
      .to('.hero-af', { opacity: 0, scale: 0.4, duration: 0.12 }, 0.05)
      .to(iris, { h: 58, tw: 14, duration: 0.34, ease: 'power1.inOut', onUpdate: renderIris }, 0)
      .to('.ring-focus', { rotation: 150, svgOrigin: '0 0', duration: 1 }, 0)
      .to('.ring-scale', { rotation: -80, svgOrigin: '0 0', duration: 1 }, 0)
      .to('.ring-text', { rotation: 30, svgOrigin: '0 0', duration: 1 }, 0)
      .to('.glass-fx', { opacity: 0, duration: 0.3 }, 0.24)
      .to(zoom, { s: () => sEnd(), duration: 0.56, ease: 'power2.in', onUpdate: renderZoom }, 0.2)
      .to('.hp-blur', { opacity: 0, duration: 0.34 }, 0.34)
      .fromTo('.hero-photo-inner', { scale: 1.5 }, { scale: 1, duration: 0.8, ease: 'power1.out' }, 0.16)
      .to('.hero-shade', { opacity: 1, duration: 0.2 }, 0.76)
      .fromTo('.hero-title .line > *', { yPercent: 110 }, { yPercent: 0, stagger: 0.045, duration: 0.16, ease: 'power3.out' }, 0.8)
      .fromTo('.hero-title p', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.1 }, 0.9);

    // glass glints follow the mouse
    gsap.ticker.add(() => {
      gsap.set('.glass-fx', { x: mouse.nx * 6, y: mouse.ny * 6 });
    });

    /* ---------- 01 MANIFESTO: focus reveal ---------- */
    gsap.fromTo('.focus-text .w',
      { opacity: 0.1, filter: 'blur(10px)', y: 14 },
      {
        opacity: 1, filter: 'blur(0px)', y: 0, stagger: 0.08, ease: 'power1.out',
        scrollTrigger: { trigger: '.focus-text', start: 'top 80%', end: 'bottom 45%', scrub: 1 }
      });
    $$('[data-count]').forEach((el) => {
      const o = { v: 0 };
      gsap.to(o, {
        v: +el.dataset.count, duration: 2.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
        onUpdate: () => { el.textContent = (el.dataset.prefix || '') + Math.round(o.v); }
      });
    });
    gsap.from('.stat', {
      y: 60, opacity: 0, stagger: 0.12, duration: 1.2, ease: 'expo.out',
      scrollTrigger: { trigger: '.stats', start: 'top 88%' }
    });

    /* ---------- 02 TUNNEL: fly through the archives ---------- */
    const tunnelSec = $('.tunnel');
    const tStage = $('.tunnel-stage');
    const tcIdx = $('.tc-idx'), tcName = $('.tc-name');
    const tDepth = TUNNEL.length * 640 + 900;
    let cam = 0, camTarget = 0, lastCap = -1;
    const layoutTunnel = () => {
      const rx = Math.min(innerWidth * 0.3, 560), ry = innerHeight * 0.25;
      tItems.forEach((c) => { if (!c.title) { c.x = Math.cos(c.a) * rx; c.y = Math.sin(c.a) * ry; } });
    };
    const renderTunnel = () => {
      let nearest = null, nd = Infinity;
      for (const c of tItems) {
        const z = c.z + cam;
        let o = 1;
        if (z > 620) o = 0;
        else if (z > 180) o = 1 - (z - 180) / 440;
        else if (z < -4600) o = 0;
        else if (z < -2400) o = 1 - (-2400 - z) / 2200;
        c.el.style.opacity = o.toFixed(3);
        c.el.style.visibility = o < 0.002 ? 'hidden' : 'visible';
        c.el.style.transform = `translate(-50%,-50%) translate3d(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px,${z.toFixed(1)}px)`;
        if (!c.title && z < 200 && -z < nd) { nd = -z; nearest = c; }
      }
      if (nearest && nearest.i !== lastCap) {
        lastCap = nearest.i;
        tcIdx.textContent = pad(nearest.i + 1);
        tcName.textContent = `${nearest.p.t} — ${placeOf(nearest.p)}`;
        if (tunnelST?.isActive) setExif(exifStr(nearest.p));
      }
    };
    let tunnelST = null;
    layoutTunnel();
    renderTunnel();
    tunnelST = ScrollTrigger.create({
      trigger: tunnelSec, start: 'top top', end: '+=420%', pin: true,
      onUpdate: (self) => { camTarget = self.progress * tDepth; }
    });
    gsap.ticker.add(() => {
      const d = camTarget - cam;
      if (Math.abs(d) > 0.05) { cam += d * 0.09; renderTunnel(); }
      tStage.style.perspectiveOrigin = `${50 + mouse.nx * 8}% ${50 + mouse.ny * 8}%`;
    });

    /* ---------- 03 SERIES: horizontal scroll ---------- */
    const seriesSec = $('.series');
    const dist = () => track.scrollWidth - innerWidth;
    const skewTo = gsap.quickTo('.s-card', 'skewX', { duration: 0.6, ease: 'power3' });
    const hTween = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: seriesSec, start: 'top top', end: () => '+=' + dist(),
        pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate: (self) => {
          skewTo(clamp(self.getVelocity() / -320, -7, 7));
          gsap.set('.series-progress i', { scaleX: self.progress });
        }
      }
    });
    gsap.to('.series-bg-title', {
      xPercent: -35, ease: 'none',
      scrollTrigger: { trigger: seriesSec, start: 'top top', end: () => '+=' + dist(), scrub: 1, invalidateOnRefresh: true }
    });
    $$('.s-card').forEach((card) => {
      const media = $('.s-media', card), img = $('img', card);
      gsap.fromTo(img, { xPercent: -9 }, {
        xPercent: 9, ease: 'none',
        scrollTrigger: { trigger: card, containerAnimation: hTween, start: 'left right', end: 'right left', scrub: true }
      });
      gsap.fromTo(media, { clipPath: 'inset(14% 18% 14% 18%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.out',
        scrollTrigger: { trigger: card, containerAnimation: hTween, start: 'left 100%', end: 'left 40%', scrub: true }
      });
      gsap.fromTo($('.s-meta', card), { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, ease: 'power2.out',
        scrollTrigger: { trigger: card, containerAnimation: hTween, start: 'left 70%', end: 'left 40%', scrub: true }
      });
    });

    /* ---------- 04 RING: 3D carousel ---------- */
    const ringSec = $('.ring');
    const ringTilt = $('.ring-tilt');
    const ring = { rot: 0, tilt: -16 };
    const N = rCards.length;
    let R = 600;
    const layoutRing = () => {
      const cw = clamp(innerWidth * 0.15, 120, 250);
      R = (cw / 2) / Math.tan(Math.PI / N) * 1.3;
      rCards.forEach((c, i) => {
        c.el.style.setProperty('--cw', cw + 'px');
        c.el.style.transform = `rotateY(${i * 360 / N}deg) translateZ(${R}px)`;
      });
    };
    const renderRing = () => {
      ringTilt.style.transform = `translateZ(${-R * 0.45}px) rotateX(${ring.tilt + mouse.ny * -4}deg) rotateZ(${mouse.nx * 2}deg)`;
      ringRot.style.transform = `rotateY(${ring.rot}deg)`;
      let front = null, best = -2;
      rCards.forEach((c, i) => {
        const f = Math.cos(((i * 360 / N + ring.rot) * Math.PI) / 180);
        const ff = Math.max(0, f);
        c.el.style.opacity = (0.18 + 0.82 * (f * 0.5 + 0.5) ** 1.6).toFixed(3);
        c.img.style.filter = `grayscale(${(1 - ff ** 2.5).toFixed(3)}) brightness(${(0.55 + 0.45 * ff).toFixed(3)})`;
        if (f > best) { best = f; front = c; }
      });
      // le viseur affiche l'EXIF de la photo de face
      if (ringST?.isActive && front !== lastFront) { lastFront = front; setExif(exifStr(front.p)); }
    };
    let ringST = null, lastFront = null;
    layoutRing();
    renderRing();
    const ringTl = gsap.timeline({
      scrollTrigger: { trigger: ringSec, start: 'top top', end: '+=300%', pin: true, scrub: 1 },
      onUpdate: renderRing
    });
    ringST = ringTl.scrollTrigger;
    ringTl
      .to(ring, { rot: -360, duration: 1, ease: 'none' }, 0)
      .to(ring, { tilt: 8, duration: 1, ease: 'sine.inOut' }, 0)
      .fromTo('.ring-center h2', { scale: 0.85 }, { scale: 1.1, duration: 1, ease: 'none' }, 0);
    gsap.ticker.add(() => {
      if (ScrollTrigger.isInViewport(ringSec)) renderRing();
    });

    /* ---------- 05 ZOOM REVEAL ---------- */
    const zoomSec = $('.zoom');
    const zTl = gsap.timeline({
      scrollTrigger: { trigger: zoomSec, start: 'top top', end: '+=240%', pin: true, scrub: 1, invalidateOnRefresh: true }
    });
    zItems.forEach(({ el, col, row }) => {
      if (!col && !row) {
        zTl.fromTo(el, { scale: 1 }, { scale: () => Math.max(100 / 26, 100 / 28) * 1.02, duration: 1, ease: 'power2.inOut' }, 0);
        zTl.fromTo($('img', el), { scale: 1.35 }, { scale: 1, duration: 1, ease: 'power2.inOut' }, 0);
      } else {
        zTl.fromTo(el,
          { x: () => col * innerWidth * 0.28, y: () => row * innerHeight * 0.31, scale: 1 },
          { x: () => col * innerWidth * 0.28 * 3.2, y: () => row * innerHeight * 0.31 * 3.2, scale: 1.4, duration: 1, ease: 'power2.inOut' }, 0);
      }
    });
    zTl.to('.zoom-shade', { opacity: 1, duration: 0.3 }, 0.72)
      .fromTo('.zoom-about > div > *', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.25, ease: 'power2.out' }, 0.8);
    gsap.from(zItems.map((z) => z.el), {
      clipPath: 'inset(50% 50% 50% 50%)', duration: 1.4, ease: 'expo.out', stagger: { each: 0.06, from: 'center' },
      scrollTrigger: { trigger: zoomSec, start: 'top 75%' }
    });

    /* ---------- 06 CONTACT ---------- */
    gsap.fromTo('.contact-title .line > *', { yPercent: 110 }, {
      yPercent: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
      scrollTrigger: { trigger: '.contact-title', start: 'top 80%' }
    });
    gsap.from('.contact-row > *', {
      y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'expo.out',
      scrollTrigger: { trigger: '.contact-row', start: 'top 90%' }
    });

    /* ---------- HUD (créés en dernier : ScrollTrigger rafraîchit dans l'ordre de création) ---------- */
    $$('[data-section]').forEach((sec) => {
      const [idx, name] = sec.dataset.section.split('|');
      // une section épinglée est mesurée via son pin-spacer (qui contient toute la durée du pin)
      const host = sec.parentElement.classList.contains('pin-spacer') ? sec.parentElement : sec;
      ScrollTrigger.create({
        trigger: host, start: 'top 50%', end: 'bottom 50%',
        onToggle: (self) => {
          if (!self.isActive) return;
          scramble(hud.idx, idx);
          hud.name.textContent = name;
          if (sec !== heroSec) setExif(sec.dataset.exif);
        }
      });
    });
    ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: (self) => {
        hud.needle.style.transform = `translateY(${self.progress * hud.meter.offsetHeight}px)`;
      }
    });

    ScrollTrigger.addEventListener('refreshInit', () => { layoutTunnel(); layoutRing(); });
    ScrollTrigger.addEventListener('refresh', () => { renderTunnel(); renderRing(); });
    ScrollTrigger.refresh();
  }

  /* =========================================================
     SHUTTER + POLAROID PRINTS
     ========================================================= */
  let actx = null;
  const playShutter = () => {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime;
      [[0, 1700, 0.55], [0.075, 2600, 0.4]].forEach(([d, freq, vol]) => {
        const len = 0.045;
        const buf = actx.createBuffer(1, Math.floor(actx.sampleRate * len), actx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3);
        const s = actx.createBufferSource(); s.buffer = buf;
        const f = actx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.9;
        const g = actx.createGain(); g.gain.value = vol;
        s.connect(f).connect(g).connect(actx.destination);
        s.start(t + d);
      });
    } catch (e) { /* audio indisponible */ }
  };

  const printsEl = $('.prints');
  const contactSec = $('.contact');
  let printN = 0;
  const addPrint = () => {
    const p = PHOTOS[(Math.random() * PHOTOS.length) | 0];
    const fig = document.createElement('figure');
    fig.className = 'print';
    const img = makeImg(p, 900);
    fig.appendChild(img);
    const cap = document.createElement('figcaption');
    cap.textContent = p.t;
    fig.appendChild(cap);
    printsEl.appendChild(fig);

    // dans la partie visible de la section, côté droit
    const W = contactSec.offsetWidth, top = -contactSec.getBoundingClientRect().top;
    const x = W * (0.45 + Math.random() * 0.42) - 110;
    const y = Math.max(0, top) + innerHeight * (0.12 + Math.random() * 0.4);
    gsap.set(fig, { x, y, rotation: gsap.utils.random(-16, 16) });
    gsap.from(fig, { y: y - 140, scale: 1.35, opacity: 0, rotation: gsap.utils.random(-40, 40), duration: 1.1, ease: 'expo.out' });
    gsap.fromTo(img,
      { filter: 'brightness(2.6) contrast(.35) saturate(0) sepia(.5) blur(2px)' },
      { filter: 'brightness(1) contrast(1) saturate(1) sepia(0) blur(0px)', duration: 4.5, delay: 0.3, ease: 'power1.inOut' });
    makeDraggable(fig);

    printN++;
    const all = $$('.print', printsEl);
    if (all.length > 9) gsap.to(all[0], { opacity: 0, scale: 0.8, duration: 0.5, onComplete: () => all[0].remove() });
  };

  const makeDraggable = (el) => {
    let sx, sy, ox, oy, dragging = false;
    el.addEventListener('pointerdown', (e) => {
      dragging = true; el.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY;
      ox = gsap.getProperty(el, 'x'); oy = gsap.getProperty(el, 'y');
      printsEl.appendChild(el);
      gsap.to(el, { scale: 1.06, duration: 0.3 });
    });
    el.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const vx = e.movementX || 0;
      gsap.set(el, { x: ox + e.clientX - sx, y: oy + e.clientY - sy });
      gsap.to(el, { rotation: `+=${clamp(vx * 0.15, -3, 3)}`, duration: 0.3, overwrite: 'auto' });
    });
    const end = () => { if (!dragging) return; dragging = false; gsap.to(el, { scale: 1, duration: 0.4 }); };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  };

  $('.shutter').addEventListener('click', () => {
    playShutter();
    gsap.fromTo('.flash', { opacity: 0.92 }, { opacity: 0, duration: 0.9, ease: 'power2.out' });
    gsap.fromTo('.shutter-ring', { rotation: 0 }, { rotation: 90, duration: 0.6, ease: 'expo.out' });
    addPrint();
    if (printN === 1) $('.shutter-hint').textContent = 'Encore une ? (vous pouvez déplacer les tirages)';
  });

  /* =========================================================
     LIGHTBOX — le cadre s'anime de la vignette vers la photo entière
     (object-fit: cover → le recadrage se « déplie » sans déformation)
     ========================================================= */
  const lb = $('.lightbox'), lbImg = $('.lb-img'), lbBg = $('.lb-bg');
  const lbMeta = $('.lb-meta'), lbClose = $('.lb-close');
  let lbHost = null, lbOpen = false;

  const fitRect = (ar) => {
    let w = innerWidth * 0.88, h = w / ar;
    const maxH = innerHeight * 0.78;
    if (h > maxH) { h = maxH; w = h * ar; }
    return { width: w, height: h, left: (innerWidth - w) / 2, top: (innerHeight - h) / 2 - 10 };
  };
  const rectOf = (el) => { const r = el.getBoundingClientRect(); return { left: r.left, top: r.top, width: r.width, height: r.height }; };

  const openLB = (host) => {
    if (lbOpen) return;
    lbOpen = true; lbHost = host;
    const img = $('img', host);
    const p = PHOTOS[+img.dataset.idx];
    lbImg.src = img.currentSrc || img.src;
    const hi = new Image();
    hi.onload = () => { if (lbOpen) lbImg.src = hi.src; };
    hi.src = src(p, 2400);
    $('.lb-title').textContent = `${p.t} — ${placeOf(p)}`;
    $('.lb-exif').textContent = exifOf(p);

    gsap.set(lbImg, { ...rectOf(host), opacity: 1 });
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    host.style.visibility = 'hidden';
    lenis?.stop();
    gsap.to(lbImg, { ...fitRect(p.w / p.h), duration: 1.1, ease: 'expo.inOut' });
    gsap.to(lbBg, { opacity: 1, duration: 0.7, ease: 'power2.out' });
    gsap.to([lbMeta, lbClose], { opacity: 1, duration: 0.6, delay: 0.7 });
  };

  const closeLB = () => {
    if (!lbOpen) return;
    const host = lbHost;
    const r = rectOf(host);
    const visible = r.top + r.height > 0 && r.top < innerHeight && r.width > 2;
    gsap.to([lbMeta, lbClose], { opacity: 0, duration: 0.25 });
    gsap.to(lbBg, { opacity: 0, duration: 0.8, delay: 0.2 });
    const done = () => {
      host.style.visibility = '';
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      lbOpen = false;
      lenis?.start();
    };
    if (visible) gsap.to(lbImg, { ...r, duration: 0.9, ease: 'expo.inOut', onComplete: done });
    else gsap.to(lbImg, { opacity: 0, duration: 0.5, onComplete: done });
  };

  document.addEventListener('click', (e) => {
    const host = e.target.closest('.t-card, .s-media, .r-card');
    if (host) openLB(host);
  });
  lbBg.addEventListener('click', closeLB);
  lbClose.addEventListener('click', closeLB);
  lbImg.addEventListener('click', closeLB);
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });
})();
