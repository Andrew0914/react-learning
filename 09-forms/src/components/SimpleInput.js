import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameInput = useInput((name) => name.trim() !== "");
  const emailInput = useInput((email) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  );

  const nameInputClasses = nameInput.hasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInput.hasError
    ? "form-control invalid"
    : "form-control";

  const formIsVavlid = !nameInput.hasError && !emailInput.hasError;

  const sutmitHandler = (event) => {
    event.preventDefault();
    if (!formIsVavlid) return;
    console.log({ name: nameInput.value, email: emailInput.value });
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={sutmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput.value}
          onChange={nameInput.onChangeHandler}
          onBlur={nameInput.onBlurHandler}
        />
        {!nameInput.isValid && nameInput.isTouched && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={emailInput.value}
          onChange={emailInput.onChangeHandler}
          onBlur={emailInput.onBlurHandler}
        />
        {!emailInput.isValid && emailInput.isTouched && (
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
