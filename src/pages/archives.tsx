import { Card } from "@/components/elements/Card";
import { Footer } from "@/components/layouts/Footer";
import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import type { NextPage } from "next";
import { useEffect } from "react";
import * as THREE from "three";

export const Archives: NextPage = () => {
  let canvas: HTMLElement;
  useEffect(() => {
    if (canvas) return;
    canvas = document.getElementById("canvas")!;

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

    const torusGeometry = new THREE.TorusGeometry(1.8, 0.8, 30, 50);
    const torusMaterial = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.z = -5;
    torus.rotation.set(10, 10, 10);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(2, 2, -1);
    scene.add(pointLight);

    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      torus.rotation.x = elapsedTime * 0.2;
      torus.rotation.y = elapsedTime * 0.2;
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
      <BaseLayout title="| Archives" />
      <div className="h-screen w-screen">
        <canvas id="canvas" className="bg-black absolute -z-10"></canvas>
        <div className="text-white px-40 pt-32">
          <h1 className="text-5xl flex justify-start">Archives</h1>
          <div className="text-xl pt-14 tracking-wider leading-relax">
            Here is the archives of my past works.
          </div>
          <div className="text-3xl font-bold pt-16">Web works</div>
          <div className="flex gap-9 pt-6">
            <Card title={"Title 1"} description="This is 1st article." />
            <Card title={"Title 2"} description="This is 2nd article." />
            <Card title={"Title 3"} description="This is 3rd article." />
          </div>
          <div className="text-3xl font-bold pt-16">Art works</div>
          <div className="flex gap-9 pt-6">
            <Card title={"Title 1"} description="This is 1st article." />
            <Card title={"Title 2"} description="This is 2nd article." />
            <Card title={"Title 3"} description="This is 3rd article." />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Archives;
