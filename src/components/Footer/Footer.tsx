import React from "react";
import FooterCategories from "../FooterCategories/FooterCategories";
import FooterCopyrigth from "../FooterCopyrigth/FooterCopyrigth";
import styles from "./Footer.module.scss";

interface FooterProps {}

function Footer({}: FooterProps) {
  return <div className={styles.footer}>
    <FooterCategories />
    <FooterCopyrigth />
  </div>;
}

export default Footer;
