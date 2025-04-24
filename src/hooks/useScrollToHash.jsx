// hooks/useScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Delay scrolling to ensure DOM is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);
}
