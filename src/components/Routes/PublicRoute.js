
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'reduxe/auth/auth-selectors';
import { ROUTER } from './Routes';


export default function PublicRoute ({
  component, 
  redirectTo = ROUTER.HOME,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};


