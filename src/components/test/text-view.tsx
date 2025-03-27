"use client";

import { DataNotice } from "@/components/test/data-notice";
import { ExperienceToggle } from "@/components/test/experience-toggle";
import { TestHeader } from "@/components/test/test-header";
import { useResponse } from "@/composables/useResponse";
import { experiences } from "@/data/experience.data";
import { Response } from "@/types/response";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStatistics } from "@/composables/useStatistics";

export function TestView() {
  const { storeResponse, retrieveResponse } = useResponse();
  const { updateStatistics } = useStatistics();

  const router = useRouter();
  const search_params = useSearchParams();

  const [response, setResponse] = useState({} as Response);

  const [loading, setLoading] = useState(false);

  const toggleExperience = (id: number) => {
    setResponse({ ...response, [id]: !response[id] });
  };

  // Load the existing response from session storage on component mount.
  useEffect(() => {
    const existing_response = retrieveResponse();
    if (existing_response) setResponse(existing_response);
  }, []);

  /**
   * Store the response in session storage and navigate to the results page.
   */
  const getResults = async () => {
    setLoading(true);

    // Check if the test is in testing mode.
    const testing_mode = search_params.get("testing") === "true";

    // Check if the test has already been completed in the current session.
    const existing_response = retrieveResponse();

    // Update the statistics, if appropriate.
    if (!testing_mode && !existing_response) await updateStatistics(response);

    // Store the results in session storage.
    storeResponse(response);

    // Redirect to the results page.
    router.push("/results");
  };

  /**
   * Reset the test by clearing the response.
   */
  const resetTest = () => {
    setResponse({});
  };

  return (
    <div>
      <TestHeader
        button={{ text: "Reset Test", action: resetTest }}
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
        <div onClick={getResults} className="button primary-button w-full">
          Get Your Results
        </div>
      </div>
    </div>
  );
}
