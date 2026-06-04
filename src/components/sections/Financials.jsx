import { useState } from "react";

const scenarios = [
  { label: "Conservative", revenue: 292000, expenses: 100000, noi: 192000, dscr: 1.4 },
  { label: "Expected", revenue: 475335, expenses: 150755, noi: 324580, dscr: 2.0 },
  { label: "Ideal", revenue: 660000, expenses: 200000, noi: 467000, dscr: 2.8 },
];

const MAX_VAL = 800000;

const fundItems = [
  { label: "Acquisition/Land Costs", value: 573142, color: "#D4AF37" },
  { label: "Hard Costs", value: 1453788, color: "#2DD4BF" },
  { label: "Soft Costs", value: 56912, color: "#60A5FA" },
  { label: "Financing", value: 453195, color: "#F87171" },
];

const TOTAL_FUNDS = fundItems.reduce((s, i) => s + i.value, 0);

function fmtFull(n) {
  return "$" + n.toLocaleString();
}

function buildSlices(items, total) {
  let cumAngle = -Math.PI / 2;
  return items.map((item) => {
    const angle = (item.value / total) * 2 * Math.PI;
    const startAngle = cumAngle;
    cumAngle = cumAngle + angle;
    const endAngle = cumAngle;
    const cx = 140, cy = 140, r = 110;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const midAngle = startAngle + angle / 2;
    const large = angle > Math.PI ? 1 : 0;
    return { ...item, x1, y1, x2, y2, midAngle, large, angle, cx, cy, r };
  });
}

const PIE_SLICES = buildSlices(fundItems, TOTAL_FUNDS);

function PieChart({ items }) {
  const [hovered, setHovered] = useState(null);
  const cx = 140, cy = 140;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
      <svg width="280" height="280" viewBox="0 0 280 280" style={{ flexShrink: 0 }}>
        {PIE_SLICES.map((s, i) => (
          <path
            key={i}
            d={`M${cx},${cy} L${s.x1},${s.y1} A${s.r},${s.r} 0 ${s.large},1 ${s.x2},${s.y2} Z`}
            fill={s.color}
            opacity={hovered === null || hovered === i ? 1 : 0.45}
            style={{ cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        {hovered !== null && (
          <>
            <text x={cx} y={cy - 8} textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Jost, sans-serif" fontWeight="600">
              {PIE_SLICES[hovered].label.split("/")[0]}
            </text>
            <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="Jost, sans-serif">
              {fmtFull(PIE_SLICES[hovered].value)}
            </text>
          </>
        )}
      </svg>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: item.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#fff", fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{fmtFull(item.value)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Financials() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <>
      {/* ── Financial Projections ── */}
      <section id="financials" style={{ background: "#0d0a05", padding: "100px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Financial Projections</h2>
          <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;Revenue, Expenses, and Net Operating Income (NOI)</p>
        </div>

        <div style={card}>
          <p style={{ ...bodyStyle, marginBottom: "36px" }}>
            Our financial model includes three scenarios to stress-test revenue and returns.
            Even under conservative assumptions, the project demonstrates lender-friendly DSCR
            and positive cash flow. Dynamic pricing and high occupancy potential drive upside.
          </p>

          {/* Bar chart */}
          <div style={{ overflowX: "auto", marginBottom: "36px" }}>
            <div style={{ minWidth: "480px", position: "relative" }}>
              <div style={{ marginLeft: "60px", height: "260px", display: "flex", alignItems: "flex-end", justifyContent: "space-around", position: "relative" }}>
                {/* Y grid lines */}
                {[0, 200000, 400000, 600000, 800000].map((tick) => {
                  const pct = (tick / MAX_VAL) * 100;
                  return (
                    <div key={tick} style={{
                      position: "absolute", left: "-52px", right: 0,
                      bottom: `${pct}%`,
                      display: "flex", alignItems: "center", gap: "8px",
                      pointerEvents: "none",
                    }}>
                      <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", width: "48px", textAlign: "right", flexShrink: 0 }}>
                        {tick === 0 ? "0" : `${tick / 1000}K`}
                      </span>
                      <div style={{ flex: 1, borderTop: "1px dashed rgba(255,255,255,0.08)" }} />
                    </div>
                  );
                })}

                {scenarios.map((s, si) => (
                  <div key={si} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "240px" }}>
                      {[
                        { val: s.revenue, color: "#60A5FA" },
                        { val: s.expenses, color: "#F87171" },
                        { val: s.noi, color: "#2DD4BF" },
                      ].map((bar, bi) => {
                        const h = Math.round((bar.val / MAX_VAL) * 240);
                        const isHov = tooltip?.si === si;
                        return (
                          <div
                            key={bi}
                            onMouseEnter={() => setTooltip({ si, s })}
                            onMouseLeave={() => setTooltip(null)}
                            style={{
                              width: "40px", height: `${h}px`,
                              background: bar.color,
                              borderRadius: "4px 4px 0 0",
                              opacity: tooltip && !isHov ? 0.35 : 1,
                              transition: "opacity 0.2s",
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                    <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
                  </div>
                ))}

                {tooltip && (
                  <div style={{
                    position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)",
                    background: "#ffffff", color: "#1a1000",
                    borderRadius: "10px", padding: "14px 18px",
                    fontFamily: "'Jost',sans-serif", fontSize: "0.85rem",
                    zIndex: 10, pointerEvents: "none", minWidth: "200px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  }}>
                    <div style={{ fontWeight: 700, marginBottom: "8px" }}>{tooltip.s.label} Scenario</div>
                    <div style={{ color: "#2563EB", marginBottom: "4px" }}>Revenue: {fmtFull(tooltip.s.revenue)}</div>
                    <div style={{ color: "#DC2626", marginBottom: "4px" }}>Expenses: {fmtFull(tooltip.s.expenses)}</div>
                    <div style={{ color: "#059669", marginBottom: "4px" }}>NOI: {fmtFull(tooltip.s.noi)}</div>
                    <div style={{ color: "#7C3AED" }}>DSCR: {tooltip.s.dscr}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "28px", flexWrap: "wrap" }}>
            {[{ color: "#60A5FA", label: "Revenue" }, { color: "#F87171", label: "Expenses" }, { color: "#2DD4BF", label: "NOI" }].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: l.color }} />
                <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{l.label}</span>
              </div>
            ))}
          </div>

          <ul style={ulStyle}>
            {[
              ["DSCR", "1.4 / 2.0 / 2.8"],
              ["Occupancy Range", "50% / 66% / 80%"],
              ["ADR Range", "$275 / $350 / $425"],
              ["NOI Range", "$192K / $324K / $467K"],
            ].map(([label, val]) => (
              <li key={label} style={liStyle}>
                <span style={dotStyle} />
                <span style={bodyStyle}><strong style={{ color: "#fff", fontWeight: 600 }}>{label}:</strong> {val}</span>
              </li>
            ))}
          </ul>

          <p style={{ ...bodyStyle, marginTop: "24px", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
            Download the detailed forecasts: <a href="#" style={goldLink}>Financial Forecast PDF</a>
          </p>
        </div>
      </section>

      {/* ── Use of Funds ── */}
      <section id="use-of-funds" style={{ background: "#0d0a05", padding: "0 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Use of Funds</h2>
          <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;Thoughtful Allocation for Maximum Impact</p>
        </div>

        <div style={card}>
          <p style={{ ...bodyStyle, marginBottom: "28px" }}>
            Our capital deployment balances premium build quality with efficient execution.
            Below is a breakdown of how $2.54M in project costs are allocated.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <ul style={ulStyle}>
              {fundItems.map((item) => (
                <li key={item.label} style={liStyle}>
                  <span style={{ ...dotStyle, background: item.color }} />
                  <span style={bodyStyle}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>{item.label}:</strong> {fmtFull(item.value)}
                  </span>
                </li>
              ))}
            </ul>
            <PieChart items={fundItems} />
          </div>

          <p style={{ ...bodyStyle, marginTop: "32px", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
            Download the detailed budget breakdown: <a href="#" style={goldLink}>Construction Costs PDF</a>
          </p>
        </div>
      </section>

      {/* ── Operational Plan & Booking Strategy ── */}
      <section id="operations" style={{ background: "#0d0a05", padding: "0 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Operational Plan &amp; Booking Strategy</h2>
          <p style={sectionSub}>Streamlined systems and smart automation to drive performance and guest satisfaction</p>
        </div>

        <div style={card}>
          <ul style={ulStyle}>
            {[
              ["Direct Booking", "Powered by Hostaway, a leading all-in-one vacation rental software. Hostaway enables a custom website, CRM, marketing automation, and full OTA sync—allowing for reduced platform fees and long-term brand equity."],
              ["OTA Channels", "Listings on Airbnb, VRBO, and Booking.com provide visibility to global audiences while Hostaway centralizes messaging, calendars, and bookings."],
              ["Pricing Optimization", "Dynamic pricing through Hostaway integrates with PriceLabs to auto-adjust nightly rates based on demand, seasonality, competitor trends, and lead time."],
              ["Guest Experience", "Fully self-managed check-in with gated keypad access and smart locks. Integrated smart systems (thermostats, lighting, blinds) allow real-time control and monitoring. Guests receive proactive communication before, during, and after their stay."],
              ["Marketing Strategy", "Social-first approach (Instagram, Facebook), combined with strategic influencer stays and Google Ads."],
              ["User-Generated Content (UGC)", "The overall design of Lagoplata encourages guests to share their experiences via photos and videos—boosting organic reach and credibility through authentic, peer-driven promotion."],
            ].map(([label, val]) => (
              <li key={label} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...dotStyle, marginTop: "8px" }} />
                <span style={bodyStyle}><strong style={{ color: "#fff", fontWeight: 600 }}>{label}:</strong> {val}</span>
              </li>
            ))}
          </ul>

          <p style={{ ...bodyStyle, marginTop: "28px", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
            Download the Lagoplata Marketing Strategy: <a href="#" style={goldLink}>Marketing Strategy Assets PDF</a>
          </p>

          <div style={{ marginTop: "32px", borderRadius: "12px", overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/SFWpSBFsLik"
              title="Hostaway Overview"
              width="100%" height="420"
              style={{ border: 0, display: "block", borderRadius: "12px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: "10px" }}>
              Video courtesy of <a href="https://www.hostaway.com" target="_blank" rel="noreferrer" style={goldLink}>Hostaway</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Risk Mitigation ── */}
      <section id="risk" style={{ background: "#0d0a05", padding: "0 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Risk Mitigation Strategy</h2>
          <p style={sectionSub}>Proactive planning to minimize exposure and protect lender interests</p>
        </div>

        <div style={card}>
          <ul style={ulStyle}>
            {[
              ["Construction Delays", "Phased timeline, contractor accountability, and a 24-month interest-only loan allow for weather and permitting buffer."],
              ["Cost Overruns", "10% contingency and tight cost tracking, with weekly budget reviews by the project manager and GC."],
              ["Occupancy Risk", "Conservative scenario modeled at $250 ADR and 50% occupancy still exceeds DSCR thresholds."],
              ["Operational Risk", "Backed by Watershed Cabins' proven systems and tech-enabled remote management for reliability and scale."],
              ["Market Volatility", "Year-round Smoky Mountain demand, proximity to national parks, casino, and cultural draws create stable guest base."],
            ].map(([label, val]) => (
              <li key={label} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...dotStyle, marginTop: "8px" }} />
                <span style={bodyStyle}><strong style={{ color: "#fff", fontWeight: 600 }}>{label}:</strong> {val}</span>
              </li>
            ))}
          </ul>

          <p style={{ ...bodyStyle, marginTop: "28px", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
            Download the Lagoplata Break Even Analysis: <a href="#" style={goldLink}>Break Even Analysis PDF</a>
          </p>
        </div>
      </section>

      {/* ── Market Comparables & Case Studies ── */}
      <section id="comparables" style={{ background: "#0d0a05", padding: "0 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Market Comparables &amp; Case Studies</h2>
          <p style={sectionSub}>Proven performance from comparable luxury micro resorts</p>
        </div>

        <div style={card}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {[
              {
                name: "Live Oak Lake – Waco, TX",
                img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
                body: "Built in 2021 and opened in early 2022, Live Oak Lake is a 7-cabin luxury retreat near Waco, Texas. Developed for $2.3M, it was sold just 18 months later for $7M in October 2023. The project achieved high occupancy and strong ADR through upscale design, digital marketing, and a direct booking strategy. Its rapid appreciation and successful exit to institutional buyers underscores the market's appetite for well-executed micro resorts.",
                sources: [{ label: "Source 1", href: "#" }, { label: "Source 2", href: "#" }],
              },
              {
                name: "Onera – Fredericksburg, TX",
                img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
                body: "Built in 2021 and opened in November of that year, Onera is a luxury glamping and micro resort that quickly attracted institutional attention. It was acquired by Summit Hotel Properties in October 2022 for a $7M valuation, with a $6.3M payout to founders who retained 10% equity. With just 11 unique lodging units, Onera proved the scalability and exit value of design-driven outdoor hospitality.",
                sources: [{ label: "Source", href: "#" }],
              },
            ].map((comp) => (
              <div key={comp.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "1rem", fontWeight: 600, color: "#fff", margin: 0 }}>{comp.name}</h3>
                </div>
                <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", marginBottom: "16px", background: "rgba(255,255,255,0.06)" }}>
                  <img src={comp.img} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ ...bodyStyle, marginBottom: "14px" }}>{comp.body}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {comp.sources.map((s) => (
                    <a key={s.label} href={s.href} style={goldLink}>{s.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exit Strategy ── */}
      <section id="exit" style={{ background: "#0d0a05", padding: "0 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={sectionTitle}>Exit Strategy</h2>
          <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;Two Clear Paths to Monetization</p>
        </div>

        <div style={card}>
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "#fff", margin: 0 }}>Refinance &amp; Hold</h3>
            </div>
            <p style={bodyStyle}>
              Upon stabilization in 2026–2027, refinance the construction loan into a long-term mortgage.
              With an NOI of up to $417K and stabilized DSCR over 2.5, this option creates strong cash flow
              with potential for long-term asset appreciation and equity pulls.
            </p>
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "32px" }} />

          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "#fff", margin: 0 }}>Strategic Sale</h3>
            </div>
            <p style={bodyStyle}>
              Market comparables like Live Oak Lake and Onera show strong investor appetite for stabilized
              luxury cabin resorts. With solid branding, financials, and guest experience, Lagoplata is
              positioned for a premium valuation by 2027.
            </p>
          </div>

          <ul style={ulStyle}>
            {[
              ["Exit Window", "Q1 – Q3 2027"],
              ["Refi or Sale Flexibility", "Based on performance and market timing"],
              ["Comps", "Live Oak Lake (3x return in 18 months), Onera (sold to REIT)"],
            ].map(([label, val]) => (
              <li key={label} style={liStyle}>
                <span style={dotStyle} />
                <span style={bodyStyle}><strong style={{ color: "#fff", fontWeight: 600 }}>{label}:</strong> {val}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "0.02em",
};
const sectionSub = {
  fontFamily: "'Jost', sans-serif", fontSize: "0.9rem",
  color: "rgba(255,255,255,0.5)", marginTop: "12px", letterSpacing: "0.04em",
};
const card = {
  maxWidth: "1100px", margin: "0 auto",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px", padding: "clamp(24px, 4vw, 48px)",
};
const bodyStyle = {
  fontFamily: "'Jost', sans-serif", fontSize: "0.95rem",
  color: "rgba(255,255,255,0.72)", lineHeight: 1.8, margin: 0,
};
const ulStyle = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" };
const liStyle = { display: "flex", alignItems: "center", gap: "12px" };
const dotStyle = { display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#D4AF37", flexShrink: 0 };
const goldLink = { color: "#D4AF37", textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.35)", paddingBottom: "1px", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem" };