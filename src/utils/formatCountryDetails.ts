import type { CountryDetails, FormattedCountryDetails } from '../types/country';

export function getFormattedCountryDetails(
  data: CountryDetails[],
): FormattedCountryDetails {
  const country = data[0];

  return {
    name: country.name.common,
    nativeName:
      Object.values(country.name.nativeName)[0]?.common ?? country.name.common,
    subregion: country.subregion,
    tld: country.tld,
    currencies: Object.values(country.currencies).map((c) => c.name),
    languages: Object.values(country.languages),
    borders: country.borders ?? [],
  };
}
