import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText } from "../../tokens";

const members = [
  { name: "Trevor Tirrell",  role: "Founder & Project Manager",                      bio: "Hands-on experience in HVAC, framing, roofing, electrical, and plumbing. Converted a cargo van into a $150K luxury camper. Former software engineering manager now fully focused on project execution.", img: "", initials: "TT" },
  { name: "Shannon Lackey",  role: "General Contractor, WNC Mountain Builders",      bio: "25+ years in high-end residential construction. Specializes in small luxury cabins. Known for craftsmanship and integrity.", img: "", initials: "SL" },
  { name: "Scott Queen",     role: "Builder & Lead Carpenter",                       bio: "Over 40 years of experience building custom homes and fine furniture. Master in trim, tile, cabinetry, and finish work.", img: "", initials: "SQ" },
  { name: "Tim Goodwin",     role: "Architect & Property Manager, Watershed Cabins", bio: "Founder of Watershed Cabins. 20+ years in design and hospitality. Designed and operated dozens of Smoky Mountain vacation rentals.", img: "", initials: "TG" },
];

export default function Team() {
  const [ref, inView] = useInView();
  return (
    <section id="team" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Project Team</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | Built by a hands-on team of experts</p>
      </div>
      <div style={card}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 48px" }}>
          {members.map(m => (
            <div key={m.name} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "68px", height: "68px", borderRadius: "50%", flexShrink: 0, overflow: "hidden", background: "#e8ddd4", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {m.img ? <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontFamily: t.font, fontSize: "0.95rem", fontWeight: 600, color: t.brownMid }}>{m.initials}</span>}
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