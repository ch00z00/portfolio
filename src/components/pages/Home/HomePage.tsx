import { Home01 } from "./Home01";
import { Home02 } from "./Home02";
import { Home03 } from "./Home03";
import { Home04 } from "./Home04";
import { HomeHero } from "./HomeHero";

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <div className="space-y-48 pb-48 pt-24">
        <Home01 />
        <Home02 />
        <Home03 />
        <Home04 />
      </div>
    </>
  );
};
