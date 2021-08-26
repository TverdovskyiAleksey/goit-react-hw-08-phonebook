import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
} from './contacts-action';

axios.defaults.baseURL = 'http://localhost:3000';

// eslint-disable-next-line no-unused-vars
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }

    // axios
    //   .post('/contacts', contact)
    //   .then(({ data }) => dispatch(addContactSuccess(data)))
    //   .catch(error => dispatch(addContactError(error)));
  };

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));

  // try {
  //   const { data } = await axios.delete(`/contacts/${id}`);
  //   dispatch(deleteContactSuccess(data));
  // } catch (error) {
  //   dispatch(deleteContactError(error));
  // }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
