import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import { Suspense } from 'react';

import Header from 'components/Header/Header.jsx';
import Container from './container.jsx';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
