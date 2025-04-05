import React from "react";
import PersonalizeLayout from "@/components/layout/personalize-layout";
import { TOPICS } from "@/mock-data/topics";
import ChipsButton from "@/components/common/chips-button";
import { useRouter } from "expo-router";

const TopicsPage = () => {
  const [selectedTopics, setSelectedTopics] = React.useState<number[]>([]);
  const router = useRouter();

  return (
    <PersonalizeLayout
      header={{
        title: "Favorite Topics",
        description: "Pick topics you love, and we&apos;ll recommend better news tailored to your interests."
      }}
      data={TOPICS}
      renderItem={(item) => {
        return <ChipsButton
          onPress={() => {
            setSelectedTopics((prev) => {
              if (prev.includes(item.id)) {
                return prev.filter((topic) => topic !== item.id);
              }

              return [...prev, item.id];
            });
          }}
          selected={selectedTopics.includes(item.id)}
          icon={item.icon}
          label={item.label}
        />
      }}
      extraData={selectedTopics}
      skip={{
        onSkip: () => {
          router.push("/personalize/country");
        },
        disabled: false
      }}
      next={{
        onNext: () => {
          router.push("/personalize/country");
        },
        disabled: selectedTopics.length === 0
      }}
    />
  );
};

export default TopicsPage;
