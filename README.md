# Taxplexa

Free multilingual tax and finance calculators (English, Hindi and Marathi).

## Cloudflare preview workflow

- This branch is a non-production upgrade preview.
- Cloudflare Pages project: `taxplexa-preview`.
- Production deployment is disabled for this Pages project; the existing Netlify website remains the production site.
- Static output is the repository root (no build command).
- Preserve the current Netlify canonical URLs and existing sitemap URLs until a separately approved domain migration.

## Calculator scope

- UK Income Tax: historical standard rates for England, Wales and Northern Ireland, tax years 2015/16–2026/27. Income Tax only; National Insurance and personal adjustments are excluded.
- UK SDLT: residential England and Northern Ireland rates by purchase date, 6 April 2015–31 December 2026. Non-resident surcharge, corporate transactions, lease NPV, and some reliefs are excluded and must be checked separately.
- Other calculators: EMI, compound interest, VAT, India GST, invoice generator.

## Official tax references

- HMRC Income Tax rates: https://www.gov.uk/government/statistics/rates-of-income-statistics
- HMRC Income Tax rates and allowances: https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past
- HMRC historical SDLT rates: https://www.gov.uk/government/publications/rates-and-allowances-stamp-duty-land-tax
- HMRC Budget 2026 rates: https://www.gov.uk/government/publications/budget-2026-overview-of-tax-legislation-and-rates-ootlar/annex-a-rates-and-allowances

## Quality assurance

Before publishing any change, test each calculator with known inputs and check language routes, canonical metadata, hreflang links, sitemap URLs, robots.txt, and missing-page handling. Do not switch the custom domain or change production canonical URLs as part of a preview deployment.
