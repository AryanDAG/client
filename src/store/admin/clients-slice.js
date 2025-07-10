import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  clientList: [],
};

// Add new client
export const addNewClient = createAsyncThunk(
  "clients/addNewClient",
  async (formData) => {
    const result = await axios.post(
      "https://server-8gnx.onrender.com/clients", // POST /clients
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

// Fetch all clients
export const fetchAllClients = createAsyncThunk(
  "clients/fetchAllClients",
  async () => {
    const result = await axios.get("https://server-8gnx.onrender.com/clients"); // GET /clients
    return result?.data;
  }
);

// Edit client
export const editClient = createAsyncThunk(
  "clients/editClient",
  async ({ id, formData }) => {
    const result = await axios.put(
      `https://server-8gnx.onrender.com/clients/${id}`, // PUT /clients/:id
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

// Delete client
export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (id) => {
    const result = await axios.delete(`https://server-8gnx.onrender.com/clients/${id}`); // DELETE /clients/:id
    return result?.data;
  }
);

const AdminClientsSlice = createSlice({
  name: "adminClients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllClients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.clientList = action.payload.data;
      })
      .addCase(fetchAllClients.rejected, (state) => {
        state.isLoading = false;
        state.clientList = [];
      });
  },
});

export default AdminClientsSlice.reducer;
