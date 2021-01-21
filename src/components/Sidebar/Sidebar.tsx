import React from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  const categories = [
    {
      categoryName: "Fiction & Literature",
      subcategories: ["Children", "Science Fiction", "Mystery"],
    },
    {
      categoryName: "Non - Fiction",
      subcategories: ["Children", "Science Fiction", "Crime", "Computer"],
    },
    {
      categoryName: "Other",
      subcategories: ["Crime", "Science Fiction", "Mystery"],
    },
  ];

  return (
    <div className={`card ${styles.sidebar}`}>
      <span className={styles.sidebar__title}>Categories</span>
      <a href="#" className={styles.sidebar__category_btn}>
        All
      </a>
      <ul className={styles.sidebar__categories_list}>
        {categories.map(({ categoryName, subcategories }) => {
          return (
            <li className={styles.sidebar__categories_item}>
              <a href="#" className={styles.sidebar__category_btn}>
                {categoryName}
              </a>
              <ul className={styles.sidebar__subcategories_list}>
                {subcategories.map((subcategory) => {
                  return (
                    <li className={styles.sidebar__subcategories_item}>
                      <a href="#">{subcategory}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
