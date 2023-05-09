import { Footer } from "@/components/layouts/Footer";
import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import Link from "next/link";
import { useEffect } from "react";
import * as THREE from "three";
import type { NextPage } from "next";

const Home: NextPage = () => {
  let canvas: HTMLElement;
  useEffect(() => {
    if (canvas) return;
    canvas = document.getElementById("canvas")!;

    console.log(THREE);

    const scene = new THREE.Scene();

    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const sphereGeometry = new THREE.SphereGeometry(2.5, 30, 30);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.z = -5;
    sphere.rotation.set(10, 10, 10);
    scene.add(sphere);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(2, 2, -1);
    scene.add(pointLight);

    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      sphere.rotation.x = elapsedTime * 0.2;
      sphere.rotation.y = elapsedTime * 0.2;
      window.requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
    });
  }, []);
  return (
    <>
      <BaseLayout title="" />
      <div className="h-screen w-screen">
        <canvas id="canvas" className="bg-black absolute -z-10"></canvas>
        <div className="text-white px-40 pt-56">
          <h1 className="text-7xl flex justify-start">Miniature</h1>
          <div className="text-xl pt-14 tracking-wider leading-relax">
            <div>Hi there 👋</div>
            <div className="whitespace-nowrap pt-4">
              My name is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                choozoo
              </span>{" "}
              and this is my profile site.
            </div>
            <div className="text-xl pt-4 tracking-wider leading-relax">
              I'm a front-end developer 🦄
            </div>
            <div className="text-xl pt-4 tracking-wider leading-relax">
              I post blog contents about my hobbies and technology.
              <p>
                You can check my blogs from{" "}
                <Link
                  href="/blog"
                  className="hover:underline hover:text-emerald-300"
                >
                  Blog page
                </Link>
                !
              </p>
            </div>
          </div>
          <div className="text-3xl font-bold pt-16">Tech Stack</div>
          <div className="text-xl pt-3 tracking-wider leading-relax">
            TypeScript / Next.js / WebGL / Three.js
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
