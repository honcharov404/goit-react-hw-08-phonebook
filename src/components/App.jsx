import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Loader from './Loader/Loader';

import { setFilter } from '../redux/filterSlice/filterSlice2';
import {
  addContactRequest,
  contactsRequest,
  deleteContactRequest,
} from '../redux/contactsSlice/operations';

import s from './App.module.css';

export const App = () => {
  const {
    items: contacts,
    isLoading,
    error,
  } = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsRequest());
  }, [dispatch]);

  const onAddContact = (name, phone) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactRequest({ name, phone }));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContactRequest(contactId.target.value));
  };

  const onSetFilter = e => {
    const filter = e.target.value;

    dispatch(setFilter(filter));
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  return (
    <div className={s.App}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} setFilter={onSetFilter} />
      {error && <p>Upss, Some error occured... {error}</p>}
      {!isLoading ? (
        <ContactList
          contacts={filterContacts()}
          deleteContact={onDeleteContact}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
