document.addEventListener('DOMContentLoaded', function () {
  var tabs = Array.from(document.querySelectorAll('.stream-tabs__tab'));
  var panels = Array.from(document.querySelectorAll('.stream-level'));
  if (tabs.length === 0) return;

  function activateById(id) {
    var matched = false;
    tabs.forEach(function (tab) {
      var active = tab.dataset.id === id;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      if (active) matched = true;
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.id !== id;
    });
    return matched;
  }

  var hash = location.hash.replace('#', '');
  var defaultId = tabs.length ? tabs[0].dataset.id : null;
  if (!activateById(hash) && defaultId) activateById(defaultId);

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var id = tab.dataset.id;
      history.replaceState(null, '', '#' + id);
      activateById(id);
    });
  });
});
