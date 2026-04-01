import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

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
});
