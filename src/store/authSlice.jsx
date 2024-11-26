import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-toastify";

const apiUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/authentication`;

// login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiUrl}/login`, { email, password });
      const { accessToken } = res.data;
      const decodedToken = jwtDecode(accessToken);
      const user = { userId: decodedToken.userId, role: decodedToken.role,username: decodedToken.username};

      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      toast.success("Login Successful!");
      return { accessToken, user };
    } catch (error) {
      toast.error("Login failed. Please try again.");
      return rejectWithValue("Login failed");
    }
  }
);

// sign-up
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username,email, password, role }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiUrl}/sign-up`, { email, password,username, role });
      const { accessToken } = res.data;
      const decodedToken = jwtDecode(accessToken);
      const user = { userId: decodedToken.userId, role: decodedToken.role };

      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      toast.success("Registration Successful!");
      return { accessToken, user };
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      return rejectWithValue("Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
      toast.success("Logged out successfully!");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login actions
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Register actions
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
