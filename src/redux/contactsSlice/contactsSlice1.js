import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoadingContacts: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.contacts.isLoadingContacts = true;
        state.contacts.error = '';
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.error = action.payload.message;
      })

      .addCase(addContact.pending, (state, action) => {
        state.contacts.isLoadingContacts = true;
        state.contacts.error = '';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.error = action.payload.message;
      })

      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.isLoadingContacts = true;
        state.contacts.error = '';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoadingContacts = false;
        state.contacts.error = action.payload.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
