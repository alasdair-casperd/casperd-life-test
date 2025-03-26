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
        className="border-base-500/30 group bg-base-950/30 relative flex w-full cursor-pointer flex-row-reverse items-center justify-between gap-4 rounded-xl border p-5 duration-150"
        onClick={toggleExperience}
      >
        <div
          className={`${
            completed ? "bg-base-100" : "bg-base-950/50"
          } flex h-6 w-6 items-center justify-center rounded-md p-1 duration-150`}
        >
          <IconCheck
            className="stroke-black stroke-[3px]"
            style={{ visibility: completed ? "visible" : "hidden" }}
          />
        </div>
        <div className="flex w-full flex-row justify-start gap-4">
          <div className="text-base-300 w-6 font-bold">{number}</div>
          <span className="font-semibold">{experience.description.past}</span>
        </div>
      </div>
    </div>
  );
}
