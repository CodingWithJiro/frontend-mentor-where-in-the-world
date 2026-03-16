import type { PropsWithChildren } from 'react';

type CountriesProps = PropsWithChildren;

const Countries = ({ children }: CountriesProps) => {
  return (
    <ul className="mx-auto grid max-w-160 grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 sm:gap-y-18.5 lg:max-w-250 lg:grid-cols-3 xl:max-w-338 xl:grid-cols-4">
      {children}
    </ul>
  );
};

export default Countries;
