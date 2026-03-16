import { useState, useEffect, useMemo } from 'react';
import { fetchCountryListData } from '../services/countriesApi';
import { getFormattedQuery } from '../utils/formatQuery';
import type { FormattedCountryListData } from '../types/country';

const useCountries = () => {
  const [countryList, setCountryList] = useState<FormattedCountryListData[]>(
    [],
  );
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountryList = async () => {
      try {
        const countryListData = await fetchCountryListData();
        setCountryList(countryListData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    loadCountryList();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const formattedQuery = getFormattedQuery(query);
  const filteredCountries = useMemo(() => {
    if (!formattedQuery) return countryList;

    return countryList.filter((country) => {
      const countryLowerCase = country.name.toLowerCase();
      return countryLowerCase.includes(formattedQuery);
    });
  }, [formattedQuery, countryList]);

  return { filteredCountries, error, query, handleSearch };
};

export default useCountries;
