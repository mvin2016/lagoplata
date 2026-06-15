import { createContext, useContext } from "react";
import { content as localContent } from "../content";

// Context + hook live here (no component exports) so Vite Fast Refresh
// stays happy. The provider that fills this context lives in
// ContentProvider.jsx.
export const ContentContext = createContext(localContent);

// Drop-in replacement for `import { content } from "../../content"`.
// In a section component: `const content = useContent();`
export function useContent() {
  return useContext(ContentContext);
}