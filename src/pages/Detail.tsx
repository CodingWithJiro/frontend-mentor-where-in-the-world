import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Fail from '../components/Fail';
import useDetail from '../hooks/useDetail';

const Detail = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { country, status } = useDetail(code);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (status === 'loading') return <Loading page="detail" />;
  if (status === 'fail') return <Fail page="detail" />;

  if (country) {
    return (
      <section className="mx-auto w-full max-w-105 px-3 pt-4 font-(family-name:--FF) md:max-w-7xl md:px-0 md:pt-8">
        <button
          type="button"
          onClick={handleBack}
          className="mb-16 flex cursor-pointer items-center justify-center gap-1.5 rounded-xs bg-(--COLOR-BG-CARD-PRIMARY) px-5.75 py-1.25 text-sm font-light text-(--COLOR-TEXT-PRIMARY) shadow-(--SHADOW-CARD-PRIMARY-DARK) select-none hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) focus-visible:outline-1 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-[color,background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out md:mb-17.5 md:gap-2.5 md:rounded-[5px] md:px-8.5 md:py-2.25 md:text-[1rem] md:font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="22px"
            fill="currentColor"
          >
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
          </svg>
          <span>Back</span>
        </button>

        <div className="flex flex-col gap-10.75 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out md:flex-row md:items-center md:gap-[clamp(2rem,-4.2857rem+13.0952vw,7.5rem)]">
          <div className="aspect-4/3 w-full overflow-hidden md:flex md:max-w-[clamp(25rem,13.5714rem+23.8095vw,35rem)] md:items-center md:justify-center">
            <img
              src={country.flagImage}
              alt={country.flagAlt}
              className="h-full w-full object-contain shadow-(--SHADOW-CARD-PRIMARY) md:h-auto"
            />
          </div>

          <div className="flex-1">
            <h2 className="mb-5.5 text-[clamp(1.35rem,0.6643rem+1.4286vw,1.95rem)] font-extrabold md:mb-6">
              {country.name}
            </h2>

            <div className="mb-10 flex flex-col gap-10.75 text-[clamp(0.875rem,0.7321rem,0.2976vw,1rem)] font-light md:mb-[clamp(2rem,-0.7143rem+5.6548vw,4.375rem)] md:flex-row md:gap-[clamp(0.5rem,-5.5rem+12.5vw,5.75rem)]">
              <div className="flex flex-col gap-3 md:w-full md:max-w-65 md:gap-2">
                <p>
                  <span className="font-semibold">Native Name:</span>{' '}
                  {country.nativeName}
                </p>

                <p>
                  <span className="font-semibold">Population:</span>{' '}
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Region:</span>{' '}
                  {country.region}
                </p>

                <p>
                  <span className="font-semibold">Sub Region:</span>{' '}
                  {country.subregion}
                </p>

                <p>
                  <span className="font-semibold">Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>

              <div className="flex flex-col gap-3 md:w-full md:max-w-65 md:gap-2">
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{' '}
                  {country.tld.join(', ')}
                </p>

                <p>
                  <span className="font-semibold">Currencies:</span>{' '}
                  {country.currencies
                    .map((c) => c[0].toUpperCase() + c.slice(1))
                    .join(', ')}
                </p>

                <p>
                  <span className="font-semibold">Languages:</span>{' '}
                  {country.languages.sort().join(', ')}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="w-full max-w-32 font-semibold">Border Countries:</p>
              {country.borderNames && (
                <ul className="flex flex-wrap gap-2.5">
                  {country.borderNames.map((border) => (
                    <Link
                      to={`/country/${border.cca3}`}
                      className="focus-visible:outline-1 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY)"
                    >
                      <li
                        key={border.cca3}
                        className="w-24 bg-(--COLOR-BG-CARD-PRIMARY) py-1.25 text-center text-[0.75rem] font-light text-(--COLOR-TEXT-PRIMARY) shadow-(--SHADOW-CARD-PRIMARY) select-none hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out md:text-sm"
                      >
                        {border.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
              {!country.borderNames && (
                <p className="text-sm font-light">No border countries</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Detail;
