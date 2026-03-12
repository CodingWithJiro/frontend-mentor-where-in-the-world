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
};

export type FormattedCountryListData = {
  flagImage: string;
  flagAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};
