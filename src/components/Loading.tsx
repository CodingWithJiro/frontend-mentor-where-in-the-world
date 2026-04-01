import type { Page } from '../types/country';

type LoadingProps = {
  page: Page;
};

const Loading = ({ page }: LoadingProps) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="flex items-center justify-center gap-3 pt-4 font-(family-name:--FF) text-sm text-(--COLOR-TEXT-PRIMARY) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out">
      <svg
        width="14"
        height="14"
        viewBox="0 0 50 50"
        className="arc-spinner relative"
        role="status"
        aria-label="Loading"
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.35} ${circumference}`}
        />
      </svg>
      <p className="blink font-light" role="status">
        {page === 'detail' && 'Loading country details...'}
        {page === 'home' && 'Loading countries...'}
      </p>
    </section>
  );
};

export default Loading;
