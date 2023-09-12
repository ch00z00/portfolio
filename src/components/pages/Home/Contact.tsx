import { RotateButton, RotateLinkButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <div
      className="relative flex w-screen flex-col items-center justify-between
              bg-green-200 px-[min(12vw)] pb-32 pt-16 md:pb-40 md:pt-28 xl:flex-row xl:py-60"
    >
      <hr className="visible mb-6 w-[min(60vw)] text-black-200 xl:invisible" />
      <div>
        <div
          className="mx-auto text-center font-march-evoked
                    text-[min(13vw,168px)] tracking-wider text-black-200"
        >
          Links
        </div>
        <div
          className="flex w-[min(50vw,)] flex-col items-center justify-around
                    space-y-2 xl:flex-row xl:space-y-0"
        >
          <RotateLinkButton
            blank={true}
            href={TWITTER_LINK}
            bef_txt="X(Twitter)"
            aft_txt="Open in a new tab"
            className="text-black-100"
          />
          <RotateLinkButton
            blank={true}
            href={GITHUB_LINK}
            bef_txt="GitHub"
            aft_txt="Open in a new tab"
            className="text-black-100"
          />
        </div>
      </div>
      <hr className="visible my-6 w-[min(60vw)] text-black-200 xl:invisible" />
      <div className="flex flex-col">
        <div
          className="font-march-evoked text-[min(13vw,168px)]
                    tracking-wider text-black-200"
        >
          Contact
        </div>
        <RotateButton
          bef_txt={CONTACT_ADDRESS}
          aft_txt="Copy to clipboard"
          result_txt="Copied!"
          className="text-black-100"
          onClick={() => {
            navigator.clipboard.writeText(CONTACT_ADDRESS);
          }}
        />
      </div>
      <hr className="visible mt-8 w-[min(60vw)] text-black-200 xl:invisible" />
    </div>
  );
};
