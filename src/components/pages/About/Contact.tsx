import { LinkButton, RotateButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <section className="mx-auto flex h-72 w-screen items-start justify-evenly bg-black-200 pt-14 text-xl text-white-200 sm:pt-24">
      <div className="flex gap-6 sm:gap-20">
        <LinkButton href={GITHUB_LINK} text="GitHub" />
        <LinkButton href={TWITTER_LINK} text="Twitter" />
      </div>
      <RotateButton
        href="#"
        bef_txt={CONTACT_ADDRESS}
        aft_txt="Copy to Clipboard"
      />
    </section>
  );
};
