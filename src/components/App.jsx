import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/theme';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from 'reduxe/auth/auth-operation';
// import { useEffect } from 'react';

import PrivateRoute from './PrivateRoute';
import { Loader } from './Loader/Loader';
import { PublicRoute } from './PublicRoute';
import { selectIsRefreshing } from 'reduxe/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
const NotFound = lazy(() => import('./Pages/NotFound'));

export const App = () => {
  // const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
      <ChakraProvider theme={theme}>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <PublicRoute
                    component={<RegisterPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
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
