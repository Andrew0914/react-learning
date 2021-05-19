import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialInputState;
};

export default function useInput(validationFunction) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const isValid = validationFunction(inputState.value);

  const hasError = !isValid && inputState.isTouched;

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const onChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const touch = () => {
    dispatch({ type: "TOUCH" });
  };

  return {
    value: inputState.value,
    isTouched: inputState.isTouched,
    isValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
    touch,
  };
}
