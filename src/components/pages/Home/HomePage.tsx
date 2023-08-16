import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import { RevealText } from "@/components/elements/Text";

export const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      <div className="relative z-10 flex flex-col gap-12 lg:gap-8">
        <RevealText text="Atheist" className="justify-start" />
        <RevealText text="Minimalist" className="justify-end" />
        <RevealText text="Optimist" className="justify-start" />
        <RevealText text="Sociopath" className="justify-end" />
      </div>
      {isClient ? (
        <>
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pom.jpeg"
              width={300}
              height={300}
              alt="picture of me"
              className="fixed"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pom.jpeg"
              width={500}
              height={500}
              alt="picture of me"
              className="fixed"
            />
          </MediaQuery>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
