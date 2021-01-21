import React from "react";
import { ReactComponent as CartSVG } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as StarSVG } from "../../assets/svg/star.svg";
import styles from "./HeaderCart.module.scss";

interface HeaderCartProps {}

function HeaderCart({}: HeaderCartProps) {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__left_side}>
        <div className={styles.cart__count}>
          <CartSVG />
          <span className={styles.cart__count_text}>
            Your cart<span>({2} items)</span>
          </span>
        </div>
        <div className={styles.cart__checkout}>
          <span className={styles.cart__checkout_price}>$125.0</span>
          <button className={styles.cart__checkout_button}>Checkout</button>
        </div>
      </div>
      <div className={styles.cart__right_side}>
        <div className={styles.wish__logo}>
          <StarSVG />
        </div>
        <span className={styles.wish__text}>
          Wish list
          <span className={styles.wish__count}>20</span>
        </span>
      </div>
    </div>
  );
}

export default HeaderCart;
