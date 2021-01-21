import React from "react";
import styles from "./ProductItem.module.scss";

interface ProductItemProps {}

function ProductItem({}: ProductItemProps) {
  return (
    <div className={styles.product}>
      <div className={styles.product__discount}>
        <span>30%</span>
        <span>Off</span>
      </div>
      <div className={styles.product__image}>
        <img src="https://eloquentjavascript.net/img/cover.jpg" alt="" />
      </div>
      <h3 className={styles.product__name}>Eloquent Javascript</h3>
      <span className={styles.product__price}>$50</span>
    </div>
  );
}

export default ProductItem;
