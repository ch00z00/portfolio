import { RevealText } from "@/components/elements/Text";
import Image from "next/image";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

export const AboutHero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-20 bg-black-100 text-white-200">
      <RevealText
        text="Hello"
        className="font-syne tracking-wide md:text-6xl lg:text-8xl"
      />
      {isClient ? (
        <div className="relative overflow-hidden rounded-full bg-cover bg-no-repeat">
          <MediaQuery maxWidth={767}>
            <Image
              src="/assets/pom.jpeg"
              width={300}
              height={300}
              alt="picture of me"
              className="invert transition duration-700 ease-in-out hover:scale-125 hover:invert-0"
            />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Image
              src="/assets/pom.jpeg"
              width={450}
              height={450}
              alt="picture of me"
              className="invert transition duration-500 ease-in-out hover:scale-125 hover:invert-0"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
