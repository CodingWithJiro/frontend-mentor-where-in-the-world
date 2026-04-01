import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import userEvent from '@testing-library/user-event';

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
});
