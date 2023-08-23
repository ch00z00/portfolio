import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    revealAnim();
  }, []);

  const revealAnim = () => {
    gsap.registerPlugin(ScrollTrigger);
    const containers = document.querySelectorAll("#container");

    containers.forEach((container) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
          },
        })
        .to("#overlay", { y: "-100%", duration: 0.5 })
        .fromTo(
          "#image",
          { scale: 1.2 },
          { scale: 1, duration: 0.5, ease: "power2.inout" }
        );
    });
  };

  return (
    <div className="mx-auto w-full max-w-full px-20 py-36">
      {isClient ? (
        <div
          className="space-y-32 font-neuropol text-4xl text-yellow-100 lg:text-8xl"
          data-scroll-section
          data-scroll-section-id="section0"
        >
          {/* 1 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="1"
          >
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/1.jpeg"
              width={700}
              height={700}
              alt="1"
            />
            <div className="z-20 -ml-96">Chapt-1</div>
          </section>
          {/* 2 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="z-20 -mr-80 pt-64">Chapt-2</div>
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/2.jpeg"
              width={700}
              height={700}
              alt="2"
            />
          </section>
          {/* 3 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="3"
          >
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/4.jpeg"
              width={700}
              height={700}
              alt="3"
            />
            <div className="z-20 -ml-60 pt-40">Chapt-3</div>
          </section>
          {/* 4 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="4"
          >
            <div className="z-20 -mr-64 pb-14">Chapt-4</div>
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/3.jpeg"
              width={600}
              height={600}
              alt="4"
            />
          </section>
          {/* 5 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="5"
          >
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/5.jpeg"
              width={500}
              height={500}
              alt="5"
            />
            <div className="z-20 -ml-60 pt-56">Chapt-5</div>
          </section>
          {/* 6 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="6"
          >
            <div className="z-20 -mr-96 pt-16">Chapt-6</div>
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/6.jpeg"
              width={700}
              height={700}
              alt="6"
            />
          </section>
          {/* 7 */}
          <section
            id="container"
            className="flex w-full flex-row items-center justify-center overflow-hidden"
            data-scroll
            data-scroll-speed="7"
          >
            <div id="overlay" className="absolute z-10 bg-black-100"></div>
            <Image
              id="image"
              src="/assets/about/7.jpeg"
              width={700}
              height={700}
              alt="7"
            />
            <div className="z-20 -ml-80 pt-20">Chapt-7</div>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
