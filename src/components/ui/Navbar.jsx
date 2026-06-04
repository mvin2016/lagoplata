import { useEffect, useState } from "react";

const navLinks = [
  { label: "Summary", href: "#executive-summary" },
  { label: "Location", href: "#location" },
  { label: "Market", href: "#market" },
  { label: "Timeline", href: "#timeline" },
  { label: "Financials", href: "#financials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("contact");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY < 40);

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setHidden(footerTop <= window.innerHeight * 0.85);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: "64px",
        background: atTop ? "transparent" : "rgba(13, 10, 5, 0.88)",
        backdropFilter: atTop ? "none" : "blur(12px)",
        borderBottom: atTop ? "none" : "1px solid rgba(212,175,55,0.1)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 0.3s ease, background 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Logo mark + wordmark */}
      <a
        href="#hero"
        style={{ display: "flex", alignItems: "flex-end", gap: "10px", textDecoration: "none" }}
        aria-label="Lagoplata — back to top"
      >
        {/* Mini bars icon */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2px" }} aria-hidden="true">
          {[6, 9, 12, 15, 18, 15].map((h, i) => (
            <div
              key={i}
              style={{
                width: "2.5px",
                height: `${h}px`,
                borderRadius: "999px",
                background: "#D4AF37",
              }}
            />
          ))}
        </div>
        {/* Wordmark */}
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 400,
            color: "#D4AF37",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            lineHeight: 1,
            paddingBottom: "1px",
          }}
        >
          Lagoplata
        </span>
      </a>

      {/* Nav links */}
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#D4AF37",
                letterSpacing: "0.08em",
                textDecoration: "none",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.85)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}