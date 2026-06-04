import { useInView } from "../../lib/useInView";

export default function Concept() {
  const [ref, inView] = useInView();

  return (
    <section id="the-concept" ref={ref} className={`fade-up${inView ? " in-view" : ""}`}
      style={{ background: "#0d0a05", padding: "100px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={sectionTitle}>The Lagoplata Concept</h2>
        <p style={sectionSub}>Designed to stand apart — where engineering precision meets elevated guest experience</p>
      </div>
      <div style={card}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden", background: "rgba(255,255,255,0.06)", marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={placeholderStyle}>Cabin Render — Coming Soon</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Lagoplata Creekside Cabins will consist of six luxury units perched above a pristine mountain creek, with floor-to-ceiling glass windows that blur the boundary between indoors and nature.",
                "Guests will explore curated trails that lead to a private waterfall, a peaceful mountain ridge, and a native flora garden. A shared community zone with grill, seating, and a small shop adds a sense of belonging.",
                "Unlike templated STR developments, Lagoplata offers a seamless nature-first design and experiential stay that caters to discerning, design-conscious travelers.",
                "Backed by a GC with proven success and occupancy above 72%, and led by an engineer who thrives on problem-solving and execution, the Lagoplata team brings creative precision and real-world grit to this vision.",
              ].map((p, i) => <p key={i} style={bodyStyle}>{p}</p>)}
            </div>
          </div>
          <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={placeholderStyle}>Site Map — Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
const sectionTitle = { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "0.02em" };
const sectionSub = { fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginTop: "16px", letterSpacing: "0.02em" };
const card = { maxWidth: "1100px", margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "clamp(24px, 4vw, 48px)" };
const bodyStyle = { fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, margin: 0 };
const placeholderStyle = { fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" };