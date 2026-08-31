import type {
  CountryListData,
  FormattedCountryListData,
} from '../types/country';

export function getFormattedCountryListData(
  data: CountryListData[],
): FormattedCountryListData[] {
  const sortedData = [...data].sort((a, b) =>
    a.names.common.localeCompare(b.names.common),
  );

  const formattedData = sortedData
    .map((country) => {
      return {
        flagImage: country.flag.url_svg,
        flagAlt: country.flag.description,
        name: country.names.common,
        population: country.population,
        region: country.region,
        capital: country.capitals?.[0]?.name ?? 'N/A',
        countryCode: country.codes.alpha_3,
      };
    })
    .filter((country) => country.countryCode !== '');

  return formattedData;
}
