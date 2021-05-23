import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, email: "", password: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;
      state.isLogged = true;
      state.email = email;
      state.password = password;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});

export default authSlice;
