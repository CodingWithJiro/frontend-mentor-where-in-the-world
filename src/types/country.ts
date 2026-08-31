export type CountryListData = {
  names: {
    common: string;
  };
  codes: {
    alpha_3: string;
  };
  capitals?: {
    name: string;
  }[];
  flag: {
    description: string;
    url_svg: string;
  };
  population: number;
  region: string;
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
  names: {
    common: string;
    native: Record<
      string,
      {
        common: string;
        official: string;
      }
    >;
  };
  subregion: string;
  tlds: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    bcp47: string;
    iso639_1: string;
    iso639_2b: string;
    iso639_2t: string;
    iso639_3: string;
    name: string;
    native_name: string;
  }[];
  borders: string[];
  flag: {
    description: string;
    url_svg: string;
  };
  population: number;
  region: string;
  capitals: {
    name: string;
  }[];
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
  names: {
    common: string;
  };
  codes: {
    alpha_3: string;
  };
};

export type FormattedCountryBorders = {
  name: string;
  cca3: string;
};

export type Page = 'home' | 'detail';
