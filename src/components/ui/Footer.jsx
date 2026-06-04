export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#0d0a05",
        padding: "0 32px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: "12px",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.8rem",
            color: "#D4AF37",
            margin: 0,
            opacity: 0.75,
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} Lagoplata Micro Resort. All rights reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            style={iconLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="#D4AF37" stroke="none" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            style={iconLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            style={iconLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#D4AF37" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

const iconLinkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.7,
  transition: "opacity 0.2s ease",
  textDecoration: "none",
};