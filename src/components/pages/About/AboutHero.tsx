import Image from "next/image";

export const AboutHero: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black-100 pt-20 text-white-200">
      <div className="grid grid-cols-2 items-center justify-center gap-16 px-40">
        <div className="flex h-2/3 w-full flex-col items-start justify-center gap-8 bg-black-100 pl-10 font-syne">
          <p className="font-orbitron text-xl">01.</p>
          <p className="text-7xl">Yusuke Seki</p>
          <p className="font-orbitron text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            sapiente sunt laboriosam, totam, nobis incidunt corporis eveniet
            similique ea repellat quidem mollitia vel, dolorum esse?
            Consectetur, eaque. Fuga, laudantium expedita.
          </p>
        </div>
        <Image src="/assets/me.png" width={700} height={700} alt="me" />
      </div>
    </div>
  );
};
