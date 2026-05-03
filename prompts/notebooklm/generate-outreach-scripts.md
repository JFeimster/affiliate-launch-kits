# Generate Outreach Scripts Prompt

Use this NotebookLM prompt to generate source-grounded outreach scripts from approved partner context and training notes.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator
- Platform: NotebookLM
- Last reviewed: 2026-05-03

## Objective

Create outreach scripts that reflect the uploaded partner context without inventing unsupported positioning.

## Prompt

```text
Using only the uploaded sources, create an outreach script pack for [Partner Name] and [Audience].

Include:
1. Short message
2. Email message
3. Phone opener
4. First follow-up
5. Second follow-up
6. Soft intro language
7. Common question responses
8. Notes on what source details were used

Keep the scripts direct, professional, and relationship-first.

Do not invent unsupported claims. If a script needs details not found in the sources, mark that section as “Needs source detail.”
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/scripts/{audience}-outreach-scripts.md
```
