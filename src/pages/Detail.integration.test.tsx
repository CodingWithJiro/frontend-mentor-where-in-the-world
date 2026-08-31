import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('Detail Page Integration Tests', () => {
  test('loads and renders country details successfully', async () => {
    render(
      <MemoryRouter initialEntries={['/country/JPN']}>
        <Routes>
          <Route path="/country/:code" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading country details/i);
    expect(loadingMessage).toBeInTheDocument();

    const flagImage = await screen.findByRole('img', {
      name: /the flag of japan/i,
    });
    expect(flagImage).toBeInTheDocument();

    const countryName = await screen.findByRole('heading', { name: /japan/i });
    expect(countryName).toBeInTheDocument();

    const region = await screen.findByText(/^asia$/i);
    expect(region).toBeInTheDocument();

    const subRegion = await screen.findByText(/^eastern asia$/i);
    expect(subRegion).toBeInTheDocument();

    const capital = await screen.findByText(/tokyo/i);
    expect(capital).toBeInTheDocument();
  });

  test('shows error when country detail fetching fails', async () => {
    server.use(
      http.get('https://api.restcountries.com/countries/v5', () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(
      <MemoryRouter initialEntries={['/country/JPN']}>
        <Routes>
          <Route path="/country/:code" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading country details/i);
    expect(loadingMessage).toBeInTheDocument();

    const errorMessage = await screen.findByText(
      /failed to fetch country details/i,
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders country with no borders', async () => {
    server.use(
      http.get('https://api.restcountries.com/countries/v5', ({ request }) => {
        const url = new URL(request.url);
        const countryCode = url.searchParams.get('codes.alpha_3');

        if (countryCode !== 'JPN') {
          return new HttpResponse(null, { status: 404 });
        }

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
                subregion: 'Eastern Asia',
                tlds: ['.jp', '.みんな'],
                currencies: [
                  {
                    code: 'JPY',
                    name: 'Japanese yen',
                    symbol: '¥',
                  },
                  {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
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
                  {
                    bcp47: 'en',
                    iso639_1: 'en',
                    iso639_2b: 'eng',
                    iso639_2t: 'eng',
                    iso639_3: 'eng',
                    name: 'English',
                    native_name: 'English',
                  },
                ],
                borders: [],
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
              },
            ],
          },
        });
      }),
    );

    render(
      <MemoryRouter initialEntries={['/country/JPN']}>
        <Routes>
          <Route path="/country/:code" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading country details/i);
    expect(loadingMessage).toBeInTheDocument();

    const flagImage = await screen.findByRole('img', {
      name: /the flag of japan/i,
    });
    expect(flagImage).toBeInTheDocument();

    const countryName = await screen.findByRole('heading', { name: /japan/i });
    expect(countryName).toBeInTheDocument();

    const noBorderMessage = await screen.findByText(/no border countries/i);
    expect(noBorderMessage).toBeInTheDocument();
  });

  test('shows error when country borders fetching fails', async () => {
    server.use(
      http.get('https://api.restcountries.com/countries/v5', () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(
      <MemoryRouter initialEntries={['/country/JPN']}>
        <Routes>
          <Route path="/country/:code" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading country details/i);
    expect(loadingMessage).toBeInTheDocument();

    const errorMessage = await screen.findByText(
      /failed to fetch country details/i,
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
