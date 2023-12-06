import { createSlice } from '@reduxjs/toolkit';

interface CampusUnitState {
  campusUnitDetails: { [key: string]: any };
}

const initialState: CampusUnitState = {
  campusUnitDetails: {} as any,
};

export const campusUnitDetailsSlice = createSlice({
  name: 'campusUnitDetails',
  initialState,
  reducers: {
    campusUnitDetailsAction: (state, action) => {
      state.campusUnitDetails = action.payload;
    },
  },
});

export const { campusUnitDetailsAction } = campusUnitDetailsSlice.actions;
export default campusUnitDetailsSlice.reducer;
