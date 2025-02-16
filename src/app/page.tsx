"use client";

import { PageContainer } from "@/components/general/page-container";
import { DataNotice } from "@/components/test/data-notice";
import { ExperienceToggle } from "@/components/test/experience-toggle";
import { TestHeader } from "@/components/test/test-header";
import { experiences } from "@/data/experience.data";
import { Response } from "@/types/response";
import { useState } from "react";

export default function () {
  const [response, setResponse] = useState({} as Response);

  const toggleExperience = (id: number) => {
    setResponse({ ...response, [id]: !response[id] });
  };

  return (
    <PageContainer
      title="Casperd Full Life Test"
      subtitle="Welcome to the"
      description="Welcome to the Casperd Full Life Test! Our test aims to quantify how much of life you have experienced so far. This includes both the good and the bad, everything from holding a baby to losing a loved one."
    >
      <TestHeader
        button={{ text: "Start Test", action: () => {} }}
      ></TestHeader>

      <div className="mt-10 flex flex-col gap-3">
        {experiences.map((experience, index) => (
          <ExperienceToggle
            key={index}
            experience={experience}
            number={(index + 1).toString()}
            completed={response[experience.id]}
            toggleExperience={() => {
              toggleExperience(experience.id);
            }}
          ></ExperienceToggle>
        ))}
      </div>

      <div className="mt-10">
        <DataNotice />
        <button className="button primary-button w-full">
          Get Your Results
        </button>
      </div>
    </PageContainer>
  );
}
