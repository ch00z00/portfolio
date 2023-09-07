import { HomeHero } from "./HomeHero";
import { ScrollDownButton } from "@/components/elements/Button";
import { Home01 } from "./Home01";
import { Home02 } from "./Home02";
import { Home03 } from "./Home03";
import { Home04 } from "./Home04";

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <div className="fixed bottom-10 right-10 z-10 sm:right-16">
        <ScrollDownButton />
      </div>
      <div className="space-y-36 pb-48 pt-0 sm:space-y-48 sm:pt-60">
        <Home01 />
        <Home02 />
        <Home03 />
        <Home04 />
      </div>
    </>
  );
};
