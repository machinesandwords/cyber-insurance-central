/**
 * nav.js — Shared sidebar navigation
 * cyberinsurancecentral.com
 * Injected into every page. Edit once, updates everywhere.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape/" class="nav-item depth-0">Market overview</a>
      <a href="/landscape/coverage-components/" class="nav-item depth-1">├ Coverage components</a>
      <a href="/landscape/underwriting-requirements/" class="nav-item depth-1">├ Underwriting requirements</a>
      <a href="/landscape/market-conditions/" class="nav-item depth-1">├ Market conditions</a>
      <a href="/landscape/carriers/" class="nav-item depth-1">└ Carriers</a>
    </div>

     <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools/evidence-package-builder/" class="nav-item depth-1">├ Evidence package builder</a>
      <a href="/tools/how-to-compare-cyber-insurance-quotes/" class="nav-item depth-1">├ Evaluating carriers &amp; quotes</a>
      <a href="/guides/evidence-collection-and-packaging/" class="nav-item depth-1">├ Underwriting &amp; controls</a>
      <a href="/guides/renewal-leverage/" class="nav-item depth-1">├ Renewal &amp; ongoing management</a>
      <a href="/guides/incident-response-panel/" class="nav-item depth-1">└ Claims &amp; incidents</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/" class="nav-item depth-0">All guides</a>
      <a href="/guides/who-should-be-in-the-room/" class="nav-item depth-1">├ Getting ready to buy</a>
      <a href="/guides/how-to-compare-cyber-insurance-quotes/" class="nav-item depth-1">├ Evaluating carriers &amp; quotes</a>
      <a href="/guides/evidence-collection-and-packaging/" class="nav-item depth-1">├ Underwriting &amp; controls</a>
      <a href="/guides/renewal-leverage/" class="nav-item depth-1">├ Renewal &amp; ongoing management</a>
      <a href="/guides/incident-response-panel/" class="nav-item depth-1">└ Claims &amp; incidents</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">About</div>
      <a href="/about/" class="nav-item depth-0">About this site</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/#stay-informed" class="nav-item depth-0 nav-subscribe">Stay up to date on changes that impact your business&rarr;</a>
    </div>
  `;

  // Inject into element with id="sidebar-nav"
  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;

    // Auto-highlight active link based on current path
    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!link.textContent.includes('more')) {
        if (href === path || (href !== '/' && path.startsWith(href))) {
          link.classList.add('active');
        }
      }
    });
  }

})();