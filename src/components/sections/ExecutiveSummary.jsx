import { useInView } from "../../lib/useInView";

export default function ExecutiveSummary() {
  const [ref, inView] = useInView();

  return (
    <section
      id="executive-summary"
      ref={ref}
      style={{
        background: "#0d0a05",
        padding: "100px 24px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={sectionTitle}>Executive Summary</h2>
        <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;BLVD Hospitality LLC</p>
      </div>

      <div style={card}>
        <div style={{ marginBottom: "40px" }}>
          <h3 style={headingStyle}>Project Overview</h3>
          <p style={bodyStyle}>
            Lagoplata Micro Resort is a boutique development of six luxury cabins nestled along
            750 feet of Lagoplata Creek in Bryson City, NC. This nature-rich setting is paired
            with top-tier design and amenities to target the growing demand for experiential,
            short-term stays in the Smoky Mountains region.
          </p>
        </div>

        <div style={dividerStyle} />

        <div style={{ marginBottom: "40px" }}>
          <h3 style={headingStyle}>Development Details</h3>
          <ul style={listStyle}>
            {[
              ["Total Project Cost", "$2.5M"],
              ["Loan Request", "$2.25M (90% LTC)"],
              ["Equity Contribution", "$250K"],
              ["Entity", "BLVD Hospitality LLC"],
            ].map(([label, value]) => (
              <li key={label} style={listItemStyle}>
                <span style={bulletStyle} aria-hidden="true" />
                <span style={bodyStyle}>
                  <strong style={{ color: "#ffffff", fontWeight: 600 }}>{label}:</strong> {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div style={dividerStyle} />

        <div style={{ marginBottom: "40px" }}>
          <h3 style={headingStyle}>Market Advantage</h3>
          <ul style={listStyle}>
            {[
              "750 ft of creek frontage on 13.88 acres near Bryson City",
              "Proximity to top-tier attractions: GSMNP, NOC, Harrah's Casino, Blue Ridge Parkway",
              "Proven demand with comparable projects like Live Oak Lake and Onera Fredricksburg",
              "Positioned for premium rates, high occupancy, and repeat guests",
            ].map((item) => (
              <li key={item} style={listItemStyle}>
                <span style={bulletStyle} aria-hidden="true" />
                <span style={bodyStyle}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={dividerStyle} />

        <div style={{ marginBottom: "40px" }}>
          <h3 style={headingStyle}>Timeline &amp; Launch</h3>
          <ul style={listStyle}>
            {[
              "Construction start: August 2025",
              "Soft launch: April 2026 | Full launch: May 2026",
              "Exit window: Q1–Q3 2027 (refi or sale)",
            ].map((item) => (
              <li key={item} style={listItemStyle}>
                <span style={bulletStyle} aria-hidden="true" />
                <span style={bodyStyle}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={dividerStyle} />

        <div style={{ marginBottom: "40px" }}>
          <h3 style={headingStyle}>Financial Highlights</h3>
          <ul style={listStyle}>
            {[
              "NOI range: $192K – $467K across conservative to ideal scenarios",
              "DSCR range: 1.4 – 2.8 during interest-only phase",
              "Two clear exit options: refi and hold, or strategic sale",
            ].map((item) => (
              <li key={item} style={listItemStyle}>
                <span style={bulletStyle} aria-hidden="true" />
                <span style={bodyStyle}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
          Download the Lagoplata Business Plan:{" "}
          <a href="#" style={goldLink}>Business Plan PDF</a>
        </p>
      </div>
    </section>
  );
}

const sectionTitle = { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "0.02em" };
const sectionSub = { fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginTop: "12px", letterSpacing: "0.08em" };
const card = { maxWidth: "900px", margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "clamp(32px, 5vw, 56px)" };
const headingStyle = { fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", margin: "0 0 16px 0", letterSpacing: "0.02em" };
const bodyStyle = { fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, margin: 0 };
const listStyle = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" };
const listItemStyle = { display: "flex", alignItems: "flex-start", gap: "12px" };
const bulletStyle = { display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.4)", marginTop: "9px", flexShrink: 0 };
const dividerStyle = { height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 0 40px 0" };
const goldLink = { color: "#D4AF37", textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.4)", paddingBottom: "1px", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem" };