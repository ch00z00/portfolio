import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

import { RevealText } from "@/components/elements/Text";
import { Parallax } from "react-scroll-parallax";

export const HomePersonality: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative flex h-full w-screen flex-col items-center bg-black-200 py-24">
      {isClient ? (
        <div className="absolute flex items-center justify-center">
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={350}
              height={350}
              alt="picture of me"
              className="rounded-xl blur-sm duration-700 ease-in-out hover:blur-none"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={550}
              height={550}
              alt="picture of me"
              className="rounded-xl blur-sm duration-700 ease-in-out hover:blur-none"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto flex w-full flex-col pt-32 text-center leading-none">
        <Parallax speed={15} className="z-10">
          <RevealText
            text="Welcome to my portfolio site"
            className="font-march-evoked text-[min(4vw,40px)] tracking-widest"
          />
        </Parallax>
        <Parallax speed={15} className="z-10">
          <RevealText
            text="Yusuke Seki"
            className="font-march-evoked text-[min(13vw,300px)] tracking-wider text-yellow-100"
          />
        </Parallax>
      </div>
    </div>
  );
};
