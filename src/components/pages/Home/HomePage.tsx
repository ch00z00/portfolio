import { Home01 } from "./Home01";
import { Home02 } from "./Home02";
import { Home03 } from "./Home03";
import { HomeHero } from "./HomeHero";

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Home01 />
      <Home02 />
      <Home03 />
    </>
  );
};
