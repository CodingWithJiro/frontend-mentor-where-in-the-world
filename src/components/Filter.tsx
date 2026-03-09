const Filter = () => {
  return (
    <div>
      <label htmlFor="select-region" className="sr-only">
        Filter by region.
      </label>

      <select name="region" id="select-region" value="">
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
