import { createSlice } from "@reduxjs/toolkit";

const initialState = { filterSearch: null };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDataSearch(state, action) {
      state.filterSearch = action.payload;
    },
  },
});

export const { setDataSearch } = searchSlice.actions;
export default searchSlice.reducer;
