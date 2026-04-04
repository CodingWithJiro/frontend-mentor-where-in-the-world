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
      http.get('https://restcountries.com/v3.1/alpha/:code', () => {
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
          borders: [],
          flags: {
            svg: 'https://flagcdn.com/jp.svg',
            alt: 'The flag of Japan',
          },
          population: 125_800_000,
          region: 'Asia',
          capital: ['Tokyo'],
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
      http.get('https://restcountries.com/v3.1/alpha', () => {
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
