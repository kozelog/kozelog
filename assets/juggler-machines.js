/* =============================================
   こぜログ ジャグラーシリーズ 機種データ
   最終更新: 2026-05-17
   フィールド: koyaku1=ブドウ確率, koyaku2=チェリー確率
   ============================================= */
var MACHINES = {
  myjug5: {
    name: 'マイジャグラーⅤ', nameEn: 'MY JUGGLER Ⅴ', shortName: 'マイジャグV',
    intro: '2021年12月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:273.1, reg:409.6, rate:0.970, koyaku1:5.89, koyaku2:38.32},
      {s:2, big:270.8, reg:385.5, rate:0.980, koyaku1:5.85, koyaku2:38.29},
      {s:3, big:266.4, reg:336.1, rate:0.999, koyaku1:5.81, koyaku2:37.58},
      {s:4, big:254.0, reg:290.0, rate:1.028, koyaku1:5.77, koyaku2:35.68},
      {s:5, big:240.1, reg:268.6, rate:1.053, koyaku1:5.76, koyaku2:35.69},
      {s:6, big:229.1, reg:229.1, rate:1.094, koyaku1:5.66, koyaku2:35.71}
    ],
    reelData: {
      left:  ['Be','7','R','G','R','G','B','C','G','R','G','7','P','G','R','G','C','B','Be','R','G'],
      mid:   ['R','7','Be','C','P','R','B','G','C','R','Be','G','C','R','B','G','C','R','Be','G','C'],
      right: ['G','7','B','Be','R','G','P','G','Be','R','G','P','Be','R','G','P','Be','R','G','P','Be']
    },
    hasNaiyaku: true
  },
  aimex: {
    name: 'アイムジャグラーEX', nameEn: "I'M JUGGLER EX", shortName: 'アイムEX',
    intro: '2019年10月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:273.1, reg:439.8, rate:0.970, koyaku1:6.49, koyaku2:35.5},
      {s:2, big:269.7, reg:399.6, rate:0.980, koyaku1:6.40, koyaku2:35.5},
      {s:3, big:269.7, reg:331.0, rate:0.995, koyaku1:6.30, koyaku2:35.5},
      {s:4, big:259.0, reg:315.1, rate:1.011, koyaku1:6.15, koyaku2:35.5},
      {s:5, big:259.0, reg:255.0, rate:1.033, koyaku1:6.01, koyaku2:35.5},
      {s:6, big:255.0, reg:255.0, rate:1.055, koyaku1:6.01, koyaku2:35.6}
    ],
    reelData: null, hasNaiyaku: false
  },
  funky2: {
    name: 'ファンキージャグラー2', nameEn: 'FUNKY JUGGLER 2', shortName: 'ファンキー2',
    intro: '2020年12月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:266.4, reg:439.8, rate:0.970, koyaku1:6.50, koyaku2:34.0},
      {s:2, big:259.0, reg:407.1, rate:0.985, koyaku1:6.40, koyaku2:34.0},
      {s:3, big:256.0, reg:366.1, rate:0.998, koyaku1:6.25, koyaku2:33.5},
      {s:4, big:249.2, reg:322.8, rate:1.020, koyaku1:6.15, koyaku2:33.0},
      {s:5, big:240.1, reg:299.3, rate:1.043, koyaku1:6.05, koyaku2:32.5},
      {s:6, big:219.9, reg:262.1, rate:1.090, koyaku1:5.90, koyaku2:32.0}
    ],
    reelData: null, hasNaiyaku: false
  },
  gogo3: {
    name: 'ゴーゴージャグラー3', nameEn: 'GOGO! JUGGLER 3', shortName: 'ゴーゴー3',
    intro: '2022年5月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:259.0, reg:354.2, rate:0.972, koyaku1:6.33, koyaku2:33.0},
      {s:2, big:258.0, reg:332.7, rate:0.982, koyaku1:6.20, koyaku2:33.0},
      {s:3, big:257.0, reg:306.2, rate:0.994, koyaku1:6.15, koyaku2:33.0},
      {s:4, big:254.0, reg:268.6, rate:1.016, koyaku1:6.08, koyaku2:32.8},
      {s:5, big:247.3, reg:247.3, rate:1.038, koyaku1:6.01, koyaku2:32.8},
      {s:6, big:234.9, reg:234.9, rate:1.065, koyaku1:5.96, koyaku2:32.8}
    ],
    reelData: null, hasNaiyaku: false
  },
  happy3: {
    name: 'ハッピージャグラーVIII', nameEn: 'HAPPY JUGGLER V3', shortName: 'ハッピーV3',
    intro: '2022年9月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:273.1, reg:397.2, rate:0.970, koyaku1:6.05, koyaku2:62.1},
      {s:2, big:270.8, reg:362.1, rate:0.981, koyaku1:6.04, koyaku2:61.5},
      {s:3, big:263.2, reg:332.7, rate:0.999, koyaku1:6.02, koyaku2:61.1},
      {s:4, big:254.0, reg:300.6, rate:1.029, koyaku1:5.90, koyaku2:64.5},
      {s:5, big:239.2, reg:273.1, rate:1.058, koyaku1:5.81, koyaku2:64.9},
      {s:6, big:226.0, reg:256.0, rate:1.084, koyaku1:5.75, koyaku2:65.5}
    ],
    reelData: null, hasNaiyaku: false
  },
  girlsss: {
    name: 'ジャグラーガールズSS', nameEn: 'JUGGLER GIRLS SS', shortName: 'ガールズSS',
    intro: '2021年5月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:273.1, reg:381.0, rate:0.970, koyaku1:6.30, koyaku2:33.0},
      {s:2, big:270.8, reg:350.5, rate:0.979, koyaku1:6.20, koyaku2:33.0},
      {s:3, big:260.1, reg:316.6, rate:0.999, koyaku1:6.10, koyaku2:32.5},
      {s:4, big:250.1, reg:281.3, rate:1.021, koyaku1:6.00, koyaku2:32.0},
      {s:5, big:243.6, reg:270.8, rate:1.040, koyaku1:5.90, koyaku2:31.5},
      {s:6, big:226.0, reg:252.1, rate:1.075, koyaku1:5.75, koyaku2:31.0}
    ],
    reelData: null, hasNaiyaku: false
  },
  mr: {
    name: 'ミスタージャグラー', nameEn: 'MISTER JUGGLER', shortName: 'ミスター',
    intro: '2023年6月', bbCoins: 240, rbCoins: 96,
    hasRate2: false,
    koyaku1Label: 'ブドウ確率', koyaku2Label: 'チェリー確率',
    settings: [
      {s:1, big:268.6, reg:374.5, rate:0.970, koyaku1:6.20, koyaku2:33.5},
      {s:2, big:267.5, reg:354.2, rate:0.980, koyaku1:6.10, koyaku2:33.0},
      {s:3, big:260.1, reg:331.0, rate:0.998, koyaku1:6.05, koyaku2:32.5},
      {s:4, big:249.2, reg:291.3, rate:1.027, koyaku1:5.95, koyaku2:32.0},
      {s:5, big:240.9, reg:257.0, rate:1.055, koyaku1:5.85, koyaku2:31.5},
      {s:6, big:237.4, reg:237.4, rate:1.073, koyaku1:5.75, koyaku2:31.0}
    ],
    reelData: null, hasNaiyaku: false
  }
};
