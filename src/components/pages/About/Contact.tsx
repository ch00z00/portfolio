import { LinkButton } from "@/components/elements/Button";
import { CONTACT_ADDRESS, GITHUB_LINK, TWITTER_LINK } from "@/const";

export const Contact: React.FC = () => {
  return (
    <section className="flex h-80 w-screen items-start justify-evenly bg-black-200 pt-24 text-xl text-white-200">
      <LinkButton href={GITHUB_LINK} text="GitHub" />
      <LinkButton href={CONTACT_ADDRESS} text="Email" />
      <LinkButton href={TWITTER_LINK} text="Twitter" />
    </section>
  );
};
