import { useState } from "react";
import { supabase } from "../lib/supabase";
import { t } from "../tokens";

const c = {
  bg: "#fdf6ee",
  text: t.brown,
  card: "rgba(255,255,255,0.7)",
  border: t.border,
  font: t.font,
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function signIn() {
    setError("");
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setError(error.message);
  }

  const field = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: 12,
    borderRadius: 10,
    border: `1px solid ${c.border}`,
    background: "#fff",
    color: c.text,
    fontFamily: c.font,
    fontSize: 15,
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: c.bg,
        color: c.text,
        fontFamily: c.font,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: c.card,
          border: `1px solid ${c.border}`,
          borderRadius: 16,
          padding: 32,
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: 24, marginBottom: 4 }}>Lagoplata</h1>
        <p style={{ opacity: 0.7, marginBottom: 24, fontSize: 14 }}>Content admin</p>

        <label style={{ fontSize: 13, opacity: 0.8 }}>Email</label>
        <input
          style={field}
          type="email"
          value={email}
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && signIn()}
        />

        <label style={{ fontSize: 13, opacity: 0.8 }}>Password</label>
        <input
          style={field}
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && signIn()}
        />

        {error && (
          <p style={{ color: "#a23b2d", fontSize: 13, marginBottom: 12 }}>{error}</p>
        )}

        <button
          onClick={signIn}
          disabled={busy}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "none",
            background: c.text,
            color: c.bg,
            fontFamily: c.font,
            fontSize: 15,
            fontWeight: 600,
            cursor: busy ? "default" : "pointer",
            opacity: busy ? 0.6 : 1,
          }}
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </div>
    </div>
  );
}