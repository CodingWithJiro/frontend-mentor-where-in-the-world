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
    <a href="https://www.youtube.com/" target="_blank">
      <img src={flagImage} alt={flagAlt} />
      <div>
        <h2>{name}</h2>

        <p>
          <span>Population:</span> <span>{population.toLocaleString()}</span>
        </p>

        <p>
          <span>Region:</span> {region}
        </p>

        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
