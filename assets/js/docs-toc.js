document.addEventListener('DOMContentLoaded', function () {
  var tocLinks = document.querySelectorAll('.docs__toc #TableOfContents a');
  if (tocLinks.length === 0) return;

  var headings = [];
  tocLinks.forEach(function (link) {
    var id = link.getAttribute('href').replace('#', '');
    var heading = document.getElementById(id);
    if (heading) headings.push({ el: heading, link: link });
  });

  // Skills framework: inject BF headings into TOC and color all links.
  // Guard-clauses to no-op on pages without .skills-bf--* headings.
  var bfClasses = ['governance', 'design', 'implementation', 'verification', 'operations'];
  var bfHeadings = document.querySelectorAll('h2[class*="skills-bf--"]');
  if (bfHeadings.length > 0) {
    var tocList = document.querySelector('.docs__toc #TableOfContents > ul > li > ul');
    if (tocList) {
      var tocItems = Array.from(tocList.children);
      var bfMap = [];
      bfHeadings.forEach(function (bfH) {
        var bf = '';
        bfClasses.forEach(function (c) {
          if (bfH.classList.contains('skills-bf--' + c)) bf = c;
        });
        var group = bfH.nextElementSibling;
        while (group && !group.classList.contains('skills-bf-group')) {
          group = group.nextElementSibling;
        }
        var practiceIds = [];
        if (group) {
          group.querySelectorAll('h3[id]').forEach(function (h3) {
            practiceIds.push(h3.id);
          });
        }
        bfMap.push({ id: bfH.id, bf: bf, label: bfH.textContent, practiceIds: practiceIds });
      });

      bfMap.reverse().forEach(function (entry) {
        var firstPracticeItem = null;
        for (var i = 0; i < tocItems.length; i++) {
          var link = tocItems[i].querySelector('a');
          if (link && entry.practiceIds.indexOf(link.getAttribute('href').replace('#', '')) !== -1) {
            firstPracticeItem = tocItems[i];
            break;
          }
        }
        if (firstPracticeItem) {
          var bfItem = document.createElement('li');
          bfItem.className = 'docs__toc-bf';
          var bfLink = document.createElement('a');
          bfLink.href = '#' + entry.id;
          bfLink.textContent = entry.label;
          bfLink.setAttribute('data-bf', entry.bf);
          bfItem.appendChild(bfLink);
          tocList.insertBefore(bfItem, firstPracticeItem);
          var heading = document.getElementById(entry.id);
          if (heading) headings.push({ el: heading, link: bfLink });
        }
        entry.practiceIds.forEach(function (pid) {
          tocItems.forEach(function (item) {
            var link = item.querySelector('a');
            if (link && link.getAttribute('href') === '#' + pid) {
              link.setAttribute('data-bf', entry.bf);
            }
          });
        });
      });
      headings.sort(function (a, b) { return a.el.offsetTop - b.el.offsetTop; });
    }
  }

  function updateActiveTOC() {
    var scrollPos = window.scrollY + 100;
    var active = null;
    headings.forEach(function (h) {
      if (h.el.offsetTop <= scrollPos) active = h;
    });
    tocLinks.forEach(function (l) { l.classList.remove('is-active'); });
    if (active) active.link.classList.add('is-active');
  }

  window.addEventListener('scroll', updateActiveTOC, { passive: true });
  updateActiveTOC();
});
