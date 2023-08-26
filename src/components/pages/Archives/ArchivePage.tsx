import React from "react";
import Image from "next/image";
import { FadeInWrapper } from "@/components/effects/FadeInWrapper";

// TODO: Implement a water-like distortion effect on GIF.

export const ArchivePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-100">
      <FadeInWrapper>
        <Image
          src="/assets/tv_noise.gif"
          width={900}
          height={900}
          alt="tv_noise"
          className="z-10"
        />
      </FadeInWrapper>
    </div>
  );
};
