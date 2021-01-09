import React from "react";
import styles from "./Topmenu.module.scss";

function Topmenu({}) {
  return (
    <div className={styles.topbar}>
      <div className="container">
        <ul className={styles.topbar__menu}>
          <li className={styles.topbar__menu_item}>Sign in</li>
          <li className={styles.topbar__menu_item}>My account</li>
          <li className={styles.topbar__menu_item}>Order status</li>
          <li className={styles.topbar__menu_item}>Help</li>
        </ul>
      </div>
    </div>
  );
}

export default Topmenu;
