import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const nameInputRef = useRef();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const sutmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    if (name.trim() !== "") {
      console.log("From state:", name);
      console.log("From ref:", nameInputRef.current.value);

      // Reset
      setName("");
      // nameInputRef.current.value = ""; // bad practice ❌
      setNameIsValid(false);
      setNameIsTouched(false);
    } else {
      setNameIsValid(false);
    }
  };

  const nameInputClasses =
    !nameIsValid && nameIsTouched ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={sutmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={name}
          onChange={nameChangeHandler}
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
