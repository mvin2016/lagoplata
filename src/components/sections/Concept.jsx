import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText } from "../../tokens";

export default function Concept() {
  const { concept: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="the-concept" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "14px", overflow: "hidden", background: "#e8ddd4", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {data.cabinRenderImage
                ? <img src={data.cabinRenderImage} alt="Cabin render" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <span style={placeholder}>Cabin Render — Coming Soon</span>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {data.paragraphs.map((p, i) => <p key={i} style={bodyText}>{p}</p>)}
            </div>
          </div>
          <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "14px", overflow: "hidden", background: "#e8ddd4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {data.siteMapImage
              ? <img src={data.siteMapImage} alt="Site map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              : <span style={placeholder}>Site Map — Coming Soon</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
const placeholder = { fontFamily: "'Archivo',sans-serif", fontSize: "0.75rem", color: t.mutedLight, letterSpacing: "0.08em", textTransform: "uppercase" };