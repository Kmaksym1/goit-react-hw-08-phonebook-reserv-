
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectIsRefreshing } from 'reduxe/auth/auth-selectors';

export default function PrivateRoute({
    component,
  redirectTo = '/',
//   ...routeProps
}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log("isLoggedIn", isLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
    
}