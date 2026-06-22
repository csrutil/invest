import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const input = JSON.parse(fs.readFileSync(path.join(root, "data/ai-company-radar.json"), "utf8"));
const outputDir = path.join(root, "reports/charts");
const colors = { quality: "#147d64", risk: "#c34232" };

function escape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function point(cx, cy, radius, index, count) {
  const angle = -Math.PI / 2 + index * 2 * Math.PI / count;
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

function polygon(points) {
  return points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

function chart(company, kind, dimensions) {
  const width = 900;
  const height = 650;
  const cx = 330;
  const cy = 330;
  const radius = 220;
  const count = dimensions.length;
  const color = colors[kind];
  const title = kind === "quality" ? "Investment quality — higher is better" : "Risk exposure — higher is worse";
  const values = dimensions.map((dimension) => {
    const value = company[kind][dimension.key];
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new Error(`${company.ticker}: invalid ${kind}.${dimension.key}`);
    }
    return value;
  });
  const rings = [20, 40, 60, 80, 100].map((level) =>
    `<polygon points="${polygon(dimensions.map((_, index) => point(cx, cy, radius * level / 100, index, count)))}" fill="none" stroke="#d5d9dd" stroke-width="1"/>`
  ).join("\n");
  const axes = dimensions.map((dimension, index) => {
    const [x, y] = point(cx, cy, radius, index, count);
    const [lx, ly] = point(cx, cy, radius + 42, index, count);
    const anchor = lx < cx - 20 ? "end" : lx > cx + 20 ? "start" : "middle";
    return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#b8bec4"/>
    <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle" font-size="14">${escape(dimension.label)}</text>`;
  }).join("\n");
  const dataPoints = values.map((value, index) => point(cx, cy, radius * value / 100, index, count));
  const dots = dataPoints.map(([x, y], index) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="${color}"><title>${escape(dimensions[index].label)}: ${values[index]}</title></circle>`).join("\n");
  const legend = dimensions.map((dimension, index) => `<text x="620" y="${230 + index * 29}" font-size="14" fill="#30363d">${escape(dimension.label)}: ${values[index]}</text>`).join("\n");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escape(company.name)} ${escape(title)}</title>
  <desc id="desc">Radar score based on the dated evidence and rubric in reports/ai-company-radar.md.</desc>
  <rect width="100%" height="100%" fill="#ffffff"/>
  <text x="42" y="45" font-size="25" font-weight="700" fill="#111827">${escape(company.name)} (${escape(company.ticker)})</text>
  <text x="42" y="75" font-size="17" fill="${color}">${escape(title)}</text>
  <text x="620" y="115" font-size="14" fill="#4b5563">Evidence date: ${escape(input.asOf)}</text>
  <text x="620" y="142" font-size="14" fill="#4b5563">Confidence: ${escape(company.confidence)}</text>
  <text x="620" y="169" font-size="14" fill="#4b5563">Peer group: ${escape(company.peerGroup)}</text>
  ${rings}
  ${axes}
  <polygon points="${polygon(dataPoints)}" fill="${color}" fill-opacity="0.24" stroke="${color}" stroke-width="3"/>
  ${dots}
  <text x="620" y="205" font-size="15" font-weight="700" fill="#111827">Scores (0–100)</text>
  ${legend}
  <text x="42" y="625" font-size="12" fill="#6b7280">Scores are rubric-based research assessments, not measurements or forecasts. See source file for inputs and ownership definitions.</text>
</svg>
`;
}

fs.mkdirSync(outputDir, { recursive: true });
for (const company of input.companies) {
  fs.writeFileSync(path.join(outputDir, `${company.ticker.toLowerCase()}-quality.svg`), chart(company, "quality", input.qualityDimensions));
  fs.writeFileSync(path.join(outputDir, `${company.ticker.toLowerCase()}-risk.svg`), chart(company, "risk", input.riskDimensions));
}
console.log(`Generated ${input.companies.length * 2} charts for ${input.companies.length} companies.`);
