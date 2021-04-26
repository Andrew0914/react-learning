import UserItem from "./UserItem";
import Card from "../ui/Card";
import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <UserItem age={user.age} name={user.username} key={`user-${index}`} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
