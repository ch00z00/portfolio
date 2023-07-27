import { AboutHero } from "./AboutHero";
import { Favorite } from "./Favorite";
import { BasicInfo } from "./BasicInfo";
import { Skills } from "./Skills";

export const AboutLayout: React.FC = () => {
  return (
    <>
      <AboutHero />
      <BasicInfo />
      <Skills />
      <Favorite />
    </>
  );
};
