import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText } from "../../tokens";

export default function Concept() {
  const [ref, inView] = useInView();
  return (
    <section id="the-concept" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>The Lagoplata Concept</h2>
        <p style={sectionSub}>Designed to stand apart — where engineering precision meets elevated guest experience</p>
      </div>
      <div style={card}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "14px", overflow: "hidden", background: "#e8ddd4", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={placeholder}>Cabin Render — Coming Soon</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Lagoplata Creekside Cabins will consist of six luxury units perched above a pristine mountain creek, with floor-to-ceiling glass windows that blur the boundary between indoors and nature.",
                "Guests will explore curated trails that lead to a private waterfall, a peaceful mountain ridge, and a native flora garden. A shared community zone with grill, seating, and a small shop adds a sense of belonging.",
                "Unlike templated STR developments, Lagoplata offers a seamless nature-first design and experiential stay that caters to discerning, design-conscious travelers.",
                "Backed by a GC with proven success and occupancy above 72%, and led by an engineer who thrives on problem-solving and execution, the Lagoplata team brings creative precision and real-world grit to this vision."
              ].map((p, i) => <p key={i} style={bodyText}>{p}</p>)}
            </div>
          </div>
          <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "14px", overflow: "hidden", background: "#e8ddd4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={placeholder}>Site Map — Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
const placeholder = { fontFamily: "'Archivo',sans-serif", fontSize: "0.75rem", color: t.mutedLight, letterSpacing: "0.08em", textTransform: "uppercase" };