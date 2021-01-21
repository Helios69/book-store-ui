import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsTabView.module.scss";

interface ProductsTabViewProps {}

function ProductsTabView({}: ProductsTabViewProps) {
  const [activePage, setActivePage] = useState<number>(1);

  const navigation_items = [
    {
      name: "Best Sellers",
      path: "bestsellers",
    },
    {
      name: "New Arrivals",
      path: "new",
    },
    {
      name: "Used Books",
      path: "used",
    },
    {
      name: "Special Offers",
      path: "special",
    },
  ];
  return (
    <div className={styles.tabview}>
      <ul className={styles.tabview__navigation}>
        {navigation_items.map((item, index) => (
          <li key={index} className={styles.tabview__navigation_item}>
            <NavLink activeClassName={styles.active} to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.tabview__content}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <Pagination
          totalPages={6}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}

export default ProductsTabView;
