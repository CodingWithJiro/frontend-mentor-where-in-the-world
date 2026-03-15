import CountryCard from './CountryCard';
import type { FormattedCountryListData } from '../types/country';

type CountryListProps = {
  countryList: FormattedCountryListData[];
};

const CountryList = ({ countryList }: CountryListProps) => {
  return countryList.map((country) => (
    <li key={country.countryCode}>
      <CountryCard {...country} />
    </li>
  ));
};

export default CountryList;
