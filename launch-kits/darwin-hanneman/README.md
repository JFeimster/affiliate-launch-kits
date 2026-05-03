# Darwin Hanneman Launch Kit

This folder stores the partner-specific launch assets for Darwin Hanneman.

Darwin is the prototype partner launch kit for the Partner Enablement OS. His assets are built around relationship-first commercial funding conversations, practical referral partner enablement, and white-labeled Moonshine Capital funding resources.

## Source-to-Variant Rule

Darwin files are **partner-specific variants** based on reusable patterns and canonical source assets.

Use this hierarchy:

```text
templates/ = blank reusable frameworks
referral-partner-assets/ = canonical audience-specific source assets
scripts/ = canonical reusable scripts
trackers/ = canonical reusable tracker templates
launch-kits/darwin-hanneman/ = Darwin-specific variants and launch assets
exports/ = final PDFs, Google Docs, Canva files, and other generated outputs
```

Future partners should be generated from canonical assets first, then customized only where needed.

Do not duplicate canonical source assets into launch kits unless the partner version includes Darwin-specific contact info, QR/application link, target lanes, local market notes, launch positioning, or custom outreach emphasis.

## Partner Positioning

Darwin Hanneman is positioned as a relationship-first commercial funding partner backed by Moonshine Capital.

His strongest lanes are:

- bank managers
- accountants
- attorneys
- equipment dealers
- trucking businesses
- construction-related businesses
- local business connectors

The core field angle:

> Darwin helps business owners explore funding options when cash flow, bank delays, equipment needs, payroll, receivables, repairs, materials, or growth opportunities create a funding bottleneck.

## Current Launch Objective

Help Darwin create real conversations with referral sources who already know business owners with funding problems.

The first launch-kit goal is not to make Darwin sound like a funding encyclopedia. The goal is to give him usable assets that help referral partners say:

> “I know someone who needs this.”

## Canonical Source Relationship

Some Darwin assets are partner-specific variants based on reusable canonical source assets in `referral-partner-assets/`.

Use canonical assets for future partners, then generate partner-specific variants only when partner personalization is needed.

Examples:

| Canonical Source | Darwin Variant |
|---|---|
| `referral-partner-assets/bank-managers/one-pager.md` | `one-pagers/bank-manager-referral-one-pager.md` |
| `referral-partner-assets/bank-managers/printable-handout.md` | `handouts/printable-bank-manager-handout.md` |
| `referral-partner-assets/accountants/one-pager.md` | `one-pagers/accountant-attorney-referral-one-pager.md` |
| `referral-partner-assets/attorneys/one-pager.md` | `one-pagers/accountant-attorney-referral-one-pager.md` |
| `referral-partner-assets/construction/one-pager.md` | `one-pagers/construction-business-funding-one-pager.md` |
| `referral-partner-assets/construction/printable-handout.md` | `handouts/printable-construction-funding-handout.md` |

## Active Assets

### Launch Plan

- `launch-plan/darwin-30-day-launch-plan.md` — 30-day launch plan for Darwin’s first partner sprint.

### Trackers

- `trackers/darwin-weekly-activity-tracker.md` — weekly activity tracker for conversations, referrals, applications, follow-ups, and next-week priorities.

### Outreach Scripts

- `scripts/10-outreach-scripts.md` — short outreach scripts for bank managers, accountants, attorneys, equipment dealers, trucking groups, construction contacts, referrals, and denied-by-bank prospects.

### One-Pagers

- `one-pagers/bank-manager-referral-one-pager.md` — Darwin-specific bank manager variant.
- `one-pagers/accountant-attorney-referral-one-pager.md` — Darwin-specific accountant / attorney variant.
- `one-pagers/trucking-equipment-finance-one-pager.md` — Darwin-specific trucking / equipment variant.
- `one-pagers/construction-business-funding-one-pager.md` — Darwin-specific construction variant.
- `one-pagers/darwin-general-referral-one-pager.md` — Darwin-specific general referral variant.

### Printable Handouts

- `handouts/printable-bank-manager-handout.md` — Darwin-specific printable bank manager handout.
- `handouts/printable-accountant-attorney-handout.md` — Darwin-specific printable accountant / attorney handout.
- `handouts/printable-trucking-equipment-handout.md` — Darwin-specific printable trucking / equipment handout.
- `handouts/printable-construction-funding-handout.md` — Darwin-specific printable construction handout.

## Planned / Next Assets

- `websites/flash-ui-prompts/darwin-bank-manager-referral-site.md`
- `websites/flash-ui-prompts/darwin-accountant-referral-site.md`
- `websites/flash-ui-prompts/darwin-attorney-referral-site.md`
- `websites/flash-ui-prompts/darwin-equipment-trucking-site.md`
- `bookings-events/weekly-partner-review-meeting.md`
- `bookings-events/referral-partner-intro-call.md`
- `notebooklm/darwin-notebooklm-asset-prompts.md`

## One-Pager Style Standard

Darwin’s one-pagers should follow the updated Partner Enablement OS template style:

- partner-first
- pain-first
- offer-specific
- referral-revenue-aware
- print-ready
- white-labeled under Moonshine Capital
- no backend provider names
- no long internal training sections
- no repeated disclaimers after every offer
- one small compliance footer at the bottom

Strong offer-card examples:

- Fast Working Capital: Up to $25K for Urgent Business Needs
- Equipment & Truck Financing: Keep Cash in the Business
- Invoice & Receivables Funding: Stop Waiting to Get Paid
- Larger Funding Reviews: Up to $2M for Qualified Businesses
- Startup Funding Path: Launch Capital for Qualified Founders
- Business Line Access: Working Capital Without the Weekly Fire Drill

## Storage / Publishing Notes

GitHub is the source-of-truth for markdown asset copy.

Exports are not source-of-truth. Final PDFs, Google Docs, Canva flyers, Wix resource pages, email attachments, and QR-code referral sheets should be generated from markdown source assets.

## Suggested Next Production Block

Next recommended block:

1. Generate canonical outreach scripts by audience.
2. Generate canonical follow-up scripts by audience.
3. Create Flash-UI prompts for referral landing pages.
4. Create Wix booking/event copy for Darwin review calls and referral intro calls.
5. Create NotebookLM prompt pack for ongoing Darwin asset generation.
