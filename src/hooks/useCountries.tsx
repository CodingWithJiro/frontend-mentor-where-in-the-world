import { useState, useEffect } from 'react';
import { fetchCountryListData } from '../services/countriesApi';
import type { FormattedCountryListData } from '../types/country';

const useCountries = () => {
  const [countryList, setCountryList] = useState<FormattedCountryListData[]>(
    [],
  );
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

  return { countryList, error };
};

export default useCountries;
