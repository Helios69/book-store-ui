import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import HeaderCart from "../HeaderCart/HeaderCart";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Header.module.scss";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Link to="/" className={styles.header__logo}>
          <img src={Logo} alt="" />
        </Link>
        <Searchbar />
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
