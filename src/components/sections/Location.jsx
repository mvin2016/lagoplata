const attractions = [
  {
    name: "Great Smoky Mountains Railroad",
    description: "Embark on scenic train journeys through the Smoky Mountains, offering views of Fontana Lake and the Nantahala Gorge.",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
  },
  {
    name: "Great Smoky Mountains National Park",
    description: "Explore over 850 miles of hiking trails, waterfalls, and diverse wildlife in America's most visited national park.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
  {
    name: "Nantahala National Forest",
    description: "Engage in activities like whitewater rafting, mountain biking, and hiking across 600 miles of trails.",
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
  },
  {
    name: "Harrah's Cherokee Casino Resort",
    description: "Experience luxury accommodations, gaming, and entertainment at this premier resort.",
    img: "https://images.unsplash.com/photo-1596813362035-3dc08c2a4228?w=800&q=80",
  },
  {
    name: "Blue Ridge Parkway",
    description: "Drive along one of America's most scenic routes, featuring panoramic mountain views and cultural sites.",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  },
  {
    name: "Bryson City",
    description: "Discover a charming town offering local dining, shopping, and outdoor adventures.",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    name: "Cherokee, NC",
    description: "Immerse yourself in rich Native American history and culture, with museums, arts, and traditional experiences.",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
  },
  {
    name: "Nantahala Outdoor Center",
    description: "Participate in outdoor activities such as rafting, zip-lining, and mountain biking at this renowned adventure hub.",
    img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      style={{ background: "#0d0a05", padding: "100px 24px" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Location Overview
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.5)",
            marginTop: "12px",
            letterSpacing: "0.08em",
          }}
        >
          Lagoplata Micro Resort&nbsp;|&nbsp;Bryson City, NC
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "clamp(24px, 4vw, 48px)",
        }}
      >
        {/* Intro paragraph */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.8,
            margin: "0 0 40px 0",
          }}
        >
          The Lagoplata Micro Resort site is a unique combination of serenity and proximity.
          Tucked along 750 feet of private creek frontage, yet just 12 minutes from downtown
          Bryson City, the location offers both seclusion and access. Guests will be able to
          unwind in a luxury nature setting while still enjoying coffee shops, breweries, and
          train rides just minutes away.
        </p>

        {/* Attractions grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {attractions.map((item) => (
            <div key={item.name}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "14px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: "0 0 8px 0",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Google Map embed */}
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <iframe
            title="Lagoplata Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5!2d-83.4488!3d35.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzQyLjYiTiA4M8KwMjYnNTUuNyJX!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}