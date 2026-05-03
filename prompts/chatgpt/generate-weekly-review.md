# Generate Weekly Review Prompt

Use this prompt to turn partner activity notes into a weekly review summary and next-action plan.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator | Partner
- Platform: ChatGPT
- Last reviewed: 2026-05-03

## Objective

Summarize weekly partner activity, identify patterns, expose bottlenecks, and recommend the next best actions.

## Inputs Needed

- Partner name
- Week reviewed
- Outreach numbers
- Conversation notes
- Referral activity
- Application activity
- Follow-up queue
- Field feedback

## Prompt

```text
Create a weekly partner review for Moonshine Capital.

Partner: [Partner Name]
Week reviewed: [Week]
Outreach activity: [Numbers]
Conversation notes: [Notes]
Referral activity: [Notes]
Application activity: [Notes]
Follow-up queue: [Queue]
Field feedback: [Feedback]

Create a concise weekly review with:
1. Executive summary
2. Activity snapshot
3. Best conversations
4. Bottlenecks
5. Referral source insights
6. Script or asset feedback
7. Follow-up priorities
8. Next week plan
9. Recommended asset updates

Be direct and practical. Do not pad the review with generic encouragement.

End with:
- suggested GitHub path
- suggested Notion status update
- suggested export filename
- next recommended deliverable
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/weekly-reviews/YYYY-MM-DD-weekly-review.md
```
