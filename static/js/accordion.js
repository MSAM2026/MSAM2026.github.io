// 印刷時に全アブストラクトを展開
window.addEventListener('beforeprint', function() {
  document.querySelectorAll('.talk-details').forEach(function(d) {
    d.setAttribute('open', '');
  });
});
