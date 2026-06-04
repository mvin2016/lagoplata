import { useInView } from "../../lib/useInView";

const members = [
  { name: "Trevor Tirrell", role: "Founder & Project Manager", bio: "Hands-on experience in HVAC, framing, roofing, electrical, and plumbing. Converted a cargo van into a $150K luxury camper. Former software engineering manager now fully focused on project execution.", img: null, initials: "TT" },
  { name: "Shannon Lackey", role: "General Contractor, WNC Mountain Builders", bio: "25+ years in high-end residential construction. Specializes in small luxury cabins. Known for craftsmanship and integrity.", img: null, initials: "SL" },
  { name: "Scott Queen", role: "Builder & Lead Carpenter", bio: "Over 40 years of experience building custom homes and fine furniture. Master in trim, tile, cabinetry, and finish work.", img: null, initials: "SQ" },
  { name: "Tim Goodwin", role: "Architect & Property Manager, Watershed Cabins", bio: "Founder of Watershed Cabins. 20+ years in design and hospitality. Designed and operated dozens of Smoky Mountain vacation rentals.", img: null, initials: "TG" },
];

export default function Team() {
  const [ref, inView] = useInView();
  return (
    <section id="team" ref={ref} className={`fade-up${inView ? " in-view" : ""}`}
      style={{ background: "#0d0a05", padding: "100px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={sectionTitle}>Project Team</h2>
        <p style={sectionSub}>Lagoplata Micro Resort&nbsp;|&nbsp;Built by a hands-on team of experts</p>
      </div>
      <div style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h3 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", margin: 0 }}>Key Team Members</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 48px" }}>
          {members.map((m) => (
            <div key={m.name} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", flexShrink: 0, overflow: "hidden", background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {m.img ? <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#D4AF37", letterSpacing: "0.05em" }}>{m.initials}</span>}
              </div>
              <div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", margin: "0 0 4px 0", lineHeight: 1.4 }}>
                  {m.name}<span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}> — {m.role}</span>
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, margin: 0 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const sectionTitle = { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "0.02em" };
const sectionSub = { fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginTop: "12px", letterSpacing: "0.08em" };
const card = { maxWidth: "1100px", margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "clamp(24px, 4vw, 48px)" };