import type { PropsWithChildren } from 'react';

type FilterControlsProps = PropsWithChildren;

const FilterControls = ({ children }: FilterControlsProps) => {
  return (
    <header className="flex flex-col gap-10 md:mx-auto md:max-w-7xl md:flex-row md:justify-between">
      {children}
    </header>
  );
};

export default FilterControls;
