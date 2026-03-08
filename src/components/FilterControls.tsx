import type { PropsWithChildren } from 'react';

type FilterControlsProps = PropsWithChildren;

const FilterControls = ({ children }: FilterControlsProps) => {
  return <header className="flex flex-col">{children}</header>;
};

export default FilterControls;
