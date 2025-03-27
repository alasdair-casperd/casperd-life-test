import { experiences } from "@/data/experience.data";
import { example_statistics } from "@/data/statistics.data";
import { Response } from "@/types/response";
import { Statistics } from "@/types/statistics";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, child, set, get, update } from "firebase/database";

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

      const experience_frequencies: { [key: string]: number } = {};

      for (let experience of experiences) {
        let completions = experience_completions[experience.id] || 0;
        experience_frequencies[experience.id] = completions / total_responses;
      }

      for (let category in category_averages) {
        category_averages[category] /= 100;
      }

      return {
        total_responses,
        average_overall_score: average_overall_score / 10,
        category_averages,
        experience_frequencies,
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
    // TODO
  };

  return {
    fetchStatistics,
    updateStatistics,
  };
};
