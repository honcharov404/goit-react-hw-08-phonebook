import { createAsyncThunk } from '@reduxjs/toolkit';

import { addContact, deleteContact, getContacts } from '../../services/api';

export const contactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();

      return contacts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const newContact = await addContact(contact);

      return newContact;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletetedContact = await deleteContact(contactId);

      return deletetedContact;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
