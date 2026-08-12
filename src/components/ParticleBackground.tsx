"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Sparkles 
          count={1000} 
          scale={12} 
          size={1.5} 
          speed={0.4} 
          opacity={0.3} 
          color="#22D3EE" 
        />
        <Sparkles 
          count={500} 
          scale={10} 
          size={2} 
          speed={0.2} 
          opacity={0.2} 
          color="#7C3AED" 
        />
      </Canvas>
    </div>
  );
}
