import { Results } from "@/types/results";
import { experiences } from "./experience.data";

export const example_results: Results = {
  overall_score: 5.4,
  categories: {
    love: {
      score: 54,
      completion: 0.54,
    },
    travel: {
      score: 2,
      completion: 0.02,
    },
    activity: {
      score: 35,
      completion: 0.35,
    },
    achievements: {
      score: 22,
      completion: 0.22,
    },
    skills: {
      score: 94,
      completion: 0.94,
    },
    hardship: {
      score: 54,
      completion: 0.54,
    },
  },
  highlights: {
    rarest_completed: [
      experiences[5],
      experiences[6],
      experiences[7],
      experiences[8],
      experiences[9],
    ],
    most_common_missed: [
      experiences[0],
      experiences[1],
      experiences[2],
      experiences[3],
      experiences[4],
    ],
  },
  original_response: {},
};
