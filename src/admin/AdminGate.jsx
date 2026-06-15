import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { t } from "../tokens";
import Login from "./Login";

// Wraps the admin dashboard. Renders the login screen until a session
// exists, then renders children. Also surfaces a clear notice if the
// Supabase keys haven't been added yet.
export default function AdminGate({ children }) {
  const [session, setSession] = useState(null);
  // Only "loading" if Supabase is configured and we're about to fetch a
  // session. When it isn't configured we render the notice immediately,
  // so there's no synchronous setState inside the effect.
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const screen = {
    minHeight: "100vh",
    background: "#fdf6ee",
    color: t.brown,
    fontFamily: t.font,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  };

  if (!isSupabaseConfigured) {
    return (
      <div style={screen}>
        <div style={{ maxWidth: 460, textAlign: "center" }}>
          <h1 style={{ fontWeight: 700, marginBottom: 12 }}>Admin not connected yet</h1>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your
            environment, then reload. The public site keeps working from <code>content.js</code> in
            the meantime.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={screen}>
        <p style={{ opacity: 0.7 }}>Loading…</p>
      </div>
    );
  }

  if (!session) return <Login />;

  return children;
}