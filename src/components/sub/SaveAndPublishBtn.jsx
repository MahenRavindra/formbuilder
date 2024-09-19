import React from "react";

const SaveAndPublishBtn = () => {
  return (
    <>
      <div className="flex items-center mx-[10px] mt-[240px] justify-center  gap-[5px]">
        <button class="whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50    disabled:bg-zinc-700 bg-black hover:bg-zinc-700 transition duration-150 rounded-lg py-2.5 px-2 w-full text-white text-xs font-medium flex items-center justify-center h-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="w-3 h-3 mr-2">
            <path d="M1 12.5A4.5 4.5 0 0 0 5.5 17H15a4 4 0 0 0 1.866-7.539 3.504 3.504 0 0 0-4.504-4.272A4.5 4.5 0 0 0 4.06 8.235 4.502 4.502 0 0 0 1 12.5Z"></path>
          </svg>
          Save &amp; Publish
        </button>
        <button class="flex items-center justify-center w-full p-3 text-xs font-medium rounded-lg hover:bg-rose-100 text-rose-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="w-3 h-3 mr-1">
            <path
              fill-rule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clip-rule="evenodd"></path>
          </svg>
          Delete
        </button>
      </div>
    </>
  );
};

export default SaveAndPublishBtn;
