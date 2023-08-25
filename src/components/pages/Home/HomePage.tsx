import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";

export const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black-100">
      {isClient ? (
        <div>
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={300}
              height={300}
              alt="picture of me"
              className="invert"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={500}
              height={500}
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
