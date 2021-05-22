import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (actio.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (actio.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

