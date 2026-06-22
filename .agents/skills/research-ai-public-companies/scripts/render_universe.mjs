#!/usr/bin/env node
import fs from "node:fs";
if (!process.argv[2] || !process.argv[3]) throw new Error("Usage: render_universe.mjs <universe.json> <universe.md>");
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const complete = data.companies.filter((company) => company.radarStatus === "complete").length;
const pending = data.companies.length - complete;
const lines = [
  "# Global AI public-company master universe", "",
  `**Data date:** ${data.asOf}  `,
  `**Exchange/ticker identifiers:** ${data.companies.length}  `,
  `**Completed radar datasets:** ${complete}  `,
  `**Pending evidence and scoring:** ${pending}`, "",
  "Every identifier extracted from the industry report is present below. `pending` is an explicit research state, not an exclusion and not a neutral score. Cross-listed ordinary shares and ADRs can represent the same legal issuer.", ""
];
for (const [exchange, companies] of Map.groupBy(data.companies, (company) => company.exchange)) {
  lines.push(`## ${exchange}`, "", "| Company | Ticker | Radar status | Confidence | Missing field groups |", "| --- | --- | --- | --- | --- |");
  for (const company of companies) lines.push(`| ${company.issuerName} | ${company.ticker} | ${company.radarStatus} | ${company.confidence} | ${company.missing.length ? company.missing.join(", ") : "None"} |`);
  lines.push("");
}
lines.push("Source of truth: [`data/ai-company-universe.json`](../data/ai-company-universe.json). Completion requires the gate in [the repository skill](../.agents/skills/research-ai-public-companies/SKILL.md).", "");
fs.writeFileSync(process.argv[3], lines.join("\n"));
console.log(`Rendered ${data.companies.length} identifiers.`);
