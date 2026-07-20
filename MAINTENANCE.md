# MAINTENANCE.md — cyberinsurancecentral.com

Review every January. Sources publish Q1.

## Statistics used on Why page
(none yet — add source URL, current value, year, and update process here
before the Why page is built)

## Carrier watch list
Data source for carriers.json: AM Best rankings (news.ambest.com), preferred over
aggregator sites (e.g. Beinsure) which showed conflicting 2025/2026 DPW figures
and rankings for the same period. AM Best is the primary rating agency and more
authoritative for this data — if updating, verify against AM Best directly.

Open items before carriers/ page goes live:
- Beazley: Zurich acquisition (£8.1bn, agreed March 2026) is advanced but not
  closed as of July 2026. Cleared: Beazley shareholder vote (April, 99.9% in
  favor), ACCC/Australia (June), EU Commission (July 7). Outstanding: UK PRA
  approval (gating step) and UK court sanction. Completion expected H2 2026.
  Check status again before/at launch and update entry once closed —
  ownership framing will need to change from independent to Zurich-owned.
- At-Bay: fully resolved. At-Bay operates two entities — At-Bay Insurance
  Services LLC (broker/agency) and At-Bay Specialty Insurance Company (its
  own P&C carrier, Delaware-domiciled, licensed in 44 states, acquired from
  XL Insurance America in January 2023, per At-Bay's own press release).
  Entry updated to type "carrier-and-mga" to reflect the dual structure
  accurately. No longer an open item.
- Rankings by direct premium written shift year to year; review this list at
  minimum annually alongside the January MAINTENANCE.md review, sooner if a
  major M&A event (like the Zurich/Beazley deal) closes.

## Market conditions page — landscape/market-conditions/
Dated content, review quarterly, not just annually with the rest of the site.
Current content as of Q1 2026:
- Eighth consecutive quarter of pricing declines (source: [add citation])
- 15-20% premium increase forecast for 2026 vs. continued softening — competing
  forecasts, both attributed in the text (source: [add citations])
- MFA / tested backups / EDR as underwriting prerequisites (source: [add citation])
Update trigger: any quarter where the pricing trend reverses, or a forecast
referenced in the text is confirmed/contradicted by new data.

## Regulatory deadlines
(populate if a regulatory map section is added — framework enforcement
dates, official source URLs)

## Comparisons
Dropped as a planned site section (July 2026). Cyber insurance pricing and
terms are individually underwritten and not publicly comparable the way
software products are, so a head-to-head comparison format would overreach
into claims that can't be responsibly verified. The honest version of "which
carrier fits" is already captured in carriers.json (segment_fit, best_fit
fields). See guide topics below for "how to compare quotes across carriers"
as a guide instead of a comparison page.

## Guide topics tracked (not yet built)
Categories (5), used as the primary filter on the guides directory page:
1. Getting Ready to Buy — evidence collection, buying-committee dynamics,
   first-time purchase questions
2. Evaluating Carriers & Quotes — comparing quotes, carrier fit, broker
   questions (replaces the dropped Comparisons section)
3. Underwriting & Controls — deep dives on individual controls (MFA, EDR,
   backup testing, IR plans), each a long-tail SEO target on its own
4. Renewal & Ongoing Management — what changes at renewal, negotiating
   terms, market timing
5. Claims & Incidents — filing a claim, what to expect, common denial
   reasons

Secondary filter: role (CISO, CFO/Risk, General Counsel, All).

guides.json schema (data layer, same pattern as carriers.json):
```
{
  "id": "guide-slug",
  "title": "Guide Title",
  "category": "getting-ready-to-buy | evaluating-carriers | underwriting-controls | renewal-management | claims-incidents",
  "roles": ["ciso", "cfo-risk", "general-counsel", "all"],
  "dated": false,
  "summary": "One or two sentences for the directory listing.",
  "url": "/guides/slug/",
  "published": "2026-MM-DD"
}
```

Directory page search: client-side fuzzy search (Fuse.js or similar, CDN-loaded,
no backend) plus category/role filters. No Claude API / semantic search planned
unless real evidence emerges that keyword+filter search is failing readers.

Sequencing decision (July 2026): build one guide per category (5 total) before
setting up Cloudflare Worker + MailerLite group for this site. No point standing
up subscriber infrastructure before there's a subscriber-worthy library. Cadence
after initial 5: weekly, per SEO strategy.

Initial 5 guides to write (one per category, finalized July 2026):
1. Getting Ready to Buy → Buying-committee dynamics
2. Evaluating Carriers & Quotes → How to compare quotes across carriers
3. Underwriting & Controls → Evidence collection and packaging for underwriters
4. Renewal & Ongoing Management → What changes at renewal, and how to use
   improved controls as leverage
5. Claims & Incidents → The incident response panel: why your policy may
   already choose your vendors (pre-approved forensics/legal/PR vendor
   panels, and the coverage risk of bringing in an outside vendor without
   carrier approval)

Future guide topic (not yet slotted): what a non-renewal notice actually
means and how much runway a buyer realistically has to shop a replacement.
Likely Renewal & Ongoing Management or Claims & Incidents category.

Future guide topic (not yet slotted): CISO liability insurance — personal
professional liability coverage for CISOs themselves, distinct from the
organization's cyber policy. Timely given SEC v. SolarWinds (CISO charged
personally) and a Hitch Partners survey finding 74% of CISOs lack liability
protection. Genuinely uncrowded topic as of July 2026. Likely its own
category consideration or fits Getting Ready to Buy.

Future guide topic (not yet slotted), Underwriting & Controls: "Automating
Evidence Collection: What You Can Script and What You Still Have to Do."
Companion piece to the evidence-collection guide. Core finding: config
state (MFA enforcement, EDR agent status, backup immutability settings) is
generally automatable via API against the system of record; whether an
activity actually happened (restoration test, IR plan rehearsal, tabletop
exercise) is not automatable after the fact, only capturable/timestamped
once real. Include practical cadence advice — e.g. a recurring quarterly
ticket (Jira or equivalent) to force review of the non-automatable items.
Sets honest scope expectations for the future Evidence Package Builder tool.
TODO once built: add a link back to this guide from the evidence-collection
guide (guide #3, Underwriting & Controls).

Future guide topic (not yet slotted), Claims & Incidents or Underwriting &
Controls: "What to Ask Your Tabletop Exercise Vendor to Deliver, So It
Actually Counts as Underwriting Evidence." Deliberately NOT a generic
"how to run a TTX" guide — that space is crowded (Sygnia, Accenture,
TechTarget, boutique IR advisors) and outside this site's lane. Research
confirms a real market split: larger enterprises typically use an external
facilitator/vendor for TTX; mid-market and smaller orgs more often run it
internally, sometimes with lighter-touch external help. This guide stays
narrowly focused on the underwriting-evidence output bar (dated
documentation, specific participants, specific scenario tied to the actual
environment, written after-action report) — relevant whether the reader
uses a vendor or runs it themselves. Do not expand into general TTX
facilitation advice. TODO once built: add a link back to this guide from
the evidence-collection guide (guide #3, Underwriting & Controls), from the
IR plan paragraph specifically.

Guide #1 (buying-committee dynamics) keyword research, July 2026: no strong
head-term search volume confirmed for "who buys cyber insurance" or
variants. Confirmed as a long-tail, internal-linking-value topic rather than
a volume play — Underwriting Requirements and Market Structure pages should
link into this guide wherever "the buyer" is mentioned. Target phrase:
"who should be involved in buying cyber insurance" / "cyber insurance
buying committee," validated by at least one existing published piece using
similar framing, but not confirmed high-volume.

Note: emerging threats and insurer response (previously tracked) is dated
content — file under Underwriting & Controls or Renewal & Ongoing Management
once written, with its own quarterly review cadence like market-conditions/.

## Guide #3 revision — COMPLETE (July 2026)
Evidence Collection and Packaging expanded from 4 to 7 core categories:
MFA, EDR, Backups, IR Plan (original four) plus Asset Inventory, Vendor/
Third-Party Risk, Security Awareness Training (added). Matches the
Evidence Package Builder tool's scope, which was built first per plan.
Meta description and og:description updated to reflect 7 categories.
Penetration Testing and Compliance Certifications remain tool-only
(optional categories in Evidence Package Builder), not added to this
guide's core prose — they were framed as requested by more sophisticated
carriers rather than universal, so they stay as optional tool fields
rather than guide-level core content.
RACI matrix: researched, NOT confirmed as a common underwriter ask — not
added anywhere.

## Institutional positioning (long-term, tracked July 2026)
Annual "State of Cyber Insurance Underwriting" report as a signature,
citable anchor piece. Year one: synthesis of published sources (AM Best,
NAIC, carrier/regulatory filings), framed honestly as synthesis, not
proprietary research. Start a lightweight annual reader survey this year
(premium changes, requirements cited at renewal, non-renewals/sublimit
cuts) even at low response volume, to build toward real proprietary data
by year two. The Market Conditions and carriers.json watch-field updates,
maintained with real quarterly discipline, become a longitudinal record
over 18-24 months that is hard to replicate retroactively — this
consistency is the actual moat, not guide volume.

Evidence Package Builder identified as the flagship tool candidate —
prioritize for genuine year-over-year reusability (renewal cycle = annual
return visits) over polish on lower-differentiation tools.

## Infrastructure status
- Domain registered: cyberinsurancecentral.com (Porkbun, per network standard —
  confirm transferred to Cloudflare nameservers before Phase 1 setup)
- GitHub repo: NOT YET CREATED — create at github.com/machinesandwords/cyberinsurancecentral
- MailerLite group: NOT YET CREATED
- Cloudflare Worker (newsletter-cyberinsurancecentral): NOT YET DEPLOYED
- Cloudflare Pages project: NOT YET CONNECTED
- newsletter.js WORKER_URL and GROUP_ID are placeholders — update once
  Worker and MailerLite group exist (see Phase 1 checklist in
  AITHORITYSITES-PROCESS.md)

## Content status
- No blog/news section by design decision (July 2026) — Fallout does not
  feed this site; content is separate. Revisit only if bandwidth allows a
  lightweight "Updates" section later.
- Landscape: fully built (overview, market-conditions, coverage-components,
  underwriting-requirements, carriers). Tools, guides: not yet built.
  Comparisons: dropped, see note above.
