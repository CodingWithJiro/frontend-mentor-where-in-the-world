import type { PropsWithChildren } from 'react';

type FilterControlsProps = PropsWithChildren;

const FilterControls = ({ children }: FilterControlsProps) => {
  return <header>{children}</header>;
};

export default FilterControls;
