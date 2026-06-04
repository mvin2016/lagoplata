const cities = [
  {
    name: "Asheville, NC",
    distance: "65 miles (1 hour 15 minutes)",
    population: "417,202",
    description: "Vibrant arts, historic architecture, and access to Biltmore and the Blue Ridge Parkway.",
    img: "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?w=800&q=80",
  },
  {
    name: "Knoxville, TN",
    distance: "110 miles (2 hours)",
    population: "879,773",
    description: "University town with downtown culture and Tennessee River recreation.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    name: "Greenville, SC",
    distance: "110 miles (2 hours)",
    population: "928,195",
    description: "Charming and growing, with riverwalks, restaurants, and art scenes.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
  {
    name: "Atlanta, GA",
    distance: "150 miles (3 hours)",
    population: "6,307,261",
    description: "Major metro hub with diverse culture and high volume visitor base.",
    img: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=800&q=80",
  },
  {
    name: "Charlotte, NC",
    distance: "180 miles (3 hours)",
    population: "2,805,115",
    description: "Southeast finance capital with sports, food, and events.",
    img: "https://images.unsplash.com/photo-1611275484604-b56eb9f58b02?w=800&q=80",
  },
  {
    name: "Chattanooga, TN",
    distance: "140 miles (2 hours 30 minutes)",
    population: "562,647",
    description: "Scenic and family-focused with top-rated aquariums and trails.",
    img: "https://images.unsplash.com/photo-1587459373888-bfb34e5e2c2d?w=800&q=80",
  },
  {
    name: "Columbia, SC",
    distance: "170 miles (3 hours)",
    population: "858,302",
    description: "Historic capital with university culture and riverfront recreation.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  },
  {
    name: "Winston-Salem, NC",
    distance: "160 miles (2 hours 45 minutes)",
    population: "695,630",
    description: "Southern charm meets innovation. Anchored by Wake Forest and arts districts.",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  },
];

export default function Market() {
  return (
    <section
      id="market"
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
          Drive-To Market Reach
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
          Lagoplata Micro Resort&nbsp;|&nbsp;Positioned within 3 hours of 8 thriving cities
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
        {/* Intro */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.8,
            margin: "0 0 40px 0",
          }}
        >
          Bryson City's strategic location draws short-stay guests from across the Southeast.
          Year-round demand anchors the property's high occupancy potential.
        </p>

        {/* Cities grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
            marginBottom: "32px",
          }}
        >
          {cities.map((city) => (
            <div key={city.name}>
              {/* City name with pin icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  {city.name}
                </h3>
              </div>

              {/* Image */}
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
                  src={city.img}
                  alt={city.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Details */}
              <p style={{ ...metaStyle, marginBottom: "4px" }}>
                <strong style={{ color: "#ffffff" }}>Distance:</strong> {city.distance}
              </p>
              <p style={{ ...metaStyle, marginBottom: "8px" }}>
                <strong style={{ color: "#ffffff" }}>Population:</strong> {city.population}
              </p>
              <p style={descStyle}>{city.description}</p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          *Population figures reflect the metropolitan statistical area (MSA) for each city.
        </p>
      </div>
    </section>
  );
}

const metaStyle = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.7)",
  margin: 0,
  lineHeight: 1.6,
};

const descStyle = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.7,
  margin: 0,
};