document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('.blog-filter');
  var cards = document.querySelectorAll('.blog-card[data-category]');
  if (filters.length === 0) return;

  function apply(cat, updateUrl) {
    filters.forEach(function (f) {
      var active = f.getAttribute('data-category') === cat;
      f.classList.toggle('is-active', active);
      f.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(function (card) {
      if (cat === 'all' || card.getAttribute('data-category') === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    if (updateUrl) {
      var url = new URL(window.location.href);
      if (cat === 'all') {
        url.searchParams.delete('cat');
      } else {
        url.searchParams.set('cat', cat);
      }
      history.replaceState(null, '', url);
    }
  }

  // Initial state: read ?cat= from the URL (defaults to "all")
  var params = new URLSearchParams(window.location.search);
  var initial = params.get('cat') || 'all';
  var hasMatch = Array.from(filters).some(function (f) {
    return f.getAttribute('data-category') === initial;
  });
  apply(hasMatch ? initial : 'all', false);

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-category'), true);
    });
  });

  // Back/forward navigation should re-apply the filter
  window.addEventListener('popstate', function () {
    var params = new URLSearchParams(window.location.search);
    apply(params.get('cat') || 'all', false);
  });
});
