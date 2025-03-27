import { experiences } from "@/data/experience.data";
import { example_statistics } from "@/data/statistics.data";
import { Response } from "@/types/response";
import { Statistics } from "@/types/statistics";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, child, set, get, update } from "firebase/database";
import { useScoringAlgorithm } from "./useScoringAlgorithm";
import { categories } from "@/data/category.data";

const firebaseConfig = {
  apiKey: "AIzaSyBiE8HANYWoRuATQTNs5hNFT9n3wz0RKjw", // Note: This key is safe to expose as the database is protected by authentication rules.
  authDomain: "casperd-life-test.firebaseapp.com",
  databaseURL:
    "https://casperd-life-test-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "casperd-life-test",
  storageBucket: "casperd-life-test.appspot.com",
  messagingSenderId: "351980147086",
  appId: "1:351980147086:web:9b1505f3b33226497714df",
};

/**
 * Handles fetching and updating the global statistics, using firebase anonymous authentication to protect the database while exposing the api key.
 */
export const useStatistics = () => {
  // Initialise the firebase app.
  const app = initializeApp(firebaseConfig);

  /**
   * Create an anonymous authentication user for firebase.
   */
  const createAnonymousAuthUser = async () => {
    const auth = getAuth();
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Asynchronously fetches a snapshot of the current global statistics from the firebase realtime database.
   */
  const fetchStatistics = async (): Promise<Statistics> => {
    await createAnonymousAuthUser();

    const reference = ref(getDatabase());

    try {
      // Get a snapshot of the database.
      const snapshot = await get(reference);

      if (!snapshot.exists()) throw new Error("No data found in the database.");

      const data = snapshot.val();
      const total_responses = data.totalResponses || 0;

      const average_overall_score = data.averageOverallScore || 0;
      const category_averages = data.categoryAverages || {};
      const experience_completions = data.totalExperienceCompletions || {};

      const experience_data: {
        [key: string]: { frequency: number; completions: number };
      } = {};

      for (let experience of experiences) {
        let completions = experience_completions[experience.id] || 0;
        experience_data[experience.id] = {
          frequency: completions / total_responses,
          completions,
        };
      }

      for (let category in category_averages) {
        category_averages[category] /= 100;
      }

      return {
        total_responses,
        average_overall_score: average_overall_score / 10,
        category_averages,
        experiences: experience_data,
      };
    } catch (error) {
      console.error("Error updating firebase database:", error);
      return example_statistics;
    }
  };

  /**
   * Update the statistics with after receiving a new response to the test.
   * @param response The response to the test to update the statistics with.
   */
  const updateStatistics = async (response: Response) => {
    // Abort if the response contains fewer than three checked experiences. This is to prevent accidental or incomplete submissions from affecting the statistics.
    if (Object.values(response).filter((x) => x).length < 3) return;

    const statistics = await fetchStatistics();
    const reference = ref(getDatabase());

    const results = useScoringAlgorithm().calculateResults(
      response,
      statistics,
    );

    const new_total_responses = statistics.total_responses + 1;

    const new_average_overall_score = newAverage(
      statistics.average_overall_score * 10,
      statistics.total_responses,
      results.overall_score * 10,
    );

    const new_category_averages: any = {};
    for (const category of categories.all) {
      const old_average = statistics.category_averages[category.id] * 100;
      const new_average = newAverage(
        old_average,
        statistics.total_responses,
        results.categories[category.id].completion * 100,
      );
      new_category_averages[category.id] = new_average;
    }

    const new_total_experience_completions: any = {};
    for (const experience of experiences) {
      new_total_experience_completions[experience.id] =
        statistics.experiences[experience.id].completions + 1;
    }

    const updated_data = {
      totalResponses: new_total_responses,
      averageOverallScore: new_average_overall_score,
      categoryAverages: new_category_averages,
      totalExperienceCompletions: new_total_experience_completions,
    };

    await update(reference, updated_data);
  };

  const newAverage = (
    current_average: number,
    current_count: number,
    new_value: number,
  ) => {
    return (current_average * current_count + new_value) / (current_count + 1);
  };

  return {
    fetchStatistics,
    updateStatistics,
  };
};
