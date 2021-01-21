import React from "react";
import styles from "./FooterCategories.module.scss";

interface FooterCategoriesProps {}

function FooterCategories({}: FooterCategoriesProps) {
  return (
    <div className={styles.categories}>
      <div className={`${styles.container} container`}>
        <div className={styles.categories__column}>
          <h4 className={styles.categories__column_name}>
            Biography & True Stories
          </h4>
          <ul className={styles.categories__list}>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
        <div className={styles.categories__column}>
          <h4 className={styles.categories__column_name}>
            Biography & True Stories
          </h4>
          <ul className={styles.categories__list}>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
        <div className={styles.categories__column}>
          <h4 className={styles.categories__column_name}>
            Biography & True Stories
          </h4>
          <ul className={styles.categories__list}>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
        <div className={styles.categories__column}>
          <h4 className={styles.categories__column_name}>
            Biography & True Stories
          </h4>
          <ul className={styles.categories__list}>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
            <li className={styles.categories__list_item}>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterCategories;
