import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice/contactsSlice1';
import { filterReducer } from './filterSlice/filterSlice1';
import { userReducer } from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer,
  },
});
