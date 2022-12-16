import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import {
  addContact,
  deleteContact,
  getContacts,
} from 'redux/contactsSlice/operations';
import { setFilter } from 'redux/filterSlice/filterSlice1';

import s from './ContactsPage.module.css';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import UserMenu from 'components/UserMenu/UserMenu';
import { getAuth } from 'redux/userSlice/operations';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const {
    items: contacts,
    isLoadingContacts,
    error,
  } = useSelector(state => state.contacts.contacts);
  const user = useSelector(state => state.user.user);
  const filter = useSelector(state => state.filter.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddContact = (name, phone) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number: phone }));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId.target.value));
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

  useEffect(() => {
    dispatch(getAuth());
    dispatch(getContacts());
  }, [dispatch]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [user, navigate, token]);

  return (
    <>
      {token && <UserMenu />}
      <div>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <ContactForm addContact={onAddContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} setFilter={onSetFilter} />
        {error && <p>Upss, Some error occured... {error}</p>}
        {!isLoadingContacts ? (
          <ContactList
            contacts={filterContacts()}
            deleteContact={onDeleteContact}
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default WithAuthRedirect(ContactsPage, '/login');
