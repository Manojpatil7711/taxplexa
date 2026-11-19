# Taxplexa Cloudflare Preview QA

This branch is isolated from `main` and the live Netlify site.

## Preview checks
- Confirm `/`, `/hi/`, and `/mr/` load.
- Confirm the search field filters the seven tool links in each language.
- Confirm all calculator routes load and browser JavaScript has no runtime errors.
- Income Tax: test 2015/16 through 2026/27, including the £100,000 Personal Allowance taper and £125,140 additional-rate threshold.
- SDLT: test purchase dates around 8 July 2020, 1 July 2021, 1 October 2021, 23 September 2022, 31 October 2024, and 1 April 2025; test first-time buyer and additional-property cases.
- Verify canonical URLs remain on `https://taxplexa.netlify.app/` until an approved domain migration.
- Validate `robots.txt`, sitemap index, all three language sitemaps, and hreflang alternates.

## Deployment safety
- Cloudflare Pages project: `taxplexa-preview`.
- Production branch: `main`.
- Production deployments: disabled.
- Preview deployments: enabled for branches.
- Preview-only `_headers` includes `X-Robots-Tag: noindex, nofollow` to keep this preview out of Google.
- Remove that preview-only noindex rule before any approved production release.
- Do not attach the live custom domain or change DNS during preview testing.
- Do not merge this branch until visual, functional, SEO and URL checks pass.

## Latest audit — 16 November 2026
- Confirmed the seven English calculator pages load the shared `/assets/app.js?v=20261116-3` script and call their expected calculator functions.
- Validated the Hindi and Marathi FAQPage JSON-LD for SDLT, VAT and GST as valid JSON, with localized questions matching the visible FAQ headings. Added the matching `inLanguage` values.
- Expanded the SDLT purchase-date minimum to 1 January 2015 in all three languages and aligned the shared JavaScript validation message.
- Checked the sitemap index, all three language sitemaps, robots.txt sitemap reference, canonical host and hreflang alternates. Updated Hindi and Marathi VAT/GST sitemap lastmod dates after the FAQ edits.
- Reviewed SDLT boundary calculations for the 2020 holiday, July/October 2021 changes, September 2022 thresholds, 31 October 2024 surcharge change and 1 April 2025 thresholds.
- Added a localized SDLT FAQ and matching structured-data entry explaining the 31 October 2024 transitional rule for contracts exchanged before the change; verified the visible FAQ order matches the JSON-LD order.
- Cloudflare preview build for the latest branch commit completed successfully. Preview remains noindex; no custom domain or production DNS changes were made.

## Still pending
- Visual and interactive browser QA on mobile and desktop. The preview deployment is available, but automated page rendering was not accessible from this session. Do not mark this item complete until the pages and calculator interactions have been visually checked.

## Browser functional QA — 19 November 2026
- Ran browser interaction checks on all seven calculators in English, Hindi and Marathi (21 page/language cases). Each page loaded with HTTP 200, its calculator action ran, and a non-empty result appeared. The invoice generator was tested by adding a sample service at 100 and creating the invoice preview.
- No browser JavaScript page errors were reported during the 21 calculator checks.
- Confirmed `/`, `/hi/` and `/mr/` load and each lists seven tools.
- Confirmed GST search filters each language's home-page cards to one result; an unmatched query hides all cards and shows the localized no-results message; clearing search restores all seven cards.
- Checked the Marathi home page at a 390 × 844 mobile viewport; document width matched viewport width (390 px), with no horizontal overflow.
- Search filtering was corrected in `assets/search.js` and the latest preview build completed successfully on commit `5790988423e03bf51ccd106c886858fe4460bd76`.

## Remaining before production
- Visual review of desktop and mobile screenshots is still pending.
- Confirm the final canonical host and update canonical, hreflang, Open Graph and sitemap URLs together. Current pages intentionally retain the Netlify canonical host to protect the existing indexed URLs until the host decision is finalized.
- Remove the preview-only `X-Robots-Tag: noindex, nofollow` rule before production.
- Production deployments remain disabled and the production branch remains `main`. Do not switch the live domain or DNS until the final host/canonical decision is confirmed.

## Luxury and easy-to-use redesign — 19 November 2026
- Created isolated branch `luxury-easy-2026` from `cloudflare-upgrade-2026`; production branch and live site remain unchanged.
- Refreshed the English, Hindi and Marathi homepages with a responsive premium hero, prominent search, grouped tool cards, clear action links and trust information.
- Added a consistent ivory / forest-green / champagne-gold design system, improved form surfaces, focus states, spacing, mobile layout and calculator result panels.
- Localized Hindi and Marathi invoice-generator instructions, input labels, validation messages and printable invoice headings.
- Existing seven calculator routes, SEO metadata, canonical URLs, hreflang, sitemap and calculator formulas were preserved.
- No Netlify preview build was triggered to conserve the remaining deployment credits. Visual desktop/mobile verification and the final preview build remain pending; do not merge or deploy until those checks are approved.
