import React from "react";
import styles from "./FooterCopyrigth.module.scss";

interface FooterCopyrigthProps {}

function FooterCopyrigth({}: FooterCopyrigthProps) {
  return (
    <div className={styles.copyright}>
      <h6 className={styles.copyright__text}>
        Conditions of Use Privacy Notice © 2012-2013, Booksonline, Inc. or its
        affiliates
      </h6>
    </div>
  );
}

export default FooterCopyrigth;
