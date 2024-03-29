import { STRevealText } from "@/components/elements/Text";
import { HOME_04_SENT_EN, HOME_04_SENT_JP } from "@/const";

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
          text="Other"
          className="font-march-evoked text-[min(6vw,96px)] tracking-widest"
        />
      </div>
      <div
        className="space-y-6 pt-6 text-[min(3vw,18px)]
                  tracking-widest text-white-200 xl:pt-10"
      >
        {HOME_04_SENT_JP.map((item) => (
          <>
            <div key={item.title}>
              <STRevealText
                text={item.title}
                className="text-[min(4vw,24px)]"
              />
              <STRevealText
                text={item.sent}
                className="whitespace-pre-line text-[min(3vw,18px)] text-yellow-100"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
