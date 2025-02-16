"use client";

interface Props {
  button: {
    text: string;
    action: () => void;
  };
}

/**
 * A component to introduce the test and provide an option to reset all experience toggles.
 */
export function TestHeader({ button }: Props) {
  return (
    <div>
      <div className="mb-4 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h2>Ready to take the test?</h2>
        <a className="secondary-button" onClick={button.action}>
          {button.text}
        </a>
      </div>
      <p>
        Take your time to think through the prompts below. You should feel free
        to interpret these intelligently, but please only check those that you
        have completed either in your adult life or of your own volition. For
        example, don't check 'write a poem' just because you were forced to at
        school.
      </p>
    </div>
  );
}
