import Image from "next/image";
import { Footer } from "@/components/layouts/Footer";

export const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-screen pt-20 font-orbitron text-black-200">
      <Footer />
    </div>
  );
};
