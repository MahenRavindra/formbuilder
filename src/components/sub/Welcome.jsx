import React from "react";

const Welcome = () => {
  return (
    <>
      <button class="relative flex items-center mt-3 w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
        <button class="pl-1 pr-1.5 h-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="text-zinc-400 h-2.5 w-2.5">
            <path
              fill-rule="evenodd"
              d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <button class="text-xs px-1.5  w-full focus:outline-none py-2">
          Welcome screen
        </button>
        <button class=" hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="h-3 w-3 text-zinc-400 group-hover:text-zinc-900">
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
          </svg>
        </button>
      </button>
    </>
  );
};

export default Welcome;
