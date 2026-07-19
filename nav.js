// ═══════════════════════════════════════════════════════════
// NAV — cyberinsurancecentral.com
// Injects topbar + sidebar. Loads after content, before newsletter.js.
// Live pages only — do not add links to pages that do not exist yet.
// ═══════════════════════════════════════════════════════════

const NAV = [
  {
    section: "Start",
    items: [
      { label: "Home", url: "/", depth: 0 }
    ]
  },
  {
    section: "Landscape",
    items: [
      { label: "Market Overview", url: "/landscape/", depth: 0 },
      { label: "Coverage Components", url: "/landscape/coverage-components/", depth: 1 },
      { label: "Underwriting Requirements", url: "/landscape/underwriting-requirements/", depth: 1 },
      { label: "Market Conditions", url: "/landscape/market-conditions/", depth: 1 },
      { label: "Carriers", url: "/landscape/carriers/", depth: 1 }
    ]
  },
  {
    section: "About",
    items: [
      { label: "About This Site", url: "/about/", depth: 0 }
    ]
  }
];

(function () {
  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '/') || '/';

  function isActive(url) {
    const norm = u => u.replace(/\/$/, '/') || '/';
    return norm(url) === norm(path);
  }

  const topbar = document.createElement('div');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <a href="/" class="topbar-brand">${SITE.nameHtml}</a>
    <div class="topbar-divider"></div>
    <div class="topbar-tagline">${SITE.tagline}</div>
  `;

  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  let sidebarHtml = '';
  NAV.forEach(section => {
    sidebarHtml += `<div class="nav-section">`;
    sidebarHtml += `<div class="nav-section-label">${section.section}</div>`;
    section.items.forEach(item => {
      const activeClass = isActive(item.url) ? ' active' : '';
      sidebarHtml += `<a href="${item.url}" class="nav-item depth-${item.depth}${activeClass}">${item.label}</a>`;
    });
    sidebarHtml += `</div>`;
  });
  sidebar.innerHTML = sidebarHtml;

  document.body.insertBefore(sidebar, document.body.firstChild);
  document.body.insertBefore(topbar, document.body.firstChild);
})();
