import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const nameInputRef = useRef();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const sutmitHandler = (event) => {
    event.prevenDefault();
    console.log("From state:", name);
    console.log("From ref:", nameInputRef.current.value);

    // Reset
    setName("");
    nameInputRef.current.value = ""; // bad practice ❌
  };

  return (
    <form onSubmit={sutmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button type="sub">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
