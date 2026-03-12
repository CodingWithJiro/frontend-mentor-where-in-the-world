import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Main from './components/Main';
import FilterControls from './components/FilterControls';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import CountryList from './components/CountryList';

const App = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <Main>
        <FilterControls>
          <Search />
          <Filter />
        </FilterControls>
        <Countries>
          <CountryList />
        </Countries>
      </Main>
    </>
  );
};

export default App;
