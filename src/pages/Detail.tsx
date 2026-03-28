import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountryDetails } from '../services/countriesApi';
import type { FormattedCountryDetails, Status } from '../types/country';

const Detail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<FormattedCountryDetails | null>(null);
  const [status, setStatus] = useState<Status>('loading');
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) return;

    const loadDetails = async () => {
      setStatus('loading');

      try {
        const data = await fetchCountryDetails(code);
        setCountry(data);
        setStatus('success');
      } catch {
        setStatus('fail');
      }
    };

    loadDetails();
  }, [code]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (status === 'loading') return <p>Loading country details...</p>;
  if (status === 'fail') return <p>Fetching country details failed.</p>;

  if (country) {
    return (
      <section className="mx-auto w-full max-w-105 px-3 pt-4 font-(family-name:--FF)">
        <button
          type="button"
          onClick={handleBack}
          className="mb-16 flex cursor-pointer items-center justify-center gap-1.5 rounded-xs bg-(--COLOR-BG-CARD-PRIMARY) px-5.75 py-1.25 font-light text-(--COLOR-TEXT-PRIMARY) shadow-(--SHADOW-CARD-PRIMARY-DARK) select-none hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) focus-visible:outline-1 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-[color,background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out"
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
          <span className="text-sm">Back</span>
        </button>

        <div className="flex flex-col gap-10.75 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out">
          <img
            src={country.flagImage}
            alt={country.flagAlt}
            className="shadow-(--SHADOW-CARD-PRIMARY)"
          />

          <div>
            <h2 className="mb-5.5 text-[1.35rem] font-extrabold">
              {country.name}
            </h2>

            <div className="mb-10 flex flex-col gap-10.75 text-sm font-light">
              <div className="flex flex-col gap-3">
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

              <div className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-4">
              <p className="font-semibold">Border Countries:</p>
              {country.borderNames && (
                <ul className="flex flex-wrap gap-2.5">
                  {country.borderNames.map((border) => (
                    <Link
                      to={`/country/${border.cca3}`}
                      className="focus-visible:outline-1 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY)"
                    >
                      <li
                        key={border.cca3}
                        className="w-24 bg-(--COLOR-BG-CARD-PRIMARY) py-1.25 text-center text-[0.75rem] font-light text-(--COLOR-TEXT-PRIMARY) shadow-(--SHADOW-CARD-PRIMARY) select-none hover:bg-(--COLOR-BG-CARD-PRIMARY-HOVER) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out"
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
