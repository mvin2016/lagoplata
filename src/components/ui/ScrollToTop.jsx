import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "36px",
        right: "36px",
        zIndex: 999,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "rgba(13, 10, 5, 0.9)",
        border: "1px solid rgba(212,175,55,0.5)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.35s ease, transform 0.35s ease, background 0.2s ease, border-color 0.2s ease",
        boxShadow: visible ? "0 4px 24px rgba(212,175,55,0.15)" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(212,175,55,0.18)";
        e.currentTarget.style.borderColor = "rgba(212,175,55,1)";
        e.currentTarget.style.boxShadow = "0 4px 28px rgba(212,175,55,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(13, 10, 5, 0.9)";
        e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,175,55,0.15)";
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}