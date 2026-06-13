/* =============================================
   こぜログ 共通JS
   最終更新: 2026-06-03
   ============================================= */

// ===== SVGシンボル定義（全ページ共通・同期inject） =====
var SVG_SYMBOLS_HTML = '<svg style="display:none" xmlns="http://www.w3.org/2000/svg"><defs>'
  + '<filter id="fsym" x="-40%" y="-40%" width="180%" height="180%">'
  + '<feGaussianBlur stdDeviation="1.5" result="blur"/>'
  + '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>'
  + '</filter>'
  /* 赤7 */
  + '<symbol id="sym-7" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#ff2222" stroke-width="1.2"/>'
  + '<text x="24" y="40" font-size="27" font-weight="900" fill="#ff4444" text-anchor="middle" font-family="Arial Black,Impact,sans-serif" filter="url(#fsym)">7</text>'
  + '</symbol>'
  /* BAR */
  + '<symbol id="sym-bar" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#f0c040" stroke-width="1.2"/>'
  + '<text x="24" y="36" font-size="15" font-weight="900" fill="#f0c040" text-anchor="middle" font-family="Arial Black,Impact,sans-serif" filter="url(#fsym)">BAR</text>'
  + '</symbol>'
  /* チェリー */
  + '<symbol id="sym-cherry" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#ff6688" stroke-width="1.2"/>'
  + '<line x1="17" y1="30" x2="24" y2="20" stroke="#22aa44" stroke-width="2" stroke-linecap="round"/>'
  + '<line x1="31" y1="30" x2="24" y2="20" stroke="#22aa44" stroke-width="2" stroke-linecap="round"/>'
  + '<circle cx="17" cy="36" r="7" fill="#cc1133"/>'
  + '<circle cx="31" cy="36" r="7" fill="#cc1133"/>'
  + '<text x="24" y="52" font-size="6.5" fill="#ff88aa" text-anchor="middle" font-family="sans-serif">CHERRY</text>'
  + '</symbol>'
  /* ブドウ */
  + '<symbol id="sym-grape" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#aa88ff" stroke-width="1.2"/>'
  + '<circle cx="16" cy="29" r="7" fill="#7733cc"/>'
  + '<circle cx="32" cy="29" r="7" fill="#7733cc"/>'
  + '<circle cx="24" cy="19" r="7" fill="#7733cc"/>'
  + '<circle cx="24" cy="40" r="7" fill="#5522aa"/>'
  + '<text x="24" y="52" font-size="6.5" fill="#cc88ff" text-anchor="middle" font-family="sans-serif">GRAPE</text>'
  + '</symbol>'
  /* リプレイ */
  + '<symbol id="sym-replay" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#44aaff" stroke-width="1.2"/>'
  + '<circle cx="24" cy="30" r="13" fill="none" stroke="#44aaff" stroke-width="2" filter="url(#fsym)"/>'
  + '<polyline points="24,19 24,30 33,30" stroke="#44aaff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  + '<text x="24" y="51" font-size="6.5" fill="#44aaff" text-anchor="middle" font-family="sans-serif">REPLAY</text>'
  + '</symbol>'
  /* ベル */
  + '<symbol id="sym-bell" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#ffcc44" stroke-width="1.2"/>'
  + '<path d="M24 13 C16 13 12 21 12 30 L36 30 C36 21 32 13 24 13 Z" fill="#ffcc44" filter="url(#fsym)"/>'
  + '<rect x="20" y="30" width="8" height="4" rx="1.5" fill="#cc9900"/>'
  + '<circle cx="24" cy="37" r="3" fill="#cc9900"/>'
  + '<text x="24" y="52" font-size="6.5" fill="#ffcc44" text-anchor="middle" font-family="sans-serif">BELL</text>'
  + '</symbol>'
  /* ピエロ */
  + '<symbol id="sym-clown" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#44ee88" stroke-width="1.2"/>'
  + '<circle cx="24" cy="29" r="12" fill="#0a1a10" stroke="#44ee88" stroke-width="1.5"/>'
  + '<circle cx="20" cy="27" r="2.5" fill="#44ee88"/>'
  + '<circle cx="28" cy="27" r="2.5" fill="#44ee88"/>'
  + '<path d="M19 34 Q24 38 29 34" stroke="#44ee88" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
  + '<circle cx="24" cy="21" r="3" fill="#ff4466"/>'
  + '<text x="24" y="52" font-size="6.5" fill="#44ee88" text-anchor="middle" font-family="sans-serif">PIERROT</text>'
  + '</symbol>'
  /* スイカ（W・S 両キー対応） */
  + '<symbol id="sym-watermelon" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#44cc66" stroke-width="1.2"/>'
  + '<ellipse cx="24" cy="30" rx="14" ry="10" fill="#22aa44"/>'
  + '<ellipse cx="24" cy="30" rx="10" ry="6" fill="#ff4444"/>'
  + '<circle cx="20" cy="30" r="1.5" fill="#111"/>'
  + '<circle cx="25" cy="28" r="1.5" fill="#111"/>'
  + '<circle cx="29" cy="31" r="1.5" fill="#111"/>'
  + '<text x="24" y="52" font-size="6" fill="#44cc66" text-anchor="middle" font-family="sans-serif">SUIKA</text>'
  + '</symbol>'
  + '<symbol id="sym-suika" viewBox="0 0 48 56">'
  + '<rect width="48" height="56" rx="5" fill="#111"/>'
  + '<rect x="2" y="2" width="44" height="52" rx="4" fill="#0a0a18" stroke="#44cc66" stroke-width="1.2"/>'
  + '<ellipse cx="24" cy="30" rx="14" ry="10" fill="#22aa44"/>'
  + '<ellipse cx="24" cy="30" rx="10" ry="6" fill="#ff4444"/>'
  + '<circle cx="20" cy="30" r="1.5" fill="#111"/>'
  + '<circle cx="25" cy="28" r="1.5" fill="#111"/>'
  + '<circle cx="29" cy="31" r="1.5" fill="#111"/>'
  + '<text x="24" y="52" font-size="6" fill="#44cc66" text-anchor="middle" font-family="sans-serif">SUIKA</text>'
  + '</symbol>'
  + '</defs></svg>';
(function() {
  var ph = document.getElementById('svg-symbols-ph');
  if (!ph) return;
  var tmp = document.createElement('div');
  tmp.innerHTML = SVG_SYMBOLS_HTML;
  ph.parentNode.replaceChild(tmp.firstChild, ph);
})();

// ===== 定数 =====
// DIFF_HOURS はページ側で先に定義可能（例: var DIFF_HOURS = [1,3,5,8];）
if (typeof DIFF_HOURS === 'undefined') { var DIFF_HOURS = [3, 6, 12]; }
var RENTAL_COINS = 50; // 50枚/1,000pt 固定
var SETTING_COLORS = {1:'#999', 2:'#5ba0b5', 3:'#4fa880', 4:'#7abb50', 5:'#f5b030', 6:'#f05050'};

// ===== 状態変数 =====
var currentMachineId = null;
if (typeof DIFF_RATES === 'undefined') { var DIFF_RATES = []; }
var REF = [];

// DIFF_RATES 自動正規化
// flat配列 [0.975, 0.99, ...] → [{s:1,rate:0.975}, {s:2,rate:0.99}, ...]
// percentage配列 [97.5, 99.0, ...] → [{s:1,rate:0.975}, ...]
// SETTING_LIST でマッピングカスタマイズ可（例: var SETTING_LIST=[1,2,5,6]）
function normalizeDiffRates() {
  if (!DIFF_RATES || !DIFF_RATES.length) return;
  if (typeof DIFF_RATES[0] === 'object' && DIFF_RATES[0].s !== undefined) return;
  var sl = typeof SETTING_LIST !== 'undefined' ? SETTING_LIST :
    DIFF_RATES.length === 6 ? [1,2,3,4,5,6] :
    DIFF_RATES.length === 5 ? [1,2,4,5,6] :
    DIFF_RATES.length === 4 ? [1,2,5,6] :
    Array.from({length: DIFF_RATES.length}, function(_, i) { return i + 1; });
  DIFF_RATES = DIFF_RATES.map(function(r, i) {
    return { s: sl[i], rate: r > 2 ? r / 100 : r };
  });
}
var selectedExchangeCoins = 50;

// ===== リールシンボルマッピング =====
var REEL_SYM = {
  '7':'sym-7', 'B':'sym-bar', 'C':'sym-cherry', 'G':'sym-grape',
  'R':'sym-replay', 'Be':'sym-bell', 'P':'sym-clown',
  'W':'sym-watermelon', 'S':'sym-suika'
};

// ===== ジャグラー: 機種切替 =====
function setMachine(id) {
  var m = MACHINES[id];
  if (!m) return;
  currentMachineId = id;

  // タブ更新（存在する場合）
  document.querySelectorAll('.machine-tab').forEach(function(t) {
    t.classList.toggle('active', t.id === 'tab-' + id);
  });

  // DIFF_RATES と REF 更新
  DIFF_RATES = m.settings.map(function(st) { return {s: st.s, rate: st.rate}; });
  REF = m.settings.map(function(st, i) {
    return {
      s: st.s,
      bb: st.big,
      rb: st.reg,
      koyaku1: st.koyaku1 || 0,
      koyaku2: st.koyaku2 || 0,
      color: SETTING_COLORS[st.s] || '#999',
      label: '設定' + st.s
    };
  });

  // ヒーロー・パンくず更新
  var set = function(elemId, val) { var el = document.getElementById(elemId); if (el) el.textContent = val; };
  set('breadcrumb-machine', m.name);
  set('hero-machine-name', m.name);
  set('hero-machine-sub', m.nameEn + ' ｜ 北電子（KITADENSHI）');
  set('hero-intro-tag', '導入：' + m.intro);
  var lastIdx = m.settings.length - 1;
  set('hero-rate6', (m.settings[lastIdx].rate * 100).toFixed(1) + '%');
  set('hero-rate1', (m.settings[0].rate * 100).toFixed(1) + '%');

  // データテーブル再描画
  renderBonusTable(m);
  renderKoyakuTable(m);
  renderReels();

  // 機械割セル更新（差枚/pt/5スロ各テーブル）
  m.settings.forEach(function(st) {
    var rateStr = (st.rate * 100).toFixed(1) + '%';
    var cls = st.rate >= 1 ? 'td-pos' : 'td-neg';
    ['dr-', 'ptr-', 'lv-r-'].forEach(function(pfx) {
      var cel = document.getElementById(pfx + st.s);
      if (cel) { cel.textContent = rateStr; cel.className = cls; }
    });
  });

  // ボーナス内訳表示切替
  var nw = document.getElementById('bonus-naiyaku-wrap');
  if (nw) nw.style.display = m.hasNaiyaku ? '' : 'none';

  // 計算更新
  updateDiffTable();
  updatePtTable();
}

// ===== スタンドアロンページ初期化（スマスロ等1機種ページ用）=====
function initPage() {
  var m = MACHINES[currentMachineId];
  if (!m) return;
  DIFF_RATES = m.settings.map(function(st) { return {s: st.s, rate: st.rate}; });
  REF = m.settings.map(function(st) {
    return {
      s: st.s,
      bb: st.big,
      rb: st.reg,
      koyaku1: st.koyaku1 || 0,
      koyaku2: st.koyaku2 || 0,
      color: SETTING_COLORS[st.s] || '#999',
      label: '設定' + st.s
    };
  });
  // 機械割セル更新（差枚/pt/5スロ各テーブル）
  m.settings.forEach(function(st) {
    var rateStr = (st.rate * 100).toFixed(1) + '%';
    var cls = st.rate >= 1 ? 'td-pos' : 'td-neg';
    ['dr-', 'ptr-', 'lv-r-'].forEach(function(pfx) {
      var cel = document.getElementById(pfx + st.s);
      if (cel) { cel.textContent = rateStr; cel.className = cls; }
    });
  });
  renderBonusTable(m);
  renderKoyakuTable(m);
  renderReels();
  updateDiffTable();
  updatePtTable();
}

// ===== ボーナステーブル描画 =====
function renderBonusTable(m) {
  var tb = document.getElementById('bonus-tbl-body');
  if (!tb) return;
  tb.innerHTML = m.settings.map(function(st) {
    var comb = 1 / (1 / st.big + 1 / st.reg);
    var cls = st.rate >= 1 ? 'td-pos' : 'td-neg';
    var row = '<tr><td class="s-num s' + st.s + '">' + st.s + '</td>'
      + '<td>1/' + st.big.toFixed(1) + '</td>'
      + '<td>1/' + st.reg.toFixed(1) + '</td>'
      + '<td>1/' + comb.toFixed(1) + '</td>'
      + '<td class="' + cls + '">' + (st.rate * 100).toFixed(1) + '%</td>';
    if (m.hasRate2 && st.rate2) {
      row += '<td class="' + cls + '">' + (st.rate2 * 100).toFixed(1) + '%</td>';
    }
    row += '</tr>';
    return row;
  }).join('');
}

// ===== 小役テーブル描画 =====
function renderKoyakuTable(m) {
  var tb = document.getElementById('koyaku-tbl-body');
  if (!tb) return;
  tb.innerHTML = m.settings.map(function(st) {
    return '<tr><td class="s-num s' + st.s + '">' + st.s + '</td>'
      + '<td>1/' + (st.koyaku1 || 0).toFixed(2) + '</td>'
      + '<td>1/' + (st.koyaku2 || 0).toFixed(2) + '</td></tr>';
  }).join('');
}

// ===== リール描画 =====
function renderReels() {
  var wrap = document.getElementById('reel-strip-wrap');
  if (!wrap) return;
  var m = MACHINES[currentMachineId];
  if (!m || !m.reelData) {
    wrap.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text2);font-size:14px;">リール配列データは準備中です</div>';
    return;
  }
  var rd = m.reelData;
  var cols = [
    {label: '左リール', data: rd.left},
    {label: '中リール', data: rd.mid},
    {label: '右リール', data: rd.right}
  ];
  var html = '';
  cols.forEach(function(col) {
    html += '<div class="reel-strip"><div class="reel-strip-label">' + col.label + '</div>';
    col.data.forEach(function(sym, i) {
      var symId = REEL_SYM[sym] || 'sym-grape';
      html += '<div class="reel-row"><span class="reel-num">' + (i + 1) + '</span>'
            + '<svg class="slot-icon"><use href="#' + symId + '"/></svg></div>';
    });
    html += '</div>';
  });
  wrap.innerHTML = html;
}

// ===== 差枚数テーブル =====
function updateDiffTable() {
  normalizeDiffRates();
  if (!DIFF_RATES || !DIFF_RATES.length) return;
  var rpm = parseFloat(document.getElementById('rpm-input').value) || 750;
  rpm = Math.max(100, Math.min(1200, rpm));
  updatePtTable();
  if (document.getElementById('acc-lowdenom-body') &&
      document.getElementById('acc-lowdenom-body').classList.contains('open')) {
    updateLowDenom();
  }

  DIFF_HOURS.forEach(function(h) {
    var el = document.getElementById('diff-h' + h + '-label');
    if (el) el.textContent = h + '時間（約' + Math.round(rpm * h).toLocaleString() + 'G）';
  });

  DIFF_RATES.forEach(function(row) {
    var rateStr = (row.rate * 100).toFixed(1) + '%';
    var rateCls = row.rate >= 1 ? 'td-pos' : 'td-neg';
    var drEl = document.getElementById('dr-' + row.s);
    if (drEl) { drEl.textContent = rateStr; drEl.className = rateCls; }

    DIFF_HOURS.forEach(function(h) {
      var diff = Math.round(rpm * h * 3 * (row.rate - 1));
      var el = document.getElementById('d-' + row.s + '-' + h);
      if (!el) return;
      var isPos = diff >= 0;
      el.textContent = (isPos ? '+' : '−') + Math.abs(diff).toLocaleString() + '枚';
      el.className = isPos ? 'td-pos' : 'td-neg';
    });
  });
}

function setRpm(val) {
  document.getElementById('rpm-input').value = val;
  updateDiffTable();
}

// ===== 交換レート選択 =====
function selectRate(coins) {
  selectedExchangeCoins = coins;
  document.querySelectorAll('#rate-btn-group .rate-btn').forEach(function(btn) {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-coins')) === coins);
  });
  document.getElementById('custom-rate-wrap').classList.remove('show');
  var labels = {
    50: '等価（50枚 / 1,000pt）',
    51: '5.1枚交換（51枚 / 1,000pt）',
    52: '5.2枚交換（52枚 / 1,000pt）',
    55: '5.5枚交換（55枚 / 1,000pt）',
    60: '6枚交換（60枚 / 1,000pt）'
  };
  var labelEl = document.getElementById('pt-rate-label');
  if (labelEl) labelEl.textContent = '交換レート：' + (labels[coins] || coins + '枚交換（' + coins + '枚 / 1,000pt）');
  updatePtTable();
  var lv = document.getElementById('acc-lowdenom-body');
  if (lv && lv.classList.contains('open')) updateLowDenom();
}

function selectCustomRate() {
  document.querySelectorAll('#rate-btn-group .rate-btn').forEach(function(btn) { btn.classList.remove('active'); });
  document.getElementById('rate-btn-custom').classList.add('active');
  document.getElementById('custom-rate-wrap').classList.add('show');
  applyCustomRate();
}

function applyCustomRate() {
  var val = parseFloat(document.getElementById('custom-rate-input').value);
  if (!val || val <= 0) return;
  selectedExchangeCoins = Math.round(val * 10);
  var labelEl = document.getElementById('pt-rate-label');
  if (labelEl) labelEl.textContent = '交換レート：' + val.toFixed(1) + '枚交換（' + selectedExchangeCoins + '枚 / 1,000pt）';
  updatePtTable();
  var lv = document.getElementById('acc-lowdenom-body');
  if (lv && lv.classList.contains('open')) updateLowDenom();
}

// ===== pt換算テーブル（20スロ）=====
function updatePtTable() {
  if (!DIFF_RATES || !DIFF_RATES.length) return;
  var rpm = parseFloat(document.getElementById('rpm-input').value) || 750;
  var exchPtPerCoin = 1000 / selectedExchangeCoins;
  var rentalPtPerCoin = 1000 / RENTAL_COINS; // 20pt固定

  DIFF_HOURS.forEach(function(h) {
    var el = document.getElementById('pt-h' + h + '-label');
    if (el) el.textContent = h + '時間（約' + Math.round(rpm * h).toLocaleString() + 'G）';
  });

  DIFF_RATES.forEach(function(row) {
    var rateStr = (row.rate * 100).toFixed(1) + '%';
    var rateCls = row.rate >= 1 ? 'td-pos' : 'td-neg';
    var ptrEl = document.getElementById('ptr-' + row.s);
    if (ptrEl) { ptrEl.textContent = rateStr; ptrEl.className = rateCls; }

    DIFF_HOURS.forEach(function(h) {
      var coinsIn = rpm * h * 3;
      var pt = Math.round(coinsIn * (row.rate * exchPtPerCoin - rentalPtPerCoin) / 10) * 10;
      var el = document.getElementById('pt-' + row.s + '-' + h);
      if (!el) return;
      el.textContent = (pt >= 0 ? '+' : '−') + Math.abs(pt).toLocaleString() + 'pt';
      el.className = pt >= 0 ? 'td-pos' : 'td-neg';
    });
  });
}

// ===== 5スロpt換算 =====
function updateLowDenom() {
  var rpm = parseFloat(document.getElementById('rpm-input').value) || 750;
  // 5スロ：コイン単価は20スロの1/4、交換レート比率は同じ
  var exchPtPerCoin = 1000 / selectedExchangeCoins / 4;
  var rentalPtPerCoin = 5; // 5pt/coin固定

  DIFF_HOURS.forEach(function(h) {
    var el = document.getElementById('lv-h' + h + '-label');
    if (el) el.textContent = h + '時間（約' + Math.round(rpm * h).toLocaleString() + 'G）';
  });

  DIFF_RATES.forEach(function(row) {
    DIFF_HOURS.forEach(function(h) {
      var coinsIn = rpm * h * 3;
      var pt = Math.round(coinsIn * (row.rate * exchPtPerCoin - rentalPtPerCoin) / 10) * 10;
      var el = document.getElementById('lv-' + row.s + '-' + h);
      if (!el) return;
      el.textContent = (pt >= 0 ? '+' : '−') + Math.abs(pt).toLocaleString() + 'pt';
      el.className = pt >= 0 ? 'td-pos' : 'td-neg';
    });
  });
}

// ===== 設定推定ツール =====
function calcSetting() {
  var el = function(id) { var e = document.getElementById(id); return e ? parseFloat(e.value) || 0 : 0; };
  var games   = el('t-games');
  var bbCnt   = el('t-bb');
  var rbCnt   = el('t-rb');
  var koyaku1 = el('t-koyaku1');
  var koyaku2 = el('t-koyaku2');

  if (games < 100 || (bbCnt === 0 && rbCnt === 0)) {
    alert('消化ゲーム数とBB/RB回数を入力してください。');
    return;
  }

  var obsBB  = bbCnt   > 0 ? games / bbCnt   : null;
  var obsRB  = rbCnt   > 0 ? games / rbCnt   : null;
  var obsK1  = koyaku1 > 0 ? games / koyaku1 : null;
  var obsK2  = koyaku2 > 0 ? games / koyaku2 : null;

  function score(obs, ref, sigma) {
    if (!obs) return 1;
    var dev = (obs - ref) / ref;
    return Math.exp(-(dev * dev) / (2 * sigma * sigma));
  }

  var raw = REF.map(function(r) {
    var s = 1, w = 0;
    if (obsBB) { s *= Math.pow(score(obsBB, r.bb, 0.15), 2.5); w += 2.5; }
    if (obsRB) { s *= Math.pow(score(obsRB, r.rb, 0.12), 4.0); w += 4.0; }
    if (obsK1) { s *= Math.pow(score(obsK1, r.koyaku1, 0.04), 2.5); w += 2.5; }
    if (obsK2) { s *= Math.pow(score(obsK2, r.koyaku2, 0.06), 1.0); w += 1.0; }
    return {s: Math.pow(s, 1 / (w || 1)), ref: r};
  });

  var total = raw.reduce(function(a, b) { return a + b.s; }, 0);
  var pcts  = raw.map(function(x) { return Math.round((x.s / total) * 1000) / 10; });

  // 広告枠を表示 → 結果を表示
  var adSlot = document.getElementById('ad-slot-tool');
  if (adSlot) adSlot.style.display = 'block';

  document.getElementById('result-area').style.display = 'block';
  pcts.forEach(function(pct, i) {
    var r   = REF[i];
    var el  = document.getElementById('bar-s' + r.s);
    if (!el) return;
    var txt = pct >= 7 ? pct + '%' : '';
    el.innerHTML =
      '<div class="rb-head"><span style="color:' + r.color + '">' + r.label + '</span><span>' + pct + '%</span></div>' +
      '<div class="bar-bg"><div class="bar-fill" style="width:' + pct + '%;background:' + r.color + '">' + txt + '</div></div>';
  });

  // 広告枠までスクロール（広告→結果の順に見える）
  var scrollTarget = adSlot && adSlot.style.display !== 'none' ? adSlot : document.getElementById('result-area');
  scrollTarget.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}

// ===== ナビゲーション =====
function toggleNav() {
  var open = document.getElementById('nav-drawer').classList.toggle('open');
  document.getElementById('nav-overlay').classList.toggle('open', open);
  var fab = document.getElementById('fab-toc');
  if (fab) { fab.style.transform = open ? 'scale(0.9)' : ''; fab.style.borderColor = open ? 'var(--text2)' : 'var(--gold)'; }
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeNav() {
  document.getElementById('nav-drawer').classList.remove('open');
  document.getElementById('nav-overlay').classList.remove('open');
  var fab = document.getElementById('fab-toc');
  if (fab) { fab.style.transform = ''; fab.style.borderColor = 'var(--gold)'; }
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeNav(); });

// ===== コンポーネント読み込み（ヘッダー・フッター共通化）=====
function loadComponents(base) {
  [
    { id: 'site-header-ph', file: 'header.html' },
    { id: 'site-footer-ph', file: 'footer.html' }
  ].forEach(function(c) {
    var el = document.getElementById(c.id);
    if (!el) return;
    fetch(base + c.file)
      .then(function(r) { return r.text(); })
      .then(function(html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var parent = el.parentNode;
        while (tmp.firstChild) parent.insertBefore(tmp.firstChild, el);
        parent.removeChild(el);
      })
      .catch(function() {});
  });
}

// ===== 広告枠 自動挿入 =====
function injectAdSlots() {
  // ① スペック下の広告枠
  var spec = document.getElementById('spec');
  if (spec) {
    var adSpec = document.createElement('div');
    adSpec.className = 'ad-slot';
    adSpec.id = 'ad-slot-spec';
    adSpec.innerHTML = '';
    spec.parentNode.insertBefore(adSpec, spec.nextSibling);
  }

  // ② 推定ツール結果前の広告枠（ボタン押下まで非表示）
  var resultArea = document.getElementById('result-area');
  if (resultArea) {
    var adTool = document.createElement('div');
    adTool.className = 'ad-slot ad-slot-tool';
    adTool.id = 'ad-slot-tool';
    adTool.style.display = 'none';
    adTool.innerHTML = '';
    resultArea.parentNode.insertBefore(adTool, resultArea);
  }
}
document.addEventListener('DOMContentLoaded', injectAdSlots);

// ===== アコーディオン =====
function toggleAccordion(id) {
  var body = document.getElementById(id + '-body');
  var btn  = document.getElementById(id + '-btn');
  if (!body) return;
  var isOpen = body.classList.toggle('open');
  if (btn) { btn.classList.toggle('open', isOpen); btn.setAttribute('aria-expanded', isOpen); }
  if (isOpen) updateLowDenom();
}
