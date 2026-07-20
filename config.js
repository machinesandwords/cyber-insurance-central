// ═══════════════════════════════════════════════════════════
// SITE CONFIG — cyberinsurancecentral.com
// SITE.name/nameHtml/tagline are used by nav.js and other scripts.
// Accent colors are set via inline <style> block in each page's <head>,
// not here — do not re-add setProperty calls for --accent/--accent-dim/
// --accent-pale, that would just redundantly reset what's already set.
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

document.title = document.title || SITE.name;
