import { useEffect, useState } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex h-fit w-screen flex-col items-center justify-center bg-black-100 py-40 text-white-200">
      {/* <RevealText
        text="Hello"
        className="tracking-wide md:text-6xl lg:text-8xl"
      /> */}
      {isClient ? (
        <div className=" gap-20">
          {/* 1 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/1.jpeg"
              width={200}
              height={200}
              alt="1"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/1.jpeg"
              width={600}
              height={600}
              alt="1"
            />
          </MediaQuery>
          {/* 2 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/2.jpeg"
              width={200}
              height={200}
              alt="2"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/2.jpeg"
              width={600}
              height={600}
              alt="2"
            />
          </MediaQuery>
          {/* 3 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/3.jpeg"
              width={200}
              height={200}
              alt="3"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/3.jpeg"
              width={600}
              height={600}
              alt="3"
            />
          </MediaQuery>
          {/* 4 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/4.jpeg"
              width={200}
              height={200}
              alt="4"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/4.jpeg"
              width={600}
              height={600}
              alt="4"
            />
          </MediaQuery>
          {/* 5 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/5.jpeg"
              width={200}
              height={200}
              alt="5"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/5.jpeg"
              width={600}
              height={600}
              alt="5"
            />
          </MediaQuery>
          {/* 6 */}
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/about/6.jpeg"
              width={200}
              height={200}
              alt="6"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/about/6.jpeg"
              width={600}
              height={600}
              alt="6"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
