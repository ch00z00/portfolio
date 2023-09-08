import { RotateButton, RotateLinkButton } from "@/components/elements/Button";
import { RevealText } from "@/components/elements/Text";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <div
      className="relative flex w-screen flex-row items-center justify-between
                bg-green-200 px-[min(12vw)] py-40"
    >
      <RevealText
        text="Contact"
        className="font-march-evoked text-[min(9vw,128px)] tracking-wider text-black-200"
      />
      <div className="flex flex-col items-center space-y-[min(2vh)] xl:flex-row xl:space-y-0">
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
    </div>
  );
};
