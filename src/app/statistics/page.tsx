"use client";

import { PageContainer } from "@/components/general/page-container";
import { RoundedPanel } from "@/components/general/rounded-panel";
import { Statistics } from "@/types/statistics";
import { useEffect, useState } from "react";
import { useStatistics } from "@/composables/useStatistics";
import StatisticsView from "@/components/statistics/statistics-view";

export default function () {
  const { fetchStatistics } = useStatistics();

  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  const getStatistics = async () => {
    const _statistics = await fetchStatistics();
    setStatistics(_statistics);
    setLoading(false);
  };

  useEffect(() => {
    getStatistics();
  });

  return (
    <PageContainer>
      <h1 className="py-20">Statistics</h1>
      <RoundedPanel>
        {loading && <p>Loading...</p>}
        {!loading && statistics && <StatisticsView statistics={statistics} />}
      </RoundedPanel>
    </PageContainer>
  );
}
