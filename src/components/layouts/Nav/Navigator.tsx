import { LinkButton } from "@/components/elements/Button";

export const Navigator: React.FC = () => {
  return (
    <>
      <header className="fixed top-14 z-10 flex w-screen items-center justify-between px-14 sm:px-24">
        <LinkButton href={"/"} text={"HOME"} />
        <LinkButton href={"/about"} text={"ABOUT"} />
      </header>
      <footer className="fixed bottom-14 z-10 flex w-screen items-center justify-between px-14 sm:px-24">
        <LinkButton href={"/blog/list"} text={"BLOG"} />
        {/* Hide this when screen size is reduced to sm */}
        <div className="invisible font-earth text-xs uppercase text-white-200 sm:visible">
          @2023 Yusuke Seki
        </div>
        <LinkButton href={"/archives"} text={"ARCH"} />
      </footer>
    </>
  );
};
