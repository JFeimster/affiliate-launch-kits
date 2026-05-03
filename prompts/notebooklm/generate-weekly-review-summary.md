# Generate Weekly Review Summary Prompt

Use this NotebookLM prompt to create source-grounded weekly partner review summaries from activity notes, meeting notes, tracker exports, or call summaries.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator | Partner
- Platform: NotebookLM
- Last reviewed: 2026-05-03

## Objective

Summarize partner activity and extract practical next actions without inventing context beyond the uploaded sources.

## Prompt

```text
Using only the uploaded sources, create a weekly review summary for [Partner Name].

Include:
1. Executive summary
2. Activity snapshot
3. Best conversations
4. Open follow-ups
5. Bottlenecks
6. Field feedback
7. Asset improvement ideas
8. Recommended next actions
9. Details that need source clarification

Do not invent activity numbers, names, claims, or outcomes. If the source material does not include enough information, mark the section as “Needs source detail.”

Keep the review direct, practical, and ready to move into GitHub markdown or Notion.
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/weekly-reviews/YYYY-MM-DD-weekly-review.md
```
