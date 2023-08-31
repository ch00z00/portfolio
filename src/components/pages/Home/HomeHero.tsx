import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import { HOME_HERO_ITEMS } from "@/const";
import { RevealText } from "@/components/elements/Text";

export const HomeHero: React.FC = () => {
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
    <div className="relative flex h-screen w-screen flex-col items-center bg-black-200 py-32">
      {isClient ? (
        <div className="absolute flex justify-center">
          <MediaQuery maxWidth={639}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={300}
              height={300}
              alt="picture of me"
              className="rounded-xl blur-sm duration-300 ease-in-out hover:blur-none"
            />
          </MediaQuery>
          <MediaQuery minWidth={640}>
            <Image
              src="/assets/pic_of_me.jpeg"
              width={500}
              height={500}
              alt="picture of me"
              className="rounded-xl blur-md duration-500 ease-in-out hover:blur-none"
            />
          </MediaQuery>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto flex w-full flex-col pt-12 text-center leading-none">
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
