import React from "react";
import { useRouter } from "expo-router";
import PublisherChip from "@/components/common/publisher-chip";
import { PUBLISHERS } from "@/mock-data/publishers";
import PersonalizeLayout from "@/components/layout/personalize-layout";

const PublishersPage = () => {
  const router = useRouter();

  return (
    <PersonalizeLayout
      header={{
        title: "Your Trusted Publishers",
        description: "Select the publishers you trust, and we&apos;ll deliver updates from them directly to your feed."
      }}
      data={PUBLISHERS}
      renderItem={(item) => {
        return <PublisherChip {...item} />
      }}
      skip={{
        hide: true
      }}
      next={{
        onNext: () => {
          router.push("/home");
        },
        disabled: false
      }}
      noOfColumns={2}
    />
  );

};

export default PublishersPage;
