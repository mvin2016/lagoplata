// Design tokens — single source of truth for colors, fonts, spacing
export const t = {
  bg:         "#fdf6ee",
  bgCard:     "rgba(255,255,255,0.6)",
  border:     "rgba(139,109,82,0.2)",
  brown:      "#3d2c1e",
  brownMid:   "#6b4f35",
  brownLight: "#8b6d52",
  muted:      "#7a6555",
  mutedLight: "#a89080",
  accent:     "#7a5c44",
  font:       "'Archivo', sans-serif",
};

export const sectionWrap = {
  background: t.bg,
  padding: "80px 24px",
};

export const card = {
  maxWidth: "1100px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.55)",
  border: `1px solid ${t.border}`,
  borderRadius: "20px",
  padding: "clamp(24px, 4vw, 48px)",
  backdropFilter: "blur(4px)",
};

export const sectionTitle = {
  fontFamily: t.font,
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 700,
  color: t.brown,
  margin: 0,
  letterSpacing: "-0.02em",
};

export const sectionSub = {
  fontFamily: t.font,
  fontSize: "0.875rem",
  color: t.muted,
  marginTop: "8px",
  letterSpacing: "0.02em",
};

export const bodyText = {
  fontFamily: t.font,
  fontSize: "0.9rem",
  color: t.brownMid,
  lineHeight: 1.75,
  margin: 0,
};

export const headingMd = {
  fontFamily: t.font,
  fontSize: "1rem",
  fontWeight: 700,
  color: t.brown,
  margin: "0 0 12px 0",
};

export const divider = {
  height: "1px",
  background: t.border,
  margin: "0 0 32px 0",
};

export const bullet = {
  display: "inline-block",
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  background: t.brownLight,
  marginTop: "8px",
  flexShrink: 0,
};

export const goldLink = {
  color: t.accent,
  textDecoration: "none",
  borderBottom: `1px solid ${t.border}`,
  paddingBottom: "1px",
  fontFamily: t.font,
  fontSize: "0.875rem",
};