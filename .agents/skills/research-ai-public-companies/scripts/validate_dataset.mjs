#!/usr/bin/env node
import fs from "node:fs";
if (!process.argv[2]) throw new Error("Usage: validate_dataset.mjs <radar.json>");
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const quality = data.qualityDimensions.map((item) => item.key).sort();
const risk = data.riskDimensions.map((item) => item.key).sort();
const tickers = new Set();
for (const company of data.companies) {
  if (tickers.has(company.ticker)) throw new Error(`Duplicate ticker: ${company.ticker}`);
  tickers.add(company.ticker);
  for (const [kind, expected] of [["quality", quality], ["risk", risk]]) {
    if (JSON.stringify(Object.keys(company[kind] ?? {}).sort()) !== JSON.stringify(expected)) throw new Error(`${company.ticker}: incomplete ${kind}`);
    for (const [key, value] of Object.entries(company[kind])) if (!Number.isInteger(value) || value < 0 || value > 100) throw new Error(`${company.ticker}: invalid ${kind}.${key}`);
  }
  for (const key of ["name", "peerGroup", "confidence", "controlHolder", "largest13F", "evidence"]) if (company[key] === undefined || company[key] === "") throw new Error(`${company.ticker}: missing ${key}`);
}
console.log(`Validated ${data.companies.length} companies.`);
