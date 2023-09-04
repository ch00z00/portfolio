import { AnimLinkButton } from "@/components/elements/Button";
import { RevealText } from "@/components/elements/Text";
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black-100 text-yellow-100">
      <div className="flex flex-col items-center">
        <RevealText
          text="404"
          className="font-earth text-[min(24vw,240px)] tracking-wider text-yellow-100"
        />
        <RevealText
          text="Page Not Found"
          className="font-earth text-[min(6vw,128px)] tracking-tighter"
        />
      </div>
      <div className="group">
        <AnimLinkButton
          href="/"
          className="w-[min(70vw)] py-4 font-neuropol text-lg sm:w-[min(50vw)] xl:w-[min(40vw)] xl:text-3xl"
        >
          <div className="flex items-center justify-between text-yellow-100">
            <div>Back to the HOME</div>
            <div className="rounded-full bg-black-200 px-3 text-white-200">
              →
            </div>
          </div>
        </AnimLinkButton>
        <hr className="mx-auto w-full text-white-100/30 group-hover:invisible" />
      </div>
    </div>
  );
};

export default Custom404;
