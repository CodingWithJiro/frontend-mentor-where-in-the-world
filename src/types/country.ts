export type CountryListData = {
  flags: {
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital?: string[];
  cca3: string;
};

export type FormattedCountryListData = {
  flagImage: string;
  flagAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  countryCode: string;
};

export type CountryDetails = {
  name: {
    common: string;
    nativeName: Record<
      string,
      {
        common: string;
      }
    >;
  };
  subregion: string;
  tld: string[];
  currencies: Record<
    string,
    {
      name: string;
    }
  >;
  languages: Record<string, string>;
  borders: string[];
  flags: {
    svg: string;
    alt?: string;
  };
  population: number;
  region: string;
  capital: string[];
};

export type FormattedCountryDetails = {
  name: string;
  nativeName: string;
  subregion: string;
  tld: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
  flagImage: string;
  flagAlt: string;
  population: number;
  region: string;
  capital: string;
  borderNames: FormattedCountryBorders[] | null;
};

export type Status = 'loading' | 'success' | 'fail';

export type CountryBorders = {
  name: {
    common: string;
  };
  cca3: string;
};

export type FormattedCountryBorders = {
  name: string;
  cca3: string;
};
