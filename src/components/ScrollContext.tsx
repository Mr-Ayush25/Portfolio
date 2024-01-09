"use client";
import React, { createContext } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext<null>(null);

export function ScrollContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // setting up lenis scroll
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ScrollContext.Provider value={null}>{children}</ScrollContext.Provider>
  );
}
