import React from "react";

const FlexOneSteps = () => {
  return (
    <div className="mt-10 mb-1 mx-5">
      <div class="flex items-center  gap-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          class="w-3 h-3 text-zinc-500">
          <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 9.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25ZM2.75 12.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"></path>
        </svg>
        <h4 class="text-sm font-semibold">Steps</h4>
      </div>
      <p class="text-xs text-zinc-500 mb-3.5 mt-2">
        The steps users will take to complete the form
      </p>
    </div>
  );
};

export default FlexOneSteps;
