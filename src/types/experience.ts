import { Category } from "./category";

export type Experience = {
  id: number;
  category: Category;
  details: string;
  description: {
    imperative: string;
    past: string;
  };
};
