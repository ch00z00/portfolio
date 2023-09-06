import { STRevealText } from "@/components/elements/Text";
import { HOME_04_SENT_EN } from "@/const";

// TODO: Implement Text Distortion Effects.

export const Home04: React.FC = () => {
  return (
    <div
      className="relative flex h-fit w-screen flex-col
              bg-black-100 px-[min(12vw)] xl:grid xl:grid-cols-2"
    >
      <div>
        <div
          className="font-march-evoked text-[min(2vw,20px)]
                    tracking-widest text-yellow-100"
        >
          04.
        </div>
        <STRevealText
          text="Personality"
          className="font-march-evoked text-[min(6vw,52px)] tracking-widest"
        />
      </div>
      <div
        className="whitespace-pre-line pt-6 text-[min(3vw,18px)]
                  tracking-widest text-yellow-100 xl:pt-10"
      >
        {HOME_04_SENT_EN}
      </div>
    </div>
  );
};
