import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

export default function Location() {
  const { location: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="location" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "32px" }}>{data.intro}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "40px" }}>
          {data.attractions.map(a => (
            <div key={a.name}>
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "14px", overflow: "hidden", background: "#e0d5ca", marginBottom: "12px" }}>
                {a.image ? <img src={a.image} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              </div>
              <h3 style={{ ...headingMd, marginBottom: "6px" }}>{a.name}</h3>
              <p style={{ ...bodyText, fontSize: "0.85rem" }}>{a.description}</p>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: "14px", overflow: "hidden", border: `1px solid ${t.border}` }}>
          <iframe title="Lagoplata Location Map" src={data.mapEmbed} width="100%" height="380" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}