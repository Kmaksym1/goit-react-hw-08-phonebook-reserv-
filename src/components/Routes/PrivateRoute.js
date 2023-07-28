import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTER } from './Routes';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'reduxe/auth/auth-selectors';

export default function PrivateRoute({
  component,
  redirectTo = ROUTER.HOME
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}
