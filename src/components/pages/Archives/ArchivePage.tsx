import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import { FadeInWrapper } from "@/components/effects/FadeinWrapper";
import WaterTexture from "@/components/effects/WaterTexture";

// // TODO: Implement a water-like distortion effect on GIF.

// export const ArchivePage: React.FC = () => {
//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-black-100">
//       <FadeInWrapper>
//         {/* Apply WaterTexture to Image element */}
//         <WaterTexture src="/assets/tv_noise.gif">
//           <Image
//             src="/assets/tv_noise.gif"
//             width={900}
//             height={900}
//             alt="tv_noise"
//           />
//         </WaterTexture>
//       </FadeInWrapper>
//     </div>
//   );
// };

const ArchivePage: React.FC = () => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  const waterTextureRef = useRef<any>(null);

  const onMouseMove = (event: MouseEvent) => {
    // Handle mouse move event
  };

  const init = () => {
    if (rendererRef.current && cameraRef.current && sceneRef.current) {
      // waterTextureRef.current = new WaterTexture();

      addPlane();

      tick();
    }
  };

  const addPlane = () => {
    if (sceneRef.current) {
      const geometry = new THREE.PlaneGeometry(5, 5, 1, 1);
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);

      window.addEventListener("mousemove", onMouseMove);
      sceneRef.current.add(mesh);
    }
  };

  const render = () => {
    if (sceneRef.current && cameraRef.current && rendererRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const tick = () => {
    if (waterTextureRef.current) {
      render();
      waterTextureRef.current.update();
      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({
        antialias: false,
      });
      document.body.append(rendererRef.current.domElement);
    }
    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }
    if (!cameraRef.current) {
      cameraRef.current = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );
    }

    init();

    return () => {
      // Cleanup logic here if needed
    };
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <FadeInWrapper>
        {/* Apply WaterTexture to Image element */}
        <WaterTexture src="/assets/tv_noise.gif">
          <Image
            src="/assets/tv_noise.gif"
            width={900}
            height={900}
            alt="tv_noise"
          />
        </WaterTexture>
      </FadeInWrapper>
    </div>
  );
};

export default ArchivePage;
