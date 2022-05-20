import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.headercontainer}>
      <h1>Pet Shelter</h1>
      <Link to={props.link}>
        {props.link === "/" ? "return home" : "add a new pet"}
      </Link>
    </div>
  );
};

export default Header;
