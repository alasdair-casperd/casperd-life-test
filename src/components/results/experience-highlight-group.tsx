import { Statistics } from "@/types/statistics";
import { ExperienceHighlight } from "./experience-highlight";
import { Experience } from "@/types/experience";

interface Props {
  data: {
    experience: Experience;
    completed: boolean;
  }[];
  statistics: Statistics;
}

/**
 * A group of experience highlights showing whether or not they were completed and the frequency of completion.
 */
export function ExperienceHighlightGroup({ data, statistics }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item, index) => (
        <ExperienceHighlight
          experience={item.experience}
          checked={item.completed}
          frequency={statistics.experiences[item.experience.id].frequency ?? 0}
          key={index}
        />
      ))}
    </div>
  );
}
