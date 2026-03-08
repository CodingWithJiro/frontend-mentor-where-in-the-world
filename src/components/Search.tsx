const Search = () => {
  return (
    <div className="relative rounded-sm bg-(--COLOR-BG-CARD-PRIMARY) py-3 font-(family-name:--FF) shadow-(--SHADOW-CARD-PRIMARY) focus-within:outline focus-within:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-[color,background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out">
      <label htmlFor="search-input" className="sr-only">
        Search for a country
      </label>

      <svg
        className="absolute top-[50%] left-7.25 translate-y-[-50%] text-(--COLOR-TEXT-TERTIARY)"
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>

      <input
        className="text(--COLOR-TEXT-PRIMARY) w-full pr-6 pl-18.5 text-[0.765rem] font-semibold placeholder:text-[0.765rem] placeholder:font-light focus-visible:outline-none"
        id="search-input"
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
