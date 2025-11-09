import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/services/axiosInstance";

export interface User {
  id?: number;
  email?: string;
  name?: string;
  [key: string]: any;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token:
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null,
  isAuthenticated: !!(
    typeof window !== "undefined" && localStorage.getItem("authToken")
  ),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") localStorage.removeItem("authToken");
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
