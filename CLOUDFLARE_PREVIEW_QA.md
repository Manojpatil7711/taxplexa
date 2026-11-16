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
- Cloudflare preview build for the latest branch commit completed successfully. Preview remains noindex; no custom domain or production DNS changes were made.

## Still pending
- Visual and interactive browser QA on mobile and desktop. The preview deployment is available, but automated page rendering was not accessible from this session. Do not mark this item complete until the pages and calculator interactions have been visually checked.
