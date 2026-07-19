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

## Comparison page notes
(editorial positions established for future carrier comparison pages —
populate as comparisons are written)

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
- Landscape, comparisons, tools, guides: not yet built
