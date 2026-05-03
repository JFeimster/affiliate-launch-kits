# Generate Launch Kit Prompt

Use this prompt to generate a partner launch kit from source material such as meeting notes, transcript summaries, intake forms, or operator notes.

## Asset Status

- Status: Ready
- Owner: Moonshine Capital
- Audience: Internal Operator
- Platform: ChatGPT
- Last reviewed: 2026-05-03

## Objective

Create a practical, partner-specific launch kit that helps a partner start conversations, generate referrals, track activity, and follow up responsibly.

## Inputs Needed

- Partner name
- Partner background
- Strongest audience lanes
- Known referral sources
- Relevant meeting notes or transcript summary
- Application/referral link if available
- Any compliance or brand notes

## Output Requirements

Create markdown-ready files or sections for:

1. Partner profile
2. Launch kit index
3. 30-day launch plan
4. Weekly tracker
5. Referral one-pager
6. Outreach script pack
7. Printable handout
8. Website prompt
9. Booking/event recommendation
10. Next recommended deliverable

## Prompt

```text
You are creating a partner launch kit for Moonshine Capital.

Partner name: [Partner Name]
Partner background: [Background]
Strongest lanes: [Lanes]
Best referral sources: [Referral Sources]
Source material: [Paste notes, transcript summary, intake details, or context]
Application/referral link: [Link]

Create a practical partner launch kit in markdown.

The launch kit should help this partner:
- understand their strongest positioning
- identify who to contact first
- start referral conversations
- track weekly activity
- follow up responsibly
- move business owners toward a clean intake process

Required sections:
1. Partner Profile
2. Launch Kit Index
3. 30-Day Launch Plan
4. Weekly Activity Tracker
5. Referral One-Pager
6. Outreach Script Pack
7. Printable Handout
8. Website / Landing Page Prompt
9. Booking or Event Recommendation
10. Next Recommended Deliverable

Use relationship-first language.
Use “partner” as the umbrella term unless a narrower role is required.
Do not guarantee approval, funding amounts, terms, rates, income, or timelines.
Use responsible language such as “explore possible options,” “based on business profile,” and “provider criteria apply.”

End with:
- suggested GitHub path
- suggested Notion status update
- suggested export filename
- next recommended deliverable
```

## Suggested GitHub Output Path

```text
launch-kits/{partner-name}/
```
