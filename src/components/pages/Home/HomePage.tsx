import { HomeHero } from "./HomeHero";
import { ScrollButton } from "@/components/elements/Button";
import { Home01 } from "./Home01";
import { Home02 } from "./Home02";
import { Home03 } from "./Home03";
import { Home04 } from "./Home04";
import { Contact } from "./Contact";

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <div className="fixed bottom-[5vw] right-[1.4vw] z-10 sm:bottom-[1.8vw] sm:right-[1.8vw]">
        <ScrollButton />
      </div>
      <div className="space-y-[min(10vh)] pb-32 pt-[min(60vh,260px)] sm:space-y-48 sm:pb-48 sm:pt-[min(60vh,360px)]">
        <Home01 />
        <Home02 />
        <Home03 />
        <Home04 />
      </div>
      <Contact />
    </>
  );
};
