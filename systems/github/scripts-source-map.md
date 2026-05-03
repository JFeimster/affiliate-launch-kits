# Scripts Source Map

This document defines how reusable scripts and partner-specific script variants should work inside Partner Enablement OS.

## Rule

Canonical scripts live in:

```text
scripts/
```

Partner-specific script variants live in:

```text
launch-kits/{partner-name}/scripts/
```

Do not duplicate a script into a launch kit unless it is materially customized for that partner.

## Canonical Script Types

Recommended canonical script folders:

```text
scripts/universal-outreach/
scripts/follow-up/
scripts/objection-handling/
scripts/client-intake/
scripts/referral-partner/
```

## When to Reference Canonical Scripts

Reference canonical scripts when:

- the script works for most partners
- the only change is a partner name or contact detail
- the script is meant as a reusable training or swipe file
- the launch kit can point to a shared script pack

## When to Generate a Partner Script Variant

Create a partner-specific script when:

- the partner has a unique audience focus
- the partner has specific local relationships
- the partner has a unique tone or field strategy
- the script includes partner contact details or application links
- the script is part of a specific launch sequence

## Darwin Prototype

Darwin's script pack lives at:

```text
launch-kits/darwin-hanneman/scripts/10-outreach-scripts.md
```

Use it as a prototype partner-specific script pack. Extract reusable scripts into canonical folders only when they can support multiple partners.

## Example Source Map

| Canonical Script | Partner Variant | Delivery Target |
|---|---|---|
| `scripts/universal-outreach/bank-manager.md` | `launch-kits/darwin-hanneman/scripts/bank-manager-outreach-scripts.md` | Gmail, HubSpot, print packet |
| `scripts/follow-up/referral-thank-you.md` | `launch-kits/darwin-hanneman/scripts/follow-up-scripts.md` | Gmail, SMS, CRM notes |
| `scripts/referral-partner/intro-call-script.md` | `launch-kits/darwin-hanneman/scripts/10-outreach-scripts.md` | Partner launch kit |

## Automation Note

Future onboarding automation should generate partner script variants from canonical scripts by injecting partner name, contact details, application link, preferred audiences, and launch stage.