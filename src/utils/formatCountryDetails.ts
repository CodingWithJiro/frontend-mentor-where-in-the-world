import type { CountryDetails, FormattedCountryDetails } from '../types/country';

export function getFormattedCountryDetails(
  data: CountryDetails,
): FormattedCountryDetails {
  const nativeNames = Object.values(data.names.native);

  return {
    name: data.names.common,
    nativeName:
      nativeNames.length === 0 ? data.names.common : nativeNames[0].common,
    subregion: data.subregion,
    tld: data.tlds,
    currencies: data.currencies.map((currency) => currency.name),
    languages: data.languages.map((language) => language.name),
    borders: data.borders,
    flagImage: data.flag.url_svg,
    flagAlt: data.flag.description,
    population: data.population,
    region: data.region,
    capital: data.capitals.map((capital) => capital.name).join(', '),
    borderNames: null,
  };
}
