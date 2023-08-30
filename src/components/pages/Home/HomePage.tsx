import { useState, useEffect } from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import { RevealText } from "@/components/elements/Text";

// TODO: Maybe there's a better way to implement this.

export const HomePage: React.FC = () => {
  const HOME_HERO_ITEMS = [
    {
      text: "Welcom🕺 here!",
      className: "pl-20 font-march-evoked",
    },
    {
      text: "Hi👋 I'm Yusuke🐧",
      className: "pl-20 font-march-evoked",
    },
    {
      text: "Sociopath🙃 w/ sociabilityh🙂",
      className: "pl-20 font-march-evoked",
    },
    {
      text: "Oh☝️ and minimalist🗑️ and optimists😗",
      className: "pl-20 font-march-evoked",
    },
  ];

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
    <div className="flex h-fit w-screen flex-col items-center bg-red-100 py-40">
      <div className="top-80 flex w-screen flex-col">
        {HOME_HERO_ITEMS.map((data, index) => (
          <RevealText
            key={index}
            text={data.text}
            className={data.className}
            onComplete={handleComplete}
          />
        ))}
      </div>
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
