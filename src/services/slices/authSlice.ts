import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  contact: string;
  image: "string";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("authToken") || null,
  isAuthenticated: !!localStorage.getItem("authToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("authToken", token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") localStorage.removeItem("authToken");
    },
    updateProfileImage(state, action) {
      if (!state.user) return;
      state.user = { ...state.user, image: action?.payload || "" };
    },
  },
});

export const { logout, setCredentials, updateProfileImage } = authSlice.actions;
export default authSlice.reducer;
