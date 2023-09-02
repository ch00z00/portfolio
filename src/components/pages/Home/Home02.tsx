import { RevealText } from "@/components/elements/Text";

// TODO: Implement Text Distortion Effects.

export const Home02: React.FC = () => {
  return (
    <div className="relative grid h-fit w-screen grid-cols-2 bg-black-100 px-[min(12vw)] py-24">
      <div>
        <div className="font-march-evoked text-[min(2vw,20px)] tracking-widest text-yellow-100">
          02.
        </div>
        <RevealText
          text="Skills"
          className="font-march-evoked text-[min(4vw,48px)] tracking-widest"
        />
      </div>
      <div className="space-y-6 pt-10 text-[min(2vw,16px)] tracking-widest text-yellow-100">
        <label className="flex flex-col">
          <div>FRONTEND SKILLS:</div>
          <div className="text-2xl text-white-200">
            HTML, CSS(Tailwind CSS/ MUI/ Chakra UI/ SASS), JavaScript,
            TypeScript, React, Next.js, GSAP, Three.js
          </div>
        </label>
        <label className="flex flex-col">
          <div>BACKEND SKILLS:</div>
          <div className="text-2xl text-white-200">
            Node.js, Python, Django, GraphQL, MySQL
          </div>
        </label>
        <label className="flex flex-col">
          <div>TOOLS & PLATFORMS:</div>
          <div className="text-2xl text-white-200">
            Git(GitHub), Figma, MacOS, Linux(Ubuntu, CentOS), Windows, AWS,
            Docker, VSCode
          </div>
        </label>
        <label className="flex flex-col">
          <div>OTHER SKILLS:</div>
          <div className="text-2xl text-white-200">Drivers License(MT)</div>
        </label>
      </div>
    </div>
  );
};
