/* こぜログ サミー機種データ */
var MACHINES = {
  'koukaku-kidotai': {
    name: 'スマスロ 攻殻機動隊',
    nameEn: 'SMART SLOT GHOST IN THE SHELL',
    shortName: '攻殻機動隊',
    intro: '2026年2月2日',
    hasRate2: false,
    koyaku1Label: 'スイカ',
    koyaku2Label: '弱チェリー',
    settings: [
      {s:1, at:336.3, rate:0.979, koyaku1:99.9, koyaku2:99.9},
      {s:2, at:332.0, rate:0.987, koyaku1:99.9, koyaku2:99.9},
      {s:3, at:319.6, rate:1.008, koyaku1:99.9, koyaku2:99.9},
      {s:4, at:298.7, rate:1.049, koyaku1:99.9, koyaku2:99.9},
      {s:5, at:285.8, rate:1.093, koyaku1:99.9, koyaku2:99.9},
      {s:6, at:278.0, rate:1.122, koyaku1:99.9, koyaku2:99.9}
    ],
    reelData: null,
    hasNaiyaku: false
  },
  'kabaneri2': {
    name: 'スマスロ 甲鉄城のカバネリ 海門決戦',
    nameEn: 'SMART SLOT KABANERI OF THE IRON FORTRESS',
    shortName: 'スマスロ カバネリ2',
    intro: '2026年3月2日',
    hasRate2: false,
    koyaku1Label: '下段ベル',
    koyaku2Label: null,
    settings: [
      {s:1, big:254.2, reg:422.5, rate:0.975, koyaku1:121.1, koyaku2:0},
      {s:2, big:242.3, reg:405.9, rate:0.985, koyaku1:114.4, koyaku2:0},
      {s:3, big:239.6, reg:398.7, rate:1.008, koyaku1:112.8, koyaku2:0},
      {s:4, big:214.0, reg:357.2, rate:1.060, koyaku1:106.2, koyaku2:0},
      {s:5, big:203.2, reg:332.6, rate:1.110, koyaku1:104.2, koyaku2:0},
      {s:6, big:195.1, reg:318.5, rate:1.149, koyaku1:99.1,  koyaku2:0}
    ],
    reelData: null,
    hasNaiyaku: false
  },
  'hokuto-tensei2': {
    name: 'スマスロ 北斗の拳 転生の章2',
    nameEn: 'SMART SLOT HOKUTO NO KEN TENSEI NO SHO 2',
    shortName: '北斗転生2',
    intro: '2026年1月',
    hasRate2: false,
    koyaku1Label: 'ベル',
    koyaku2Label: null,
    settings: [
      {s:1, at:366.0, rate:0.976, koyaku1:0, koyaku2:0},
      {s:2, at:345.0, rate:0.986, koyaku1:0, koyaku2:0},
      {s:3, at:327.0, rate:1.005, koyaku1:0, koyaku2:0},
      {s:4, at:309.0, rate:1.033, koyaku1:0, koyaku2:0},
      {s:5, at:293.0, rate:1.080, koyaku1:0, koyaku2:0},
      {s:6, at:273.1, rate:1.149, koyaku1:0, koyaku2:0}
    ],
    reelData: null,
    hasNaiyaku: false
  },
  'isekai-quartet': {
    name: 'A-SLOT+ 異世界かるてっと BT',
    nameEn: 'A-SLOT+ ISEKAI QUARTET BT',
    shortName: '異世界かるてっと',
    intro: '2026年4月',
    hasRate2: true,
    koyaku1Label: 'ベル',
    koyaku2Label: 'スイカ合算',
    settings: [
      {s:1, big:1337.5, reg:107.6, rate:0.979, rate2:0.990, koyaku1:7.0,  koyaku2:45.0},
      {s:2, big:1260.3, reg:106.2, rate:0.999, rate2:1.011, koyaku1:6.7,  koyaku2:39.7},
      {s:5, big:1040.3, reg:97.1,  rate:1.044, rate2:1.057, koyaku1:6.6,  koyaku2:39.0},
      {s:6, big:923.0,  reg:89.2,  rate:1.090, rate2:1.106, koyaku1:6.4,  koyaku2:37.4}
    ],
    reelData: null,
    hasNaiyaku: false
  }
};
