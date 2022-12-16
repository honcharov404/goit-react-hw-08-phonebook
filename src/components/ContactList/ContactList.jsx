import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts?.length &&
        contacts.map(el => {
          const { name, phone, id } = el || {};
          return (
            <ContactListItem
              key={id}
              name={name}
              phone={phone}
              deleteContact={deleteContact}
              id={id}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
