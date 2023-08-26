import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import { ArchivePage } from "@/components/pages/Archives";

import type { NextPage } from "next";

export const Archives: NextPage = () => {
  return (
    <>
      <BaseLayout title="| Archives">
        <ArchivePage />
      </BaseLayout>
    </>
  );
};

export default Archives;
