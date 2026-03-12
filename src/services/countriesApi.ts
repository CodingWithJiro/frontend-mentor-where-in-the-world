import type { CountryListData } from '../types/country';
import { getFormattedCountryListData } from '../utils/formatCountryData';

export const fetchCountryListData = async () => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags',
  );

  if (!response.ok) throw new Error('Failed to fetch from countries API.');

  const data: CountryListData[] = await response.json();
  const formattedData = getFormattedCountryListData(data);
  return formattedData;
};
