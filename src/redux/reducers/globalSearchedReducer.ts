import { createSlice } from '@reduxjs/toolkit';

interface globalSearcedListing {
  globalSearcedListing: any[];
}

const initialState: globalSearcedListing = {
  globalSearcedListing: [],
};

export const globalSearchedSlice = createSlice({
  name: 'globalSearcedListing',
  initialState,
  reducers: {
    globalSearchedAction: (state, action) => {
      state.globalSearcedListing = action.payload;
    },
  },
});

export const { globalSearchedAction } = globalSearchedSlice.actions;

export default globalSearchedSlice.reducer;
