import type { CountryListData, CountryDetails } from '../types/country';
import { getFormattedCountryListData } from '../utils/formatCountryData';
import { getFormattedCountryDetails } from '../utils/formatCountryDetails';

export const fetchCountryListData = async () => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3',
  );

  if (!response.ok) throw new Error('Failed to fetch from countries API.');

  const data: CountryListData[] = await response.json();
  const formattedData = getFormattedCountryListData(data);
  return formattedData;
};

export const fetchCountryDetails = async (countryCode: string) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,subregion,tld,currencies,languages,borders`,
  );

  if (!response.ok) throw new Error('Failed to fetch country details.');

  const data: CountryDetails = await response.json();
  const formattedData = getFormattedCountryDetails(data);
  return formattedData;
};
