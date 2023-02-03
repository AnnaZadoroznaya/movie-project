import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

// export const fetchMovie = createAsyncThunk(
//   'getOneMovie/fetchMovieStatus',
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(`https://63b9e6e856043ab3c791d2c9.mockapi.io/movies/${id}`);
//       if (!response.ok) {
//         throw new Error('Server Error');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     };
//   }
// );
//     const { data } = await axios.get(`https://63b9e6e856043ab3c791d2c9.mockapi.io/movies/${id}`);
//     return data;
//   });

// const initialState = {
//   film: (null),
//   status: null,
//   error: null,
// };

// export const getOneMoviesSlice = createSlice({
//   name: 'getOneMovie',
//   initialState,
//   reducers: {
//     setFilm(state, action) {
//       state.film = action.payload;
//     }
//   },
//   extraReducers: {
//     [fetchMovie.pending]: (state) => {
//       state.status = 'loading';
//       state.error = null;
//     },
//     [fetchMovie.fulfilled]: (state, action) => {
//       state.status = 'resolved';
//       state.film = action.payload;
//     },
//     [fetchMovie.rejected]: (state, action) => {
//       state.status = 'rejected';
//       state.error = action.payload;
//     },
//   },
// });


// export const { setFilm } = getOneMoviesSlice.actions;
// export default getOneMoviesSlice.reducer;