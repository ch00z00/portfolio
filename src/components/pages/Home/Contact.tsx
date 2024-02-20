import { RotateButton, RotateLinkButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <div
      className="relative flex w-screen flex-col items-center space-y-3
              bg-black-200 px-[min(8vw)] pb-52 pt-20 text-white-200"
    >
      <div className="flex w-2/3 items-center justify-between">
        <div className="font-march-evoked text-[min(3vw,20px)] tracking-wider">
          Social links:
        </div>
        <div className="flex w-1/2 items-center justify-between lg:w-1/3">
          <RotateLinkButton
            blank={true}
            href={TWITTER_LINK}
            bef_txt="【X】"
            aft_txt="Follow Me!"
          />
          <RotateLinkButton
            blank={true}
            href={GITHUB_LINK}
            bef_txt="【GitHub】"
            aft_txt="Follow Me!"
          />
        </div>
      </div>
      <hr className="my-6 w-[min(60vw)] text-white-200/70" />
      <div className="flex w-2/3 items-center justify-between">
        <div className="font-march-evoked text-[min(3vw,20px)] tracking-wider">
          Mail:
        </div>
        <RotateButton
          bef_txt={CONTACT_ADDRESS}
          aft_txt="Copy → clipboard"
          result_txt="Copied!"
          onClick={() => {
            navigator.clipboard.writeText(CONTACT_ADDRESS);
          }}
        />
      </div>
    </div>
  );
};
