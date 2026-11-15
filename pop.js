/* ============================================================
   MUSICA UNIVERSALIS · UNIVERSE II
   POP COSMOS — a ring galaxy of seven popular genres.
   ============================================================ */

(() => {
  'use strict';

  /* ----------------------------------------------------------
     01. Genre data
     ---------------------------------------------------------- */

  const GENRES = [
    {
      id: 'blues',
      idx: '01',
      name: '藍調',
      en: 'BLUES',
      years: '約 1890 — 現在',
      yearsShort: '1890s—NOW',
      worldName: '十字路口電台',
      worldEn: 'CROSSROADS RADIO',
      kicker: 'THE BLUE NOTE',
      tagline: '傷痕的形狀',
      accent: '#ffb37a',
      accentRgb: '255, 179, 122',
      planet: {
        angle: 200,
        orbit: 1,
        size: 56,
        c1: '#ffd2a0',
        c2: '#8d4f6d',
        c3: '#25142b',
        glow: 'rgba(255, 151, 118, 0.5)',
        ring: false
      },
      desc: '藍調從美國南方的田野、教堂與鐵道之間長出來。它把工作歌、靈歌與一個人的傷痕壓縮進十二小節，讓痛苦有了可以被共享的節奏。',
      quote: '「藍調始於一個人對著黑夜說話。」',
      quoteBy: '星圖筆記',
      traits: ['十二小節', '藍調音', '即興問答'],
      branches: [
        {
          tag: 'DELTA · 三角洲',
          title: '三角洲藍調',
          text: '羅伯·強森在密西西比三角洲的十字路口彈奏，讓一把吉他同時扮演旋律、低音與節奏。錄音技術把一個人的房間，變成整個世界的迴響。'
        },
        {
          tag: 'CHICAGO · 芝加哥',
          title: '芝加哥藍調',
          text: 'Muddy Waters 把三角洲的滑音與呼喊帶進城市，換上電吉他和擴音器。鄉村的藍調長出城市的體積與電流。'
        },
        {
          tag: 'ELECTRIC · 電藍調',
          title: '電藍調',
          text: 'B.B. King 的彎音像一個人在句子中間停頓、呼吸、再說下去。電藍調讓傷痕不再只是被唱出來，而是被推到整個舞台的中央。'
        }
      ],
      artists: [
        { name: '羅伯·強森', years: '1911—1938', work: '《Cross Road Blues》' },
        { name: '馬迪·沃特斯', years: '1913—1983', work: '《Hoochie Coochie Man》' },
        { name: 'B.B. King', years: '1925—2015', work: '《The Thrill Is Gone》' }
      ],
      tracks: [
        { title: 'Cross Road Blues', composer: '羅伯·強森', year: '1936', note: '三角洲藍調', src: null },
        { title: 'Hoochie Coochie Man', composer: '馬迪·沃特斯', year: '1954', note: '芝加哥藍調', src: null },
        { title: 'The Thrill Is Gone', composer: 'B.B. King', year: '1969', note: '電藍調', src: null }
      ],
      motif: {
        root: 45, scale: [0, 3, 5, 6, 7, 10], pattern: [0, 2, 4, 3, 2, 0, 4, 2, 5, 4, 3, 2],
        tempo: 84, subdivision: 0.8, hold: 1.35, wave: 'triangle', noteGain: 0.055,
        filter: 1400, send: 0.3, delay: 0.32, drone: [-12, -5, 7], droneGain: 0.02, droneWave: 'sine'
      }
    },
    {
      id: 'jazz',
      idx: '02',
      name: '爵士',
      en: 'JAZZ',
      years: '約 1900 — 現在',
      yearsShort: '1900s—NOW',
      worldName: '午夜俱樂部',
      worldEn: 'MIDNIGHT CLUB',
      kicker: 'THE SWING ORBIT',
      tagline: '即興的引力',
      accent: '#ffd18a',
      accentRgb: '255, 209, 138',
      planet: {
        angle: 251,
        orbit: 1.02,
        size: 68,
        c1: '#ffe1a8',
        c2: '#8b5a8f',
        c3: '#21152e',
        glow: 'rgba(255, 208, 142, 0.55)',
        ring: true
      },
      desc: '爵士是一種在行進中發明的音樂。紐奧良的遊行樂隊、大樂團的搖擺、咆勃的速度與調式的留白，讓每一次演奏都變成一次不可重複的協商。',
      quote: '「爵士是自由與紀律的對話。」',
      quoteBy: '星圖筆記',
      traits: ['搖擺', '即興獨奏', '呼應'],
      branches: [
        {
          tag: 'NEW ORLEANS · 紐奧良',
          title: '紐奧良與大樂團',
          text: '路易斯·阿姆斯壯把小號變成一個會說話的角色；大樂團則把十幾個人組成一台精密的搖擺機器。爵士從遊行與舞廳走進聚光燈。'
        },
        {
          tag: 'BEBOP · 咆勃',
          title: '咆勃',
          text: '查理·帕克與迪齊·葛拉斯彼把速度推到極限，讓和弦進行變成一場高速對話。聽眾來不及拍手，只能跟著樂手一起呼吸。'
        },
        {
          tag: 'MODAL · 調式',
          title: '調式與自由',
          text: '邁爾斯·戴維斯用調式取代密集的和弦，讓一個音可以停留很久。爵士開始從「演奏什麼」轉向「如何聆聽空間」。'
        }
      ],
      artists: [
        { name: '路易斯·阿姆斯壯', years: '1901—1971', work: '《West End Blues》' },
        { name: '查理·帕克', years: '1920—1955', work: '《Ko-Ko》' },
        { name: '邁爾斯·戴維斯', years: '1926—1991', work: '《So What》' }
      ],
      tracks: [
        { title: 'West End Blues', composer: '路易斯·阿姆斯壯', year: '1928', note: '紐奧良爵士', src: null },
        { title: 'Ko-Ko', composer: '查理·帕克', year: '1945', note: '咆勃', src: null },
        { title: 'So What', composer: '邁爾斯·戴維斯', year: '1959', note: '調式爵士', src: null }
      ],
      motif: {
        root: 50, scale: [0, 2, 3, 5, 7, 9, 10], pattern: [0, 4, 2, 5, 3, 1, 4, 6, 5, 3, 2, 4],
        tempo: 128, subdivision: 0.45, hold: 1.1, wave: 'triangle', noteGain: 0.05,
        filter: 2200, send: 0.2, delay: 0.22, drone: [-12, -5, 7], droneGain: 0.014, droneWave: 'sine'
      }
    },
    {
      id: 'rock',
      idx: '03',
      name: '搖滾',
      en: 'ROCK',
      years: '1950s — 現在',
      yearsShort: '1950s—NOW',
      worldName: '高壓舞台',
      worldEn: 'HIGH VOLTAGE STAGE',
      kicker: 'THE AMPLITUDE',
      tagline: '音量是一種語言',
      accent: '#ff8b6a',
      accentRgb: '255, 139, 106',
      planet: {
        angle: 302,
        orbit: 0.99,
        size: 62,
        c1: '#ffb29a',
        c2: '#a53d4b',
        c3: '#2b1118',
        glow: 'rgba(255, 105, 84, 0.55)',
        ring: false
      },
      desc: '電吉他、擴大機與青春的怒氣，讓搖滾成為二十世紀最響亮的語言。它從藍調與鄉村音樂嫁接而來，卻不斷長出迷幻、龐克與另類的分支。',
      quote: '「把音量開大，世界就會讓路。」',
      quoteBy: '星圖筆記',
      traits: ['電吉他', '反叛', '現場能量'],
      branches: [
        {
          tag: 'BIRTH · 誕生',
          title: '搖滾樂誕生',
          text: '查克·貝瑞把藍調的句子放進青少年的速度裡，讓吉他成為一種可以跳舞的宣言。搖滾樂在1950年代同時發明了自己的聲音與觀眾。'
        },
        {
          tag: 'PSYCHEDELIC · 迷幻',
          title: '迷幻與藍調搖滾',
          text: '吉米·罕醉克斯用回饋、wah-wah 與空間感把藍調燒成另外一種顏色。搖滾不再只是節奏，而是一趟可以被聽見的旅程。'
        },
        {
          tag: 'PUNK · 龐克',
          title: '龐克與另類',
          text: 'The Clash 用三個和弦、快速鼓點與政治標語，把搖滾重新縮小到可以在車庫裡演奏的尺寸。音量變成一種拒絕。'
        }
      ],
      artists: [
        { name: '查克·貝瑞', years: '1926—2017', work: '《Johnny B. Goode》' },
        { name: '吉米·罕醉克斯', years: '1942—1970', work: '《Purple Haze》' },
        { name: 'The Clash', years: '1976—1986', work: '《London Calling》' }
      ],
      tracks: [
        { title: 'Johnny B. Goode', composer: '查克·貝瑞', year: '1958', note: '搖滾樂誕生', src: null },
        { title: 'Purple Haze', composer: '吉米·罕醉克斯', year: '1967', note: '迷幻搖滾', src: null },
        { title: 'London Calling', composer: 'The Clash', year: '1979', note: '龐克搖滾', src: null }
      ],
      motif: {
        root: 40, scale: [0, 3, 5, 7, 10], pattern: [0, 2, 4, 3, 2, 0, 4, 2, 3, 5, 4, 2],
        tempo: 126, subdivision: 0.5, hold: 1.15, wave: 'sawtooth', noteGain: 0.04,
        filter: 1100, send: 0.18, delay: 0.2, drone: [-12, 0, 7], droneGain: 0.018, droneWave: 'triangle'
      }
    },
    {
      id: 'soul',
      idx: '04',
      name: '靈魂與放克',
      en: 'SOUL & FUNK',
      years: '約 1950 — 現在',
      yearsShort: '1950s—NOW',
      worldName: '太陽爆發現場',
      worldEn: 'SUNBURST ROOM',
      kicker: 'THE GROOVE',
      tagline: '節奏的溫度',
      accent: '#ffb347',
      accentRgb: '255, 179, 71',
      planet: {
        angle: 353,
        orbit: 1.01,
        size: 58,
        c1: '#ffe0a0',
        c2: '#d36c3d',
        c3: '#3a1712',
        glow: 'rgba(255, 171, 76, 0.54)',
        ring: true
      },
      desc: '靈魂樂把福音的熱度帶進世俗情歌，放克則把節奏本身變成一種樂器。當鼓與貝斯開始說話，身體比耳朵更早理解音樂。',
      quote: '「靈魂樂把疼痛變成節奏。」',
      quoteBy: '星圖筆記',
      traits: ['福音根源', '律動', '呼應句'],
      branches: [
        {
          tag: 'SOUL · 靈魂',
          title: '靈魂樂的黃金年代',
          text: '艾瑞莎·弗蘭克林把福音的力氣帶進節奏藍調，讓〈Respect〉成為整個世代的口號。靈魂樂把一個人的尊嚴放大成整個體育館都能聽見的聲音。'
        },
        {
          tag: 'SOUTHERN · 南方',
          title: '南方靈魂',
          text: '奧提斯·瑞丁在孟菲斯的錄音室裡保留粗糙的邊緣與即興的呼喊。南方靈魂讓教堂的熱度與舞廳的節奏停在同一口氣裡。'
        },
        {
          tag: 'FUNK · 放克',
          title: '放克革命',
          text: '詹姆斯·布朗把歌曲拆成一個又一個節奏樂句，讓「一」與「二」之間的空間成為舞台。放克讓樂器開始用身體說話。'
        }
      ],
      artists: [
        { name: '艾瑞莎·弗蘭克林', years: '1942—2018', work: '《Respect》' },
        { name: '奧提斯·瑞丁', years: '1941—1967', work: '《Try a Little Tenderness》' },
        { name: '詹姆斯·布朗', years: '1933—2006', work: '《Get Up (I Feel Like Being a) Sex Machine》' }
      ],
      tracks: [
        { title: 'Respect', composer: '艾瑞莎·弗蘭克林', year: '1967', note: '靈魂樂', src: null },
        { title: 'Try a Little Tenderness', composer: '奧提斯·瑞丁', year: '1966', note: '南方靈魂', src: null },
        { title: 'Sex Machine', fullTitle: 'Get Up (I Feel Like Being a) Sex Machine', composer: '詹姆斯·布朗', year: '1970', note: '放克', src: null }
      ],
      motif: {
        root: 48, scale: [0, 2, 3, 5, 7, 9, 10], pattern: [0, 2, 4, 2, 5, 4, 3, 2, 4, 6, 5, 3],
        tempo: 108, subdivision: 0.55, hold: 1.2, wave: 'square', noteGain: 0.04,
        filter: 1700, send: 0.22, delay: 0.24, drone: [-12, -5, 7], droneGain: 0.017, droneWave: 'triangle'
      }
    },
    {
      id: 'hiphop',
      idx: '05',
      name: '嘻哈',
      en: 'HIP-HOP',
      years: '1970s — 現在',
      yearsShort: '1970s—NOW',
      worldName: '街區廣播站',
      worldEn: 'BLOCK RADIO',
      kicker: 'THE BREAK',
      tagline: '取樣的記憶',
      accent: '#c8f56a',
      accentRgb: '200, 245, 106',
      planet: {
        angle: 44,
        orbit: 1.01,
        size: 52,
        c1: '#e4ff9e',
        c2: '#5c7b49',
        c3: '#182310',
        glow: 'rgba(200, 245, 106, 0.5)',
        ring: false
      },
      desc: '嘻哈從紐約布朗克斯的街頭派對開始：一個唱盤、一支麥克風、一段取樣。它把說唱、DJ、塗鴉與街舞綁在一起，成為一座會取樣整個人類聲音檔案的城市。',
      quote: '「街角就是第一個錄音室。」',
      quoteBy: '星圖筆記',
      traits: ['取樣', '說唱', '街頭文化'],
      branches: [
        {
          tag: 'BLOCK PARTY · 街頭',
          title: '街頭派對',
          text: 'Grandmaster Flash 在布朗克斯的街區派對裡切換唱片，把鼓的間奏拉長成一個可以跳舞的永恆。取樣讓過去的聲音重新有了現在。'
        },
        {
          tag: 'GOLDEN AGE · 黃金年代',
          title: '黃金年代',
          text: 'Wu-Tang Clan 把武術電影、五聲音階與紐約街頭壓進同一條低頻。1990年代的嘻哈把取樣變成一種檔案學與世界觀的工程。'
        },
        {
          tag: 'GLOBAL · 全球',
          title: '全球擴散',
          text: 'Kendrick Lamar 把康普頓的街道經驗寫成史詩，讓嘻哈成為全球青年共同的語言。節奏仍從街角出發，卻能抵達整個星球。'
        }
      ],
      artists: [
        { name: 'Grandmaster Flash', years: '1958—', work: '《The Message》' },
        { name: 'Wu-Tang Clan', years: '1992—', work: '《C.R.E.A.M.》' },
        { name: 'Kendrick Lamar', years: '1987—', work: '《Alright》' }
      ],
      tracks: [
        { title: 'The Message', composer: 'Grandmaster Flash & The Furious Five', year: '1982', note: '街頭嘻哈', src: null },
        { title: 'C.R.E.A.M.', composer: 'Wu-Tang Clan', year: '1993', note: '黃金年代', src: null },
        { title: 'Alright', composer: 'Kendrick Lamar', year: '2015', note: '全球嘻哈', src: null }
      ],
      motif: {
        root: 43, scale: [0, 3, 5, 7, 10], pattern: [0, 0, 3, 2, 4, 2, 0, 3, 5, 4, 2, 3],
        tempo: 92, subdivision: 0.66, hold: 1.3, wave: 'triangle', noteGain: 0.06,
        filter: 1200, send: 0.16, delay: 0.2, drone: [-12, 0, 7], droneGain: 0.024, droneWave: 'sine'
      }
    },
    {
      id: 'electronic',
      idx: '06',
      name: '電子',
      en: 'ELECTRONIC',
      years: '1970s — 現在',
      yearsShort: '1970s—NOW',
      worldName: '合成器軌道',
      worldEn: 'SYNTH ORBIT',
      kicker: 'THE SEQUENCE',
      tagline: '機器的脈搏',
      accent: '#7fe8ff',
      accentRgb: '127, 232, 255',
      planet: {
        angle: 95,
        orbit: 0.99,
        size: 60,
        c1: '#c9fbff',
        c2: '#3289a8',
        c3: '#0a2634',
        glow: 'rgba(127, 232, 255, 0.55)',
        ring: true
      },
      desc: '合成器讓音色變成可以被發明的材料。從 Kraftwerk 的公路到芝加哥浩室與底特律鐵克諾，電子音樂把舞池變成一艘航行在低頻裡的太空船。',
      quote: '「機器也可以有心跳。」',
      quoteBy: '星圖筆記',
      traits: ['合成器', '序列', '舞池'],
      branches: [
        {
          tag: 'SYNTH · 合成器',
          title: '合成器流行',
          text: 'Kraftwerk 用機器寫出公路、列車與城市的節奏，讓人聲退到機器後面。流行音樂第一次開始想像「未來」聽起來是什麼樣子。'
        },
        {
          tag: 'HOUSE / TECHNO · 舞池',
          title: '浩室與鐵克諾',
          text: '芝加哥的浩室與底特律的鐵克諾把鼓機與合成器變成一座無限延伸的舞池。四拍的低頻像心跳，也像一種集體催眠。'
        },
        {
          tag: 'IDM · 實驗',
          title: 'IDM 與氛圍',
          text: 'Aphex Twin 讓節拍碎裂、重組，讓電子音樂從舞池走向耳機與腦內。機器開始做夢，而且夢境不太規則。'
        }
      ],
      artists: [
        { name: 'Kraftwerk', years: '1970—', work: '《Autobahn》' },
        { name: 'Frankie Knuckles', years: '1955—2014', work: '《Your Love》' },
        { name: 'Aphex Twin', years: '1971—', work: '《Windowlicker》' }
      ],
      tracks: [
        { title: 'Autobahn', composer: 'Kraftwerk', year: '1974', note: '合成器流行', src: null },
        { title: 'Your Love', composer: 'Frankie Knuckles & Jamie Principle', year: '1986', note: '芝加哥浩室', src: null },
        { title: 'Windowlicker', composer: 'Aphex Twin', year: '1999', note: 'IDM', src: null }
      ],
      motif: {
        root: 45, scale: [0, 3, 5, 7, 10], pattern: [0, 2, 4, 2, 5, 4, 2, 3, 5, 4, 2, 0],
        tempo: 124, subdivision: 0.36, hold: 0.95, wave: 'sawtooth', noteGain: 0.035,
        filter: 1800, send: 0.34, delay: 0.28, drone: [-12, 0, 7], droneGain: 0.016, droneWave: 'triangle'
      }
    },
    {
      id: 'pop',
      idx: '07',
      name: '流行',
      en: 'POP',
      years: '1950s — 現在',
      yearsShort: '1950s—NOW',
      worldName: '鏡球劇場',
      worldEn: 'MIRRORBALL THEATRE',
      kicker: 'THE HOOK',
      tagline: '三分鐘的宇宙',
      accent: '#ff9fd6',
      accentRgb: '255, 159, 214',
      planet: {
        angle: 146,
        orbit: 1,
        size: 70,
        c1: '#ffd2ec',
        c2: '#b6579d',
        c3: '#35112e',
        glow: 'rgba(255, 159, 214, 0.55)',
        ring: true
      },
      desc: '流行音樂是一門關於鉤子的藝術：三分鐘內建立一個世界，讓人願意再回來一次。從唱片工業到串流演算法，它始終在個人聲音與大眾欲望之間導航。',
      quote: '「三分鐘，足以改變一個世代。」',
      quoteBy: '星圖筆記',
      traits: ['鉤子', '明星', '全球串流'],
      branches: [
        {
          tag: 'SONG FACTORY · 歌曲',
          title: '流行歌曲工廠',
          text: 'The Beatles 把錄音室變成第二個樂器，讓一首三分鐘的單曲可以同時是青春、實驗與商品。流行音樂的工業化與創造力開始並肩前進。'
        },
        {
          tag: 'SUPERSTAR · 巨星',
          title: '巨星時代',
          text: '麥可·傑克森把聲音、身體與影像合成一個完整的宇宙。音樂錄影帶讓一首歌不再只是聽覺事件，而是一個可以被全世界模仿的畫面。'
        },
        {
          tag: 'STREAMING · 串流',
          title: '串流與全球化',
          text: 'Beyoncé 把流行歌曲變成一張可以同時容納舞曲、政治與家族史的專輯。串流時代的流行音樂，既更碎片化，也更全球。'
        }
      ],
      artists: [
        { name: 'The Beatles', years: '1960—1970', work: '《I Want to Hold Your Hand》' },
        { name: '麥可·傑克森', years: '1958—2009', work: '《Billie Jean》' },
        { name: 'Beyoncé', years: '1981—', work: '《Crazy in Love》' }
      ],
      tracks: [
        { title: 'I Want to Hold Your Hand', composer: 'The Beatles', year: '1963', note: '流行歌曲工廠', src: null },
        { title: 'Billie Jean', composer: '麥可·傑克森', year: '1982', note: '巨星時代', src: null },
        { title: 'Crazy in Love', composer: 'Beyoncé feat. Jay-Z', year: '2003', note: '串流時代', src: null }
      ],
      motif: {
        root: 55, scale: [0, 2, 4, 5, 7, 9, 11], pattern: [0, 4, 2, 4, 5, 4, 2, 0, 4, 7, 5, 4],
        tempo: 116, subdivision: 0.5, hold: 1.15, wave: 'triangle', noteGain: 0.05,
        filter: 2500, send: 0.2, delay: 0.22, drone: [-12, -5, 7], droneGain: 0.012, droneWave: 'sine'
      }
    }
  ];

  /* ----------------------------------------------------------
     02. Utilities & geometry
     ---------------------------------------------------------- */

  const TAU = Math.PI * 2;
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function gaussian() {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return clamp(Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v), -2.4, 2.4);
  }

  function escapeHTML(value) {
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

  function getPopGeometry(w = window.innerWidth, h = window.innerHeight) {
    if (w < 760) {
      return {
        cx: w * 0.5,
        cy: h * 0.58,
        rx: Math.min(w * 0.38, 150),
        ry: Math.min(w * 0.38, 150)
      };
    }

    if (w < 1080 || h > w * 1.05) {
      const portrait = h > w * 1.05;
      return {
        cx: portrait ? w * 0.5 : w * 0.52,
        cy: portrait ? h * 0.63 : h * 0.64,
        rx: portrait ? Math.min(w * 0.36, 480) : Math.min(w * 0.34, 340),
        ry: portrait ? Math.min(h * 0.2, 280) : Math.min(h * 0.26, 240)
      };
    }

    return {
      cx: w * 0.63,
      cy: h * 0.535,
      rx: Math.min(w * 0.29, 470),
      ry: Math.min(h * 0.29, 280)
    };
  }

  /* ----------------------------------------------------------
     03. Ring galaxy canvas
     ---------------------------------------------------------- */

  class PopGalaxy {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1.5, 1.5);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.geo = getPopGeometry();
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.paused = false;
      this.spin = 0.3;
      this.last = performance.now();
      this.sprites = this.createSprites();
      this.particles = [];
      this.bgStars = [];
      this.nebula = [];
      this.resize();
      this.tick = this.tick.bind(this);
      requestAnimationFrame(this.tick);
    }

    createSprites() {
      const makeStar = (rgb) => {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        g.addColorStop(0, `rgba(${rgb}, 1)`);
        g.addColorStop(0.08, `rgba(${rgb}, 0.86)`);
        g.addColorStop(0.25, `rgba(${rgb}, 0.22)`);
        g.addColorStop(0.6, `rgba(${rgb}, 0.05)`);
        g.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 64, 64);
        return c;
      };

      const makeNebula = (rgb) => {
        const c = document.createElement('canvas');
        c.width = 256;
        c.height = 256;
        const ctx = c.getContext('2d');
        const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        g.addColorStop(0, `rgba(${rgb}, 0.28)`);
        g.addColorStop(0.3, `rgba(${rgb}, 0.14)`);
        g.addColorStop(0.62, `rgba(${rgb}, 0.04)`);
        g.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 256, 256);
        return c;
      };

      const core = document.createElement('canvas');
      core.width = 512;
      core.height = 512;
      const coreCtx = core.getContext('2d');
      const coreGradient = coreCtx.createRadialGradient(256, 256, 0, 256, 256, 256);
      coreGradient.addColorStop(0, 'rgba(255, 248, 226, 1)');
      coreGradient.addColorStop(0.06, 'rgba(255, 221, 175, 0.95)');
      coreGradient.addColorStop(0.17, 'rgba(255, 166, 160, 0.36)');
      coreGradient.addColorStop(0.38, 'rgba(196, 132, 255, 0.13)');
      coreGradient.addColorStop(0.68, 'rgba(104, 119, 255, 0.04)');
      coreGradient.addColorStop(1, 'rgba(70, 100, 255, 0)');
      coreCtx.fillStyle = coreGradient;
      coreCtx.fillRect(0, 0, 512, 512);

      const ringGlow = document.createElement('canvas');
      ringGlow.width = 512;
      ringGlow.height = 512;
      const ringCtx = ringGlow.getContext('2d');
      ringCtx.translate(256, 256);
      ringCtx.strokeStyle = 'rgba(255, 171, 210, 0.18)';
      ringCtx.lineWidth = 34;
      ringCtx.shadowBlur = 60;
      ringCtx.shadowColor = 'rgba(255, 157, 207, 0.3)';
      ringCtx.beginPath();
      ringCtx.arc(0, 0, 166, 0, TAU);
      ringCtx.stroke();
      ringCtx.shadowBlur = 22;
      ringCtx.strokeStyle = 'rgba(255, 209, 138, 0.22)';
      ringCtx.lineWidth = 6;
      ringCtx.beginPath();
      ringCtx.arc(0, 0, 173, 0, TAU);
      ringCtx.stroke();

      return {
        stars: {
          rose: makeStar('255, 177, 215'),
          gold: makeStar('255, 219, 169'),
          cyan: makeStar('133, 237, 255'),
          violet: makeStar('190, 171, 255'),
          white: makeStar('255, 248, 236')
        },
        nebulae: {
          rose: makeNebula('255, 129, 196'),
          cyan: makeNebula('93, 229, 255'),
          violet: makeNebula('176, 137, 255'),
          gold: makeNebula('255, 186, 105')
        },
        core,
        ringGlow
      };
    }

    resize() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1.5, 1.5);
      this.canvas.width = Math.round(this.w * this.dpr);
      this.canvas.height = Math.round(this.h * this.dpr);
      this.canvas.style.width = `${this.w}px`;
      this.canvas.style.height = `${this.h}px`;
      this.geo = getPopGeometry(this.w, this.h);
      this.radius = this.geo.rx * 1.03;
      this.squash = clamp(this.geo.ry / this.geo.rx, 0.38, 0.78);
      this.buildStars();
      this.buildParticles();
      this.buildNebulae();
    }

    buildStars() {
      const count = clamp(Math.round((this.w * this.h) / 3400), 130, 410);
      this.bgStars = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        size: Math.random() < 0.9 ? 1 : 1.6,
        alpha: 0.18 + Math.random() * 0.55,
        speed: 0.0002 + Math.random() * 0.0011,
        phase: Math.random() * TAU,
        cross: index < 12
      }));
    }

    buildParticles() {
      const count = Math.round(clamp((this.w * this.h) / 480, 1000, 3000));
      const R = this.radius;
      const stars = this.sprites.stars;
      this.particles = [];

      const push = (x, y, size, alpha, key) => {
        this.particles.push({
          x,
          y,
          size,
          alpha,
          sprite: stars[key],
          delay: Math.random() * 0.34,
          twinkle: 0.0004 + Math.random() * 0.0018,
          phase: Math.random() * TAU
        });
      };

      // Core and inner haze.
      for (let i = 0; i < count * 0.16; i += 1) {
        const r = Math.pow(Math.random(), 1.5) * R * 0.24;
        const theta = Math.random() * TAU;
        push(Math.cos(theta) * r, Math.sin(theta) * r, 0.55 + Math.random() * 1.35, 0.28 + Math.random() * 0.4, Math.random() < 0.55 ? 'gold' : 'rose');
      }

      // Two bright ring populations.
      for (let i = 0; i < count * 0.48; i += 1) {
        const r = R * (0.58 + Math.pow(Math.random(), 0.55) * 0.38) + gaussian() * R * 0.045;
        const theta = Math.random() * TAU;
        const x = Math.cos(theta) * r + Math.cos(theta + Math.PI / 2) * gaussian() * R * 0.025;
        const y = Math.sin(theta) * r + Math.sin(theta + Math.PI / 2) * gaussian() * R * 0.025;
        const key = Math.random() < 0.38 ? 'rose' : (Math.random() < 0.55 ? 'cyan' : 'violet');
        push(x, y, 0.45 + Math.random() * 1.4, 0.2 + Math.random() * 0.5, key);
      }

      // Bright ring tracers.
      for (let i = 0; i < count * 0.12; i += 1) {
        const r = R * (0.76 + gaussian() * 0.055);
        const theta = Math.random() * TAU;
        const x = Math.cos(theta) * r;
        const y = Math.sin(theta) * r;
        push(x, y, 0.9 + Math.random() * 1.7, 0.35 + Math.random() * 0.45, Math.random() < 0.5 ? 'rose' : 'gold');
      }

      // Bar and inner arms.
      for (let i = 0; i < count * 0.14; i += 1) {
        const t = Math.pow(Math.random(), 0.75);
        const r = R * (0.1 + t * 0.58);
        const arm = i % 2;
        const theta = arm * Math.PI + t * 3.2 + gaussian() * 0.22;
        push(Math.cos(theta) * r, Math.sin(theta) * r, 0.4 + Math.random() * 1.2, 0.14 + Math.random() * 0.35, Math.random() < 0.5 ? 'gold' : 'rose');
      }

      // Diffuse foreground dust.
      for (let i = 0; i < count * 0.1; i += 1) {
        const r = Math.pow(Math.random(), 0.7) * R * 1.18;
        const theta = Math.random() * TAU;
        push(Math.cos(theta) * r, Math.sin(theta) * r, 0.3 + Math.random() * 0.8, 0.05 + Math.random() * 0.14, Math.random() < 0.5 ? 'cyan' : 'violet');
      }
    }

    buildNebulae() {
      const R = this.radius;
      this.nebula = [];
      for (let i = 0; i < 9; i += 1) {
        const angle = (i / 9) * TAU + 0.24;
        const r = R * (0.68 + Math.random() * 0.22);
        const key = ['rose', 'cyan', 'violet', 'gold'][i % 4];
        this.nebula.push({
          sprite: this.sprites.nebulae[key],
          x: Math.cos(angle) * r,
          y: Math.sin(angle) * r,
          drawSize: R * (0.25 + Math.random() * 0.18),
          alpha: 0.22 + Math.random() * 0.14,
          phase: Math.random() * TAU
        });
      }
    }

    resetReveal() {
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.spin = 0.3;
    }

    skipReveal() {
      this.fastReveal = true;
    }

    tick(now) {
      const dt = Math.min(42, Math.max(0, now - this.last));
      this.last = now;

      if (!this.paused) {
        if (this.reveal < 1) {
          this.reveal = Math.min(1, this.reveal + dt / (this.fastReveal ? 360 : 3600));
        }
        if (!REDUCED_MOTION) {
          this.spin += dt * (0.00002 + (1 - this.reveal) * 0.00018);
        }
        this.draw(now);
      }

      requestAnimationFrame(this.tick);
    }

    draw(now) {
      const ctx = this.ctx;
      const { w, h, dpr } = this;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.drawBackground(now);
      this.drawGalaxy(now);
    }

    drawBackground(now) {
      if (this.reveal <= 0.001) return;
      const ctx = this.ctx;
      const p = clamp(this.reveal * 3.2, 0, 1);
      ctx.save();
      for (const star of this.bgStars) {
        const twinkle = 0.56 + 0.44 * Math.sin(now * star.speed + star.phase);
        ctx.globalAlpha = p * star.alpha * twinkle;
        ctx.fillStyle = 'rgba(225, 233, 255, 0.9)';
        if (star.cross) {
          ctx.fillRect(star.x - 3, star.y, 6, 0.6);
          ctx.fillRect(star.x, star.y - 3, 0.6, 6);
        } else {
          ctx.fillRect(star.x, star.y, star.size, star.size);
        }
      }
      ctx.restore();
    }

    drawGalaxy(now) {
      if (this.reveal <= 0.001) return;
      const ctx = this.ctx;
      const reveal = this.reveal;
      const { cx, cy } = this.geo;

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(cx, cy);
      ctx.scale(1, this.squash);
      ctx.rotate(this.spin);

      // Soft outer ring glow.
      const ringSize = this.radius * 2.5;
      ctx.globalAlpha = reveal * 0.7;
      ctx.drawImage(this.sprites.ringGlow, -ringSize / 2, -ringSize / 2, ringSize, ringSize);

      // Nebula puffs along the ring.
      for (const puff of this.nebula) {
        ctx.globalAlpha = reveal * puff.alpha * (0.76 + 0.24 * Math.sin(now * 0.0001 + puff.phase));
        ctx.drawImage(puff.sprite, puff.x - puff.drawSize / 2, puff.y - puff.drawSize / 2, puff.drawSize, puff.drawSize);
      }

      // Core.
      const coreSize = this.radius * 0.52;
      ctx.globalAlpha = reveal * 0.9;
      ctx.drawImage(this.sprites.core, -coreSize, -coreSize, coreSize * 2, coreSize * 2);

      // Star points.
      for (const star of this.particles) {
        const local = clamp((reveal - star.delay) / 0.6, 0, 1);
        if (local <= 0) continue;
        const eased = 1 - Math.pow(1 - local, 3);
        const stretch = 1 + (1 - eased) * 0.22;
        const twinkle = 0.65 + 0.35 * Math.sin(now * star.twinkle + star.phase);
        const alpha = star.alpha * eased * twinkle;
        if (alpha < 0.008) continue;
        const d = star.size * 8 * (0.62 + 0.38 * eased);
        ctx.globalAlpha = Math.min(0.92, alpha);
        ctx.drawImage(star.sprite, star.x * stretch - d / 2, star.y * stretch - d / 2, d, d);
      }

      ctx.restore();
    }
  }

  /* ----------------------------------------------------------
     04. Planet map
     ---------------------------------------------------------- */

  const planetsEl = $('#popPlanets');
  const routeEl = $('#popRoute');
  const coreEl = $('#popCore');
  const stageEl = $('#pop-galaxy');
  const topbarEl = $('#popTopbar');
  const introEl = $('#popIntro');
  const introBar = $('#popIntroBar');
  const introStatus = $('#popIntroStatus');
  const skipBtn = $('#popSkipBtn');
  const replayBtn = $('#popReplayBtn');

  let galaxy = null;
  let planetElements = [];
  let planetPoints = [];

  function createPlanets() {
    planetsEl.innerHTML = GENRES.map((genre, index) => {
      const planet = genre.planet;
      const ring = planet.ring ? '<span class="planet__ring" aria-hidden="true"></span>' : '';
      return `
        <button
          class="planet planet--${genre.id}"
          type="button"
          data-genre="${genre.id}"
          data-index="${index}"
          aria-label="進入${escapeHTML(genre.name)}的聲音艙「${escapeHTML(genre.worldName)}」，${escapeHTML(genre.years)}"
          style="
            --size:${planet.size}px;
            --c1:${planet.c1};
            --c2:${planet.c2};
            --c3:${planet.c3};
            --glow:${planet.glow};
            --enter-delay:${0.1 + index * 0.08}s;
            --float-delay:${-index * 0.8}s;
            --float-time:${7.4 + (index % 3) * 1.3}s;
          "
        >
          <span class="planet__visual" aria-hidden="true">
            <span class="planet__float">
              <span class="planet__halo"></span>
              <span class="planet__body">
                <span class="planet__surface"></span>
                <span class="planet__motif"></span>
              </span>
              ${ring}
            </span>
            <span class="planet__satellite"></span>
          </span>
          <span class="planet__meta">
            <span class="planet__num">${genre.idx}</span>
            <span class="planet__name">${escapeHTML(genre.name)}</span>
            <span class="planet__years">${escapeHTML(genre.yearsShort)}</span>
            <span class="planet__world">${escapeHTML(genre.worldName)}</span>
          </span>
        </button>
      `;
    }).join('');

    planetElements = $$('.planet', planetsEl);
    planetElements.forEach((element) => {
      element.addEventListener('click', () => {
        const genre = GENRES.find((item) => item.id === element.dataset.genre);
        if (genre) openWorld(genre.id, element);
      });
    });
  }

  function smoothClosedPath(points) {
    if (!points.length) return '';
    if (points.length < 3) return '';
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 0; i < points.length; i += 1) {
      const p0 = points[(i - 1 + points.length) % points.length];
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      const p3 = points[(i + 2) % points.length];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return `${d} Z`;
  }

  function layoutPlanets() {
    const geo = getPopGeometry();
    planetPoints = [];

    planetElements.forEach((element, index) => {
      const genre = GENRES[index];
      const angle = (genre.planet.angle * Math.PI) / 180;
      const x = geo.cx + Math.cos(angle) * geo.rx * genre.planet.orbit;
      const y = geo.cy + Math.sin(angle) * geo.ry * genre.planet.orbit;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      planetPoints.push({ x, y });
    });

    coreEl.style.left = `${geo.cx}px`;
    coreEl.style.top = `${geo.cy}px`;

    routeEl.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    routeEl.setAttribute('width', window.innerWidth);
    routeEl.setAttribute('height', window.innerHeight);
    const path = smoothClosedPath(planetPoints);
    routeEl.innerHTML = `
      <path class="pop-route__soft" d="${path}"></path>
      <path class="pop-route__line" d="${path}"></path>
    `;
  }

  /* ----------------------------------------------------------
     05. Compact audio engine
     ---------------------------------------------------------- */

  class PopAudio {
    constructor() {
      this.ctx = null;
      this.master = null;
      this.delay = null;
      this.bus = null;
      this.timer = null;
      this.playing = false;
      this.current = null;
      this.supported = Boolean(window.AudioContext || window.webkitAudioContext);
    }

    ensure() {
      if (this.ctx) return true;
      if (!this.supported) return false;
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        const ctx = new AC();
        const master = ctx.createGain();
        const comp = ctx.createDynamicsCompressor();
        const delay = ctx.createDelay(1.2);
        const feedback = ctx.createGain();
        const wet = ctx.createGain();

        master.gain.value = 0.55;
        comp.threshold.value = -20;
        comp.ratio.value = 8;
        comp.attack.value = 0.004;
        comp.release.value = 0.24;
        delay.delayTime.value = 0.26;
        feedback.gain.value = 0.28;
        wet.gain.value = 0.24;

        master.connect(comp);
        comp.connect(ctx.destination);
        delay.connect(feedback);
        feedback.connect(delay);
        delay.connect(wet);
        wet.connect(comp);

        this.ctx = ctx;
        this.master = master;
        this.delay = delay;
        return true;
      } catch (error) {
        this.supported = false;
        return false;
      }
    }

    play(motif) {
      if (!this.ensure()) return false;
      this.stop();
      this.playing = true;
      this.current = motif;
      if (this.delay) this.delay.delayTime.setTargetAtTime(motif.delay || 0.26, this.ctx.currentTime, 0.08);

      const start = () => {
        if (this.playing) this.scheduleLoop();
      };
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().then(start).catch(() => { this.playing = false; });
      } else {
        start();
      }
      return true;
    }

    stop() {
      this.playing = false;
      this.current = null;
      if (this.timer) {
        window.clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.bus && this.ctx) {
        const old = this.bus;
        this.bus = null;
        try {
          const now = this.ctx.currentTime;
          old.gain.cancelScheduledValues(now);
          old.gain.setTargetAtTime(0.0001, now, 0.075);
        } catch (error) { /* noop */ }
        window.setTimeout(() => {
          try { old.disconnect(); } catch (error) { /* noop */ }
        }, 500);
      }
    }

    frequency(midi) {
      return 440 * Math.pow(2, (midi - 69) / 12);
    }

    scheduleLoop() {
      if (!this.playing || !this.ctx || !this.current) return;
      const ctx = this.ctx;
      const motif = this.current;
      const step = (60 / motif.tempo) * motif.subdivision;
      const total = step * motif.pattern.length;
      const start = ctx.currentTime + 0.1;
      const bus = ctx.createGain();
      bus.gain.setValueAtTime(1, start);
      bus.connect(this.master);
      this.bus = bus;

      if (motif.drone) {
        motif.drone.forEach((semi, index) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();
          const level = (motif.droneGain || 0.018) * (index === 0 ? 1 : 0.7);
          osc.type = motif.droneWave || 'sine';
          osc.frequency.value = this.frequency(motif.root + semi);
          filter.type = 'lowpass';
          filter.frequency.value = 720;
          gain.gain.setValueAtTime(0.0001, start);
          gain.gain.exponentialRampToValueAtTime(level, start + 1.1);
          gain.gain.setValueAtTime(level, start + total - 0.8);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + total + 0.4);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(bus);
          osc.start(start);
          osc.stop(start + total + 0.5);
        });
      }

      motif.pattern.forEach((degree, index) => {
        const scale = motif.scale;
        const midi = motif.root + scale[((degree % scale.length) + scale.length) % scale.length];
        const duration = Math.max(0.2, step * motif.hold);
        const velocity = motif.noteGain * (0.84 + Math.random() * 0.24);
        const noteStart = start + index * step;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const send = ctx.createGain();
        osc.type = motif.wave || 'triangle';
        osc.frequency.value = this.frequency(midi);
        filter.type = 'lowpass';
        filter.frequency.value = motif.filter || 1800;
        filter.Q.value = 0.55;
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(velocity, noteStart + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);
        send.gain.value = motif.send || 0.2;
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(bus);
        gain.connect(send);
        send.connect(this.delay);
        osc.start(noteStart);
        osc.stop(noteStart + duration + 0.08);
      });

      window.setTimeout(() => {
        if (bus !== this.bus) {
          try { bus.disconnect(); } catch (error) { /* noop */ }
        }
      }, (total + 2) * 1000);

      this.timer = window.setTimeout(() => this.scheduleLoop(), Math.max(900, total * 1000 - 90));
    }
  }

  const popAudio = new PopAudio();

  /* ----------------------------------------------------------
     06. World overlay
     ---------------------------------------------------------- */

  const worldView = $('#worldView');
  const worldStage = $('#worldStage');
  const worldBack = $('#worldBack');
  const worldPrev = $('#worldPrev');
  const worldNext = $('#worldNext');
  const worldPrevName = $('#worldPrevName');
  const worldNextName = $('#worldNextName');
  const worldIndex = $('#worldIndex');
  const worldEn = $('#worldEn');

  let worldOpen = false;
  let currentWorld = 0;
  let pendingWorld = null;
  let lastTrigger = null;
  let closingTimer = null;
  let switchingTimer = null;
  let audioPlaying = false;
  let activeTrack = null;
  let worldAudioElement = null;

  function worldHeading(genre) {
    return `
      <header class="w-head pop-head">
        <p class="w-kicker"><span class="w-kicker__line" aria-hidden="true"></span>${escapeHTML(genre.kicker)}</p>
        <h1 class="w-title" id="worldTitle">
          <span class="w-title__name">${escapeHTML(genre.name)}</span>
          <em class="w-title__tag">${escapeHTML(genre.tagline)}</em>
        </h1>
        <p class="w-years">${escapeHTML(genre.years)}<span class="w-room">${escapeHTML(genre.worldName)}</span></p>
      </header>
    `;
  }

  function worldBranches(genre) {
    return `<div class="w-branches pop-branches" role="group" aria-label="三條聲軌">
      ${genre.branches.map((branch, index) => {
        const track = genre.tracks[index];
        return `<button class="w-branch" type="button" data-world-branch="${index}" aria-pressed="${index === 0}">
          <span class="w-branch__num">0${index + 1}</span>
          <span class="w-branch__copy">
            <span class="w-branch__name">${escapeHTML(branch.title)}</span>
            <span class="w-branch__tag">${escapeHTML(branch.tag)}</span>
            <span class="pop-branch__track">${escapeHTML(track.title)} · ${escapeHTML(track.year)}</span>
          </span>
          <span class="w-branch__arrow" aria-hidden="true">↗</span>
        </button>`;
      }).join('')}
    </div>`;
  }

  function worldLore(genre) {
    const branch = genre.branches[0];
    return `<div class="w-lore pop-lore" data-world-lore aria-live="polite">
      <p class="w-lore__tag" data-lore-tag>${escapeHTML(branch.tag)}</p>
      <h2 class="w-lore__title" data-lore-title>${escapeHTML(branch.title)}</h2>
      <p class="w-lore__text" data-lore-text>${escapeHTML(branch.text)}</p>
    </div>`;
  }

  function worldPeople(genre) {
    return `<div class="w-people-wrap pop-people">
      <p class="w-label">名字 · ARTISTS</p>
      <ol class="w-people">
        ${genre.artists.map((artist, index) => `
          <li class="w-person">
            <span class="w-person__num">0${index + 1}</span>
            <span class="w-person__name">${escapeHTML(artist.name)}<small>${escapeHTML(artist.work)}</small></span>
            <span class="w-person__dates">${escapeHTML(artist.years)}</span>
          </li>
        `).join('')}
      </ol>
    </div>`;
  }

  function worldAudio(genre) {
    const track = genre.tracks[0];
    const meta = `${track.composer} · ${track.year} · ${track.src ? '歷史錄音' : '聲音示意'}`;
    return `<div class="w-audio pop-audio" data-world-audio>
      <button class="w-audio__btn" type="button" data-world-play aria-label="播放曲目：${escapeHTML(track.title)}" aria-pressed="false">
        <span class="w-audio__icon" aria-hidden="true"><i></i></span>
      </button>
      <div class="w-audio__text">
        <span class="w-audio__title" data-track-title title="${escapeHTML(track.fullTitle || track.title)}">${escapeHTML(track.title)}</span>
        <span class="w-audio__meta" data-track-meta title="${escapeHTML(meta)}">${escapeHTML(meta)}</span>
      </div>
      <div class="w-eq" aria-hidden="true">${'<i></i>'.repeat(14)}</div>
      <span class="w-audio__status" data-audio-status>PLAY</span>
    </div>`;
  }

  function worldVinyl(genre) {
    const track = genre.tracks[0];
    return `<div class="pop-vinyl-wrap" aria-hidden="true">
      <div class="pop-vinyl">
        <span class="pop-vinyl__grooves"></span>
        <span class="pop-vinyl__label">
          <small>SIDE A · ${genre.idx}</small>
          <b data-vinyl-genre>${escapeHTML(genre.en)}</b>
          <span data-vinyl-track>${escapeHTML(track.title)}</span>
          <em data-vinyl-year>${escapeHTML(track.year)}</em>
        </span>
      </div>
      <span class="pop-tonearm"></span>
    </div>
    <p class="pop-vinyl-caption">POP COSMOS · 33⅓ RPM · SIDE A</p>`;
  }

  function worldTemplate(genre) {
    return `<div class="ws ws-pop">
      <div class="pop-emblem" aria-hidden="true"></div>
      <div class="pop-layout">
        <div class="pop-main">
          ${worldHeading(genre)}
          <p class="w-desc">${escapeHTML(genre.desc)}</p>
          <blockquote class="w-quote"><span>${escapeHTML(genre.quote)}</span><cite>— ${escapeHTML(genre.quoteBy)}</cite></blockquote>
          <ul class="w-traits" aria-label="類型特徵">${genre.traits.map((trait) => `<li>${escapeHTML(trait)}</li>`).join('')}</ul>
          <div class="pop-tracks">
            <p class="w-label">三條聲軌 · SIDE A</p>
            ${worldBranches(genre)}
          </div>
          ${worldLore(genre)}
        </div>
        <aside class="pop-side">
          ${worldVinyl(genre)}
          ${worldAudio(genre)}
          ${worldPeople(genre)}
        </aside>
      </div>
    </div>`;
  }

  function setAudioPlaying(playing) {
    audioPlaying = playing;
    const wrapper = $('[data-world-audio]', worldStage);
    const button = $('[data-world-play]', worldStage);
    const status = $('[data-audio-status]', worldStage);
    if (!wrapper || !button || !status) return;
    const title = $('[data-track-title]', worldStage)?.textContent?.trim() || '曲目';
    wrapper.classList.toggle('is-playing', playing);
    worldView.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? `暫停 ${title}` : `播放曲目：${title}`);
    status.textContent = playing ? 'PAUSE' : 'PLAY';
  }

  function stopWorldAudio() {
    if (worldAudioElement) {
      try {
        worldAudioElement.pause();
        worldAudioElement.currentTime = 0;
        worldAudioElement.src = '';
      } catch (error) { /* noop */ }
      worldAudioElement = null;
    }
    popAudio.stop();
    if (audioPlaying) setAudioPlaying(false);
  }

  function playActive(genre) {
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
            stopWorldAudio();
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
    return popAudio.play(genre.motif);
  }

  function updateNav(index) {
    const total = GENRES.length;
    const prev = GENRES[(index - 1 + total) % total];
    const next = GENRES[(index + 1) % total];
    worldPrevName.textContent = prev.name;
    worldNextName.textContent = next.name;
    worldPrev.setAttribute('aria-label', `上一個類型：${prev.name}`);
    worldNext.setAttribute('aria-label', `下一個類型：${next.name}`);
  }

  function bindWorld(genre) {
    setAudioPlaying(false);
    activeTrack = null;
    const branchButtons = $$('[data-world-branch]', worldStage);
    const loreTag = $('[data-lore-tag]', worldStage);
    const loreTitle = $('[data-lore-title]', worldStage);
    const loreText = $('[data-lore-text]', worldStage);
    const loreBox = $('[data-world-lore]', worldStage);

    const selectBranch = (branchIndex, animate = true) => {
      const branch = genre.branches[branchIndex];
      if (!branch) return;
      if (audioPlaying) stopWorldAudio();

      branchButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === branchIndex;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      worldView.dataset.branch = String(branchIndex);
      worldView.style.setProperty('--branch-color', genre.accent);
      worldView.style.setProperty('--branch-rgb', genre.accentRgb);
      worldView.style.setProperty('--branch-index', String(branchIndex));

      if (loreTag) loreTag.textContent = branch.tag;
      if (loreTitle) loreTitle.textContent = branch.title;
      if (loreText) loreText.textContent = branch.text;

      const track = genre.tracks[branchIndex];
      if (track) {
        activeTrack = track;
        const meta = `${track.composer} · ${track.year} · ${track.src ? '歷史錄音' : '聲音示意'}`;
        const title = $('[data-track-title]', worldStage);
        const metaEl = $('[data-track-meta]', worldStage);
        if (title) {
          title.textContent = track.title;
          title.title = track.fullTitle || track.title;
        }
        if (metaEl) {
          metaEl.textContent = meta;
          metaEl.title = meta;
        }
        const vinylTrack = $('[data-vinyl-track]', worldStage);
        const vinylYear = $('[data-vinyl-year]', worldStage);
        if (vinylTrack) vinylTrack.textContent = track.title;
        if (vinylYear) vinylYear.textContent = track.year;
        worldView.dataset.track = track.title;
        const playButton = $('[data-world-play]', worldStage);
        if (playButton) {
          playButton.setAttribute('aria-label', `播放曲目：${track.fullTitle || track.title}${track.src ? '' : '（聲音示意）'}`);
          playButton.title = track.note ? `${track.fullTitle || track.title} — ${track.note}` : (track.fullTitle || track.title);
        }
      }

      if (loreBox && animate && !REDUCED_MOTION) {
        loreBox.classList.remove('is-swapping');
        void loreBox.offsetWidth;
        loreBox.classList.add('is-swapping');
        window.setTimeout(() => loreBox.classList.remove('is-swapping'), 140);
      }
    };

    branchButtons.forEach((button) => {
      button.addEventListener('click', () => selectBranch(Number(button.dataset.worldBranch)));
    });

    worldStage.onkeydown = (event) => {
      const current = event.target.closest('[data-world-branch]');
      if (!current) return;
      const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const currentIndex = Number(current.dataset.worldBranch);
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
      if (!popAudio.supported) {
        playButton.disabled = true;
        const status = $('[data-audio-status]', worldStage);
        if (status) status.textContent = 'N/A';
      } else {
        playButton.addEventListener('click', () => {
          if (audioPlaying) {
            stopWorldAudio();
            return;
          }
          const started = playActive(genre);
          if (started) setAudioPlaying(true);
          else {
            const status = $('[data-audio-status]', worldStage);
            if (status) status.textContent = 'ERROR';
          }
        });
      }
    }
  }

  function renderWorld(index) {
    const genre = GENRES[index];
    if (!genre) return;
    stopWorldAudio();
    currentWorld = index;
    worldView.dataset.world = genre.id;
    worldView.style.setProperty('--genre-accent', genre.accent);
    worldView.style.setProperty('--genre-accent-rgb', genre.accentRgb);
    worldIndex.textContent = genre.idx;
    worldEn.textContent = genre.en;
    worldView.style.setProperty('--origin-x', worldView.style.getPropertyValue('--origin-x') || '50vw');
    worldStage.innerHTML = worldTemplate(genre);
    bindWorld(genre);
    updateNav(index);
    worldView.scrollTop = 0;
    document.title = `${genre.name} · 流行宇宙`;
    const planet = document.querySelector(`.planet[data-genre="${genre.id}"]`);
    if (planet) lastTrigger = planet;
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

  function openWorld(genreId, trigger) {
    const index = GENRES.findIndex((genre) => genre.id === genreId);
    if (index < 0) return;
    if (worldOpen) {
      switchWorld(index, true);
      return;
    }

    window.clearTimeout(closingTimer);
    lastTrigger = trigger || null;
    const rect = trigger ? trigger.getBoundingClientRect() : null;
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    worldView.style.setProperty('--origin-x', `${originX}px`);
    worldView.style.setProperty('--origin-y', `${originY}px`);

    renderWorld(index);
    worldView.removeAttribute('inert');
    worldView.setAttribute('aria-hidden', 'false');
    stageEl.setAttribute('inert', '');
    stageEl.setAttribute('aria-hidden', 'true');
    topbarEl.setAttribute('inert', '');
    topbarEl.setAttribute('aria-hidden', 'true');

    worldOpen = true;
    galaxy.paused = true;
    document.body.classList.add('is-pop-world');
    requestAnimationFrame(() => worldView.classList.add('is-open'));
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
    window.clearTimeout(switchingTimer);
    worldView.classList.remove('is-open');
    worldView.setAttribute('inert', '');
    document.body.classList.remove('is-pop-world');
    galaxy.paused = document.hidden;

    stageEl.removeAttribute('inert');
    stageEl.removeAttribute('aria-hidden');
    topbarEl.removeAttribute('inert');
    topbarEl.removeAttribute('aria-hidden');

    document.title = '流行宇宙 · Pop Cosmos';
    window.clearTimeout(closingTimer);
    closingTimer = window.setTimeout(() => {
      if (!worldOpen) worldView.setAttribute('aria-hidden', 'true');
    }, 980);

    if (lastTrigger && document.contains(lastTrigger)) {
      window.setTimeout(() => {
        if (!worldOpen) lastTrigger.focus({ preventScroll: true });
      }, REDUCED_MOTION ? 60 : 520);
    }
  }

  function switchWorld(index, immediate = false) {
    const total = GENRES.length;
    const normalized = ((index % total) + total) % total;
    if (normalized === currentWorld && pendingWorld === null && !immediate) return;
    if (!worldOpen) {
      openWorld(GENRES[normalized].id, null);
      return;
    }
    pendingWorld = normalized;
    stopWorldAudio();
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
    switchWorld((pendingWorld ?? currentWorld) + 1);
  }

  function previousWorld() {
    switchWorld((pendingWorld ?? currentWorld) - 1);
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
    if (galaxy) galaxy.paused = document.hidden || worldOpen;
    if (document.hidden) stopWorldAudio();
  });

  /* ----------------------------------------------------------
     07. Intro sequence
     ---------------------------------------------------------- */

  const introTimers = [];
  let introProgressTimer = null;
  let introRunning = false;
  let introStart = 0;

  function clearIntroTimers() {
    while (introTimers.length) window.clearTimeout(introTimers.pop());
    if (introProgressTimer) {
      window.clearInterval(introProgressTimer);
      introProgressTimer = null;
    }
  }

  function setIntroStatus(text) {
    introStatus.innerHTML = `<span class="intro__pulse" aria-hidden="true"></span>${escapeHTML(text)}`;
  }

  function startIntro(options = {}) {
    const instant = Boolean(options.instant) || REDUCED_MOTION;
    clearIntroTimers();
    introRunning = true;
    introStart = performance.now();
    introEl.setAttribute('aria-hidden', 'false');
    introEl.style.visibility = 'visible';

    document.body.classList.remove('is-ready');
    document.body.classList.add('is-intro');
    stageEl.setAttribute('inert', '');
    stageEl.setAttribute('aria-hidden', 'true');
    topbarEl.setAttribute('inert', '');
    topbarEl.setAttribute('aria-hidden', 'true');
    galaxy.paused = document.hidden;

    introEl.classList.remove('is-leaving');
    introEl.classList.remove('is-running');
    void introEl.offsetWidth;
    introEl.classList.add('is-running');
    introBar.style.width = '0%';
    setIntroStatus('正在校準流行軌道');
    skipBtn.style.visibility = 'visible';

    introTimers.push(window.setTimeout(() => { if (introRunning) setIntroStatus('正在接收無線電波'); }, 1200));
    introTimers.push(window.setTimeout(() => { if (introRunning) setIntroStatus('環形星圖已成形'); }, 2900));

    if (instant) {
      galaxy.skipReveal();
      introBar.style.width = '100%';
      finishIntro({ instant: true, focusStage: false });
      return;
    }

    introProgressTimer = window.setInterval(() => {
      const progress = clamp((performance.now() - introStart) / 3500, 0, 1);
      introBar.style.width = `${(1 - Math.pow(1 - progress, 3)) * 100}%`;
      if (progress >= 1) {
        window.clearInterval(introProgressTimer);
        introProgressTimer = null;
      }
    }, 45);

    introTimers.push(window.setTimeout(() => finishIntro({ focusStage: false }), 3750));
  }

  function finishIntro(options = {}) {
    if (!introRunning) return;
    introRunning = false;
    clearIntroTimers();
    introBar.style.width = '100%';
    introEl.classList.add('is-leaving');
    introEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-intro');
    document.body.classList.add('is-ready');

    stageEl.removeAttribute('inert');
    stageEl.removeAttribute('aria-hidden');
    topbarEl.removeAttribute('inert');
    topbarEl.removeAttribute('aria-hidden');
    galaxy.paused = document.hidden;
    if (options.instant) galaxy.skipReveal();

    window.setTimeout(() => {
      if (document.body.classList.contains('is-ready')) introEl.style.visibility = 'hidden';
    }, 1000);

    if (options.focusStage) {
      window.setTimeout(() => {
        const firstPlanet = planetElements[0];
        if (firstPlanet) firstPlanet.focus({ preventScroll: true });
      }, REDUCED_MOTION ? 20 : 450);
    }
  }

  skipBtn.addEventListener('click', () => {
    galaxy.skipReveal();
    finishIntro({ instant: true, focusStage: true });
  });

  replayBtn.addEventListener('click', () => {
    if (worldOpen) closeWorld();
    stopWorldAudio();
    galaxy.resetReveal();
    startIntro();
  });

  window.addEventListener('resize', () => {
    if (worldOpen || !galaxy) return;
    galaxy.resize();
    layoutPlanets();
  });

  /* ----------------------------------------------------------
     08. Boot
     ---------------------------------------------------------- */

  const canvas = $('#popCanvas');
  galaxy = new PopGalaxy(canvas);

  createPlanets();
  layoutPlanets();

  if (REDUCED_MOTION) {
    document.body.classList.remove('is-intro');
    document.body.classList.add('is-ready');
    introEl.classList.add('is-leaving');
    introEl.setAttribute('aria-hidden', 'true');
    introEl.style.visibility = 'hidden';
    galaxy.reveal = 1;
  } else {
    startIntro();
  }

  window.PopCosmos = {
    genres: GENRES,
    galaxy,
    openWorld
  };
})();
