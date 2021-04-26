import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";
import { useState } from "react";
import ErrorModal from "../ui/ErrorModal";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    return;
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const parsedAge = Number(age);

    if (username.trim().length <= 0)
      return showErrorMessage("The username must not be empty 📝");

    if (isNaN(parsedAge) || parsedAge <= 0)
      return showErrorMessage("The age must be a number higher than 0 🔢");

    props.onAddUser({
      username,
      age: parsedAge,
    });
    setAge("");
    setUsername("");
    setErrorMessage("");
  };

  const handleResume = () => {
    setErrorMessage("");
  };

  return (
    <div>
      {errorMessage && (
        <ErrorModal
          title="An error ocurred ❌"
          message={errorMessage}
          onResume={handleResume}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={onUsernameChange}
            value={username}
          />
          <label htmlFor="age">Age(in years)</label>
          <input id="age" type="number" onChange={onAgeChange} value={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
