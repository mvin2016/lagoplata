import { useState } from "react";
import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd, divider, bullet } from "../../tokens";

// ── Financial Projections data ──
const scenarios = [
  { label: "Conservative", revenue: 292000, expenses: 100000, noi: 192000, dscr: 1.4 },
  { label: "Expected",     revenue: 475335, expenses: 150755, noi: 324580, dscr: 2.0 },
  { label: "Ideal",        revenue: 660000, expenses: 200000, noi: 467000, dscr: 2.8 },
];
const MAX_VAL = 800000;

// ── Use of Funds data ──
const fundItems = [
  { label: "Acquisition/Land Costs", value: 573142,  color: "#a08060" },
  { label: "Hard Costs",             value: 1453788, color: "#6b9e8a" },
  { label: "Soft Costs",             value: 56912,   color: "#7a9ebc" },
  { label: "Financing",              value: 453195,  color: "#c47a6a" },
];
const TOTAL_FUNDS = fundItems.reduce((s, i) => s + i.value, 0);

function buildSlices(items, total) {
  let cum = -Math.PI / 2;
  return items.map(item => {
    const angle = (item.value / total) * 2 * Math.PI;
    const start = cum;
    cum += angle;
    const cx = 130, cy = 130, r = 100;
    return {
      ...item,
      x1: cx + r * Math.cos(start), y1: cy + r * Math.sin(start),
      x2: cx + r * Math.cos(cum),   y2: cy + r * Math.sin(cum),
      large: angle > Math.PI ? 1 : 0, cx, cy, r,
    };
  });
}
const PIE_SLICES = buildSlices(fundItems, TOTAL_FUNDS);

function fmtFull(n) { return "$" + n.toLocaleString(); }

function PieChart() {
  const [hovered, setHovered] = useState(null);
  const cx = 130, cy = 130;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
      <svg width="260" height="260" viewBox="0 0 260 260" style={{ flexShrink: 0 }}>
        {PIE_SLICES.map((s, i) => (
          <path key={i}
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
            <text x={cx} y={cy - 8} textAnchor="middle" fill={t.brown} fontSize="12" fontFamily="Archivo, sans-serif" fontWeight="600">{PIE_SLICES[hovered].label.split("/")[0]}</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill={t.brownMid} fontSize="11" fontFamily="Archivo, sans-serif">{fmtFull(PIE_SLICES[hovered].value)}</text>
          </>
        )}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {fundItems.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: item.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: t.font, fontSize: "0.85rem", color: t.brown, fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.muted }}>{fmtFull(item.value)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ulStyle = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" };
const liStyle = { display: "flex", alignItems: "flex-start", gap: "10px" };
const pdfBtn = { display: "inline-block", marginTop: "16px", padding: "10px 22px", background: t.brown, color: "#fdf6ee", borderRadius: "8px", fontFamily: t.font, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "background 0.2s" };

export default function Financials() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [tooltip, setTooltip] = useState(null);

  return (
    <>
      {/* ── Financial Projections ── */}
      <section id="financials" ref={ref1} className={`fade-up${inView1 ? " in-view" : ""}`} style={sectionWrap}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Financial Projections</h2>
          <p style={sectionSub}>Lagoplata Micro Resort | Revenue, Expenses, and Net Operating Income (NOI)</p>
        </div>
        <div style={card}>
          <p style={{ ...bodyText, marginBottom: "32px" }}>Our financial model includes three scenarios to stress-test revenue and returns. Even under conservative assumptions, the project demonstrates lender-friendly DSCR and positive cash flow. Dynamic pricing and high occupancy potential drive upside.</p>

          {/* Bar chart */}
          <div style={{ overflowX: "auto", marginBottom: "32px" }}>
            <div style={{ minWidth: "480px", position: "relative" }}>
              <div style={{ marginLeft: "60px", height: "240px", display: "flex", alignItems: "flex-end", justifyContent: "space-around", position: "relative" }}>
                {[0,200000,400000,600000,800000].map(tick => (
                  <div key={tick} style={{ position: "absolute", left: "-52px", right: 0, bottom: `${(tick/MAX_VAL)*100}%`, display: "flex", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
                    <span style={{ fontFamily: t.font, fontSize: "0.68rem", color: t.mutedLight, width: "48px", textAlign: "right", flexShrink: 0 }}>{tick===0?"0":`${tick/1000}K`}</span>
                    <div style={{ flex: 1, borderTop: `1px dashed ${t.border}` }} />
                  </div>
                ))}
                {scenarios.map((s, si) => (
                  <div key={si} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "220px" }}>
                      {[{val:s.revenue,color:"#7a9ebc"},{val:s.expenses,color:"#c47a6a"},{val:s.noi,color:"#6b9e8a"}].map((bar,bi) => (
                        <div key={bi}
                          onMouseEnter={() => setTooltip({ si, s })}
                          onMouseLeave={() => setTooltip(null)}
                          style={{ width: "38px", height: `${Math.round((bar.val/MAX_VAL)*220)}px`, background: bar.color, borderRadius: "4px 4px 0 0", opacity: tooltip && tooltip.si !== si ? 0.4 : 1, transition: "opacity 0.2s", cursor: "pointer" }}
                        />
                      ))}
                    </div>
                    <span style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.muted }}>{s.label}</span>
                  </div>
                ))}
                {tooltip && (
                  <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", background: "#fff", border: `1px solid ${t.border}`, color: t.brown, borderRadius: "10px", padding: "12px 16px", fontFamily: t.font, fontSize: "0.82rem", zIndex: 10, pointerEvents: "none", minWidth: "190px", boxShadow: "0 4px 20px rgba(61,44,30,0.12)" }}>
                    <div style={{ fontWeight: 700, marginBottom: "8px" }}>{tooltip.s.label} Scenario</div>
                    <div style={{ color: "#4a7a9e", marginBottom: "3px" }}>Revenue: {fmtFull(tooltip.s.revenue)}</div>
                    <div style={{ color: "#b05a4a", marginBottom: "3px" }}>Expenses: {fmtFull(tooltip.s.expenses)}</div>
                    <div style={{ color: "#4a8e7a", marginBottom: "3px" }}>NOI: {fmtFull(tooltip.s.noi)}</div>
                    <div style={{ color: t.brownMid }}>DSCR: {tooltip.s.dscr}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "24px", flexWrap: "wrap" }}>
            {[{color:"#7a9ebc",label:"Revenue"},{color:"#c47a6a",label:"Expenses"},{color:"#6b9e8a",label:"NOI"}].map(l => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: l.color }} />
                <span style={{ fontFamily: t.font, fontSize: "0.8rem", color: t.muted }}>{l.label}</span>
              </div>
            ))}
          </div>

          <ul style={ulStyle}>
            {[["DSCR","1.4 / 2.0 / 2.8"],["Occupancy Range","50% / 66% / 80%"],["ADR Range","$275 / $350 / $425"],["NOI Range","$192K / $324K / $467K"]].map(([l,v]) => (
              <li key={l} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{color:t.brown}}>{l}:</strong> {v}</span></li>
            ))}
          </ul>
          <a href="#" style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>Download Financial Forecast PDF</a>
        </div>
      </section>

      {/* ── Use of Funds ── */}
      <section id="use-of-funds" ref={ref2} className={`fade-up${inView2 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Use of Funds</h2>
          <p style={sectionSub}>Lagoplata Micro Resort | Thoughtful Allocation for Maximum Impact</p>
        </div>
        <div style={card}>
          <p style={{ ...bodyText, marginBottom: "28px" }}>Our capital deployment balances premium build quality with efficient execution. Below is a breakdown of how $2.54M in project costs are allocated.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <ul style={ulStyle}>
              {fundItems.map(item => (
                <li key={item.label} style={liStyle}>
                  <span style={{ ...bullet, background: item.color }} />
                  <span style={bodyText}><strong style={{color:t.brown}}>{item.label}:</strong> {fmtFull(item.value)}</span>
                </li>
              ))}
            </ul>
            <PieChart />
          </div>
          <a href="#" style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>Download Construction Costs PDF</a>
        </div>
      </section>

      {/* ── Operational Plan ── */}
      <section id="operations" ref={ref3} className={`fade-up${inView3 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Operational Plan &amp; Booking Strategy</h2>
          <p style={sectionSub}>Streamlined systems and smart automation to drive performance and guest satisfaction</p>
        </div>
        <div style={card}>
          <ul style={ulStyle}>
            {[
              ["Direct Booking","Powered by Hostaway, a leading all-in-one vacation rental software. Hostaway enables a custom website, CRM, marketing automation, and full OTA sync—allowing for reduced platform fees and long-term brand equity."],
              ["OTA Channels","Listings on Airbnb, VRBO, and Booking.com provide visibility to global audiences while Hostaway centralizes messaging, calendars, and bookings."],
              ["Pricing Optimization","Dynamic pricing through Hostaway integrates with PriceLabs to auto-adjust nightly rates based on demand, seasonality, competitor trends, and lead time."],
              ["Guest Experience","Fully self-managed check-in with gated keypad access and smart locks. Integrated smart systems (thermostats, lighting, blinds) allow real-time control and monitoring. Guests receive proactive communication before, during, and after their stay."],
              ["Marketing Strategy","Social-first approach (Instagram, Facebook), combined with strategic influencer stays and Google Ads."],
              ["User-Generated Content (UGC)","The overall design of Lagoplata encourages guests to share their experiences via photos and videos—boosting organic reach and credibility through authentic, peer-driven promotion."],
            ].map(([l,v]) => (
              <li key={l} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...bullet, marginTop: "8px" }} />
                <span style={bodyText}><strong style={{color:t.brown}}>{l}:</strong> {v}</span>
              </li>
            ))}
          </ul>
          <a href="#" style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>Download Marketing Strategy Assets PDF</a>
          <div style={{ marginTop: "28px", borderRadius: "12px", overflow: "hidden", border: `1px solid ${t.border}` }}>
            <iframe src="https://www.youtube.com/embed/SFWpSBFsLik" title="Hostaway Overview" width="100%" height="380" style={{ border: 0, display: "block" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <p style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.mutedLight, textAlign: "center", padding: "10px" }}>Video courtesy of <a href="https://www.hostaway.com" target="_blank" rel="noreferrer" style={{ color: t.accent }}>Hostaway</a></p>
          </div>
        </div>
      </section>

      {/* ── Risk Mitigation ── */}
      <section id="risk" ref={ref4} className={`fade-up${inView4 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Risk Mitigation Strategy</h2>
          <p style={sectionSub}>Proactive planning to minimize exposure and protect lender interests</p>
        </div>
        <div style={card}>
          <ul style={ulStyle}>
            {[
              ["Construction Delays","Phased timeline, contractor accountability, and a 24-month interest-only loan allow for weather and permitting buffer."],
              ["Cost Overruns","10% contingency and tight cost tracking, with weekly budget reviews by the project manager and GC."],
              ["Occupancy Risk","Conservative scenario modeled at $250 ADR and 50% occupancy still exceeds DSCR thresholds."],
              ["Operational Risk","Backed by Watershed Cabins' proven systems and tech-enabled remote management for reliability and scale."],
              ["Market Volatility","Year-round Smoky Mountain demand, proximity to national parks, casino, and cultural draws create stable guest base."],
            ].map(([l,v]) => (
              <li key={l} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...bullet, marginTop: "8px" }} />
                <span style={bodyText}><strong style={{color:t.brown}}>{l}:</strong> {v}</span>
              </li>
            ))}
          </ul>
          <a href="#" style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>Download Break Even Analysis PDF</a>
        </div>
      </section>

      {/* ── Market Comparables ── */}
      <section id="comparables" ref={ref5} className={`fade-up${inView5 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Market Comparables &amp; Case Studies</h2>
          <p style={sectionSub}>Proven performance from comparable luxury micro resorts</p>
        </div>
        <div style={card}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {[
              { name: "Live Oak Lake – Waco, TX", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80", body: "Built in 2021 and opened in early 2022, Live Oak Lake is a 7-cabin luxury retreat near Waco, Texas. Developed for $2.3M, it was sold just 18 months later for $7M in October 2023. The project achieved high occupancy and strong ADR through upscale design, digital marketing, and a direct booking strategy.", sources: [{label:"Source 1",href:"#"},{label:"Source 2",href:"#"}] },
              { name: "Onera – Fredericksburg, TX", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", body: "Built in 2021 and opened in November of that year, Onera is a luxury glamping and micro resort that quickly attracted institutional attention. It was acquired by Summit Hotel Properties in October 2022 for a $7M valuation, with a $6.3M payout to founders who retained 10% equity.", sources: [{label:"Source",href:"#"}] },
            ].map(comp => (
              <div key={comp.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  <h3 style={{ fontFamily: t.font, fontSize: "1rem", fontWeight: 700, color: t.brown, margin: 0 }}>{comp.name}</h3>
                </div>
                <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", marginBottom: "14px", background: "#e0d5ca" }}>
                  <img src={comp.img} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ ...bodyText, marginBottom: "10px" }}>{comp.body}</p>
                {comp.sources.map(s => <a key={s.label} href={s.href} style={{ display: "block", color: t.accent, fontFamily: t.font, fontSize: "0.85rem", textDecoration: "none", borderBottom: `1px solid ${t.border}`, width: "fit-content" }}>{s.label}</a>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exit Strategy ── */}
      <section id="exit" ref={ref6} className={`fade-up${inView6 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>Exit Strategy</h2>
          <p style={sectionSub}>Lagoplata Micro Resort | Two Clear Paths to Monetization</p>
        </div>
        <div style={card}>
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              <h3 style={{ ...headingMd, margin: 0 }}>Refinance &amp; Hold</h3>
            </div>
            <p style={bodyText}>Upon stabilization in 2026–2027, refinance the construction loan into a long-term mortgage. With an NOI of up to $417K and stabilized DSCR over 2.5, this option creates strong cash flow with potential for long-term asset appreciation and equity pulls.</p>
          </div>
          <div style={divider} />
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <h3 style={{ ...headingMd, margin: 0 }}>Strategic Sale</h3>
            </div>
            <p style={bodyText}>Market comparables like Live Oak Lake and Onera show strong investor appetite for stabilized luxury cabin resorts. With solid branding, financials, and guest experience, Lagoplata is positioned for a premium valuation by 2027.</p>
          </div>
          <ul style={ulStyle}>
            {[["Exit Window","Q1 – Q3 2027"],["Refi or Sale Flexibility","Based on performance and market timing"],["Comps","Live Oak Lake (3x return in 18 months), Onera (sold to REIT)"]].map(([l,v]) => (
              <li key={l} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{color:t.brown}}>{l}:</strong> {v}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}