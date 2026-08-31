import type { CountryBorders, FormattedCountryBorders } from '../types/country';

const getFormattedCountryBorders = (
  data: CountryBorders[],
): FormattedCountryBorders[] => {
  return data.map((d) => ({
    name: d.names.common,
    cca3: d.codes.alpha_3,
  }));
};

export default getFormattedCountryBorders;
