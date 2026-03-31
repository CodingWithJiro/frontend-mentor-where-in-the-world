import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useCountries from '../hooks/useCountries';
import Home from './Home';
import type { Mock } from 'vitest';
import userEvent from '@testing-library/user-event';

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
    expect(phCard).toBeInTheDocument();

    const jpCard = await screen.findByRole('link', { name: /japan/i });
    expect(jpCard).toBeInTheDocument();

    const countryCards = await screen.findAllByRole('link');
    expect(countryCards).toHaveLength(2);
  });

  test('renders empty state when no countries are available', async () => {
    mockedUseCountries.mockReturnValue({
      ...baseMock,
      filteredCountries: [],
      isEmpty: true,
      searchInput: 'asdfghjkl',
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const emptyMessage = await screen.findByText(/no matching countries/i);
    expect(emptyMessage).toBeInTheDocument();

    const countryCards = screen.queryAllByRole('link');
    expect(countryCards).toHaveLength(0);
  });

  test('renders loading state when status is loading', async () => {
    mockedUseCountries.mockReturnValue({
      ...baseMock,
      filteredCountries: [],
      status: 'loading',
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const loadingMessage = await screen.findByText(/loading countries/i);
    expect(loadingMessage).toBeInTheDocument();

    const emptyMessage = screen.queryByText(/no matching countries/i);
    expect(emptyMessage).not.toBeInTheDocument();

    const countryCards = screen.queryAllByRole('link');
    expect(countryCards).toHaveLength(0);
  });

  test('renders error state when fetching fails', async () => {
    mockedUseCountries.mockReturnValue({
      ...baseMock,
      filteredCountries: [],
      status: 'fail',
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const errorMessage = await screen.findByText(
      /failed to fetch country data/i,
    );
    expect(errorMessage).toBeInTheDocument();

    const loadingMessage = screen.queryByText(/loading countries/i);
    expect(loadingMessage).not.toBeInTheDocument();

    const countryCards = screen.queryAllByRole('link');
    expect(countryCards).toHaveLength(0);
  });

  test('renders search and filter controls', async () => {
    mockedUseCountries.mockReturnValue({ ...baseMock, isFilterOpen: true });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const searchInput = await screen.findByRole('searchbox');
    expect(searchInput).toBeInTheDocument();

    const filterButton = await screen.findByRole('button', {
      name: /filter by region/i,
    });
    expect(filterButton).toBeInTheDocument();

    const africaButton = await screen.findByRole('button', { name: /africa/i });
    const americaButton = await screen.findByRole('button', {
      name: /america/i,
    });
    const asiaButton = await screen.findByRole('button', { name: /asia/i });
    const europeButton = await screen.findByRole('button', { name: /europe/i });
    const oceaniaButton = await screen.findByRole('button', {
      name: /oceania/i,
    });
    expect(africaButton).toBeInTheDocument();
    expect(americaButton).toBeInTheDocument();
    expect(asiaButton).toBeInTheDocument();
    expect(europeButton).toBeInTheDocument();
    expect(oceaniaButton).toBeInTheDocument();

    screen.debug();
  });

  test('calls handleFilterOpen when filter button is clicked', async () => {
    const user = userEvent.setup();
    const handleFilterOpenMock = vi.fn();

    mockedUseCountries.mockReturnValue({
      ...baseMock,
      handleFilterOpen: handleFilterOpenMock,
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    const filterButton = await screen.findByRole('button', {
      name: /filter by region/i,
    });

    await user.click(filterButton);

    expect(handleFilterOpenMock).toHaveBeenCalledTimes(1);
  });
});
