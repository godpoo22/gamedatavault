/* ══════════════════════════════════════════
   nav.js — 共用導覽列互動
   ══════════════════════════════════════════ */

// ── 自動展開目前所在的選單群組 ──
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;

  // 找出目前路徑對應哪個 game-group，並展開
  document.querySelectorAll('.game-group').forEach(function (group) {
    var links = group.querySelectorAll('a.sub-btn');
    links.forEach(function (link) {
      // 比對路徑結尾（相容不同深度的相對路徑）
      var href = link.getAttribute('href');
      if (!href) return;
      // 取得 href 的檔名部分來比對
      var linkFile = href.split('/').pop();
      var pathFile = path.split('/').pop();
      if (linkFile && pathFile && linkFile === pathFile) {
        // 展開此群組
        var submenu = group.querySelector('.submenu');
        var btn = group.querySelector('.game-btn');
        if (submenu) submenu.classList.add('open');
        if (btn) btn.classList.add('active');
        // 標記目前頁面的 sub-btn
        link.classList.add('active');
      }
    });
  });
});

// ── Lightbox ──
function openLightbox(src, title) {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-title').textContent = title;
  lb.classList.add('open');
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}
