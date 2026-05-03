# Flash-UI Referral Sites Prompt Library

This folder stores canonical Flash-UI prompts for referral partner micro-sites and niche landing pages.

These prompts are **not partner-specific launch-kit assets**. They are reusable site-generation prompts that can be used across partners, affiliates, referral sources, and vertical campaigns.

## Purpose

Flash-UI prompts are used to quickly generate visually strong static landing pages for hyper-focused referral and vertical use cases.

Each prompt should create a micro-site or landing page with one job:

> Convince the referral source or business owner to start the funding application or book a quick partner call.

## Operating Rule

Canonical prompts live here:

```text
prompts/flash-ui/referral-sites/
```

Partner-specific launch kits should not contain duplicate Flash-UI prompts unless a partner truly needs a custom prompt.

Most partner personalization should happen by changing:

- CTA URL
- tracking link
- application link
- booking link
- QR code
- partner contact block

## Recommended Prompt Files

- `bank-manager-referral-site.md`
- `accountant-referral-site.md`
- `attorney-referral-site.md`
- `equipment-trucking-construction-referral-site.md`
- `multi-referral-partner-portal.md`

## Generated Site Output Rule

Flash-UI generated static site files should not be dumped into partner launch kits by default.

Recommended options:

1. Store production-ready generated site code in a separate deployment repo, such as `partner-referral-sites`.
2. Store occasional reference exports under `exports/flash-ui/referral-sites/{site-slug}/` if they are not intended for active deployment.
3. Keep the prompt here as the source-of-truth and regenerate site files when campaign copy changes.

Do not mix generated runtime code into canonical copy folders unless the repo intentionally becomes a static site source repo.

## Placeholder Link Strategy

Use placeholders or temporary links in prompts, then replace during deployment:

- Application link: `[Partner Application Link]`
- Booking link: `[Partner Booking Link]`
- Tracking CTA: `[Tracked CTA Link]`
- QR code: `[QR Code]`

For prototype examples, `https://bit.ly/fundingwithdarwin` may be used as a placeholder, but final affiliate/partner pages should use the correct tracked link.