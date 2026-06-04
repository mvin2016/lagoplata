import { useState } from "react";

const milestones = [
  { label: "Pre-Construction Begins", date: "May 2025" },
  { label: "Construction Start", date: "August 2025" },
  { label: "Vertical Build Staggered (Cabins 1–6)", date: "Sept 2025 – Feb 2026" },
  { label: "Interior Finish & Landscaping", date: "Jan – March 2026" },
  { label: "Soft Launch", date: "April 2026" },
  { label: "Full Launch", date: "May 2026" },
  { label: "Stabilization Period", date: "Q2 2026 – Q1 2027" },
  { label: "Refi or Sale Window", date: "Q1 – Q3 2027" },
];

// start = months from project start (May 2025 = 0)
const gantt = [
  { label: "Pre-Construction", start: 0, duration: 3 },
  { label: "Construction", start: 3, duration: 6 },
  { label: "Interior\n& Landscaping", start: 8, duration: 3 },
  { label: "Soft\nLaunch", start: 11, duration: 1 },
  { label: "Full\nLaunch", start: 12, duration: 1 },
  { label: "Stabilization", start: 13, duration: 9 },
  { label: "Exit\nWindow", start: 20, duration: 9 },
];

const TOTAL_MONTHS = 32;

export default function Timeline() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <section
      id="timeline"
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
          Development Timeline
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
          Lagoplata Micro Resort&nbsp;|&nbsp;Key Milestones to Launch and Exit
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
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          A strategic 12-month construction timeline staggered across six cabins ensures
          efficient resource allocation and progress tracking. A 24-month interest-only
          loan term provides buffer and flexibility.
        </p>

        {/* Milestone list */}
        <ul style={{ listStyle: "none", margin: "0 0 48px 0", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {milestones.map((m) => (
            <li key={m.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{
                display: "inline-block", width: "6px", height: "6px",
                borderRadius: "50%", background: "#D4AF37",
                marginTop: "7px", flexShrink: 0,
              }} />
              <span style={bodyStyle}>
                <strong style={{ color: "#ffffff", fontWeight: 600 }}>{m.label}:</strong>{" "}
                {m.date}
              </span>
            </li>
          ))}
        </ul>

        {/* Gantt Chart */}
        <h3 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "#ffffff",
          margin: "0 0 24px 0",
        }}>
          Visual Timeline (Gantt Chart)
        </h3>

        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: "560px" }}>
            {/* Chart rows */}
            <div style={{ position: "relative" }}>
              {gantt.map((row, i) => {
                const leftPct = (row.start / TOTAL_MONTHS) * 100;
                const widthPct = (row.duration / TOTAL_MONTHS) * 100;
                const isHovered = tooltip?.index === i;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  >
                    {/* Row label */}
                    <div style={{
                      width: "110px",
                      flexShrink: 0,
                      textAlign: "right",
                      paddingRight: "12px",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      whiteSpace: "pre-line",
                      lineHeight: 1.3,
                    }}>
                      {row.label}
                    </div>

                    {/* Track */}
                    <div style={{
                      flex: 1,
                      position: "relative",
                      height: "32px",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "4px",
                      overflow: "visible",
                    }}>
                      {/* Dashed grid lines */}
                      {[0, 25, 50, 75, 100].map((pct) => (
                        <div key={pct} style={{
                          position: "absolute",
                          left: `${pct}%`,
                          top: 0,
                          bottom: 0,
                          width: "1px",
                          background: "rgba(255,255,255,0.08)",
                          borderLeft: "1px dashed rgba(255,255,255,0.08)",
                        }} />
                      ))}

                      {/* Bar */}
                      <div
                        onMouseEnter={() => setTooltip({ index: i, label: row.label, duration: row.duration })}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          position: "absolute",
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                          top: "4px",
                          bottom: "4px",
                          background: isHovered ? "#E8C84A" : "#D4AF37",
                          borderRadius: "4px",
                          cursor: "pointer",
                          transition: "background 0.15s ease",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "6px",
                        }}
                      >
                        <span style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "#1a1000",
                          whiteSpace: "nowrap",
                        }}>
                          {row.duration}
                        </span>
                      </div>

                      {/* Tooltip */}
                      {isHovered && (
                        <div style={{
                          position: "absolute",
                          left: `${leftPct + widthPct / 2}%`,
                          top: "-52px",
                          transform: "translateX(-50%)",
                          background: "#ffffff",
                          color: "#1a1000",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          fontSize: "0.8rem",
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                          zIndex: 10,
                          pointerEvents: "none",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                        }}>
                          <div style={{ fontWeight: 700 }}>{row.label.replace("\n", " ")}</div>
                          <div>Duration: {row.duration} months</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* X-axis labels */}
              <div style={{ display: "flex", marginLeft: "110px", marginTop: "8px" }}>
                {[0, 8, 16, 24, 32].map((tick) => (
                  <div
                    key={tick}
                    style={{
                      position: "absolute",
                      left: `calc(110px + ${(tick / TOTAL_MONTHS) * 100}% * (100% - 110px) / 100%)`,
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.35)",
                      transform: "translateX(-50%)",
                      marginTop: "4px",
                    }}
                  >
                    {tick}
                  </div>
                ))}
              </div>
            </div>

            {/* X axis ticks row */}
            <div style={{
              display: "flex",
              marginLeft: "110px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              marginTop: "8px",
              position: "relative",
            }}>
              {[0, 8, 16, 24, 32].map((tick) => (
                <span
                  key={tick}
                  style={{
                    position: "absolute",
                    left: `${(tick / TOTAL_MONTHS) * 100}%`,
                    transform: "translateX(-50%)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {tick}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const bodyStyle = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.95rem",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  margin: 0,
};