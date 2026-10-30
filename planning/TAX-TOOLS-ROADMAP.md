# Taxplexa — Product & Tax Tools Roadmap

**Status:** Planning only — not published  
**Production branch:** `main` (do not modify as part of this roadmap)  
**Planning branch:** `planning/tax-tools-roadmap`  
**Live site:** https://taxplexa.netlify.app  
**Domain note:** Do not use taxplexa.com as a canonical or production domain unless the owner confirms it has been purchased and configured.

## Non-negotiable delivery rules

1. This file is a planning register. Do not add unfinished tools to navigation, sitemap, internal links, or production pages.
2. Do not merge this branch into `main`, open a pull request, or trigger a deployment without the owner's explicit instruction.
3. Preserve the current site design, static HTML/CSS/JS architecture, URLs, canonical host, and existing working calculators. No framework or build-system migration.
4. Before new tools are published, complete the existing-tool stability and content gate below in English, Hindi, and Marathi.
5. Every tax calculation must be based on the relevant official tax authority's current published rules. Never invent rates, thresholds, dates, exemptions, or eligibility rules.
6. Each tax tool must show jurisdiction, tax year, assumptions, exclusions, source links, and a visible last-reviewed date. Explain that results are estimates, not tax/legal/financial advice.
7. Translations must be reviewed for meaning and calculation labels, not merely machine-translated. Do not publish a language version that is incomplete.
8. No third-party API, paid data feed, subscription, or new hosting cost without explicit approval. Prefer local calculations and a centrally maintained rates/data file.
9. Do not add advertising scripts or ads.txt until the owner provides the correct Taxplexa publisher details and approves the change.
10. Test every calculator with at least three known test cases, boundary cases, invalid inputs, and all supported languages before release.

## Gate 0 — Stabilize the existing seven tools first

Existing tools already present in the product:
- Loan / Mortgage Calculator
- Compound Interest Calculator
- UK Income Tax Calculator
- UK Stamp Duty Calculator
- VAT / Sales Tax Calculator
- India GST Calculator
- Invoice Generator

Required checks:
- Verify all 21 language pages (7 tools × English, Hindi, Marathi).
- Confirm each page loads the current shared JavaScript asset and has no missing asset or console errors.
- Test every Calculate / Generate action and confirm a visible, correct result.
- Confirm all input labels, result labels, validation messages, help text, and disclaimers are translated.
- Review formula assumptions and tax-year accuracy against official sources.
- Confirm invoice preview, calculations, print/download/export actions (where offered), and mobile layout.
- Complete useful page content: how to use, formula/method, worked example, limitations, at least four FAQs, and related tools.
- Verify canonical, hreflang, title, description, one H1, sitemap inclusion, and indexability for each published page.
- Record test cases and pass/fail evidence. Do not claim browser testing if only code or simulated tests were run.

**Release gate:** Do not publish any new calculator until all existing tools pass the functional, language, content, SEO, and mobile checks above.

## Phase 1 — First eight priority tools

Build in this order, subject to official-source and feasibility review:

1. **UK Salary vs Dividend Calculator** — compare salary and dividend scenarios for an owner/director; clearly model company and personal tax separately and state assumptions.
2. **Rental Yield & Buy-to-Let Profit Calculator** — gross/net yield, recurring costs, mortgage interest/cash flow, and scenario comparison; avoid implying a tax result unless tax rules are separately modelled.
3. **Marketplace Fees & Profit Calculator** — selling price, platform/payment fees, shipping, product cost, taxes entered by the user, net proceeds and margin. Keep platform fee schedules editable and source-dated.
4. **India Old vs New Tax Regime Calculator** — compare eligible regimes for a selected financial year; account for applicable deductions/rebates only where verified.
5. **Capital Gains Tax Calculator (UK & India)** — separate jurisdiction-specific flows; asset type, acquisition/disposal costs, exemptions and tax-year rules must be explicit.
6. **UK Pension & State Pension Planner** — contribution scenarios and retirement projections; distinguish user assumptions from official State Pension eligibility/forecast information.
7. **Tax Calendar (UK, India, US)** — country-specific filing/payment dates, tax-year context, official source links and last-verified dates. Dates must be maintained, not guessed.
8. **Free Tax & Business Templates Library** — downloadable worksheets/checklists/invoice and record-keeping templates with jurisdiction labels and clear limitations.

## Phase 2 — UK tools

- Corporation Tax Calculator
- Self-Employed / Sole Trader Tax Calculator
- National Insurance Calculator
- Payroll / Take-Home Pay Calculator
- Advanced VAT Calculator
- Property / Rental Tax Estimator
- Inheritance Tax Estimator
- Advanced Capital Gains Tax Calculator

For each: define the tax year, taxpayer type, taxable income basis, reliefs/exemptions, edge cases, and official HMRC/GOV.UK references before implementation.

## Phase 3 — India tools

- Advanced GST Calculator (inclusive/exclusive, CGST/SGST/IGST where applicable)
- HRA Exemption Calculator
- Salary / Take-Home Salary Calculator
- EPF / PF Calculator
- Gratuity Calculator
- TDS Calculator
- Advance Tax Calculator
- ITR Tax Planning / Regime Comparison tool

For each: specify financial year/assessment year correctly, applicable taxpayer category, official Income Tax Department / GST / EPFO references, and current rules. Do not imply that a calculator files a return.

## Phase 4 — Global finance tools

- US Federal Income Tax Estimator (state tax clearly separate and only add states when supported)
- Canada Income Tax Estimator (federal and provincial components)
- Australia Income Tax Estimator
- Currency & Tax Conversion Helper (exchange-rate source and timestamp required if live rates are ever used)
- Retirement Planner
- SIP & Investment Growth Calculator
- Loan Affordability Calculator
- Debt Repayment / Snowball / Avalanche Calculator
- Insurance Needs Estimator (educational only; no product recommendation or referral by default)
- Inflation / Purchasing Power Calculator

Keep each jurisdiction separate. Never apply one country's tax assumptions to another country.

## Phase 5 — Content, reference and retention features

- Country-specific Tax Guides
- Country and tax-year Tax Rates tables
- Tax-saving guides with eligibility caveats
- Small-business and freelancer finance guides
- Tax-year comparison pages
- Tax FAQ Centre
- Business and accounting templates
- Editorial methodology / how calculations are checked
- Tax update log with source and review date

## Shared technical and editorial standards

### Calculation design
- Use explicit units, currency, tax year, frequency (weekly/monthly/annual), and rounding rules.
- Validate required fields, negative values, impossible dates, and upper/lower bounds.
- Explain formulas and show a worked example.
- Separate user-entered assumptions from official rates.
- Keep jurisdiction and tax-year data in a single maintainable source file where practical.
- Add automated test vectors for normal, boundary, zero, and invalid cases.

### Content and SEO
- Each published tool page should contain original, genuinely useful content, not thin placeholder copy.
- Include purpose, who it is for, inputs explained, calculation method, worked example, limitations, FAQs, official sources, last-reviewed date, and related tools.
- Use unique localized titles/descriptions and accurate English/Hindi/Marathi hreflang alternates.
- Only include complete, canonical, indexable, production-ready URLs in sitemaps.
- Do not create doorway pages or near-duplicate pages just to target keywords.

### Accessibility and mobile
- Mobile-first layout, readable number fields, large tap targets, keyboard support, visible focus, accessible labels, and clear result/error announcements.
- Respect reduced-motion preferences and maintain contrast in light/dark themes.
- Keep pages fast and avoid unnecessary third-party scripts.

### Official source register

Use the appropriate primary authority for each jurisdiction:
- UK: GOV.UK and HMRC — https://www.gov.uk/
- India: Income Tax Department — https://www.incometax.gov.in/
- India GST: https://www.gst.gov.in/
- US: IRS — https://www.irs.gov/
- Canada: Canada Revenue Agency — https://www.canada.ca/en/revenue-agency.html
- Australia: Australian Taxation Office — https://www.ato.gov.au/

Secondary sources may help explain a topic but must not replace official sources for tax rates or legal rules.

## Suggested delivery sequence

1. Complete Gate 0 and document the results.
2. Review official sources and write specifications for Phase 1 tools.
3. Implement and test one tool at a time, including all language versions.
4. Review SEO, accessibility, mobile performance, and calculation edge cases.
5. Keep completed work unlinked/unpublished until the owner approves the release.
6. Only after explicit approval, merge to production and deploy in a planned batch.

## Completion tracking

| Phase | Scope | Status |
|---|---|---|
| Gate 0 | Existing 7 tools × 3 languages | Pending full verification |
| Phase 1 | 8 priority tools | Planned |
| Phase 2 | UK tools | Planned |
| Phase 3 | India tools | Planned |
| Phase 4 | Global finance tools | Planned |
| Phase 5 | Guides, rates, templates and reference features | Planned |

**This roadmap does not mean any of the planned calculators have been implemented or tax-reviewed.**


## Phase 0.5 — Mobile-app-style Tool Discovery & Tool Detail UX

**Status:** Planned only — do not change the live site until explicitly approved.

### Product goal
A first-time visitor should be able to find the right tool quickly, understand what it does before entering data, complete the calculation on a phone, and understand the result without needing outside help.

### A. Main Tools Directory (app-like dashboard)
- Use a clean, mobile-first dashboard rather than one long plain list.
- Put a prominent search field near the top. Search must match tool names, synonyms, and localized terms in English, Hindi, and Marathi.
- Group tools into clear category sections with category filters. Initial categories: Popular, Loans & Mortgages, Savings & Investments, UK Tax, India Tax, Business & Invoices, Global Finance, and Planning & Templates.
- Show tools as individual cards/boxes in a responsive grid: two columns on typical phones and more columns on wider screens.
- Every card must show a recognizable icon, the complete readable tool name, and a short plain-language description. Never truncate or hide the tool name; allow card height to grow or wrap to multiple lines.
- Add a Popular tools section based on deliberate editorial selection at launch. Add Recently used only if it can be implemented privacy-safely without unnecessary tracking or accounts.
- Provide clear empty-search and no-results states, a reset/clear filter action, and visible category context.
- Keep navigation shallow: a visitor should reach any tool in no more than two clear taps from the directory.
- Do not use icon-only navigation for important actions. All controls need readable labels, adequate touch targets, keyboard support, and visible focus.

### B. Individual Tool Detail Page (same predictable structure for every tool)
1. Breadcrumb and full tool name.
2. One-sentence purpose and a short explanation of who should use it.
3. “How to use” steps before or beside the input form.
4. Clearly labelled input fields. Explain each field, accepted units, currency, period, and an example where useful.
5. Relevant jurisdiction and tax year selector where applicable; never imply a tool supports a country or tax year it does not support.
6. Clear Calculate / Generate action, with validation messages beside the relevant field.
7. A prominent result area with the key answer first, then a transparent breakdown, assumptions, and formula/method.
8. A worked example with sample inputs and expected output, clearly marked as illustrative.
9. Limitations, exclusions, and cases where the result may differ.
10. At least four useful FAQs, written and reviewed in the selected language.
11. Official source links and a visible “Last reviewed” date for tax/rate-dependent tools.
12. Related tools and a clear way back to the directory.

### C. Localization and trust
- The directory, search hints, category names, card descriptions, forms, validation, results, examples, FAQs, disclaimers, and navigation must all be available in English, Hindi, and Marathi for each published language version.
- Do not mix English interface labels into Hindi/Marathi pages except for necessary standard terms that are explained.
- Keep the language switcher visible and preserve the equivalent tool when switching languages.
- Clearly distinguish calculator estimates from official assessments. Show currency and rounding rules.
- Never show fabricated popularity counts, ratings, user counts, or “recently used” data.

### D. Design and quality checks
- Preserve the existing Taxplexa visual identity and static HTML/CSS/JS architecture.
- Design for narrow Android screens first; check common phone widths, tablet, and desktop.
- Ensure full tool names remain readable at 200% text zoom and do not overlap icons or controls.
- Search and category filters must work with keyboard and screen readers, not just visually.
- Check loading, empty, invalid-input, result, and error states.
- Test every directory link, language switch, calculator action, and back-navigation path.
- Do not add heavy libraries, third-party search APIs, login requirements, or tracking just for these features.
- Keep the directory fast and indexable. Tool detail pages remain the canonical SEO landing pages; category filters/search should not create duplicate indexable URLs.

### E. Release gate
Before release, prepare a complete tool inventory and reconcile the final count against the agreed scope (the current roadmap lists 34 proposed additions plus 7 existing tools). Approve category placement, display names, and translations. Build and test the directory and one representative detail-page template in a non-production preview first. Do not merge to `main` or trigger a production deployment without the owner's explicit approval.
