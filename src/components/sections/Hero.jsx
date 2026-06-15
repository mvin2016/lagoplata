import { useEffect, useState } from "react";
import { useContent } from "../../lib/useContent";

export default function Hero() {
  const { hero } = useContent();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const bars = [14, 20, 28, 36, 44, 52, 44];

  return (
    <section id="hero" style={{ position: "relative", width: "100%", height: "100svh", minHeight: "600px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#2a1f14" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={hero.backgroundImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(42,31,20,0.58)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 35%, rgba(20,12,0,0.65) 100%)" }} />
      </div>

      <div style={{ position: "absolute", inset: "20px", borderRadius: "16px", border: "1px solid rgba(212,175,55,0.18)", pointerEvents: "none", zIndex: 10 }} />

      <div style={{ position: "relative", zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 24px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "opacity 1.2s ease, transform 1.2s ease" }}>
        <div aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "28px" }}>
          {bars.map((h, i) => (
            <div key={i} style={{ width: "3.5px", height: `${h}px`, borderRadius: "999px", background: "linear-gradient(to bottom, #E8C84A, #B8960C)", opacity: loaded ? 1 : 0, transform: loaded ? "scaleY(1)" : "scaleY(0)", transformOrigin: "bottom", transition: `opacity 0.5s ease ${0.15 + i * 0.07}s, transform 0.5s ease ${0.15 + i * 0.07}s` }} />
          ))}
        </div>

        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.25em", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
          {hero.title}
        </h1>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(0.6rem, 1.4vw, 0.85rem)", fontWeight: 400, color: "rgba(212,175,55,0.8)", letterSpacing: "0.55em", textTransform: "uppercase", marginTop: "12px" }}>
          {hero.subtitle}
        </p>
        <div style={{ width: "50px", height: "1px", background: "rgba(212,175,55,0.35)", margin: "32px auto" }} />
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(0.6rem, 1.3vw, 0.8rem)", fontWeight: 400, color: "rgba(212,175,55,0.75)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          {hero.tagline}
        </p>
      </div>

      <div style={{ position: "absolute", bottom: "40px", zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: loaded ? 1 : 0, transition: "opacity 1.5s ease 1.3s" }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.6rem", letterSpacing: "0.28em", color: "rgba(212,175,55,0.55)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(212,175,55,0.55), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
      </div>

      <style>{`@keyframes scrollPulse { 0%,100%{opacity:.55;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.2)} }`}</style>
    </section>
  );
}