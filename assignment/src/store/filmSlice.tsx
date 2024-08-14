import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const filmSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.films = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default filmSlice.reducer;
