import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

const attractions = [
  { name: "Great Smoky Mountains Railroad", description: "Embark on scenic train journeys through the Smoky Mountains, offering views of Fontana Lake and the Nantahala Gorge.", img: "" },
  { name: "Great Smoky Mountains National Park", description: "Explore over 850 miles of hiking trails, waterfalls, and diverse wildlife in America's most visited national park.", img: "" },
  { name: "Nantahala National Forest", description: "Engage in activities like whitewater rafting, mountain biking, and hiking across 600 miles of trails.", img: "" },
  { name: "Harrah's Cherokee Casino Resort", description: "Experience luxury accommodations, gaming, and entertainment at this premier resort.", img: "" },
  { name: "Blue Ridge Parkway", description: "Drive along one of America's most scenic routes, featuring panoramic mountain views and cultural sites.", img: "" },
  { name: "Bryson City", description: "Discover a charming town offering local dining, shopping, and outdoor adventures.", img: "" },
  { name: "Cherokee, NC", description: "Immerse yourself in rich Native American history and culture, with museums, arts, and traditional experiences.", img: "" },
  { name: "Nantahala Outdoor Center", description: "Participate in outdoor activities such as rafting, zip-lining, and mountain biking at this renowned adventure hub.", img: "" },
];

export default function Location() {
  const [ref, inView] = useInView();
  return (
    <section id="location" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Location Overview</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | Bryson City, NC</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "32px" }}>The Lagoplata Micro Resort site is a unique combination of serenity and proximity. Tucked along 750 feet of private creek frontage, yet just 12 minutes from downtown Bryson City, the location offers both seclusion and access. Guests will be able to unwind in a luxury nature setting while still enjoying coffee shops, breweries, and train rides just minutes away.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "40px" }}>
          {attractions.map(a => (
            <div key={a.name}>
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "14px", overflow: "hidden", background: "#e0d5ca", marginBottom: "12px" }}>
                {a.img ? <img src={a.img} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              </div>
              <h3 style={{ ...headingMd, marginBottom: "6px" }}>{a.name}</h3>
              <p style={{ ...bodyText, fontSize: "0.85rem" }}>{a.description}</p>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: "14px", overflow: "hidden", border: `1px solid ${t.border}` }}>
          <iframe title="Lagoplata Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5!2d-83.4488!3d35.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzQyLjYiTiA4M8KwMjYnNTUuNyJX!5e0!3m2!1sen!2sus!4v1" width="100%" height="380" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}