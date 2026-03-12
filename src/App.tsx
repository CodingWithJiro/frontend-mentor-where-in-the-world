import { useState, useEffect } from 'react';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Main from './components/Main';
import FilterControls from './components/FilterControls';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,currencies',
        );
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        if (err instanceof Error) {
          throw Error(
            `Unable to fetch data from REST countries API: ${err.message}`,
          );
        } else {
          throw Error(`An unknown error occured:`);
        }
      }
    };
    fetchAllCountries();
  }, []);

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
          <CountryList countries={countries} />
        </Countries>
      </Main>
    </>
  );
};

export default App;
