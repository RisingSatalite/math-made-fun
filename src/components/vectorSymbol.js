"use client";
import { useEffect, useRef } from "react";

export default function VectorSymbol({ letter }) {
  const ref = useRef(null);

  useEffect(() => {
    // Load MathJax if not already loaded
    if (!window.MathJax) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      script.async = true;
      script.onload = () => {
        window.MathJax.typesetPromise([ref.current]);
      };
      document.head.appendChild(script);
    } else {
      // MathJax already loaded, typeset the new content
      window.MathJax.typesetPromise([ref.current]);
    }
  }, [letter]);

  return (
    <span ref={ref}>
      {`\\( \\vec{${letter}} \\)`} {/* LaTeX inline math */}
    </span>
  );
}
