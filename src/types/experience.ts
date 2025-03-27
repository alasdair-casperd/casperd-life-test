import { Category } from "./category";

/**
 * A type representing a single 'life experience' on the quiz.
 */
export type Experience = {
  id: number;
  category: Category;
  details: string;
  description: {
    imperative: string;
    past: string;
  };
};
