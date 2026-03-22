import useCountries from '../hooks/useCountries';
import FilterControls from '../components/FilterControls';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Countries from '../components/Countries';
import CountryList from '../components/CountryList';

const Home = () => {
  const {
    filteredCountries,
    isEmpty,
    query,
    handleSearch,
    isFilterOpen,
    handleFilterOpen,
    region,
    handleSelectRegion,
    status,
  } = useCountries();

  return (
    <>
      <FilterControls>
        <Search query={query} onSearch={handleSearch} />
        <Filter
          isFilterOpen={isFilterOpen}
          onFilterOpen={handleFilterOpen}
          region={region}
          onSelectRegion={handleSelectRegion}
        />
      </FilterControls>
      <Countries status={status} isEmpty={isEmpty}>
        <CountryList filteredCountries={filteredCountries} />
      </Countries>
    </>
  );
};

export default Home;
