"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Renders `count` decorative copies of its children, only in the browser.
 * Marquees need duplicated items for a seamless loop; keeping the copies out of
 * the server HTML means crawlers and screen readers see each item once.
 */
export default function ClientClones({ children, count = 1 }: { children: React.ReactNode; count?: number }) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  if (!isClient) return null;
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} aria-hidden="true" inert className="contents">
          {children}
        </div>
      ))}
    </>
  );
}
