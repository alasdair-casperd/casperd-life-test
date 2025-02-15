"use client";

import { IconCheck } from "@tabler/icons-react";
import { Experience } from "../../types/experience";

interface Props {
  number: string;
  experience: Experience;
  completed: boolean;
  toggleExperience: () => void;
}

/**
 * A component for displaying and toggling an experience
 */
export function ExperienceToggle({
  number,
  experience,
  completed,
  toggleExperience,
}: Props) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div
        className="w-full flex flex-row-reverse items-center justify-between gap-4 cursor-pointer bg-white border-2 border-base-200 p-5 rounded-xl group hover:bg-base-50 duration-150 relative"
        onClick={toggleExperience}
      >
        <div
          className={`${
            completed ? "bg-accent" : "bg-base-100"
          } w-6 h-6 rounded-md flex items-center justify-center p-1 duration-150`}
        >
          {completed && <IconCheck className="stroke-white stroke-[5px]" />}
        </div>
        <div className="w-full flex flex-row justify-start gap-4">
          <div className="font-bold text-base-300 w-6">{number}</div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
      </div>
    </div>
  );
}
