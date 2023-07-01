import { LinkButton } from "@/components/elements/Card";

export const Navigator: React.FC = () => {
  return (
    <>
      <header>
        <div className="fixed top-6 z-10 flex w-screen items-center justify-between px-14">
          <LinkButton href={"/"} text={"HOME"} />
          <LinkButton href={"/about"} text={"ABOUT"} />
        </div>
      </header>
      <footer className="fixed bottom-8 z-10 flex w-screen items-center justify-between px-14">
        <LinkButton href={"/blog/list"} text={"BLOG"} />
        <div className="font-earth text-xs uppercase text-white-200">
          @2023 Yusuke Seki
        </div>
        <LinkButton href={"/archives"} text={"ARCH"} />
      </footer>
    </>
  );
};
