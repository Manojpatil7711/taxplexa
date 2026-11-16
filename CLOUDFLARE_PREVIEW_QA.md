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
- Do not attach the live custom domain or change DNS during preview testing.
- Do not merge this branch until visual, functional, SEO and URL checks pass.