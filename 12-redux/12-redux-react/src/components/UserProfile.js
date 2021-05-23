import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { email, password } = useSelector((state) => ({
    email: state.auth.email,
    password: state.auth.password,
  }));
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </main>
  );
};

export default UserProfile;
