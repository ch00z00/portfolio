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
      <RevealText text="Hello" className="font-syne tracking-wider" />
      {isClient ? (
        <>
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pom.jpeg"
              width={300}
              height={300}
              alt="picture of me"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pom.jpeg"
              width={450}
              height={450}
              alt="picture of me"
            />
          </MediaQuery>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
