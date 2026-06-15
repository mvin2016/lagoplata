import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText } from "../../tokens";

export default function Team() {
  const { team: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="team" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 48px" }}>
          {data.members.map(m => (
            <div key={m.name} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "68px", height: "68px", borderRadius: "50%", flexShrink: 0, overflow: "hidden", background: "#e8ddd4", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {m.image ? <img src={m.image} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontFamily: t.font, fontSize: "0.95rem", fontWeight: 600, color: t.brownMid }}>{m.initials}</span>}
              </div>
              <div>
                <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 700, color: t.brown, margin: "0 0 2px 0" }}>{m.name} <span style={{ fontWeight: 400, color: t.muted }}>— {m.role}</span></p>
                <p style={{ ...bodyText, fontSize: "0.85rem" }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}