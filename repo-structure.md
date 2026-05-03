# Partner Enablement OS Repo Structure

This document defines the complete recommended structure for `partner-enablement-os`.

The repo is designed as the source-of-truth vault for partner onboarding, launch kits, referral resources, scripts, trackers, prompt chains, handouts, website prompts, and platform publishing workflows.

## Complete Structure

```text
partner-enablement-os/
│
├── README.md
├── ecosystem-map.md
├── repo-structure.md
├── enablement-index.md
├── asset-production-workflow.md
├── prompt-chain.md
├── changelog.md
│
├── launch-kits/
│   ├── darwin-hanneman/
│   │   ├── README.md
│   │   ├── partner-profile.md
│   │   ├── launch-kit-index.md
│   │   ├── meeting-notes/
│   │   │   ├── fathom-summary.md
│   │   │   ├── transcript-summary.md
│   │   │   ├── key-insights.md
│   │   │   └── action-items.md
│   │   ├── launch-plan/
│   │   │   ├── darwin-30-day-launch-plan.md
│   │   │   ├── darwin-30-day-launch-plan-print-version.md
│   │   │   └── darwin-month-2-scale-plan.md
│   │   ├── trackers/
│   │   │   ├── darwin-weekly-activity-tracker.md
│   │   │   ├── darwin-daily-outreach-tracker.md
│   │   │   ├── darwin-referral-partner-tracker.md
│   │   │   └── darwin-application-pipeline-tracker.md
│   │   ├── one-pagers/
│   │   │   ├── bank-manager-referral-one-pager.md
│   │   │   ├── accountant-attorney-referral-one-pager.md
│   │   │   ├── trucking-equipment-finance-one-pager.md
│   │   │   ├── construction-business-funding-one-pager.md
│   │   │   └── darwin-general-referral-one-pager.md
│   │   ├── scripts/
│   │   │   ├── 10-outreach-scripts.md
│   │   │   ├── bank-manager-outreach-scripts.md
│   │   │   ├── accountant-outreach-scripts.md
│   │   │   ├── attorney-outreach-scripts.md
│   │   │   ├── equipment-dealer-outreach-scripts.md
│   │   │   ├── trucking-construction-outreach-scripts.md
│   │   │   └── follow-up-scripts.md
│   │   ├── handouts/
│   │   │   ├── printable-bank-manager-handout.md
│   │   │   ├── printable-accountant-attorney-handout.md
│   │   │   ├── printable-trucking-equipment-handout.md
│   │   │   ├── printable-construction-funding-handout.md
│   │   │   └── printable-referral-partner-intro-sheet.md
│   │   ├── websites/
│   │   │   ├── flash-ui-prompts/
│   │   │   │   ├── darwin-bank-manager-referral-site.md
│   │   │   │   ├── darwin-accountant-referral-site.md
│   │   │   │   ├── darwin-attorney-referral-site.md
│   │   │   │   ├── darwin-equipment-trucking-site.md
│   │   │   │   └── darwin-general-referral-site.md
│   │   │   ├── site-copy/
│   │   │   │   ├── bank-manager-page-copy.md
│   │   │   │   ├── accountant-page-copy.md
│   │   │   │   ├── attorney-page-copy.md
│   │   │   │   ├── equipment-trucking-page-copy.md
│   │   │   │   └── construction-page-copy.md
│   │   │   └── deploy-notes/
│   │   │       ├── vercel-static-site-notes.md
│   │   │       ├── wix-page-notes.md
│   │   │       └── tracking-link-notes.md
│   │   ├── bookings-events/
│   │   │   ├── weekly-partner-review-meeting.md
│   │   │   ├── monday-launch-huddle.md
│   │   │   ├── referral-partner-intro-call.md
│   │   │   ├── business-owner-funding-review-call.md
│   │   │   └── monthly-pipeline-review.md
│   │   ├── notebooklm/
│   │   │   ├── darwin-notebooklm-source-list.md
│   │   │   ├── darwin-notebooklm-asset-prompts.md
│   │   │   ├── darwin-weekly-summary-prompt.md
│   │   │   └── darwin-handout-generation-prompt.md
│   │   └── exports/
│   │       ├── pdf-ready/README.md
│   │       ├── google-docs-ready/README.md
│   │       ├── notion-ready/README.md
│   │       └── canva-ready/README.md
│   │
│   └── _partner-template/
│       ├── README.md
│       ├── partner-profile.md
│       ├── launch-kit-index.md
│       ├── meeting-notes/
│       │   ├── summary.md
│       │   ├── transcript-summary.md
│       │   ├── key-insights.md
│       │   └── action-items.md
│       ├── launch-plan/
│       │   ├── 30-day-launch-plan.md
│       │   └── month-2-scale-plan.md
│       ├── trackers/
│       │   ├── weekly-activity-tracker.md
│       │   ├── daily-outreach-tracker.md
│       │   ├── referral-partner-tracker.md
│       │   └── application-pipeline-tracker.md
│       ├── one-pagers/
│       │   ├── referral-one-pager.md
│       │   └── niche-one-pager.md
│       ├── scripts/
│       │   ├── outreach-scripts.md
│       │   └── follow-up-scripts.md
│       ├── handouts/
│       │   └── printable-handout.md
│       ├── websites/
│       │   ├── flash-ui-prompts/landing-page-prompt.md
│       │   ├── site-copy/landing-page-copy.md
│       │   └── deploy-notes/deployment-notes.md
│       ├── bookings-events/
│       │   └── recurring-review-meeting.md
│       ├── notebooklm/
│       │   └── asset-generation-prompts.md
│       └── exports/
│           ├── pdf-ready/
│           ├── google-docs-ready/
│           ├── notion-ready/
│           └── canva-ready/
│
├── onboarding/
│   ├── broker-signup-flow.md
│   ├── partner-signup-flow.md
│   ├── new-partner-welcome-email.md
│   ├── onboarding-checklist.md
│   ├── first-7-days.md
│   └── first-30-days.md
│
├── training/
│   ├── dac-game-plan-notes.md
│   ├── client-relationship-follow-up.md
│   ├── finder-not-fixer.md
│   ├── referral-partner-training.md
│   └── funding-conversation-basics.md
│
├── referral-partner-assets/
│   ├── bank-managers/
│   │   ├── one-pager.md
│   │   ├── outreach-script.md
│   │   └── follow-up-script.md
│   ├── accountants/
│   │   ├── one-pager.md
│   │   ├── outreach-script.md
│   │   └── follow-up-script.md
│   ├── attorneys/
│   │   ├── one-pager.md
│   │   ├── outreach-script.md
│   │   └── follow-up-script.md
│   ├── equipment-dealers/
│   │   ├── one-pager.md
│   │   ├── outreach-script.md
│   │   └── follow-up-script.md
│   ├── trucking/
│   │   ├── one-pager.md
│   │   ├── outreach-script.md
│   │   └── follow-up-script.md
│   └── construction/
│       ├── one-pager.md
│       ├── outreach-script.md
│       └── follow-up-script.md
│
├── scripts/
│   ├── universal-outreach/
│   │   ├── bank-manager.md
│   │   ├── accountant.md
│   │   ├── attorney.md
│   │   ├── equipment-dealer.md
│   │   ├── trucking.md
│   │   └── construction.md
│   ├── follow-up/
│   │   ├── first-follow-up.md
│   │   ├── second-follow-up.md
│   │   ├── nurture-follow-up.md
│   │   └── referral-thank-you.md
│   ├── objection-handling/
│   │   ├── skeptical-bank-manager.md
│   │   ├── no-time.md
│   │   ├── already-have-a-lender.md
│   │   └── bad-credit-concerns.md
│   ├── client-intake/
│   │   ├── application-nudge.md
│   │   ├── missing-documents.md
│   │   └── funding-path-review.md
│   └── referral-partner/
│       ├── intro-call-script.md
│       ├── partner-education-script.md
│       └── referral-ask-script.md
│
├── trackers/
│   ├── weekly-activity-tracker.md
│   ├── daily-outreach-tracker.md
│   ├── referral-partner-tracker.md
│   └── application-pipeline-tracker.md
│
├── systems/
│   ├── notion/
│   │   ├── affiliate-launch-kits-database-prompt.md
│   │   ├── partner-enablement-database-prompt.md
│   │   ├── partner-enablement-properties.md
│   │   ├── partner-enablement-views.md
│   │   ├── broker-database-relation-guide.md
│   │   └── notion-ai-asset-generation-prompt.md
│   ├── github/
│   │   ├── repo-operating-rules.md
│   │   ├── naming-conventions.md
│   │   ├── file-versioning-rules.md
│   │   └── markdown-asset-standards.md
│   ├── google-drive/
│   │   ├── drive-folder-structure.md
│   │   ├── printable-asset-export-workflow.md
│   │   └── handout-storage-rules.md
│   ├── wix/
│   │   ├── bookings-and-events-plan.md
│   │   ├── partner-resource-page-plan.md
│   │   ├── referral-partner-landing-pages.md
│   │   └── website-publishing-workflow.md
│   ├── hubspot/
│   │   ├── partner-crm-fields.md
│   │   ├── referral-partner-pipeline.md
│   │   ├── launch-follow-up-tasks.md
│   │   └── weekly-review-crm-rhythm.md
│   ├── gmail/
│   │   ├── welcome-email-sequence.md
│   │   ├── onboarding-email-sequence.md
│   │   └── referral-follow-up-sequence.md
│   ├── tally/
│   │   ├── partner-signup-form-mapping.md
│   │   ├── form-to-crm-workflow.md
│   │   └── intake-payload-schema.md
│   └── notebooklm/
│       ├── notebooklm-workflow.md
│       ├── source-material-upload-rules.md
│       ├── asset-generation-rhythm.md
│       └── notebooklm-to-github-workflow.md
│
├── prompts/
│   ├── chatgpt/
│   │   ├── generate-launch-kit.md
│   │   ├── generate-one-pager.md
│   │   ├── generate-outreach-scripts.md
│   │   └── generate-weekly-review.md
│   ├── notebooklm/
│   │   ├── generate-printable-handout.md
│   │   ├── generate-referral-one-pager.md
│   │   ├── generate-outreach-scripts.md
│   │   ├── generate-weekly-review-summary.md
│   │   └── generate-partner-launch-kit-from-meeting.md
│   ├── flash-ui/
│   │   ├── bank-manager-referral-site.md
│   │   ├── accountant-referral-site.md
│   │   ├── attorney-referral-site.md
│   │   ├── equipment-trucking-construction-site.md
│   │   ├── multi-referral-partner-site.md
│   │   └── partner-personal-landing-page.md
│   ├── notion-ai/
│   │   ├── partner-enablement-database.md
│   │   ├── partner-launch-kit-page.md
│   │   └── weekly-review-dashboard.md
│   └── email-sequences/
│       ├── new-partner-welcome.md
│       ├── launch-week-reminders.md
│       └── inactive-partner-reactivation.md
│
├── templates/
│   ├── launch-kit-template/
│   │   ├── README.md
│   │   ├── partner-profile.md
│   │   ├── launch-kit-index.md
│   │   └── launch-plan/30-day-launch-plan.md
│   ├── one-pager-template.md
│   ├── weekly-tracker-template.md
│   ├── outreach-script-pack-template.md
│   ├── website-prompt-template.md
│   ├── handout-print-template.md
│   ├── booking-event-template.md
│   └── notion-database-prompt-template.md
│
└── archive/
    ├── old-drafts/README.md
    ├── superseded/README.md
    └── experiments/README.md
```

## Current Migration Note

The earlier Darwin file was created at:

```text
affiliates/darwin-hanneman/launch-plan/darwin-30-day-launch-plan.md
```

Under the new Partner Enablement OS structure, Darwin launch-kit files should live at:

```text
launch-kits/darwin-hanneman/launch-plan/darwin-30-day-launch-plan.md
```

The old `affiliates/` path should be treated as legacy and either removed or replaced with a redirect note after migration.

## Operating Principle

This repo should contain the source content and human-facing enablement assets. Automation repos should reference this repo instead of duplicating source copy.

## Recommended Source-of-Truth Split

| Asset Type | Source Repo |
|---|---|
| Partner launch kits | `partner-enablement-os` |
| Welcome/onboarding copy | `partner-enablement-os` |
| Tally/HubSpot/Gmail/n8n workflows | `partner-onboarding-automation` |
| Static public pages / partner portal | `moonshine-capital-portal` or `PartnerHub` |
| UI generation prompts | `partner-enablement-os` + `Flash-UI-v2` |
| Funding tools/widgets | `funding-tools-os`, `funding-embed`, or `core-tools` |
```