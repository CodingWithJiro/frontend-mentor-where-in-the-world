import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCountryListData } from '../services/countriesApi';
import { getFormattedQuery } from '../utils/formatQuery';
import type { FormattedCountryListData } from '../types/country';
import type { Status } from '../types/country';

const useCountries = () => {
  const [countryList, setCountryList] = useState<FormattedCountryListData[]>(
    [],
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('loading');
  const query = searchParams.get('search') || '';
  const region = searchParams.get('region') || '';
  const [searchInput, setSearchInput] = useState<string>(query);

  useEffect(() => {
    const loadCountryList = async () => {
      setStatus('loading');
      try {
        const countryListData = await fetchCountryListData();
        setCountryList(countryListData);
        setStatus('success');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setStatus('fail');
      }
    };

    loadCountryList();
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);

        if (searchInput) {
          newParams.set('search', searchInput);
        } else {
          newParams.delete('search');
        }

        return newParams;
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchInput, setSearchParams]);
  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };
  const handleFilterOpen = () => {
    setIsFilterOpen((prevIsFilterOpen: boolean) => !prevIsFilterOpen);
  };
  const handleSelectRegion = (selectedRegion: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      const currentRegion = newParams.get('region');

      if (currentRegion === selectedRegion) {
        newParams.delete('region');
      } else {
        newParams.set('region', selectedRegion);
      }

      return newParams;
    });
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
    searchInput,
    handleSearch,
    isFilterOpen,
    handleFilterOpen,
    region,
    handleSelectRegion,
    status,
  };
};

export default useCountries;
