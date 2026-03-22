import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import SkipLink from '../components/SkipLink';

const MainLayout = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
