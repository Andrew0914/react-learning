function UserItem(props) {
  return (
    <li>
      <div>
        {props.name} : {props.age} years old
      </div>
    </li>
  );
}

export default UserItem;
