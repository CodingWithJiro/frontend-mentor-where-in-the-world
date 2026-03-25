import type { CountryBorders, FormattedCountryBorders } from '../types/country';

const getFormattedCountryBorders = (
  data: CountryBorders[],
): FormattedCountryBorders[] => {
  return data.map((d) => ({
    name: d.name.common,
    cca3: d.cca3,
  }));
};

export default getFormattedCountryBorders;
