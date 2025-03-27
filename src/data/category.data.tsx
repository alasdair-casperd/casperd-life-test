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
  name: "Relationships, Family and Love",
  icon: <IconHeart />,
};

const travel: Category = {
  id: "travel",
  name: "Travel and World Experience",
  icon: <IconGlobe />,
};

const activity: Category = {
  id: "activity",
  name: "Activity and Sports",
  icon: <IconBallTennis />,
};

const achievements: Category = {
  id: "achievements",
  name: "Career and Achievements",
  icon: <IconTie />,
};

const skills: Category = {
  id: "skills",
  name: "Skills and Creativity",
  icon: <IconPalette />,
};

const hardship: Category = {
  id: "hardship",
  name: "Hardship and Suffering",
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
