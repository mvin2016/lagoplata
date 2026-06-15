import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, divider } from "../../tokens";

export default function Contact() {
  const { contact: data } = useContent();
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "16px" }}>{data.intro1}</p>
        <p style={{ ...bodyText, marginBottom: "36px" }}>{data.intro2}</p>
        <div style={divider} />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 700, color: t.brown, margin: 0 }}>Contact:</p>
          <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 700, color: t.brown, margin: 0 }}>{data.contactName}</p>
          <p style={bodyText}>Email: <a href={`mailto:${data.email}`} style={{ color: t.accent, textDecoration: "none", borderBottom: `1px solid ${t.border}` }}>{data.email}</a></p>
          <p style={bodyText}>Phone: <a href={`tel:${data.phone.replace(/[^0-9]/g, "")}`} style={{ color: t.accent, textDecoration: "none", borderBottom: `1px solid ${t.border}` }}>{data.phone}</a></p>
        </div>
      </div>
    </section>
  );
}