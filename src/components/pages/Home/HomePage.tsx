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
      {/* <div className="relative z-10 flex flex-col gap-12 lg:gap-8">
        <RevealText text="Atheist" className="justify-start" />
        <RevealText text="Minimalist" className="justify-end" />
        <RevealText text="Optimist" className="justify-start" />
        <RevealText text="Sociopath" className="justify-end" />
      </div> */}
      {isClient ? (
        <div className="relative overflow-hidden">
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={200}
              height={200}
              alt="picture of me"
              className="scale-125 invert transition duration-500 ease-in-out"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={400}
              height={400}
              alt="picture of me"
              className="scale-125 invert transition duration-500 ease-in-out"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
