import { RotateButton, RotateLinkButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <div className="relative mt-40 flex w-screen items-center justify-between bg-orange-100 px-80 py-20">
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
  );
};
