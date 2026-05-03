# Scripts

Canonical reusable scripts live here.

Use this folder for script content that can support multiple partners before it becomes partner-specific.

## Rule

```text
scripts/ = canonical reusable scripts
referral-partner-assets/{audience}/ = audience-specific canonical scripts
launch-kits/{partner-name}/scripts/ = partner-specific script variants only when materially customized
```

Do not store full reusable scripts only inside `templates/`. Templates should provide structure. Usable scripts should live here or under `referral-partner-assets/{audience}/`.

## Recommended Structure

```text
scripts/
├── README.md
├── universal-outreach/
├── follow-up/
├── objection-handling/
├── client-intake/
└── referral-partner/
```

## Existing Audience-Specific Canonical Scripts

Audience-specific scripts live under:

```text
referral-partner-assets/{audience}/outreach-script.md
referral-partner-assets/{audience}/follow-up-script.md
```

Use these for bank managers, accountants, attorneys, equipment dealers, trucking contacts, and construction contacts.

## Partner Variant Rule

Create partner script variants only when the script includes:

- partner name
- partner contact info
- partner application link
- partner booking link
- local market notes
- partner-specific lanes
- partner-specific tone or launch strategy

## Current High-Utility Script Types

- universal referral partner intro script
- universal follow-up sequence
- referral partner objection responses
- business owner intake call script
- denied-by-bank client rescue script
- referral thank-you script
