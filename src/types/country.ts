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
};

export type FormattedCountryDetails = {
  name: string;
  nativeName: string;
  subregion: string;
  tld: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
};
