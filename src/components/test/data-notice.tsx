import { IconInfoCircle } from "@tabler/icons-react";

/**
 * A component displaying a notice about data collection.
 */
export function DataNotice() {
  return (
    <div className="bg-base-100 p-4 rounded-xl my-4 flex flex-col sm:flex-row gap-2">
      <div className="text-accent-400 text-2xl font-bold">
        <IconInfoCircle className="w-8 h-8" />
      </div>
      <div className="text-base-800">
        To provide more interesting feedback after the test, we collect
        anonymised statistics on test scores. No personal data is collected and
        your answers are never individually stored. By clicking the button
        below, you consent to your answers being used for this purpose.
      </div>
    </div>
  );
}
