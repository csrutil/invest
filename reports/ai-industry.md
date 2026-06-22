# U.S.-listed AI companies with monopoly-like products

**Research date:** 2026-06-22  
**Universe:** companies listed on Nasdaq or the NYSE, including foreign issuers and ADRs  
**Confidence:** high that the four core names satisfy the stated screen; moderate that the screen is exhaustive because private market-share datasets and product-market definitions change

## Conclusion

Only four companies survived a strict screen:

| Company | U.S. listing | Monopoly-like product market | Concentration evidence | AI connection | Confidence |
| --- | --- | --- | --- | --- | --- |
| ASML Holding | Nasdaq: ASML | EUV lithography systems | ASML states it is the world's only manufacturer: effectively 100% | EUV is required for economical production of many leading-edge logic and memory chips used in AI systems | High |
| Arm Holdings | Nasdaq: ARM | Mobile application-processor CPU architecture | Arm reports greater than 99% share for many years | Arm CPUs run edge-AI workloads and also serve cloud, automotive, robotics, and IoT systems | High |
| NVIDIA | Nasdaq: NVDA | Discrete add-in-board GPUs; merchant data-center AI accelerators | Jon Peddie Research's Q4-2025 estimate gives NVIDIA 94% of discrete add-in-board GPU shipments; the UK CMA identifies NVIDIA as the leading AI-accelerator supplier | Direct: training and inference compute, networking, CUDA, and AI software | Moderate-high |
| Taiwan Semiconductor Manufacturing Company | NYSE: TSM | Leading-edge contract chip fabrication | TrendForce measured 70.2% of global foundry revenue in Q2 2025; full-year 2025 was 69.9%, a rounding-level miss against the screen | Direct: manufactures leading GPUs, custom accelerators, CPUs, and advanced packaging | Moderate-high |

This is a market-structure result, not a buy list. A monopoly bought at an excessive price can be a bad investment. Market share also attracts customer substitution, regulation, export controls, and aggressive competitors.

## Stock and market-cap snapshot

Nasdaq's quote service was queried at **2026-06-22 04:47 ET**, during U.S. premarket trading. Last prices are real-time premarket indications; market capitalizations and 52-week ranges in the same service were calculated from the previous close. Values can therefore differ from the next regular-session close.[^nasdaq-quotes]

| Company | Ticker / exchange | Last price | Previous close | Market cap | 52-week range | Indicated annual dividend / yield |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| NVIDIA | NVDA / Nasdaq Global Select | $209.50 | $210.69 | $5.072 trillion | $142.03–$236.54 | $1.00 / 0.49% |
| ASML Holding | ASML / Nasdaq Global Select | $1,923.50 | $1,929.68 | $741.49 billion | $683.48–$1,938.49 | $12.6738 / 0.68% |
| Arm Holdings | ARM / Nasdaq Global Select | $430.6503 | $439.46 | $459.35 billion | $100.02–$444.80 | None reported |
| TSMC ADR | TSM / NYSE | $467.4605 | $462.12 | $2.424 trillion | $206.2015–$450.1636 | Not returned by the source |

The TSM premarket price exceeded the prior 52-week high because the range had not yet incorporated that premarket indication. Market cap is rounded from the Nasdaq values: NVDA $5,071,594 million; ASML $741,485.8 million; ARM $459,352.3 million; and TSM $2,424,192.1 million.[^nasdaq-quotes]

### Listing and security structure

- **NVDA** is NVIDIA common stock. It is a U.S. domestic issuer reporting on Form 10-K.
- **ASML** is the Nasdaq-listed New York registry share of a Dutch issuer. The same economic company also trades in Amsterdam; currency, venue, and withholding-tax treatment matter.
- **ARM** is an American depositary share of a UK issuer. SoftBank remains a controlling shareholder, so free float and governance differ from a widely held U.S. company.[^arm-20f]
- **TSM** is an ADR, not the Taiwan ordinary share. TSMC's filing states that each ADS represents **five common shares**.[^tsm-20f]

### Fiscal fundamentals behind the market caps

| Company | Latest fiscal period | Revenue | Net income | Directly relevant concentration metric |
| --- | --- | ---: | ---: | --- |
| NVIDIA | FY ended 2026-01-25 | $215.938B | $120.067B | Compute & Networking was 89.6% of revenue |
| ASML | Year ended 2025-12-31 | €32.667B | €9.609B | Four customers were 61.2% of sales |
| Arm | FY ended 2026-03-31 | $4.920B | $904M | Mobile application processors were 43% of royalty revenue; share compensation was $1.056B |
| TSMC | Year ended 2025-12-31 | NT$3.809T / $121.423B | NT$1.698T / $54.116B | Nodes at 7 nm and below were 74% of wafer revenue |

The table deliberately does not present a P/E ratio for Arm: a market-data multiple without consistent treatment of share compensation, controlling-shareholder structure, and depositary shares would create false comparability. For all four names, valuation must be recomputed from the same timestamp, share definition, currency, and earnings period before making an investment decision.

## Definition and method

### What counts as “AI-related”

A company must supply one of these economically necessary layers:

1. AI compute or processor intellectual property;
2. leading-edge semiconductor fabrication or manufacturing equipment;
3. memory, networking, servers, power, or cooling used by AI infrastructure;
4. cloud infrastructure, foundation models, or AI development platforms; or
5. enterprise software whose disclosed product and revenue strategy materially depends on AI.

Merely mentioning AI in an earnings call does not qualify.

### What counts as “almost monopoly”

At least one current product market must satisfy one of these tests:

- at least **70% market share** under a stated denominator;
- the company is the **only commercial supplier** of a necessary product; or
- an installed architecture exceeds **90%** and has material switching costs.

The market must be economically meaningful and not engineered into a tiny category merely to manufacture a high share.

### Screened universe

The screen covered 35 U.S.-listed companies across the AI value chain:

- **Compute, processors, memory, and connectivity:** NVIDIA, AMD, Intel, Qualcomm, Arm, Broadcom, Marvell, Micron.
- **Foundry and semiconductor equipment:** TSMC, ASML, Applied Materials, Lam Research, KLA.
- **Electronic design automation:** Synopsys, Cadence.
- **Networks, power, cooling, and servers:** Arista Networks, Vertiv, Dell, Hewlett Packard Enterprise, Super Micro Computer, CoreWeave.
- **Cloud, models, and platforms:** Microsoft, Alphabet, Amazon, Meta Platforms, Oracle, IBM.
- **Data and applications:** Palantir, Salesforce, Adobe, ServiceNow, Snowflake, Datadog, MongoDB, C3.ai.

This is a broad investable screen, not literally every public company that uses AI. No finite list can include every company that uses a general-purpose technology. The reproducible claim is narrower: the major U.S.-listed AI value-chain companies were screened against the ≥70% rule.

## 1. ASML Holding — the clearest monopoly

### Verified facts

- ASML's 2025 Form 20-F states: “ASML is currently the world's only manufacturer of EUV lithography systems.” That is a company-disclosed 100% supplier position, not an analyst inference.[^asml-20f]
- ASML competes with Canon and Nikon in **DUV**, so the monopoly claim must not be extended to all lithography equipment.[^asml-20f]
- ASML reported 2025 net sales of **€32.667 billion**, net income of **€9.609 billion**, and R&D spending of **€4.7 billion**.[^asml-20f]
- Its filing says 2025 sales growth was supported by leading-edge foundry investment for AI demand. It also identifies AI demand as a driver of logic and memory capacity.[^asml-20f]
- The same filing reports that the largest customer represented **23.9%** of 2025 sales and the two largest represented **38.0%**. Four customers represented **61.2%** of sales.[^asml-20f]

### Why the position exists

The barrier is a system of barriers: EUV light generation, Zeiss optics, precision mechatronics, computational lithography, process control, thousands of suppliers, customer qualification, and decades of accumulated production learning. A competitor must reproduce the complete system at commercially acceptable yield and uptime; matching one component is insufficient.

### What can break the thesis

- Export controls can remove addressable customers. China represented **29.1%** of ASML's 2025 sales.[^asml-20f]
- ASML relies on Carl Zeiss SMT as its sole supplier of critical EUV optical components.[^asml-20f]
- Customers can delay leading-edge fab spending or extend existing tools.
- Alternative patterning and manufacturing architectures could reduce lithography intensity.
- Customer concentration gives a small group of chipmakers substantial bargaining power.

### Judgment

**Monopoly evidence: high. AI exposure: high but indirect.** ASML is the cleanest market-structure result in the screen. Its weakness is not competition in EUV today; it is geopolitical restriction, cyclicality, customer concentration, and supply-chain concentration.

## 2. Arm Holdings — a 99% architecture position in smartphones

### Verified facts

- Arm's fiscal-2026 Form 20-F reports **greater than 99% market share** in mobile application processors for many years because all key mobile operating systems depend on Arm processors.[^arm-20f]
- That market produced approximately **43% of Arm's royalty revenue** in fiscal 2026.[^arm-20f]
- Arm reported fiscal-2026 revenue of **$4.920 billion**, up **23%** from $4.007 billion in fiscal 2025. Royalty revenue was $2.613 billion and license-and-other revenue was $2.307 billion.[^arm-20f]
- Arm says its CPUs already run AI workloads in billions of devices and organizes its strategy into Edge AI, Physical AI, and Cloud AI.[^arm-20f]

### Why the position exists

Arm is an architecture and ecosystem monopoly, not a chip-manufacturing monopoly. Mobile operating systems, developer tools, software, chip designs, and engineering teams have accumulated around its instruction set. Licensees can differentiate their chips while retaining software compatibility. That combination creates network effects without requiring Arm to manufacture every chip.

### What can break the thesis

- Smartphone unit growth is mature, and 43% of royalties still depend on that market.
- RISC-V is an open architecture with no Arm royalty and can attack from embedded devices upward.
- x86 remains strong in PCs and servers.
- Large customers can negotiate hard, design more components internally, or support alternative architectures.
- A greater share of AI computation could move from CPUs to GPUs, NPUs, and custom accelerators.

### Judgment

**Monopoly evidence: high. AI exposure: moderate-high.** The >99% figure is directly disclosed and precisely defined. It does not mean Arm has 99% of data-center CPUs, AI accelerators, all processors, or semiconductor revenue.

## 3. NVIDIA — dominant AI compute, but the denominator matters

### Verified facts

- NVIDIA's fiscal-2026 Form 10-K reports total revenue of **$215.938 billion** and Compute & Networking revenue of **$193.479 billion**. Compute & Networking therefore represented **89.6%** of revenue: $193.479 billion ÷ $215.938 billion.[^nvda-10k]
- The filing says accelerated computing and AI drove the segment's growth. It reports more than **7.5 million developers** using CUDA and NVIDIA's other software tools.[^nvda-10k]
- Two direct customers represented **22%** and **14%** of total fiscal-2026 revenue, primarily in Compute & Networking.[^nvda-10k]
- NVIDIA does **not** publish a market-share denominator in its 10-K. Jon Peddie Research's add-in-board report measured NVIDIA at **94% of discrete GPU shipments in Q4 2025**. That denominator includes PC/workstation add-in boards and must not be relabeled as AI-accelerator share.[^jpr-aib] The UK CMA separately identifies NVIDIA as the leading supplier of AI-accelerator chips but does not publish a percentage in its April 2024 technical update.[^cma-models]

### Why the position exists

The moat is not just GPU silicon. It combines CUDA, optimized libraries, compilers, developer familiarity, networking, complete systems, cloud availability, and rapid architecture releases. The 7.5-million-developer disclosure is evidence of ecosystem scale, though it is not evidence that all those developers are active or exclusive.

### What can break the thesis

- Alphabet, Amazon, Microsoft, Meta, OpenAI partners, and other hyperscalers are developing or buying custom accelerators.
- AMD and other vendors can improve hardware and software compatibility.
- Export controls already restrict access to China; NVIDIA's filing says it is effectively foreclosed from that data-center compute market.[^nvda-10k]
- Two direct customers generated 36% of revenue, creating concentration and bargaining risk.[^nvda-10k]
- AI training may become less compute-intensive, inference may shift to specialized ASICs, or customers may optimize utilization.
- CUDA switching costs are real but not permanent; open software layers can reduce them.

### Judgment

**Monopoly evidence: moderate-high. AI exposure: direct and very high.** NVIDIA passes through its measured 94% discrete-GPU product share plus its separately verified leadership in AI accelerators. “90% of AI chips” remains an imprecise slogan. NVIDIA does not own 90% of all inference chips, CPUs, edge AI, or custom silicon.

## 4. TSMC — dominant leading-edge manufacturing

### Verified facts

- TSMC's 2025 Form 20-F confirms that its ADSs trade on the NYSE and that HPC—including AI applications—is a principal platform.[^tsm-20f]
- It reported 2025 revenue of **NT$3.809 trillion** (**$121.423 billion**) and net income attributable to shareholders of **NT$1.698 trillion** (**$54.116 billion**).[^tsm-20f]
- Advanced processes at 7 nm and below generated **74% of 2025 wafer revenue**, up from 69% in 2024. The 3 nm, 5 nm, and 7 nm shares were 24%, 36%, and 14%.[^tsm-20f]
- TSMC's filing does not claim a precise market share. TrendForce measured **70.2%** of global foundry revenue in Q2 2025. Its full-year 2025 estimate was **69.9%**—economically indistinguishable from 70% after rounding, but technically 0.1 percentage point below the screen.[^trendforce-foundry]
- TSMC itself warns that concentration in semiconductors has increased antitrust scrutiny.[^tsm-20f]

### Why the position exists

Leading-edge foundry production requires enormous capital, process recipes, yield learning, equipment integration, trusted handling of customer designs, advanced packaging, and a dense design ecosystem. Scale produces more learning and cash for the next node; the next node then attracts more leading designs.

### What can break the thesis

- Manufacturing is geographically concentrated in Taiwan, creating an unusually severe geopolitical tail risk.
- Intel and Samsung can close process, yield, capacity, or packaging gaps.
- Large customers can dual-source or redesign chips when technically and economically possible.
- Semiconductor demand and fab utilization are cyclical.
- Energy, water, earthquake, equipment, and export-control constraints can interrupt output.
- A dominant share does not remove customer concentration or the negotiating power of NVIDIA, Apple, AMD, Broadcom, and hyperscalers.

### Judgment

**Monopoly evidence: moderate-high. AI exposure: direct and very high.** TSMC is monopoly-like at the leading edge, but calling it a literal monopoly is wrong: Samsung and Intel manufacture advanced logic, and other foundries compete at mature nodes.

## Companies rejected by the strict test

| Group | Companies | Why they fail this report's monopoly test |
| --- | --- | --- |
| Alternative compute | AMD, Intel, Qualcomm, Broadcom, Marvell | Important products and, in some niches, strong positions; no verified ≥70% share in a broad, current AI product market under this screen. |
| Memory | Micron | AI demand benefits HBM and DRAM, but memory is an oligopoly involving Samsung and SK hynix, not a Micron near-monopoly. |
| Wafer-fab equipment | Applied Materials, Lam Research, KLA | Strong positions in specific process steps, but the available broad-market evidence does not establish a company-wide or necessary AI-product share ≥70%. |
| EDA | Synopsys, Cadence | Together they form a powerful duopoly with Siemens EDA also present; neither company alone passed the threshold across EDA. |
| Networking and infrastructure | Arista, Vertiv, Dell, HPE, Super Micro, CoreWeave | High AI exposure or growth does not equal monopoly. Customers retain credible alternatives and can multi-source. |
| Cloud | Amazon, Microsoft, Alphabet, Oracle, IBM | Cloud infrastructure is concentrated but competitive. No provider has anything close to 70% global cloud-infrastructure share. |
| Foundation models | Microsoft/OpenAI exposure, Alphabet, Amazon/Anthropic exposure, Meta | Model leadership changes rapidly; open-weight and closed competitors prevent a stable ≥70% product share. |
| Enterprise applications and data | Palantir, Salesforce, Adobe, ServiceNow, Snowflake, Datadog, MongoDB, C3.ai | AI features may be material, but none has verified ≥70% control of a broad AI-software market. |

Alphabet's web search and Microsoft's desktop operating system may meet a concentration threshold in **non-AI product markets**. They are excluded from the core result because using an adjacent legacy monopoly to label an AI product monopolistic would change the question.

## Comparative investment analysis

| Company | Source of pricing power | Strongest lock-in | Main attack vector | Principal noncompetitive risk |
| --- | --- | --- | --- | --- |
| ASML | No current alternative supplier for EUV | Customer process integration and tool fleet | Alternative lithography/process approaches; eventual competing EUV | Export controls and Zeiss single-source dependency |
| Arm | Architecture ubiquity and broad licensing ecosystem | Software and developer compatibility | RISC-V and customer-owned architecture | Smartphone royalty dependence |
| NVIDIA | Performance plus a full hardware/software/network stack | CUDA, libraries, trained developers, deployed systems | Custom ASICs, AMD, software portability | Customer concentration and export controls |
| TSMC | Leading process, yield, scale, and packaging | Qualified chip designs and manufacturing learning | Samsung, Intel, customer dual-sourcing | Taiwan geopolitical and physical concentration |

The strongest monopoly is **ASML in EUV**. The strongest disclosed installed architecture is **Arm in mobile application processors**. The most direct current AI economic exposure is **NVIDIA**. The broadest manufacturing bottleneck is **TSMC**.

That ranking says nothing about expected shareholder return without valuation. Expected return requires, at minimum, current enterprise value, normalized free cash flow, dilution, capital intensity, cyclicality, tax, scenario probabilities, and the market's embedded growth assumptions. Market dominance is an input, not the answer.

## Monitoring rules

Update this report after each annual filing and when a credible market-share source changes its denominator or estimate. Track:

1. **ASML:** EUV competitors, EUV unit shipments, High-NA adoption, China sales, top-customer concentration, Zeiss capacity.
2. **Arm:** mobile application-processor share, smartphone royalty mix, RISC-V adoption, data-center and automotive royalty contribution.
3. **NVIDIA:** merchant accelerator share by shipments and revenue, CUDA developer count, custom-ASIC deployments, top-customer concentration, China restrictions.
4. **TSMC:** total foundry and leading-node share, 2 nm yield/ramp, advanced-packaging capacity, overseas-fab economics, geographic concentration.

Delete a company from the core table if reliable evidence places its relevant share below 70% for two consecutive measurement periods or if the product ceases to be a necessary AI value-chain component.

## Sources

All regulatory filings below are primary sources. Company claims about their own market position are labeled as such; third-party market-share estimates are not silently converted into facts.

[^asml-20f]: ASML Holding N.V., 2025 Form 20-F, filed 2026-02-25, SEC: https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm
[^arm-20f]: Arm Holdings plc, fiscal-2026 Form 20-F, filed 2026-05-26, SEC: https://www.sec.gov/Archives/edgar/data/1973239/000197323926000097/arm-20260331.htm
[^nvda-10k]: NVIDIA Corporation, fiscal-2026 Form 10-K, filed 2026-02-25, SEC: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm
[^tsm-20f]: Taiwan Semiconductor Manufacturing Company Limited, 2025 Form 20-F, filed 2026-04-16, SEC: https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm
[^jpr-aib]: Jon Peddie Research, *Add-in Board Report*, quarterly shipment and segment market-share dataset; Q4-2025 result reported as NVIDIA 94%: https://www.jonpeddie.com/store/add-in-board-report-a-report-on-the-graphic-add-in-board-market/
[^cma-models]: UK Competition and Markets Authority, *AI Foundation Models: Technical update report*, April 2024, paragraphs 2.30–2.33 and 5.15–5.19: https://assets.publishing.service.gov.uk/media/661e5a4c7469198185bd3d62/AI_Foundation_Models_technical_update_report.pdf
[^trendforce-foundry]: TrendForce, “2Q25 Foundry Revenue Surges 14.6% to Record High, TSMC's Market Share Hits 70%,” 2025-09-01, and Q4/full-year 2025 foundry release, 2026-03-12: https://www.trendforce.com/presscenter
[^nasdaq-quotes]: Nasdaq market-activity quote pages and quote service, retrieved 2026-06-22: https://www.nasdaq.com/market-activity/stocks/nvda, https://www.nasdaq.com/market-activity/stocks/asml, https://www.nasdaq.com/market-activity/stocks/arm, https://www.nasdaq.com/market-activity/stocks/tsm
