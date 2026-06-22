# Global AI industry: investable value chain, market structure, and ownership

**Research date:** 2026-06-22  
**Coverage:** global public companies that sell economically material AI infrastructure or software; strategically important private suppliers are identified separately  
**Confidence:** high on company products, listings, regulatory-filing figures, and the dated U.S. market snapshot; moderate on third-party market-share estimates; low or unknown where vendors do not disclose AI-specific revenue

## Executive conclusion

The AI trade is not one industry. It is a dependency chain:

`materials → chip IP/EDA → logic and memory → wafer fabrication → packaging/test → servers → copper/optics/fiber → power/cooling → data centers → cloud/edge → models/data/software`

The previous version of this report was wrong in scope. It screened only 35 U.S.-listed companies for a ≥70% market-share threshold. That excluded indispensable oligopolies and every important non-U.S. supplier. This version uses monopoly power as a **rating**, not an admission test.

The highest-confidence bottlenecks are ASML in EUV, TSMC in leading-edge foundry and advanced packaging, NVIDIA in merchant AI accelerators plus CUDA, Arm in mobile CPU architecture, the three-company HBM/DRAM oligopoly, Synopsys/Cadence/Siemens EDA, and a small group of high-speed optical-component vendors. Cloud is concentrated but not monopolized. Cooling is fragmented and product-specific.

AWS is **not a listed company**. It is a segment of Amazon.com, Inc. (NASDAQ: AMZN). Microsoft trades as NASDAQ: MSFT and owns Azure. Cloudflare trades as NYSE: NET; it is an edge network and developer platform, not a hyperscale cloud equivalent to AWS or Azure.

## 1. Cloud, edge, and AI distribution — the missing companies

| Company | Listing | AI products and economic role | Market structure | 2026-06-22 previous close / market cap | Top reported institutional positions* |
| --- | --- | --- | --- | ---: | --- |
| Microsoft | NASDAQ: MSFT | Azure GPU/CPU cloud, Azure AI Foundry, model APIs, Microsoft 365 Copilot, GitHub Copilot; custom Maia/Cobalt silicon | Azure is one of three global hyperscale leaders; strong enterprise distribution, but no monopoly | $379.40 / $2.824T | Vanguard (2025-12-31); BlackRock (2026-03-31); Vanguard Capital Management (2026-03-31) |
| Amazon | NASDAQ: AMZN | AWS EC2 GPU instances, Trainium, Inferentia, Bedrock, SageMaker, data/storage; Anthropic exposure | AWS is a hyperscale leader; custom chips reduce NVIDIA dependence; still faces Azure, Google, Oracle and sovereign clouds | $244.39 / $2.606T | Vanguard (2025-12-31); BlackRock (2026-03-31); Vanguard Capital Management (2026-03-31) |
| Alphabet | NASDAQ: GOOGL | Google Cloud, TPU, Vertex AI, Gemini, search/ads distribution | Top-three cloud provider; proprietary TPU and model stack; search distribution is more concentrated than cloud | $368.03 / $4.390T | Vanguard (2025-12-31); BlackRock (2026-03-31); Vanguard Capital Management (2026-03-31) |
| Oracle | NYSE: ORCL | OCI GPU superclusters, database, cloud applications | Smaller cloud share, but material AI-cluster deployments and database lock-in | $184.29 / $523.8B | Holder snapshot not included: Nasdaq response was incomplete |
| Cloudflare | NYSE: NET | Workers AI runs models on serverless GPUs across its network; AI Gateway provides routing, security, caching and observability; Vectorize stores/queries embeddings; CDN, security and developer runtime provide distribution | Differentiated global edge footprint, but competes with Akamai, Fastly and hyperscalers; **not a monopoly** | $224.06 / $79.53B | Vanguard (2025-12-31); Capital World Investors (2026-03-31); BlackRock (2026-03-31) |
| CoreWeave | NASDAQ: CRWV | GPU-specialized cloud and AI clusters | High direct AI exposure and concentration risk; competes with hyperscalers and other GPU clouds | $117.95 / $64.16B | Magnetar (2026-03-31); Vanguard (2025-12-31); Goldman Sachs (2026-03-31) |
| Akamai | NASDAQ: AKAM | CDN, security, edge compute and distributed cloud | Mature edge/CDN competitor; no AI monopoly | $124.91 / $17.90B | Vanguard (2025-12-31); BlackRock (2026-03-31); Vanguard Capital Management (2026-03-31) |
| Fastly | NYSE: FSLY | Edge cloud, CDN, security and compute | Smaller challenger; materially weaker scale than Cloudflare/Akamai | $17.90 / $2.792B | Vanguard (2025-12-31); BlackRock (2026-03-31); Vanguard Portfolio Management (2026-03-31) |

\* These are the three largest rows returned by Nasdaq's institutional-holdings aggregation, generally Form 13F positions. They are not necessarily the legal beneficial owners or voting controllers. Reporting dates differ, so the rows are evidence of disclosed institutional positions, not a perfectly synchronized ownership ranking.[^nasdaq]

### Filing-verified facts

- Microsoft's fiscal-2025 filing says Azure AI offers supercomputing, models, cloud services and custom silicon, and identifies Azure AI Foundry as its unified application/agent development platform. Microsoft reports Azure inside Intelligent Cloud rather than publishing standalone Azure financial statements.[^msft-10k]
- Amazon's 2025 Form 10-K reports that AWS sales grew 20% year over year. AWS cannot be purchased separately; AMZN owners also own retail, advertising, logistics and other Amazon businesses.[^amzn-10k]
- Cloudflare's 2025 Form 10-K explicitly describes Workers AI, AI Gateway and Vectorize. It reported 2025 revenue of **$2.1679B**, up **$498.3M or 30%**, with paying customers up 40% and fourth-quarter dollar-based net retention of 120%.[^net-10k]

## 2. Global investable value-chain map

This is an economically bounded universe: companies must sell a product used to design, manufacture, connect, power, cool, host, distribute or monetize AI. It deliberately excludes companies that merely add an “AI” feature to an otherwise unrelated product.

| Layer | Public companies — listing | Concrete products | Structure / bottleneck judgment |
| --- | --- | --- | --- |
| Semiconductor materials and gases | Shin-Etsu Chemical (TSE: 4063), SUMCO (TSE: 3436), GlobalWafers (TWSE: 6488), Siltronic (Xetra: WAF), Linde (NASDAQ: LIN), Air Liquide (EPA: AI), Air Products (NYSE: APD), Entegris (NASDAQ: ENTG) | silicon wafers, specialty gases, filtration and contamination control | Concentrated qualification-driven supply; no single universal monopoly |
| Substrates and packaging materials | Ibiden (TSE: 4062), Shinko Electric (TSE: 6967), Unimicron (TWSE: 3037), Nan Ya PCB (TWSE: 8046), Ajinomoto (TSE: 2802) | ABF build-up film, FC-BGA substrates, interposers and package materials | Capacity/qualification bottlenecks; Ajinomoto ABF is strategically important but “monopoly” requires a defined denominator |
| CPU/GPU/ASIC and IP | NVIDIA (NASDAQ: NVDA), AMD (NASDAQ: AMD), Broadcom (NASDAQ: AVGO), Marvell (NASDAQ: MRVL), Intel (NASDAQ: INTC), Qualcomm (NASDAQ: QCOM), Arm (NASDAQ: ARM), MediaTek (TWSE: 2454), Alchip (TWSE: 3661), GUC (TWSE: 3443) | accelerators, CPUs, NPUs, custom AI ASICs, SerDes and processor IP | NVIDIA/CUDA is the merchant-AI leader; Arm >99% mobile application-processor architecture share; custom ASICs are the main substitution vector |
| EDA and chip design software | Synopsys (NASDAQ: SNPS), Cadence (NASDAQ: CDNS), Siemens (Xetra: SIE) | logic design, verification, physical implementation, simulation and IP | Three-vendor oligopoly with extreme switching/qualification costs |
| DRAM, HBM and NAND/storage | SK hynix (KRX: 000660), Samsung Electronics (KRX: 005930), Micron (NASDAQ: MU), SanDisk (NASDAQ: SNDK), Kioxia (TSE: 285A), Western Digital (NASDAQ: WDC), Seagate (NASDAQ: STX) | HBM/DRAM, NAND, enterprise/client SSDs and HDDs | HBM/DRAM is a three-company oligopoly. **SanDisk is NAND/flash/SSD exposure, not HBM.** |
| Foundry | TSMC (TWSE: 2330; NYSE: TSM), Samsung Electronics, Intel, UMC (TWSE: 2303; NYSE: UMC), GlobalFoundries (NASDAQ: GFS), SMIC (HKEX: 0981; SSE: 688981) | wafer fabrication and process technology | TSMC led global foundry revenue at 70.2% in Q2 2025; leading-node capacity is still more concentrated than total foundry revenue[^trendforce] |
| Wafer-fab equipment | ASML (NASDAQ/Euronext: ASML), Applied Materials (NASDAQ: AMAT), Lam Research (NASDAQ: LRCX), KLA (NASDAQ: KLAC), Tokyo Electron (TSE: 8035), ASM International (AMS: ASM), BESI (AMS: BESI), Disco (TSE: 6146), Advantest (TSE: 6857), Teradyne (NASDAQ: TER) | lithography, deposition, etch, inspection, metrology, bonding, dicing and test | ASML is the only commercial EUV-system supplier; several process steps are oligopolies[^asml-20f] |
| Advanced packaging and test | TSMC, ASE Technology (TWSE: 3711; NYSE: ASX), Amkor (NASDAQ: AMKR), JCET (SSE: 600584), Tongfu Microelectronics (SZSE: 002156), Powertech (TWSE: 6239) | CoWoS/SoIC, 2.5D/3D packaging, bumping, assembly and test | TSMC CoWoS is a critical AI bottleneck, but packaging has alternatives and customer qualification cycles |
| Server ODM/EMS | Hon Hai/Foxconn (TWSE: 2317), Quanta (TWSE: 2382), Wistron (TWSE: 3231), Wiwynn (TWSE: 6669), Inventec (TWSE: 2356), Celestica (NYSE/TSX: CLS), Sanmina (NASDAQ: SANM), Fabrinet (NYSE: FN), Super Micro (NASDAQ: SMCI), Dell (NYSE: DELL), HPE (NYSE: HPE) | GPU baseboards, racks, servers, switches, integration and manufacturing | Taiwan-centered scale oligopoly; margins and customer concentration matter more than superficial AI labels |
| Switching and electrical interconnect | NVIDIA, Broadcom, Marvell, Credo (NASDAQ: CRDO), Astera Labs (NASDAQ: ALAB), Arista (NYSE: ANET), Cisco (NASDAQ: CSCO), Amphenol (NYSE: APH), TE Connectivity (NYSE: TEL) | InfiniBand/Ethernet switches, switch ASICs, NICs/DPUs, SerDes, PCIe/CXL retimers, active electrical cables and connectors | Broadcom/NVIDIA strong at silicon/fabric layers; Arista strong in cloud Ethernet; not one unified market |
| Optical DSP, SerDes and photonic silicon | Marvell (NASDAQ: MRVL), Broadcom (NASDAQ: AVGO), MACOM (NASDAQ: MTSI), Semtech (NASDAQ: SMTC), MaxLinear (NASDAQ: MXL), Credo | PAM4/coherent DSPs, laser drivers, TIAs, silicon photonics, PHYs, CPO/LPO chipsets and retimers | Marvell is a major optical-connectivity semiconductor vendor, not a fiber manufacturer. Qualification and high-speed mixed-signal IP create barriers, but no single vendor controls the full layer[^mrvl-10k] |
| Lasers, components and optical engines | Coherent (NYSE: COHR), Lumentum (NASDAQ: LITE), Applied Optoelectronics (NASDAQ: AAOI), TFC Optical (SZSE: 300394), Accelink (SZSE: 002281), Suzhou TFC/other qualified Chinese component vendors | EML/CW lasers, VCSELs, photodiodes, modulators, isolators, lenses, connectors and optical engines | Component shares differ by wavelength, reach and module generation; vendor qualification is the moat |
| Optical modules and manufacturing | Zhongji Innolight (SZSE: 300308), Eoptolink (SZSE: 300502), Accelink (SZSE: 002281), HG Genuine/HTGD (SZSE: 000988), Fabrinet (NYSE: FN), Applied Optoelectronics, Coherent, Ciena (NYSE: CIEN) | 400G/800G/1.6T pluggable modules, coherent modules and contract manufacturing | LightCounting estimated 2025 optical-transceiver sales at **$23.8B**; module assembly is not the same market as DSPs, lasers or fiber[^lightcounting] |
| Fiber, cable and passive connectivity | Corning (NYSE: GLW), Prysmian (BIT: PRY), Sumitomo Electric (TSE: 5802), Furukawa Electric (TSE: 5801), Fujikura (TSE: 5803), Yangtze Optical Fibre and Cable (HKEX: 6869; SSE: 601869), Hengtong Optic-Electric (SSE: 600487), ZTT (SSE: 600522), CommScope (NASDAQ: COMM), Belden (NYSE: BDC), Amphenol, TE Connectivity | optical fiber/preform, ribbon and high-count cable, data-center cabling, MPO/SN connectors and passive assemblies | This is the actual physical-fiber/cable layer. Scale, preform technology, qualification and installation ecosystems matter; MRVL does not manufacture the fiber strand |
| Grid, generation and power train | Eaton (NYSE: ETN), Schneider Electric (EPA: SU), ABB (SIX/NYSE: ABB), Vertiv (NYSE: VRT), Delta Electronics (TWSE: 2308), nVent (NYSE: NVT), Siemens Energy (Xetra: ENR), GE Vernova (NYSE: GEV), Caterpillar (NYSE: CAT), Cummins (NYSE: CMI), Bloom Energy (NYSE: BE) | switchgear, transformers, busways, UPS, rectifiers, backup generation and fuel cells | Grid interconnection and transformers can be project bottlenecks; the vendor market is competitive and regional |
| Cooling and thermal management | Vertiv, Schneider Electric, Johnson Controls (NYSE: JCI), Trane Technologies (NYSE: TT), Carrier (NYSE: CARR), Modine (NYSE: MOD), Munters (STO: MTRS), Daikin (TSE: 6367), Delta Electronics, Nidec (TSE: 6594), Asetek (CPH: ASTK) | chillers, CRAC/CRAH, rear-door heat exchangers, CDUs, cold plates, manifolds, pumps, fans and liquid-cooling controls | Fragmented by subsystem. Vertiv/Schneider have integrated data-center portfolios; no defensible claim that either monopolizes “AI cooling” |
| Colocation and data-center landlords | Equinix (NASDAQ: EQIX), Digital Realty (NYSE: DLR), GDS (NASDAQ/HKEX: GDS), VNET (NASDAQ: VNET), NEXTDC (ASX: NXT), Keppel DC REIT (SGX: AJBU) | powered shells, interconnection, colocation and hyperscale campuses | Local power, land and network access create regional scarcity, not a global monopoly |
| Cloud, edge and models | Microsoft, Amazon, Alphabet, Meta (NASDAQ: META), Oracle, IBM (NYSE: IBM), Alibaba (NYSE: BABA; HKEX: 9988), Tencent (HKEX: 0700), Baidu (NASDAQ: BIDU; HKEX: 9888), Cloudflare, Akamai, Fastly, CoreWeave | compute, storage, managed databases, model APIs, proprietary accelerators, edge inference and distribution | Hyperscale cloud is concentrated among AWS/Azure/Google; China is a separate competitive/regulatory market |
| Data and enterprise software | Palantir (NASDAQ: PLTR), Snowflake (NYSE: SNOW), Datadog (NASDAQ: DDOG), ServiceNow (NYSE: NOW), Salesforce (NYSE: CRM), MongoDB (NASDAQ: MDB), Adobe (NASDAQ: ADBE), C3.ai (NYSE: AI) | data platforms, observability, workflow, agents and AI applications | Valuable installed bases, but disclosed “AI revenue” is often incomplete; do not value ordinary revenue as pure AI revenue |

### Strategically important private companies

OpenAI, Anthropic, xAI, Mistral, Huawei/HiSilicon, Cerebras, Groq, CoolIT Systems, Boyd, LiquidStack, Submer, Source Photonics and Hisense Broadband matter to competitive outcomes but are not directly purchasable public equities. Fund holdings, SPVs or a public partner's minority stake do not create one-for-one economic exposure.

### Optical interconnect correction: Marvell is upstream of the fiber

An optical link must not be analyzed as a single “fiber company” market:

`switch/accelerator SerDes → DSP/driver/TIA → laser/modulator/photodiode → optical module assembly → connector/cable → glass fiber`

Marvell operates mainly in the first three electronic/photonic stages. Its fiscal-2026 Form 10-K lists PAM, coherent and coherent-lite DSPs; laser drivers; TIAs; silicon photonics; co-packaged optics; linear pluggable optics chipsets; data-center interconnect; AEC DSPs; and PCIe retimers. It also says AI demand drove strong growth in its custom products and electro-optics portfolio.[^mrvl-10k]

| MRVL item | Verified data | Investment implication |
| --- | --- | --- |
| Security | NASDAQ: MRVL | Public semiconductor exposure, not a fiber/cable manufacturer |
| 2026-06-22 snapshot | Previous close $310.58; market cap $274.38B; 52-week $61.44–$324.20 | Large valuation already embeds substantial AI/connectivity expectations |
| Reported institutional positions | FMR (2026-03-31), Vanguard (2025-12-31), BlackRock (2026-03-31) | Nasdaq 13F aggregation; dates are not synchronized and do not prove voting control |
| Optical products | PAM/coherent DSP, drivers, TIAs, silicon photonics, CPO/LPO, DCI and optical PHY | Direct exposure to bytes moved per accelerator, reach transition and higher link speeds |
| Electrical products | AEC DSP and PCIe retimers | MRVL benefits even where short-reach links remain copper |
| Photonic expansion | Marvell completed its Celestial AI acquisition on 2026-02-02; the filing records about $1.3B cash paid, 24.5M shares issued and potential contingent consideration | Adds scale-up Photonic Fabric technology, but also integration, dilution and earn-out risk |
| Main risk | A few customers represent a significant portion of revenue; the filing flags growing data-center concentration | Hyperscaler design wins can produce discontinuous revenue in both directions |

**BNIS status:** no `BNIS` ticker or matching issuer appears in the SEC company-ticker file checked on 2026-06-22. It is not added as a company because its legal name and exchange are unverified. Possible spelling similarity is not evidence.

## 3. Required memory/storage correction: SanDisk and Micron

| Company | Product exposure | Dated stock snapshot | Ownership evidence | Investment reading |
| --- | --- | ---: | --- | --- |
| SanDisk Corp | NAND flash, enterprise/client SSD and flash products; **not HBM** | NASDAQ: SNDK; previous close $2,184.75; market cap $334.39B; 52-week $40.10–$2,167.33 | Vanguard 16,976,485 shares (2025-12-31); FMR 13,389,985 and BlackRock 10,403,455 (both 2026-03-31), per Nasdaq 13F aggregation | Direct AI storage exposure through high-performance enterprise flash, but NAND pricing is cyclical and structurally different from HBM scarcity |
| Micron | HBM, DRAM and NAND | NASDAQ: MU; previous close $1,133.99; market cap $1.319T; 52-week $103.38–$1,110.40 | Vanguard, BlackRock and Vanguard Capital Management were the three largest returned institutional rows | Direct HBM beneficiary; competes with SK hynix and Samsung rather than owning a monopoly |
| Sanmina | EMS, PCB assemblies, backplanes and systems manufacturing | NASDAQ: SANM; previous close $241.49; market cap $12.97B; 52-week $88.52–$288.68 | Separate from SNDK; holder data must be read from SANM filings/Nasdaq | Include as manufacturing exposure. “SNAK” is not a valid SEC-listed ticker; the likely intended manufacturing ticker was SANM |

SanDisk's latest annual filing is its fiscal-2025 Form 10-K, filed 2025-08-21.[^sndk-10k] Its huge 52-week range and previous close above the reported range indicate that price history and corporate-action adjustments must be checked before calculating returns or valuation multiples. The table preserves the source values instead of silently “fixing” them.

## 4. U.S.-listed market-cap cross-check

The following Nasdaq snapshot is dated **2026-06-22**. It is a price/size screen, not a valuation conclusion.

| Layer | Ticker | Previous close | Market cap |
| --- | --- | ---: | ---: |
| Compute | NVDA | $210.69 | $5.067T |
| Compute | AMD | $537.37 | $877.33B |
| Custom silicon/networking | AVGO | $410.70 | $1.925T |
| Custom silicon/networking | MRVL | $310.58 | $274.38B |
| Memory | MU | $1,133.99 | $1.319T |
| Storage | SNDK | $2,184.75 | $334.39B |
| Equipment | ASML | $1,929.68 | $740.18B |
| Equipment | AMAT | $617.11 | $492.03B |
| Equipment | LRCX | $389.04 | $484.10B |
| Equipment | KLAC | $259.56 | $336.08B |
| Networking | ANET | $169.67 | $214.11B |
| Optics/fiber | COHR | $389.57 | $77.12B |
| Optics/fiber | LITE | $850.00 | $65.82B |
| Fiber | GLW | $194.92 | $171.61B |
| Power | ETN | $421.77 | $164.49B |
| Cooling | MOD | $297.37 | $15.71B |
| Server | DELL | $409.50 | $266.83B |
| Colocation | EQIX | $1,092.19 | $105.65B |
| Colocation | DLR | $188.15 | $66.06B |

Market capitalization is not enterprise value, does not normalize ADR ratios or cross-listed shares, and can diverge between vendors. Use the dated snapshot only for order-of-magnitude comparison.[^nasdaq]

## 5. Ownership: what the data does and does not establish

Institutional “top holder” tables are frequently abused. Form 13F reports long U.S. positions with a delay; they omit many non-U.S. ordinary shares, shorts, derivatives and some beneficial ownership arrangements. Index managers can be the largest economic holders without controlling the company.

For control analysis, use the latest proxy/20-F beneficial-ownership table:

- Arm is controlled by SoftBank; Nasdaq's ADR institutional table therefore does not identify the controlling economic owner.
- Alphabet and Meta use dual-class shares; founder voting power matters more than a simple count of institutionally held Class A shares.
- Amazon founder Jeff Bezos's beneficial ownership must be read from Amazon's proxy, separately from 13F rows.
- Foreign issuers such as TSMC, Samsung, SK hynix, Hon Hai and Chinese issuers require local annual reports and exchange disclosures. U.S. ADR holder tables cover the depositary security, not the entire global ordinary-share register.

The correct research record for every position is therefore: security type, exchange, share class/ADR ratio, controlling holder, top reported institutions, reporting dates, free float and dilution. A single “largest holder” field is not enough.

## 6. Market-size and monopoly scorecard

| Market | Best verified datapoint used here | Structure | Confidence |
| --- | --- | --- | --- |
| EUV lithography | ASML states it is the world's only EUV-system manufacturer | Monopoly | High |
| Mobile application-processor architecture | Arm reports >99% share | Installed-architecture monopoly | High |
| Global foundry revenue | TSMC 70.2% in Q2 2025; 69.9% for full-year 2025 per TrendForce | Dominant supplier plus competitors | Moderate-high |
| Discrete add-in-board GPUs | NVIDIA 94% of Q4-2025 shipments per Jon Peddie Research | Dominant; denominator is not “all AI accelerators” | Moderate-high |
| Optical transceivers | $23.8B sales in 2025 per LightCounting | Fragmented by module speed/component | Moderate |
| HBM | Samsung, SK hynix and Micron are the qualified high-volume supplier set | Three-company oligopoly; shares change by generation/customer | High on structure; moderate on shares |
| Hyperscale cloud | AWS, Azure and Google are the global leaders | Three-leader concentration, no monopoly | High on structure; moderate on point shares |
| Data-center liquid cooling | No public source reviewed supports a single global monopoly | Multi-vendor, fast-growing and product-specific | High |

## 7. Investment framework

Do not buy “AI exposure.” Buy a cash-flow claim after testing five variables:

1. **Revenue purity:** quantify how much revenue actually comes from AI demand; unknown is not zero, but it is not evidence.
2. **Market power:** define the product and denominator before quoting share. NVIDIA's AIB share is not its share of all AI compute.
3. **Capacity and customer concentration:** bottlenecks can produce pricing power, but one or two hyperscale buyers can capture the economics.
4. **Capital intensity and working capital:** foundries, memory, data centers and power equipment require very different reinvestment rates from IP/software businesses.
5. **Valuation and expectations:** compare enterprise value with normalized free cash flow under base, bear and supply-glut scenarios. Market cap alone does not answer expected return.

The strongest businesses are not automatically the strongest stocks. A near-monopoly priced for impossible growth can underperform a competitive supplier bought below replacement value.

## Sources

[^msft-10k]: Microsoft, fiscal-2025 Form 10-K, filed 2025-07-30: https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm
[^amzn-10k]: Amazon.com, 2025 Form 10-K, filed 2026-02-06: https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm
[^net-10k]: Cloudflare, 2025 Form 10-K, filed 2026-02-26: https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm
[^sndk-10k]: SanDisk, fiscal-2025 Form 10-K, filed 2025-08-21: https://www.sec.gov/Archives/edgar/data/2023554/000202355425000034/sndk-20250627.htm
[^asml-20f]: ASML, 2025 Form 20-F, filed 2026-02-25: https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm
[^mrvl-10k]: Marvell Technology, fiscal-2026 Form 10-K, filed 2026-03-11: https://www.sec.gov/Archives/edgar/data/1835632/000183563226000011/mrvl-20260131.htm
[^trendforce]: TrendForce foundry market releases, 2025-09-01 and 2026-03-12: https://www.trendforce.com/presscenter
[^lightcounting]: LightCounting, optical transceiver market update, 2026-03-13: https://www.lightcounting.com
[^nasdaq]: Nasdaq market-activity quote and institutional-holdings services, retrieved 2026-06-22: https://www.nasdaq.com/market-activity/stocks
