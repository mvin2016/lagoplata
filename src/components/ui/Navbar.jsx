import { useEffect, useState } from "react";

const navLinks = [
  { label: "Summary",    href: "#executive-summary" },
  { label: "Location",   href: "#location" },
  { label: "Market",     href: "#market" },
  { label: "Timeline",   href: "#timeline" },
  { label: "Financials", href: "#financials" },
  { label: "Team",       href: "#team" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("contact");
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (footer) setHidden(footer.getBoundingClientRect().top <= window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px", height: "64px",
      background: scrolled ? "rgba(253,246,238,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(139,109,82,0.15)" : "none",
      opacity: hidden ? 0 : 1,
      pointerEvents: hidden ? "none" : "auto",
      transition: "opacity 0.3s ease, background 0.4s ease",
    }}>
      <a href="#hero" style={{ display: "flex", alignItems: "flex-end", gap: "8px", textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2.5px" }} aria-hidden="true">
          {[6,9,12,15,18,15].map((h,i) => (
            <div key={i} style={{ width: "2.5px", height: `${h}px`, borderRadius: "999px", background: scrolled ? "#7a5c44" : "#D4AF37" }} />
          ))}
        </div>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: scrolled ? "#7a5c44" : "#D4AF37", letterSpacing: "0.28em", textTransform: "uppercase", lineHeight: 1, paddingBottom: "1px", transition: "color 0.4s" }}>
          Lagoplata
        </span>
      </a>
      <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: scrolled ? "#7a5c44" : "rgba(212,175,55,0.9)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = scrolled ? "#3d2c1e" : "#D4AF37"}
              onMouseLeave={e => e.target.style.color = scrolled ? "#7a5c44" : "rgba(212,175,55,0.9)"}
            >{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}