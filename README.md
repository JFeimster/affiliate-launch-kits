# Partner Enablement OS

Partner Enablement OS is a lightweight static resource hub for the Moonshine Capital Partner ecosystem.

It is designed to help Partners, operators, referral partners, funding partners, brokers, affiliate partners, and future channel partners find launch kits, referral assets, scripts, trackers, prompts, tools, training, and compliance-safe funding language without digging through scattered folders.

Funding-related language must remain compliance-safe. Partners should use language such as:

- explore funding options
- may be available
- based on business profile
- provider criteria apply
- approval, terms, amounts, and timing are not guaranteed
- when traditional financing is delayed, unavailable, or not the right fit today
- one application can help identify possible funding paths

Do not guarantee approval, funding, rates, terms, amounts, timelines, qualification, revenue, income, or outcomes.

## Source-of-Truth Rule

GitHub is the canonical source of truth for this static site.

Tool roles:

- GitHub = source of truth for static site files, markdown assets, JSON data, and repo structure
- Vercel = deployment layer
- Google Drive = exported/shareable assets such as PDFs, handouts, and partner-ready files
- Notion = dashboard and status tracking layer
- OpenAI Platform = future API, agent, secure key setup, and automation workflow layer

The static site is the polished delivery layer. It should not replace the repository, Drive exports, Notion status tracking, or future API workflows.

## Deployment Target

Production target:

https://partner-enablement-os.vercel.app/

Repository target:

JFeimster/partner-enablement-os

## Static Site Structure

```text
partner-enablement-os/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── vercel.json
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       ├── resources.js
│       ├── partners.js
│       └── search.js
├── data/
│   ├── site-config.json
│   ├── navigation.json
│   ├── resource-categories.json
│   ├── resources.json
│   ├── partner-types.json
│   ├── partner-launch-kits.json
│   ├── compliance-language.json
│   ├── script-categories.json
│   ├── tracker-templates.json
│   ├── prompt-categories.json
│   ├── tool-roadmap.json
│   └── training-paths.json
└── pages/
    ├── getting-started.html
    ├── partner-resource-library.html
    ├── launch-kits.html
    ├── referral-partner-assets.html
    ├── compliance.html
    ├── scripts.html
    ├── trackers.html
    ├── prompts.html
    ├── tools.html
    ├── training.html
    ├── about.html
    └── darwin-hanneman.html
```

Current Pages
Home: /index.html
Start Here: /pages/getting-started.html
Partner Resource Library: /pages/partner-resource-library.html
Launch Kits: /pages/launch-kits.html
Referral Partner Assets: /pages/referral-partner-assets.html
Compliance: /pages/compliance.html
Scripts: /pages/scripts.html
Trackers: /pages/trackers.html
Prompts: /pages/prompts.html
Tools: /pages/tools.html
Training: /pages/training.html
About: /pages/about.html
Darwin Hanneman Launch Kit: /pages/darwin-hanneman.html
Vercel Deployment Notes

This is a plain static site.

Use these Vercel settings:

Framework preset: Other
Build command: leave blank
Install command: leave blank
Output directory: leave blank or use repository root
Root directory: repository root
Environment variables: none required for V1

No React, Next.js, npm, package.json, build tools, or framework routing are required.

Local Preview

Because this is a static site, you can open index.html directly in a browser.

For local JSON fetch support, use any simple static server from the repository root.

Examples:

python3 -m http.server 8080

Then open:

http://localhost:8080/
Batch Status
Batch 1 — Foundation

Created:

vercel.json
assets/css/styles.css
assets/js/app.js
data/site-config.json
data/navigation.json
index.html
Batch 2 — Core Data

Created:

data/resource-categories.json
data/resources.json
data/partner-types.json
data/partner-launch-kits.json
data/compliance-language.json
Batch 3 — Rendering Scripts

Created:

assets/js/resources.js
assets/js/partners.js
assets/js/search.js
Batch 4 — Core Static Pages

Created:

pages/getting-started.html
pages/partner-resource-library.html
pages/launch-kits.html
pages/referral-partner-assets.html
pages/compliance.html
Batch 5 — Utility Static Pages

Created:

pages/scripts.html
pages/trackers.html
pages/prompts.html
pages/tools.html
pages/training.html
pages/about.html
Batch 6 — Prototype Partner Page

Created:

pages/darwin-hanneman.html
Batch 7 — Expanded Data Inventory

Created:

data/script-categories.json
data/tracker-templates.json
data/prompt-categories.json
data/tool-roadmap.json
data/training-paths.json
Batch 8 — Final V1 Polish

Created or updated:

data/navigation.json
index.html
README.md
robots.txt
sitemap.xml
V1 Scope

V1 is intentionally lightweight.

Included:

Static HTML pages
Responsive CSS
Vanilla JavaScript
Local JSON data
Resource rendering scripts
Partner launch kit rendering scripts
Client-side search
Sitemap
Robots file
Vercel-ready static deployment

Not included in V1:

Authentication
Database
CRM sync
Notion sync
Google Drive dynamic sync
OpenAI API features
Partner dashboards
Form submissions
Payment flows
Framework routing
Compliance Notes

Use safe funding language:

explore funding options
may be available
based on business profile
provider criteria apply
approval, terms, amounts, and timing are not guaranteed
one application can help identify possible funding paths

Avoid unsafe claims:

guaranteed approval
everyone qualifies
credit does not matter
same-day funding for everyone
any amount available
we approve what banks deny
no documents needed
instant funding guaranteed

Default disclaimer:

Funding options, approvals, terms, amounts, and timing are not guaranteed. Provider criteria apply and available options depend on the business profile.

Post-Deploy Improvements

Recommended after first Vercel deployment:

Confirm all static pages resolve.
Confirm JSON files load correctly from /data.
Confirm search works on the resource library and compliance pages.
Confirm mobile navigation behavior.
Add Open Graph image assets.
Add favicon files.
Add more partner launch kits using Darwin Hanneman as the prototype.
Wire Batch 7 data files into future rendering scripts only after V1 is deployed.
Add Google Drive export links for approved/shareable assets.
Add Notion dashboard tracking for asset status and Partner launch status.
Troubleshooting

If the homepage returns 404:

Confirm index.html exists at the repository root.
Confirm Vercel root directory is the repository root.
Confirm there is no build command configured.
Confirm Vercel is not expecting a framework output directory.

If JSON cards do not render:

Serve the site from a local or hosted static server.
Avoid opening pages directly from file:// when testing JSON fetch behavior.
Confirm JSON files are valid and available under /data.

If a page link fails:

Confirm the HTML file exists under /pages.
Confirm the URL matches the file path exactly.
Confirm Vercel has redeployed after the file was committed.

If funding language feels too strong:

Replace certainty with exploratory language.
Add provider criteria language.
Add the default disclaimer.
Remove any approval, rate, term, amount, timeline, qualification, revenue, income, or outcome guarantee.
