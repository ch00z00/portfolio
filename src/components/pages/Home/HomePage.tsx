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
      <RevealText text="Atheist" className="font-neuropol" />
      {isClient ? (
        <div>
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={200}
              height={200}
              alt="picture of me"
              className="scale-125 invert"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={400}
              height={400}
              alt="picture of me"
              className="invert"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
