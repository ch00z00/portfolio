import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

import { RevealText, STRevealText } from "@/components/elements/Text";
import { Parallax } from "react-scroll-parallax";
import { ExpCircle } from "@/components/elements/Expelimental";

export const HomeHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative flex h-fit w-screen flex-col items-center bg-black-100 pb-[min(26vh)] pt-36 sm:pb-[min(30vh)] md:pb-[min(60vh)]">
      {isClient ? (
        <>
          <Parallax
            speed={-5}
            className="z-10 -mb-16 -mt-12 flex w-full pl-[min(75vw)] md:mt-0 md:pl-[min(76vw)]"
          >
            <ExpCircle className="h-16 w-16 md:h-20 md:w-20" />
          </Parallax>
          <Parallax
            speed={-10}
            className="z-10 flex w-full pl-[min(1vw)] pt-[min(4vh)] md:pl-[min(5vw)] md:pt-0"
          >
            <ExpCircle className="h-12 w-12 md:h-28 md:w-28" />
          </Parallax>
          <div className="absolute mb-40 flex items-center justify-center">
            <MediaQuery maxWidth={639}>
              <Image
                src="/assets/pic_of_me.jpeg"
                width={300}
                height={300}
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
          <div className="flex w-full flex-col pt-32 text-center leading-none sm:pt-32 lg:pt-20 xl:pt-14">
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
          <Parallax
            speed={60}
            className="flex w-full pl-[min(60vw)] pt-[min(12vh)] md:-mt-40 md:pl-[min(85vw)]"
          >
            <ExpCircle className="h-14 w-14 md:h-32 md:w-32" />
          </Parallax>
          <Parallax
            speed={60}
            className="z-10 -mt-20 flex w-full pl-[min(6vw)] md:mt-0 md:pl-[min(20vw)]"
          >
            <ExpCircle className="h-20 w-20 md:h-14 md:w-14" />
          </Parallax>
          <Parallax
            speed={20}
            className="z-10 -mb-96 flex w-full pl-[min(70vw)] pt-[min(4vh)] md:pb-[min(6vh)]"
          >
            <ExpCircle className="h-16 w-16 md:h-20 md:w-20" />
          </Parallax>
          <Parallax
            speed={50}
            className="z-10 -mb-96 flex w-full pl-[min(30vw)] pt-[min(40vh)] md:pl-[min(25vw)] md:pt-[min(20vh)]"
          >
            <ExpCircle className="h-10 w-10 md:h-40 md:w-40" />
          </Parallax>
          <Parallax
            speed={30}
            className="-mb-20 flex w-full pl-[min(85vw)] pt-[min(5vh)] md:-mb-96 md:pl-[min(90vw)] md:pt-[min(20vh)]"
          >
            <ExpCircle className="h-10 w-10 sm:h-14 sm:w-14" />
          </Parallax>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
