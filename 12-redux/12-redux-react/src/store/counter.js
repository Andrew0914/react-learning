import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// sin slices es importante crear copis nuevas del estado y no mutar el real
// con las toolkut si podemos mutar el estado directamente y ya las toolkit se arreglan de lo demas.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // los parametros extras siempre vendran en una propiedad "payload"
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
