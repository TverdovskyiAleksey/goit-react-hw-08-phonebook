import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  //   component: Component,
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const iisLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = iisLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
