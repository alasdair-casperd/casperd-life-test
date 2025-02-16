"use client";

import { IconArrowUp } from "@tabler/icons-react";

/**
 * A floating button that scrolls the user back to the top of the page when clicked.
 */
export function BackToTopButton() {
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="z-200 fixed cursor-pointer rounded-xl bg-base-100 flex items-center justify-center text-base-500 hover:text-accent right-6 bottom-6 w-12 h-12 hover:scale-[1.05] transition-4"
      onClick={scrollToTop}
    >
      <IconArrowUp className="stroke-[3px]" />
    </div>
  );
}
