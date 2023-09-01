import { RevealText } from "@/components/elements/Text";
import { HOME_01_SENT_EN } from "@/const";
import { Parallax } from "react-scroll-parallax";

export const Home01: React.FC = () => {
  return (
    <div className="relative grid h-fit w-screen grid-cols-2 bg-black-100 px-[min(12vw)] py-24">
      <div>
        <div className="font-march-evoked text-[min(2vw,20px)] tracking-widest text-yellow-100">
          01.
        </div>
        <Parallax speed={5} className="-mt-2">
          <RevealText
            text="The End, So Far"
            className="font-march-evoked text-[min(4vw,48px)] tracking-widest"
          />
        </Parallax>
      </div>
      <div className="pt-10 text-[min(2vw,16px)] tracking-widest text-yellow-100">
        {HOME_01_SENT_EN}
      </div>
    </div>
  );
};
