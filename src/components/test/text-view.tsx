"use client";

import { DataNotice } from "@/components/test/data-notice";
import { ExperienceToggle } from "@/components/test/experience-toggle";
import { TestHeader } from "@/components/test/test-header";
import { experiences } from "@/data/experience.data";
import { Response } from "@/types/response";
import { useState } from "react";

export function TestView() {
  const [response, setResponse] = useState({} as Response);

  const toggleExperience = (id: number) => {
    setResponse({ ...response, [id]: !response[id] });
  };

  return (
    <div>
      <TestHeader
        button={{ text: "Reset Test", action: () => {} }}
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
    </div>
  );
}
