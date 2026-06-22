#!/usr/bin/env node
import fs from "node:fs";
function option(name) { const index = process.argv.indexOf(name); if (index < 0 || !process.argv[index + 1]) throw new Error(`Missing ${name}`); return process.argv[index + 1]; }
const report = fs.readFileSync(option("--report"), "utf8");
const data = JSON.parse(fs.readFileSync(option("--data"), "utf8"));
const output = option("--output");
const pattern = /(NASDAQ|NYSE|TWSE|TSE|KRX|HKEX|SSE|SZSE|Xetra|EPA|AMS|BIT|SIX|STO|CPH|ASX|SGX)(?:\/[^:;)]+)?: ([A-Z0-9.]+)/g;
const listings = new Map();
for (const match of report.matchAll(pattern)) listings.set(`${match[1]}:${match[2]}`, {exchange: match[1], ticker: match[2]});
const completed = new Set(data.companies.map((company) => company.ticker));
const rows = [...listings.values()].sort((a, b) => a.exchange.localeCompare(b.exchange) || a.ticker.localeCompare(b.ticker));
const covered = rows.filter((row) => completed.has(row.ticker));
const missing = rows.filter((row) => !completed.has(row.ticker));
const lines = ["# Radar coverage audit", "", `- Listing identifiers: ${rows.length}`, `- Completed identifiers: ${covered.length}`, `- Missing identifiers: ${missing.length}`, "", "## Missing", ""];
for (const [exchange, group] of Map.groupBy(missing, (row) => row.exchange)) lines.push(`### ${exchange}`, "", group.map((row) => `\`${row.ticker}\``).join(", "), "");
fs.writeFileSync(output, `${lines.join("\n")}\n`);
console.log(JSON.stringify({listings: rows.length, covered: covered.length, missing: missing.length}));
