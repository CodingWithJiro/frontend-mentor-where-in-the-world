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
});
