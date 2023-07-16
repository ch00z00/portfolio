import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LightRoom } from "../../../../public/models";

export const HomePage: React.FC = () => {
  const [hovNav, setHovNav] = useState("home");

  return (
    <div className="m-0 h-screen w-screen">
      <Canvas camera={{ fov: 10, position: [0, 0, 10] }}>
        <color attach="background" args={["black"]} />
        <ambientLight />
        <OrbitControls autoRotate={false} enableZoom={false} />
        <Suspense>
          <LightRoom />
        </Suspense>
      </Canvas>
    </div>
  );
};
