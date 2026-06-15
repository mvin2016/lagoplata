import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

export default function Market() {
  const { market: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="market" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "32px" }}>{data.intro}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", marginBottom: "28px" }}>
          {data.cities.map(city => (
            <div key={city.name}>
              <h3 style={{ ...headingMd, marginBottom: "10px" }}>{city.name}</h3>
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "14px", overflow: "hidden", background: "#e0d5ca", marginBottom: "12px" }}>
                {city.image ? <img src={city.image} alt={city.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              </div>
              <p style={{ ...bodyText, fontSize: "0.875rem", marginBottom: "2px" }}>Distance: {city.distance}</p>
              <p style={{ ...bodyText, fontSize: "0.875rem", marginBottom: "4px" }}>Population: {city.population}</p>
              <p style={{ ...bodyText, fontSize: "0.875rem", color: t.muted }}>{city.description}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.mutedLight, fontStyle: "italic" }}>{data.footnote}</p>
      </div>
    </section>
  );
}