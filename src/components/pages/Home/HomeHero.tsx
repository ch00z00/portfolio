import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

import { RevealText } from "@/components/elements/Text";
import { Parallax } from "react-scroll-parallax";

export const HomeHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative flex h-fit w-screen flex-col items-center bg-black-100 py-36">
      {isClient ? (
        <>
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
                width={600}
                height={600}
                alt="picture of me"
                className="rounded-xl blur-sm duration-700 ease-in-out hover:blur-none"
              />
            </MediaQuery>
          </div>
          <div className="flex w-full flex-col pt-52 text-center leading-none lg:pt-60 xl:pt-48">
            <MediaQuery maxWidth={767}>
              <Parallax speed={25} className="z-10">
                <RevealText
                  text="Welcome to my portfolio site"
                  className="font-march-evoked text-[min(4vw,40px)] tracking-widest"
                />
              </Parallax>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <Parallax speed={16} className="z-10">
                <RevealText
                  text="Welcome to my portfolio site"
                  className="font-march-evoked text-[min(4vw,40px)] tracking-widest"
                />
              </Parallax>
            </MediaQuery>
            <Parallax speed={30} className="z-10 pt-0 md:pt-4 xl:pt-0">
              <RevealText
                text="Yusuke Seki"
                className="-top-8 font-march-evoked text-[min(13vw,300px)] tracking-wider text-yellow-100"
              />
            </Parallax>
          </div>

          <div className="z-10 mx-auto pt-[190px] text-center sm:pt-[500px] md:pt-[420px]">
            <div className="w-8 rounded-full border py-0 text-xl text-yellow-100 md:w-12 md:py-1 md:text-3xl">
              ↓
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
