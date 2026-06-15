import { useEffect, useMemo, useState } from "react";
import { supabase, SITE_CONTENT_ID, IMAGE_BUCKET } from "../lib/supabase";
import { content as localContent } from "../content";
import { t } from "../tokens";

const c = {
  bg: "#fdf6ee",
  text: t.brown,
  card: "rgba(255,255,255,0.75)",
  border: t.border,
  accent: t.brown,
  font: t.font,
};

const IMAGE_KEY = /(image|img|photo|avatar|thumbnail|cover|logo|src|url)/i;

function humanize(key) {
  return String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

// ---- low-level field controls -------------------------------------------

function TextField({ value, onChange, multiline }) {
  const base = {
    width: "100%",
    padding: "9px 11px",
    borderRadius: 9,
    border: `1px solid ${c.border}`,
    background: "#fff",
    color: c.text,
    fontFamily: c.font,
    fontSize: 14,
    boxSizing: "border-box",
  };
  return multiline ? (
    <textarea style={{ ...base, minHeight: 80, resize: "vertical" }} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
  ) : (
    <input style={base} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
  );
}

function ImageField({ value, onChange }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function upload(file) {
    setErr("");
    setBusy(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) {
      setErr(error.message);
      setBusy(false);
      return;
    }
    const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
    onChange(data.publicUrl);
    setBusy(false);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        {value ? (
          <img
            src={value}
            alt=""
            style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 8, border: `1px solid ${c.border}` }}
          />
        ) : (
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              border: `1px dashed ${c.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              opacity: 0.6,
            }}
          >
            no image
          </div>
        )}
        <div style={{ flex: 1 }}>
          <TextField value={value} onChange={onChange} />
          <label
            style={{
              display: "inline-block",
              marginTop: 6,
              fontSize: 13,
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${c.border}`,
              cursor: "pointer",
              opacity: busy ? 0.5 : 1,
            }}
          >
            {busy ? "Uploading…" : "Upload / replace"}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              disabled={busy}
              onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
            />
          </label>
          {err && <p style={{ color: "#a23b2d", fontSize: 12, marginTop: 4 }}>{err}</p>}
        </div>
      </div>
    </div>
  );
}

// ---- recursive editor ----------------------------------------------------

function Node({ keyName, value, onChange, depth }) {
  const label = humanize(keyName);

  // primitive: string / number
  if (typeof value === "string" || typeof value === "number") {
    const isImage = IMAGE_KEY.test(String(keyName)) && typeof value === "string";
    const long = typeof value === "string" && value.length > 60;
    return (
      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 5, opacity: 0.85 }}>{label}</label>
        {isImage ? (
          <ImageField value={value} onChange={onChange} />
        ) : (
          <TextField
            value={value}
            multiline={long}
            onChange={(v) => onChange(typeof value === "number" && v !== "" && !isNaN(v) ? Number(v) : v)}
          />
        )}
      </div>
    );
  }

  // boolean
  if (typeof value === "boolean") {
    return (
      <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, fontSize: 14, cursor: "pointer" }}>
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        {label}
      </label>
    );
  }

  // array
  if (Array.isArray(value)) {
    const move = (i, dir) => {
      const next = [...value];
      const j = i + dir;
      if (j < 0 || j >= next.length) return;
      [next[i], next[j]] = [next[j], next[i]];
      onChange(next);
    };
    const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
    const add = () => {
      const template = value[0];
      let blank = "";
      if (template && typeof template === "object" && !Array.isArray(template)) {
        blank = Object.fromEntries(Object.keys(template).map((k) => [k, typeof template[k] === "number" ? 0 : Array.isArray(template[k]) ? [] : typeof template[k] === "object" ? {} : ""]));
      }
      onChange([...value, blank]);
    };
    return (
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, opacity: 0.85 }}>{label}</div>
        {value.map((item, i) => (
          <div key={i} style={{ border: `1px solid ${c.border}`, borderRadius: 10, padding: 12, marginBottom: 10, background: "rgba(255,255,255,0.5)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, opacity: 0.6 }}>#{i + 1}</span>
              <div style={{ display: "flex", gap: 6 }}>
                <SmallBtn onClick={() => move(i, -1)}>↑</SmallBtn>
                <SmallBtn onClick={() => move(i, 1)}>↓</SmallBtn>
                <SmallBtn onClick={() => remove(i)} danger>✕</SmallBtn>
              </div>
            </div>
            <Node keyName={`item ${i + 1}`} value={item} depth={depth + 1} onChange={(v) => { const next = [...value]; next[i] = v; onChange(next); }} />
          </div>
        ))}
        <SmallBtn onClick={add}>+ Add</SmallBtn>
      </div>
    );
  }

  // object
  if (value && typeof value === "object") {
    return (
      <div style={{ marginBottom: depth === 0 ? 0 : 12 }}>
        {depth > 0 && <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, opacity: 0.85 }}>{label}</div>}
        <div style={depth > 0 ? { paddingLeft: 12, borderLeft: `2px solid ${c.border}` } : undefined}>
          {Object.entries(value).map(([k, v]) => (
            <Node key={k} keyName={k} value={v} depth={depth + 1} onChange={(nv) => onChange({ ...value, [k]: nv })} />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function SmallBtn({ children, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: c.font,
        fontSize: 13,
        padding: "5px 9px",
        borderRadius: 7,
        border: `1px solid ${danger ? "#c98" : c.border}`,
        background: "#fff",
        color: danger ? "#a23b2d" : c.text,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

// ---- section manager (reorder + show/hide) -------------------------------

function SectionManager({ order, onChange }) {
  // Full known set, captured from the bundled config so hidden sections
  // can be re-added.
  const allKnown = useMemo(() => localContent.sectionOrder || [], []);
  const hidden = allKnown.filter((s) => !order.includes(s));

  const move = (i, dir) => {
    const next = [...order];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      {order.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: `1px solid ${c.border}`, borderRadius: 9, padding: "8px 12px", marginBottom: 8, background: "#fff" }}>
          <span style={{ fontSize: 14 }}>{humanize(s)}</span>
          <div style={{ display: "flex", gap: 6 }}>
            <SmallBtn onClick={() => move(i, -1)}>↑</SmallBtn>
            <SmallBtn onClick={() => move(i, 1)}>↓</SmallBtn>
            <SmallBtn onClick={() => onChange(order.filter((x) => x !== s))} danger>Hide</SmallBtn>
          </div>
        </div>
      ))}
      {hidden.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 13, opacity: 0.8 }}>
          <div style={{ marginBottom: 6 }}>Hidden:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {hidden.map((s) => (
              <SmallBtn key={s} onClick={() => onChange([...order, s])}>+ {humanize(s)}</SmallBtn>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---- collapsible top-level card ------------------------------------------

function Card({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 14, marginBottom: 14, overflow: "hidden" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: "100%", textAlign: "left", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", fontFamily: c.font, fontSize: 16, fontWeight: 700, color: c.text, display: "flex", justifyContent: "space-between" }}
      >
        {title}
        <span style={{ opacity: 0.5 }}>{open ? "–" : "+"}</span>
      </button>
      {open && <div style={{ padding: "0 18px 18px" }}>{children}</div>}
    </div>
  );
}

// ---- main dashboard ------------------------------------------------------

export default function Dashboard() {
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("site_content").select("data").eq("id", SITE_CONTENT_ID).maybeSingle();
      const remote = data?.data && Object.keys(data.data).length > 0 ? data.data : null;
      // Start from local shape, overlay any saved content.
      setDraft(remote ? { ...localContent, ...remote } : structuredClone(localContent));
    })();
  }, []);

  async function save() {
    setSaving(true);
    setStatus("");
    const { error } = await supabase
      .from("site_content")
      .upsert({ id: SITE_CONTENT_ID, data: draft }, { onConflict: "id" });
    setSaving(false);
    setStatus(error ? `Error: ${error.message}` : "Saved. Reload the site to see changes.");
  }

  if (!draft) {
    return (
      <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: c.font, display: "flex", alignItems: "center", justifyContent: "center" }}>
        Loading content…
      </div>
    );
  }

  const { sectionOrder, ...rest } = draft;

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: c.font }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: c.bg,
          borderBottom: `1px solid ${c.border}`,
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <strong style={{ fontSize: 17 }}>Lagoplata</strong>
          <span style={{ opacity: 0.6, fontSize: 14 }}> · Content editor</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {status && <span style={{ fontSize: 13, opacity: 0.8 }}>{status}</span>}
          <button onClick={() => supabase.auth.signOut()} style={{ fontFamily: c.font, fontSize: 14, padding: "8px 12px", borderRadius: 9, border: `1px solid ${c.border}`, background: "#fff", color: c.text, cursor: "pointer" }}>
            Sign out
          </button>
          <button onClick={save} disabled={saving} style={{ fontFamily: c.font, fontSize: 14, fontWeight: 600, padding: "8px 16px", borderRadius: 9, border: "none", background: c.text, color: c.bg, cursor: "pointer", opacity: saving ? 0.6 : 1 }}>
            {saving ? "Publishing…" : "Publish"}
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px 80px" }}>
        {sectionOrder && (
          <Card title="Sections — order & visibility" defaultOpen>
            <SectionManager order={sectionOrder} onChange={(v) => setDraft({ ...draft, sectionOrder: v })} />
          </Card>
        )}

        {Object.entries(rest).map(([key, value]) => (
          <Card key={key} title={humanize(key)}>
            <Node keyName={key} value={value} depth={0} onChange={(v) => setDraft({ ...draft, [key]: v })} />
          </Card>
        ))}
      </main>
    </div>
  );
}