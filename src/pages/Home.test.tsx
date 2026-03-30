import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useCountries from '../hooks/useCountries';
import Home from './Home';
import type { Mock } from 'vitest';

const mockedUseCountries = useCountries as Mock;
const baseMock = {
  filteredCountries: [],
  isEmpty: false,
  error: '',
  searchInput: '',
  handleSearch: vi.fn(),
  isFilterOpen: false,
  handleFilterOpen: vi.fn(),
  region: '',
  handleSelectRegion: vi.fn(),
  status: 'success',
};

vi.mock('../hooks/useCountries');

describe('Home Page Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders countries on initial load', async () => {
    mockedUseCountries.mockReturnValue({
      ...baseMock,
      filteredCountries: [
        {
          flagImage: '',
          flagAlt: '',
          name: 'Philippines',
          population: 150_000_000,
          region: 'Asia',
          capital: 'Manila',
          countryCode: 'PHL',
        },
        {
          flagImage: '',
          flagAlt: '',
          name: 'Japan',
          population: 150_000_000,
          region: 'Asia',
          capital: 'Tokyo',
          countryCode: 'JPN',
        },
      ],
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const phCard = await screen.findByRole('link', { name: /philippines/i });
    const jpCard = await screen.findByRole('link', { name: /japan/i });
    expect(phCard).toBeInTheDocument();
    expect(jpCard).toBeInTheDocument();
  });
});
