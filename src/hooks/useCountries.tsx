import { useState, useEffect, useMemo } from 'react';
import { fetchCountryListData } from '../services/countriesApi';
import { getFormattedQuery } from '../utils/formatQuery';
import type { FormattedCountryListData } from '../types/country';

const useCountries = () => {
  const [countryList, setCountryList] = useState<FormattedCountryListData[]>(
    [],
  );
  const [query, setQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
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
  const handleFilterOpen = () => {
    setIsFilterOpen((prevIsFilterOpen: boolean) => !prevIsFilterOpen);
  };
  const handleSelectRegion = (selectedRegion: string) => {
    setRegion((prevRegion) =>
      prevRegion === selectedRegion ? '' : selectedRegion,
    );
    setIsFilterOpen((prevIsFilterOpen: boolean) => !prevIsFilterOpen);
  };

  const formattedQuery = getFormattedQuery(query);
  const filteredCountries = useMemo(() => {
    if (!formattedQuery && !region) return countryList;

    return countryList
      .filter((country) => {
        const hasSameRegion = !region ? true : country.region.includes(region);
        return hasSameRegion;
      })
      .filter((country) => {
        const countryLowerCase = country.name.toLowerCase();
        const hasMatchingQuery = countryLowerCase.includes(formattedQuery);
        return hasMatchingQuery;
      });
  }, [formattedQuery, countryList, region]);
  const isEmpty = filteredCountries.length === 0;

  return {
    filteredCountries,
    isEmpty,
    error,
    query,
    handleSearch,
    isFilterOpen,
    handleFilterOpen,
    region,
    handleSelectRegion,
  };
};

export default useCountries;
