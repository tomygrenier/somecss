document.addEventListener('DOMContentLoaded', function () {

  // Theme toggle (themes.css)
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    var stored = null;
    try { stored = localStorage.getItem('somecss-theme'); } catch (e) {}
    if (stored) document.documentElement.setAttribute('data-theme', stored);

    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('somecss-theme', next); } catch (e) {}
    });
  }

  // Filter panel toggle, aria-expanded / aria-hidden pairing (states.css)
  var filterToggle = document.getElementById('filter-toggle');
  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      var expanded = filterToggle.getAttribute('aria-expanded') === 'true';
      filterToggle.setAttribute('aria-expanded', String(!expanded));
      var panel = document.getElementById(filterToggle.getAttribute('aria-controls'));
      if (panel) panel.setAttribute('aria-hidden', String(expanded));
    });
  }

  // Modal open/close, aria-hidden driven (states.css)
  document.querySelectorAll('[data-modal-target]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var overlay = document.getElementById(trigger.getAttribute('data-modal-target') + '-overlay');
      if (overlay) overlay.setAttribute('aria-hidden', 'false');
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var overlay = closeBtn.closest('.modal-overlay');
      if (overlay) overlay.setAttribute('aria-hidden', 'true');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) overlay.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.modal-overlay[aria-hidden="false"]').forEach(function (overlay) {
      overlay.setAttribute('aria-hidden', 'true');
    });
  });

  // Search filter over the publications list, drives .is-empty (index.html only)
  var search = document.getElementById('search');
  var list = document.getElementById('publications-list');
  var emptyState = document.getElementById('empty-state');
  if (search && list && emptyState) {
    search.addEventListener('input', function () {
      var query = search.value.trim().toLowerCase();
      var items = list.querySelectorAll('.card');
      var visibleCount = 0;
      items.forEach(function (item) {
        var title = (item.getAttribute('data-title') || '').toLowerCase();
        var match = title.indexOf(query) !== -1;
        item.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      emptyState.setAttribute('aria-hidden', String(visibleCount !== 0));
    });
  }
});
