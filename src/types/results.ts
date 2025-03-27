import { Experience } from "./experience";
import { Response } from "./response";

/**
 * A user's quiz results data, generated from a response object and a statistics object.
 */
export type Results = {
  overall_score: number;
  categories: { [key: string]: { score: number; completion: number } };
  highlights: {
    rarest_completed: Experience[];
    most_common_missed: Experience[];
  };
  original_response: Response;
};
