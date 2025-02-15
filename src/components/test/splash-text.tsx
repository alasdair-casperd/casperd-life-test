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
    <div className="max-w-[700px] flex flex-col sm:items-center items-start text-left sm:text-center mx-4 md:mt-32 md:mb-24 mt-16 mb-8">
      {subtitle && (
        <span className="md:text-[18pt] text-[10pt] font-bold uppercase tracking-[4pt] text-bold md:mb-5 mb-2">
          {subtitle}
        </span>
      )}
      <h1 className="md:text-[50pt] text-[30pt] md:mb-8">{title}</h1>
      {description && <p className="md:text-xl">{description}</p>}
    </div>
  );
}
