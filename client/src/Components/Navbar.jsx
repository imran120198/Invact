import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <Link style={{ textDecoration: "none", color: "gold" }} to="/">
          Movies
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "gold" }} to="/watchlist">
          WatchList
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
