/* こぜログ ミズホ機種データ */
var MACHINES = {
  'million-god-kiseki': {
    name: 'スマスロ ミリオンゴッド-神々の軌跡-',
    nameEn: 'SMART SLOT MILLION GOD -GODS TRAJECTORY-',
    shortName: 'ミリオンゴッド軌跡',
    intro: '2026年4月20日',
    hasRate2: false,
    koyaku1Label: null,
    koyaku2Label: null,
    /* 偶数設定優遇：設定2>設定4>設定6 / 奇数：GGストック系で優遇 */
    settings: [
      {s:1, at:533.0, rate:0.972, koyaku1:0, koyaku2:0},
      {s:2, at:420.0, rate:0.991, koyaku1:0, koyaku2:0},
      {s:3, at:496.0, rate:1.021, koyaku1:0, koyaku2:0},
      {s:4, at:338.0, rate:1.069, koyaku1:0, koyaku2:0},
      {s:5, at:455.0, rate:1.117, koyaku1:0, koyaku2:0},
      {s:6, at:295.0, rate:1.146, koyaku1:0, koyaku2:0}
    ],
    reelData: null,
    hasNaiyaku: false
  }
};
