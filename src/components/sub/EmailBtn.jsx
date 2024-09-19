import React from "react";

const EmailBtn = () => {
  return (
    <button class="relative flex items-center mt-3 w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
      <button class="pl-1 pr-1.5 h-5 ">
        <svg
          class="text-zinc-400 h-2.5 w-2.5"
          fill="currentColor"
          viewBox="0 0 8 13"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0C0.671631 0 0 0.671539 0 1.5C0 2.32846 0.671631 3 1.5 3C2.32837 3 3 2.32846 3 1.5C3 0.671539 2.32837 0 1.5 0Z"></path>
          <path d="M6.5 0C5.67163 0 5 0.671539 5 1.5C5 2.32846 5.67163 3 6.5 3C7.32837 3 8 2.32846 8 1.5C8 0.671539 7.32837 0 6.5 0Z"></path>
          <path d="M1.5 5C0.671631 5 0 5.67154 0 6.5C0 7.32846 0.671631 8 1.5 8C2.32837 8 3 7.32846 3 6.5C3 5.67154 2.32837 5 1.5 5Z"></path>
          <path d="M6.5 5C5.67163 5 5 5.67154 5 6.5C5 7.32846 5.67163 8 6.5 8C7.32837 8 8 7.32846 8 6.5C8 5.67154 7.32837 5 6.5 5Z"></path>
          <path d="M1.5 10C0.671631 10 0 10.6715 0 11.5C0 12.3285 0.671631 13 1.5 13C2.32837 13 3 12.3285 3 11.5C3 10.6715 2.32837 10 1.5 10Z"></path>
          <path d="M6.5 10C5.67163 10 5 10.6715 5 11.5C5 12.3285 5.67163 13 6.5 13C7.32837 13 8 12.3285 8 11.5C8 10.6715 7.32837 10 6.5 10Z"></path>
        </svg>
      </button>
      <button class="text-xs px-1.5  w-full focus:outline-none py-2">
        Add Email
      </button>
      <button class=" mr-2">
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
  );
};

export default EmailBtn;
