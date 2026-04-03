import { getFormattedCountryDetails } from './formatCountryDetails';
import type { CountryDetails } from '../types/country';

const mockData: CountryDetails = {
  name: {
    common: 'Japan',
    nativeName: {
      jpn: {
        common: '日本',
      },
    },
  },
  subregion: 'Eastern Asia',
  tld: ['.jp'],
  currencies: {
    JPY: {
      name: 'Japanese yen',
    },
  },
  languages: {
    jpn: 'Japanese',
  },
  borders: ['CHN', 'KOR'],
  flags: {
    svg: 'https://flagcdn.com/jp.svg',
    alt: 'The flag of Japan',
  },
  population: 125_800_000,
  region: 'Asia',
  capital: ['Tokyo'],
};

describe('getFormattedCountryDetails', () => {
  test('formats country details correctly', () => {
    const result = getFormattedCountryDetails(mockData);
    const expectedResult = {
      name: 'Japan',
      nativeName: '日本',
      subregion: 'Eastern Asia',
      tld: ['.jp'],
      currencies: ['Japanese yen'],
      languages: ['Japanese'],
      borders: ['CHN', 'KOR'],
      flagImage: 'https://flagcdn.com/jp.svg',
      flagAlt: 'The flag of Japan',
      population: 125_800_000,
      region: 'Asia',
      capital: 'Tokyo',
      borderNames: null,
    };
    expect(result).toEqual(expectedResult);
  });

  test('returns country name when native name is missing', () => {
    const missingNativeNameData: CountryDetails = {
      name: {
        common: 'Japan',
        nativeName: {},
      },
      subregion: 'Eastern Asia',
      tld: ['.jp'],
      currencies: {
        JPY: {
          name: 'Japanese yen',
        },
      },
      languages: {
        jpn: 'Japanese',
      },
      borders: ['CHN', 'KOR'],
      flags: {
        svg: 'https://flagcdn.com/jp.svg',
        alt: 'The flag of Japan',
      },
      population: 125_800_000,
      region: 'Asia',
      capital: ['Tokyo'],
    };
    const result = getFormattedCountryDetails(missingNativeNameData);
    const { name, nativeName } = result;
    expect(nativeName).toEqual(name);
  });
});
