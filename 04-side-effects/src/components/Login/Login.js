import React, { useContext, useEffect, useReducer, useRef, useState } from "react";

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
  const emailRef = useRef()
  const passwordRed = useRef()
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid)
      authContext.onLogin(emailState, passwordState);

    if (!emailIsValid) emailRef.current.focus()
    if (!passwordIsValid) passwordRed.current.focus()
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id="email"
          type="email"
          label="E-Mail"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordRed}
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
