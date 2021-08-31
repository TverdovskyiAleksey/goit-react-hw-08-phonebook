import Container from './Components/Container';
import AppBar from './Components/AppBar';
import { connect } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from './redux/contacts';
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Components/userMenu/PrivateRoute';
import PublicRoute from './Components/userMenu/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCarrentUser());
  }, [dispatch]);

  // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
// export default App;
