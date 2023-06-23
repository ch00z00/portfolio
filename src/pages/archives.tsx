import { Card } from "@/components/elements/Card";
import { BaseLayout } from "@/components/layouts/Layout/BaseLayout";
import { ArchivesHero } from "@/components/pages/Archives";
import type { NextPage } from "next";
import { useEffect } from "react";
import * as THREE from "three";

export const Archives: NextPage = () => {
  return (
    <>
      <BaseLayout title="| Archives">
        <ArchivesHero />
      </BaseLayout>
    </>
  );
};

export default Archives;
