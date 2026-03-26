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
      <section>
        <button type="button" onClick={handleBack}>
          Back
        </button>

        <div>
          <img src={country.flagImage} alt={country.flagAlt} />

          <div>
            <h2>Name: {country.name}</h2>

            <div>
              <div>
                <p>
                  <span>Native name:</span> {country.nativeName}
                </p>

                <p>
                  <span>Population:</span> {country.population.toLocaleString()}
                </p>

                <p>
                  <span>Region:</span> {country.region}
                </p>

                <p>
                  <span>Sub Region:</span> {country.subregion}
                </p>

                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>

              <div>
                <p>
                  <span>Top Level Domain:</span> {country.tld.join(', ')}
                </p>

                <p>
                  <span>Currencies:</span> {country.currencies.join(', ')}
                </p>

                <p>
                  <span>Languages:</span> {country.languages.join(', ')}
                </p>
              </div>
            </div>

            <div>
              <p>Border Countries:</p>
              {country.borderNames && (
                <ul>
                  {country.borderNames.map((border) => (
                    <Link to={`/country/${border.cca3}`}>
                      <li key={border.cca3}>{border.name}</li>
                    </Link>
                  ))}
                </ul>
              )}
              {!country.borderNames && <p>No border countries</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Detail;
