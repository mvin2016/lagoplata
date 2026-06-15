import { useState } from "react";
import { useInView } from "../../lib/useInView";
import { useContent } from "../../lib/useContent";
import { t, sectionWrap, card, sectionTitle, sectionSub, bodyText, headingMd } from "../../tokens";

export default function Timeline() {
  const { timeline: data } = useContent();
  const { milestones, gantt, ganttTotal: TOTAL } = data;
  const [ref, inView] = useInView();
  const [tooltip, setTooltip] = useState(null);

  return (
    <section id="timeline" ref={ref} className={`fade-up${inView ? " in-view" : ""}`} style={sectionWrap}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={sectionTitle}>{data.title}</h2>
        <p style={sectionSub}>{data.subtitle}</p>
      </div>
      <div style={card}>
        <p style={{ ...bodyText, marginBottom: "8px" }}>{data.intro1}</p>
        <p style={{ ...bodyText, marginBottom: "32px" }}>{data.intro2}</p>

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
              {[0, 0.25, 0.5, 0.75, 1].map(f => (
                <span key={f} style={{ fontFamily: t.font, fontSize: "0.7rem", color: t.muted }}>{Math.round(f * TOTAL)}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}