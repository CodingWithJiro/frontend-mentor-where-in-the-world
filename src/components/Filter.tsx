const Filter = () => {
  return (
    <div>
      <button type="button" aria-haspopup="listbox" aria-expanded="false">
        <span>Filter by Region</span>
      </button>

      <ul role="listbox">
        <li role="option">Africa</li>
        <li role="option">America</li>
        <li role="option">Asia</li>
        <li role="option">Europe</li>
        <li role="option">Oceania</li>
      </ul>
    </div>
  );
};

export default Filter;
