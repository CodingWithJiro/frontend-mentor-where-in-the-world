import type {
  CountryListData,
  CountryDetails,
  CountryBorders,
} from '../types/country';
import getFormattedCountryBorders from '../utils/formatCountryBorders';
import { getFormattedCountryListData } from '../utils/formatCountryData';
import { getFormattedCountryDetails } from '../utils/formatCountryDetails';
const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

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
  const responseDetails = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,subregion,tld,currencies,languages,borders,flags,population,region,capital`,
  );

  if (!responseDetails.ok) throw new Error('Failed to fetch country details.');

  const details: CountryDetails = await responseDetails.json();
  const formattedDetails = getFormattedCountryDetails(details);
  const hasNoBorders = formattedDetails.borders.length === 0;

  if (hasNoBorders) {
    formattedDetails.borderNames = null;
    return formattedDetails;
  }

  const responseBorders = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${formattedDetails.borders.join(',')}&fields=name,cca3`,
  );

  if (!responseBorders.ok) throw new Error('Failed to fetch border names.');

  const borders: CountryBorders[] = await responseBorders.json();

  const formattedBorders = getFormattedCountryBorders(borders);
  formattedDetails.borderNames = formattedBorders;

  return formattedDetails;
};
