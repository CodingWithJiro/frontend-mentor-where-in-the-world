import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Main from './components/Main';
import FilterControls from './components/FilterControls';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import CountryList from './components/CountryList';
import useCountries from './hooks/useCountries';

const App = () => {
  const { filteredCountries, query, handleSearch } = useCountries();
  return (
    <>
      <SkipLink />
      <Header />
      <Main>
        <FilterControls>
          <Search query={query} onSearch={handleSearch} />
          <Filter />
        </FilterControls>
        <Countries>
          <CountryList filteredCountries={filteredCountries} />
        </Countries>
      </Main>
    </>
  );
};

export default App;
