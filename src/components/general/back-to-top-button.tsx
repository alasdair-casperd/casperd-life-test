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
      className="bg-base-100 text-base-950 hover:text-accent transition-4 fixed right-6 bottom-6 z-200 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl hover:scale-[1.05]"
      onClick={scrollToTop}
    >
      <IconArrowUp className="stroke-[3px]" />
    </div>
  );
}
