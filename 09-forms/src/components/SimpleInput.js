import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputClasses =
    !nameIsValid && nameIsTouched ? "form-control invalid" : "form-control";

  const nameInputBlurHandler = () => {
    setNameIsTouched(true);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const sutmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    if (!nameIsValid) return;

    console.log(name);
    setName("");
    setNameIsTouched(false);
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
      <div className="form-actions">
        <button type="sub">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
