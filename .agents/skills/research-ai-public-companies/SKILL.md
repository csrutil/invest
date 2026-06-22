---
name: research-ai-public-companies
description: Build and audit a global public-company universe across the AI value chain, verify listings and products, collect filing-based financials, beneficial ownership and Form 13F institutional positions, score investment quality and risk, and generate or update radar-chart datasets. Use for global AI-company screens, missing-company audits, semiconductor/cloud/networking/optics/power/cooling company research, shareholder and 13F analysis, or evidence-backed radar charts.
---

# Research AI Public Companies

Build a complete, auditable company registry before ranking or charting. Never silently exclude an issuer because a metric is missing.

## Workflow

1. Extract every exchange/ticker identifier from the requested universe.
2. Canonicalize the legal issuer, security class, ordinary listing, ADR/ADS and ADR ratio. Preserve listing aliases under one issuer.
3. Compare the canonical universe with the completed dataset. Publish the missing list and exact coverage ratio.
4. Research missing issuers from primary sources first: annual/interim filing; proxy, 20-F or local ownership filing; SEC Form 13F data; exchange quote source; regulator or named market-research source.
5. Separately record voting controller, largest beneficial/economic owner, and largest reported 13F institution.
6. Record `N/A`, missing reason and confidence when evidence is unavailable. Never convert missing data to a neutral score.
7. Score only after the completion gate in [references/rubric.md](references/rubric.md) passes.
8. Generate separate quality and risk charts. Higher means better on quality; higher means worse on risk.
9. Re-run coverage audit and validation. Report completed, missing, failed and cross-listed counts.

## Required fields

Retain legal issuer, country, listing aliases, value-chain layer, concrete products, dated market data, annual/interim financials, market structure, material risks, ownership/control, 13F position, raw scoring inputs, evidence URLs and confidence.

## Source rules

- Prefer SEC, exchange, issuer filings and local regulators.
- Treat Form 13F as delayed U.S. long-position disclosure, not a live global cap table or proof of control.
- For foreign issuers, do not let an ADR 13F table replace the ordinary-share register.
- Date every market value and ownership position.
- Define the denominator before publishing market share.
- Do not rank across peer groups until normalization and weights are explicit.

## Resources

- Read [references/rubric.md](references/rubric.md) before scoring.
- Run `scripts/build_universe.mjs --report <industry.md> --data <radar.json> --output <universe.json>` to add every listing identifier to the master registry before research begins.
- Run `scripts/render_universe.mjs <universe.json> <universe.md>` to publish every completed and pending identifier.
- Run `scripts/validate_universe.mjs <universe.json>` to reject duplicate IDs, unresolved names or silent missing-state records.
- Run `scripts/audit_coverage.mjs --report <industry.md> --data <radar.json> --output <coverage.md>` to enumerate missing identifiers.
- Run `scripts/validate_dataset.mjs <radar.json>` before generating charts or committing.
