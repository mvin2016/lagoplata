import { useState } from "react";
import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd, divider, bullet } from "../../tokens";

function fmtFull(n) { return "$" + Number(n).toLocaleString(); }

// Build pie geometry from whatever items/total are passed in.
function buildSlices(items, total) {
  let cum = -Math.PI / 2;
  const cx = 130, cy = 130, r = 100;
  return items.map(item => {
    const angle = (item.value / total) * 2 * Math.PI;
    const start = cum;
    cum += angle;
    return {
      ...item,
      x1: cx + r * Math.cos(start), y1: cy + r * Math.sin(start),
      x2: cx + r * Math.cos(cum),   y2: cy + r * Math.sin(cum),
      large: angle > Math.PI ? 1 : 0, cx, cy, r,
    };
  });
}

function PieChart({ items }) {
  const [hovered, setHovered] = useState(null);
  const total = items.reduce((s, i) => s + i.value, 0);
  const slices = buildSlices(items, total);
  const cx = 130, cy = 130;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
      <svg width="260" height="260" viewBox="0 0 260 260" style={{ flexShrink: 0 }}>
        {slices.map((s, i) => (
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
            <text x={cx} y={cy - 8} textAnchor="middle" fill={t.brown} fontSize="12" fontFamily="Archivo, sans-serif" fontWeight="600">{slices[hovered].label.split("/")[0]}</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill={t.brownMid} fontSize="11" fontFamily="Archivo, sans-serif">{fmtFull(slices[hovered].value)}</text>
          </>
        )}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item, i) => (
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
  const { financials } = useContent();
  const { projections, useOfFunds, operations, risk, comparables, exit } = financials;
  const MAX_VAL = projections.maxValue;
  const scenarios = projections.scenarios;

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
          <h2 style={sectionTitle}>{projections.title}</h2>
          <p style={sectionSub}>{projections.subtitle}</p>
        </div>
        <div style={card}>
          <p style={{ ...bodyText, marginBottom: "32px" }}>{projections.intro}</p>

          {/* Bar chart */}
          <div style={{ overflowX: "auto", marginBottom: "32px" }}>
            <div style={{ minWidth: "480px", position: "relative" }}>
              <div style={{ marginLeft: "60px", height: "240px", display: "flex", alignItems: "flex-end", justifyContent: "space-around", position: "relative" }}>
                {[0, 0.25, 0.5, 0.75, 1].map(f => {
                  const tick = Math.round(f * MAX_VAL);
                  return (
                    <div key={f} style={{ position: "absolute", left: "-52px", right: 0, bottom: `${f * 100}%`, display: "flex", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
                      <span style={{ fontFamily: t.font, fontSize: "0.68rem", color: t.mutedLight, width: "48px", textAlign: "right", flexShrink: 0 }}>{tick === 0 ? "0" : `${Math.round(tick / 1000)}K`}</span>
                      <div style={{ flex: 1, borderTop: `1px dashed ${t.border}` }} />
                    </div>
                  );
                })}
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
            {projections.stats.map(({ label, value }) => (
              <li key={label} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{color:t.brown}}>{label}:</strong> {value}</span></li>
            ))}
          </ul>
          <a href={projections.pdf} style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>{projections.pdfLabel}</a>
        </div>
      </section>

      {/* ── Use of Funds ── */}
      <section id="use-of-funds" ref={ref2} className={`fade-up${inView2 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>{useOfFunds.title}</h2>
          <p style={sectionSub}>{useOfFunds.subtitle}</p>
        </div>
        <div style={card}>
          <p style={{ ...bodyText, marginBottom: "28px" }}>{useOfFunds.intro}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <ul style={ulStyle}>
              {useOfFunds.items.map(item => (
                <li key={item.label} style={liStyle}>
                  <span style={{ ...bullet, background: item.color }} />
                  <span style={bodyText}><strong style={{color:t.brown}}>{item.label}:</strong> {fmtFull(item.value)}</span>
                </li>
              ))}
            </ul>
            <PieChart items={useOfFunds.items} />
          </div>
          <a href={useOfFunds.pdf} style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>{useOfFunds.pdfLabel}</a>
        </div>
      </section>

      {/* ── Operational Plan ── */}
      <section id="operations" ref={ref3} className={`fade-up${inView3 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>{operations.title}</h2>
          <p style={sectionSub}>{operations.subtitle}</p>
        </div>
        <div style={card}>
          <ul style={ulStyle}>
            {operations.items.map(({ label, text }) => (
              <li key={label} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...bullet, marginTop: "8px" }} />
                <span style={bodyText}><strong style={{color:t.brown}}>{label}:</strong> {text}</span>
              </li>
            ))}
          </ul>
          <a href={operations.pdf} style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>{operations.pdfLabel}</a>
          <div style={{ marginTop: "28px", borderRadius: "12px", overflow: "hidden", border: `1px solid ${t.border}` }}>
            <iframe src={operations.videoEmbed} title="Hostaway Overview" width="100%" height="380" style={{ border: 0, display: "block" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <p style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.mutedLight, textAlign: "center", padding: "10px" }}>Video courtesy of <a href="https://www.hostaway.com" target="_blank" rel="noreferrer" style={{ color: t.accent }}>Hostaway</a></p>
          </div>
        </div>
      </section>

      {/* ── Risk Mitigation ── */}
      <section id="risk" ref={ref4} className={`fade-up${inView4 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>{risk.title}</h2>
          <p style={sectionSub}>{risk.subtitle}</p>
        </div>
        <div style={card}>
          <ul style={ulStyle}>
            {risk.items.map(({ label, text }) => (
              <li key={label} style={{ ...liStyle, alignItems: "flex-start" }}>
                <span style={{ ...bullet, marginTop: "8px" }} />
                <span style={bodyText}><strong style={{color:t.brown}}>{label}:</strong> {text}</span>
              </li>
            ))}
          </ul>
          <a href={risk.pdf} style={pdfBtn} onMouseEnter={e=>e.currentTarget.style.background=t.brownMid} onMouseLeave={e=>e.currentTarget.style.background=t.brown}>{risk.pdfLabel}</a>
        </div>
      </section>

      {/* ── Market Comparables ── */}
      <section id="comparables" ref={ref5} className={`fade-up${inView5 ? " in-view" : ""}`} style={{ ...sectionWrap, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={sectionTitle}>{comparables.title}</h2>
          <p style={sectionSub}>{comparables.subtitle}</p>
        </div>
        <div style={card}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {comparables.items.map(comp => (
              <div key={comp.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  <h3 style={{ fontFamily: t.font, fontSize: "1rem", fontWeight: 700, color: t.brown, margin: 0 }}>{comp.name}</h3>
                </div>
                <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", marginBottom: "14px", background: "#e0d5ca" }}>
                  {comp.image ? <img src={comp.image} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
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
          <h2 style={sectionTitle}>{exit.title}</h2>
          <p style={sectionSub}>{exit.subtitle}</p>
        </div>
        <div style={card}>
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              <h3 style={{ ...headingMd, margin: 0 }}>{exit.refinanceHeading}</h3>
            </div>
            <p style={bodyText}>{exit.refinanceText}</p>
          </div>
          <div style={divider} />
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <h3 style={{ ...headingMd, margin: 0 }}>{exit.saleHeading}</h3>
            </div>
            <p style={bodyText}>{exit.saleText}</p>
          </div>
          <ul style={ulStyle}>
            {exit.stats.map(({ label, value }) => (
              <li key={label} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{color:t.brown}}>{label}:</strong> {value}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}