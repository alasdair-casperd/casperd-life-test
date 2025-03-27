"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { ResultsView } from "@/components/results/results-view";
import { useResponse } from "@/composables/useResponse";
import { useScoringAlgorithm } from "@/composables/useScoringAlgorithm";
import { useStatistics } from "@/composables/useStatistics";
import { example_statistics } from "@/data/statistics.data";
import { Results } from "@/types/results";
import { Statistics } from "@/types/statistics";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function () {
  const { retrieveResponse } = useResponse();
  const { fetchStatistics } = useStatistics();
  const { calculateResults } = useScoringAlgorithm();

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Results | null>(null);
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  const getResults = async () => {
    // Retrieve the test response and global statistics.
    const _response = await retrieveResponse();
    const _statistics = await fetchStatistics();

    // Redirect to the home page if no response is found.
    if (!_response) {
      router.push("/");
      return;
    }

    // Calculate the results.
    const _results = calculateResults(_response, _statistics);

    setResults(_results);
    setStatistics(_statistics);
    setLoading(false);
  };

  useEffect(() => {
    getResults();
  });

  return (
    <PageContainer>
      <h1 className="py-20">Your Results</h1>
      <RoundedPanel>
        {loading && <p>Loading...</p>}
        {!loading && results && (
          <ResultsView results={results} statistics={example_statistics} />
        )}
      </RoundedPanel>
    </PageContainer>
  );
}
