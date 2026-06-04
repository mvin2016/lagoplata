import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, divider } from "../../tokens";

export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Let's Build Something Beautiful</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | A smart investment in design, demand, and destination</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "16px" }}>With a strong team, proven financials, and a high-demand location, Lagoplata Micro Resort is ready to deliver outsized returns and unforgettable guest experiences. We invite you to join us in building the next standout destination in the Smoky Mountains.</p>
        <p style={{ ...bodyText, marginBottom: "36px" }}>Questions? Let's talk financing, timeline, or tour the site. We're ready to move.</p>
        <div style={divider} />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 700, color: t.brown, margin: 0 }}>Contact:</p>
          <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 700, color: t.brown, margin: 0 }}>Trevor Tirrell, Founder</p>
          <p style={bodyText}>Email: <a href="mailto:ttirrell@hotmail.com" style={{ color: t.accent, textDecoration: "none", borderBottom: `1px solid ${t.border}` }}>ttirrell@hotmail.com</a></p>
          <p style={bodyText}>Phone: <a href="tel:8645533402" style={{ color: t.accent, textDecoration: "none", borderBottom: `1px solid ${t.border}` }}>864-553-3402</a></p>
        </div>
      </div>
    </section>
  );
}