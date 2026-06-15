import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd, divider, bullet } from "../../tokens";

export default function ExecutiveSummary() {
  const { executiveSummary: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="executive-summary" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>

      <div style={card}>
        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Project Overview</h3>
          <p style={bodyText}>{data.overview}</p>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Development Details</h3>
          <ul style={ulStyle}>
            {data.developmentDetails.map(({ label, value }) => (
              <li key={label} style={liStyle}><span style={bullet} /><span style={bodyText}><strong style={{ color: t.brown }}>{label}:</strong> {value}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Market Advantage</h3>
          <ul style={ulStyle}>
            {data.marketAdvantage.map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Timeline & Launch</h3>
          <ul style={ulStyle}>
            {data.timelineLaunch.map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>
        <div style={divider} />

        <div style={{ marginBottom: "32px" }}>
          <h3 style={headingMd}>Financial Highlights</h3>
          <ul style={ulStyle}>
            {data.financialHighlights.map(item => (
              <li key={item} style={liStyle}><span style={bullet} /><span style={bodyText}>{item}</span></li>
            ))}
          </ul>
        </div>

        <a href={data.businessPlanPdf} style={{ display: "inline-block", marginTop: "8px", padding: "12px 24px", background: t.brown, color: "#fdf6ee", borderRadius: "8px", fontFamily: t.font, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = t.brownMid}
          onMouseLeave={e => e.currentTarget.style.background = t.brown}>
          {data.businessPlanLabel}
        </a>
      </div>
    </section>
  );
}
const ulStyle = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" };
const liStyle = { display: "flex", alignItems: "flex-start", gap: "10px" };