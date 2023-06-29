import { AboutHero } from "./AboutHero";
import { Favorite } from "./Favorite";
import { Identity } from "./Identity";
import { Skills } from "./Skills";

export const AboutLayout: React.FC = () => {
  return (
    <>
      <AboutHero />
      <Identity />
      <Skills />
      <Favorite />
    </>
  );
};
