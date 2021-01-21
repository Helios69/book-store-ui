import React from "react";
import { NavLink } from "react-router-dom";
import { mainCategoryRoutes as categories } from "../../routes";
import styles from "./CategoriesBar.module.scss";

interface CategoriesBarProps {}

function CategoriesBar({}: CategoriesBarProps) {
  return (
    <div className={styles.categories}>
      <div className="container">
        <div className={styles.categories__list}>
          {categories.map((category) => (
            <NavLink to={category.path} activeClassName={styles.active} className={styles.categories__item}>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
