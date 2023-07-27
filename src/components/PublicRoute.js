
// import { useSelector } from 'react-redux';
// import { Navigate, Route } from 'react-router-dom';
// import { selectIsLoggedIn } from 'reduxe/auth/auth-selectors';



// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//     const isLoggedIn = useSelector(selectIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Navigate to={redirectTo} /> : children}
//     </Route>
//   );
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'reduxe/auth/auth-selectors';


export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};