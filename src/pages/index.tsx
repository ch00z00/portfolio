import { BaseLayout } from "@/components/layouts/Layout";
import type { NextPage } from "next";
import { HomePage } from "@/components/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout title="">
        <HomePage />
      </BaseLayout>
    </>
  );
};

export default Home;
