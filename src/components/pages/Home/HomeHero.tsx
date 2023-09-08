import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

import { RevealText } from "@/components/elements/Text";
import { Parallax } from "react-scroll-parallax";
import { ExpCircle } from "@/components/elements/Expelimental";

export const HomeHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative flex h-fit w-screen flex-col items-center bg-black-100 pb-96 pt-36">
      {isClient ? (
        <>
          <Parallax speed={-5} className="-mb-16 flex w-full pl-[min(70vw)]">
            <ExpCircle />
          </Parallax>
          <Parallax speed={-15} className="flex w-full pl-[min(5vw)]">
            <ExpCircle />
          </Parallax>
          <div className="absolute mb-40 flex items-center justify-center">
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
          <div className="flex w-full flex-col pt-52 text-center leading-none lg:pt-60 xl:pt-24">
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
          <Parallax speed={90} className="flex w-full pl-[min(80vw)]">
            <ExpCircle className="h-32 w-32" />
          </Parallax>
          <Parallax speed={30} className="flex w-full pl-[min(20vw)]">
            <ExpCircle className="h-8 w-8" />
          </Parallax>
          <Parallax
            speed={60}
            className="-mb-80 flex w-full pl-[min(65vw)] pt-[min(10vw)]"
          >
            <ExpCircle />
          </Parallax>
          <Parallax
            speed={20}
            className="-mb-80 flex w-full pl-[min(20vw)] pt-[min(20vw)]"
          >
            <ExpCircle className="h-40 w-40" />
          </Parallax>
          <Parallax
            speed={10}
            className="-mb-96 flex w-full pl-[min(90vw)] pt-[min(20vw)]"
          >
            <ExpCircle className="h-14 w-14" />
          </Parallax>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
