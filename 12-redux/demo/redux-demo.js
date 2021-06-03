const redux = require("redux");
// how redux works
// REDUCER
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };

  if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };

  return state;
};

// CENTRAL STORE
const store = redux.createStore(counterReducer);

// SUBSCRIBER
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log({ latestState });
};

store.subscribe(counterSubscriber);

// DISPATCH actions

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
// create STORE through reducer -> create SUBSCRIBER -> DISPATCH an actions that are defined in reducer
