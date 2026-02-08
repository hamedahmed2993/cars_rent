import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: { value: 0 },
  reducers: {
    updateSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { updateSearchField } = filtersSlice.actions;
