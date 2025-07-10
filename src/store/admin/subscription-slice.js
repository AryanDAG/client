import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  subscriptionList: [],
};

export const fetchAllSubscriptions = createAsyncThunk(
  "subscriptions/fetchAllSubscriptions",
  async () => {
    const result = await axios.get("http://localhost:5000/subscriptions");
    return result?.data;
  }
);

const subscriptionSlice = createSlice({
  name: "adminSubscriptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSubscriptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllSubscriptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subscriptionList = action.payload;
      })
      .addCase(fetchAllSubscriptions.rejected, (state) => {
        state.isLoading = false;
        state.subscriptionList = [];
      });
  },
});

export default subscriptionSlice.reducer;
