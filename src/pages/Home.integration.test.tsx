import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('Home Page Integration Tests', () => {
  test('shows loading state, then renders countries', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading countries/i);
    expect(loadingMessage).toBeInTheDocument();

    await waitFor(() => {
      const phCard = screen.getByRole('link', { name: /philippines/i });
      const jpCard = screen.getByRole('link', { name: /japan/i });
      expect(phCard).toBeInTheDocument();
      expect(jpCard).toBeInTheDocument();

      const loadingMessage = screen.queryByText(/loading countries/i);
      expect(loadingMessage).not.toBeInTheDocument();
    });
  });

  test('filters and displays countries on user search', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const searchInput = await screen.findByRole('searchbox');
    await user.type(searchInput, 'phi');

    const phCard = await screen.findByRole('link', { name: /philippines/i });
    expect(phCard).toBeInTheDocument();

    await waitFor(() => {
      const jpCard = screen.queryByRole('link', { name: /japan/i });
      expect(jpCard).not.toBeInTheDocument();
    });
  });

  test('shows error message when API fails', async () => {
    server.use(
      http.get('https://api.restcountries.com/countries/v5', () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading countries/i);
    expect(loadingMessage).toBeInTheDocument();

    const errorMessage = await screen.findByText(
      /failed to fetch country data/i,
    );
    expect(errorMessage).toBeInTheDocument();

    const phCard = screen.queryByRole('link', { name: /philippines/i });
    const jpCard = screen.queryByRole('link', { name: /japan/i });
    expect(phCard).not.toBeInTheDocument();
    expect(jpCard).not.toBeInTheDocument();

    await waitFor(() => {
      const loadingMessage = screen.queryByText(/loading countries/i);
      expect(loadingMessage).not.toBeInTheDocument();
    });
  });

  test('filters and displays countries on user region select', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const filterButton = await screen.findByRole('button', {
      name: /filter by region/i,
    });
    await user.click(filterButton);

    const asiaButton = await screen.findByRole('button', { name: /asia/i });
    await user.click(asiaButton);

    const phCard = await screen.findByRole('link', { name: /philippines/i });
    const jpCard = await screen.findByRole('link', { name: /japan/i });
    expect(phCard).toBeInTheDocument();
    expect(jpCard).toBeInTheDocument();

    const deuCard = screen.queryByRole('link', { name: /germany/i });
    expect(deuCard).not.toBeInTheDocument();
  });

  test('filters countries by region and search', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const searchInput = await screen.findByRole('searchbox');
    await user.type(searchInput, 'phi');

    await screen.findByRole('link', { name: /philippines/i });

    const filterButton = await screen.findByRole('button', {
      name: /filter by region/i,
    });
    await user.click(filterButton);

    const asiaButton = await screen.findByRole('button', {
      name: /asia/i,
    });
    await user.click(asiaButton);

    const phCard = await screen.findByRole('link', {
      name: /philippines/i,
    });
    expect(phCard).toBeInTheDocument();

    const jpCard = screen.queryByRole('link', {
      name: /japan/i,
    });
    const deuCard = screen.queryByRole('link', {
      name: /germany/i,
    });

    expect(jpCard).not.toBeInTheDocument();
    expect(deuCard).not.toBeInTheDocument();
  });
});
