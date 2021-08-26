import Container from './Components/Container';
import Form from './Components/Form';
import Contacts from './Components/Contacts';
import Filter from './Components/Filter';
import AppBar from './Components/AppBar';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from './redux/contacts';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <AppBar />
      {/* <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts /> */}
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegisterView} />
      </Switch>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
// export default App;
