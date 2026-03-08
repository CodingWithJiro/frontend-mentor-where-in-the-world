import type { PropsWithChildren } from 'react';

type MainProps = PropsWithChildren;

const Main = ({ children }: MainProps) => {
  return <main className="px-4">{children}</main>;
};

export default Main;
