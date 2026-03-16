import type { FormattedCountryListData } from '../types/country';

type CountryCardProps = FormattedCountryListData;

const CountryCard = ({
  flagImage,
  flagAlt,
  name,
  population,
  region,
  capital,
}: CountryCardProps) => {
  return (
    <a href="#">
      <div className="h-40">
        <img
          src={flagImage}
          alt={flagAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-6 pt-6.5 pb-11 font-(family-name:--FF) text-sm font-light motion-safe:transition-colors">
        <h2 className="mb-[0.9rem] text-[1.1rem] font-extrabold">{name}</h2>

        <p className="mb-1">
          <span className="font-semibold">Population:</span>{' '}
          {population.toLocaleString()}
        </p>

        <p className="mb-1">
          <span className="font-semibold">Region:</span> {region}
        </p>

        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
