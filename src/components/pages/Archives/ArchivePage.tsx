import Image from "next/image";
import { FadeinWrapper } from "./FadeinWrapper";

// TODO: Implement a water-like distortion effect on GIF.

export const ArchivePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <FadeinWrapper>
        <Image
          src="/assets/tv_noise.gif"
          width={900}
          height={900}
          alt="tv_noise"
        />
      </FadeinWrapper>
    </div>
  );
};
