import { useEffect } from "react";

const VAR_VVH = "--vvh";

/**
 * Syncs Visual Viewport height to CSS variable --vvh.
 * Fixes iOS Safari gap when keyboard opens (100vh/dvh don't update correctly).
 * Set on document.documentElement so it's globally available.
 */
export function useVisualViewportHeight() {
  useEffect(() => {
    const setHeight = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty(VAR_VVH, `${Math.round(h)}px`);
    };

    setHeight();

    const vv = window.visualViewport;
    if (!vv) return;

    vv.addEventListener("resize", setHeight);
    vv.addEventListener("scroll", setHeight);

    return () => {
      vv.removeEventListener("resize", setHeight);
      vv.removeEventListener("scroll", setHeight);
      document.documentElement.style.removeProperty(VAR_VVH);
    };
  }, []);
}
