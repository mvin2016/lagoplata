import { useEffect, useState } from "react";
import { ContentContext } from "./useContent";
import { supabase, isSupabaseConfigured, SITE_CONTENT_ID } from "./supabase";
import { content as localContent } from "../content";

// Deep-merge Supabase data over the local content so any field the
// admin hasn't touched still falls back to content.js. Arrays are
// replaced wholesale (so reordering / removing sections works), objects
// merge recursively.
function deepMerge(base, override) {
  if (Array.isArray(override)) return override;
  if (override && typeof override === "object" && !Array.isArray(base)) {
    const out = { ...base };
    for (const key of Object.keys(override)) {
      out[key] = key in base ? deepMerge(base[key], override[key]) : override[key];
    }
    return out;
  }
  return override === undefined ? base : override;
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(localContent);

  useEffect(() => {
    if (!isSupabaseConfigured) return; // stay on content.js until keys exist
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("data")
        .eq("id", SITE_CONTENT_ID)
        .maybeSingle();

      if (cancelled) return;
      if (error) {
        console.warn("[content] Supabase read failed, using local content:", error.message);
        return;
      }
      if (data?.data && Object.keys(data.data).length > 0) {
        setContent(deepMerge(localContent, data.data));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}