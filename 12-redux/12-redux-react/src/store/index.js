import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// los dispatch si se usan slices ahora son con estas acciones
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
