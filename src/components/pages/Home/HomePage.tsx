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
      <div className="fixed bottom-10 right-4 z-10 sm:right-14">
        <ScrollButton />
      </div>
      <div className="space-y-[min(10vh)] pb-32 pt-[min(60vh,300px)] sm:space-y-48 sm:pb-48 sm:pt-60">
        <Home01 />
        <Home02 />
        <Home03 />
        <Home04 />
      </div>
      <Contact />
    </>
  );
};
