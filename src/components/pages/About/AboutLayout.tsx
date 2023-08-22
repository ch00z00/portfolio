import { AboutHero } from "./AboutHero";
import { Favorite } from "./Favorite";
import { BasicInfo } from "./BasicInfo";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import dynamic from "next/dynamic";

// ReferenceError could not be avoided, so I was forced to apply dynamic.
const DynamicComponent = dynamic(
  () => import("../../pages/About/AboutHero").then((mod) => mod.AboutHero),
  { ssr: false }
);

export const AboutLayout: React.FC = () => {
  return (
    <>
      <DynamicComponent />
      {/* <AboutHero /> */}
      {/* <BasicInfo />
      <Skills />
      <Favorite />
      <Contact /> */}
    </>
  );
};
