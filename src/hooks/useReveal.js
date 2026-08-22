import { useEffect, useRef, useState } from "react";

// Observa quando o elemento entra na viewport e retorna uma flag "visible".
// Usada para reveals suaves (fade + translate) — respeita prefers-reduced-motion
// via CSS (a transição em si é neutralizada globalmente em index.css).
export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}
