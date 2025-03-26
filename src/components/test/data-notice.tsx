import { IconInfoCircle } from "@tabler/icons-react";

/**
 * A component displaying a notice about data collection.
 */
export function DataNotice() {
  return (
    <div className="bg-base-900/30 border-base-300 my-4 flex flex-col gap-4 rounded-xl border p-5 sm:flex-row">
      <div className="text-2xl font-bold text-white">
        <IconInfoCircle className="h-8 w-8" />
      </div>
      <div className="text-base-300">
        To provide more interesting feedback after the test, we collect
        anonymised statistics on test scores. No personal data is collected and
        your answers are never individually stored. By clicking the button
        below, you consent to your answers being used for this purpose.
      </div>
    </div>
  );
}
