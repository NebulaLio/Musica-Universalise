import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* ============================================================
   MUSICA UNIVERSALIS · SPATIAL NEXUS
   A real-time procedural spatial interface.
   ============================================================ */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;
const IS_MOBILE = window.matchMedia('(max-width: 760px)').matches;
const TAU = Math.PI * 2;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

const UNIVERSES = [
  {
    id: 'art',
    numeral: 'I',
    title: '藝術音樂',
    en: 'THE ART MUSIC GALAXY',
    href: 'classic.html',
    accent: '#e8c79e',
    accent2: '#b9a7ff',
    desc: '七個時代，七座獨立的房間。從葛利果聖詠到當代極簡，一座緩慢旋轉的螺旋星系。',
    kind: 'knot',
    desktop: [-2.5, 1.0, 0.15],
    mobile: [-1.64, 1.04, 0.05]
  },
  {
    id: 'pop',
    numeral: 'II',
    title: '流行宇宙',
    en: 'THE POP COSMOS',
    href: 'universe-2.html',
    accent: '#ff9fd6',
    accent2: '#ffd18a',
    desc: '七種流行類型，以引力聚集成環。每顆行星是一座轉動的黑膠聲音艙。',
    kind: 'orb',
    desktop: [2.52, 0.3, -0.12],
    mobile: [1.64, 0.32, -0.08]
  },
  {
    id: 'media',
    numeral: 'III',
    title: '媒介宇宙',
    en: 'MEDIA COSMOS',
    href: 'universe-3.html',
    accent: '#7fe3d2',
    accent2: '#a6c8ff',
    desc: '七種音樂媒介，連成一座訊號網絡。每一種載體，都是一座媒體檔案室。',
    kind: 'lattice',
    desktop: [-0.36, -2.22, 0.3],
    mobile: [-0.16, -2.12, 0.18]
  }
];

const CORE_INFO = {
  numeral: '00',
  title: '交會核心',
  en: 'THE CORE',
  desc: '所有宇宙的聲音在此交會。拖曳核心旋轉，Shift + 拖曳拉伸，雙擊拆解。'
};

const NOISE = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a1.xy, h.y);
  vec3 p2 = vec3(a0.zw, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float fbm3(vec3 p) {
  float f = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    f += a * snoise(p);
    p = p * 2.03 + vec3(17.1, 9.2, 7.7);
    a *= 0.5;
  }
  return f;
}
`;

/* ------------------------------------------------------------
   DOM
   ---------------------------------------------------------- */

const dom = {
  canvas: $('#nexusCanvas'),
  intro: $('#intro'),
  introTitle: $('#introTitle'),
  loadPercent: $('#loadPercent'),
  loadBar: $('#loadBar'),
  loadStatus: $('#loadStatus'),
  enterBtn: $('#enterBtn'),
  skipBtn: $('#skipBtn'),
  soundBtn: $('#soundBtn'),
  guideBtn: $('#guideBtn'),
  guide: $('#guide'),
  resetBtn: $('#resetBtn'),
  nodeLabels: $('#nodeLabels'),
  readout: $('#readout'),
  readoutNumeral: $('#readoutNumeral'),
  readoutEn: $('#readoutEn'),
  readoutTitle: $('#readoutTitle'),
  readoutDesc: $('#readoutDesc'),
  enterUniverse: $('#enterUniverse'),
  cursor: $('#cursor'),
  cursorLabel: $('#cursorLabel'),
  fps: $('#fps'),
  renderInfo: $('#renderInfo'),
  warpFlash: $('#warpFlash'),
  announcer: $('#statusAnnouncer')
};

const activePointers = new Map();
let pinchDistance = 0;

const state = {
  ready: false,
  entered: false,
  warping: false,
  pinching: false,
  pointer: new THREE.Vector2(),
  pointerSmooth: new THREE.Vector2(),
  pointerVelocity: 0,
  prevPointer: { x: 0, y: 0 },
  pointerMoved: false,
  dragging: false,
  dragMode: null,
  dragStart: { x: 0, y: 0 },
  dragLast: { x: 0, y: 0 },
  dragMoved: 0,
  pendingNode: null,
  hoverNode: null,
  hoverCore: false,
  targetYaw: 0,
  yaw: 0,
  targetPitch: 0.12,
  pitch: 0.12,
  targetDistance: IS_MOBILE ? 14.2 : 11.4,
  distance: 18.5,
  lastInteraction: 0,
  coreSpin: new THREE.Vector2(),
  coreRotation: new THREE.Vector2(),
  stretch: 0,
  stretchTarget: 0,
  explode: 0,
  shake: 0,
  audio: 0,
  enteredAt: 0,
  elapsed: 0,
  activeNode: null,
  startedAt: performance.now(),
  qualityReduced: false,
  cursor: { x: innerWidth / 2, y: innerHeight / 2, tx: innerWidth / 2, ty: innerHeight / 2, magnet: null },
  fps: 60,
  frameCount: 0,
  fpsTime: 0,
  qualityLevel: 0
};

const nodes = [];
const nodeLabels = [];
let renderer;
let scene;
let camera;
let composer;
let world;
let coreGroup;
let coreMesh;
let coreShell;
let coreHit;
let shockwave;
let bokehPass;
let afterimagePass;
let bloomPass;
let finalPass;
let outputPass;
let audioEngine;
let glowTexture;
let lastFrameTime = performance.now();
let quality = {
  dpr: Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1.3 : 1.6),
  bokeh: !IS_MOBILE && !REDUCED,
  afterimage: !IS_MOBILE && !REDUCED,
  stars: IS_MOBILE ? 1100 : 2400,
  dust: IS_MOBILE ? 400 : 900,
  shards: IS_MOBILE ? 36 : 72,
  shadows: !IS_MOBILE
};

const coreUniforms = {
  uTime: { value: 0 },
  uExplode: { value: 0 },
  uHover: { value: 0 },
  uAudio: { value: 0 },
  uStretch: { value: 0 },
  uColorA: { value: new THREE.Color(0x081218) },
  uColorB: { value: new THREE.Color(0x3bbdae) },
  uColorC: { value: new THREE.Color(0xc09a5d) }
};

const bgUniforms = {
  uTime: { value: 0 },
  uPointer: { value: new THREE.Vector2() },
  uAudio: { value: 0 }
};

const starUniforms = {
  uTime: { value: 0 },
  uDpr: { value: quality.dpr },
  uPixelRatio: { value: quality.dpr }
};

const finalUniforms = {
  tDiffuse: { value: null },
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(innerWidth, innerHeight) },
  uPointer: { value: new THREE.Vector2() },
  uVelocity: { value: 0 },
  uWarp: { value: 0 }
};

/* ------------------------------------------------------------
   Helpers
   ---------------------------------------------------------- */

function makeGlowTexture(size = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.08, 'rgba(255,255,255,0.92)');
  g.addColorStop(0.24, 'rgba(255,255,255,0.27)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.055)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeRadialAlphaTexture(size = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.32, 'rgba(255,255,255,0.68)');
  g.addColorStop(0.68, 'rgba(255,255,255,0.2)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function makeSprite(color, opacity, scale) {
  const material = new THREE.SpriteMaterial({
    map: glowTexture,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scale, scale, 1);
  return sprite;
}

function setLoad(percent, text) {
  const p = clamp(Math.round(percent), 0, 100);
  if (dom.loadBar) dom.loadBar.style.width = `${p}%`;
  if (dom.loadPercent) dom.loadPercent.textContent = String(p).padStart(2, '0');
  if (text && dom.loadStatus) dom.loadStatus.textContent = text;
}

function announce(text) {
  if (!dom.announcer) return;
  dom.announcer.textContent = '';
  window.setTimeout(() => { dom.announcer.textContent = text; }, 30);
}

function frame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

/* ------------------------------------------------------------
   Renderer / scene
   ---------------------------------------------------------- */

function createRenderer() {
  renderer = new THREE.WebGLRenderer({
    canvas: dom.canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false
  });
  renderer.setPixelRatio(quality.dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  renderer.shadowMap.enabled = quality.shadows;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.info.autoReset = false;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x03060a, 0.014);

  camera = new THREE.PerspectiveCamera(IS_MOBILE ? 46 : 38, window.innerWidth / window.innerHeight, 0.1, 160);
  camera.position.set(0, 4.2, 18.5);
  camera.lookAt(0, 0, 0);

  world = new THREE.Group();
  scene.add(world);

  const ambient = new THREE.AmbientLight(0x22303a, 0.5);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0x83dfd7, 0x120b1d, 0.58);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffe7c6, 1.45);
  key.position.set(4.5, 7.5, 6);
  key.castShadow = quality.shadows;
  if (quality.shadows) {
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -8;
    key.shadow.camera.right = 8;
    key.shadow.camera.top = 8;
    key.shadow.camera.bottom = -8;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 30;
    key.shadow.bias = -0.0007;
    key.shadow.radius = 3;
  }
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x8caaff, 0.9);
  rim.position.set(-6, -2, -5);
  scene.add(rim);

  const coreLight = new THREE.PointLight(0x8ff6e3, 3.4, 13, 2);
  coreLight.position.set(0, 0.15, 0.8);
  scene.add(coreLight);

  glowTexture = makeGlowTexture();
}

function createBackground() {
  const material = new THREE.ShaderMaterial({
    uniforms: bgUniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      ${NOISE}
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 drift = vec3(uPointer.x * 0.055, uTime * 0.0035, uPointer.y * 0.055);
        float n = fbm3(d * 2.0 + drift);
        float g = fbm3(d * 4.4 + vec3(19.0, -uTime * 0.006, 7.0));
        float h = fbm3(d * 1.35 + vec3(3.0, 8.0, -4.0));
        vec3 base = vec3(0.006, 0.011, 0.018);
        vec3 teal = vec3(0.012, 0.064, 0.073);
        vec3 violet = vec3(0.041, 0.024, 0.075);
        vec3 gold = vec3(0.10, 0.056, 0.021);
        vec3 col = base;
        col = mix(col, teal, smoothstep(-0.2, 0.82, n) * 0.72);
        col = mix(col, violet, smoothstep(0.0, 0.88, g) * 0.34);
        col = mix(col, gold, smoothstep(0.36, 0.92, h) * 0.2);
        col += teal * pow(max(0.0, d.y * 0.5 + 0.5), 4.0) * 0.045;
        float edge = smoothstep(1.02, 0.1, length(d.xy));
        col *= 0.72 + edge * 0.28;
        gl_FragColor = vec4(col, 1.0);
      }
    `
  });

  const background = new THREE.Mesh(new THREE.SphereGeometry(62, 32, 18), material);
  background.frustumCulled = false;
  background.renderOrder = -10;
  scene.add(background);

  const hazeNear = makeSprite(0x7fe3d2, 0.035, 24);
  hazeNear.position.set(-3.5, 1.2, -17);
  scene.add(hazeNear);
  const hazeFar = makeSprite(0xff9fd6, 0.022, 28);
  hazeFar.position.set(5.5, -2.5, -22);
  scene.add(hazeFar);
}

function createStarfield() {
  const count = quality.stars;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  const palette = [
    new THREE.Color(0xd8f8f2),
    new THREE.Color(0xffedcb),
    new THREE.Color(0xb6c9ff),
    new THREE.Color(0xe8d8ff),
    new THREE.Color(0xffffff)
  ];

  for (let i = 0; i < count; i += 1) {
    const radius = 13 + Math.random() * 39;
    const theta = Math.random() * TAU;
    const v = Math.random() * 2 - 1;
    const phi = Math.acos(v);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
    sizes[i] = 0.35 + Math.pow(Math.random(), 2) * 1.5;
    phases[i] = Math.random() * 100;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: starUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      attribute vec3 aColor;
      varying vec3 vColor;
      varying float vPhase;
      uniform float uTime;
      uniform float uDpr;
      void main() {
        vColor = aColor;
        vPhase = aPhase;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uDpr * (58.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vPhase;
      uniform float uTime;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.02, d);
        float twinkle = 0.62 + 0.38 * sin(uTime * 1.25 + vPhase);
        gl_FragColor = vec4(vColor, a * twinkle * 0.8);
      }
    `
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  points.renderOrder = -3;
  scene.add(points);

  const starGroup = new THREE.Group();
  starGroup.add(points);
  starGroup.userData.speed = 0.0032;

  return starGroup;
}

function createDust() {
  const count = quality.dust;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  const sizes = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color(0x7fe3d2),
    new THREE.Color(0xe8c79e),
    new THREE.Color(0xb9a7ff),
    new THREE.Color(0xff9fd6)
  ];

  for (let i = 0; i < count; i += 1) {
    const radius = 1.8 + Math.pow(Math.random(), 0.6) * 8.5;
    const theta = Math.random() * TAU;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.8;
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    seeds[i] = Math.random();
    sizes[i] = 0.3 + Math.random() * 1.4;
    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDpr: { value: quality.dpr },
      uAudio: { value: 0 }
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute float aSeed;
      attribute float aSize;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uDpr;
      uniform float uAudio;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = aColor;
        float angle = uTime * (0.012 + aSeed * 0.03) + aSeed * 6.28318;
        vec3 p = position;
        float s = sin(angle);
        float c = cos(angle);
        p.xz = mat2(c, -s, s, c) * p.xz;
        p.y += sin(uTime * 0.22 + aSeed * 9.0) * 0.15;
        p *= 1.0 + uAudio * 0.05;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * uDpr * (38.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
        vAlpha = 0.35 + 0.35 * sin(uTime * 0.5 + aSeed * 12.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.04, d);
        gl_FragColor = vec4(vColor, a * vAlpha * 0.3);
      }
    `
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  points.renderOrder = -1;
  scene.add(points);
  return { points, material };
}

function createCore() {
  coreGroup = new THREE.Group();
  coreGroup.position.set(0, 0, 0);
  world.add(coreGroup);

  const geometry = new THREE.SphereGeometry(1.15, 96, 64);
  const material = new THREE.ShaderMaterial({
    uniforms: coreUniforms,
    vertexShader: `
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform float uStretch;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      varying float vNoise;
      ${NOISE}
      void main() {
        vec3 n = normalize(position);
        float n1 = snoise(n * 2.1 + vec3(0.0, uTime * 0.18, 0.0));
        float n2 = snoise(n * 5.0 - vec3(uTime * 0.13, 0.0, uTime * 0.05));
        float ridge = 1.0 - abs(snoise(n * 3.4 + vec3(uTime * 0.08)));
        float displacement = n1 * 0.074 + n2 * 0.018 + ridge * 0.034;
        displacement += uExplode * (0.34 + ridge * 0.48);
        displacement += uHover * 0.045;
        displacement += uAudio * 0.04;
        vNoise = n1 * 0.6 + ridge * 0.4;
        vec3 pos = position + normal * displacement;
        pos.y *= 1.0 + uStretch * 0.62;
        pos.xz *= 1.0 - uStretch * 0.18;
        vNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        vView = -mv.xyz;
        vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      varying float vNoise;
      ${NOISE}
      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vView);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.35);
        vec3 L1 = normalize(vec3(-0.6, 0.8, 0.7));
        vec3 L2 = normalize(vec3(0.7, -0.35, 0.4));
        float diff = max(dot(N, L1), 0.0) * 0.8 + max(dot(N, L2), 0.0) * 0.25;
        float spec = pow(max(dot(reflect(-L1, N), V), 0.0), 54.0);
        float noise = snoise(vWorld * 2.6 + vec3(0.0, uTime * 0.22, 0.0));
        vec3 base = mix(uColorA, uColorB, smoothstep(-0.45, 0.75, noise + fresnel * 0.35));
        base = mix(base, uColorC, fresnel * 0.36 + uExplode * 0.18);
        float veins = pow(max(0.0, sin(vWorld.y * 7.5 + noise * 6.0 + uTime * 0.45)), 7.0);
        vec3 color = base * (0.24 + diff * 0.58);
        color += spec * 0.38 + fresnel * uColorC * 0.28 + veins * 0.06;
        color += uHover * 0.05 * uColorB + uAudio * 0.05 * uColorB;
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });
  coreMesh = new THREE.Mesh(geometry, material);
  coreMesh.castShadow = quality.shadows;
  coreMesh.receiveShadow = false;
  coreGroup.add(coreMesh);

  const shellMaterial = new THREE.ShaderMaterial({
    uniforms: {
      ...coreUniforms,
      uTime: coreUniforms.uTime,
      uExplode: coreUniforms.uExplode,
      uHover: coreUniforms.uHover,
      uAudio: coreUniforms.uAudio,
      uStretch: coreUniforms.uStretch
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    wireframe: true,
    vertexShader: `
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform float uStretch;
      ${NOISE}
      void main() {
        vec3 n = normalize(position);
        float n1 = snoise(n * 2.0 + vec3(0.0, uTime * 0.18, 0.0));
        float ridge = 1.0 - abs(snoise(n * 3.8 + vec3(uTime * 0.1)));
        float d = n1 * 0.065 + ridge * 0.032 + uExplode * 0.45 + uHover * 0.04;
        vec3 pos = position + normal * d;
        pos.y *= 1.0 + uStretch * 0.62;
        pos.xz *= 1.0 - uStretch * 0.18;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uHover;
      void main() {
        gl_FragColor = vec4(0.45, 0.9, 0.84, 0.055 + uHover * 0.05);
      }
    `
  });
  coreShell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.48, 2), shellMaterial);
  coreShell.renderOrder = 2;
  coreGroup.add(coreShell);

  const halo = makeSprite(0x7fe3d2, 0.16, 4.6);
  halo.position.z = -0.4;
  coreGroup.add(halo);

  const goldHalo = makeSprite(0xe8c79e, 0.065, 6.2);
  goldHalo.position.z = -1.2;
  coreGroup.add(goldHalo);

  const inner = makeSprite(0xf6fff9, 0.2, 0.95);
  inner.position.z = 0.04;
  coreGroup.add(inner);

  // Faint vertical atmospheric shaft.
  const shaft = makeSprite(0x7fe3d2, 0.018, 2.4);
  shaft.scale.set(1.5, 8.5, 1);
  shaft.position.set(0, 0.3, -1.1);
  coreGroup.add(shaft);

  const ringMaterialA = new THREE.MeshBasicMaterial({
    color: 0x7fe3d2,
    transparent: true,
    opacity: 0.21,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.0045, 6, 220), ringMaterialA);
  ringA.rotation.x = Math.PI / 2.5;
  ringA.rotation.y = -0.2;
  coreGroup.add(ringA);

  const ringB = new THREE.Mesh(
    new THREE.TorusGeometry(2.02, 0.0035, 6, 220),
    new THREE.MeshBasicMaterial({ color: 0xe8c79e, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ringB.rotation.x = -Math.PI / 3.2;
  ringB.rotation.z = 0.45;
  coreGroup.add(ringB);

  const ringC = new THREE.Mesh(
    new THREE.TorusGeometry(2.34, 0.003, 6, 220),
    new THREE.MeshBasicMaterial({ color: 0xb9a7ff, transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ringC.rotation.x = Math.PI / 2.1;
  ringC.rotation.y = 0.8;
  coreGroup.add(ringC);

  coreGroup.userData.rings = [ringA, ringB, ringC];

  // Procedural shard orbit / disassembly system.
  const shardGeo = new THREE.TetrahedronGeometry(0.048, 0);
  const shardMat = new THREE.MeshStandardMaterial({
    color: 0x8be8dc,
    emissive: 0x183a39,
    emissiveIntensity: 1.2,
    metalness: 0.72,
    roughness: 0.24
  });
  const shardMesh = new THREE.InstancedMesh(shardGeo, shardMat, quality.shards);
  shardMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  shardMesh.frustumCulled = false;
  const shards = [];
  const dummy = new THREE.Object3D();
  for (let i = 0; i < quality.shards; i += 1) {
    const radius = 1.4 + Math.random() * 1.1;
    const angle = Math.random() * TAU;
    const y = (Math.random() - 0.5) * 2.4;
    shards.push({
      base: new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius),
      phase: Math.random() * TAU,
      speed: 0.2 + Math.random() * 0.7,
      scale: 0.28 + Math.random() * 0.7
    });
    dummy.position.copy(shards[i].base);
    dummy.scale.setScalar(shards[i].scale);
    dummy.updateMatrix();
    shardMesh.setMatrixAt(i, dummy.matrix);
  }
  shardMesh.instanceMatrix.needsUpdate = true;
  coreGroup.add(shardMesh);
  coreGroup.userData.shards = shards;
  coreGroup.userData.shardMesh = shardMesh;

  // Explosion shockwave.
  const shockMaterial = new THREE.MeshBasicMaterial({
    color: 0xb8fff4,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  shockwave = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.27, 128), shockMaterial);
  shockwave.rotation.x = Math.PI / 2;
  shockwave.renderOrder = 5;
  coreGroup.add(shockwave);

  coreHit = new THREE.Mesh(
    new THREE.SphereGeometry(1.82, 18, 14),
    new THREE.MeshBasicMaterial({ visible: false, depthWrite: false })
  );
  coreHit.userData.kind = 'core';
  coreGroup.add(coreHit);
}

function createNodeGeometry(node) {
  const group = new THREE.Group();
  const accent = new THREE.Color(node.accent);
  const accent2 = new THREE.Color(node.accent2);
  let material;

  if (node.kind === 'knot') {
    material = new THREE.MeshPhysicalMaterial({
      color: 0xb6925b,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
      iridescence: 0.7,
      iridescenceIOR: 1.5,
      emissive: 0x2b1b0a,
      emissiveIntensity: 0.75
    });
    const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(0.43, 0.115, 160, 20, 2, 3), material);
    mesh.rotation.x = 0.45;
    mesh.castShadow = quality.shadows;
    group.add(mesh);
    const wire = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.52, 0.14, 100, 10, 2, 3),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.075, wireframe: true, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    wire.rotation.x = 0.45;
    group.add(wire);
    group.userData.main = mesh;
    group.userData.wire = wire;
  } else if (node.kind === 'orb') {
    material = new THREE.MeshPhysicalMaterial({
      color: 0xd063a1,
      metalness: 0.74,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      iridescence: 1,
      iridescenceIOR: 1.8,
      emissive: 0x351025,
      emissiveIntensity: 0.92
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 64, 44), material);
    mesh.castShadow = quality.shadows;
    group.add(mesh);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.81, 0.007, 8, 180),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.46, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    ring.rotation.x = 1.16;
    ring.rotation.y = 0.18;
    group.add(ring);
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.99, 0.0035, 6, 180),
      new THREE.MeshBasicMaterial({ color: accent2, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    ring2.rotation.x = -0.42;
    ring2.rotation.z = 0.5;
    group.add(ring2);
    group.userData.main = mesh;
    group.userData.wire = ring;
    group.userData.ring2 = ring2;
  } else {
    material = new THREE.MeshPhysicalMaterial({
      color: 0x3e8d8b,
      metalness: 0.72,
      roughness: 0.26,
      clearcoat: 0.8,
      clearcoatRoughness: 0.18,
      iridescence: 0.4,
      emissive: 0x0d302d,
      emissiveIntensity: 0.9
    });
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.54, 1), material);
    mesh.castShadow = quality.shadows;
    group.add(mesh);
    const cage = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.82, 1)),
      new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.34, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(cage);
    const inner = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.29, 0),
      new THREE.MeshBasicMaterial({ color: accent2, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(inner);
    group.userData.main = mesh;
    group.userData.wire = cage;
    group.userData.inner = inner;
  }

  const glow = makeSprite(node.accent, 0.25, 3.5);
  glow.position.z = -0.5;
  group.add(glow);

  const ringGlow = makeSprite(node.accent2, 0.13, 2.3);
  ringGlow.position.z = -0.3;
  group.add(ringGlow);

  const hit = new THREE.Mesh(
    new THREE.SphereGeometry(0.92, 18, 14),
    new THREE.MeshBasicMaterial({ visible: false, depthWrite: false })
  );
  hit.userData.kind = 'node';
  hit.userData.nodeId = node.id;
  group.add(hit);

  const light = new THREE.PointLight(accent, 1.15, 6.2, 2);
  light.position.set(0, 0.15, 0.6);
  group.add(light);

  group.userData.node = node;
  group.userData.hit = hit;
  group.userData.glow = glow;
  group.userData.ringGlow = ringGlow;
  group.userData.light = light;
  group.userData.phase = Math.random() * TAU;
  group.userData.hover = 0;
  group.userData.baseScale = 1;
  group.scale.setScalar(0.86);
  group.position.set(0, 0, 0);
  return group;
}

function createNodes() {
  for (const data of UNIVERSES) {
    const group = createNodeGeometry(data);
    world.add(group);
    nodes.push({
      data,
      group,
      label: null,
      line: null,
      pulse: null
    });
  }
}

function createConnections() {
  for (const node of nodes) {
    const accent = new THREE.Color(node.data.accent);
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const material = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.17,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const line = new THREE.Line(geometry, material);
    line.frustumCulled = false;
    world.add(line);

    const pulse = makeSprite(node.data.accent, 0.75, 0.32);
    pulse.material.depthTest = false;
    world.add(pulse);

    node.line = line;
    node.pulse = pulse;
  }
}

function createAtmosphereShafts() {
  const shaftMaterial = (color, opacity) => new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
      uTime: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float edge = smoothstep(0.5, 0.08, abs(vUv.x - 0.5));
        float fade = smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
        float grain = 0.72 + 0.28 * sin(vUv.y * 42.0 + uTime * 0.4 + vUv.x * 11.0);
        gl_FragColor = vec4(uColor, edge * fade * grain * uOpacity);
      }
    `
  });

  const configs = [
    { color: 0x7fe3d2, opacity: 0.055, width: 2.8, height: 11.5, x: 0, y: 0.4, z: -1.3, rot: 0.08 },
    { color: 0xe8c79e, opacity: 0.028, width: 1.5, height: 8.5, x: -0.5, y: 0.5, z: -1.5, rot: -0.42 },
    { color: 0xb9a7ff, opacity: 0.022, width: 1.2, height: 9.0, x: 0.8, y: 0.1, z: -1.6, rot: 0.34 }
  ];

  for (const config of configs) {
    const material = shaftMaterial(config.color, config.opacity);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(config.width, config.height), material);
    mesh.position.set(config.x, config.y, config.z);
    mesh.rotation.z = config.rot;
    mesh.renderOrder = 0;
    coreGroup.add(mesh);
    if (!coreGroup.userData.shafts) coreGroup.userData.shafts = [];
    coreGroup.userData.shafts.push(material);
  }
}

function createFloor() {
  if (IS_MOBILE) return;
  // A shadow-only disc keeps the scene grounded without introducing a visible horizon.
  const shadowCatcher = new THREE.Mesh(
    new THREE.CircleGeometry(3.0, 64),
    new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.34, depthWrite: false })
  );
  shadowCatcher.rotation.x = -Math.PI / 2;
  shadowCatcher.position.y = -2.5;
  shadowCatcher.receiveShadow = quality.shadows;
  scene.add(shadowCatcher);
}

/* ------------------------------------------------------------
   Post-processing
   ---------------------------------------------------------- */

const FinalShader = {
  uniforms: finalUniforms,
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform float uTime;
    uniform float uVelocity;
    uniform float uWarp;
    varying vec2 vUv;
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    void main() {
      vec2 uv = vUv;
      vec2 p = uv - 0.5;
      float r2 = dot(p, p);
      float radial = (0.012 + uWarp * 0.05) * r2;
      uv = 0.5 + p * (1.0 + radial);
      vec2 dir = normalize(uPointer + vec2(0.0001, 0.0001));
      float ca = (0.00055 + uWarp * 0.004 + uVelocity * 0.0008) * r2;
      float r = texture2D(tDiffuse, uv + dir * ca).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - dir * ca).b;
      vec3 col = vec3(r, g, b);
      col = pow(col, vec3(0.96, 0.98, 1.015));
      float vig = smoothstep(0.92, 0.16, length(p));
      col *= mix(0.5, 1.0, vig);
      float n = hash(uv * uResolution + uTime * 37.0);
      col += (n - 0.5) * 0.03;
      col *= 1.0 - 0.02 * sin(uv.y * uResolution.y * 3.14159);
      gl_FragColor = vec4(col, 1.0);
    }
  `
};

function createPost() {
  composer = new EffectComposer(renderer);
  composer.setPixelRatio(quality.dpr);
  composer.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  if (quality.bokeh) {
    bokehPass = new BokehPass(scene, camera, {
      focus: state.distance,
      aperture: 0.000055,
      maxblur: 0.0025
    });
    composer.addPass(bokehPass);
  }

  bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.34, 0.55, 0.34);
  composer.addPass(bloomPass);

  if (quality.afterimage) {
    afterimagePass = new AfterimagePass(0.56);
    afterimagePass.uniforms.damp.value = 0.56;
    composer.addPass(afterimagePass);
  }

  finalPass = new ShaderPass(FinalShader);
  finalPass.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  composer.addPass(finalPass);

  outputPass = new OutputPass();
  composer.addPass(outputPass);
}

/* ------------------------------------------------------------
   Labels / readout
   ---------------------------------------------------------- */

function buildNodeLabels() {
  for (const node of nodes) {
    const label = document.createElement('button');
    label.type = 'button';
    label.className = 'node-label';
    label.dataset.node = node.data.id;
    label.dataset.magnetic = '';
    label.dataset.cursorLabel = `ENTER · ${node.data.title}`;
    label.style.setProperty('--node-accent', node.data.accent);
    label.setAttribute('aria-label', `進入宇宙 ${node.data.numeral}，${node.data.title}`);
    label.innerHTML = `
      <span class="node-label__num">UNIVERSE ${node.data.numeral}</span>
      <span class="node-label__title">${node.data.title}</span>
      <span class="node-label__en">${node.data.en}</span>
      <span class="node-label__arrow" aria-hidden="true">↗</span>
    `;
    label.addEventListener('pointerenter', () => setHoverNode(node, true));
    label.addEventListener('pointerleave', () => { if (state.activeNode === node) setHoverNode(null); });
    label.addEventListener('focus', () => setHoverNode(node, true));
    label.addEventListener('blur', () => { if (state.activeNode === node) setHoverNode(null); });
    label.addEventListener('click', (event) => {
      event.preventDefault();
      warpToNode(node);
    });
    dom.nodeLabels.appendChild(label);
    node.label = label;
    nodeLabels.push(label);
  }
}

function setHoverNode(node, fromLabel = false) {
  if (state.warping) return;
  if (state.activeNode === node) {
    if (fromLabel) updateReadout(node);
    return;
  }
  if (state.activeNode) {
    state.activeNode.group.userData.hoverTarget = 0;
    state.activeNode.label?.classList.remove('is-active');
  }
  state.activeNode = node;
  if (node) {
    node.group.userData.hoverTarget = 1;
    node.label?.classList.add('is-active');
    updateReadout(node);
    dom.cursor.classList.add('is-hovering');
    dom.cursorLabel.textContent = `ENTER · ${node.data.title}`;
  } else {
    updateReadout(null);
    dom.cursor.classList.remove('is-hovering');
    dom.cursorLabel.textContent = '';
  }
}

function updateReadout(node) {
  const data = node ? node.data : CORE_INFO;
  dom.readoutNumeral.textContent = data.numeral;
  dom.readoutEn.textContent = node ? data.en : data.en;
  dom.readoutTitle.textContent = data.title;
  dom.readoutDesc.textContent = data.desc;
  if (node) {
    dom.readout.style.setProperty('--readout-accent', node.data.accent);
    dom.readout.style.borderLeftColor = node.data.accent;
    dom.enterUniverse.href = node.data.href;
    dom.enterUniverse.classList.remove('is-hidden');
    dom.enterUniverse.querySelector('span').textContent = 'ENTER UNIVERSE';
  } else {
    dom.readout.style.borderLeftColor = 'rgba(231, 237, 238, 0.16)';
    dom.enterUniverse.href = 'classic.html';
    dom.enterUniverse.classList.add('is-hidden');
  }
}

/* ------------------------------------------------------------
   Camera / controls
   ---------------------------------------------------------- */

const raycaster = new THREE.Raycaster();
const pointerNdc = new THREE.Vector2();

function layoutNodes() {
  const mobile = window.innerWidth <= 760;
  for (const node of nodes) {
    const position = mobile ? node.data.mobile : node.data.desktop;
    node.group.userData.basePosition = new THREE.Vector3(position[0], position[1], position[2]);
    node.group.position.copy(node.group.userData.basePosition);
  }
  if (coreGroup) coreGroup.scale.setScalar(mobile ? 0.86 : 1);
  if (world) world.scale.setScalar(mobile ? 0.92 : 1);
  camera.fov = mobile ? 46 : 38;
  camera.updateProjectionMatrix();
}

function applyPointer(event) {
  state.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  state.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  pointerNdc.copy(state.pointer);
}

function getRayHits() {
  raycaster.setFromCamera(state.pointer, camera);
  const objects = [coreHit, ...nodes.map((node) => node.group.userData.hit)];
  return raycaster.intersectObjects(objects, false);
}

function updateHoverFromRay() {
  if (!state.entered || state.warping || state.dragging) return;
  const hits = getRayHits();
  if (!hits.length) {
    state.hoverCore = false;
    setHoverNode(null);
    return;
  }
  const hit = hits[0].object;
  if (hit.userData.kind === 'node') {
    const node = nodes.find((n) => n.data.id === hit.userData.nodeId);
    state.hoverCore = false;
    setHoverNode(node || null);
  } else if (hit.userData.kind === 'core') {
    state.hoverCore = true;
    setHoverNode(null);
    dom.cursor.classList.add('is-hovering');
    dom.cursorLabel.textContent = 'CORE · DRAG / DOUBLE CLICK';
  }
}

function onPointerMove(event) {
  if (activePointers.has(event.pointerId)) {
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (activePointers.size >= 2) {
      const points = [...activePointers.values()];
      const nextDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      if (pinchDistance > 0) {
        state.targetDistance = clamp(state.targetDistance * (pinchDistance / nextDistance), IS_MOBILE ? 8.2 : 4.8, 31);
      }
      pinchDistance = nextDistance;
      state.pinching = true;
      state.dragging = false;
      state.lastInteraction = state.elapsed;
      return;
    }
  }

  const dx = event.clientX - state.prevPointer.x;
  const dy = event.clientY - state.prevPointer.y;
  state.prevPointer.x = event.clientX;
  state.prevPointer.y = event.clientY;
  state.pointerVelocity = clamp(Math.hypot(dx, dy) / 18, 0, 1.8);
  applyPointer(event);

  state.cursor.tx = event.clientX;
  state.cursor.ty = event.clientY;
  dom.cursor.classList.remove('is-idle');

  if (state.pinching) return;
  if (state.dragging) {
    state.pointerMoved = true;
    state.dragMoved += Math.hypot(dx, dy);
    if (state.dragMode === 'orbit') {
      state.targetYaw -= dx * 0.0034;
      state.targetPitch = clamp(state.targetPitch + dy * 0.0026, -0.65, 0.62);
    } else if (state.dragMode === 'core') {
      state.coreSpin.y += dx * 0.006;
      state.coreSpin.x += dy * 0.0045;
      if (event.shiftKey) {
        state.stretchTarget = clamp(state.stretchTarget - dy * 0.004, -0.42, 0.52);
      }
    }
    state.lastInteraction = state.elapsed;
  } else if (state.entered) {
    updateHoverFromRay();
  }

  const magnetic = event.target.closest('[data-magnetic]');
  if (magnetic !== state.cursor.magnet) {
    if (state.cursor.magnet) {
      state.cursor.magnet.style.setProperty('--mag-x', '0px');
      state.cursor.magnet.style.setProperty('--mag-y', '0px');
    }
    state.cursor.magnet = magnetic;
  }
  if (magnetic) {
    const rect = magnetic.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    magnetic.style.setProperty('--mag-x', `${(event.clientX - cx) * 0.16}px`);
    magnetic.style.setProperty('--mag-y', `${(event.clientY - cy) * 0.16}px`);
    dom.cursor.classList.add('is-hovering');
    if (magnetic.dataset.cursorLabel) dom.cursorLabel.textContent = magnetic.dataset.cursorLabel;
  } else if (!state.hoverCore) {
    dom.cursor.classList.remove('is-hovering');
    dom.cursorLabel.textContent = '';
  }
}

function onPointerDown(event) {
  if (!state.entered || state.warping) return;
  if (event.button !== undefined && event.button !== 0) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (event.pointerType === 'touch' && activePointers.size >= 2) {
    const points = [...activePointers.values()];
    pinchDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    state.pinching = true;
    state.dragging = false;
    return;
  }
  if (event.target !== dom.canvas) return;
  applyPointer(event);
  state.prevPointer.x = event.clientX;
  state.prevPointer.y = event.clientY;
  const hits = getRayHits();
  state.dragging = true;
  state.dragMoved = 0;
  state.pointerMoved = false;
  state.dragLast.x = event.clientX;
  state.dragLast.y = event.clientY;
  state.pendingNode = null;
  dom.canvas.setPointerCapture?.(event.pointerId);

  if (hits.length) {
    const hit = hits[0].object;
    if (hit.userData.kind === 'node') {
      const node = nodes.find((n) => n.data.id === hit.userData.nodeId);
      state.pendingNode = node;
      state.dragMode = 'orbit';
    } else if (hit.userData.kind === 'core') {
      state.dragMode = event.shiftKey ? 'core' : 'core';
      dom.canvas.classList.add('is-core-drag');
    } else {
      state.dragMode = 'orbit';
    }
  } else {
    state.dragMode = 'orbit';
  }
  dom.cursor.classList.add('is-down');
  state.lastInteraction = state.elapsed;
}

function onPointerUp(event) {
  activePointers.delete(event.pointerId);
  if (activePointers.size < 2) {
    state.pinching = false;
    pinchDistance = 0;
  }
  if (!state.dragging) return;
  const wasCore = state.dragMode === 'core';
  const pending = state.pendingNode;
  const moved = state.dragMoved;
  state.dragging = false;
  state.dragMode = null;
  state.pendingNode = null;
  dom.canvas.classList.remove('is-core-drag');
  dom.cursor.classList.remove('is-down');
  state.lastInteraction = state.elapsed;

  if (!state.pointerMoved || moved < 7) {
    if (pending) {
      warpToNode(pending);
      return;
    }
    if (wasCore) {
      triggerPulse();
    }
  }
  if (event.pointerId !== undefined) dom.canvas.releasePointerCapture?.(event.pointerId);
}

function onWheel(event) {
  if (!state.entered || state.warping) return;
  event.preventDefault();
  const factor = Math.exp(event.deltaY * 0.0011);
  state.targetDistance = clamp(state.targetDistance * factor, IS_MOBILE ? 8.2 : 4.8, 31);
  state.lastInteraction = state.elapsed;
}

function onKeyDown(event) {
  if (!state.ready) return;
  if (event.key === 'Escape') {
    closeGuide();
    return;
  }
  if (event.key === '?' || (event.key === '/' && event.shiftKey)) {
    toggleGuide();
    return;
  }
  if (event.key === '1' || event.key === '2' || event.key === '3') {
    const node = nodes[Number(event.key) - 1];
    if (node) warpToNode(node);
    return;
  }
  if (event.key.toLowerCase() === 'r') {
    resetView();
    return;
  }
  if (event.key.toLowerCase() === 'e') {
    triggerExplosion();
    return;
  }
  if (event.key.toLowerCase() === 'm') {
    toggleSound();
    return;
  }
  if (event.key === 'ArrowLeft') {
    state.targetYaw += 0.12;
    state.lastInteraction = state.elapsed;
  } else if (event.key === 'ArrowRight') {
    state.targetYaw -= 0.12;
    state.lastInteraction = state.elapsed;
  } else if (event.key === 'ArrowUp') {
    state.targetPitch = clamp(state.targetPitch - 0.08, -0.65, 0.62);
    state.lastInteraction = state.elapsed;
  } else if (event.key === 'ArrowDown') {
    state.targetPitch = clamp(state.targetPitch + 0.08, -0.65, 0.62);
    state.lastInteraction = state.elapsed;
  }
}

function resetView() {
  state.targetYaw = 0;
  state.targetPitch = 0.12;
  state.targetDistance = IS_MOBILE ? 14.2 : 11.4;
  state.coreSpin.set(0, 0);
  state.stretchTarget = 0;
  state.lastInteraction = state.elapsed;
  if (state.activeNode) setHoverNode(null);
  if (audioEngine && audioEngine.on) audioEngine.pulse(0.2);
  announce('視角已重置');
}

function triggerPulse() {
  triggerExplosion(0.42);
}

function triggerExplosion(force = 1) {
  if (state.warping) return;
  state.explode = Math.max(state.explode, force);
  state.shake = 0.65 * force;
  if (shockwave) {
    shockwave.material.opacity = 0.55 * force;
    shockwave.scale.setScalar(1);
  }
  if (audioEngine && audioEngine.on) audioEngine.pulse(0.8 * force);
  announce('核心拆解中');
}

/* ------------------------------------------------------------
   Warp navigation
   ---------------------------------------------------------- */

function warpToNode(node) {
  if (!node || state.warping || !state.ready) return;
  state.warping = true;
  state.activeNode = node;
  document.body.classList.add('is-warping');
  if (dom.warpFlash) {
    dom.warpFlash.classList.remove('is-active');
    void dom.warpFlash.offsetWidth;
    dom.warpFlash.classList.add('is-active');
  }
  announce(`正在前往宇宙 ${node.data.numeral}，${node.data.title}`);
  if (audioEngine && audioEngine.on) audioEngine.fadeOut(0.9);

  const duration = REDUCED ? 260 : 1450;
  const start = performance.now();
  const startPosition = camera.position.clone();
  const nodeWorld = node.group.getWorldPosition(new THREE.Vector3());
  const targetPosition = nodeWorld.clone().add(
    camera.position.clone().sub(nodeWorld).normalize().multiplyScalar(1.45)
  ).add(new THREE.Vector3(0, 0.08, 0.25));

  function step(now) {
    const t = clamp((now - start) / duration, 0, 1);
    const eased = easeOutCubic(t);
    if (!REDUCED) {
      camera.position.lerpVectors(startPosition, targetPosition, eased);
      camera.lookAt(nodeWorld);
      camera.fov = lerp(camera.fov, 54, eased);
      camera.updateProjectionMatrix();
      finalUniforms.uWarp.value = eased;
      node.group.scale.setScalar(lerp(1, 1.7, eased));
    }
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      window.location.href = node.data.href;
    }
  }
  requestAnimationFrame(step);
}

/* ------------------------------------------------------------
   Cursor
   ---------------------------------------------------------- */

function updateCursor(dt) {
  if (!document.body.classList.contains('has-cursor')) return;
  const cursor = state.cursor;
  let tx = cursor.tx;
  let ty = cursor.ty;
  if (cursor.magnet) {
    const r = cursor.magnet.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    tx += (cx - tx) * 0.18;
    ty += (cy - ty) * 0.18;
  }
  cursor.x = damp(cursor.x, tx, 24, dt);
  cursor.y = damp(cursor.y, ty, 24, dt);
  dom.cursor.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0)`;

  const trails = dom.cursor.querySelectorAll('.cursor-trail');
  const offsets = [0.16, 0.09, 0.045];
  offsets.forEach((factor, index) => {
    trails[index].style.transform = `translate3d(${(cursor.x * (1 - factor) + cursor.tx * factor)}px, ${(cursor.y * (1 - factor) + cursor.ty * factor)}px, 0) translate(-50%, -50%)`;
  });
}

function setupInput() {
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerdown', onPointerDown, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });
  window.addEventListener('pointercancel', onPointerUp, { passive: true });
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('dblclick', (event) => {
    if (event.target !== dom.canvas) return;
    applyPointer(event);
    const hits = getRayHits();
    if (hits.length && hits[0].object.userData.kind === 'core') triggerExplosion(1);
  });
}

function setupCursor() {
  if (IS_TOUCH) return;
  document.body.classList.add('has-cursor');
}

/* ------------------------------------------------------------
   Readout buttons
   ---------------------------------------------------------- */

dom.enterUniverse.addEventListener('click', (event) => {
  event.preventDefault();
  if (state.activeNode) warpToNode(state.activeNode);
  else window.location.href = dom.enterUniverse.href;
});

dom.enterBtn.addEventListener('click', enterNexus);
dom.skipBtn.addEventListener('click', enterNexus);

function enterNexus() {
  if (!state.ready || state.entered) return;
  state.entered = true;
  state.enteredAt = state.elapsed;
  document.body.classList.add('is-entered');
  dom.intro.classList.add('is-leaving');
  dom.intro.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => { dom.intro.style.display = 'none'; }, 1200);
  state.targetDistance = IS_MOBILE ? 14.2 : 11.4;
  state.targetPitch = 0.12;
  state.lastInteraction = state.elapsed;
  dom.cursor.classList.add('is-idle');
  dom.cursor.classList.remove('is-hovering');
  dom.cursorLabel.textContent = '';
  if (audioEngine) audioEngine.pulse(0.25);
  announce('已進入 Spatial Nexus。使用拖曳環繞，點擊宇宙節點前往。');
  window.setTimeout(() => {
    const first = nodeLabels[0];
    if (first) first.focus({ preventScroll: true });
  }, 1600);
}

/* ------------------------------------------------------------
   Guide / sound
   ---------------------------------------------------------- */

function toggleGuide(force) {
  if (!dom.guide || !dom.guideBtn) return;
  const open = force !== undefined ? force : !dom.guide.classList.contains('is-open');
  dom.guide.classList.toggle('is-open', open);
  dom.guide.setAttribute('aria-hidden', String(!open));
  dom.guideBtn.setAttribute('aria-expanded', String(open));
}

function closeGuide() {
  if (dom.guide?.classList.contains('is-open')) toggleGuide(false);
}

dom.guideBtn.addEventListener('click', () => toggleGuide());

function toggleSound() {
  if (!AudioContextSupported()) return;
  if (!audioEngine) audioEngine = new AmbientAudio();
  audioEngine.toggle().then((on) => {
    dom.soundBtn.setAttribute('aria-pressed', String(on));
    dom.soundBtn.querySelector('span:last-child').textContent = on ? 'SOUND ON' : 'SOUND OFF';
  });
}

dom.soundBtn.addEventListener('click', toggleSound);
dom.resetBtn.addEventListener('click', resetView);

function AudioContextSupported() {
  return Boolean(window.AudioContext || window.webkitAudioContext);
}

class AmbientAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.analyser = null;
    this.data = null;
    this.on = false;
    this.oscillators = [];
  }

  async init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0001;
    this.master.connect(this.ctx.destination);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 460;
    filter.Q.value = 0.8;
    filter.connect(this.master);

    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    this.master.connect(this.analyser);

    const frequencies = [55, 82.5, 110, 164.8];
    frequencies.forEach((frequency, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = index === 3 ? 'sine' : 'triangle';
      osc.frequency.value = frequency;
      osc.detune.value = (index - 1.5) * 4.2;
      gain.gain.value = index === 3 ? 0.018 : 0.045 / (index + 1);
      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      this.oscillators.push(osc);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.025 + index * 0.017;
      lfoGain.gain.value = 2.5 + index;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.detune);
      lfo.start();
    });

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.04;
    lfoGain.gain.value = 170;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i += 1) channel[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 900;
    noiseFilter.Q.value = 0.6;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = 0.014;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.master);
    noise.start();

    if (this.ctx.state === 'suspended') await this.ctx.resume();
  }

  async toggle() {
    await this.init();
    this.on = !this.on;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(this.on ? 0.09 : 0.0001, now, 0.5);
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    return this.on;
  }

  pulse(strength = 0.5) {
    if (!this.ctx || !this.on) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(68, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.7);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.055 * strength, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + 1);
  }

  fadeOut(seconds = 0.8) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(0.0001, now, seconds / 3);
    this.on = false;
  }

  read() {
    if (!this.analyser || !this.on) return 0;
    this.analyser.getByteFrequencyData(this.data);
    let sum = 0;
    for (let i = 0; i < this.data.length; i += 1) sum += this.data[i];
    return clamp(sum / (this.data.length * 255), 0, 1);
  }
}

/* ------------------------------------------------------------
   Resize / adaptive quality
   ---------------------------------------------------------- */

function onResize() {
  if (!renderer || !camera) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const wasMobile = IS_MOBILE;
  // layout depends on live width; node base positions handle it.
  camera.aspect = w / h;
  camera.fov = w <= 760 ? 46 : 38;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(quality.dpr);
  renderer.setSize(w, h);
  if (composer) {
    composer.setPixelRatio(quality.dpr);
    composer.setSize(w, h);
  }
  if (finalPass) finalPass.uniforms.uResolution.value.set(w, h);
  if (starUniforms.uDpr) starUniforms.uDpr.value = quality.dpr;
  if (starUniforms.uPixelRatio) starUniforms.uPixelRatio.value = quality.dpr;
  if (dust) {
    dust.material.uniforms.uDpr.value = quality.dpr;
    dust.material.uniforms.uAudio.value = state.audio;
  }
  if (bokehPass) bokehPass.uniforms.aspect.value = w / h;
  layoutNodesForViewport(w);
}

function layoutNodesForViewport(width) {
  for (const node of nodes) {
    const arr = width <= 760 ? node.data.mobile : node.data.desktop;
    if (!node.group.userData.basePosition) node.group.userData.basePosition = new THREE.Vector3();
    node.group.userData.basePosition.set(arr[0], arr[1], arr[2]);
  }
  if (coreGroup) coreGroup.scale.setScalar(width <= 760 ? 0.86 : 1);
  if (world) world.scale.setScalar(width <= 760 ? 0.92 : 1);
}

/* ------------------------------------------------------------
   Animation loop
   ---------------------------------------------------------- */

const bgMesh = { value: null };
let starGroup;
let dust;
let elapsed = 0;

function updateCamera(dt) {
  const nowEnterFactor = state.entered ? clamp((state.elapsed - state.enteredAt) / 2.4, 0, 1) : 0;
  const cinematic = easeOutCubic(nowEnterFactor);
  const baseDistance = state.entered ? state.targetDistance : 18.5;
  state.distance = damp(state.distance, baseDistance, state.entered ? 2.4 : 1.1, dt);
  state.yaw = damp(state.yaw, state.targetYaw, 2.8, dt);
  state.pitch = damp(state.pitch, state.targetPitch, 2.8, dt);

  if (state.entered && !state.dragging && !state.warping && state.elapsed - state.lastInteraction > 4.5 && !REDUCED) {
    state.targetYaw += dt * 0.018;
  }

  const pSmooth = state.pointerSmooth;
  pSmooth.x = damp(pSmooth.x, state.pointer.x, 2.1, dt);
  pSmooth.y = damp(pSmooth.y, state.pointer.y, 2.1, dt);

  const parallax = 0.3 * (0.35 + cinematic * 0.65);
  const yaw = state.yaw + Math.sin(state.elapsed * 0.08) * 0.018 * cinematic;
  const pitch = state.pitch + Math.cos(state.elapsed * 0.07) * 0.014 * cinematic;
  const dist = state.distance + Math.sin(state.elapsed * 0.11) * 0.09 * cinematic;
  const x = Math.sin(yaw) * Math.cos(pitch) * dist + pSmooth.x * parallax;
  const y = Math.sin(pitch) * dist + 1.25 * (1 - cinematic) + pSmooth.y * parallax * 0.45;
  const z = Math.cos(yaw) * Math.cos(pitch) * dist;
  const shake = state.shake * 0.07;
  camera.position.set(
    x + Math.sin(state.elapsed * 41) * shake,
    y + Math.cos(state.elapsed * 37) * shake,
    z + Math.sin(state.elapsed * 29) * shake * 0.5
  );
  const look = new THREE.Vector3(pSmooth.x * 0.16, pSmooth.y * 0.09, 0);
  camera.lookAt(look);
  state.shake = damp(state.shake, 0, 4.5, dt);
}

function updateCore(dt) {
  const u = coreUniforms;
  u.uTime.value = state.elapsed;
  u.uExplode.value = damp(u.uExplode.value, state.explode, 6, dt);
  u.uHover.value = damp(u.uHover.value, state.hoverCore ? 1 : 0, 5, dt);
  u.uAudio.value = damp(u.uAudio.value, state.audio, 4, dt);
  state.stretch = damp(state.stretch, state.stretchTarget, 5.5, dt);
  u.uStretch.value = state.stretch;

  if (!state.dragging && !REDUCED) {
    state.coreSpin.x *= 0.94;
    state.coreSpin.y *= 0.94;
    state.coreRotation.x += state.coreSpin.x * dt;
    state.coreRotation.y += state.coreSpin.y * dt;
    coreGroup.rotation.x = state.coreRotation.x;
    coreGroup.rotation.y = state.coreRotation.y + state.elapsed * 0.035;
    coreGroup.rotation.z = Math.sin(state.elapsed * 0.13) * 0.05;
  } else {
    state.coreRotation.x += state.coreSpin.x * dt;
    state.coreRotation.y += state.coreSpin.y * dt;
    coreGroup.rotation.x = state.coreRotation.x;
    coreGroup.rotation.y = state.coreRotation.y;
  }

  if (coreGroup.userData.rings) {
    coreGroup.userData.rings.forEach((ring, index) => {
      ring.rotation.z += dt * (0.08 + index * 0.045);
      ring.rotation.y += dt * (index === 1 ? -0.06 : 0.03);
    });
  }
  if (coreGroup.userData.shafts) {
    coreGroup.userData.shafts.forEach((material) => {
      material.uniforms.uTime.value = state.elapsed;
    });
  }

  const shardMesh = coreGroup.userData.shardMesh;
  const shards = coreGroup.userData.shards;
  if (shardMesh && shards) {
    const dummy = new THREE.Object3D();
    const explode = u.uExplode.value;
    for (let i = 0; i < shards.length; i += 1) {
      const shard = shards[i];
      const factor = 1 + explode * 2.1 + Math.sin(state.elapsed * shard.speed + shard.phase) * 0.04;
      dummy.position.copy(shard.base).multiplyScalar(factor);
      dummy.rotation.set(
        state.elapsed * shard.speed * 0.6 + shard.phase,
        state.elapsed * shard.speed * 0.4,
        shard.phase
      );
      dummy.scale.setScalar(shard.scale * (1 + explode * 0.8));
      dummy.updateMatrix();
      shardMesh.setMatrixAt(i, dummy.matrix);
    }
    shardMesh.instanceMatrix.needsUpdate = true;
  }

  state.explode = damp(state.explode, 0, 1.65, dt);
  if (shockwave) {
    shockwave.material.opacity = damp(shockwave.material.opacity, 0, 3.5, dt);
    shockwave.scale.setScalar(1 + (1 - shockwave.material.opacity) * 0.04);
  }
}

function updateNodes(dt) {
  for (const node of nodes) {
    const group = node.group;
    const data = node.data;
    const base = group.userData.basePosition || new THREE.Vector3(data.desktop[0], data.desktop[1], data.desktop[2]);
    const bob = Math.sin(state.elapsed * 0.55 + group.userData.phase) * 0.07;
    group.position.set(base.x, base.y + bob, base.z);
    group.rotation.y += dt * (data.kind === 'orb' ? 0.12 : 0.08);
    group.rotation.x = Math.sin(state.elapsed * 0.18 + group.userData.phase) * 0.07;
    const targetScale = state.activeNode === node ? 1.16 : 0.9;
    group.scale.x = damp(group.scale.x, targetScale, 4.5, dt);
    group.scale.y = damp(group.scale.y, targetScale, 4.5, dt);
    group.scale.z = damp(group.scale.z, targetScale, 4.5, dt);
    const hoverTarget = state.activeNode === node ? 1 : 0;
    group.userData.hover = damp(group.userData.hover, hoverTarget, 5, dt);
    group.userData.glow.material.opacity = 0.2 + group.userData.hover * 0.26;
    group.userData.ringGlow.material.opacity = 0.1 + group.userData.hover * 0.2;
    group.userData.light.intensity = 1.4 + group.userData.hover * 2.6;
    if (group.userData.main) {
      group.userData.main.position.y = Math.sin(state.elapsed * 0.7 + group.userData.phase) * 0.02;
    }
    if (group.userData.wire) {
      if (data.kind === 'lattice') group.userData.wire.rotation.y -= dt * 0.18;
      else if (data.kind === 'orb') group.userData.wire.rotation.z += dt * 0.12;
      else group.userData.wire.rotation.y += dt * 0.1;
    }
    if (group.userData.inner) {
      group.userData.inner.rotation.x += dt * 0.5;
      group.userData.inner.rotation.y -= dt * 0.4;
    }
    if (group.userData.ring2) group.userData.ring2.rotation.z -= dt * 0.16;

    if (node.line) {
      const positions = node.line.geometry.attributes.position.array;
      positions[0] = 0;
      positions[1] = 0;
      positions[2] = 0;
      positions[3] = group.position.x;
      positions[4] = group.position.y;
      positions[5] = group.position.z;
      node.line.geometry.attributes.position.needsUpdate = true;
    }
    if (node.pulse) {
      const t = ((state.elapsed * 0.1 + group.userData.phase) % 1 + 1) % 1;
      node.pulse.position.lerpVectors(new THREE.Vector3(), group.position, t);
      node.pulse.material.opacity = 0.6 * Math.sin(Math.PI * t);
      const s = 0.25 + Math.sin(Math.PI * t) * 0.3;
      node.pulse.scale.set(s, s, 1);
    }

    // Node label projection.
    const label = node.label;
    if (label) {
      const worldPos = group.getWorldPosition(new THREE.Vector3());
      const projected = worldPos.clone().project(camera);
      const visible = state.entered && !state.warping && projected.z < 1 && projected.z > -1 &&
        projected.x > -1.35 && projected.x < 1.35 && projected.y > -1.3 && projected.y < 1.3;
      label.classList.toggle('is-behind', !visible);
      if (visible) {
        const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
        const offset = window.innerWidth <= 760 ? 42 : (node.data.id === 'media' ? 58 : 68);
        label.style.left = `${x.toFixed(1)}px`;
        label.style.top = `${(y - offset).toFixed(1)}px`;
        label.classList.add('is-visible');
      }
    }
  }
}

function updateParticles(dt) {
  starUniforms.uTime.value = state.elapsed;
  if (starGroup) {
    starGroup.children[0].rotation.y += dt * 0.0035;
    starGroup.children[0].rotation.x += dt * 0.001;
  }
  if (dust) {
    dust.material.uniforms.uTime.value = state.elapsed;
    dust.material.uniforms.uAudio.value = state.audio;
  }
  bgUniforms.uTime.value = state.elapsed;
  bgUniforms.uPointer.value.copy(state.pointerSmooth);
  bgUniforms.uAudio.value = state.audio;
}

function updatePost(dt) {
  finalUniforms.uTime.value = state.elapsed;
  finalUniforms.uPointer.value.copy(state.pointerSmooth);
  finalUniforms.uVelocity.value = damp(finalUniforms.uVelocity.value, state.pointerVelocity, 4, dt);
  state.pointerVelocity = damp(state.pointerVelocity, 0, 2.6, dt);
  if (bokehPass) {
    const focusObject = state.activeNode
      ? state.activeNode.group.getWorldPosition(new THREE.Vector3())
      : new THREE.Vector3(0, 0, 0);
    const target = focusObject.distanceTo(camera.position);
    bokehPass.uniforms.focus.value = damp(bokehPass.uniforms.focus.value, target, 2.6, dt);
  }
}

function updateUI() {
  const now = performance.now();
  state.frameCount += 1;
  if (now - state.fpsTime > 500) {
    state.fps = Math.round((state.frameCount * 1000) / (now - state.fpsTime));
    dom.fps.textContent = String(state.fps);
    state.frameCount = 0;
    state.fpsTime = now;

    if (performance.now() - state.startedAt > 5000 && state.fps < 34 && !state.qualityReduced) {
      state.qualityReduced = true;
      if (bokehPass) bokehPass.enabled = false;
      if (afterimagePass) afterimagePass.enabled = false;
      if (bloomPass) bloomPass.strength = 0.25;
      quality.dpr = Math.max(1, quality.dpr - 0.2);
      renderer.setPixelRatio(quality.dpr);
      if (composer) composer.setPixelRatio(quality.dpr);
      if (finalPass) finalPass.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      dom.renderInfo.textContent = 'WEBGL 2 · ECO';
    }
  }
  updateCursor(1 / 60);
}

function animate() {
  requestAnimationFrame(animate);
  if (document.hidden) return;
  const now = performance.now();
  const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
  lastFrameTime = now;
  state.elapsed += dt;
  state.audio = damp(state.audio, audioEngine ? audioEngine.read() : 0, 5, dt);
  if (!state.warping) updateCamera(dt);
  updateCore(dt);
  updateNodes(dt);
  updateParticles(dt);
  updatePost(dt);
  updateUI();
  composer.render();
  renderer.info.reset();
}

/* ------------------------------------------------------------
   Boot sequence
   ---------------------------------------------------------- */

async function boot() {
  setLoad(4, 'CALIBRATING SPATIAL FIELD');
  await frame();
  try {
    createRenderer();
  } catch (error) {
    showFallback(error);
    return;
  }
  try {
    const gl = renderer.getContext();
    const debug = gl.getExtension('WEBGL_debug_renderer_info');
    const rendererName = debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : '';
    if (/swiftshader|llvmpipe|software/i.test(String(rendererName))) {
      quality.bokeh = false;
      quality.afterimage = false;
      quality.dpr = 1;
      quality.stars = 900;
      quality.dust = 340;
      quality.shards = 32;
      quality.shadows = false;
      renderer.shadowMap.enabled = false;
      renderer.setPixelRatio(1);
      state.softwareRenderer = true;
    }

  } catch (error) { /* noop */ }

  starUniforms.uDpr.value = quality.dpr;
  starUniforms.uPixelRatio.value = quality.dpr;
  setLoad(16, 'CONSTRUCTING BACKGROUND GEOMETRY');
  await frame();
  createBackground();
  starGroup = createStarfield();
  scene.add(starGroup);
  dust = createDust();
  setLoad(34, 'MAPPING SIGNAL LATTICE');
  await frame();
  createCore();
  createAtmosphereShafts();
  createNodes();
  createConnections();
  createFloor();
  setLoad(62, 'ALIGNING THREE UNIVERSES');
  await frame();
  buildNodeLabels();
  updateReadout(null);
  createPost();
  setLoad(84, 'TUNING OPTICAL PIPELINE');
  await frame();
  layoutNodesForViewport(window.innerWidth);
  camera.position.set(0, 4.2, 18.5);
  camera.lookAt(0, 0, 0);
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
  setupInput();
  setupCursor();
  dom.renderInfo.textContent = renderer.capabilities.isWebGL2 ? 'WEBGL 2' : 'WEBGL 1';
  setLoad(100, 'SPATIAL FIELD STABLE');
  state.ready = true;
  dom.enterBtn.disabled = false;
  dom.enterBtn.focus({ preventScroll: true });
  animate();
}

function showFallback(error) {
  console.error(error);
  if (dom.intro) dom.intro.style.display = 'none';
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="nexus-fallback"><div><p>SPATIAL FIELD OFFLINE</p><p style="margin-top:14px;font-size:12px;opacity:.7">此瀏覽器無法建立 WebGL 2 場景。<br>你仍然可以進入經典二維星圖。</p><p style="margin-top:18px"><a href="classic.html">進入宇宙 I · 藝術音樂 ↗</a></p></div></div>'
  );
}

boot();
