import { getFormattedCountryListData } from './formatCountryData';
import type { CountryListData } from '../types/country';

const mockData: CountryListData[] = [
  {
    flags: {
      svg: 'https://ph-flag-image.com/',
      alt: 'Philippine alt description.',
    },
    name: {
      common: 'Philippines',
    },
    population: 150_000_000,
    region: 'Asia',
    capital: ['Manila'],
    cca3: 'PHL',
  },
  {
    flags: {
      svg: 'https://jp-flag-image.com/',
      alt: 'Japan alt description.',
    },
    name: {
      common: 'Japan',
    },
    population: 150_000_000,
    region: 'Asia',
    capital: ['Toyko'],
    cca3: 'JPN',
  },
  {
    flags: {
      svg: 'https://germany-flag-image.com/',
      alt: 'Germany alt description.',
    },
    name: {
      common: 'Germany',
    },
    population: 150_000_000,
    region: 'Europe',
    capital: ['Berlin'],
    cca3: 'DEU',
  },
];

describe('getFormattedCountryListData', () => {
  test('formats and sorts country data correctly', () => {
    const result = getFormattedCountryListData(mockData);
    const expectedResult = [
      {
        flagImage: 'https://germany-flag-image.com/',
        flagAlt: 'Germany alt description.',
        name: 'Germany',
        population: 150_000_000,
        region: 'Europe',
        capital: 'Berlin',
        countryCode: 'DEU',
      },
      {
        flagImage: 'https://jp-flag-image.com/',
        flagAlt: 'Japan alt description.',
        name: 'Japan',
        population: 150_000_000,
        region: 'Asia',
        capital: 'Toyko',
        countryCode: 'JPN',
      },
      {
        flagImage: 'https://ph-flag-image.com/',
        flagAlt: 'Philippine alt description.',
        name: 'Philippines',
        population: 150_000_000,
        region: 'Asia',
        capital: 'Manila',
        countryCode: 'PHL',
      },
    ];
    expect(result).toEqual(expectedResult);
  });

  test('returns N/A for missing capital', () => {
    const missingCapitalData: CountryListData[] = [
      {
        flags: {
          svg: 'https://ph-flag-image.com/',
          alt: 'Philippine alt description.',
        },
        name: {
          common: 'Philippines',
        },
        population: 150_000_000,
        region: 'Asia',
        capital: [],
        cca3: 'PHL',
      },
    ];
    const result = getFormattedCountryListData(missingCapitalData)[0].capital;
    expect(result).toBe('N/A');
  });
});
