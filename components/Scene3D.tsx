"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useReducedMotion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-dim)] via-transparent to-transparent opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-[var(--accent)] opacity-20" />
    </div>
  );
}

type Scene3DProps = {
  className?: string;
  label?: string;
};

export function Scene3D({ className = "", label = "Interactive 3D wireframe visualization" }: Scene3DProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <SceneFallback />;
  }

  return (
    <div className={`relative ${className}`} aria-label={label} role="img">
      <Suspense fallback={<SceneFallback />}>
        <HeroScene />
      </Suspense>
    </div>
  );
}
