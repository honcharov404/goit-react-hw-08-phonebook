import { createSlice } from '@reduxjs/toolkit';
import { getAuth, logOut, signIn, signUp } from './operations';

const initialState = {
  user: null,
  isLoadingUser: false,
  error: '',
};

export const userSlice = createSlice({
  // Ім'я слайсу
  name: 'user',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів(функцій, що будуть опрацьовувати наш екшн)
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoadingUser = true;
      state.error = '';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoadingUser = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoadingUser = false;
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.isLoadingUser = true;
      state.error = '';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload; // { user: {name: "", email: ""}, token: {} }
      state.isLoadingUser = false;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoadingUser = false;
    });

    builder.addCase(getAuth.pending, (state, action) => {
      state.isLoadingUser = true;
      state.error = '';
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.user = { user: action.payload }; // {name: "", email: ""}
      state.isLoadingUser = false;
    });
    builder.addCase(getAuth.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoadingUser = false;
    });

    builder.addCase(logOut.pending, (state, action) => {
      state.isLoadingUser = true;
      state.error = '';
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = null;
      state.isLoadingUser = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoadingUser = false;
    });
  },
});

export const userReducer = userSlice.reducer;
