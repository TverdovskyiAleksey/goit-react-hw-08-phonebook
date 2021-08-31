import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  children,
  ...routeProps
}) {
  const iisLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {iisLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
