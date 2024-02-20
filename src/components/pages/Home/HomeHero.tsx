import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

export const HomeHero: React.FC = () => {
  // This is the solution for `Text content does not match server-rendered HTML` error.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-fit w-screen flex-col items-center bg-black-100 pb-[min(26vh)] pt-36 sm:pb-[min(30vh)] md:pb-[min(60vh)]">
      {isClient ? (
        <>
          <div className="absolute flex items-center justify-center">
            <MediaQuery maxWidth={639}>
              <Image
                src="/assets/pic_of_me.jpeg"
                width={300}
                height={300}
                alt="picture of me"
                className="blur-sm duration-700 ease-in-out hover:blur-none"
              />
            </MediaQuery>
            <MediaQuery minWidth={640}>
              <Image
                src="/assets/pic_of_me.jpeg"
                width={600}
                height={600}
                alt="picture of me"
                className="blur-md duration-700 ease-in-out hover:blur-none"
              />
            </MediaQuery>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
