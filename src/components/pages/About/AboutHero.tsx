import { useEffect, useState } from "react";
import Image from "next/image";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

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
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="1"
          >
            <Image
              src="/assets/about/1.jpeg"
              width={700}
              height={700}
              alt="1"
            />
            <div className="z-10 -ml-96">Chapt-1</div>
          </section>
          {/* 2 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="z-10 -mr-80 pt-64">Chapt-2</div>
            <Image
              src="/assets/about/2.jpeg"
              width={700}
              height={700}
              alt="2"
            />
          </section>
          {/* 3 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="3"
          >
            <Image
              src="/assets/about/4.jpeg"
              width={700}
              height={700}
              alt="3"
            />
            <div className="z-10 -ml-60 pt-40">Chapt-3</div>
          </section>
          {/* 4 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="4"
          >
            <div className="z-10 -mr-64 pb-14">Chapt-4</div>
            <Image
              src="/assets/about/3.jpeg"
              width={600}
              height={600}
              alt="4"
            />
          </section>
          {/* 5 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="5"
          >
            <Image
              src="/assets/about/5.jpeg"
              width={500}
              height={500}
              alt="5"
            />
            <div className="z-10 -ml-60 pt-56">Chapt-5</div>
          </section>
          {/* 6 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="6"
          >
            <div className="z-10 -mr-96 pt-16">Chapt-6</div>
            <Image
              src="/assets/about/6.jpeg"
              width={700}
              height={700}
              alt="6"
            />
          </section>
          {/* 7 */}
          <section
            className="flex w-full flex-row items-center justify-center"
            data-scroll
            data-scroll-speed="7"
          >
            <Image
              src="/assets/about/7.jpeg"
              width={700}
              height={700}
              alt="7"
            />
            <div className="z-10 -ml-80 pt-20">Chapt-7</div>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
