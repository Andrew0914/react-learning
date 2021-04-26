import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const DUMMY_USERS = [
  { username: "Andrew", age: 27 },
  { username: "Dany", age: 39 },
];

function Users(props) {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default Users;
