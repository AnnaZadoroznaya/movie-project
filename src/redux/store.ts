import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice';
// import getOneMoviesSlice from './slices/getOneMovieSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    // getOneMoviesSlice,
  },
});

