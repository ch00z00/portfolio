import Image from "next/image";
import { HeadModel } from "../../../../public/models/head";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export const AboutHero: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black-200 text-white-200">
      <Canvas camera={{ fov: 10, position: [0, 0, 10] }}>
        <color attach="background" args={["white"]} />
        <ambientLight />
        <OrbitControls />
        <Suspense>
          <Float floatIntensity={1} rotationIntensity={0}>
            <HeadModel />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
