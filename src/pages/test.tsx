import { useEffect } from "react";
import type { NextPage } from "next";
import * as THREE from "three";
import gsap from "gsap";
import { BaseLayout } from "@/components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout title="">
        <div className="flex h-screen w-screen items-center justify-center text-center text-9xl text-white-200">
          test
        </div>
      </BaseLayout>
    </>
  );
};

export default Home;
