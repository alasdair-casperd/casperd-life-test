import {
  IconBallTennis,
  IconGlobe,
  IconHeart,
  IconPalette,
  IconScale,
  IconTie,
} from "@tabler/icons-react";
import { Category } from "../types/category";

const love: Category = {
  id: "love",
  name: "Love",
  icon: <IconHeart />,
};

const travel: Category = {
  id: "travel",
  name: "Travel",
  icon: <IconGlobe />,
};

const activity: Category = {
  id: "activity",
  name: "Activity",
  icon: <IconBallTennis />,
};

const achievements: Category = {
  id: "achievements",
  name: "Achievements",
  icon: <IconTie />,
};

const skills: Category = {
  id: "skills",
  name: "Skills",
  icon: <IconPalette />,
};

const hardship: Category = {
  id: "hardship",
  name: "Hardship",
  icon: <IconScale />,
};

const all = [love, travel, activity, achievements, skills, hardship];

export const categories = {
  love,
  travel,
  activity,
  achievements,
  skills,
  hardship,
  all,
};
