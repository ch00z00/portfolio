import { useEffect, useState } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import LocomotiveScroll from "locomotive-scroll";
import { RevealText } from "@/components/elements/Text";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const scroll: LocomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]")! as HTMLElement,
      smooth: true,
    });
    setIsClient(true);
  }, []);

  return (
    <div
      data-scroll-container
      className="flex items-center justify-center bg-black-100 py-44 text-white-200"
    >
      {/* <RevealText
        text="Hello"
        className="tracking-wide md:text-6xl lg:text-8xl"
      /> */}
      {isClient ? (
        <div
          className="space-y-28"
          data-scroll-section
          data-scroll-section-id="section0"
        >
          {/* 1 */}
          <div data-scroll data-scroll-speed="1">
            <Image
              src="/assets/about/1.jpeg"
              width={700}
              height={700}
              alt="1"
            />
          </div>
          {/* 2 */}
          <div data-scroll data-scroll-speed="2">
            <Image
              src="/assets/about/2.jpeg"
              width={700}
              height={700}
              alt="2"
            />
          </div>
          <div data-scroll data-scroll-speed="3">
            <Image
              src="/assets/about/3.jpeg"
              width={700}
              height={700}
              alt="3"
            />
          </div>
          {/* 4 */}
          <div data-scroll data-scroll-speed="4">
            <Image
              src="/assets/about/4.jpeg"
              width={700}
              height={700}
              alt="4"
            />
          </div>
          {/* 5 */}
          <div data-scroll data-scroll-speed="5">
            <Image
              src="/assets/about/5.jpeg"
              width={700}
              height={700}
              alt="5"
            />
          </div>
          {/* 6 */}
          <div data-scroll data-scroll-speed="6">
            <Image
              src="/assets/about/6.jpeg"
              width={700}
              height={700}
              alt="6"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
