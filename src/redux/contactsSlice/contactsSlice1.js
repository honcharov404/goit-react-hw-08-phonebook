import { createSlice } from '@reduxjs/toolkit';
import {
  addContactRequest,
  contactsRequest,
  deleteContactRequest,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsRequest.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(contactsRequest.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(contactsRequest.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
      })

      .addCase(addContactRequest.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContactRequest.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
      })

      .addCase(deleteContactRequest.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteContactRequest.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
      });
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
