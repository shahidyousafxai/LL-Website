import { createSlice } from '@reduxjs/toolkit';

interface CampusDetailsState {
  unitDetails: { [key: string]: any };
}

const initialState: CampusDetailsState = {
  unitDetails: {} as any,
};

export const campusDetailsSlice = createSlice({
  name: 'campusDetails',
  initialState,
  reducers: {
    campusDetailsAction: (state, action) => {
      state.unitDetails = action.payload;
    },
  },
});

export const { campusDetailsAction } = campusDetailsSlice.actions;
export default campusDetailsSlice.reducer;
