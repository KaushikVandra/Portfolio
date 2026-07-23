"use client";

import { CustomCursor } from "./CustomCursor";
import { CommandPalette } from "./CommandPalette";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      {children}
    </SmoothScroll>
  );
}
