import { getFormattedCountryListData } from './formatCountryData';
import type { CountryListData } from '../types/country';

const mockData: CountryListData[] = [
  {
    flag: {
      url_svg: 'https://ph-flag-image.com/',
      description: 'Philippine alt description.',
    },
    names: {
      common: 'Philippines',
    },
    population: 150_000_000,
    region: 'Asia',
    capitals: [
      {
        name: 'Manila',
      },
    ],
    codes: {
      alpha_3: 'PHL',
    },
  },
  {
    flag: {
      url_svg: 'https://jp-flag-image.com/',
      description: 'Japan alt description.',
    },
    names: {
      common: 'Japan',
    },
    population: 150_000_000,
    region: 'Asia',
    capitals: [
      {
        name: 'Tokyo',
      },
    ],
    codes: {
      alpha_3: 'JPN',
    },
  },
  {
    flag: {
      url_svg: 'https://germany-flag-image.com/',
      description: 'Germany alt description.',
    },
    names: {
      common: 'Germany',
    },
    population: 150_000_000,
    region: 'Europe',
    capitals: [
      {
        name: 'Berlin',
      },
    ],
    codes: {
      alpha_3: 'DEU',
    },
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
        capital: 'Tokyo',
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
        flag: {
          url_svg: 'https://ph-flag-image.com/',
          description: 'Philippine alt description.',
        },
        names: {
          common: 'Philippines',
        },
        population: 150_000_000,
        region: 'Asia',
        capitals: [],
        codes: {
          alpha_3: 'PHL',
        },
      },
    ];

    const result = getFormattedCountryListData(missingCapitalData)[0].capital;

    expect(result).toBe('N/A');
  });

  test('returns empty string for missing alt description', () => {
    const missingAltData: CountryListData[] = [
      {
        flag: {
          url_svg: 'https://ph-flag-image.com/',
          description: '',
        },
        names: {
          common: 'Philippines',
        },
        population: 150_000_000,
        region: 'Asia',
        capitals: [
          {
            name: 'Manila',
          },
        ],
        codes: {
          alpha_3: 'PHL',
        },
      },
    ];

    const result = getFormattedCountryListData(missingAltData)[0].flagAlt;

    expect(result).toBe('');
  });
});
