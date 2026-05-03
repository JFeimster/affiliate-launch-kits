# Partner Enablement Ecosystem Map

This document maps the recommended Moonshine Capital partner ecosystem across GitHub repos, Wix, Notion, HubSpot, Google Drive, NotebookLM, and automation tooling.

## Naming Direction

Use **Partner** as the umbrella term.

Partner is intentionally broader than affiliate, broker, referral source, agent, or operator. It can include:

- Funding partners
- Affiliate partners
- Referral partners
- Internal operators
- Local connectors
- Channel partners
- Future strategic partners

## Core Repo Ecosystem

| Repo / System Name | Recommended Role | Current / Suggested |
|---|---|---|
| `partner-enablement-os` | Source-of-truth for partner content, launch kits, training, scripts, prompts, trackers, and resource assets | Current repo |
| `partner-onboarding` | Lightweight partner onboarding workflows, onboarding documentation, and signup flow references | Existing repo |
| `partner-growth-hub` | Public or private growth hub for partner resources, training paths, dashboards, or learning center assets | Existing repo |
| `PartnerLaunch` | Launch-specific site/app/template experiments for partner launch flows | Existing repo |
| `PartnerHub` | Potential public/private partner portal or resource hub | Existing repo |
| `funding-partners-os` | Funding partner operating system or backend partner ops documentation | Existing repo |
| `funding-partners-os-dashboard` | Dashboard/UI layer for funding partner operations | Existing repo |
| `Flash-UI-v2` | UI generation app/tool used to create referral landing page designs and static site outputs | Existing repo |
| `moonshine-capital-portal` | Broker/client/partner web app, portal, directory, tracking links, and public tools | Existing project repo |
| `moonshine-partner-marketplace` | Funding product/vertical/provider marketplace content and public partner-facing resources | Existing project repo |

## Recommended New Repos

| Suggested Repo | Purpose |
|---|---|
| `partner-onboarding-automation` | n8n/Make/Zapier/Gmail/HubSpot/Notion/Tally/Wix automation workflows triggered by partner signup |
| `partner-resource-library` | Optional public-facing or packaged resource library if resources outgrow this repo |
| `partner-launch-lab` | Optional front-facing site/community/training environment for partner launch workshops and weekly calls |
| `partner-pipeline-ops` | Optional CRM/pipeline documentation and reporting layer if HubSpot processes become complex enough to split |

## Recommended Platform Naming

| Platform | Recommended Name |
|---|---|
| GitHub source repo | Partner Enablement OS |
| Notion database/dashboard | Partner Enablement OS |
| Wix group | Moonshine Partner Launch Lab |
| Wix resource area | Partner Resource Library |
| HubSpot pipeline/program | Partner Onboarding & Enablement |
| Google Drive folder | Moonshine Capital / Partner Enablement OS |
| NotebookLM notebook | Moonshine Partner Enablement Source Notebook |
| Automation repo | Partner Onboarding Automation |

## Repo Relationship Model

```text
partner-onboarding-automation
        ↓ references and distributes assets from
partner-enablement-os
        ↓ publishes selected resources into
Wix / Notion / HubSpot / Gmail / Google Drive
        ↓ optionally routes users into
moonshine-capital-portal
```

## Operating Rule

- Keep human-facing source assets in `partner-enablement-os`.
- Keep executable automation workflows in `partner-onboarding-automation`.
- Keep public/private portal code in `moonshine-capital-portal`.
- Keep product/provider marketplace content in `moonshine-partner-marketplace`.
- Do not duplicate the same core asset across repos unless it is transformed for a specific runtime or platform.

## Source-of-Truth Principle

This repo should be the canonical home for partner-facing content and enablement assets. Other repos should reference, import, publish, or transform content from here instead of rewriting the same material in multiple places.