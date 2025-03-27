import { JSX } from "react";

/**
 * One of the categories in which life experiences on the quiz are grouped.
 */
export type Category = {
  id: string;
  name: string;
  icon: JSX.Element;
};
