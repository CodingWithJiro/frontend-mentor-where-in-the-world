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
  const requests = [0, 100, 200].map((offset) =>
    fetch(
      `https://api.restcountries.com/countries/v5?response_fields=flag.url_svg,flag.description,names.common,codes.alpha_3,population,region,capitals&limit=100&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    ),
  );

  const responses = await Promise.all(requests);

  const isFailedResponse = responses.some((response) => !response.ok);
  if (isFailedResponse) {
    throw new Error('Failed to fetch from countries API.');
  }

  const results = await Promise.all(
    responses.map((response) => response.json()),
  );

  const countryListData: CountryListData[] = results.flatMap(
    (result) => result.data.objects,
  );
  const formattedCountryListData = getFormattedCountryListData(countryListData);
  return formattedCountryListData;
};

export const fetchCountryDetails = async (countryCode: string) => {
  const responseDetails = await fetch(
    `https://api.restcountries.com/countries/v5?codes.alpha_3=${countryCode}&response_fields=names,subregion,tlds,currencies,languages,borders,flag,population,region,capitals`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );

  if (!responseDetails.ok) throw new Error('Failed to fetch country details.');

  const resultDetails = await responseDetails.json();
  const details: CountryDetails = resultDetails.data.objects[0];
  const formattedDetails = getFormattedCountryDetails(details);
  const hasNoBorders = formattedDetails.borders.length === 0;

  if (hasNoBorders) {
    formattedDetails.borderNames = null;
    return formattedDetails;
  }

  const borderResponses = await Promise.all(
    formattedDetails.borders.map((borderCode) =>
      fetch(
        `https://api.restcountries.com/countries/v5/codes.alpha_3/${borderCode}?response_fields=names.common,codes.alpha_3`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      ),
    ),
  );

  const isFailedBorderResponse = borderResponses.some(
    (response) => !response.ok,
  );

  if (isFailedBorderResponse) {
    throw new Error('Failed to fetch border names.');
  }

  const borderResults = await Promise.all(
    borderResponses.map((response) => response.json()),
  );

  const borders: CountryBorders[] = borderResults.flatMap(
    (result) => result.data.objects,
  );

  const formattedBorders = getFormattedCountryBorders(borders);

  formattedDetails.borderNames = formattedBorders;
  return formattedDetails;
};
