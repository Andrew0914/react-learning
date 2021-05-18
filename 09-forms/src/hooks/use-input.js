import { useState } from "react";
export default function useInput(validationFunction) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFunction(value);

  const hasError = !isValid && isTouched;

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isTouched,
    isValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
}
