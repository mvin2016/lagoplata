import { useState } from "react";
import { useInView } from "../../lib/useInView";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

const milestones = [
  { date: "May 2025",           label: "Pre-Construction Begins" },
  { date: "August 2025",        label: "Construction Start" },
  { date: "Sept 2025 – Feb 2026", label: "Vertical Build Staggered" },
  { date: "Jan – March 2026",   label: "Interior Finish & Landscaping" },
  { date: "April 2026",         label: "Soft Launch" },
  { date: "May 2026",           label: "Full Launch" },
  { date: "Q2 2026 – Q1 2027",  label: "Stabilization Period" },
  { date: "Q1 – Q3 2027",       label: "Refi or Sale Window" },
];

const gantt = [
  { label: "Pre-Construction", start: 0,  duration: 3 },
  { label: "Construction",     start: 3,  duration: 6 },
  { label: "Interior &\nLandscaping", start: 8, duration: 3 },
  { label: "Soft Launch",      start: 11, duration: 1 },
  { label: "Full Launch",      start: 12, duration: 1 },
  { label: "Stabilization",    start: 13, duration: 9 },
  { label: "Exit Window",      start: 20, duration: 9 },
];
const TOTAL = 32;

export default function Timeline() {
  const [ref, inView] = useInView();
  const [tooltip, setTooltip] = useState(null);

  return (
    <section id="timeline" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>Development Timeline</h2>
        <p style={sectionSub}>Lagoplata Micro Resort | Key Milestones to Launch and Exit</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "8px" }}>Bryson City's strategic location draws short-stay guests from across the Southeast. Year-round demand anchors the property's high occupancy potential.</p>
        <p style={{ ...bodyText, marginBottom: "32px" }}>A strategic 12-month construction timeline staggered across six cabins ensures efficient resource allocation and progress tracking. A 24-month interest-only loan term provides buffer and flexibility.</p>

        {/* Milestone cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "40px" }}>
          {milestones.map(m => (
            <div key={m.label} style={{ background: "#f5ede4", border: `1px solid ${t.border}`, borderRadius: "10px", padding: "14px 16px" }}>
              <p style={{ fontFamily: t.font, fontSize: "0.72rem", color: t.muted, marginBottom: "4px" }}>{m.date}</p>
              <p style={{ fontFamily: t.font, fontSize: "0.9rem", fontWeight: 600, color: t.brown }}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* Gantt chart */}
        <h3 style={{ ...headingMd, marginBottom: "20px" }}>Visual Timeline (Gantt Chart)</h3>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: "520px" }}>
            {gantt.map((row, i) => {
              const leftPct = (row.start / TOTAL) * 100;
              const widthPct = (row.duration / TOTAL) * 100;
              const isHov = tooltip === i;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: "8px", position: "relative" }}>
                  <div style={{ width: "110px", flexShrink: 0, textAlign: "right", paddingRight: "12px", fontFamily: t.font, fontSize: "0.72rem", color: t.muted, whiteSpace: "pre-line", lineHeight: 1.3 }}>{row.label}</div>
                  <div style={{ flex: 1, position: "relative", height: "32px", background: "rgba(139,109,82,0.08)", borderRadius: "4px" }}>
                    {[0,25,50,75,100].map(p => (
                      <div key={p} style={{ position: "absolute", left: `${p}%`, top: 0, bottom: 0, width: "1px", borderLeft: "1px dashed rgba(139,109,82,0.2)" }} />
                    ))}
                    <div
                      onMouseEnter={() => setTooltip(i)}
                      onMouseLeave={() => setTooltip(null)}
                      style={{ position: "absolute", left: `${leftPct}%`, width: `${widthPct}%`, top: "4px", bottom: "4px", background: isHov ? "#8b6d52" : "#a08060", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                    >
                      <span style={{ fontFamily: t.font, fontSize: "0.72rem", fontWeight: 600, color: "#fdf6ee" }}>{row.duration}</span>
                    </div>
                    {isHov && (
                      <div style={{ position: "absolute", left: `${leftPct + widthPct / 2}%`, top: "-52px", transform: "translateX(-50%)", background: t.brown, color: "#fdf6ee", borderRadius: "8px", padding: "8px 12px", fontSize: "0.78rem", fontFamily: t.font, zIndex: 10, pointerEvents: "none", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                        <div style={{ fontWeight: 600 }}>{row.label}</div>
                        <div style={{ opacity: 0.75 }}>Duration: {row.duration} months</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {/* X axis */}
            <div style={{ marginLeft: "110px", display: "flex", justifyContent: "space-between", paddingTop: "8px", borderTop: `1px solid ${t.border}` }}>
              {[0,8,16,24,32].map(tick => (
                <span key={tick} style={{ fontFamily: t.font, fontSize: "0.7rem", color: t.muted }}>{tick}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}