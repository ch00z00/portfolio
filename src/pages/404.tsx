import { AnimLinkButton } from "@/components/elements/Button";
import { RevealText } from "@/components/elements/Text";
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black-100 text-yellow-100">
      <RevealText
        text="404 - Page Not Found"
        className="font-earth text-2xl tracking-tighter md:text-3xl lg:text-5xl"
      />
      <AnimLinkButton href="/" className="w-[300px] font-neuropol sm:w-[450px]">
        <div className="flex items-center justify-between text-yellow-100">
          <div>Back to the HOME</div>
          <div className="rounded-full bg-black-200 px-3 text-white-200">→</div>
        </div>
      </AnimLinkButton>
    </div>
  );
};

export default Custom404;