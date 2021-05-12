import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true)
  const nameInputRef = useRef();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const sutmitHandler = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      console.log("From state:", name);
      console.log("From ref:", nameInputRef.current.value);

      // Reset
      setName("");
      // nameInputRef.current.value = ""; // bad practice ❌
      setNameIsValid(true)
    } else {
      setNameIsValid(false)
    }
  };

  const nameInputClasses = nameIsValid ? "form-control" : "form-control invalid"
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
        {!nameIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="sub">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
