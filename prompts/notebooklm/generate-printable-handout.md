# Generate Printable Handout Prompt

Use this NotebookLM prompt to generate source-grounded printable handouts from approved launch-kit material, meeting notes, or training documents.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator
- Platform: NotebookLM
- Last reviewed: 2026-05-03

## Objective

Create a concise, source-grounded handout that can be exported into Google Docs, PDF, Canva, or Wix resources.

## Prompt

```text
Using only the uploaded sources, create a printable handout for [Audience] related to [Partner/Topic].

The handout should include:
1. Clear title
2. Short summary
3. Who this helps
4. Common situations
5. Simple process
6. What to prepare
7. Referral note or next-step language
8. Responsible-use note

Keep the handout concise and practical. Do not invent details that are not supported by the uploaded sources. If the sources do not contain enough detail for a section, mark it as “Needs source detail.”

Use careful, educational capital-access language.
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/handouts/printable-{audience}-handout.md
```
