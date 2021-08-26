import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  getFilter,
  getLoading,
  getVisibleContacts,
};
