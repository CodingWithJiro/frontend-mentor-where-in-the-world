import type {
  CountryListData,
  FormattedCountryListData,
} from '../types/country';

export function getFormattedCountryListData(
  data: CountryListData[],
): FormattedCountryListData[] {
  const sortedData = [...data].sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );
  const formattedData = sortedData.map((country) => {
    return {
      flagImage: country.flags.svg,
      flagAlt: country.flags.alt ?? '',
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital?.[0] ?? 'N/A',
    };
  });
  return formattedData;
}
