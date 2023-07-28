import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'reduxe/auth/auth-operation';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/theme';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { selectIsRefreshing } from 'reduxe/auth/auth-selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ROUTER } from './Routes/Routes';

const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
const NotFound = lazy(() => import('./Pages/NotFound'));

export const App = () => {
  
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path={ROUTER.HOME} element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path={ROUTER.REGISTER}
              element={
                <PublicRoute
                  component={<RegisterPage />}
                  redirectTo={ROUTER.CONTACTS}
                />
              }
            />
            <Route
              path={ROUTER.LOGIN}
              element={
                <PublicRoute
                  component={<LoginPage />}
                  redirectTo={ROUTER.CONTACTS}
                />
              }
            />
            <Route
              path={ROUTER.CONTACTS}
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo={ROUTER.LOGIN}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </ChakraProvider>
  );
};

// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
