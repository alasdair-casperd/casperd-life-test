"use client";

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
}

/**
 * A splash text component for displaying a large title alongside an optional subtitle and description.
 */
export function SplashText({ title, subtitle, description }: Props) {
  return (
    <div className="mx-4 mt-16 mb-8 flex max-w-[700px] flex-col items-start text-left sm:items-center sm:text-center md:mt-32 md:mb-24">
      {subtitle && (
        <span className="text-bold mb-2 text-[10pt] font-bold tracking-[4pt] uppercase md:mb-5 md:text-[18pt]">
          {subtitle}
        </span>
      )}
      <h1 className="md:mb-8">{title}</h1>
      {description && <p className="md:text-xl">{description}</p>}
    </div>
  );
}
