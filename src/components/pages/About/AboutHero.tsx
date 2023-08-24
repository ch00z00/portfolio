import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { useEffect, useState } from "react";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mx-auto w-full max-w-full px-20 py-48 md:px-40">
      {isClient ? (
        <div className="space-y-36 font-neuropol text-3xl text-yellow-100 md:text-6xl lg:text-8xl">
          {/* 1 */}
          <section className="flex w-full flex-row items-center justify-center">
            <ParallaxBanner
              layers={[{ image: "/assets/about/1.jpeg", speed: -10 }]}
              className="aspect-[2/1]"
            />
            <Parallax speed={15} className="z-10">
              <div className="-ml-60">Chap.1</div>
            </Parallax>
          </section>
          {/* 2 */}
          <section className="flex w-full flex-row items-center justify-center">
            <Parallax speed={10} className="z-10">
              <div className="-mr-40">Chap.2</div>
            </Parallax>
            <ParallaxBanner
              layers={[{ image: "/assets/about/2.jpeg", speed: -15 }]}
              className="aspect-[2/1]"
            />
          </section>
          {/* 3 */}
          <section className="flex w-full flex-row items-center justify-center">
            <ParallaxBanner
              layers={[{ image: "/assets/about/4.jpeg", speed: -15 }]}
              className="aspect-[2/1]"
            />
            <Parallax speed={25} className="z-10">
              <div className="-ml-60">Chap.3</div>
            </Parallax>
          </section>
          {/* 4 */}
          <section className="flex w-full flex-row items-center justify-center">
            <Parallax speed={15} className="z-10">
              <div className="-mr-64 pb-14">Chap.4</div>
            </Parallax>

            <ParallaxBanner
              layers={[{ image: "/assets/about/3.jpeg", speed: -15 }]}
              className="aspect-[5/3]"
            />
          </section>
          {/* 5 */}
          <section className="flex w-full flex-row items-center justify-center">
            <ParallaxBanner
              layers={[{ image: "/assets/about/5.jpeg", speed: -15 }]}
              className="aspect-[2/3]"
            />
            <Parallax speed={20} className="z-10">
              <div className="-ml-12">Chap.5</div>
            </Parallax>
          </section>
          {/* 6 */}
          <section className="flex w-full flex-row items-center justify-center">
            <Parallax speed={15} className="z-10">
              <div className="-mr-96 pt-16">Chap.6</div>
            </Parallax>
            <ParallaxBanner
              layers={[{ image: "/assets/about/6.jpeg", speed: -15 }]}
              className="aspect-[3/1]"
            />
          </section>
          {/* 7 */}
          <section className="flex w-full flex-row items-center justify-center">
            <ParallaxBanner
              layers={[{ image: "/assets/about/7.jpeg", speed: -15 }]}
              className="aspect-[2/1]"
            />
            <Parallax speed={30} className="z-10">
              <div className="-ml-80">Chap.7</div>
            </Parallax>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
