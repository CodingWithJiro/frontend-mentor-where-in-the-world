import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Main from './components/Main';
import FilterControls from './components/FilterControls';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <Main>
        <FilterControls>
          <Search />
        </FilterControls>
      </Main>
    </>
  );
};

export default App;
