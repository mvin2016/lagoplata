import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

const cities = [
  { name: "Asheville, NC", distance: "65 miles (1 hour 15 minutes)", population: "417,202", description: "Vibrant arts, historic architecture, and access to Biltmore and the Blue Ridge Parkway.", img: "" },
  { name: "Knoxville, TN", distance: "110 miles (2 hours)", population: "879,773", description: "University town with downtown culture and Tennessee River recreation.", img: "" },
  { name: "Greenville, SC", distance: "110 miles (2 hours)", population: "928,195", description: "Charming and growing, with riverwalks, restaurants, and art scenes.", img: "" },
  { name: "Atlanta, GA", distance: "150 miles (3 hours)", population: "6,307,261", description: "Major metro hub with diverse culture and high volume visitor base.", img: "" },
  { name: "Charlotte, NC", distance: "180 miles (3 hours)", population: "2,805,115", description: "Southeast finance capital with sports, food, and events.", img: "" },
  { name: "Chattanooga, TN", distance: "140 miles (2 hours 30 minutes)", population: "562,647", description: "Scenic and family-focused with top-rated aquariums and trails.", img: "" },
  { name: "Cherokee, NC", distance: "170 miles (3 hours)", population: "858,302", description: "Historic capital with university culture and riverfront recreation.", img: "" },
  { name: "Winston-Salem, NC", distance: "160 miles (2 hours 45 minutes)", population: "695,630", description: "Southern charm meets innovation. Anchored by Wake Forest and arts districts.", img: "" },
];

export default function Market() {
  const [ref, inView] = useInView();
  return (
    <section id="market" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Drive-To Market Reach</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | Positioned within 3 hours of 8 thriving cities</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "32px" }}>Bryson City's strategic location draws short-stay guests from across the Southeast. Year-round demand anchors the property's high occupancy potential.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", marginBottom: "28px" }}>
          {cities.map(city => (
            <div key={city.name}>
              <h3 style={{ ...headingMd, marginBottom: "10px" }}>{city.name}</h3>
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "14px", overflow: "hidden", background: "#e0d5ca", marginBottom: "12px" }}>
                {city.img ? <img src={city.img} alt={city.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              </div>
              <p style={{ ...bodyText, fontSize: "0.875rem", marginBottom: "2px" }}>Distance: {city.distance}</p>
              <p style={{ ...bodyText, fontSize: "0.875rem", marginBottom: "4px" }}>Population: {city.population}</p>
              <p style={{ ...bodyText, fontSize: "0.875rem", color: t.muted }}>{city.description}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: t.font, fontSize: "0.78rem", color: t.mutedLight, fontStyle: "italic" }}>*Population figures reflect the metropolitan statistical area (MSA) for each city.</p>
      </div>
    </section>
  );
}