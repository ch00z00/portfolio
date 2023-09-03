import { RevealText } from "@/components/elements/Text";

// TODO: Implement Text Distortion Effects.

export const Home03: React.FC = () => {
  return (
    <div className="relative flex h-fit w-screen flex-col bg-black-100 px-[min(12vw)] xl:grid xl:grid-cols-2">
      <div>
        <div className="font-march-evoked text-[min(2vw,20px)] tracking-widest text-yellow-100">
          03.
        </div>
        <RevealText
          text="Interests"
          className="font-march-evoked text-[min(6vw,52px)] tracking-widest"
        />
      </div>
      <div className="space-y-8 pt-6 text-[min(3vw,18px)] tracking-widest text-white-200 xl:pt-10">
        <div>
          <div className="text-[min(4vw,24px)]">Watching Films</div>
          <div className="text-yellow-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            earum. Vero perferendis at facere totam ut itaque architecto sit
            culpa saepe, impedit iure ipsum aliquid accusantium, optio quas
            necessitatibus molestiae.
          </div>
        </div>
        <div>
          <div className="text-[min(4vw,24px)]">Working out</div>
          <div className="text-yellow-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            earum. Vero perferendis at facere totam ut itaque architecto sit
            culpa saepe, impedit iure ipsum aliquid accusantium, optio quas
            necessitatibus molestiae.
          </div>
        </div>
        <div>
          <div className="text-[min(4vw,24px)]">Making yogurt</div>
          <div className="text-yellow-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            earum. Vero perferendis at facere totam ut itaque architecto sit
            culpa saepe, impedit iure ipsum aliquid accusantium, optio quas
            necessitatibus molestiae.
          </div>
        </div>
      </div>
    </div>
  );
};
