import { example_statistics } from "@/data/statistics.data";
import { Response } from "@/types/response";
import { Statistics } from "@/types/statistics";

export const useStatistics = () => {
  /**
   * Asynchronously fetches a snapshot of the current global statistics from the firebase realtime database.
   */
  const fetchStatistics = async () => {
    // TODO
    return example_statistics;
  };

  /**
   * Update the statistics with after receiving a new response to the test.
   * @param response The response to the test to update the statistics with.
   * @param current A snapshot of the current statistics.
   */
  const updateStatistics = async (response: Response, current: Statistics) => {
    // TODO
  };

  return {
    fetchStatistics,
    updateStatistics,
  };
};
