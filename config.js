// ═══════════════════════════════════════════════════════════
// SITE CONFIG — cyberinsurancecentral.com
// Sets CSS variables before page render. Must load before content.
// ═══════════════════════════════════════════════════════════

const SITE = {
  name: "Cyber Insurance Central",
  nameHtml: "Cyber Insurance <span>Central</span>",
  domain: "cyberinsurancecentral.com",
  tagline: "Carrier requirements, coverage comparisons, and underwriting insight for cyber insurance buyers.",
  accent: "#8A6A1E",
  accentDim: "#6E5518",
  accentPale: "#F7F1E3"
};

(function () {
  const root = document.documentElement;
  root.style.setProperty('--accent', SITE.accent);
  root.style.setProperty('--accent-dim', SITE.accentDim);
  root.style.setProperty('--accent-pale', SITE.accentPale);
  document.title = document.title || SITE.name;
})();
