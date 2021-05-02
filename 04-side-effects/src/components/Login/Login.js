import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.value, isValid: action.value.includes("@") };
  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.value, isValid: action.value.length > 6 };
  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.length > 6 };
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authContext = useContext(AuthContext)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) =>
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });

  const validateEmailHandler = () => dispatchEmail({ type: "INPUT_BLUR" });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const passwordChangeHandler = (event) =>
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });

  const validatePasswordHandler = () =>
    dispatchPassword({ type: "INPUT_BLUR" });

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState, passwordState);
  };

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const [formIsValid, setFormIsValid] = useState(false);
  // Similar to a computed properties, when something change 🕹,
  //it cab reaction to state change like un properties or state variables 📝
  useEffect(() => {
    const timeOutIdentifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(timeOutIdentifier);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-Mail"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;