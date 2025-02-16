type Props = {
  children?: React.ReactNode;
};

/**
 * A white, rounded-panel used for grouping content on a page.
 */
export function RoundedPanel({ children }: Props) {
  return (
    <div className="mb-16 w-full max-w-[800px] rounded-2xl bg-white p-4 shadow-lg sm:p-8">
      {children}
    </div>
  );
}
