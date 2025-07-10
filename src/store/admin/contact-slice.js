import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const result = await axios.get("https://server-8gnx.onrender.com/contacts");
    return result?.data;
  }
);

const contactSlice = createSlice({
  name: "adminContact",
  initialState: {
    isLoading: false,
    contactList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactList = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state) => {
        state.isLoading = false;
        state.contactList = [];
      });
  },
});

export default contactSlice.reducer;
