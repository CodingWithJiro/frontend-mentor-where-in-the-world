const Filter = () => {
  return (
    <div className="relative max-w-50 rounded-sm font-(family-name:--FF) font-light shadow-(--SHADOW-CARD-PRIMARY) motion-safe:transition-shadow motion-safe:duration-150 motion-safe:ease-in-out md:flex-1">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="false"
        className="flex w-full cursor-pointer items-center justify-between rounded-sm bg-(--COLOR-BG-CARD-PRIMARY) py-3.75 pr-4 pl-6 select-none hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) focus-visible:outline focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out md:py-4.25"
      >
        <span className="text-[clamp(0.75rem,0.375rem+0.78125vw,0.875rem)]">
          Filter by Region
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 -960 960 960"
          width="16px"
          fill="currentColor"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </button>

      <ul
        role="listbox"
        className="absolute top-[calc(4px+100%)] left-0 z-10 w-full rounded-sm bg-(--COLOR-BG-CARD-PRIMARY) pt-3.25 pb-3 text-[clamp(0.75rem,0.375rem+0.78125vw,0.875rem)] shadow-(--SHADOW-CARD-PRIMARY) select-none motion-safe:transition-[color,background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out [&_button]:w-full [&_button]:cursor-pointer [&_button]:rounded-sm [&_button]:px-6 [&_button]:py-0.75 [&_button]:text-left [&_button]:hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) [&_button]:focus-visible:outline-1 [&_button]:focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) md:[&_button]:py-[0.2125rem]"
      >
        <li role="option">
          <button type="button">Africa</button>
        </li>

        <li role="option">
          <button type="button">America</button>
        </li>

        <li role="option">
          <button type="button">Asia</button>
        </li>

        <li role="option">
          <button type="button">Europe</button>
        </li>

        <li role="option">
          <button type="button">Oceania</button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
