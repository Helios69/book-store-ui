import React from "react";
import styles from "./CategoriesBar.module.scss";

interface CategoriesBarProps {}

function CategoriesBar({}: CategoriesBarProps) {
  const categories = [
    "Computers",
    "Cooking",
    "Education",
    "Fiction",
    "Health",
    "Mathematics",
    "Medical",
    "Reference",
    "Science",
  ];

  return (
    <div className={styles.categories}>
      <div className="container">
        <div className={styles.categories__list}>
          {
            categories.map(category => <a href='#' className={styles.categories__item}>{category}</a>)
          }
          
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
