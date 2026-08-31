import { getFormattedCountryDetails } from './formatCountryDetails';
import type { CountryDetails } from '../types/country';

const mockData: CountryDetails = {
  names: {
    common: 'Japan',
    native: {
      jpn: {
        common: '日本',
        official: '日本国',
      },
    },
  },
  subregion: 'Eastern Asia',
  tlds: ['.jp'],
  currencies: [
    {
      code: 'JPY',
      name: 'Japanese yen',
      symbol: '¥',
    },
  ],
  languages: [
    {
      bcp47: 'ja',
      iso639_1: 'ja',
      iso639_2b: 'jpn',
      iso639_2t: 'jpn',
      iso639_3: 'jpn',
      name: 'Japanese',
      native_name: '日本語',
    },
  ],
  borders: ['CHN', 'KOR'],
  flag: {
    url_svg: 'https://flagcdn.com/jp.svg',
    description: 'The flag of Japan',
  },
  population: 125_800_000,
  region: 'Asia',
  capitals: [
    {
      name: 'Tokyo',
    },
  ],
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
      ...mockData,
      names: {
        ...mockData.names,
        native: {},
      },
    };

    const result = getFormattedCountryDetails(missingNativeNameData);
    const { name, nativeName } = result;

    expect(nativeName).toEqual(name);
  });

  test('returns empty string when flag description is missing', () => {
    const missingFlagDescriptionData: CountryDetails = {
      ...mockData,
      flag: {
        ...mockData.flag,
        description: '',
      },
    };

    const result = getFormattedCountryDetails(missingFlagDescriptionData);

    expect(result.flagAlt).toEqual('');
  });
});
