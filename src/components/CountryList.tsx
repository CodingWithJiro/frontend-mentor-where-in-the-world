import CountryCard from './CountryCard';
import type { FormattedCountryListData } from '../types/country';

type CountryListProps = {
  countryList: FormattedCountryListData[];
};

const CountryList = ({ countryList }: CountryListProps) => {
  return countryList.map((country) => (
    <li
      key={country.countryCode}
      className="max-w-66 min-w-66 overflow-hidden rounded-sm bg-(--COLOR-BG-CARD-PRIMARY) shadow-(--SHADOW-CARD-PRIMARY) motion-safe:transition-[background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out"
    >
      <CountryCard {...country} />
    </li>
  ));
};

export default CountryList;
