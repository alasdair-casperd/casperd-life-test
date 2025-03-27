"use client";

/**
 * A splash text component for displaying a large title alongside an optional subtitle and description.
 */
export function SplashText() {
  const scrollToTest = () => {
    if (document) {
      document
        .getElementById("life-test")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="my-20 flex w-full flex-col items-center">
      <div className="mx-4 mt-8 mb-16 flex max-w-[700px] flex-col items-start text-left sm:items-center sm:text-center">
        <div className="tracking-[8px] uppercase">Welcome to the</div>
        <h1 className="md:mb-8">Casperd Life Test</h1>
        <p className="md:text-xl">
          Welcome to the Casperd Full Life Test! Our test aims to quantify how
          much of life you have experienced so far. This includes both the good
          and the bad, everything from holding a baby to losing a loved one.
        </p>

        <div className="mt-8 flex flex-row gap-6">
          <div className="button primary-button" onClick={scrollToTest}>
            Start the Test Now
          </div>
        </div>
      </div>
    </div>
  );
}
