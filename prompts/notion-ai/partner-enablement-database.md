# Partner Enablement Database Prompt

Use this prompt with Notion AI to generate or refine a partner enablement database structure.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator
- Platform: Notion AI
- Last reviewed: 2026-05-03

## Objective

Create a Notion database that helps track partner assets, production status, publishing destinations, and review cadence.

## Prompt

```text
Create a Notion database for Moonshine Capital called Partner Enablement Assets.

The database should track reusable and partner-specific enablement assets such as launch kits, one-pagers, scripts, handouts, trackers, prompts, website copy, and operating docs.

Create these properties:
- Name: title
- Status: select with Draft, Ready, Published, Needs Review, Archived
- Asset Type: select
- Partner: relation placeholder
- Audience: multi-select
- Platform: multi-select
- GitHub Path: text or URL
- Priority: select with High, Medium, Low
- Owner: person or text
- Last Reviewed: date
- Next Action: text
- Notes: text

Create these views:
- All Assets
- By Status
- By Partner
- Ready To Publish
- Needs Review
- Prompt Library
- Launch Kit Assets

Keep the database practical, clean, and easy for an operator to use. GitHub remains the source of truth for final markdown files.
```

## Related Files

- `templates/notion-database-prompt-template.md`
- `systems/github/repo-operating-rules.md`
