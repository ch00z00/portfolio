import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import { HOME_HERO_ITEMS } from "@/const";
import { RevealText } from "@/components/elements/Text";

export const HomePersonality: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleComplete = () => {
    if (currentIndex < HOME_HERO_ITEMS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative flex h-screen w-screen flex-col items-center bg-black-100 py-40">
      {isClient ? (
        <div className="absolute">
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
              width={450}
              height={450}
              alt="picture of me"
              className="invert"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto flex w-full flex-col text-center leading-none">
        {HOME_HERO_ITEMS.map((data, index) => (
          <RevealText
            key={index}
            text={data.text}
            className={data.className}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
};
