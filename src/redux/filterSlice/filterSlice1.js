import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      // console.log(action);
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
