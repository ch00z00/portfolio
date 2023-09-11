import { STRevealText } from "@/components/elements/Text";
import { HOME_02_ITEMS } from "@/const";

// TODO: Implement Text Distortion Effects.

export const Home02: React.FC = () => {
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
          02.
        </div>
        <STRevealText
          text="Skills"
          className="font-march-evoked text-[min(6vw,96px)] tracking-widest"
        />
      </div>
      <div
        className="space-y-8 pt-6 font-sans text-[min(2vw,16px)]
                  tracking-widest text-yellow-100 xl:pt-10"
      >
        {HOME_02_ITEMS.map((item) => (
          <>
            <div key={item.title} className="">
              <STRevealText
                text={item.title}
                className="font-sans text-[min(3vw,18px)] text-yellow-100"
              />
              <STRevealText
                text={item.skills}
                className="block text-[min(3vw,24px)] text-white-200"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
