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
    ]);
  }),
];
