import type { PropsWithChildren } from 'react';

type CountriesProps = PropsWithChildren;

const Countries = ({ children }: CountriesProps) => {
  return <ul>{children}</ul>;
};

export default Countries;
