import { AboutHero } from "./AboutHero";
import LocomotiveScroll from "locomotive-scroll";

export const AboutLayout: React.FC = () => {
  const containerElement = document.querySelector("[data-scroll-container]");

  if (containerElement) {
    const scroll: LocomotiveScroll = new LocomotiveScroll({
      el: containerElement as HTMLElement,
      smooth: true,
    });
  } else {
    // TODO: Implement error handling and alternative processing.
  }

  return (
    <div data-scroll-container>
      <AboutHero />
    </div>
  );
};
