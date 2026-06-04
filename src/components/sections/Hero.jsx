import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const bars = [14, 20, 28, 36, 44, 52, 44];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image — swap src for real photo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Warm amber overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(50, 30, 2, 0.6)",
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(20, 12, 0, 0.7) 100%)",
          }}
        />
      </div>

      {/* Rounded border frame */}
      <div
        style={{
          position: "absolute",
          inset: "20px",
          borderRadius: "16px",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Logo bars */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "4px",
            marginBottom: "28px",
          }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: "3.5px",
                height: `${h}px`,
                borderRadius: "999px",
                background: "linear-gradient(to bottom, #E8C84A, #B8960C)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "bottom",
                transition: `opacity 0.5s ease ${0.15 + i * 0.07}s, transform 0.5s ease ${0.15 + i * 0.07}s`,
              }}
            />
          ))}
        </div>

        {/* Brand name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
            fontWeight: 300,
            color: "#D4AF37",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Lagoplata
        </h1>

        {/* Micro Resort */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(0.6rem, 1.4vw, 0.85rem)",
            fontWeight: 400,
            color: "rgba(212, 175, 55, 0.8)",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            marginTop: "12px",
          }}
        >
          Micro&nbsp;Resort
        </p>

        {/* Divider */}
        <div
          style={{
            width: "50px",
            height: "1px",
            background: "rgba(212, 175, 55, 0.35)",
            margin: "32px auto",
          }}
        />

        {/* Location tagline */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(0.6rem, 1.3vw, 0.8rem)",
            fontWeight: 400,
            color: "rgba(212, 175, 55, 0.75)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Luxury Cabins on Lagoplata Creek&nbsp;|&nbsp;Bryson City, NC
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.3s",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            color: "rgba(212, 175, 55, 0.55)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(212,175,55,0.55), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.55; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}