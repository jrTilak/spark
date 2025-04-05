import React, { useState } from "react";
import ChipsButton from "@/components/common/chips-button";
import { COUNTRIES } from "@/mock-data/countries";
import { useRouter } from "expo-router";
import PersonalizeLayout from "@/components/layout/personalize-layout";

const CountryPage = () => {
  const [selectedCountries, setSelectedCountries] = useState<number[]>([]);
  const router = useRouter();

  return (
    <PersonalizeLayout
      header={{
        title: "Preferred Countries",
        description: " Choose the countries you&apos;re interested in, and we&apos;ll keep you updated with the latest news from those regions."
      }}
      data={COUNTRIES}
      renderItem={(item) => {
        return <ChipsButton
          onPress={() => {
            setSelectedCountries((prev) => {
              if (prev.includes(item.id)) {
                return prev.filter((topic) => topic !== item.id);
              }

              return [...prev, item.id];
            });
          }}
          selected={selectedCountries.includes(item.id)}
          icon={item.flag}
          label={item.name}
        />
      }}
      extraData={selectedCountries}
      skip={{
        onSkip: () => {
          router.push("/personalize/publishers");
        },
        disabled: false
      }}
      next={{
        onNext: () => {
          router.push("/personalize/publishers");
        },
        disabled: selectedCountries.length === 0
      }}
    />
  )

};

export default CountryPage;
