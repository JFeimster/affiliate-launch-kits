# Asset Production Workflow

This workflow defines how partner enablement assets move from source material to deployed resources without creating duplicate source files.

## Workflow

```text
Source material: meeting / transcript / intake form / training doc
        ↓
NotebookLM source-grounded synthesis
        ↓
ChatGPT final asset creation and sharpening
        ↓
Template selected from `templates/`
        ↓
Canonical source asset created or updated when reusable
        ↓
Partner-specific variant generated only when materially customized
        ↓
Markdown source saved in GitHub
        ↓
Notion status tracking and dashboard update
        ↓
Google Drive / local export for printable versions
        ↓
Wix / Gmail / HubSpot publishing or delivery
        ↓
Weekly review and iteration
```

## Source-of-Truth Rule

Markdown source assets live in this repo. Other platforms should receive exports, copies, or generated versions.

Use this hierarchy:

```text
templates/ = blank reusable frameworks
referral-partner-assets/ = canonical audience-specific source assets
scripts/ = canonical reusable scripts
trackers/ = canonical reusable tracker templates
launch-kits/{partner-name}/ = partner-specific variants and launch-specific assets
exports/ = final PDFs, Google Docs, Canva files, and other generated outputs
```

## When to Create Canonical Source Assets

Create or update canonical source assets when the content can support multiple partners.

Examples:

- `referral-partner-assets/bank-managers/one-pager.md`
- `referral-partner-assets/construction/printable-handout.md`
- `scripts/universal-outreach/bank-manager.md`
- `trackers/weekly-activity-tracker.md`

Canonical assets should be Moonshine-branded but partner-neutral, using placeholders such as `[Partner Name]`, `[Partner Application Link]`, `[Partner Phone]`, `[Partner Email]`, and `[QR Code]`.

## When to Create Partner Variants

Create a launch-kit variant only when the asset is materially customized with:

- partner name or contact details
- partner QR/application link
- local market notes
- partner-specific lanes
- custom launch emphasis
- partner-specific outreach tone
- partner-specific audience prioritization

Partner variants live under:

```text
launch-kits/{partner-name}/
```

## Default Asset Sequence

1. Partner profile
2. 30-day launch plan
3. Weekly activity tracker
4. Referral partner one-pagers
5. Outreach scripts
6. Printable handouts
7. Flash-UI prompts
8. Wix booking/event copy
9. HubSpot follow-up/task sequence
10. NotebookLM prompt pack

## Quality Gate

Before an asset is considered complete, confirm:

- It has a clear audience.
- It has a single next action.
- It can be used by a partner without extra explanation.
- It follows the source-to-variant model.
- It avoids unnecessary duplication.
- It has a clean file path and naming convention.
- It avoids universal guarantees around approval, funding, rates, amounts, timing, or income.
- It keeps compliance to one small footer when the asset is a print-ready referral piece.

## Export Rule

Exports are not source-of-truth. PDFs, Google Docs, Canva flyers, Wix pages, and email attachments should be generated from markdown source assets.
