import { AboutHero } from "./AboutHero";
import { Favorite } from "./Favorite";
import { Identity } from "./Identity";

export const AboutLayout: React.FC = () => {
  return (
    <>
      <AboutHero />
      <Identity />
      <Favorite />
    </>
  );
};
