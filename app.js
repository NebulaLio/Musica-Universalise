/* ============================================================
   MUSICA UNIVERSALIS · 音樂宇宙
   A hand-built, dependency-free galaxy prototype.

   Sections
   01. Era data
   02. Utilities
   03. Audio engine (Web Audio, generated in real time)
   04. Galaxy canvas scene
   05. Planet map / route
   06. Era detail view
   07. Intro overture
   08. Boot
   ============================================================ */

(() => {
  'use strict';

  /* ----------------------------------------------------------
     01. Era data
     ---------------------------------------------------------- */

  const ERAS = [
    {
      id: 'medieval',
      idx: '01',
      name: '中世紀',
      en: 'MEDIEVAL',
      years: '約 500 — 1400',
      yearsShort: '500—1400',
      worldName: '手抄祈禱室',
      worldEn: 'SCRIPTORIUM',
      kicker: 'THE AGE OF CHANT',
      tagline: '聖詠的微光',
      accent: '#b9a7ff',
      accentRgb: '185, 167, 255',
      planet: {
        angle: 198,
        orbit: 0.38,
        size: 44,
        c1: '#e8dcff',
        c2: '#7e6bd8',
        c3: '#291b58',
        glow: 'rgba(172, 150, 255, 0.58)',
        ring: false
      },
      desc: '在修道院高聳的石牆之間，單聲的聖詠像一束微光緩慢上升。沒有拍號，沒有和弦，只有文字與旋律彼此依附；聲音在拱頂間迴盪，成為中世紀人理解時間與永恆的方式。',
      quote: '「歌唱的人，是祈禱了兩次。」',
      quoteBy: '相傳為聖奧古斯丁',
      traits: ['單聲部', '教會調式', '口傳與手抄'],
      branches: [
        {
          tag: 'SACRED · 宗教',
          title: '葛利果聖詠',
          text: '拉丁文經文配上自由流動的單聲旋律，節奏跟隨語言的呼吸。它既是祈禱，也是整個西方音樂宇宙最早被記錄下來的中央恆星。'
        },
        {
          tag: 'POLYPHONY · 複音',
          title: '奧爾加農',
          text: '九世紀起，僧侶在聖詠下方加上第二條聲部。從平行四度到五度，複音的第一道裂縫出現了：一個聲音，開始能夠同時是兩個。'
        },
        {
          tag: 'NOTRE DAME · 巴黎',
          title: '聖母院複音',
          text: '萊奧寧與佩羅坦把即興的複音寫成樂譜，讓三、四條旋律在巴黎聖母院裡交織。聲音第一次有了哥德式建築般的垂直維度。'
        }
      ],
      tracks: [
        { title: 'Puer natus est nobis', composer: '匿名的葛利果聖詠傳統', year: '約 9 世紀', note: '聖誕彌撒進堂詠', src: null },
        { title: 'Viderunt omnes', composer: '萊奧寧', year: '約 1160–1180', note: '大奧爾加農', src: null },
        { title: 'Sederunt principes', composer: '佩羅坦', year: '約 1199', note: '四聲部奧爾加農', src: null }
      ],
      composers: [
        { name: '希德嘉·馮·賓根', years: '1098—1179', work: '《美德頌》Ordo Virtutum' },
        { name: '萊奧寧', years: 'c.1150—1201', work: '《大奧爾加農》' },
        { name: '佩羅坦', years: 'c.1160—1220', work: '《四季》經文歌' }
      ],
      motif: {
        root: 50,
        scale: [0, 2, 3, 5, 7, 8, 10],
        pattern: [0, 2, 4, 3, 2, 0, 4, 6, 4, 2, 3, 2],
        tempo: 52,
        subdivision: 1,
        hold: 1.7,
        wave: 'sine',
        noteGain: 0.07,
        filter: 1500,
        send: 0.28,
        delay: 0.36,
        drone: [-12, -5, 7],
        droneGain: 0.024,
        droneWave: 'sine'
      }
    },
    {
      id: 'renaissance',
      idx: '02',
      name: '文藝復興',
      en: 'RENAISSANCE',
      years: '約 1400 — 1600',
      yearsShort: '1400—1600',
      worldName: '複音花園',
      worldEn: 'POLYPHONIC GARDEN',
      kicker: 'THE AGE OF POLYPHONY',
      tagline: '複音的秩序',
      accent: '#ffc48a',
      accentRgb: '255, 196, 138',
      planet: {
        angle: 266,
        orbit: 0.55,
        size: 52,
        c1: '#ffe1b5',
        c2: '#d68a5c',
        c3: '#4a2419',
        glow: 'rgba(255, 190, 130, 0.52)',
        ring: false
      },
      desc: '當印刷術讓樂譜開始旅行，複音音樂也從教堂走向宮廷與市鎮。每一條聲部都獨立而平等，卻在同一個和聲裡相遇——這是一種關於「人」的秩序，也是文藝復興的世界觀。',
      quote: '「讓每一條聲部都被聽見，也讓它們一起呼吸。」',
      quoteBy: '星圖筆記',
      traits: ['複音對位', '人本主義', '樂譜印刷'],
      branches: [
        {
          tag: 'MASS · 宗教',
          title: '複音彌撒',
          text: '把聖詠的定旋律放進低聲部，其餘聲部在上方自由編織。若斯坎與帕萊斯特里納讓同一段禱詞，長成一座由聲音構成的對稱教堂。'
        },
        {
          tag: 'MADRIGAL · 世俗',
          title: '牧歌',
          text: '牧歌把詩句交給五條聲部，讓「嘆息」變成下行旋律，讓「飛翔」變成高音。文字第一次被音樂如此精細地描繪。'
        },
        {
          tag: 'INSTRUMENTAL · 器樂',
          title: '器樂舞曲',
          text: '魯特琴、維奧爾琴與鍵盤樂器逐漸脫離聲樂獨立。舞曲節奏與即興裝飾，讓樂器開始擁有自己的語言。'
        }
      ],
      tracks: [
        { title: 'Missa Pange lingua', composer: '若斯坎·德普雷', year: '約 1515', note: '定旋律彌撒', src: null },
        { title: 'Il bianco e dolce cigno', composer: '雅克·阿卡德爾特', year: '1539', note: '五聲部牧歌', src: null },
        { title: 'Belle qui tiens ma vie', composer: '蒂博·阿爾博', year: '1589', note: '帕凡舞曲', src: null }
      ],
      composers: [
        { name: '若斯坎·德普雷', years: 'c.1450—1521', work: '《聖母彌撒》' },
        { name: '帕萊斯特里納', years: 'c.1525—1594', work: '《教皇馬爾切洛彌撒》' },
        { name: '威廉·拜爾德', years: 'c.1540—1623', work: '《四聲部彌撒》' }
      ],
      motif: {
        root: 55,
        scale: [0, 2, 4, 5, 7, 9, 11],
        pattern: [0, 2, 4, 6, 5, 4, 2, 4, 3, 1, 0, 2],
        tempo: 66,
        subdivision: 0.86,
        hold: 1.55,
        wave: 'triangle',
        noteGain: 0.065,
        filter: 2100,
        send: 0.25,
        delay: 0.28,
        drone: [-12, -5, 7],
        droneGain: 0.02,
        droneWave: 'triangle'
      }
    },
    {
      id: 'baroque',
      idx: '03',
      name: '巴洛克',
      en: 'BAROQUE',
      years: '約 1600 — 1750',
      yearsShort: '1600—1750',
      worldName: '燭光歌劇院',
      worldEn: 'OPERA HOUSE',
      kicker: 'THE AGE OF SPECTACLE',
      tagline: '華麗的戲劇',
      accent: '#ffd48a',
      accentRgb: '255, 212, 138',
      planet: {
        angle: 334,
        orbit: 0.72,
        size: 64,
        c1: '#ffe3a3',
        c2: '#b77927',
        c3: '#3a2108',
        glow: 'rgba(255, 202, 104, 0.58)',
        ring: true
      },
      desc: '1600 年前後，歌劇在佛羅倫斯誕生。通奏低音像一條穩定的引力線，讓上方旋律可以自由裝飾、轉調、奔馳；教堂、宮廷與劇院，則成為三顆彼此拉扯的衛星。巴洛克相信：音樂應該直接撼動靈魂。',
      quote: '「音樂的目的，是感動靈魂。」',
      quoteBy: '蒙特威爾第 · 大意',
      traits: ['通奏低音', '歌劇誕生', '裝飾與對比'],
      branches: [
        {
          tag: 'OPERA · 戲劇',
          title: '歌劇',
          text: '蒙特威爾第讓和聲為戲劇服務，詠嘆調與宣敘調開始分工。音樂不再只是禱詞的容器，而成為角色、慾望與命運本身。'
        },
        {
          tag: 'CONCERTO · 競奏',
          title: '協奏曲',
          text: '獨奏與樂團互相追逐、模仿、對抗。韋瓦第的《四季》把鳥鳴、雷雨與冰霜寫進弦樂，讓自然成為一場聲音劇場。'
        },
        {
          tag: 'FUGUE · 對位',
          title: '賦格',
          text: '一個短小主題在不同聲部間接力、變形、疊合。巴赫把這門對位技藝推到極致，讓秩序本身聽起來像一場壯麗的即興。'
        }
      ],
      tracks: [
        { title: "L'Orfeo: Toccata", composer: '克勞迪奧·蒙特威爾第', year: '1607', note: '歌劇開場號角', src: null },
        { title: 'The Four Seasons: Spring', fullTitle: 'The Four Seasons: Violin Concerto in E major, RV 269 "Spring"', composer: '安東尼奧·韋瓦第', year: '1725', note: '小提琴協奏曲', src: null },
        { title: 'Fugue in C major, BWV 846', fullTitle: 'The Well-Tempered Clavier, Book I: Fugue in C major, BWV 846', composer: '約翰·塞巴斯蒂安·巴赫', year: '1722', note: '平均律鍵盤曲集', src: null }
      ],
      composers: [
        { name: '約翰·塞巴斯蒂安·巴赫', years: '1685—1750', work: '《郭德堡變奏曲》' },
        { name: '安東尼奧·韋瓦第', years: '1678—1741', work: '《四季》' },
        { name: '喬治·韓德爾', years: '1685—1759', work: '《彌賽亞》' }
      ],
      motif: {
        root: 50,
        scale: [0, 2, 3, 5, 7, 8, 10],
        pattern: [0, 2, 4, 5, 4, 2, 6, 4, 3, 5, 4, 2, 0, 2, 4, 5],
        tempo: 96,
        subdivision: 0.56,
        hold: 1.1,
        wave: 'sawtooth',
        noteGain: 0.045,
        filter: 1500,
        send: 0.24,
        delay: 0.24,
        drone: [-12, -5, 7],
        droneGain: 0.016,
        droneWave: 'triangle'
      }
    },
    {
      id: 'classical',
      idx: '04',
      name: '古典',
      en: 'CLASSICAL',
      years: '約 1750 — 1820',
      yearsShort: '1750—1820',
      worldName: '星盤沙龍',
      worldEn: 'ORRERY SALON',
      kicker: 'THE AGE OF REASON',
      tagline: '理性的平衡',
      accent: '#f1e3c1',
      accentRgb: '241, 227, 193',
      planet: {
        angle: 42,
        orbit: 0.88,
        size: 72,
        c1: '#fff9e8',
        c2: '#c8b78b',
        c3: '#41372a',
        glow: 'rgba(255, 240, 200, 0.5)',
        ring: false
      },
      desc: '啟蒙時代的沙龍裡，音樂被要求清晰、均衡、可以交談。奏鳴曲式提供了一套優雅的敘事引擎：呈示、發展、再現。交響曲走出宮廷，走進公共音樂會，成為新興市民階級共享的情感空間。',
      quote: '「在秩序與自由之間，找到剛剛好的距離。」',
      quoteBy: '星圖筆記',
      traits: ['奏鳴曲式', '公共音樂會', '清晰與均衡'],
      branches: [
        {
          tag: 'SYMPHONY · 交響',
          title: '交響曲',
          text: '海頓確立了四樂章的交響框架，莫札特讓它充滿戲劇與歌唱，貝多芬則把它變成個人的宣言。樂團規模不大，卻能容納整個世界。'
        },
        {
          tag: 'SONATA · 奏鳴',
          title: '奏鳴曲',
          text: '兩三個樂章，一或兩件樂器。主題被提出、拆解、重建，像一場沒有語言的辯論；鋼琴在其中逐漸成為主角。'
        },
        {
          tag: 'QUARTET · 室內',
          title: '弦樂四重奏',
          text: '兩把小提琴、中提琴、大提琴，四個人平等交談。它是最私密的公共形式：每個聲部都必須傾聽，也必須發言。'
        }
      ],
      tracks: [
        { title: 'Symphony No. 94: II. Andante', fullTitle: 'Symphony No. 94 in G major, Hob. I:94 "Surprise": II. Andante', composer: '約瑟夫·海頓', year: '1791', note: '交響曲第二樂章', src: null },
        { title: 'Rondo alla turca, K. 331', fullTitle: 'Piano Sonata No. 11 in A major, K. 331: III. Rondo alla turca', composer: '沃夫岡·阿瑪迪斯·莫札特', year: '1783', note: '土耳其進行曲', src: null },
        { title: 'String Quartet Op. 18 No. 4', fullTitle: 'String Quartet No. 4 in C minor, Op. 18 No. 4', composer: '路德維希·范·貝多芬', year: '1800', note: '弦樂四重奏', src: null }
      ],
      composers: [
        { name: '約瑟夫·海頓', years: '1732—1809', work: '第 94 號交響曲《驚愕》' },
        { name: '沃夫岡·阿瑪迪斯·莫札特', years: '1756—1791', work: '《費加洛的婚禮》' },
        { name: '路德維希·范·貝多芬', years: '1770—1827', work: '第五號交響曲' }
      ],
      motif: {
        root: 48,
        scale: [0, 2, 4, 5, 7, 9, 11],
        pattern: [0, 4, 2, 4, 5, 4, 2, 0, 4, 7, 5, 4, 2, 4, 5, 4],
        tempo: 104,
        subdivision: 0.54,
        hold: 1.15,
        wave: 'triangle',
        noteGain: 0.06,
        filter: 2600,
        send: 0.18,
        delay: 0.22,
        drone: [-12, -5, 7],
        droneGain: 0.012,
        droneWave: 'sine'
      }
    },
    {
      id: 'romantic',
      idx: '05',
      name: '浪漫',
      en: 'ROMANTIC',
      years: '約 1820 — 1900',
      yearsShort: '1820—1900',
      worldName: '月下夜行',
      worldEn: 'NOCTURNE',
      kicker: 'THE AGE OF FEELING',
      tagline: '情感的洪流',
      accent: '#ff9fae',
      accentRgb: '255, 159, 174',
      planet: {
        angle: 116,
        orbit: 1,
        size: 66,
        c1: '#ffc9c2',
        c2: '#c15d6b',
        c3: '#441520',
        glow: 'rgba(255, 140, 150, 0.58)',
        ring: false
      },
      desc: '樂團變大，和聲變厚，個人情感被推到舞台中央。作曲家開始把文學、風景、夢境與民族記憶寫進音樂；半音階像裂縫一樣蔓延，讓穩定的大調世界逐漸鬆動。',
      quote: '「音樂始於語言結束的地方。」',
      quoteBy: '華格納 · 大意',
      traits: ['標題音樂', '擴張的和聲', '個人英雄'],
      branches: [
        {
          tag: 'LIED · 歌曲',
          title: '藝術歌曲',
          text: '鋼琴不只是伴奏，而是詩的氣候、河流與陰影。舒伯特讓一首短歌可以在三分鐘裡完成一次完整的內心旅程。'
        },
        {
          tag: 'SYMPHONIC POEM · 詩',
          title: '交響詩',
          text: '李斯特把文學與繪畫放進管弦樂，讓音樂不再需要曲式標籤。聲音開始說故事，也開始描繪風景。'
        },
        {
          tag: 'MUSIC DRAMA · 戲劇',
          title: '音樂戲劇',
          text: '華格納把歌劇變成連續不斷的樂劇，主導動機像記憶的碎片在樂團裡漂流。觀眾被包圍在一個由聲音建造的神話宇宙中。'
        }
      ],
      tracks: [
        { title: 'Erlkönig, D. 328', composer: '法蘭茲·舒伯特', year: '1815', note: '藝術歌曲', src: null },
        { title: 'Les Préludes, S. 97', composer: '法蘭茲·李斯特', year: '1854', note: '交響詩', src: null },
        { title: 'Tristan: Prelude & Liebestod', fullTitle: 'Tristan und Isolde: Prelude and Liebestod', composer: '理查·華格納', year: '1865', note: '樂劇前奏與愛之死', src: null }
      ],
      composers: [
        { name: '弗雷德里克·蕭邦', years: '1810—1849', work: '《夜曲》作品 9' },
        { name: '理查·華格納', years: '1813—1883', work: '《特里斯坦與伊索爾德》' },
        { name: '彼得·柴可夫斯基', years: '1840—1893', work: '《天鵝湖》' }
      ],
      motif: {
        root: 53,
        scale: [0, 2, 3, 5, 7, 8, 11],
        pattern: [0, 2, 3, 5, 4, 2, 0, 6, 5, 3, 2, 0],
        tempo: 72,
        subdivision: 0.82,
        hold: 1.7,
        wave: 'sawtooth',
        noteGain: 0.04,
        filter: 1150,
        send: 0.36,
        delay: 0.42,
        drone: [-12, -5, 7],
        droneGain: 0.022,
        droneWave: 'triangle'
      }
    },
    {
      id: 'modern',
      idx: '06',
      name: '現代',
      en: 'MODERN',
      years: '約 1900 — 1970',
      yearsShort: '1900—1970',
      worldName: '訊號艙',
      worldEn: 'SIGNAL CHAMBER',
      kicker: 'THE AGE OF FRACTURE',
      tagline: '破碎與重構',
      accent: '#7fe6ff',
      accentRgb: '127, 230, 255',
      planet: {
        angle: 150,
        orbit: 1.1,
        size: 58,
        c1: '#bdf7ff',
        c2: '#3d92b8',
        c3: '#0a2a3d',
        glow: 'rgba(110, 220, 255, 0.62)',
        ring: false
      },
      desc: '錄音、戰爭、機器與城市噪音，讓二十世紀的耳朵徹底改寫。調性被質疑，節奏被重新切割，爵士與世界音樂進入作曲家的視野。舊的引力失效，新的星系在撞擊中生成。',
      quote: '「我沒有寫音樂，我寫的是聲音本身。」',
      quoteBy: '星圖筆記',
      traits: ['無調性', '節奏實驗', '錄音時代'],
      branches: [
        {
          tag: 'IMPRESSIONISM · 印象',
          title: '印象主義',
          text: '德布西讓和弦變成色彩，讓旋律溶解在水面與光線裡。音樂不再描述事件，而是捕捉一瞬間的感官溫度。'
        },
        {
          tag: 'PRIMITIVISM · 原始',
          title: '原始主義',
          text: '史特拉汶斯基用不規則重音與粗礪音塊，把《春之祭》變成一場地震。觀眾在劇院裡騷動，音樂史的地層被掀開。'
        },
        {
          tag: 'TWELVE-TONE · 序列',
          title: '十二音列',
          text: '荀白克把八度內的十二個音排成一列，取消主音的霸權。這是一套新的語法，也是一次對「美」的重新談判。'
        }
      ],
      tracks: [
        { title: "Prélude à l'après-midi d'un faune", composer: '克勞德·德布西', year: '1894', note: '交響詩', src: null },
        { title: 'The Rite of Spring: Adoration', fullTitle: 'The Rite of Spring, Part I: Adoration of the Earth', composer: '伊果·史特拉汶斯基', year: '1913', note: '芭蕾音樂', src: null },
        { title: 'Suite for Piano, Op. 25', fullTitle: 'Suite for Piano, Op. 25: I. Präludium', composer: '阿諾德·荀白克', year: '1923', note: '十二音鋼琴組曲', src: null }
      ],
      composers: [
        { name: '克勞德·德布西', years: '1862—1918', work: '《海》La Mer' },
        { name: '伊果·史特拉汶斯基', years: '1882—1971', work: '《春之祭》' },
        { name: '阿諾德·荀白克', years: '1874—1951', work: '《月迷彼埃羅》' }
      ],
      motif: {
        root: 49,
        scale: [0, 2, 4, 6, 8, 10],
        pattern: [0, 2, 4, 2, 5, 3, 1, 4, 6, 2, 0, 5, 3, 1, 4, 2],
        tempo: 112,
        subdivision: 0.52,
        hold: 1.05,
        wave: 'square',
        noteGain: 0.038,
        filter: 1350,
        send: 0.2,
        delay: 0.18,
        drone: [-12, -5],
        droneGain: 0.012,
        droneWave: 'triangle'
      }
    },
    {
      id: 'contemporary',
      idx: '07',
      name: '當代',
      en: 'CONTEMPORARY',
      years: '1970 — 現在',
      yearsShort: '1970—NOW',
      worldName: '軌道花園',
      worldEn: 'ORBITAL GARDEN',
      kicker: 'THE AGE OF SIGNAL',
      tagline: '無限的迴響',
      accent: '#ae9bff',
      accentRgb: '174, 155, 255',
      planet: {
        angle: 210,
        orbit: 1.22,
        size: 48,
        c1: '#d9c3ff',
        c2: '#5b4bd6',
        c3: '#17104a',
        glow: 'rgba(140, 120, 255, 0.68)',
        ring: true
      },
      desc: '取樣、合成器、串流與遊戲，讓音樂的存在方式徹底改變。極簡主義用重複打開時間，氛圍音樂把空間本身變成樂器，影像配樂則讓聲音與敘事重新纏繞。星系沒有中心，只有不斷發送的訊號。',
      quote: '「每一個聲音，都可以是一座星球。」',
      quoteBy: '星圖筆記',
      traits: ['極簡重複', '電子聲響', '跨域合作'],
      branches: [
        {
          tag: 'MINIMALISM · 極簡',
          title: '極簡主義',
          text: '賴希、菲利普·格拉斯用短小動機的相位錯位，讓重複產生變化。時間不再是一條線，而是一片可以停留的海。'
        },
        {
          tag: 'ELECTRONIC · 電子',
          title: '電子與氛圍',
          text: '合成器把音色變成可被發明的材料；取樣讓過去的聲音重新進入現在的軌道。氛圍音樂則讓聽眾在聲音裡居住，而不是追隨事件。'
        },
        {
          tag: 'SCORE · 影像',
          title: '影像配樂',
          text: '電影與遊戲讓音樂成為世界觀的一部分。坂本龍一、漢斯·季默讓管弦樂與電子聲響並置，替影像製造記憶與重力。'
        }
      ],
      tracks: [
        { title: 'Music for 18 Musicians', composer: '史蒂夫·賴希', year: '1976', note: '極簡主義', src: null },
        { title: 'Music for Airports — 1/1', fullTitle: 'Ambient 1: Music for Airports — 1/1', composer: '布萊恩·伊諾', year: '1978', note: '氛圍音樂', src: null },
        { title: 'Merry Christmas, Mr. Lawrence', composer: '坂本龍一', year: '1983', note: '電影配樂', src: null }
      ],
      composers: [
        { name: '史蒂夫·賴希', years: '1936—', work: '《18 位音樂家的音樂》' },
        { name: '坂本龍一', years: '1952—2023', work: '《Merry Christmas, Mr. Lawrence》' },
        { name: '漢斯·季默', years: '1957—', work: '《星際效應》' }
      ],
      motif: {
        root: 57,
        scale: [0, 2, 3, 5, 7, 9, 10],
        pattern: [0, 2, 4, 6, 4, 2, 5, 4, 7, 5, 4, 2, 0, 4, 2, 5],
        tempo: 84,
        subdivision: 0.7,
        hold: 1.9,
        wave: 'sine',
        noteGain: 0.06,
        filter: 3200,
        send: 0.45,
        delay: 0.44,
        drone: [-12, -5, 7],
        droneGain: 0.018,
        droneWave: 'sine'
      }
    }
  ];

  /* ----------------------------------------------------------
     02. Utilities
     ---------------------------------------------------------- */

  const TAU = Math.PI * 2;
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const lerp = (a, b, t) => a + (b - a) * t;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function gaussian() {
    // Box-Muller, clamped so a single wild value can't break the arms.
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

  function getGeometry(w = window.innerWidth, h = window.innerHeight) {
    if (w < 760) {
      return {
        cx: w * 0.5,
        cy: h * 0.57,
        rx: Math.min(w * 0.33, 220),
        ry: Math.min(h * 0.21, 230)
      };
    }

    if (w < 1080 || h > w * 1.05) {
      const portrait = h > w * 1.05;
      return {
        cx: portrait ? w * 0.5 : w * 0.52,
        cy: portrait ? h * 0.63 : h * 0.64,
        rx: portrait ? Math.min(w * 0.36, 480) : Math.min(w * 0.34, 340),
        ry: portrait ? Math.min(h * 0.2, 280) : Math.min(h * 0.2, 210)
      };
    }

    return {
      cx: w * 0.64,
      cy: h * 0.535,
      rx: Math.min(w * 0.285, 480),
      ry: Math.min(h * 0.3, 290)
    };
  }

  /* ----------------------------------------------------------
     03. Audio engine
     ---------------------------------------------------------- */

  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.master = null;
      this.comp = null;
      this.delay = null;
      this.delayWet = null;
      this.bus = null;
      this.timer = null;
      this.playing = false;
      this.current = null;
      this.loop = 0;
      this.supported = Boolean(window.AudioContext || window.webkitAudioContext);
    }

    midiToFrequency(midi) {
      return 440 * Math.pow(2, (midi - 69) / 12);
    }

    ensure() {
      if (this.ctx) return true;
      if (!this.supported) return false;

      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        const master = ctx.createGain();
        const comp = ctx.createDynamicsCompressor();
        const delay = ctx.createDelay(1.5);
        const feedback = ctx.createGain();
        const delayWet = ctx.createGain();

        master.gain.value = 0.62;
        comp.threshold.value = -20;
        comp.knee.value = 24;
        comp.ratio.value = 8;
        comp.attack.value = 0.004;
        comp.release.value = 0.24;

        delay.delayTime.value = 0.32;
        feedback.gain.value = 0.3;
        delayWet.gain.value = 0.28;

        master.connect(comp);
        comp.connect(ctx.destination);

        delay.connect(feedback);
        feedback.connect(delay);
        delay.connect(delayWet);
        delayWet.connect(comp);

        this.ctx = ctx;
        this.master = master;
        this.comp = comp;
        this.delay = delay;
        this.delayWet = delayWet;
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
      this.loop = 0;

      if (this.delay) {
        this.delay.delayTime.setTargetAtTime(motif.delay || 0.3, this.ctx.currentTime, 0.08);
      }

      const start = () => {
        if (this.playing) this.scheduleLoop();
      };

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().then(start).catch(() => {
          this.playing = false;
        });
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
        const oldBus = this.bus;
        this.bus = null;
        try {
          const now = this.ctx.currentTime;
          oldBus.gain.cancelScheduledValues(now);
          oldBus.gain.setTargetAtTime(0.0001, now, 0.075);
        } catch (error) {
          // The audio graph can be suspended; disconnecting below is enough.
        }
        window.setTimeout(() => {
          try { oldBus.disconnect(); } catch (error) { /* already gone */ }
        }, 550);
      }
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

      if (motif.drone && motif.drone.length) {
        motif.drone.forEach((semitones, index) => {
          this.scheduleDrone(bus, motif.root + semitones, start, total + 0.5, index, motif);
        });
      }

      motif.pattern.forEach((degree, index) => {
        const noteIndex = ((degree % motif.scale.length) + motif.scale.length) % motif.scale.length;
        const midi = motif.root + motif.scale[noteIndex] + (motif.octave || 0);
        const duration = Math.max(0.22, step * motif.hold);
        const velocity = motif.noteGain * (0.84 + Math.random() * 0.24);

        this.scheduleNote(bus, midi, start + index * step, duration, velocity, motif);

        if (index === 0) {
          this.scheduleNote(bus, midi - 12, start, duration * 1.4, motif.noteGain * 0.55, motif);
        }
      });

      // Retire the previous loop bus once its tail has rung out. Without this,
      // every loop would leave a silent gain node connected to the master.
      window.setTimeout(() => {
        if (bus !== this.bus) {
          try { bus.disconnect(); } catch (error) { /* already released */ }
        }
      }, (total + 2) * 1000);

      this.loop += 1;
      this.timer = window.setTimeout(
        () => this.scheduleLoop(),
        Math.max(900, total * 1000 - 90)
      );
    }

    scheduleNote(bus, midi, start, duration, velocity, motif) {
      const ctx = this.ctx;
      const oscillator = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      const send = ctx.createGain();
      const attack = Math.min(0.045, Math.max(0.012, duration * 0.16));

      oscillator.type = motif.wave || 'sine';
      oscillator.frequency.setValueAtTime(this.midiToFrequency(midi), start);
      if (motif.wave === 'sawtooth') oscillator.detune.value = (Math.random() - 0.5) * 7;

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(motif.filter || 1800, start);
      filter.Q.value = 0.55;

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.001, velocity), start + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      send.gain.value = motif.send || 0.2;

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(bus);
      gain.connect(send);
      send.connect(this.delay);

      oscillator.start(start);
      oscillator.stop(start + duration + 0.08);
    }

    scheduleDrone(bus, midi, start, duration, index, motif) {
      const ctx = this.ctx;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const level = (motif.droneGain || 0.018) * (index === 0 ? 1 : 0.72);

      oscillator.type = motif.droneWave || 'sine';
      oscillator.frequency.setValueAtTime(this.midiToFrequency(midi), start);
      oscillator.detune.value = index % 2 === 0 ? -4 : 4;

      filter.type = 'lowpass';
      filter.frequency.value = 720;
      filter.Q.value = 0.4;

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(level, start + 1.1);
      gain.gain.setValueAtTime(level, Math.max(start + 1.2, start + duration - 1.2));
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(bus);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.1);
    }
  }

  /* ----------------------------------------------------------
     04. Galaxy canvas scene
     ---------------------------------------------------------- */

  class GalaxyScene {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.geo = getGeometry(this.w, this.h);
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.paused = false;
      this.spin = 0.4;
      this.last = performance.now();
      this.nextShoot = performance.now() + 7000;
      this.shoot = null;

      this.sprites = this.createSprites();
      this.particles = [];
      this.bgStars = [];
      this.nebula = [];

      this.resize();
      this.tick = this.tick.bind(this);
      requestAnimationFrame(this.tick);
    }

    createSprites() {
      const makeStarSprite = (rgb) => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, `rgba(${rgb}, 1)`);
        gradient.addColorStop(0.08, `rgba(${rgb}, 0.88)`);
        gradient.addColorStop(0.25, `rgba(${rgb}, 0.24)`);
        gradient.addColorStop(0.58, `rgba(${rgb}, 0.055)`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return canvas;
      };

      const makeNebulaSprite = (rgb) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, `rgba(${rgb}, 0.3)`);
        gradient.addColorStop(0.24, `rgba(${rgb}, 0.16)`);
        gradient.addColorStop(0.58, `rgba(${rgb}, 0.045)`);
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
      coreGradient.addColorStop(0, 'rgba(255, 247, 223, 1)');
      coreGradient.addColorStop(0.055, 'rgba(255, 226, 177, 0.95)');
      coreGradient.addColorStop(0.16, 'rgba(255, 184, 142, 0.4)');
      coreGradient.addColorStop(0.34, 'rgba(203, 137, 255, 0.14)');
      coreGradient.addColorStop(0.62, 'rgba(97, 128, 255, 0.05)');
      coreGradient.addColorStop(1, 'rgba(70, 100, 255, 0)');
      coreCtx.fillStyle = coreGradient;
      coreCtx.fillRect(0, 0, 512, 512);

      const dust = document.createElement('canvas');
      dust.width = 256;
      dust.height = 256;
      const dustCtx = dust.getContext('2d');
      const dustGradient = dustCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
      dustGradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      dustGradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.38)');
      dustGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.08)');
      dustGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      dustCtx.fillStyle = dustGradient;
      dustCtx.fillRect(0, 0, 256, 256);

      const disk = document.createElement('canvas');
      disk.width = 512;
      disk.height = 512;
      const diskCtx = disk.getContext('2d');
      const diskGradient = diskCtx.createRadialGradient(256, 256, 0, 256, 256, 256);
      diskGradient.addColorStop(0, 'rgba(224, 205, 255, 0.18)');
      diskGradient.addColorStop(0.22, 'rgba(182, 158, 255, 0.14)');
      diskGradient.addColorStop(0.46, 'rgba(118, 136, 255, 0.08)');
      diskGradient.addColorStop(0.7, 'rgba(74, 151, 220, 0.035)');
      diskGradient.addColorStop(1, 'rgba(60, 100, 220, 0)');
      diskCtx.fillStyle = diskGradient;
      diskCtx.fillRect(0, 0, 512, 512);

      // Cached glowing spiral lanes. Stars stay crisp on top, but these soft
      // bands give the galaxy a continuous, readable grand-design shape.
      const armGlow = document.createElement('canvas');
      armGlow.width = 1024;
      armGlow.height = 1024;
      const armCtx = armGlow.getContext('2d');
      armCtx.translate(512, 512);
      armCtx.globalCompositeOperation = 'lighter';
      armCtx.lineCap = 'round';

      const traceArm = (arm, radius) => {
        armCtx.beginPath();
        for (let step = 0; step <= 90; step += 1) {
          const t = step / 90;
          const theta = arm * Math.PI + t * 3.86;
          const r = 22 + t * radius;
          const x = Math.cos(theta) * r;
          const y = Math.sin(theta) * r;
          if (step === 0) armCtx.moveTo(x, y);
          else armCtx.lineTo(x, y);
        }
      };

      const armPalette = [
        { base: '168, 191, 255', warm: '255, 190, 210' },
        { base: '194, 170, 255', warm: '255, 210, 185' }
      ];

      [0, 1].forEach((arm) => {
        const palette = armPalette[arm];
        [
          { width: 72, alpha: 0.032, blur: 60 },
          { width: 34, alpha: 0.055, blur: 32 },
          { width: 12, alpha: 0.1, blur: 14 }
        ].forEach((pass) => {
          traceArm(arm, 468);
          armCtx.lineWidth = pass.width;
          armCtx.strokeStyle = `rgba(${palette.base}, ${pass.alpha})`;
          armCtx.shadowBlur = pass.blur;
          armCtx.shadowColor = `rgba(${palette.base}, ${pass.alpha * 1.7})`;
          armCtx.stroke();
        });

        // A warmer inner segment helps the arms emerge from the bulge.
        traceArm(arm, 190);
        armCtx.lineWidth = 28;
        armCtx.strokeStyle = `rgba(${palette.warm}, 0.03)`;
        armCtx.shadowBlur = 30;
        armCtx.shadowColor = `rgba(${palette.warm}, 0.08)`;
        armCtx.stroke();

        // Bright star-forming knots along the lane.
        for (let knot = 0; knot < 7; knot += 1) {
          const t = 0.28 + Math.random() * 0.64;
          const theta = arm * Math.PI + t * 3.86;
          const r = 30 + t * 450;
          const x = Math.cos(theta) * r;
          const y = Math.sin(theta) * r;
          const radius = 8 + Math.random() * 18;
          const knotGradient = armCtx.createRadialGradient(x, y, 0, x, y, radius);
          knotGradient.addColorStop(0, `rgba(${palette.base}, 0.28)`);
          knotGradient.addColorStop(0.4, `rgba(${palette.base}, 0.09)`);
          knotGradient.addColorStop(1, `rgba(${palette.base}, 0)`);
          armCtx.fillStyle = knotGradient;
          armCtx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }
      });

      // Soften the cached lanes once, so they read as gas rather than ink.
      const armGlowSoft = document.createElement('canvas');
      armGlowSoft.width = 1024;
      armGlowSoft.height = 1024;
      const softCtx = armGlowSoft.getContext('2d');
      softCtx.filter = 'blur(13px)';
      softCtx.drawImage(armGlow, 0, 0);

      return {
        stars: {
          warm: makeStarSprite('255, 239, 207'),
          rose: makeStarSprite('255, 195, 211'),
          lavender: makeStarSprite('198, 181, 255'),
          ice: makeStarSprite('159, 206, 255'),
          cyan: makeStarSprite('113, 231, 255')
        },
        nebulae: {
          lavender: makeNebulaSprite('169, 134, 255'),
          rose: makeNebulaSprite('255, 144, 185'),
          cyan: makeNebulaSprite('95, 227, 255'),
          amber: makeNebulaSprite('255, 195, 123')
        },
        core,
        dust,
        disk,
        armGlow: armGlowSoft
      };
    }

    resize() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      this.canvas.width = Math.round(this.w * this.dpr);
      this.canvas.height = Math.round(this.h * this.dpr);
      this.canvas.style.width = `${this.w}px`;
      this.canvas.style.height = `${this.h}px`;
      this.geo = getGeometry(this.w, this.h);
      this.radius = this.geo.rx * 1.18;
      this.squash = clamp(this.geo.ry / this.geo.rx, 0.42, 0.76);
      this.buildBackground();
      this.buildGalaxy();
      this.buildNebulae();
    }

    buildBackground() {
      const count = clamp(Math.round((this.w * this.h) / 3300), 130, 420);
      this.bgStars = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        size: Math.random() < 0.88 ? 1 : 1.6,
        alpha: 0.18 + Math.random() * 0.58,
        depth: 0.25 + Math.random() * 0.9,
        phase: Math.random() * TAU,
        speed: 0.0002 + Math.random() * 0.0011,
        cross: index < 14
      }));
    }

    buildGalaxy() {
      const count = Math.round(clamp((this.w * this.h) / 380, 1500, 3200));
      const radius = this.radius;
      const sprite = (key) => this.sprites.stars[key];

      this.particles = [];

      const push = (x, y, size, alpha, key) => {
        this.particles.push({
          x,
          y,
          sprite: sprite(key),
          size,
          alpha,
          delay: Math.random() * 0.38,
          phase: Math.random() * TAU,
          twinkle: 0.00035 + Math.random() * 0.0017,
          drift: 0.74 + Math.random() * 0.36
        });
      };

      // Central bulge
      for (let index = 0; index < count * 0.17; index += 1) {
        const r = Math.pow(Math.random(), 1.5) * radius * 0.28;
        const theta = Math.random() * TAU;
        push(
          Math.cos(theta) * r,
          Math.sin(theta) * r,
          0.5 + Math.random() * 1.45,
          0.26 + Math.random() * 0.44,
          Math.random() < 0.58 ? 'warm' : 'rose'
        );
      }

      // Two broad logarithmic spiral arms.
      for (let index = 0; index < count * 0.69; index += 1) {
        const t = Math.pow(Math.random(), 0.78);
        const r = 34 + t * radius;
        const arm = Math.floor(Math.random() * 2);
        const theta = arm * Math.PI + t * 3.86 + gaussian() * 0.16 * (1 - t * 0.2);
        const spread = gaussian() * (7 + 33 * t);
        const x = Math.cos(theta) * r + Math.cos(theta + Math.PI / 2) * spread;
        const y = Math.sin(theta) * r + Math.sin(theta + Math.PI / 2) * spread;
        const normalized = Math.min(1, Math.hypot(x, y) / radius);

        let key;
        if (normalized < 0.2) key = Math.random() < 0.5 ? 'warm' : 'rose';
        else if (normalized < 0.48) key = Math.random() < 0.48 ? 'rose' : 'lavender';
        else key = Math.random() < 0.42 ? 'ice' : 'cyan';

        push(x, y, 0.45 + Math.random() * 1.55, 0.18 + Math.random() * 0.5, key);
      }

      // Arm tracers: a small population of brighter, tightly aligned stars
      // that lets the eye read the spiral even in a still frame.
      for (let index = 0; index < count * 0.12; index += 1) {
        const t = 0.12 + Math.pow(Math.random(), 0.82) * 0.87;
        const r = 46 + t * radius * 0.98;
        const arm = index % 2;
        const theta = arm * Math.PI + t * 3.86 + gaussian() * 0.04;
        const spread = gaussian() * (2 + 9 * t);
        const x = Math.cos(theta) * r + Math.cos(theta + Math.PI / 2) * spread;
        const y = Math.sin(theta) * r + Math.sin(theta + Math.PI / 2) * spread;
        const key = t < 0.32 ? (Math.random() < 0.5 ? 'rose' : 'lavender') : (Math.random() < 0.55 ? 'ice' : 'cyan');

        push(x, y, 0.95 + Math.random() * 2, 0.34 + Math.random() * 0.42, key);
      }

      // Diffuse inter-arm haze and a faint old-disk population.
      for (let index = 0; index < count * 0.16; index += 1) {
        const r = Math.pow(Math.random(), 0.72) * radius * 1.04;
        const theta = Math.random() * TAU;
        push(
          Math.cos(theta) * r,
          Math.sin(theta) * r,
          0.3 + Math.random() * 0.9,
          0.05 + Math.random() * 0.16,
          Math.random() < 0.55 ? 'lavender' : 'ice'
        );
      }
    }

    buildNebulae() {
      const radius = this.radius;
      this.nebula = [
        {
          sprite: this.sprites.nebulae.amber,
          x: 0,
          y: 0,
          drawSize: radius * 0.6,
          alpha: 0.7,
          phase: 0
        }
      ];

      for (let arm = 0; arm < 2; arm += 1) {
        for (let step = 0; step < 9; step += 1) {
          const t = 0.14 + step * 0.1;
          const r = t * radius;
          const theta = arm * Math.PI + t * 3.86;
          this.nebula.push({
            sprite: (arm + step) % 2 === 0 ? this.sprites.nebulae.cyan : this.sprites.nebulae.lavender,
            x: Math.cos(theta) * r,
            y: Math.sin(theta) * r,
            drawSize: radius * (0.43 - 0.16 * t),
            alpha: 0.16 - 0.07 * t,
            phase: step * 1.7 + arm
          });
        }
        this.nebula.push({
          sprite: this.sprites.nebulae.rose,
          x: Math.cos(arm * Math.PI + 2.3) * radius * 0.42,
          y: Math.sin(arm * Math.PI + 2.3) * radius * 0.42,
          drawSize: radius * 0.38,
          alpha: 0.13,
          phase: arm + 2.2
        });
      }

      // Dark dust lanes are erased from the finished galaxy, not painted on
      // top, so the CSS starfield continues to show through the gaps.
      this.dustLanes = [];
      for (let arm = 0; arm < 2; arm += 1) {
        for (let step = 0; step < 5; step += 1) {
          const t = 0.22 + step * 0.16;
          const r = t * radius * 0.96;
          const theta = arm * Math.PI + t * 3.86 - 0.16;
          const spread = gaussian() * 7;
          this.dustLanes.push({
            x: Math.cos(theta) * r + Math.cos(theta + Math.PI / 2) * spread,
            y: Math.sin(theta) * r + Math.sin(theta + Math.PI / 2) * spread,
            drawSize: radius * (0.19 + 0.05 * t),
            alpha: 0.18 + 0.05 * Math.sin(step * 1.8)
          });
        }
      }
    }

    resetReveal() {
      this.reveal = REDUCED_MOTION ? 1 : 0;
      this.fastReveal = false;
      this.spin = 0.4;
      this.nextShoot = performance.now() + 7000;
      this.shoot = null;
    }

    skipReveal() {
      this.fastReveal = true;
    }

    tick(now) {
      const dt = Math.min(42, Math.max(0, now - this.last));
      this.last = now;

      if (!this.paused) {
        if (this.reveal < 1) {
          this.reveal = Math.min(1, this.reveal + dt / (this.fastReveal ? 360 : 3700));
        }

        if (!REDUCED_MOTION) {
          this.spin += dt * (0.000016 + (1 - this.reveal) * 0.00019);
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
      this.drawShootingStar(now);
    }

    drawBackground(now) {
      if (this.reveal <= 0.001) return;

      const ctx = this.ctx;
      const p = clamp(this.reveal * 3.2, 0, 1);

      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      for (const star of this.bgStars) {
        const twinkle = 0.56 + 0.44 * Math.sin(now * star.speed + star.phase);
        const x = star.x;
        const y = star.y;
        ctx.globalAlpha = p * star.alpha * twinkle;
        ctx.fillStyle = star.cross ? 'rgba(235, 242, 255, 1)' : 'rgba(210, 224, 255, 0.9)';

        if (star.cross) {
          ctx.fillRect(x - 3, y, 6, 0.6);
          ctx.fillRect(x, y - 3, 0.6, 6);
        } else {
          ctx.fillRect(x, y, star.size, star.size);
        }
      }

      ctx.restore();
    }

    drawGalaxy(now) {
      const reveal = this.reveal;
      if (reveal <= 0.001) return;

      const ctx = this.ctx;
      const { cx, cy } = this.geo;

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(cx, cy);
      ctx.scale(1, this.squash);
      ctx.rotate(this.spin);

      // Faint old disk glow, wider than the arms.
      const diskSize = this.radius * 2.75;
      ctx.globalAlpha = reveal * 0.78;
      ctx.drawImage(this.sprites.disk, -diskSize / 2, -diskSize / 2, diskSize, diskSize);

      // Continuous spiral lanes underneath the point stars.
      const armGlowSize = this.radius * 2.18;
      ctx.globalAlpha = reveal * 0.82;
      ctx.drawImage(this.sprites.armGlow, -armGlowSize / 2, -armGlowSize / 2, armGlowSize, armGlowSize);

      // Soft galactic haze
      for (const puff of this.nebula) {
        const alpha = puff.alpha * reveal * (0.76 + 0.24 * Math.sin(now * 0.00008 + (puff.phase || 0)));
        ctx.globalAlpha = alpha;
        ctx.drawImage(
          puff.sprite,
          puff.x - puff.drawSize / 2,
          puff.y - puff.drawSize / 2,
          puff.drawSize,
          puff.drawSize
        );
      }

      // Luminous core
      const coreSize = this.radius * 0.66;
      ctx.globalAlpha = reveal * 0.86;
      ctx.drawImage(this.sprites.core, -coreSize, -coreSize, coreSize * 2, coreSize * 2);

      // Stars condense inward and swirl into place during the overture.
      for (const star of this.particles) {
        const local = clamp((reveal - star.delay) / 0.58, 0, 1);
        if (local <= 0) continue;

        const eased = 1 - Math.pow(1 - local, 3);
        const stretch = 1 + (1 - eased) * 0.95;
        const twinkle = 0.66 + 0.34 * Math.sin(now * star.twinkle + star.phase);
        const alpha = star.alpha * eased * twinkle;
        if (alpha < 0.008) continue;

        const x = star.x * stretch;
        const y = star.y * stretch;
        const diameter = star.size * 8 * (0.62 + 0.38 * eased);

        ctx.globalAlpha = Math.min(0.92, alpha);
        ctx.drawImage(
          star.sprite,
          x - diameter / 2,
          y - diameter / 2,
          diameter,
          diameter
        );
      }

      // Erase soft lanes through the arms. Revealing the darker CSS backdrop
      // between the stars is what gives the spiral its grain and depth.
      if (this.dustLanes && reveal > 0.55) {
        ctx.globalCompositeOperation = 'destination-out';
        for (const lane of this.dustLanes) {
          const laneAlpha = lane.alpha * clamp((reveal - 0.55) / 0.45, 0, 1);
          ctx.globalAlpha = laneAlpha;
          ctx.drawImage(
            this.sprites.dust,
            lane.x - lane.drawSize / 2,
            lane.y - lane.drawSize / 2,
            lane.drawSize,
            lane.drawSize
          );
        }
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 1;
      }

      ctx.restore();
    }

    drawShootingStar(now) {
      if (REDUCED_MOTION || this.reveal < 0.8) return;

      const ctx = this.ctx;

      if (!this.shoot && now > this.nextShoot) {
        this.shoot = {
          x: this.w * (0.22 + Math.random() * 0.62),
          y: this.h * (0.08 + Math.random() * 0.26),
          vx: -(0.34 + Math.random() * 0.22),
          vy: 0.25 + Math.random() * 0.12,
          life: 0
        };
      }

      if (!this.shoot) return;

      const star = this.shoot;
      star.life += 0.016;
      star.x += star.vx * 16;
      star.y += star.vy * 16;

      if (star.life > 1.08 || star.x < -120 || star.y > this.h + 120) {
        this.shoot = null;
        this.nextShoot = now + 5500 + Math.random() * 9000;
        return;
      }

      const opacity = Math.sin(clamp(star.life / 1.08, 0, 1) * Math.PI);
      const tailX = star.x - star.vx * 170;
      const tailY = star.y - star.vy * 170;
      const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(245, 240, 255, ${0.7 * opacity})`);
      gradient.addColorStop(0.2, `rgba(197, 219, 255, ${0.28 * opacity})`);
      gradient.addColorStop(1, 'rgba(197, 219, 255, 0)');

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      ctx.fillStyle = `rgba(255, 250, 238, ${0.8 * opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1.3, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
  }

  /* ----------------------------------------------------------
     05. Planet map / route
     ---------------------------------------------------------- */

  const planetsEl = $('#planets');
  const routeEl = $('#eraRoute');
  const coreEl = $('#core');
  const stageEl = $('#stage');
  const topbarEl = $('#topbar');
  const introEl = $('#intro');
  const introBar = $('#introBar');
  const introStatus = $('#introStatus');
  const skipBtn = $('#skipBtn');
  const replayBtn = $('#replayBtn');
  const brandEl = $('#brand');

  let planetElements = [];
  let layoutPoints = [];

  function createPlanetElements() {
    planetsEl.innerHTML = ERAS.map((era, index) => {
      const planet = era.planet;
      const ring = planet.ring ? '<span class="planet__ring" aria-hidden="true"></span>' : '';
      return `
        <button
          class="planet planet--${era.id}"
          type="button"
          data-era="${era.id}"
          data-index="${index}"
          aria-label="進入${escapeHTML(era.name)}的獨立世界「${escapeHTML(era.worldName)}」，${escapeHTML(era.years)}"
          style="
            --size:${planet.size}px;
            --c1:${planet.c1};
            --c2:${planet.c2};
            --c3:${planet.c3};
            --glow:${planet.glow};
            --enter-delay:${0.1 + index * 0.08}s;
            --float-delay:${-index * 0.85}s;
            --float-time:${7.2 + (index % 3) * 1.4}s;
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
            <span class="planet__num">${era.idx}</span>
            <span class="planet__name">${escapeHTML(era.name)}</span>
            <span class="planet__years">${escapeHTML(era.yearsShort)}</span>
            <span class="planet__world">${escapeHTML(era.worldName)}</span>
          </span>
        </button>
      `;
    }).join('');

    planetElements = $$('.planet', planetsEl);
    planetElements.forEach((element) => {
      element.addEventListener('click', () => {
        const era = ERAS.find((item) => item.id === element.dataset.era);
        if (!era) return;

        if (window.MusicUniverse && typeof window.MusicUniverse.openWorld === 'function') {
          window.MusicUniverse.openWorld(era.id, element);
        } else {
          openEra(era.id, element);
        }
      });
    });
  }

  function smoothPath(points) {
    if (!points.length) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

    for (let index = 0; index < points.length - 1; index += 1) {
      const p0 = points[index - 1] || points[index];
      const p1 = points[index];
      const p2 = points[index + 1];
      const p3 = points[index + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
    }

    return path;
  }

  function layoutScene() {
    const geometry = getGeometry();
    const points = [];

    planetElements.forEach((element, index) => {
      const era = ERAS[index];
      const angle = (era.planet.angle * Math.PI) / 180;
      const x = geometry.cx + Math.cos(angle) * geometry.rx * era.planet.orbit;
      const y = geometry.cy + Math.sin(angle) * geometry.ry * era.planet.orbit;

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      points.push({ x, y });
    });

    coreEl.style.left = `${geometry.cx}px`;
    coreEl.style.top = `${geometry.cy}px`;

    layoutPoints = [{ x: geometry.cx, y: geometry.cy }, ...points];
    routeEl.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    routeEl.setAttribute('width', window.innerWidth);
    routeEl.setAttribute('height', window.innerHeight);

    const path = smoothPath(layoutPoints);
    routeEl.innerHTML = `
      <path class="era-route__soft" d="${path}"></path>
      <path d="${path}"></path>
    `;
  }

  /* ----------------------------------------------------------
     06. Era detail view
     ---------------------------------------------------------- */

  const eraView = $('#eraView');
  const eraContent = $('#eraContent');
  const backBtn = $('#backBtn');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  const prevName = $('#prevName');
  const nextName = $('#nextName');
  const eraIndex = $('#eraIndex');
  const eraEn = $('#eraEn');
  const eraWatermark = $('#eraWatermark');
  const eraKicker = $('#eraKicker');
  const eraName = $('#eraName');
  const eraTagline = $('#eraTagline');
  const eraYears = $('#eraYears');
  const eraDesc = $('#eraDesc');
  const eraQuote = $('#eraQuote');
  const eraTraits = $('#eraTraits');
  const branchList = $('#branchList');
  const branchDetail = $('#branchDetail');
  const branchTag = $('#branchTag');
  const branchTitle = $('#branchTitle');
  const branchText = $('#branchText');
  const composerList = $('#composerList');
  const playerEl = $('#player');
  const playBtn = $('#playBtn');
  const playerTitle = $('#playerTitle');
  const playerMeta = $('#playerMeta');
  const playerStatus = $('#playerStatus');
  const warpEl = $('#warp');

  const audio = new AudioEngine();

  let currentEraIndex = 0;
  let pendingEraIndex = null;
  let eraOpen = false;
  let lastTrigger = null;
  let playerPlaying = false;
  let closingTimer = null;
  let switchTimer = null;
  let activeBranchIndex = 0;

  function renderEra(index, preserveBranch = false) {
    const era = ERAS[index];
    if (!era) return;

    currentEraIndex = index;

    eraView.style.setProperty('--accent', era.accent);
    eraView.style.setProperty('--accent-rgb', era.accentRgb);
    eraView.dataset.era = era.id;

    eraIndex.textContent = era.idx;
    eraEn.textContent = era.en;
    eraWatermark.textContent = era.idx;
    eraKicker.textContent = era.kicker;
    eraName.textContent = era.name;
    eraTagline.textContent = era.tagline;
    eraYears.textContent = era.years;
    eraDesc.textContent = era.desc;
    eraQuote.innerHTML = `<span>${escapeHTML(era.quote)}</span><cite>— ${escapeHTML(era.quoteBy)}</cite>`;
    eraTraits.innerHTML = era.traits.map((trait) => `<li>${escapeHTML(trait)}</li>`).join('');

    composerList.innerHTML = era.composers.map((composer, composerIndex) => `
      <li class="composer">
        <span class="composer__no">0${composerIndex + 1}</span>
        <div>
          <div class="composer__name">${escapeHTML(composer.name)}</div>
          <div class="composer__work">${escapeHTML(composer.work)}</div>
        </div>
        <span class="composer__dates">${escapeHTML(composer.years)}</span>
      </li>
    `).join('');

    renderBranches(era, preserveBranch ? activeBranchIndex : 0);
    renderPlayer(era);
    updateEraNavigation(index);
    stopPlayback();

    document.title = `${era.name} · 音樂宇宙`;
  }

  function renderBranches(era, selectedIndex) {
    const safeIndex = clamp(selectedIndex, 0, era.branches.length - 1);
    activeBranchIndex = safeIndex;

    branchList.innerHTML = era.branches.map((branch, index) => `
      <button
        class="branch"
        type="button"
        role="tab"
        id="branchTab${index}"
        aria-selected="${index === safeIndex}"
        aria-controls="branchDetail"
        tabindex="${index === safeIndex ? 0 : -1}"
        data-branch-index="${index}"
      >
        <span class="branch__no">0${index + 1}</span>
        <span class="branch__name">${escapeHTML(branch.title)}</span>
        <span class="branch__arrow" aria-hidden="true">↗</span>
      </button>
    `).join('');

    branchList.querySelectorAll('.branch').forEach((button) => {
      button.addEventListener('click', () => selectBranch(Number(button.dataset.branchIndex)));
    });

    branchList.onkeydown = handleBranchKeydown;
    updateBranchPanel(era, safeIndex, false);
  }

  function selectBranch(index) {
    const era = ERAS[currentEraIndex];
    if (!era || index < 0 || index >= era.branches.length) return;

    activeBranchIndex = index;
    branchList.querySelectorAll('.branch').forEach((button, buttonIndex) => {
      const selected = buttonIndex === index;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });

    updateBranchPanel(era, index, true);
  }

  function updateBranchPanel(era, index, animate) {
    const branch = era.branches[index];
    if (!branch) return;

    const apply = () => {
      branchTag.textContent = branch.tag;
      branchTitle.textContent = branch.title;
      branchText.textContent = branch.text;
      branchDetail.setAttribute('aria-labelledby', `branchTab${index}`);
      branchDetail.classList.remove('is-swapping');
    };

    if (animate) {
      branchDetail.classList.add('is-swapping');
      window.setTimeout(apply, 150);
    } else {
      apply();
    }
  }

  function handleBranchKeydown(event) {
    const era = ERAS[currentEraIndex];
    if (!era) return;

    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    let targetIndex = activeBranchIndex;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      targetIndex = (activeBranchIndex + 1) % era.branches.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      targetIndex = (activeBranchIndex - 1 + era.branches.length) % era.branches.length;
    } else if (event.key === 'Home') {
      targetIndex = 0;
    } else if (event.key === 'End') {
      targetIndex = era.branches.length - 1;
    }

    selectBranch(targetIndex);
    const nextButton = branchList.querySelector(`[data-branch-index="${targetIndex}"]`);
    if (nextButton) nextButton.focus();
  }

  function renderPlayer(era) {
    const track = era.tracks?.[0];
    playerTitle.textContent = track ? track.title : '歷史曲目';
    playerMeta.textContent = track
      ? `${track.composer} · ${track.year} · ${track.src ? '歷史錄音' : '聲音示意'} / ∞`
      : '曲目資料待補';
    playerEl.classList.remove('is-playing');
    playerStatus.textContent = 'PLAY';
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.setAttribute('aria-label', `播放曲目：${track ? track.title : '歷史曲目'}`);
    playBtn.disabled = false;

    if (!audio.supported) {
      playBtn.disabled = true;
      playerStatus.textContent = 'N/A';
      playerMeta.textContent = '此瀏覽器不支援 Web Audio';
    }
  }

  function setPlayerPlaying(playing) {
    playerPlaying = playing;
    playerEl.classList.toggle('is-playing', playing);
    playerStatus.textContent = playing ? 'PAUSE' : 'PLAY';
    playBtn.setAttribute('aria-pressed', String(playing));
    playBtn.setAttribute('aria-label', playing ? '暫停聲音樣本' : '播放聲音樣本');
  }

  function stopPlayback() {
    audio.stop();
    if (playerPlaying) setPlayerPlaying(false);
  }

  function togglePlayback() {
    if (!audio.supported) return;

    if (playerPlaying) {
      stopPlayback();
      return;
    }

    const era = ERAS[currentEraIndex];
    const started = audio.play(era.motif);
    if (started) {
      setPlayerPlaying(true);
    } else {
      playerStatus.textContent = 'ERROR';
      playerMeta.textContent = '無法啟動音訊引擎';
    }
  }

  function updateEraNavigation(index) {
    const total = ERAS.length;
    const previous = ERAS[(index - 1 + total) % total];
    const next = ERAS[(index + 1) % total];

    prevName.textContent = previous.name;
    nextName.textContent = next.name;
    prevBtn.setAttribute('aria-label', `上一個時代：${previous.name}`);
    nextBtn.setAttribute('aria-label', `下一個時代：${next.name}`);
  }

  function animateWarp(x, y) {
    if (REDUCED_MOTION) return;
    warpEl.style.left = `${x}px`;
    warpEl.style.top = `${y}px`;
    warpEl.classList.remove('is-active');
    void warpEl.offsetWidth;
    warpEl.classList.add('is-active');
  }

  function openEra(eraId, trigger) {
    const index = ERAS.findIndex((era) => era.id === eraId);
    if (index < 0) return;

    if (eraOpen) {
      switchEraTo(index);
      return;
    }

    window.clearTimeout(closingTimer);
    pendingEraIndex = null;
    lastTrigger = trigger || null;

    const rect = trigger ? trigger.getBoundingClientRect() : null;
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    eraView.style.setProperty('--origin-x', `${originX}px`);
    eraView.style.setProperty('--origin-y', `${originY}px`);

    renderEra(index);
    eraView.scrollTop = 0;
    eraView.removeAttribute('inert');
    eraView.setAttribute('aria-hidden', 'false');
    stageEl.setAttribute('inert', '');
    stageEl.setAttribute('aria-hidden', 'true');
    topbarEl.setAttribute('inert', '');
    topbarEl.setAttribute('aria-hidden', 'true');

    eraOpen = true;
    scene.paused = true;
    document.body.classList.add('is-detail');
    document.body.style.overflow = 'hidden';

    animateWarp(originX, originY);

    requestAnimationFrame(() => {
      eraView.classList.add('is-open');
    });

    window.setTimeout(() => {
      if (eraOpen) backBtn.focus({ preventScroll: true });
    }, REDUCED_MOTION ? 40 : 180);
  }

  function closeEra() {
    if (!eraOpen) return;

    eraOpen = false;
    pendingEraIndex = null;
    stopPlayback();
    window.clearTimeout(switchTimer);
    scene.paused = document.hidden;

    eraView.classList.remove('is-open');
    eraView.setAttribute('inert', '');
    document.body.classList.remove('is-detail');
    document.body.style.overflow = '';

    stageEl.removeAttribute('inert');
    stageEl.removeAttribute('aria-hidden');
    topbarEl.removeAttribute('inert');
    topbarEl.removeAttribute('aria-hidden');

    document.title = '音樂宇宙 · Musica Universalis';

    window.clearTimeout(closingTimer);
    closingTimer = window.setTimeout(() => {
      if (eraOpen) return;
      eraView.setAttribute('aria-hidden', 'true');
    }, 950);

    if (lastTrigger && document.contains(lastTrigger)) {
      window.setTimeout(() => {
        if (!eraOpen) lastTrigger.focus({ preventScroll: true });
      }, REDUCED_MOTION ? 60 : 500);
    }
  }

  function switchEraTo(index) {
    const total = ERAS.length;
    const normalized = ((index % total) + total) % total;
    if (normalized === currentEraIndex && pendingEraIndex === null) return;
    if (normalized === pendingEraIndex) return;

    pendingEraIndex = normalized;
    stopPlayback();
    window.clearTimeout(switchTimer);
    eraContent.classList.add('is-switching');
    const nextPlanet = planetElements[normalized];
    if (nextPlanet) lastTrigger = nextPlanet;

    switchTimer = window.setTimeout(() => {
      const targetIndex = pendingEraIndex ?? normalized;
      pendingEraIndex = null;
      renderEra(targetIndex);
      eraView.scrollTop = 0;
      eraContent.classList.remove('is-switching');
      // Refresh the active tab stop without stealing focus from the footer.
      if (branchList.querySelector('.branch[aria-selected="true"]')) {
        branchList.querySelector('.branch[aria-selected="true"]').tabIndex = 0;
      }
    }, REDUCED_MOTION ? 20 : 190);
  }

  function nextEra() {
    switchEraTo((pendingEraIndex ?? currentEraIndex) + 1);
  }

  function previousEra() {
    switchEraTo((pendingEraIndex ?? currentEraIndex) - 1);
  }

  function trapEraFocus(event) {
    if (event.key !== 'Tab') return;

    const focusable = $$(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]',
      eraView
    ).filter((element) => element.offsetParent !== null && element.tabIndex >= 0 && !element.closest('[inert]'));

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

  eraView.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeEra();
      return;
    }

    if (event.key === 'ArrowLeft' && !event.target.closest('.branches')) {
      event.preventDefault();
      previousEra();
      return;
    }

    if (event.key === 'ArrowRight' && !event.target.closest('.branches')) {
      event.preventDefault();
      nextEra();
      return;
    }

    trapEraFocus(event);
  });

  backBtn.addEventListener('click', closeEra);
  prevBtn.addEventListener('click', previousEra);
  nextBtn.addEventListener('click', nextEra);
  playBtn.addEventListener('click', togglePlayback);
  brandEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (eraOpen) closeEra();
  });

  /* ----------------------------------------------------------
     07. Intro overture
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

    document.body.classList.remove('is-ready', 'is-detail');
    document.body.classList.add('is-intro');
    eraOpen = false;

    eraView.classList.remove('is-open');
    eraView.setAttribute('aria-hidden', 'true');
    eraView.setAttribute('inert', '');
    stageEl.setAttribute('inert', '');
    stageEl.setAttribute('aria-hidden', 'true');
    topbarEl.setAttribute('inert', '');
    topbarEl.setAttribute('aria-hidden', 'true');
    scene.paused = document.hidden;

    introEl.style.visibility = 'visible';
    introEl.classList.remove('is-leaving');
    introEl.classList.remove('is-running');
    void introEl.offsetWidth;
    introEl.classList.add('is-running');

    introBar.style.width = '0%';
    setIntroStatus('正在凝聚星塵');
    skipBtn.style.visibility = 'visible';

    introTimers.push(window.setTimeout(() => {
      if (introRunning) setIntroStatus('校準引力場');
    }, 1250));

    introTimers.push(window.setTimeout(() => {
      if (introRunning) setIntroStatus('星圖已成形');
    }, 2850));

    if (instant) {
      scene.skipReveal();
      introBar.style.width = '100%';
      finishIntro({ instant: true, focusStage: false });
      return;
    }

    introProgressTimer = window.setInterval(() => {
      const progress = clamp((performance.now() - introStart) / 3700, 0, 1);
      introBar.style.width = `${(1 - Math.pow(1 - progress, 3)) * 100}%`;
      if (progress >= 1) {
        window.clearInterval(introProgressTimer);
        introProgressTimer = null;
      }
    }, 45);

    introTimers.push(window.setTimeout(() => {
      finishIntro({ focusStage: false });
    }, 3950));
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
    scene.paused = document.hidden;

    // Speed up the star condensation if the user skipped the overture.
    if (options.instant) scene.skipReveal();

    window.setTimeout(() => {
      if (document.body.classList.contains('is-ready')) {
        introEl.style.visibility = 'hidden';
      }
    }, 1000);

    if (options.focusStage) {
      window.setTimeout(() => {
        const firstPlanet = planetElements[0];
        if (firstPlanet) firstPlanet.focus({ preventScroll: true });
      }, REDUCED_MOTION ? 20 : 450);
    }
  }

  skipBtn.addEventListener('click', () => {
    scene.skipReveal();
    finishIntro({ instant: true, focusStage: true });
  });

  replayBtn.addEventListener('click', () => {
    if (eraOpen) closeEra();
    stopPlayback();
    scene.resetReveal();
    introEl.style.visibility = 'visible';
    startIntro();
  });

  document.addEventListener('visibilitychange', () => {
    scene.paused = document.hidden || eraOpen || document.body.classList.contains('is-world');
    if (document.hidden) stopPlayback();
  });

  /* ----------------------------------------------------------
     08. Boot
     ---------------------------------------------------------- */

  const canvas = $('#galaxyCanvas');
  const scene = new GalaxyScene(canvas);

  createPlanetElements();
  layoutScene();

  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      scene.resize();
      layoutScene();
    });
  });

  // When the browser restores this page from the back/forward cache, keep the UI in sync.
  window.addEventListener('pageshow', () => {
    scene.paused = document.hidden || eraOpen || document.body.classList.contains('is-world');
  });

  // The worlds module is additive: if it fails to load, the original era
  // detail view remains available as a fallback.
  window.MusicUniverse = Object.assign(window.MusicUniverse || {}, {
    ERAS,
    audio,
    scene,
    planetElements,
    reduceMotion: REDUCED_MOTION
  });

  if (REDUCED_MOTION) {
    document.body.classList.remove('is-intro');
    document.body.classList.add('is-ready');
    introEl.classList.add('is-leaving');
    introEl.setAttribute('aria-hidden', 'true');
    introEl.style.visibility = 'hidden';
    scene.reveal = 1;
  } else {
    startIntro();
  }
})();
