"use client";

import { useEffect } from "react";

/**
 * Site-wide motion wiring, mounted once in the root layout.
 * - `.reveal` elements fade/slide in when they enter the viewport.
 * - `.spotlight` elements get --x/--y CSS vars that follow the pointer.
 * A MutationObserver picks up elements added after navigation or client renders.
 */
export default function Motion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    const observeAll = (root: ParentNode) => {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };
    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("reveal")) io.observe(node);
          observeAll(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--x", `${e.clientX - rect.left}px`);
      target.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
