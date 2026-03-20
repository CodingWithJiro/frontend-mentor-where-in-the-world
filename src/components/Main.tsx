import type { PropsWithChildren } from 'react';

type MainProps = PropsWithChildren;

const Main = ({ children }: MainProps) => {
  return <main className="px-4 pb-10">{children}</main>;
};

export default Main;
