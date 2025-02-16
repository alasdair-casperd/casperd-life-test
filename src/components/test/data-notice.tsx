import { IconInfoCircle } from "@tabler/icons-react";

/**
 * A component displaying a notice about data collection.
 */
export function DataNotice() {
  return (
    <div className="bg-base-100 my-4 flex flex-col gap-2 rounded-xl p-4 sm:flex-row">
      <div className="text-accent-400 text-2xl font-bold">
        <IconInfoCircle className="h-8 w-8" />
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
