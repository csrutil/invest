#!/usr/bin/env node
import fs from "node:fs";
if (!process.argv[2]) throw new Error("Usage: validate_universe.mjs <universe.json>");
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const ids = new Set();
for (const company of data.companies) {
  if (ids.has(company.id)) throw new Error(`Duplicate listing: ${company.id}`);
  ids.add(company.id);
  for (const key of ["id", "issuerName", "exchange", "ticker", "radarStatus", "confidence", "missing"]) if (company[key] === undefined || company[key] === null || company[key] === "") throw new Error(`${company.id}: missing ${key}`);
  if (!['complete', 'pending'].includes(company.radarStatus)) throw new Error(`${company.id}: invalid status`);
  if (company.radarStatus === "complete" && company.missing.length) throw new Error(`${company.id}: complete with missing fields`);
  if (company.radarStatus === "pending" && !company.missing.length) throw new Error(`${company.id}: pending without missing fields`);
}
if (data.listingCount !== data.companies.length) throw new Error("listingCount mismatch");
console.log(`Validated ${data.companies.length} listing identifiers.`);
