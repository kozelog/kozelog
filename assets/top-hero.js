/* こぜログ TOP hero スロットリールアニメーション
   assets/top-hero.js  ─  ループなし・一発演出 */
(function () {
  'use strict';

  var h1 = document.getElementById('slot-title');
  if (!h1) return;

  /* ランダム文字プール */
  var POOL = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロ0123456789';
  function rndCh() { return POOL[Math.floor(Math.random() * POOL.length)]; }

  function mkReel(id, ch) {
    return '<span class="slot-reel" id="' + id + '"><span class="slot-char">' + ch + '</span></span>';
  }
  function getChar(id) {
    var r = document.getElementById(id);
    return r ? r.querySelector('.slot-char') : null;
  }
  function reflow(el) { return el.offsetHeight; } /* force reflow for animation restart */
  function setAnim(el, anim) {
    el.style.animation = 'none';
    reflow(el);
    el.style.animation = anim;
  }

  /* ================================================================
     スピン
     ================================================================ */
  var timers = {};

  function spin(id) {
    var delay = 70;
    function tick() {
      var c = getChar(id);
      if (!c) return;
      c.textContent = rndCh();
      setAnim(c, 'reel-slide .07s ease-out');
      timers[id] = setTimeout(tick, delay);
    }
    tick();
  }

  function halt(id) {
    clearTimeout(timers[id]);
    delete timers[id];
  }

  /* ================================================================
     スローストップ  factor=減速倍率, steps=コマ数
     ================================================================ */
  function slowStop(id, target, factor, steps, onDone) {
    halt(id);
    var delay = 70;
    var step  = 0;

    function tick() {
      delay = Math.min(delay * factor, 480);
      step++;
      var c = getChar(id);
      if (!c) { if (onDone) onDone(); return; }

      if (step >= steps) {
        c.textContent = target;
        setAnim(c, 'reel-slide .15s ease-out');
        if (onDone) setTimeout(onDone, 160);
        return;
      }
      c.textContent = rndCh();
      var dur = Math.min(delay / 1000, 0.30).toFixed(3);
      setAnim(c, 'reel-slide ' + dur + 's ease-out');
      timers[id] = setTimeout(tick, delay);
    }
    tick();
  }

  /* ================================================================
     ランディング演出
     ================================================================ */

  /* ★☆☆ こ・ぜ・ロ：シアンフラッシュのみ */
  function landSimple(id) {
    var c = getChar(id);
    if (c) setAnim(c, 'char-land .6s ease-out forwards');
  }

  /* ★★☆ 6：バウンス＋スパークル（land-six キーフレーム） */
  function land6(id, onDone) {
    var c = getChar(id);
    if (!c) { if (onDone) onDone(); return; }
    setAnim(c, 'land-six .9s ease-out forwards');
    if (onDone) setTimeout(onDone, 320);
  }

  /* ★★☆ グ：ミニバウンス＋強めフラッシュ（char-land-strong キーフレーム） */
  function landStrong(id, onDone) {
    var c = getChar(id);
    if (!c) { if (onDone) onDone(); return; }
    c.style.transition = '';
    c.style.transform  = '';
    setAnim(c, 'char-land-strong .75s ease-out forwards');
    if (onDone) setTimeout(onDone, 500);
  }

  /* ================================================================
     6 → ログ 展開
       1. r2（6）を scaleX で縮小消去
       2. r2a（ロ）+ r2b（グ）を挿入
       3. r2a を scaleX 展開しランディング
       4. r2b を scaleX 展開しスピン開始 → onDone()
     ================================================================ */
  function expand6toLog(onDone) {
    var r2 = document.getElementById('r2');
    if (!r2) { if (onDone) onDone(); return; }

    r2.style.display    = 'inline-block';
    r2.style.overflow   = 'hidden';
    r2.style.transition = 'transform .17s ease-in, opacity .17s';
    r2.style.transform  = 'scaleX(0)';
    r2.style.opacity    = '0';

    setTimeout(function () {
      /* ロ → グ の順に afterend 挿入（逆順 insert で正順になる） */
      r2.insertAdjacentHTML('afterend', mkReel('r2b', 'グ'));
      r2.insertAdjacentHTML('afterend', mkReel('r2a', 'ロ'));
      r2.parentNode.removeChild(r2);

      var ra = document.getElementById('r2a');
      var rb = document.getElementById('r2b');

      /* 初期: 幅 0 で非表示 */
      if (ra) { ra.style.display = 'inline-block'; ra.style.transform = 'scaleX(0)'; }
      if (rb) { rb.style.display = 'inline-block'; rb.style.transform = 'scaleX(0)'; rb.style.opacity = '0'; }

      /* ロ 展開 */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (ra) {
            ra.style.transition = 'transform .22s ease-out';
            ra.style.transform  = 'scaleX(1)';
          }
          setTimeout(function () { landSimple('r2a'); }, 200);

          /* グ 展開してスピン開始 */
          setTimeout(function () {
            if (rb) {
              rb.style.transition = 'transform .15s ease-out, opacity .1s';
              rb.style.transform  = 'scaleX(1)';
              rb.style.opacity    = '1';
              spin('r2b');
            }
            if (onDone) onDone();
          }, 230);
        });
      });
    }, 180);
  }

  /* ================================================================
     ★★★ リップル波紋
     ================================================================ */
  function fireRipple() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    /* 既存を削除 */
    hero.querySelectorAll('.hero-ripple').forEach(function (el) {
      el.parentNode.removeChild(el);
    });

    /* 3重の波紋（遅延付き） */
    [
      { delay: 0,   opacity: '.9',  borderWidth: '2px' },
      { delay: 155, opacity: '.55', borderWidth: '1.5px' },
      { delay: 310, opacity: '.3',  borderWidth: '1px'  }
    ].forEach(function (cfg) {
      var el = document.createElement('div');
      el.className = 'hero-ripple';
      el.style.animationDelay = cfg.delay + 'ms';
      el.style.opacity        = cfg.opacity;
      el.style.borderWidth    = cfg.borderWidth;
      hero.appendChild(el);
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, cfg.delay + 1000);
    });

    /* タイトル文字を連動グロー */
    h1.querySelectorAll('.slot-char').forEach(function (c) {
      c.style.animation = 'none';
      c.offsetHeight;
      c.style.animation = 'ripple-glow .95s ease-out forwards';
    });
  }

  /* ================================================================
     メインシーケンス（ループなし）
     ================================================================ */
  function run() {
    /* 3リール（こ・ぜ・6）でリセット */
    h1.innerHTML = mkReel('r0', 'こ') + mkReel('r1', 'ぜ') + mkReel('r2', '6');

    spin('r0');
    spin('r1');
    spin('r2');

    /* ── こ 停止（t ≈ 800ms） ── */
    setTimeout(function () {
      slowStop('r0', 'こ', 1.18, 8, function () {
        landSimple('r0');
      });
    }, 800);

    /* ── ぜ 停止（t ≈ 1500ms） ── */
    setTimeout(function () {
      slowStop('r1', 'ぜ', 1.18, 8, function () {
        landSimple('r1');
      });
    }, 1500);

    /* ── 6 停止（t ≈ 2350ms）→ 演出 → ログ展開 → グ停止 → 稲光 ── */
    setTimeout(function () {
      slowStop('r2', '6', 1.22, 10, function () {

        land6('r2', function () {                       /* 6 バウンス＋スパークル */

          setTimeout(function () {                      /* 0.5s 間を置く          */
          expand6toLog(function () {                    /* 6 → ログ 展開          */

            setTimeout(function () {
              slowStop('r2b', 'グ', 1.20, 12, function () {

                landStrong('r2b', function () {         /* グ 強めランディング     */

                  setTimeout(fireRipple, 320);          /* ★★★ リップル波紋（クライマックス） */

                });
              });
            }, 350);

          });
          }, 500);                                      /* /setTimeout 0.5s       */
        });
      });
    }, 2350);
  }

  /* DOM 安定後に開始 */
  setTimeout(run, 350);

})();
