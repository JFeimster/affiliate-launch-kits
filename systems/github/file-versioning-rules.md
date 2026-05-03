# File Versioning Rules

This document defines how files should be created, revised, archived, and superseded inside `partner-enablement-os`.

The purpose is simple: keep the repo usable as an operating system, not a junk drawer full of ghost drafts.

## Versioning philosophy

The repo itself is the versioning system.

Use Git history, commits, changelog entries, and archive notes instead of multiplying files with weak names.

Do not create parallel copies just because an asset changed.

Avoid file names like:

```text
partner-one-pager-final.md
partner-one-pager-final-2.md
partner-one-pager-new.md
partner-one-pager-updated.md
partner-one-pager-copy.md
```

Use the canonical file path and update the file directly.

## Canonical file rule

Every major asset should have one canonical path.

Examples:

```text
launch-kits/darwin-hanneman/launch-plan/darwin-30-day-launch-plan.md
systems/github/repo-operating-rules.md
templates/one-pager-template.md
prompts/chatgpt/generate-launch-kit.md
```

If an asset is adapted for a specific platform, create a platform-specific derivative only when the content is materially different.

Example:

```text
launch-kits/darwin-hanneman/one-pagers/bank-manager-referral-one-pager.md
launch-kits/darwin-hanneman/exports/google-docs-ready/bank-manager-referral-one-pager.md
```

## Update rule

Before updating an existing file:

1. Fetch the current file.
2. Preserve useful prior content.
3. Replace stale guidance.
4. Remove contradictions.
5. Keep the file practical and implementation-ready.
6. Update `changelog.md` when the change affects structure, workflow, compliance, or source-of-truth rules.

## New file rule

Before creating a file:

1. Search for similar files.
2. Confirm the new file belongs in the requested block or folder.
3. Use naming conventions from `systems/github/naming-conventions.md`.
4. Create the file with complete usable content.
5. Avoid placeholder-only docs unless the folder needs a README for structure.

## Archive rule

Archive when an asset is no longer current but may still contain useful history.

Use:

```text
archive/superseded/
archive/old-drafts/
archive/experiments/
```

When archiving, add a short note at the top of the archived file:

```markdown
> Archived on YYYY-MM-DD.
> Superseded by: `path/to/current-file.md`.
> Reason: Brief explanation.
```

Do not delete archived material unless explicitly approved.

## Redirect note rule

Use a redirect note when an old path may still be referenced by operators, prompts, or external systems.

Recommended redirect note:

```markdown
# Redirect Notice

This path is no longer the canonical source for this asset.

Use:

`path/to/current-file.md`

Reason: The asset moved during the Partner Enablement OS restructure.
```

## Partner-specific versioning

Partner-specific launch-kit files should stay inside that partner's folder.

Example:

```text
launch-kits/darwin-hanneman/scripts/bank-manager-outreach-scripts.md
```

Reusable versions should live outside the partner folder.

Example:

```text
scripts/universal-outreach/bank-manager.md
```

The partner-specific file may adapt the reusable version for that partner's niche, geography, background, tone, or launch plan.

## Darwin prototype rule

Darwin Hanneman is the current launch-kit prototype.

Canonical Darwin launch-kit path:

```text
launch-kits/darwin-hanneman/
```

Canonical Darwin launch-plan path:

```text
launch-kits/darwin-hanneman/launch-plan/darwin-30-day-launch-plan.md
```

Use Darwin's launch kit structure as the reference pattern for future partner launch kits.

## Date usage

Use dates inside the file body for review and publishing status.

Recommended block:

```markdown
## Asset Status

- Status: Draft
- Owner: Moonshine Capital
- Last reviewed: YYYY-MM-DD
- Next review: YYYY-MM-DD
```

Only use dates in file names when the asset is event-based or time-bound:

```text
2026-05-03-weekly-review.md
2026-q2-partner-review.md
```

## Platform derivative rule

Only create platform derivatives when needed.

Valid reasons:

- Google Docs needs print formatting.
- Wix needs shorter page copy.
- Gmail needs subject lines and send-ready copy.
- HubSpot needs task templates or pipeline notes.
- Notion needs database prompts or dashboard views.
- NotebookLM needs source-grounded prompt formats.

Invalid reasons:

- The asset was edited slightly.
- The operator is unsure where to put it.
- The same content is being copied into another folder for comfort.

## Changelog triggers

Update `changelog.md` when:

- A new block of files is created.
- Canonical paths change.
- Compliance language changes.
- Publishing workflows change.
- Templates are added or updated.
- Partner launch-kit patterns change.
- A file is archived, redirected, or removed.

## Review checklist

Before finishing a file versioning action, confirm:

1. There is one canonical source.
2. The file name is clean.
3. No duplicate content was created unnecessarily.
4. Any old path is archived or redirected if needed.
5. `changelog.md` is updated when appropriate.
6. The file is ready for an operator to use without extra explanation.
