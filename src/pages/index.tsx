import { BaseLayout } from "@/components/layouts/Layout";
import type { NextPage } from "next";
import { Hero } from "@/components/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout title="">
        <Hero />
      </BaseLayout>
    </>
  );
};

export default Home;
