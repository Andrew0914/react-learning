import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIstouched, setEmailIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputClasses =
    !nameIsValid && nameIsTouched ? "form-control invalid" : "form-control";

  const emailIsvalid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  const emailInputClasses =
    !emailIsvalid && emailIstouched ? "form-control invalid" : "form-control";

  const nameInputBlurHandler = () => {
    setNameIsTouched(true);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const formIsVavlid = nameIsValid && emailIsvalid;

  const sutmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);
    if (!formIsVavlid) return;
    console.log({ name, email });
    setName("");
    setNameIsTouched(false);
    setEmail("");
    setEmailIsTouched(false);
  };

  return (
    <form onSubmit={sutmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {!nameIsValid && nameIsTouched && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {!emailIsvalid && emailIstouched && (
          <p className="error-text">Email must not be a valid email adress</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsVavlid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
