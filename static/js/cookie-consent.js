(function () {
  'use strict';

  var STORAGE_KEY = 'samm_consent_v1';
  var banner = document.getElementById('cookie-consent');
  var overlay = document.getElementById('cookie-modal');
  var gaId = banner ? banner.dataset.gaId : null;

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (e) { return null; }
  }

  function saveConsent(analytics) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: analytics, date: new Date().toISOString() }));
  }

  function enableGA() {
    if (!gaId || !window.gtag) return;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', gaId);
  }

  function fireScarfPixels() {
    var pixels = document.querySelectorAll('.scarf-pixel[data-scarf-src]');
    pixels.forEach(function (el) {
      if (el.dataset.scarfFired) return;
      var img = document.createElement('img');
      img.referrerPolicy = 'no-referrer-when-downgrade';
      img.alt = '';
      img.style.display = 'none';
      img.src = el.dataset.scarfSrc;
      el.appendChild(img);
      el.dataset.scarfFired = '1';
    });
  }

  function applyConsent(consent) {
    if (consent && consent.analytics) {
      enableGA();
      fireScarfPixels();
    }
  }

  function showBanner() { if (banner) banner.classList.add('is-visible'); }
  function hideBanner() { if (banner) banner.classList.remove('is-visible'); }
  function showModal() { if (overlay) overlay.classList.add('is-visible'); }
  function hideModal() { if (overlay) overlay.classList.remove('is-visible'); }

  // If already consented, apply and exit
  var existing = getConsent();
  if (existing !== null) {
    // GA can init immediately; Scarf pixels need the DOM
    if (existing.analytics) enableGA();
    document.addEventListener('DOMContentLoaded', function () {
      if (existing.analytics) fireScarfPixels();
    });
    return;
  }

  document.addEventListener('DOMContentLoaded', function () {
    showBanner();

    function acceptAll() {
      saveConsent(true);
      applyConsent({ analytics: true });
      hideBanner();
      hideModal();
    }

    function rejectAll() {
      saveConsent(false);
      hideBanner();
      hideModal();
    }

    document.querySelectorAll('[data-cookie-accept]').forEach(function (el) {
      el.addEventListener('click', acceptAll);
    });

    document.querySelectorAll('[data-cookie-reject]').forEach(function (el) {
      el.addEventListener('click', rejectAll);
    });

    document.querySelectorAll('[data-cookie-manage]').forEach(function (el) {
      el.addEventListener('click', function () {
        var toggle = document.getElementById('cookie-analytics-toggle');
        if (toggle) toggle.checked = false;
        showModal();
      });
    });

    document.querySelectorAll('[data-cookie-modal-close]').forEach(function (el) {
      el.addEventListener('click', hideModal);
    });

    document.querySelectorAll('[data-cookie-save]').forEach(function (el) {
      el.addEventListener('click', function () {
        var toggle = document.getElementById('cookie-analytics-toggle');
        var analytics = toggle ? toggle.checked : false;
        saveConsent(analytics);
        applyConsent({ analytics: analytics });
        hideBanner();
        hideModal();
      });
    });

    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) hideModal();
      });
    }
  });
}());
