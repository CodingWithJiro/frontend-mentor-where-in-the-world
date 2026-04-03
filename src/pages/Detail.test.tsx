import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useDetail from '../hooks/useDetail';
import Detail from './Detail';
import type { Mock } from 'vitest';

const mockedUseDetail = useDetail as Mock;
const baseMock = {
  country: {
    name: 'Japan',
    nativeName: '日本',
    subregion: 'Eastern Asia',
    tld: ['.jp', '.みんな'],
    currencies: ['Japanese yen', 'US Dollar'],
    languages: ['Japanese', 'English'],
    borders: ['CHN', 'KOR'],
    flagImage: 'https://flagcdn.com/jp.svg',
    flagAlt: 'The flag of Japan',
    population: 125_800_000,
    region: 'Asia',
    capital: 'Tokyo',
    borderNames: [
      {
        name: 'China',
        cca3: 'CHN',
      },
      {
        name: 'South Korea',
        cca3: 'KOR',
      },
    ],
  },
  status: 'success',
};

vi.mock('../hooks/useDetail');

describe('Detail Page Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders loading message during loading state', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock, status: 'loading' });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const loadingMessage = screen.getByText(/loading country details/i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders country details after successful fetch', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const flagImage = screen.getByRole('img', {
      name: /the flag of japan/i,
    });
    expect(flagImage).toBeInTheDocument();

    const countryName = screen.getByRole('heading', { name: /japan/i });
    expect(countryName).toBeInTheDocument();

    const region = screen.getByText(/^asia$/i);
    expect(region).toBeInTheDocument();

    const subRegion = screen.getByText(/^eastern asia$/i);
    expect(subRegion).toBeInTheDocument();

    const capital = screen.getByText(/tokyo/i);
    expect(capital).toBeInTheDocument();
  });

  test('renders country borders when available', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const chinaBorder = screen.getByRole('link', { name: /china/i });
    expect(chinaBorder).toBeInTheDocument();

    const southKoreaBorder = screen.getByRole('link', { name: /south korea/i });
    expect(southKoreaBorder).toBeInTheDocument();
  });

  test('renders fallback message when borders are unavailable', () => {
    mockedUseDetail.mockReturnValue({
      ...baseMock,
      country: { ...baseMock.country, borders: [], borderNames: null },
    });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const noBorderMessage = screen.getByText(/no border countries/i);
    expect(noBorderMessage).toBeInTheDocument();
  });

  test('renders population number separated with commas', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const population = screen.getByText('125,800,000');
    expect(population).toBeInTheDocument();
  });

  test('renders top level domains separated with commas', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const tld = screen.getByText('.jp, .みんな');
    expect(tld).toBeInTheDocument();
  });

  test('renders currencies separated with commas', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const currencies = screen.getByText('Japanese yen, US Dollar');
    expect(currencies).toBeInTheDocument();
  });

  test('renders languages separated with commas', () => {
    mockedUseDetail.mockReturnValue({ ...baseMock });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const languages = screen.getByText('English, Japanese');
    expect(languages).toBeInTheDocument();
  });
});
