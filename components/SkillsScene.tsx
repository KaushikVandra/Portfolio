"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function OrbitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 8, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} floatIntensity={0.3}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial color="#39ff14" wireframe transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

export function SkillsScene() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <CoreSphere />
      <OrbitRing radius={1.2} speed={0.4} color="#39ff14" />
      <OrbitRing radius={1.6} speed={-0.25} color="#39ff14" />
      <OrbitRing radius={2} speed={0.15} color="#39ff1466" />
    </Canvas>
  );
}
