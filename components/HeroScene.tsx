"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

function WireframeCube() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const edges = useMemo(() => {
    const size = 2.2;
    const h = size / 2;
    const corners: [number, number, number][] = [
      [-h, -h, -h], [h, -h, -h], [h, h, -h], [-h, h, -h],
      [-h, -h, h], [h, -h, h], [h, h, h], [-h, h, h],
    ];
    const pairs: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    return pairs.map(([a, b]) => ({
      points: [corners[a], corners[b]] as [[number, number, number], [number, number, number]],
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.15 + mouse.current.y * 0.3;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.current.x * 0.4;
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        mouse.current.x = (e.point.x / 3) * 0.5;
        mouse.current.y = (e.point.y / 3) * 0.5;
      }}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {edges.map((edge, i) => (
          <Line
            key={i}
            points={edge.points}
            color="#39ff14"
            lineWidth={1.5}
            transparent
            opacity={0.85}
          />
        ))}
        <mesh>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshBasicMaterial color="#39ff14" wireframe transparent opacity={0.08} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 120;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#39ff14" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#39ff14" />
      <WireframeCube />
      <Particles />
    </Canvas>
  );
}
