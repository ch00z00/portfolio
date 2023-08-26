import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
import { FadeInWrapper } from "@/components/effects/FadeInWrapper";

import WaterTexture from "@/components/effects/WaterTexture";
import brush from "../../../../public/assets/brush.png";

// TODO: Implement a water-like distortion effect on GIF.

export const ArchivePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <FadeInWrapper>
        <Image
          src="/assets/tv_noise.gif"
          width={900}
          height={900}
          alt="tv_noise"
        />
      </FadeInWrapper>
    </div>
  );
};

// export const ArchivePage: React.FC = () => {
//   let canvas: HTMLElement;
//   useEffect(() => {
//     if (canvas) return;
//     // canvasを取得
//     canvas = document.getElementById("canvas")!;

//     const scene = new THREE.Scene();

//     const sizes = {
//       width: innerWidth,
//       height: innerHeight,
//     };

//     const camera = new THREE.PerspectiveCamera(
//       20,
//       sizes.width / sizes.height,
//       0.1,
//       1000
//     );

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas || undefined,
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     // document.body.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);

//     camera.position.set(0, 0, 5);
//     controls.update();

//     // Plane Geometry
//     const planeGeometry = new THREE.PlaneGeometry(1, 1, 1);
//     const planeMaterial = new THREE.MeshLambertMaterial({
//       color: "#2497f0",
//     });
//     const box = new THREE.Mesh(planeGeometry, planeMaterial);
//     box.position.z = -5;
//     scene.add(box);

//     // ライト
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xffffff, 0.2);
//     pointLight.position.set(1, 2, 3);
//     scene.add(pointLight);

//     // アニメーション
//     const clock = new THREE.Clock();
//     const tick = () => {
//       window.requestAnimationFrame(tick);
//       renderer.render(scene, camera);
//     };
//     tick();

//     // ブラウザのリサイズ処理
//     window.addEventListener("resize", () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(window.devicePixelRatio);
//     });
//   }, []);

//   return (
//     <>
//       <canvas id="canvas"></canvas>
//     </>
//   );
// };
