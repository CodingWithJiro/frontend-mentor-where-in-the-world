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
    tld: ['.jp'],
    currencies: ['Japanese yen'],
    languages: ['Japanese'],
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
});
