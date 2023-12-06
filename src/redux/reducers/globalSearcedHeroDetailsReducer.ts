import { createSlice } from '@reduxjs/toolkit';

interface GlobalSearchedHeroDetailsState {
  globalSearchedHeroDetails: { [key: string]: any };
}

const initialState: GlobalSearchedHeroDetailsState = {
  globalSearchedHeroDetails: {},
};

export const globalSearchedHeroDetailsSlice = createSlice({
  name: 'globalSearchedHeroDetails',
  initialState,
  reducers: {
    globalSearchedHeroDetailsAction: (state, action) => {
      state.globalSearchedHeroDetails = action.payload;
    },
  },
});

export const { globalSearchedHeroDetailsAction } =
  globalSearchedHeroDetailsSlice.actions;

export default globalSearchedHeroDetailsSlice.reducer;
