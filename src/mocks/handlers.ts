import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://restcountries.com/v3.1/all', () => {
    return HttpResponse.json([
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
    ]);
  }),
  http.get('https://restcountries.com/v3.1/alpha/:code', () => {
    return HttpResponse.json({
      name: { common: 'Japan', nativeName: { jpn: { common: '日本' } } },
      subregion: 'Eastern Asia',
      tld: ['.jp', '.みんな'],
      currencies: {
        JPY: { name: 'Japanese yen' },
        USD: { name: 'US Dollar' },
      },
      languages: {
        jpn: 'Japanese',
        eng: 'English',
      },
      borders: ['CHN', 'KOR'],
      flags: {
        svg: 'https://flagcdn.com/jp.svg',
        alt: 'The flag of Japan',
      },
      population: 125_800_000,
      region: 'Asia',
      capital: ['Tokyo'],
    });
  }),
  http.get('https://restcountries.com/v3.1/alpha', ({ request }) => {
    const url = new URL(request.url);
    const codes = url.searchParams.get('codes');

    if (codes === 'CHN,KOR') {
      return HttpResponse.json([
        { name: { common: 'China' }, cca3: 'CHN' },
        { name: { common: 'South Korea' }, cca3: 'KOR' },
      ]);
    }

    return HttpResponse.json([]);
  }),
];
