import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  projectList: [],
};

// ADD NEW PROJECT
export const addNewProject = createAsyncThunk(
  "/projects/addNewProject",
  async (formData) => {
    const result = await axios.post(
      "https://server-8gnx.onrender.com/projects",
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

// FETCH ALL PROJECTS
export const fetchAllProjects = createAsyncThunk(
  "/projects/fetchAllProjects",
  async () => {
    const result = await axios.get("https://server-8gnx.onrender.com/projects");
    return result?.data;
  }
);

// EDIT PROJECT
export const editProject = createAsyncThunk(
  "/projects/editProject",
  async ({ id, formData }) => {
    const result = await axios.put(
      `https://server-8gnx.onrender.com/projects/${id}`,
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

// DELETE PROJECT
export const deleteProject = createAsyncThunk(
  "/projects/deleteProject",
  async (id) => {
    const result = await axios.delete(`https://server-8gnx.onrender.com/projects/${id}`);
    return result?.data;
  }
);

// SLICE
const AdminProjectsSlice = createSlice({
  name: "adminProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectList = action.payload.data;
      })
      .addCase(fetchAllProjects.rejected, (state) => {
        state.isLoading = false;
        state.projectList = [];
      });
  },
});

export default AdminProjectsSlice.reducer;
