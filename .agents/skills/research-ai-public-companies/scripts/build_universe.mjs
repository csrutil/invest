#!/usr/bin/env node
import fs from "node:fs";

function option(name) {
  const index = process.argv.indexOf(name);
  if (index < 0 || !process.argv[index + 1]) throw new Error(`Missing ${name}`);
  return process.argv[index + 1];
}

const report = fs.readFileSync(option("--report"), "utf8");
const radar = JSON.parse(fs.readFileSync(option("--data"), "utf8"));
const output = option("--output");
const exchange = "NASDAQ|NYSE|TWSE|TSE|KRX|HKEX|SSE|SZSE|Xetra|EPA|AMS|BIT|SIX|STO|CPH|ASX|SGX";
const listingPattern = new RegExp(`(${exchange})(?:\\/[^:;)]+)?: ([A-Z0-9.]+)`, "g");
const completed = new Map(radar.companies.map((company) => [company.ticker, company]));
const names = new Map();

for (const line of report.split("\n")) {
  const table = line.match(/^\|\s*([^|]+?)\s*\|\s*((?:NASDAQ|NYSE)[^|]*?:\s*[A-Z0-9.]+)/);
  if (table) {
    const match = [...table[2].matchAll(listingPattern)][0];
    if (match) names.set(`${match[1]}:${match[2]}`, table[1].trim());
  }
  for (const block of line.matchAll(/([^,|;]+?)\s*\(([^)]*(?:NASDAQ|NYSE|TWSE|TSE|KRX|HKEX|SSE|SZSE|Xetra|EPA|AMS|BIT|SIX|STO|CPH|ASX|SGX)[^)]*)\)/g)) {
    const name = block[1].trim().replace(/^and\s+/i, "");
    for (const match of block[2].matchAll(listingPattern)) names.set(`${match[1]}:${match[2]}`, name);
  }
}

const listings = new Map();
for (const match of report.matchAll(listingPattern)) {
  const key = `${match[1]}:${match[2]}`;
  const company = completed.get(match[2]);
  listings.set(key, {
    id: key,
    issuerName: company?.name ?? names.get(key) ?? null,
    exchange: match[1],
    ticker: match[2],
    radarStatus: company ? "complete" : "pending",
    confidence: company?.confidence ?? "unknown",
    missing: company ? [] : ["canonicalIssuer", "financials", "marketStructure", "risks", "beneficialOwnership", "13FApplicability", "valuationInputs", "radarScores"]
  });
}

const companies = [...listings.values()].sort((a, b) => a.exchange.localeCompare(b.exchange) || a.ticker.localeCompare(b.ticker));
fs.writeFileSync(output, `${JSON.stringify({asOf: radar.asOf, listingCount: companies.length, companies}, null, 2)}\n`);
console.log(JSON.stringify({listings: companies.length, complete: companies.filter((company) => company.radarStatus === "complete").length, pending: companies.filter((company) => company.radarStatus === "pending").length, unresolvedNames: companies.filter((company) => !company.issuerName).length}));
