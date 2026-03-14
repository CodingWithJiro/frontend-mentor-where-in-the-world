import type { CountryDetails, FormattedCountryDetails } from '../types/country';

export function getFormattedCountryDetails(
  data: CountryDetails,
): FormattedCountryDetails {
  const nativeNames = Object.values(data.name.nativeName);

  return {
    name: data.name.common,
    nativeName:
      nativeNames.length === 0 ? data.name.common : nativeNames[0].common,
    subregion: data.subregion,
    tld: data.tld,
    currencies: Object.values(data.currencies).map((c) => c.name),
    languages: Object.values(data.languages),
    borders: data.borders,
  };
}
