import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <Text>MovieFlex</Text>
      </div>
      <Flex gap={5}>
        <Link style={{ textDecoration: "none", color: "gold" }} to="/">
          Movies
        </Link>
        <Link style={{ textDecoration: "none", color: "gold" }} to="/watchlist">
          WatchList
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
