import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (email) => email.includes("@");

const BasicForm = (props) => {
  const nameInput = useInput(isNotEmpty);
  const lastNameInput = useInput(isNotEmpty);
  const emailInput = useInput(isEmail);

  const formClass = (hasError) =>
    hasError ? "form-control invalid" : "form-control";

  const formIsVavlid =
    !nameInput.hasError && !emailInput.hasError && !lastNameInput.hasError;

  const submitHanlder = (event) => {
    event.preventDefault();
    nameInput.touch()
    lastNameInput.touch()
    emailInput.touch()
    if (!formIsVavlid) return;
    console.log({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
    });
    nameInput.reset();
    emailInput.reset();
    lastNameInput.reset();
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="control-group">
        <div className={`${formClass(nameInput.hasError)}`}>
          <label htmlFor="name">First Name</label>
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
        <div className={`${formClass(nameInput.hasError)}`}>
          <label htmlFor="lasName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameInput.value}
            onChange={lastNameInput.onChangeHandler}
            onBlur={lastNameInput.onBlurHandler}
          />
          {!lastNameInput.isValid && lastNameInput.isTouched && (
            <p className="error-text">Las name must not be empty</p>
          )}
        </div>
      </div>
      <div className={`${formClass(nameInput.hasError)}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
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

export default BasicForm;
