import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.restcountries.com/countries/v5', ({ request }) => {
    const url = new URL(request.url);

    const offset = url.searchParams.get('offset');
    const countryCode = url.searchParams.get('codes.alpha_3');

    if (countryCode === 'JPN') {
      return HttpResponse.json({
        data: {
          objects: [
            {
              names: {
                common: 'Japan',
                native: {
                  jpn: {
                    common: '日本',
                    official: '日本国',
                  },
                },
              },
              codes: {
                alpha_3: 'JPN',
              },
              capitals: [
                {
                  name: 'Tokyo',
                },
              ],
              flag: {
                url_svg: 'https://flagcdn.com/jp.svg',
                description: 'The flag of Japan',
              },
              region: 'Asia',
              subregion: 'Eastern Asia',
              borders: ['CHN', 'KOR'],
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
              population: 125_800_000,
              tlds: ['.jp'],
            },
          ],
        },
      });
    }

    if (countryCode === 'CHN,KOR') {
      return HttpResponse.json({
        data: {
          objects: [
            {
              names: {
                common: 'China',
              },
              codes: {
                alpha_3: 'CHN',
              },
            },
            {
              names: {
                common: 'South Korea',
              },
              codes: {
                alpha_3: 'KOR',
              },
            },
          ],
        },
      });
    }

    const countries = [
      {
        names: {
          common: 'Philippines',
        },
        codes: {
          alpha_3: 'PHL',
        },
        capitals: [
          {
            name: 'Manila',
          },
        ],
        flag: {
          url_svg: 'https://ph-flag-image.com/',
          description: 'Philippine alt description.',
        },
        population: 150_000_000,
        region: 'Asia',
      },
      {
        names: {
          common: 'Japan',
        },
        codes: {
          alpha_3: 'JPN',
        },
        capitals: [
          {
            name: 'Tokyo',
          },
        ],
        flag: {
          url_svg: 'https://jp-flag-image.com/',
          description: 'Japan alt description.',
        },
        population: 150_000_000,
        region: 'Asia',
      },
      {
        names: {
          common: 'Germany',
        },
        codes: {
          alpha_3: 'DEU',
        },
        capitals: [
          {
            name: 'Berlin',
          },
        ],
        flag: {
          url_svg: 'https://germany-flag-image.com/',
          description: 'Germany alt description.',
        },
        population: 150_000_000,
        region: 'Europe',
      },
    ];

    if (offset === '0') {
      return HttpResponse.json({
        data: {
          objects: countries,
          meta: {
            total: 3,
            count: 3,
            limit: 100,
            offset: 0,
            more: false,
          },
        },
      });
    }

    return HttpResponse.json({
      data: {
        objects: [],
        meta: {
          total: 3,
          count: 0,
          limit: 100,
          offset: Number(offset ?? 0),
          more: false,
        },
      },
    });
  }),
];
