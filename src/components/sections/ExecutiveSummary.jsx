import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd, divider, bullet } from "../../tokens";

export default function ExecutiveSummary() {
  const [ref, inView] = useInView();
  return (
    <section id="executive-summary" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Executive Summary</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | BLVD Hospitality LLC</p>
      </div>

      <div style={card}>
        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Project Overview</h3>
          <p style={bodyText}>Lagoplata Micro Resort is a boutique development of six luxury cabins nestled along 750 feet of Lagoplata Creek in Bryson City, NC. This nature-rich setting is paired with top-tier design and amenities to target the growing demand for experiential, short-term stays in the Smoky Mountains region.</p>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Development Details</h3>
          <ul style={ulStyle}>
            {[["Total Project Cost","$2.5M"],["Loan Request","$2.25M (90% LTC)"],["Equity Contribution","$250K"],["Entity","BLVD Hospitality LLC"]].map(([l,v]) => (
              <li key={l} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{ color: t.brown }}>{l}:</strong> {v}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Market Advantage</h3>
          <ul style={ulStyle}>
            {["750 ft of creek frontage on 13.88 acres near Bryson City","Proximity to top-tier attractions: GSMNP, NOC, Harrah's Casino, Blue Ridge Parkway","Proven demand with comparable projects like Live Oak Lake and Onera Fredricksburg","Positioned for premium rates, high occupancy, and repeat guests"].map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Timeline & Launch</h3>
          <ul style={ulStyle}>
            {["Construction start: August 2025","Soft launch: April 2026 | Full launch: May 2026","Exit window: Q1–Q3 2027 (refi or sale)"].map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Financial Highlights</h3>
          <ul style={ulStyle}>
            {["NOI range: $192K – $467K across conservative to ideal scenarios","DSCR range: 1.4 – 2.8 during interest-only phase","Two clear exit options: refi and hold, or strategic sale"].map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>

        <a href="#" style={{ display: "inline-block", marginTop: "8px", padding: "12px 24px", background: t.brown, color: "#fdf6ee", borderRadius: "8px", fontFamily: t.font, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = t.brownMid}
          onMouseLeave={e => e.currentTarget.style.background = t.brown}>
          Download the Lagoplata Business Plan
        </a>
      </div>
    </section>
  );
}
const ulStyle = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" };
const liStyle = { display: "flex", alignItems: "flex-start", gap: "10px" };