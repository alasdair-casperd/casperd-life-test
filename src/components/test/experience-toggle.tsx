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
        className="border-base-200 group hover:bg-base-50 relative flex w-full cursor-pointer flex-row-reverse items-center justify-between gap-4 rounded-xl border bg-white p-5 duration-150"
        onClick={toggleExperience}
      >
        <div
          className={`${
            completed ? "bg-base-500" : "bg-base-100"
          } flex h-6 w-6 items-center justify-center rounded-md p-1 duration-150`}
        >
          {completed && <IconCheck className="stroke-white stroke-[3px]" />}
        </div>
        <div className="flex w-full flex-row justify-start gap-4">
          <div className="text-base-300 w-6 font-bold">{number}</div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
      </div>
    </div>
  );
}
