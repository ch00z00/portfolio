import { Header } from "../Header";
import { Footer } from "../Footer";

/** TODO:
 * 1. Implement an animation that performs the slide mark and type effect only once when loaded.
 * 2. Implement a cursor sticking effect when hovering.
 */

export const Navigator: React.FC = () => {
  return (
    <>
      <Header />
      {/* Hide this when screen size is reduced to sm */}
      <div className="invisible fixed bottom-14 z-10 flex w-screen items-center justify-center px-14 font-earth text-xs uppercase text-white-200 sm:visible sm:px-24">
        @2023 Yusuke Seki
      </div>
      <Footer />
    </>
  );
};
