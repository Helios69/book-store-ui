import React from "react";
import styles from "./component.module.scss";

interface ComponentProps {}

function Component({}: ComponentProps) {
  return <div className={styles.component}></div>;
}

export default Component;
