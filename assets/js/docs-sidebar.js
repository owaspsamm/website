document.addEventListener('DOMContentLoaded', function () {
  var sidebarToggle = document.querySelector('.docs__sidebar-toggle');
  var sidebar = document.querySelector('.docs__sidebar');
  var sidebarClose = document.querySelector('.docs__sidebar-close');

  if (sidebarToggle && sidebar) {
    var overlay = document.createElement('div');
    overlay.className = 'docs__overlay';
    document.body.appendChild(overlay);

    function openSidebar() {
      sidebar.classList.add('is-open');
      overlay.classList.add('is-open');
      sidebarToggle.setAttribute('aria-expanded', 'true');
    }
    function closeSidebar() {
      sidebar.classList.remove('is-open');
      overlay.classList.remove('is-open');
      sidebarToggle.setAttribute('aria-expanded', 'false');
    }

    sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
  }

  document.querySelectorAll('.docs-nav__toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.closest('.docs-nav__link')) return;
      e.preventDefault();
      var children = btn.nextElementSibling;
      var isOpen = btn.classList.contains('is-open');
      btn.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (children) children.classList.toggle('is-open');
    });
  });
});
