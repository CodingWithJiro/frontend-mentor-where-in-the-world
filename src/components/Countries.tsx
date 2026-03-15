import type { PropsWithChildren } from 'react';

type CountriesProps = PropsWithChildren;

const Countries = ({ children }: CountriesProps) => {
  return (
    <ul className="grid grid-cols-1 justify-items-center gap-y-10">
      {children}
    </ul>
  );
};

export default Countries;
