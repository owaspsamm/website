document.addEventListener('DOMContentLoaded', function () {

  // Mobile navigation toggle — syncs aria-expanded with .is-open class
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  // Dropdown navigation — toggle on click, close on outside click
  document.querySelectorAll('.nav-dropdown__toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var dropdown = btn.closest('.nav-dropdown');
      var wasOpen = dropdown.classList.contains('is-open');

      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
        d.querySelector('.nav-dropdown__toggle').setAttribute('aria-expanded', 'false');
      });

      if (!wasOpen) {
        dropdown.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
        d.querySelector('.nav-dropdown__toggle').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Banner icon bump — lifts the icon when hovering over any CTA in a .banner section
  document.querySelectorAll('.banner .btn').forEach(function (btn) {
    var icon = btn.closest('.banner').querySelector('.banner__icon');
    if (!icon) return;
    btn.addEventListener('mouseenter', function () { icon.classList.add('is-bumped'); });
    btn.addEventListener('mouseleave', function () { icon.classList.remove('is-bumped'); });
  });

  // Model nav: persist manually-opened sections across page navigations.
  // The border/highlight is controlled by Hugo's is-ancestor/is-active classes,
  // so having extra sections open is visually unambiguous.
  var NAV_KEY = 'samm-nav-open';

  function getOpenHrefs() {
    try { return JSON.parse(sessionStorage.getItem(NAV_KEY) || '[]'); } catch (e) { return []; }
  }

  function saveOpenHrefs() {
    var open = [];
    document.querySelectorAll('.model-nav .docs-nav__toggle.is-open .docs-nav__link').forEach(function (link) {
      if (link.getAttribute('href')) open.push(link.getAttribute('href'));
    });
    try { sessionStorage.setItem(NAV_KEY, JSON.stringify(open)); } catch (e) {}
  }

  getOpenHrefs().forEach(function (href) {
    document.querySelectorAll('.model-nav .docs-nav__toggle').forEach(function (btn) {
      var link = btn.querySelector('.docs-nav__link');
      if (link && link.getAttribute('href') === href && !btn.classList.contains('is-open')) {
        btn.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        var children = btn.nextElementSibling;
        if (children) children.classList.add('is-open');
      }
    });
  });

  document.querySelectorAll('.model-nav .docs-nav__toggle').forEach(function (btn) {
    btn.addEventListener('click', saveOpenHrefs);
  });

});
