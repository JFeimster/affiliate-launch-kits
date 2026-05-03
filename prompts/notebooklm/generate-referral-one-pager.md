# Generate Referral One-Pager Prompt

Use this NotebookLM prompt to create source-grounded one-pagers for partner launch kits.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator
- Platform: NotebookLM
- Last reviewed: 2026-05-03

## Objective

Create a one-page resource grounded only in uploaded sources.

## Prompt

```text
Using only the uploaded sources, create a one-pager for [Partner Name] and [Audience].

Include:
1. Title
2. Short positioning summary
3. Audience overview
4. Common situations
5. Partner role
6. Simple intro language
7. Next step
8. Responsible-use note

Do not invent unsupported details. If a section needs more detail than the sources provide, write “Needs source detail.”

Keep it concise, practical, and ready to move into GitHub markdown.
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/one-pagers/{audience}-one-pager.md
```
