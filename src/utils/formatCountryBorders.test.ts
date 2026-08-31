import getFormattedCountryBorders from './formatCountryBorders';

import type { CountryBorders } from '../types/country';

describe('getFormattedCountryBorders', () => {
  test('formats country borders correctly', () => {
    const mockData: CountryBorders[] = [
      {
        names: {
          common: 'Philippines',
        },
        codes: {
          alpha_3: 'PHL',
        },
      },
      {
        names: {
          common: 'Japan',
        },
        codes: {
          alpha_3: 'JPN',
        },
      },
    ];

    const result = getFormattedCountryBorders(mockData);

    const expectedResult = [
      { name: 'Philippines', cca3: 'PHL' },
      { name: 'Japan', cca3: 'JPN' },
    ];

    expect(result).toEqual(expectedResult);
  });
});
