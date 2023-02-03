import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMoviesList(state, action) {
      state.moviesList = action.payload;
    }
  }
});


export const { setMoviesList } = moviesSlice.actions;
export default moviesSlice.reducer;