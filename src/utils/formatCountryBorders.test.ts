import getFormattedCountryBorders from './formatCountryBorders';
import type { CountryBorders } from '../types/country';

describe('getFormattedCountryBorders', () => {
  test('formats country borders correctly', () => {
    const mockData: CountryBorders[] = [
      {
        name: {
          common: 'Philippines',
        },
        cca3: 'PHL',
      },
      {
        name: {
          common: 'Japan',
        },
        cca3: 'JPN',
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
