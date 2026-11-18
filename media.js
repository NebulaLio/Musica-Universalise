/* ============================================================
   MUSICA UNIVERSALIS · UNIVERSE III
   MEDIA COSMOS — a signal network of seven music media.
   ============================================================ */

(() => {
  'use strict';

  /* ----------------------------------------------------------
     01. Media data
     ---------------------------------------------------------- */

  const MEDIA = [
    {
      id: 'vinyl',
      idx: '01',
      name: '黑膠',
      en: 'VINYL',
      years: '1877 — 現在',
      yearsShort: '1877—NOW',
      worldName: '唱片壓製室',
      worldEn: 'THE PRESSING ROOM',
      kicker: 'THE ANALOG PRESS',
      tagline: '聲音的實體記憶',
      accent: '#e6c68f',
      accentRgb: '230, 198, 143',
      planet: {
        angle: 198,
        orbit: 0.98,
        size: 58,
        c1: '#f4d8a4',
        c2: '#8a5841',
        c3: '#241513',
        glow: 'rgba(230, 198, 143, 0.54)',
        ring: true
      },
      desc: '黑膠把看不見的空氣振動刻進一圈圈實體溝槽。從 78 轉的殼質唱片到 33⅓ 轉的 LP，再到 DJ 手中的 12 吋單曲，媒介本身參與了音樂的長度、封面與聆聽儀式。',
      quote: '「唱片不是容器，而是音樂的第二個身體。」',
      quoteBy: '星圖筆記',
      traits: ['實體溝槽', 'A／B 面', '封面藝術'],
      branches: [
        {
          tag: '78 RPM · 78轉',
          title: '78 轉唱片',
          text: '早期唱片以殼質製成，一面通常只有三到五分鐘。這個長度反過來塑造了流行歌曲的結構：前奏、主歌、副歌，必須在唱針走到盡頭前完成。'
        },
        {
          tag: 'LP · 33⅓',
          title: '33⅓ 轉專輯',
          text: '1948 年哥倫比亞唱片推出長時間播放的 LP，讓一張唱片可以容納整部交響曲或一整組流行歌曲。專輯開始成為一個可以被完整聆聽的作品。'
        },
        {
          tag: '12" · 12吋單曲',
          title: '12 吋單曲與 DJ',
          text: '1970 年代的舞池把 12 吋單曲的低頻與延長段落推到極限。DJ 用兩張相同的唱片接力，讓一首歌在唱針與唱針之間無限延長。'
        }
      ],
      artists: [
        { name: '貝西·史密斯', years: '1894—1937', work: '《St. Louis Blues》' },
        { name: '約翰·柯川', years: '1926—1967', work: '《A Love Supreme》' },
        { name: 'Chic', years: '1977—', work: '《Good Times》' }
      ],
      tracks: [
        { title: 'St. Louis Blues', composer: '貝西·史密斯', year: '1925', note: '78 轉唱片', src: null },
        { title: 'A Love Supreme, Pt. I', fullTitle: 'A Love Supreme, Pt. I — Acknowledgement', composer: '約翰·柯川', year: '1965', note: '33⅓ 轉 LP', src: null },
        { title: 'Good Times', composer: 'Chic', year: '1979', note: '12 吋單曲', src: null }
      ],
      motif: {
        root: 45, scale: [0, 3, 5, 6, 7, 10], pattern: [0, 2, 4, 3, 2, 0, 4, 2, 5, 4, 3, 2],
        tempo: 88, subdivision: 0.8, hold: 1.3, wave: 'triangle', noteGain: 0.052,
        filter: 1700, send: 0.28, delay: 0.3, drone: [-12, -5, 7], droneGain: 0.02, droneWave: 'sine'
      }
    },
    {
      id: 'radio',
      idx: '02',
      name: '廣播',
      en: 'RADIO',
      years: '1920s — 現在',
      yearsShort: '1920s—NOW',
      worldName: '深夜電台',
      worldEn: 'NIGHT RADIO',
      kicker: 'THE WIRELESS',
      tagline: '看不見的聲波',
      accent: '#7fe3d2',
      accentRgb: '127, 227, 210',
      planet: {
        angle: 250,
        orbit: 0.88,
        size: 62,
        c1: '#c8fff2',
        c2: '#2c8b88',
        c3: '#0b2428',
        glow: 'rgba(127, 227, 210, 0.54)',
        ring: true
      },
      desc: '廣播讓音樂第一次可以同時抵達無數個房間。電台主持人、排行榜與夜間節目把歌曲編排成一條看不見的時間線，聽眾在不同的城市裡共享同一個當下。',
      quote: '「看不見的電波，讓一個房間變成整個城市。」',
      quoteBy: '星圖筆記',
      traits: ['無線電波', '即時播出', '排行榜'],
      branches: [
        {
          tag: 'HOME · 家庭',
          title: '家庭收音機',
          text: '1920 年代的收音機是客廳裡的新家具。家人圍著同一個喇叭，收聽新聞、廣播劇與舞曲；音樂第一次成為可以「準時抵達」的日常事件。'
        },
        {
          tag: 'PIRATE · 海盜',
          title: '海盜電台',
          text: '1960 年代，海盜電台從公海上的船隻向英國播音，播放官方電台不願播放的流行樂。年輕人第一次可以選擇自己的頻率。'
        },
        {
          tag: 'NIGHT · 夜間',
          title: '夜間 FM 與排行榜',
          text: '1970 年代的 FM 夜間節目讓專輯、長曲與 DJ 的個人品味進入廣播。排行榜則把聆聽變成一個全國同步的儀式。'
        }
      ],
      artists: [
        { name: '海灘男孩', years: '1961—', work: '《Good Vibrations》' },
        { name: '奇想樂團', years: '1963—1996', work: '《Waterloo Sunset》' },
        { name: '皇后樂團', years: '1970—', work: '《Bohemian Rhapsody》' }
      ],
      tracks: [
        { title: 'Good Vibrations', composer: '海灘男孩', year: '1966', note: '家庭收音機', src: null },
        { title: 'Waterloo Sunset', composer: '奇想樂團', year: '1967', note: '海盜電台', src: null },
        { title: 'Bohemian Rhapsody', composer: '皇后樂團', year: '1975', note: '夜間 FM', src: null }
      ],
      motif: {
        root: 52, scale: [0, 2, 4, 5, 7, 9, 11], pattern: [0, 4, 2, 4, 5, 4, 2, 0, 4, 7, 5, 4],
        tempo: 118, subdivision: 0.46, hold: 1.1, wave: 'triangle', noteGain: 0.05,
        filter: 2300, send: 0.2, delay: 0.22, drone: [-12, -5, 7], droneGain: 0.014, droneWave: 'sine'
      }
    },
    {
      id: 'cassette',
      idx: '03',
      name: '卡帶',
      en: 'CASSETTE',
      years: '1963 — 現在',
      yearsShort: '1963—NOW',
      worldName: '翻錄工作室',
      worldEn: 'THE DUB ROOM',
      kicker: 'THE DUB DECK',
      tagline: '可以重錄的青春',
      accent: '#ffa76a',
      accentRgb: '255, 167, 106',
      planet: {
        angle: 302,
        orbit: 1.02,
        size: 54,
        c1: '#ffd3a8',
        c2: '#b45d3f',
        c3: '#2a1712',
        glow: 'rgba(255, 167, 106, 0.52)',
        ring: false
      },
      desc: '卡帶把錄音從專業錄音室帶進每個人的房間。按下錄音鍵，收音機裡的歌、朋友的談話與自己的聲音就可以被疊在同一捲磁帶上；音樂第一次變成可以重寫的記憶。',
      quote: '「一捲卡帶，就是一份可以重寫的記憶。」',
      quoteBy: '星圖筆記',
      traits: ['可重錄', '隨身聆聽', 'Mixtape'],
      branches: [
        {
          tag: 'TAPE · 卡帶',
          title: '卡式錄音帶',
          text: '1963 年飛利浦推出卡式錄音帶，把錄音從 reel-to-reel 盤帶解放成一個可以放進口袋的盒子。翻錄、交換與收藏成為新的音樂社交。'
        },
        {
          tag: 'WALKMAN · 隨身聽',
          title: '隨身聽',
          text: '1979 年 Sony Walkman 讓音樂第一次成為一個人的移動背景。戴上耳機，城市變成自己的配樂，公共空間裡也可以有一座私人的房間。'
        },
        {
          tag: 'MIXTAPE · 混音帶',
          title: 'Mixtape',
          text: '把歌一首一首錄進空白卡帶，是一門關於順序、停頓與心意的藝術。Mixtape 不是播放清單，而是一封用時間長度寫成的信。'
        }
      ],
      artists: [
        { name: '佛利伍麥克', years: '1967—', work: '《Dreams》' },
        { name: '舞韻合唱團', years: '1980—', work: '《Sweet Dreams》' },
        { name: '史密斯樂團', years: '1982—1987', work: '《There Is a Light That Never Goes Out》' }
      ],
      tracks: [
        { title: 'Dreams', composer: '佛利伍麥克', year: '1977', note: '卡式錄音帶', src: null },
        { title: 'Sweet Dreams (Are Made of This)', composer: '舞韻合唱團', year: '1983', note: '隨身聽', src: null },
        { title: 'There Is a Light That Never Goes Out', composer: '史密斯樂團', year: '1986', note: 'Mixtape', src: null }
      ],
      motif: {
        root: 48, scale: [0, 3, 5, 7, 10], pattern: [0, 2, 4, 3, 2, 0, 4, 2, 3, 5, 4, 2],
        tempo: 98, subdivision: 0.65, hold: 1.2, wave: 'triangle', noteGain: 0.046,
        filter: 1300, send: 0.14, delay: 0.2, drone: [-12, 0, 7], droneGain: 0.02, droneWave: 'sine'
      }
    },
    {
      id: 'tv',
      idx: '04',
      name: '電視',
      en: 'TV & VIDEO',
      years: '1950s — 現在',
      yearsShort: '1950s—NOW',
      worldName: '映像控制室',
      worldEn: 'VIDEO CONTROL',
      kicker: 'THE CATHODE RAY',
      tagline: '音樂第一次被看見',
      accent: '#7fe8ff',
      accentRgb: '127, 232, 255',
      planet: {
        angle: 350,
        orbit: 0.92,
        size: 64,
        c1: '#d9fbff',
        c2: '#3c7c96',
        c3: '#101b28',
        glow: 'rgba(127, 232, 255, 0.54)',
        ring: true
      },
      desc: '電視把音樂從聲音變成畫面。音樂錄影帶、排行榜節目與現場轉播讓一首歌有了臉、有了顏色，也有了可以被全世界模仿的舞步。',
      quote: '「音樂第一次被看見，也第一次被記住成一個畫面。」',
      quoteBy: '星圖筆記',
      traits: ['映像', '音樂錄影帶', '現場轉播'],
      branches: [
        {
          tag: 'TV · 電視',
          title: '電視綜藝與現場',
          text: '1950 到 70 年代，音樂透過電視綜藝、歌舞節目與現場轉播進入家庭。表演者開始為鏡頭設計走位、服裝與一個可以被記住的畫面。'
        },
        {
          tag: 'MTV · 音樂錄影帶',
          title: 'MTV 世代',
          text: '1981 年 MTV 開台，音樂錄影帶成為歌曲的第二個版本。導演、剪接與視覺風格開始和旋律一樣重要，歌手也成為影像作者。'
        },
        {
          tag: 'VISUAL · 視覺專輯',
          title: '視覺專輯與串流',
          text: '2010 年代的視覺專輯把整張唱片拍成一部電影，再拆成可以在串流平台循環播放的片段。音樂與影像不再是主從，而是同一個作品。'
        }
      ],
      artists: [
        { name: 'ABBA', years: '1972—1982', work: '《Dancing Queen》' },
        { name: 'The Buggles', years: '1977—1981', work: '《Video Killed the Radio Star》' },
        { name: 'Beyoncé', years: '1981—', work: '《Formation》' }
      ],
      tracks: [
        { title: 'Dancing Queen', composer: 'ABBA', year: '1976', note: '電視綜藝', src: null },
        { title: 'Video Killed the Radio Star', composer: 'The Buggles', year: '1979', note: 'MTV', src: null },
        { title: 'Formation', composer: 'Beyoncé', year: '2016', note: '視覺專輯', src: null }
      ],
      motif: {
        root: 55, scale: [0, 2, 4, 5, 7, 9, 11], pattern: [0, 4, 2, 4, 5, 4, 2, 0, 4, 7, 5, 4],
        tempo: 124, subdivision: 0.4, hold: 1.0, wave: 'sawtooth', noteGain: 0.04,
        filter: 2000, send: 0.25, delay: 0.26, drone: [-12, -5, 7], droneGain: 0.014, droneWave: 'triangle'
      }
    },
    {
      id: 'film',
      idx: '05',
      name: '電影',
      en: 'FILM',
      years: '1927 — 現在',
      yearsShort: '1927—NOW',
      worldName: '放映室',
      worldEn: 'PROJECTION ROOM',
      kicker: 'THE PROJECTION',
      tagline: '畫面裡的聲音',
      accent: '#ffc97a',
      accentRgb: '255, 201, 122',
      planet: {
        angle: 40,
        orbit: 1.02,
        size: 60,
        c1: '#ffe4b0',
        c2: '#a35c36',
        c3: '#2b1611',
        glow: 'rgba(255, 201, 122, 0.54)',
        ring: false
      },
      desc: '電影讓音樂成為敘事的一部分。它可以在角色開口之前說出情緒，也可以在畫面停住時繼續推進時間；配樂、主題曲與聲音設計共同構成了我們記得的電影。',
      quote: '「畫面負責說故事，音樂負責說出畫面沒有說的部分。」',
      quoteBy: '星圖筆記',
      traits: ['配樂', '主題曲', '聲音設計'],
      branches: [
        {
          tag: 'MUSICAL · 歌舞片',
          title: '歌舞片',
          text: '1927 年的有聲電影讓音樂與畫面同步，歌舞片則讓角色可以用一首歌突然離開現實。歌曲不再只是背景，而是情節本身。'
        },
        {
          tag: 'SCORE · 配樂',
          title: '作者電影配樂',
          text: '1950 到 60 年代，作曲家開始用爵士、現代古典與不對稱節奏塑造電影的性格。主題旋律可以在觀眾離開戲院後繼續在腦中播放。'
        },
        {
          tag: 'SOUND · 聲音設計',
          title: '現代聲音設計',
          text: '當代電影把音樂、環境音與數位音效混成一條完整的聲景。低頻可以製造恐懼，寂靜也可以是一種配樂。'
        }
      ],
      artists: [
        { name: '金·凱利', years: '1912—1996', work: '《Singin\' in the Rain》' },
        { name: '亨利·曼西尼', years: '1924—1994', work: '《The Pink Panther Theme》' },
        { name: '漢斯·季默', years: '1957—', work: '《Time》' }
      ],
      tracks: [
        { title: 'Singin\' in the Rain', composer: '金·凱利', year: '1952', note: '歌舞片', src: null },
        { title: 'The Pink Panther Theme', composer: '亨利·曼西尼', year: '1963', note: '作者電影配樂', src: null },
        { title: 'Time', composer: '漢斯·季默', year: '2010', note: '現代聲音設計', src: null }
      ],
      motif: {
        root: 41, scale: [0, 2, 3, 5, 7, 8, 10], pattern: [0, 2, 4, 3, 5, 4, 2, 0, 4, 2, 3, 5],
        tempo: 72, subdivision: 0.9, hold: 1.8, wave: 'triangle', noteGain: 0.045,
        filter: 900, send: 0.38, delay: 0.4, drone: [-12, -5, 7], droneGain: 0.022, droneWave: 'sine'
      }
    },
    {
      id: 'game',
      idx: '06',
      name: '遊戲',
      en: 'GAME',
      years: '1970s — 現在',
      yearsShort: '1970s—NOW',
      worldName: '像素機台',
      worldEn: 'PIXEL ARCADE',
      kicker: 'THE CARTRIDGE',
      tagline: '被演奏的世界',
      accent: '#c8f56a',
      accentRgb: '200, 245, 106',
      planet: {
        angle: 96,
        orbit: 0.9,
        size: 56,
        c1: '#e6ffa2',
        c2: '#5d7f45',
        c3: '#17220f',
        glow: 'rgba(200, 245, 106, 0.52)',
        ring: false
      },
      desc: '遊戲讓音樂成為規則與互動。晶片音樂用極少的聲道寫出整個世界，交響配樂把玩家帶進史詩，而互動音效則讓每一個操作都得到回應。',
      quote: '「在遊戲裡，音樂不是背景，而是玩家正在做的事。」',
      quoteBy: '星圖筆記',
      traits: ['互動', '關卡', '循環'],
      branches: [
        {
          tag: '8-BIT · 晶片音樂',
          title: '8-bit 晶片音樂',
          text: '早期的遊戲主機只有幾個方波與噪音聲道。作曲家必須用極有限的聲音，寫出可以無限循環、又能讓玩家記住的旋律。'
        },
        {
          tag: 'ORCHESTRA · 交響',
          title: '交響遊戲配樂',
          text: '1990 年代的光碟容量讓遊戲可以使用管弦樂團與合唱團。遊戲音樂開始和電影配樂一樣巨大，甚至成為玩家進入世界的第一道門。'
        },
        {
          tag: 'AMBIENT · 互動氛圍',
          title: '互動與氛圍',
          text: '當代的遊戲會根據玩家的位置、選擇與節奏重組音樂。配樂不再是固定播放，而是一個會回應動作的系統；世界因此像活的。'
        }
      ],
      artists: [
        { name: '近藤浩治', years: '1961—', work: '《Super Mario Bros. Theme》' },
        { name: '植松伸夫', years: '1959—', work: '《One-Winged Angel》' },
        { name: 'C418', years: '1989—', work: '《Sweden》' }
      ],
      tracks: [
        { title: 'Super Mario Bros. Theme', composer: '近藤浩治', year: '1985', note: '8-bit 晶片音樂', src: null },
        { title: 'One-Winged Angel', composer: '植松伸夫', year: '1997', note: '交響遊戲配樂', src: null },
        { title: 'Sweden', composer: 'C418', year: '2011', note: '互動氛圍', src: null }
      ],
      motif: {
        root: 60, scale: [0, 2, 4, 5, 7, 9, 11], pattern: [0, 4, 2, 4, 7, 4, 2, 0, 4, 5, 4, 2],
        tempo: 144, subdivision: 0.25, hold: 0.9, wave: 'square', noteGain: 0.032,
        filter: 2600, send: 0.15, delay: 0.16, drone: [-12, 0, 7], droneGain: 0.012, droneWave: 'triangle'
      }
    },
    {
      id: 'internet',
      idx: '07',
      name: '網路',
      en: 'INTERNET',
      years: '1990s — 現在',
      yearsShort: '1990s—NOW',
      worldName: '串流節點',
      worldEn: 'STREAM NODE',
      kicker: 'THE PACKET',
      tagline: '無限複製的現在',
      accent: '#a6c8ff',
      accentRgb: '166, 200, 255',
      planet: {
        angle: 150,
        orbit: 1.06,
        size: 66,
        c1: '#d7e4ff',
        c2: '#5367b3',
        c3: '#11162f',
        glow: 'rgba(166, 200, 255, 0.54)',
        ring: true
      },
      desc: '網路把音樂變成檔案、串流與演算法。下載讓專輯解構成一首歌，串流讓整個音樂史變成一個搜尋框，短影音則讓副歌成為新的入口。',
      quote: '「網路讓每一首歌都可以被複製，也讓每一次聆聽都留下資料。」',
      quoteBy: '星圖筆記',
      traits: ['MP3', '串流', '短影音'],
      branches: [
        {
          tag: 'MP3 · 下載',
          title: 'MP3 與下載',
          text: '壓縮格式讓一首歌變成幾 MB 的檔案，可以在網路上一對多複製。音樂的流通第一次不再需要實體媒介，也不再需要唱片公司的許可。'
        },
        {
          tag: 'STREAM · 串流',
          title: '串流平台',
          text: '串流把擁有變成存取：整個音樂史被放進同一個搜尋框，播放清單與推薦演算法開始決定我們下一首聽什麼。'
        },
        {
          tag: 'SHORT · 短影音',
          title: '短影音與 AI',
          text: '15 秒的副歌可以讓一首歌在幾天內繞行世界。到了生成式 AI 的年代，音樂的生產、推薦與聆聽正在被重新拆解。'
        }
      ],
      artists: [
        { name: 'Gnarls Barkley', years: '2003—', work: '《Crazy》' },
        { name: 'Billie Eilish', years: '2001—', work: '《bad guy》' },
        { name: 'Lil Nas X', years: '1999—', work: '《Old Town Road》' }
      ],
      tracks: [
        { title: 'Crazy', composer: 'Gnarls Barkley', year: '2006', note: 'MP3 下載', src: null },
        { title: 'bad guy', composer: 'Billie Eilish', year: '2019', note: '串流', src: null },
        { title: 'Old Town Road', composer: 'Lil Nas X', year: '2019', note: '短影音', src: null }
      ],
      motif: {
        root: 50, scale: [0, 3, 5, 7, 10], pattern: [0, 2, 4, 2, 5, 4, 3, 2, 4, 6, 5, 3],
        tempo: 112, subdivision: 0.35, hold: 1.0, wave: 'sawtooth', noteGain: 0.036,
        filter: 1800, send: 0.3, delay: 0.28, drone: [-12, 0, 7], droneGain: 0.016, droneWave: 'triangle'
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

  function escapeHTML(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function getMediaGeometry(w = window.innerWidth, h = window.innerHeight) {
    if (w < 760) {
      return {
        cx: w * 0.5,
        cy: h * 0.58,
        rx: Math.min(w * 0.38, 155),
        ry: Math.min(w * 0.38, 155)
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
      rx: Math.min(w * 0.29, 460),
      ry: Math.min(h * 0.29, 275)
    };
  }

  /* ----------------------------------------------------------
     03. Signal-network canvas
     ---------------------------------------------------------- */

  class MediaGalaxy {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1.5, 1.5);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.geo = getMediaGeometry();
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.paused = false;
      this.time = 0;
      this.last = performance.now();
      this.nodes = [];
      this.sprites = this.createSprites();
      this.resize();
      this.tick = this.tick.bind(this);
      requestAnimationFrame(this.tick);
    }

    createSprites() {
      const star = (rgb) => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, `rgba(${rgb}, 1)`);
        gradient.addColorStop(0.09, `rgba(${rgb}, 0.88)`);
        gradient.addColorStop(0.28, `rgba(${rgb}, 0.2)`);
        gradient.addColorStop(0.65, `rgba(${rgb}, 0.04)`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return canvas;
      };

      const nebula = (rgb) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, `rgba(${rgb}, 0.24)`);
        gradient.addColorStop(0.38, `rgba(${rgb}, 0.11)`);
        gradient.addColorStop(0.72, `rgba(${rgb}, 0.035)`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
        return canvas;
      };

      const core = document.createElement('canvas');
      core.width = 512;
      core.height = 512;
      const coreCtx = core.getContext('2d');
      const coreGradient = coreCtx.createRadialGradient(256, 256, 0, 256, 256, 256);
      coreGradient.addColorStop(0, 'rgba(246, 255, 241, 1)');
      coreGradient.addColorStop(0.055, 'rgba(198, 255, 231, 0.92)');
      coreGradient.addColorStop(0.16, 'rgba(127, 227, 210, 0.3)');
      coreGradient.addColorStop(0.38, 'rgba(118, 158, 255, 0.11)');
      coreGradient.addColorStop(0.7, 'rgba(107, 100, 255, 0.035)');
      coreGradient.addColorStop(1, 'rgba(60, 80, 255, 0)');
      coreCtx.fillStyle = coreGradient;
      coreCtx.fillRect(0, 0, 512, 512);

      return {
        stars: {
          teal: star('154, 255, 232'),
          gold: star('255, 217, 158'),
          blue: star('167, 202, 255'),
          violet: star('194, 172, 255'),
          white: star('247, 255, 249')
        },
        nebulae: {
          teal: nebula('77, 223, 202'),
          gold: nebula('255, 188, 105'),
          violet: nebula('148, 143, 255')
        },
        core
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
      this.geo = getMediaGeometry(this.w, this.h);
      this.radius = Math.max(this.geo.rx, this.geo.ry) * 1.45;
      this.buildStars();
      this.buildMotes();
    }

    buildStars() {
      const count = clamp(Math.round((this.w * this.h) / 3900), 120, 360);
      this.bgStars = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        size: Math.random() < 0.9 ? 1 : 1.6,
        alpha: 0.15 + Math.random() * 0.55,
        speed: 0.0002 + Math.random() * 0.001,
        phase: Math.random() * TAU,
        cross: index < 9
      }));
    }

    buildMotes() {
      const count = clamp(Math.round((this.w * this.h) / 9000), 45, 120);
      const colors = ['teal', 'gold', 'blue', 'violet'];
      this.motes = Array.from({ length: count }, () => ({
        angle: Math.random() * TAU,
        radius: 0.1 + Math.random() * 0.95,
        speed: 0.00001 + Math.random() * 0.00005,
        size: 0.5 + Math.random() * 1.3,
        alpha: 0.12 + Math.random() * 0.4,
        sprite: this.sprites.stars[colors[Math.floor(Math.random() * colors.length)]],
        phase: Math.random() * TAU
      }));
    }

    setNodes(points) {
      this.nodes = points;
    }

    resetReveal() {
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.time = 0;
    }

    skipReveal() {
      this.fastReveal = true;
    }

    tick(now) {
      const dt = Math.min(42, Math.max(0, now - this.last));
      this.last = now;
      if (!this.paused) {
        if (this.reveal < 1) this.reveal = Math.min(1, this.reveal + dt / (this.fastReveal ? 320 : 3600));
        this.time += dt;
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
      this.drawSignal(now);
    }

    drawBackground(now) {
      if (this.reveal <= 0.001) return;
      const ctx = this.ctx;
      const p = clamp(this.reveal * 3.2, 0, 1);
      ctx.save();
      for (const star of this.bgStars) {
        const twinkle = 0.52 + 0.48 * Math.sin(now * star.speed + star.phase);
        ctx.globalAlpha = p * star.alpha * twinkle;
        ctx.fillStyle = 'rgba(220, 242, 238, 0.9)';
        if (star.cross) {
          ctx.fillRect(star.x - 3, star.y, 6, 0.6);
          ctx.fillRect(star.x, star.y - 3, 0.6, 6);
        } else {
          ctx.fillRect(star.x, star.y, star.size, star.size);
        }
      }
      ctx.restore();
    }

    drawSignal(now) {
      if (this.reveal <= 0.001) return;
      const ctx = this.ctx;
      const { cx, cy } = this.geo;
      const R = this.radius;
      const reveal = this.reveal;

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(cx, cy);

      // Diffuse signal haze behind the node network.
      const haze = R * 1.8;
      ctx.globalAlpha = reveal * 0.25;
      ctx.drawImage(this.sprites.nebulae.teal, -haze * 0.8, -haze * 0.65, haze * 1.6, haze * 1.3);
      ctx.globalAlpha = reveal * 0.14;
      ctx.drawImage(this.sprites.nebulae.gold, haze * 0.1, -haze * 0.72, haze * 0.9, haze * 0.8);
      ctx.globalAlpha = reveal * 0.12;
      ctx.drawImage(this.sprites.nebulae.violet, -haze * 0.9, haze * 0.15, haze * 0.8, haze * 0.7);

      // Core beacon.
      const coreSize = R * 0.7;
      ctx.globalAlpha = reveal * 0.9;
      ctx.drawImage(this.sprites.core, -coreSize / 2, -coreSize / 2, coreSize, coreSize);

      // Expanding radio rings.
      for (let i = 0; i < 4; i += 1) {
        const progress = ((now * 0.000045 + i / 4) % 1 + 1) % 1;
        const radius = R * (0.1 + progress * 0.94);
        const alpha = (1 - progress) * 0.24 * reveal;
        if (alpha <= 0.002) continue;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(127, 227, 210, 0.82)' : 'rgba(242, 199, 125, 0.66)';
        ctx.lineWidth = 1;
        ctx.setLineDash([1.5, 9]);
        ctx.lineDashOffset = -now * 0.012 - i * 9;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, TAU);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Signal motes travelling outward.
      for (const mote of this.motes) {
        const progress = ((now * mote.speed + mote.radius) % 1 + 1) % 1;
        const radius = R * (0.08 + progress * 1.06);
        const alpha = mote.alpha * reveal * (0.55 + 0.45 * Math.sin(now * 0.0012 + mote.phase));
        if (alpha <= 0.005) continue;
        const x = Math.cos(mote.angle) * radius;
        const y = Math.sin(mote.angle) * radius * 0.82;
        const size = mote.size * 7;
        ctx.globalAlpha = alpha;
        ctx.drawImage(mote.sprite, x - size / 2, y - size / 2, size, size);
      }

      // Small halos under each planet node.
      if (this.nodes.length) {
        for (const node of this.nodes) {
          const x = node.x - cx;
          const y = node.y - cy;
          const glowSize = 72;
          ctx.globalAlpha = reveal * 0.2;
          ctx.drawImage(this.sprites.stars.white, x - glowSize / 2, y - glowSize / 2, glowSize, glowSize);
        }
      }

      ctx.restore();
    }
  }

  /* ----------------------------------------------------------
     04. Planet network
     ---------------------------------------------------------- */

  const planetsEl = $('#mediaPlanets');
  const networkEl = $('#mediaNetwork');
  const coreEl = $('#mediaCore');
  const stageEl = $('#media-galaxy');
  const topbarEl = $('#mediaTopbar');
  const introEl = $('#mediaIntro');
  const introBar = $('#mediaIntroBar');
  const introStatus = $('#mediaIntroStatus');
  const skipBtn = $('#mediaSkipBtn');
  const replayBtn = $('#mediaReplayBtn');

  let galaxy = null;
  let planetElements = [];
  let planetPoints = [];

  function createPlanets() {
    planetsEl.innerHTML = MEDIA.map((media, index) => {
      const planet = media.planet;
      const ring = planet.ring ? '<span class="planet__ring" aria-hidden="true"></span>' : '';
      return `
        <button
          class="planet planet--${media.id}"
          type="button"
          data-media="${media.id}"
          data-index="${index}"
          aria-label="進入${escapeHTML(media.name)}的媒體檔案室「${escapeHTML(media.worldName)}」，${escapeHTML(media.years)}"
          style="
            --size:${planet.size}px;
            --c1:${planet.c1};
            --c2:${planet.c2};
            --c3:${planet.c3};
            --glow:${planet.glow};
            --enter-delay:${0.1 + index * 0.08}s;
            --float-delay:${-index * 0.75}s;
            --float-time:${7.5 + (index % 3) * 1.25}s;
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
            <span class="planet__num">${media.idx}</span>
            <span class="planet__name">${escapeHTML(media.name)}</span>
            <span class="planet__years">${escapeHTML(media.yearsShort)}</span>
            <span class="planet__world">${escapeHTML(media.worldName)}</span>
          </span>
        </button>
      `;
    }).join('');

    planetElements = $$('.planet', planetsEl);
    planetElements.forEach((element) => {
      element.addEventListener('click', () => {
        const media = MEDIA.find((item) => item.id === element.dataset.media);
        if (media) openWorld(media.id, element);
      });
    });
  }

  function layoutPlanets() {
    const geo = getMediaGeometry();
    planetPoints = [];

    planetElements.forEach((element, index) => {
      const media = MEDIA[index];
      const angle = (media.planet.angle * Math.PI) / 180;
      const x = geo.cx + Math.cos(angle) * geo.rx * media.planet.orbit;
      const y = geo.cy + Math.sin(angle) * geo.ry * media.planet.orbit;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      planetPoints.push({ x, y });
    });

    coreEl.style.left = `${geo.cx}px`;
    coreEl.style.top = `${geo.cy}px`;

    if (galaxy) galaxy.setNodes(planetPoints);

    const perimeter = planetPoints.map((point, index) => {
      const next = planetPoints[(index + 1) % planetPoints.length];
      return `<line class="media-network__perimeter" x1="${point.x.toFixed(1)}" y1="${point.y.toFixed(1)}" x2="${next.x.toFixed(1)}" y2="${next.y.toFixed(1)}"></line>`;
    }).join('');

    const beams = planetPoints.map((point, index) => `
      <line class="media-network__beam" x1="${geo.cx}" y1="${geo.cy}" x2="${point.x.toFixed(1)}" y2="${point.y.toFixed(1)}" style="--delay:${(-index * 0.8).toFixed(2)}s"></line>
      <circle class="media-network__node" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="2.3"></circle>
    `).join('');

    networkEl.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    networkEl.setAttribute('width', window.innerWidth);
    networkEl.setAttribute('height', window.innerHeight);
    networkEl.innerHTML = `
      ${perimeter}
      ${beams}
      <circle class="media-network__core" cx="${geo.cx}" cy="${geo.cy}" r="5"></circle>
      <circle class="media-network__core media-network__core--two" cx="${geo.cx}" cy="${geo.cy}" r="18"></circle>
    `;
  }

  /* ----------------------------------------------------------
     05. Compact audio engine
     ---------------------------------------------------------- */

  class MediaAudio {
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
        master.gain.value = 0.52;
        comp.threshold.value = -20;
        comp.ratio.value = 8;
        comp.attack.value = 0.004;
        comp.release.value = 0.24;
        delay.delayTime.value = 0.26;
        feedback.gain.value = 0.28;
        wet.gain.value = 0.23;
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
      const start = () => { if (this.playing) this.scheduleLoop(); };
      if (this.ctx.state === 'suspended') this.ctx.resume().then(start).catch(() => { this.playing = false; });
      else start();
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

  const mediaAudio = new MediaAudio();

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

  function worldHeading(media) {
    return `
      <header class="w-head media-head">
        <p class="w-kicker"><span class="w-kicker__line" aria-hidden="true"></span>${escapeHTML(media.kicker)}</p>
        <h1 class="w-title" id="worldTitle">
          <span class="w-title__name">${escapeHTML(media.name)}</span>
          <em class="w-title__tag">${escapeHTML(media.tagline)}</em>
        </h1>
        <p class="w-years">${escapeHTML(media.years)}<span class="w-room">${escapeHTML(media.worldName)}</span></p>
      </header>
    `;
  }

  function mediaArtifact(media) {
    if (media.id === 'vinyl') {
      return `<div class="media-object mo-vinyl">
        <span class="mo-vinyl__base"></span>
        <span class="mo-vinyl__disc"><span class="mo-vinyl__label"><b>${escapeHTML(media.en)}</b><small>SIDE A</small></span></span>
        <span class="mo-vinyl__arm"><i></i></span>
      </div>`;
    }
    if (media.id === 'radio') {
      return `<div class="media-object mo-radio">
        <span class="mo-radio__case">
          <span class="mo-radio__speaker"></span>
          <span class="mo-radio__brand">SIGNAL</span>
          <span class="mo-radio__dial"><i></i></span>
          <span class="mo-radio__knob mo-radio__knob--one"></span>
          <span class="mo-radio__knob mo-radio__knob--two"></span>
        </span>
      </div>`;
    }
    if (media.id === 'cassette') {
      return `<div class="media-object mo-cassette">
        <span class="mo-cassette__shell">
          <span class="mo-cassette__window"><i class="mo-cassette__reel"></i><i class="mo-cassette__reel mo-cassette__reel--two"></i></span>
          <span class="mo-cassette__label">MIXTAPE / 03</span>
          <span class="mo-cassette__screw"></span>
          <span class="mo-cassette__screw mo-cassette__screw--two"></span>
        </span>
      </div>`;
    }
    if (media.id === 'tv') {
      return `<div class="media-object mo-tv">
        <span class="mo-tv__antenna"></span>
        <span class="mo-tv__body">
          <span class="mo-tv__screen"><i class="mo-tv__scan"></i><b>MTV</b></span>
          <span class="mo-tv__control"></span>
        </span>
      </div>`;
    }
    if (media.id === 'film') {
      return `<div class="media-object mo-film">
        <span class="mo-film__projector"><i class="mo-film__reel"></i><i class="mo-film__lens"></i></span>
        <span class="mo-film__strip"></span>
        <span class="mo-film__beam"></span>
      </div>`;
    }
    if (media.id === 'game') {
      return `<div class="media-object mo-game">
        <span class="mo-game__console">
          <span class="mo-game__screen"><i class="mo-game__pixels"></i><b>PLAY</b></span>
          <span class="mo-game__dpad"></span>
          <span class="mo-game__buttons"><i></i><i></i></span>
        </span>
      </div>`;
    }
    return `<div class="media-object mo-net">
      <span class="mo-net__phone">
        <span class="mo-net__screen">
          <span class="mo-net__bar"></span>
          <span class="mo-net__wave"></span>
          <span class="mo-net__play"></span>
          <span class="mo-net__rows"><i></i><i></i><i></i></span>
        </span>
      </span>
    </div>`;
  }

  function worldBranches(media) {
    return `<div class="w-branches media-branches" role="group" aria-label="三種媒介形態">
      ${media.branches.map((branch, index) => {
        const track = media.tracks[index];
        return `<button class="w-branch" type="button" data-world-branch="${index}" aria-pressed="${index === 0}">
          <span class="w-branch__num">0${index + 1}</span>
          <span class="w-branch__copy">
            <span class="w-branch__name">${escapeHTML(branch.title)}</span>
            <span class="w-branch__tag">${escapeHTML(branch.tag)}</span>
            <span class="media-branch__track">${escapeHTML(track.title)} · ${escapeHTML(track.year)}</span>
          </span>
          <span class="w-branch__arrow" aria-hidden="true">↗</span>
        </button>`;
      }).join('')}
    </div>`;
  }

  function worldLore(media) {
    const branch = media.branches[0];
    return `<div class="w-lore media-lore" data-world-lore aria-live="polite">
      <p class="w-lore__tag" data-lore-tag>${escapeHTML(branch.tag)}</p>
      <h2 class="w-lore__title" data-lore-title>${escapeHTML(branch.title)}</h2>
      <p class="w-lore__text" data-lore-text>${escapeHTML(branch.text)}</p>
    </div>`;
  }

  function worldPeople(media) {
    return `<div class="w-people-wrap media-people">
      <p class="w-label">名字 · AUTHORS</p>
      <ol class="w-people">
        ${media.artists.map((artist, index) => `
          <li class="w-person">
            <span class="w-person__num">0${index + 1}</span>
            <span class="w-person__name">${escapeHTML(artist.name)}<small>${escapeHTML(artist.work)}</small></span>
            <span class="w-person__dates">${escapeHTML(artist.years)}</span>
          </li>
        `).join('')}
      </ol>
    </div>`;
  }

  function worldAudio(media) {
    const track = media.tracks[0];
    const meta = `${track.composer} · ${track.year} · ${track.src ? '歷史錄音' : '聲音示意'}`;
    return `<div class="w-audio media-audio" data-world-audio>
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

  function worldTemplate(media) {
    const track = media.tracks[0];
    return `<div class="ws ws-media">
      <div class="media-ambient" aria-hidden="true"></div>
      <div class="media-layout">
        <div class="media-main">
          ${worldHeading(media)}
          <p class="w-desc">${escapeHTML(media.desc)}</p>
          <blockquote class="w-quote"><span>${escapeHTML(media.quote)}</span><cite>— ${escapeHTML(media.quoteBy)}</cite></blockquote>
          <ul class="w-traits" aria-label="媒介特徵">${media.traits.map((trait) => `<li>${escapeHTML(trait)}</li>`).join('')}</ul>
          <div class="media-formats">
            <p class="w-label">媒介形態 · FORMATS</p>
            ${worldBranches(media)}
          </div>
          ${worldLore(media)}
        </div>
        <aside class="media-side">
          <div class="media-viewport">
            <div class="media-viewhead"><span>MEDIUM ${escapeHTML(media.idx)}</span><b>${escapeHTML(media.worldEn)}</b></div>
            ${mediaArtifact(media)}
            <div class="media-readout">
              <span data-media-track>${escapeHTML(track.title)}</span>
              <small data-media-year>${escapeHTML(track.year)}</small>
            </div>
          </div>
          ${worldAudio(media)}
          ${worldPeople(media)}
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
    mediaAudio.stop();
    if (audioPlaying) setAudioPlaying(false);
  }

  function playActive(media) {
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
    return mediaAudio.play(media.motif);
  }

  function updateNav(index) {
    const total = MEDIA.length;
    const prev = MEDIA[(index - 1 + total) % total];
    const next = MEDIA[(index + 1) % total];
    worldPrevName.textContent = prev.name;
    worldNextName.textContent = next.name;
    worldPrev.setAttribute('aria-label', `上一個媒介：${prev.name}`);
    worldNext.setAttribute('aria-label', `下一個媒介：${next.name}`);
  }

  function bindWorld(media) {
    setAudioPlaying(false);
    activeTrack = null;
    const branchButtons = $$('[data-world-branch]', worldStage);
    const loreTag = $('[data-lore-tag]', worldStage);
    const loreTitle = $('[data-lore-title]', worldStage);
    const loreText = $('[data-lore-text]', worldStage);
    const loreBox = $('[data-world-lore]', worldStage);

    const selectBranch = (branchIndex, animate = true) => {
      const branch = media.branches[branchIndex];
      if (!branch) return;
      if (audioPlaying) stopWorldAudio();

      branchButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === branchIndex;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      worldView.dataset.branch = String(branchIndex);
      worldView.style.setProperty('--branch-color', media.accent);
      worldView.style.setProperty('--branch-rgb', media.accentRgb);

      if (loreTag) loreTag.textContent = branch.tag;
      if (loreTitle) loreTitle.textContent = branch.title;
      if (loreText) loreText.textContent = branch.text;

      const track = media.tracks[branchIndex];
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
        const mediaTrack = $('[data-media-track]', worldStage);
        const mediaYear = $('[data-media-year]', worldStage);
        if (mediaTrack) mediaTrack.textContent = track.title;
        if (mediaYear) mediaYear.textContent = track.year;
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
      if (!mediaAudio.supported) {
        playButton.disabled = true;
        const status = $('[data-audio-status]', worldStage);
        if (status) status.textContent = 'N/A';
      } else {
        playButton.addEventListener('click', () => {
          if (audioPlaying) {
            stopWorldAudio();
            return;
          }
          const started = playActive(media);
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
    const media = MEDIA[index];
    if (!media) return;
    stopWorldAudio();
    currentWorld = index;
    worldView.dataset.world = media.id;
    worldView.style.setProperty('--media-accent', media.accent);
    worldView.style.setProperty('--media-accent-rgb', media.accentRgb);
    worldIndex.textContent = media.idx;
    worldEn.textContent = media.en;
    worldStage.innerHTML = worldTemplate(media);
    bindWorld(media);
    updateNav(index);
    worldView.scrollTop = 0;
    document.title = `${media.name} · 媒介宇宙`;
    const planet = document.querySelector(`.planet[data-media="${media.id}"]`);
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

  function openWorld(mediaId, trigger) {
    const index = MEDIA.findIndex((media) => media.id === mediaId);
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
    document.body.classList.add('is-media-world');
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
    document.body.classList.remove('is-media-world');
    galaxy.paused = document.hidden;

    stageEl.removeAttribute('inert');
    stageEl.removeAttribute('aria-hidden');
    topbarEl.removeAttribute('inert');
    topbarEl.removeAttribute('aria-hidden');

    document.title = '媒介宇宙 · Media Cosmos';
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
    const total = MEDIA.length;
    const normalized = ((index % total) + total) % total;
    if (normalized === currentWorld && pendingWorld === null && !immediate) return;
    if (!worldOpen) {
      openWorld(MEDIA[normalized].id, null);
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
    setIntroStatus('正在搜尋媒介訊號');
    skipBtn.style.visibility = 'visible';

    introTimers.push(window.setTimeout(() => { if (introRunning) setIntroStatus('正在解碼載體'); }, 1200));
    introTimers.push(window.setTimeout(() => { if (introRunning) setIntroStatus('訊號網絡已成形'); }, 2900));

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

  const canvas = $('#mediaCanvas');
  galaxy = new MediaGalaxy(canvas);

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

  window.MediaCosmos = {
    media: MEDIA,
    galaxy,
    openWorld
  };
})();
