import { useInView } from "../../lib/useInView";

export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} className={`fade-up${inView ? " in-view" : ""}`}
      style={{ background: "#0d0a05", padding: "100px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={sectionTitle}>Let's Build Something Beautiful</h2>
        <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;A smart investment in design, demand, and destination</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyStyle, marginBottom: "20px" }}>
          With a strong team, proven financials, and a high-demand location, Lagoplata Micro Resort is ready to deliver outsized returns and unforgettable guest experiences. We invite you to join us in building the next standout destination in the Smoky Mountains.
        </p>
        <p style={{ ...bodyStyle, marginBottom: "40px" }}>
          Questions? Let's talk financing, timeline, or tour the site. We're ready to move.
        </p>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "32px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", margin: 0 }}>Contact:</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", margin: 0 }}>Trevor Tirrell, Founder</p>
          <p style={{ ...bodyStyle }}>Email: <a href="mailto:ttirrell@hotmail.com" style={goldLink}>ttirrell@hotmail.com</a></p>
          <p style={{ ...bodyStyle }}>Phone: <a href="tel:8645533402" style={goldLink}>864-553-3402</a></p>
        </div>
      </div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "64px", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} Lagoplata Micro Resort · BLVD Hospitality LLC · All rights reserved
      </p>
    </section>
  );
}
const sectionTitle = { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "0.02em" };
const sectionSub = { fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginTop: "12px", letterSpacing: "0.08em" };
const card = { maxWidth: "1100px", margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "clamp(24px, 4vw, 48px)" };
const bodyStyle = { fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, margin: 0 };
const goldLink = { color: "#D4AF37", textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.35)", paddingBottom: "1px", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem" };