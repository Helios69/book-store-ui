import React from "react";
import styles from "./Topmenu.module.scss";

function Topmenu({}) {
  return (
    <div className={styles.topbar}>
      <div className="container">
        <ul className={styles.topbar__menu}>
          <li className={styles.topbar__menu_item}>
            <a href="#">Sign in</a>
          </li>
          <li className={styles.topbar__menu_item}>
            <a href="#">My account</a>
          </li>
          <li className={styles.topbar__menu_item}>
            <a href="#">Order status</a>
          </li>
          <li className={styles.topbar__menu_item}>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topmenu;
