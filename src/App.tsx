import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Main from './components/Main';
import FilterControls from './components/FilterControls';
import Search from './components/Search';
import Filter from './components/Filter';

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
      </Main>
    </>
  );
};

export default App;
