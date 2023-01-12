import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>
        <Link to="/">Another Weather App</Link>
      </h1>
      <Link to="/favorites">favorites</Link>
    </>
  );
};

export default Header;
