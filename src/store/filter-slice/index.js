import { createSlice } from '@reduxjs/toolkit';

import fetchInitData from 'services/init-data';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: 2,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const handleSetFilter = (status) => (dispatch) => {
  dispatch(setFilter(status));
};

export const selectFilter = (state) => state.filter.filter;

export default filterSlice.reducer;
